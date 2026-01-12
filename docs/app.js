/**
 * DIY Teleprompter Documentation Site
 * Interactive functionality for guides, shopping lists, and navigation
 */

(function() {
    'use strict';

    // ============================================
    // Configuration
    // ============================================

    const GUIDES = {
        'build-guide': {
            file: 'kb/build-guide.md',
            title: 'Complete Build Guide'
        },
        'software-setup': {
            file: 'kb/software-setup.md',
            title: 'Software Setup Guide'
        },
        'raspberry-pi-displays': {
            file: 'kb/raspberry-pi-displays.md',
            title: 'Raspberry Pi Display Options'
        },
        'shopping-lists': {
            file: 'kb/shopping-lists.md',
            title: 'Shopping Lists by Budget'
        },
        '3d-printed-housings': {
            file: 'kb/3d-printed-housings.md',
            title: '3D Printed Housings'
        },
        'elgato-comparison': {
            file: 'kb/elgato-comparison.md',
            title: 'DIY vs Elgato Comparison'
        }
    };

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
    const guideReader = document.getElementById('guideReader');
    const guideReaderClose = document.getElementById('guideReaderClose');
    const guideReaderTitle = document.getElementById('guideReaderTitle');
    const guideContent = document.getElementById('guideContent');
    const guideToc = document.getElementById('guideToc');
    const guideToggleToc = document.getElementById('guideToggleToc');
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
    // Guide Reader
    // ============================================

    async function loadGuide(guideId, section = null) {
        const guide = GUIDES[guideId];
        if (!guide) {
            console.error('Guide not found:', guideId);
            return;
        }

        // Show reader
        guideReader.classList.add('open');
        document.body.classList.add('reader-open');
        guideReaderTitle.textContent = guide.title;
        guideContent.innerHTML = '<div class="loading">Loading guide...</div>';

        try {
            const response = await fetch(guide.file);
            if (!response.ok) throw new Error('Failed to load guide');

            const markdown = await response.text();
            const html = marked.parse(markdown, {
                breaks: true,
                gfm: true
            });

            guideContent.innerHTML = html;

            // Generate TOC
            generateToc();

            // Handle internal links
            guideContent.querySelectorAll('a').forEach(link => {
                const href = link.getAttribute('href');
                if (href && href.endsWith('.md')) {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        const linkedGuide = href.replace('.md', '').replace('./', '');
                        loadGuide(linkedGuide);
                    });
                }
            });

            // Scroll to section if specified
            if (section) {
                setTimeout(() => {
                    const targetHeading = Array.from(guideContent.querySelectorAll('h2, h3')).find(h => {
                        const id = h.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                        return id.includes(section.toLowerCase());
                    });
                    if (targetHeading) {
                        targetHeading.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            }

        } catch (error) {
            console.error('Error loading guide:', error);
            guideContent.innerHTML = `
                <div class="error">
                    <h2>Unable to load guide</h2>
                    <p>Please make sure you're running this from a web server, not directly from the file system.</p>
                    <p>Try: <code>python -m http.server 8000</code> in the docs folder.</p>
                </div>
            `;
        }
    }

    function generateToc() {
        const headings = guideContent.querySelectorAll('h2, h3');
        const tocItems = [];

        headings.forEach((heading, index) => {
            const id = `heading-${index}`;
            heading.id = id;

            tocItems.push({
                id,
                text: heading.textContent,
                level: heading.tagName.toLowerCase()
            });
        });

        guideToc.innerHTML = `
            <h4 class="guide-toc-title">Contents</h4>
            <ul class="toc-list">
                ${tocItems.map(item => `
                    <li class="toc-item">
                        <a href="#${item.id}" class="toc-link ${item.level}">${item.text}</a>
                    </li>
                `).join('')}
            </ul>
        `;

        // TOC link clicks
        guideToc.querySelectorAll('.toc-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.getElementById(link.getAttribute('href').slice(1));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }

                // Update active state
                guideToc.querySelectorAll('.toc-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');

                // On mobile, hide TOC after click
                if (window.innerWidth <= 768) {
                    guideToc.classList.remove('visible');
                }
            });
        });
    }

    function closeGuideReader() {
        guideReader.classList.remove('open');
        document.body.classList.remove('reader-open');
    }

    // Guide reader events
    guideReaderClose.addEventListener('click', closeGuideReader);

    document.querySelector('.guide-reader-backdrop').addEventListener('click', closeGuideReader);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && guideReader.classList.contains('open')) {
            closeGuideReader();
        }
    });

    // TOC toggle
    guideToggleToc.addEventListener('click', () => {
        guideToc.classList.toggle('hidden');
        if (window.innerWidth <= 768) {
            guideToc.classList.toggle('visible');
        }
    });

    // Guide link clicks
    document.querySelectorAll('[data-guide]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const guideId = link.dataset.guide;
            const section = link.dataset.section;
            loadGuide(guideId, section);
        });
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
