/**
 * DIY Teleprompter Documentation Site
 * Interactive functionality for guides, shopping lists, and navigation
 */

(function() {
    'use strict';

    // ============================================
    // Configuration
    // ============================================

    const SHOPPING_LISTS = {
        a: {
            name: 'Build A: Complete Housing',
            total: '$149-164',
            items: [
                { name: 'Desview T3 Teleprompter', price: '$98', note: 'Includes glass, remote, rings', link: 'https://www.amazon.com/dp/B09CD31WLN' },
                { name: 'Raspberry Pi Zero 2W', price: '$15', note: 'Check rpilocator.com for stock', link: 'https://www.adafruit.com/product/5291' },
                { name: 'HMTECH 7" IPS Display', price: '$38', note: '800x480, IPS panel', link: 'https://www.amazon.com/dp/B09MFNLRQQ' },
                { name: 'Mini-HDMI to HDMI Cable', price: '$6', note: '6 inch preferred', link: 'https://www.amazon.com/s?k=mini+hdmi+to+hdmi+cable' },
                { name: 'MicroSD Card 32GB', price: '$9', note: 'SanDisk recommended', link: 'https://www.amazon.com/s?k=microsd+32gb+sandisk' }
            ]
        },
        b: {
            name: 'Build B: Budget Housing',
            total: '$95-115',
            items: [
                { name: 'NEEWER X12B Teleprompter', price: '$90', note: 'Often on sale ~$80', link: 'https://www.amazon.com/s?k=neewer+x12b+teleprompter' },
                { name: 'Raspberry Pi Zero 2W', price: '$15', note: 'Check rpilocator.com for stock', link: 'https://www.adafruit.com/product/5291' },
                { name: 'HMTECH 7" IPS Display', price: '$38', note: '800x480, IPS panel', link: 'https://www.amazon.com/dp/B09MFNLRQQ' },
                { name: 'Mini-HDMI to HDMI Cable', price: '$6', note: '6 inch preferred', link: 'https://www.amazon.com/s?k=mini+hdmi+to+hdmi+cable' },
                { name: 'MicroSD Card 32GB', price: '$9', note: 'SanDisk recommended', link: 'https://www.amazon.com/s?k=microsd+32gb+sandisk' }
            ]
        },
        c: {
            name: 'Build C: 3D Printed',
            total: '$85-110',
            items: [
                { name: 'PLA/PETG Filament', price: '$18', note: '~200g needed, matte black', link: 'https://www.amazon.com/s?k=pla+filament+1kg' },
                { name: 'Beam Splitter Glass 8"', price: '$35', note: '70/30 optical glass', link: 'https://www.amazon.com/s?k=beam+splitter+glass+70+30' },
                { name: 'Raspberry Pi Zero 2W', price: '$15', note: 'Check rpilocator.com for stock', link: 'https://www.adafruit.com/product/5291' },
                { name: 'HMTECH 7" IPS Display', price: '$38', note: '800x480, IPS panel', link: 'https://www.amazon.com/dp/B09MFNLRQQ' },
                { name: 'Mini-HDMI to HDMI Cable', price: '$6', note: '6 inch preferred', link: 'https://www.amazon.com/s?k=mini+hdmi+to+hdmi+cable' },
                { name: 'MicroSD Card 32GB', price: '$9', note: 'SanDisk recommended', link: 'https://www.amazon.com/s?k=microsd+32gb+sandisk' },
                { name: 'Cold Shoe Adapters (2)', price: '$8', note: 'For mounting', link: 'https://www.amazon.com/s?k=cold+shoe+adapter' }
            ]
        },
        d: {
            name: 'Build D: Ultra Budget',
            total: '$70-95',
            items: [
                { name: 'PLA Filament', price: '$15', note: '~200g needed', link: 'https://www.amazon.com/s?k=pla+filament+1kg' },
                { name: 'Picture Frame Glass 8x10"', price: '$4', note: 'From dollar store', link: null },
                { name: 'Window Tint Film 35%', price: '$12', note: 'For DIY beam splitter', link: 'https://www.amazon.com/s?k=window+tint+film+35' },
                { name: 'Raspberry Pi Zero 2W', price: '$15', note: 'Check rpilocator.com for stock', link: 'https://www.adafruit.com/product/5291' },
                { name: 'HMTECH 7" IPS Display', price: '$38', note: '800x480, IPS panel', link: 'https://www.amazon.com/dp/B09MFNLRQQ' },
                { name: 'Mini-HDMI to HDMI Cable', price: '$6', note: '6 inch preferred', link: 'https://www.amazon.com/s?k=mini+hdmi+to+hdmi+cable' },
                { name: 'MicroSD Card 32GB', price: '$9', note: 'SanDisk recommended', link: 'https://www.amazon.com/s?k=microsd+32gb+sandisk' },
                { name: 'Cold Shoe Adapters (2)', price: '$8', note: 'For mounting', link: 'https://www.amazon.com/s?k=cold+shoe+adapter' }
            ]
        }
    };

    // ============================================
    // DOM Elements
    // ============================================

    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const shoppingList = document.getElementById('shoppingList');
    const prompterText = document.getElementById('prompterText');

    // ============================================
    // Navigation
    // ============================================

    // Scroll effects
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ============================================
    // Animated Counters
    // ============================================

    function animateCounter(element, target) {
        const duration = 1500;
        const start = performance.now();
        const startValue = 0;

        function update(currentTime) {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(startValue + (target - startValue) * easeOut);

            element.textContent = current;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }

    // Intersection Observer for counter animation
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.count, 10);
                animateCounter(counter, target);
                statObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-count]').forEach(counter => {
        statObserver.observe(counter);
    });

    // ============================================
    // Shopping List
    // ============================================

    let currentBuild = 'a';

    function getCheckedItems() {
        try {
            return JSON.parse(localStorage.getItem('teleprompter-shopping') || '{}');
        } catch {
            return {};
        }
    }

    function saveCheckedItems(items) {
        localStorage.setItem('teleprompter-shopping', JSON.stringify(items));
    }

    function renderShoppingList(build) {
        const list = SHOPPING_LISTS[build];
        if (!list) return;

        const checked = getCheckedItems();

        shoppingList.innerHTML = list.items.map((item, index) => {
            const itemKey = `${build}-${index}`;
            const isChecked = checked[itemKey] || false;

            return `
                <div class="shopping-item ${isChecked ? 'checked' : ''}">
                    <input
                        type="checkbox"
                        class="shopping-checkbox"
                        id="item-${itemKey}"
                        ${isChecked ? 'checked' : ''}
                        data-key="${itemKey}"
                    >
                    <div class="shopping-info">
                        <div class="shopping-name">${item.name}</div>
                        <div class="shopping-note">${item.note}</div>
                    </div>
                    <span class="shopping-price">${item.price}</span>
                    ${item.link ? `
                        <a href="${item.link}" target="_blank" class="shopping-link">
                            Buy
                        </a>
                    ` : ''}
                </div>
            `;
        }).join('');

        // Add event listeners
        shoppingList.querySelectorAll('.shopping-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const key = checkbox.dataset.key;
                const checked = getCheckedItems();
                checked[key] = checkbox.checked;
                saveCheckedItems(checked);

                const item = checkbox.closest('.shopping-item');
                item.classList.toggle('checked', checkbox.checked);
            });
        });
    }

    // Shopping tab clicks
    document.querySelectorAll('.shopping-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.shopping-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentBuild = tab.dataset.build;
            renderShoppingList(currentBuild);
        });
    });

    // Initial render
    renderShoppingList(currentBuild);

    // ============================================
    // Teleprompter Animation
    // ============================================

    // Duplicate text for seamless loop
    if (prompterText) {
        const originalContent = prompterText.innerHTML;
        prompterText.innerHTML = originalContent + originalContent;
    }

    // ============================================
    // Intersection Observer for Animations
    // ============================================

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.build-card, .guide-card, .comparison-item').forEach(el => {
        animationObserver.observe(el);
    });

    // ============================================
    // Comparison Bar Animation
    // ============================================

    const barObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.comparison-bar').forEach((bar, i) => {
                    setTimeout(() => {
                        bar.style.width = bar.style.getPropertyValue('--width');
                    }, i * 100);
                });
                barObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    const comparisonBars = document.querySelector('.comparison-bars');
    if (comparisonBars) {
        // Reset widths
        comparisonBars.querySelectorAll('.comparison-bar').forEach(bar => {
            bar.style.width = '0';
        });
        barObserver.observe(comparisonBars);
    }

    // ============================================
    // Console Easter Egg
    // ============================================

    console.log(`
    %c DIY Teleprompter %c

    Build your own professional teleprompter for $70-165!

    Check out the guides or visit the GitHub repo.

    `, 'background: #06b6d4; color: #0a0a0b; font-weight: bold; padding: 4px 8px;', '');

})();
