# Raspberry Pi Display Options for DIY Teleprompter

## Pi Model Recommendation

**Pi Zero 2W ($15)** is ideal for teleprompters:
- Quad-core 1GHz is massive overkill for text scrolling
- Low power (~2W) - can run on small USB power bank
- Tiny form factor fits in any housing
- WiFi built-in for wireless control
- Mini-HDMI output (need adapter cable)

| Model | Price | Notes |
|-------|-------|-------|
| **Pi Zero 2W** | **$15** | **Best choice** - sufficient power, tiny, low power |
| Pi 4 (2GB) | $45 | Overkill for teleprompter |
| Pi 4 (4GB) | $60 | Way overkill |
| Pi 5 | $45-55 | Total overkill, runs hot |

---

## Recommended Displays

### Budget Options ($35-50)

| Display | Resolution | Price | Rating | Link |
|---------|------------|-------|--------|------|
| **HMTECH 7"** | 800x480 | $38 | 4.2★ (627) | [Amazon](https://www.amazon.com/dp/B09MFNLRQQ) |
| **ELECROW 7"** | 1024x600 | $44 | 4.5★ (271) | [Amazon](https://www.amazon.com/dp/B01GDMDFZA) ⭐ Amazon's Choice |
| GeeekPi 7" | 1024x600 | $45 | 4.3★ (142) | [Amazon](https://www.amazon.com/dp/B0CHRD7CQ3) |
| Waveshare 7" | 1024x600 | $47 | 4.2★ (16) | [Amazon](https://www.amazon.com/dp/B083V7WK15) |

### Larger Displays ($55-80)

| Display | Resolution | Price | Rating | Link |
|---------|------------|-------|--------|------|
| Hosyond 10.1" | 1024x600 | $76 | 4.4★ (559) | [Amazon](https://www.amazon.com/dp/B0BHQRSDZR) ⭐ Amazon's Choice |

*Prices verified January 2026. Prices fluctuate - check links for current pricing.*

---

## Display Selection Guide

### For Teleprompter Use

**What matters:**
- **IPS panel** - wide viewing angles (critical for beam splitter reflection)
- **Brightness** - 300+ cd/m² recommended (text needs to be readable through glass)
- **HDMI connection** - Pi Zero 2W only has Mini-HDMI (no DSI port)
- **Non-touch is fine** - use foot pedal or keyboard for control

**What doesn't matter:**
- Touch capability (adds cost, not needed)
- High resolution (800x480 is plenty for reading text)
- Refresh rate (60Hz is more than enough for scrolling text)

### Our Recommendations

| Use Case | Recommendation | Why |
|----------|----------------|-----|
| **Best Value** | ELECROW 7" ($44) | Best reviews, 1024x600, IPS, Amazon's Choice |
| **Budget** | HMTECH 7" ($38) | Cheapest IPS option, 800x480 is fine for text |
| **Larger Text** | Hosyond 10.1" ($76) | For those who need bigger display |

---

## Viewing Angle Considerations

Teleprompters require good viewing angles because:
1. Text reflects off beam splitter glass at an angle
2. You're not looking straight at the display
3. Poor viewing angles = washed out or inverted text

**All recommended displays above use IPS panels** which have ~170° viewing angles. Avoid TN panels.

---

## Brightness Notes

For teleprompter use through beam splitter glass:
- **Minimum:** 250 cd/m² (usable indoors)
- **Recommended:** 300-500 cd/m² (bright, clear text)
- **Outdoor use:** 500+ cd/m² (rare in budget displays)

The ELECROW and GeeekPi both spec 500 cd/m², making them ideal choices.

---

## Required Cables & Adapters

### For Pi Zero 2W

| Item | Purpose | Price | Link |
|------|---------|-------|------|
| Mini-HDMI to HDMI cable | Connect Pi to display | ~$8 | [Amazon](https://www.amazon.com/dp/B014I8UQJY) |
| Micro-USB power cable | Power the Pi | ~$6 | Usually included with Pi |
| USB-A power for display | Power the display | Varies | Usually included with display |

### Connection Diagram

```
┌─────────────┐     Mini-HDMI      ┌─────────────┐
│  Pi Zero 2W │──────────────────▶│   Display   │
└─────────────┘      cable         └─────────────┘
       │                                  │
       │ Micro-USB                        │ USB power
       ▼                                  ▼
   [5V/2A supply]                   [5V supply or
    or power bank]                   same supply]
```

**Tip:** Many 7" displays can share power with the Pi from a single 5V/3A supply using a USB splitter.

---

## Power Requirements

| Setup | Power Draw | Recommended Supply |
|-------|------------|-------------------|
| Pi Zero 2W alone | ~2W | 5V/1A (minimum) |
| Pi Zero 2W + 7" display | ~5-7W | 5V/3A |
| Pi Zero 2W + 10" display | ~8-10W | 5V/3A |

**For portable use:** A 10,000mAh USB power bank can run Pi + 7" display for 6-8 hours.

---

## Important: Pi Zero 2W Limitations

The Pi Zero 2W does **NOT** have a DSI connector. This means:
- ❌ Cannot use official Raspberry Pi Touch Display
- ❌ Cannot use DSI-only displays (like some Waveshare models)
- ✅ Must use HDMI displays (all recommendations above work)

---

## Comparison: Pi vs Fire Tablet

| Factor | Pi Zero 2W + Display | Fire Tablet 8" |
|--------|---------------------|----------------|
| **Cost** | $50-65 | $55-90 |
| **Control** | Full (GPIO, foot pedals) | Limited (apps only) |
| **Customization** | Unlimited | Locked ecosystem |
| **Network Control** | Easy (web-based) | Requires app |
| **Power** | 5V USB | Built-in battery |
| **Text Mirroring** | Native support | App-dependent |

**Verdict:** Pi wins on control and customization at similar cost. Fire Tablet wins on portability (battery included).

---

## Quick Start Checklist

- [ ] Pi Zero 2W ($15)
- [ ] 7" IPS display - ELECROW recommended ($44)
- [ ] Mini-HDMI to HDMI cable ($8)
- [ ] 5V/3A USB power supply ($10)
- [ ] MicroSD card with Pi OS (~$10)

**Total: ~$87** for complete teleprompter display system
