# 3D Printed Teleprompter Housing Designs

## Recommended Designs

| Design | Source | Notes |
|--------|--------|-------|
| **Lahundo Prompter** | [Hackaday.io](https://hackaday.io/project/202247-lahundo-prompter) | **Best choice** — 2025 design, Pi Zero 2W, foot pedal ready |
| Apalrd's Teleprompter | [apalrd.net](https://www.apalrd.net/posts/2023/studio_teleprompter/) | Full CAD files (FreeCAD), CC-BY-SA license |
| Modern Hobbyist | [Printables](https://www.printables.com/model/406474-3d-printed-teleprompter) | Uses 1/2" aluminum tubing + magnets |
| iPad Teleprompter | [Thingiverse](https://www.thingiverse.com/thing:1665711) | Uses picture frame glass |
| Recycled LCD Build | [Thingiverse](https://www.thingiverse.com/thing:4356837/files) | Uses salvaged LCD + scanner glass |

---

## Print Settings

### Recommended Slicer Settings

| Setting | Value | Notes |
|---------|-------|-------|
| **Layer height** | 0.2mm | 0.16mm for visible surfaces |
| **Infill** | 15-20% | Grid or gyroid pattern |
| **Wall count** | 3-4 perimeters | More walls = stronger |
| **Top/bottom layers** | 4-5 layers | Prevents light bleed |
| **Supports** | Yes, tree supports | Easier removal than normal |
| **Support density** | 10-15% | Lower = easier removal |
| **Print speed** | 50-60mm/s | Slower for quality |
| **Nozzle temp** | 200-210°C (PLA) / 230-245°C (PETG) | Check filament specs |
| **Bed temp** | 60°C (PLA) / 70-80°C (PETG) | Use adhesive for PETG |

### Print Orientation

| Part | Orientation | Why |
|------|-------------|-----|
| Main housing | Opening facing up | Minimizes supports |
| Glass holder | Flat side down | Best surface quality |
| Camera mount | Mounting holes up | Strong layer adhesion for stress points |
| Hood/shroud | Wide end down | Stable base, good overhangs |

**Tip:** The 45° angle on most teleprompter backs is designed to print without supports.

### Time & Material Estimates

| Design | Print Time | Filament | Cost |
|--------|------------|----------|------|
| Lahundo Prompter | 8-12 hours | ~200-250g | $8-12 |
| Apalrd's Teleprompter | 12-18 hours | ~300-400g | $12-18 |
| Modern Hobbyist | 6-10 hours | ~150-200g | $6-10 |
| iPad Teleprompter | 10-14 hours | ~250-350g | $10-16 |

*Times based on 0.2mm layer height, 50mm/s print speed*

---

## Filament Recommendations

### PLA vs PETG Comparison

| Factor | PLA | PETG |
|--------|-----|------|
| **Ease of printing** | ★★★★★ Easiest | ★★★☆☆ Moderate |
| **Durability** | ★★★☆☆ Good for indoor | ★★★★★ Excellent |
| **Heat resistance** | ★★☆☆☆ Softens at 50°C | ★★★★☆ Handles 70°C |
| **Flexibility** | ★★☆☆☆ Brittle | ★★★★☆ Some flex |
| **Cost** | $18-25/kg | $22-30/kg |
| **Best for** | Indoor studio use | Outdoor/travel use |

### Recommended Brands

**Budget-Friendly (Works Well):**
- eSUN PLA+ (~$18/kg) — reliable, good matte finish
- Overture PLA/PETG (~$20/kg) — consistent quality
- Hatchbox PLA (~$22/kg) — very popular, predictable

**Premium (Best Results):**
- Polymaker PolyLite PLA (~$25/kg) — excellent surface finish
- Prusament PLA/PETG (~$30/kg) — tightest tolerances
- Atomic Filament PETG (~$28/kg) — great layer adhesion

### Color Recommendations

| Color | Use Case |
|-------|----------|
| **Matte Black** | Best choice — no reflections, professional look |
| Dark Gray | Good alternative, hides imperfections |
| White | Only if covering with fabric shroud |

**Avoid:** Glossy or metallic filaments (cause reflections on glass)

---

## Common Print Failures & Solutions

| Problem | Cause | Solution |
|---------|-------|----------|
| **Warping** | Bed adhesion, drafts | Use brim, enclose printer, bed at temp |
| **Layer separation** | Under-extrusion, temp too low | Increase temp 5-10°C, calibrate e-steps |
| **Stringy supports** | Support too close, temp too high | Increase Z gap, lower temp 5°C |
| **Rough overhangs** | Too fast, insufficient cooling | Slow to 30mm/s for overhangs, max fan |
| **Glass slot too tight** | Shrinkage, over-extrusion | Sand slot, or scale model 100.5% |
| **Weak tripod mount** | Low infill at stress point | Use 50%+ infill modifier for mount area |
| **Visible layer lines** | Fast print speed | Use 0.16mm layers, print at 40mm/s |

### What Failed Prints Look Like

Common failures to watch for:
- **Spaghetti mess** — bed adhesion failure, start over with fresh adhesive
- **Elephant foot** — first layer squished too much, raise Z offset slightly
- **Cracked at layers** — too cool, increase nozzle temp
- **Stringing everywhere** — retraction settings wrong, do retraction tuning

---

## Beam Splitter Glass Options

| Product | Size | Price | Link |
|---------|------|-------|------|
| Generic 12.7" | 256x206mm | $20-30 | [Amazon](https://www.amazon.com/Splitting-Glass-Teleprompter-Transmission-teleprompter/dp/B0BWXL3N1N) |
| Neewer NA14 | 9.9" x 9.9" | $25-35 | [Amazon](https://www.amazon.com/Splitter-Teleprompter-Replacement-25-2x25-2x0-2cm-NA14/dp/B0CT8T7VGL) |
| Neewer NA17 | 12.4" x 12.4" | $35-50 | [Amazon](https://www.amazon.com/Splitter-Teleprompter-Replacement-31-5x31-5x0-2cm-NA17/dp/B0CTQT1CX2) |
| TelepromterMirror.com | Custom sizes | $59-92 | [Shop](https://telepromptermirror.com/shop/) |

**Note:** Elgato charges $49.99 for replacement glass. Generic 70/30 glass is half the price and identical.

---

## DIY Beam Splitter Alternative (Ultra Budget)

If you want the absolute cheapest option:

1. Buy 8x10" picture frame glass ($3-5 at dollar store)
2. Apply 30% window tint film ($8-10 for a roll)
3. Result: Functional 70/30-ish beam splitter

**Note:** Not as optically perfect as real teleprompter glass, but works for basic use.

---

## Hardware Shopping List

### Essential Hardware

| Item | Quantity | Price | Notes |
|------|----------|-------|-------|
| 1/4"-20 x 3/8" Tripod Screw | 1-2 | $3-5 | For tripod mount |
| 1/4"-20 Threaded Insert | 1-2 | $5 | Heat-set brass inserts recommended |
| M3 x 8mm Screws | 10-20 | $5 | For frame assembly |
| M3 Nuts or Threaded Inserts | 10-20 | $5 | Heat-set inserts are stronger |
| Cold Shoe Adapters | 2 | $7 | [Amazon](https://www.amazon.com/Camera-Cold-Shoe-Adapter-Tripod/dp/B076FTW8YG) |

### Glass Mounting

| Item | Quantity | Price | Notes |
|------|----------|-------|-------|
| Neodymium Magnets 8x3mm | 8-12 | $5 | For removable glass mount |
| Felt Tape (2mm thick) | 1 roll | $5 | Protects glass edges |
| E6000 or Silicone Adhesive | 1 tube | $5 | For permanent mounting |

### Optional Upgrades

| Item | Price | Why |
|------|-------|-----|
| Rubber Feet (adhesive) | $3 | Prevents sliding on desk |
| Cable Clips (adhesive) | $5 | Clean cable routing |
| Velcro Strips | $5 | Quick-release display mounting |
| Black Felt Sheet | $3 | Line interior to reduce reflections |
| Microfiber Cloth | $3 | Glass cleaning |

### Tools Needed

- Allen key set (M2.5, M3)
- Soldering iron with flat tip (for heat-set inserts)
- Flush cutters (support removal)
- Sandpaper (220, 400 grit)
- Level or phone with level app
- CA glue or epoxy (for magnets)

---

## Lahundo Prompter Details (Recommended)

The Lahundo Prompter (2025) is specifically designed for Pi Zero 2W:

**Features:**
- Designed for 7" HDMI display
- 3-way USB foot pedal integration
- Uses 5x7" picture frame glass as reflector
- STL files on GitHub
- Compact footprint

**Links:**
- Project page: [Hackaday.io](https://hackaday.io/project/202247-lahundo-prompter)
- STL files: Check project files section

---

## Apalrd's Build Details

Full CAD files available for modification:

**Features:**
- FreeCAD source files (fully editable)
- CC-BY-SA license (share and modify freely)
- Multiple size options
- Detailed documentation

**Link:** [apalrd.net](https://www.apalrd.net/posts/2023/studio_teleprompter/)

---

## Assembly Tips

### Before You Start

1. **Dry fit everything** — test fit all parts before adding adhesive or hardware
2. **Sand mating surfaces** — 220 grit on joining faces improves glue adhesion
3. **Remove support marks** — flush cutters + sandpaper for clean surfaces
4. **Check glass fit** — glass should slide in with slight resistance, not force

### Glass Installation

1. Apply 2-3mm felt tape to glass contact points (prevents scratches and rattling)
2. If using magnets: epoxy 8x3mm neodymium magnets into printed recesses
3. Glass should sit at exactly 45° — use phone level app to verify
4. For permanent mount: use clear silicone (removable) or E6000 (permanent)

### Hardware Assembly Order

1. Install tripod mount hardware first (hardest to access later)
2. Add cold shoe adapters to mounting points
3. Install display/tablet holder
4. Add glass holder frame
5. Insert glass last (most fragile)

### Post-Print Finishing

| Technique | When to Use | How |
|-----------|-------------|-----|
| **Sanding** | Visible surfaces | 220→400→600 grit progression |
| **Heat gun smoothing** | PLA only | Quick passes at 150°C, 6" distance |
| **Filler primer** | Hide layer lines | 2-3 coats, sand between |
| **Matte black spray** | Professional look | Light coats, let cure 24h |

### Pro Tips

- **Print in black** — reduces light reflections on glass
- **Use PETG** for outdoor/travel (handles heat and impact better)
- **Add felt or foam** to glass mounting area (prevents scratches)
- **Use magnets** for removable glass (makes cleaning easy)
- **Print a lens hood** for outdoor use (prevents glare)
- **Test with phone first** — before mounting expensive display, test the angle with a phone
