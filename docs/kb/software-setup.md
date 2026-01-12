# Software Setup Guide for DIY Teleprompter

Complete step-by-step guide to setting up your Raspberry Pi and teleprompter software. This guide covers everything from flashing the OS to configuring auto-start.

**Time Required:** 30-45 minutes
**Skill Level:** Beginner-friendly

---

## Table of Contents

1. [What You'll Need](#what-youll-need)
2. [Download Raspberry Pi Imager](#download-raspberry-pi-imager)
3. [Flash Raspberry Pi OS](#flash-raspberry-pi-os)
4. [First Boot and Initial Configuration](#first-boot-and-initial-configuration)
5. [Configure Display Mirroring](#configure-display-mirroring)
6. [Install Teleprompter Software](#install-teleprompter-software)
7. [Configure USB Foot Pedal](#configure-usb-foot-pedal)
8. [Set Up Auto-Start on Boot](#set-up-auto-start-on-boot)
9. [Troubleshooting](#troubleshooting)

---

## What You'll Need

| Item | Notes |
|------|-------|
| Raspberry Pi Zero 2W (or Pi 4) | Flashed and configured |
| MicroSD card (16GB+) | Class 10 recommended |
| Another computer | For flashing the SD card |
| WiFi network | For initial setup and updates |
| USB keyboard (temporarily) | For initial configuration if not headless |

---

## Download Raspberry Pi Imager

Raspberry Pi Imager is the official tool for flashing Raspberry Pi OS to your SD card. It's free and available for Windows, macOS, and Linux.

### Download Links

| Platform | Download |
|----------|----------|
| **Windows** | [Download for Windows](https://downloads.raspberrypi.org/imager/imager_latest.exe) |
| **macOS** | [Download for macOS](https://downloads.raspberrypi.org/imager/imager_latest.dmg) |
| **Ubuntu/Debian** | `sudo apt install rpi-imager` |

Or visit the official download page: [raspberrypi.com/software](https://www.raspberrypi.com/software/)

---

## Flash Raspberry Pi OS

### Step 1: Insert MicroSD Card

Insert your MicroSD card into your computer using a card reader or built-in slot.

### Step 2: Launch Raspberry Pi Imager

Open the Raspberry Pi Imager application you just installed.

### Step 3: Choose Device

1. Click **"Choose Device"**
2. Select **"Raspberry Pi Zero 2 W"** (or your Pi model)

### Step 4: Choose Operating System

**Recommended: Raspberry Pi OS Lite (64-bit)**

1. Click **"Choose OS"**
2. Select **"Raspberry Pi OS (other)"**
3. Select **"Raspberry Pi OS Lite (64-bit)"**

> **Why Lite?** The Lite version has no desktop environment, which means:
> - Faster boot time (~10 seconds vs ~30 seconds)
> - Lower memory usage (more available for your teleprompter app)
> - Your teleprompter app uses the entire screen
> - Perfect for kiosk-style dedicated use
>
> **When to use Desktop:** If you want to run web-based teleprompters in a browser, choose "Raspberry Pi OS with Desktop".

### Step 5: Choose Storage

1. Click **"Choose Storage"**
2. Select your MicroSD card (careful not to select the wrong drive!)

### Step 6: Configure OS Settings (CRITICAL)

This is the most important step. Click the **gear icon** or **"Edit Settings"** to open advanced options.

#### General Tab

| Setting | Value | Notes |
|---------|-------|-------|
| **Set hostname** | `teleprompter` | Makes it easier to find on your network |
| **Set username and password** | Your choice | Write these down! Default: `pi` / your password |
| **Configure wireless LAN** | Your WiFi name + password | Required for headless setup |
| **Set locale settings** | Your timezone + keyboard layout | Important for correct time display |

#### Services Tab

| Setting | Value |
|---------|-------|
| **Enable SSH** | **Yes (checked)** |
| **Use password authentication** | Selected |

> **Why SSH?** This lets you configure your Pi from your computer without needing a keyboard/mouse attached to the Pi.

### Step 7: Write the Image

1. Click **"Save"** to save your settings
2. Click **"Write"**
3. Confirm you want to erase the SD card
4. Wait for the write and verification to complete (~5-10 minutes)

### Step 8: Eject and Insert

1. Safely eject the SD card from your computer
2. Insert it into your Raspberry Pi Zero 2W

---

## First Boot and Initial Configuration

### Headless Setup (Recommended)

With the settings configured in Raspberry Pi Imager, your Pi will automatically connect to WiFi on first boot.

1. **Power on the Pi** - Connect the power USB cable
2. **Wait 60-90 seconds** - Pi is booting and connecting to WiFi
3. **Find your Pi on the network:**

```bash
# From another computer on the same network:

# Option 1: Use hostname (if your router supports mDNS)
ping teleprompter.local

# Option 2: Check your router's admin page for connected devices

# Option 3: Scan your network (requires nmap)
nmap -sn 192.168.1.0/24 | grep -i "raspberry\|teleprompter"
```

4. **Connect via SSH:**

```bash
ssh pi@teleprompter.local
# Or use the IP address:
ssh pi@192.168.1.XXX
```

Enter your password when prompted.

### First-Time Updates

Once connected via SSH, update your system:

```bash
sudo apt update && sudo apt upgrade -y
```

This may take 5-10 minutes on first run.

### Configure with raspi-config

Run the configuration tool:

```bash
sudo raspi-config
```

Navigate using arrow keys, Enter to select, Tab to switch to buttons.

#### Recommended Settings

| Menu | Setting | Value |
|------|---------|-------|
| **1 System Options** → **S5 Boot / Auto Login** | Desktop Autologin or Console Autologin | Depends on your teleprompter software |
| **2 Display Options** → **D1 Resolution** | Your display resolution (e.g., 800x480, 1024x600) | Match your LCD |
| **3 Interface Options** → **I1 SSH** | Enable | Already done if you connected |
| **6 Advanced Options** → **A1 Expand Filesystem** | Run this | Uses full SD card |

Select **"Finish"** and reboot when prompted:

```bash
sudo reboot
```

---

## Configure Display Mirroring

For a teleprompter to work with a beam splitter glass, the text must be **horizontally mirrored** (flipped left-to-right). There are two approaches:

### Option A: Software-Based Mirroring (Recommended)

Most teleprompter applications have a built-in mirror toggle. This is the cleanest approach.

**No system configuration needed** - just enable mirroring in your teleprompter app.

### Option B: System-Wide Display Mirroring

If your app doesn't support mirroring, you can mirror the entire display output using `xrandr`:

```bash
# Install xrandr if not present
sudo apt install x11-xserver-utils

# Mirror the display horizontally
xrandr --output HDMI-1 --reflect x
```

To make this permanent, add to your autostart:

```bash
# Create autostart directory if it doesn't exist
mkdir -p ~/.config/autostart

# Create autostart entry
cat > ~/.config/autostart/mirror-display.desktop << 'EOF'
[Desktop Entry]
Type=Application
Name=Mirror Display
Exec=xrandr --output HDMI-1 --reflect x
Hidden=false
NoDisplay=false
X-GNOME-Autostart-enabled=true
EOF
```

> **Note:** The output name (`HDMI-1`) may vary. Run `xrandr` without arguments to see your display outputs.

### Option C: Display Rotation for Vertical Mounting

If you're mounting your display vertically:

```bash
# Rotate 90 degrees clockwise
xrandr --output HDMI-1 --rotate right

# Rotate 90 degrees counter-clockwise
xrandr --output HDMI-1 --rotate left

# Combine rotation with mirror
xrandr --output HDMI-1 --rotate right --reflect x
```

---

## Install Teleprompter Software

Several open-source teleprompter applications work great on Raspberry Pi:

### Option 1: Imaginary Teleprompter (Recommended)

A full-featured teleprompter with remote control support.

```bash
# Install dependencies
sudo apt install -y nodejs npm git

# Clone the repository
cd ~
git clone https://github.com/ImaginaryRealities/teleprompter.git
cd teleprompter

# Install dependencies
npm install

# Run the teleprompter
npm start
```

**Features:**
- Web-based interface (control from phone/tablet)
- Mirror mode built-in
- Adjustable speed and font size
- Works in browser (Chromium)

### Option 2: BlitzCityDIY Python Teleprompter

A simple Python/Tkinter-based teleprompter.

```bash
# Install dependencies
sudo apt install -y python3 python3-tk git

# Clone the repository
cd ~
git clone https://github.com/BlitzCityDIY/raspberryPi-teleprompter.git
cd raspberryPi-teleprompter

# Run the teleprompter
python3 teleprompter.py
```

### Option 3: Web-Based (Browser)

For maximum simplicity, use any web-based teleprompter in Chromium:

```bash
# Install Chromium browser
sudo apt install -y chromium-browser

# Launch in kiosk mode
chromium-browser --kiosk https://telepromptermirror.com/teleprompter
```

**Popular web teleprompters:**
- [CuePrompter](https://cueprompter.com) - Free, no signup
- [Teleprompter Mirror](https://telepromptermirror.com/teleprompter) - Free, basic features
- [BigTip](https://bigtip.app) - Mobile-friendly

### Option 4: Build Your Own

For a custom solution, here's a minimal Python teleprompter:

```python
#!/usr/bin/env python3
"""
Minimal teleprompter for Raspberry Pi
Scrolls text from a file, supports keyboard control
"""

import tkinter as tk
from tkinter import font
import sys

class Teleprompter:
    def __init__(self, text_file):
        self.root = tk.Tk()
        self.root.attributes('-fullscreen', True)
        self.root.configure(bg='black')

        # Load text
        with open(text_file, 'r') as f:
            self.text = f.read()

        # Create canvas
        self.canvas = tk.Canvas(self.root, bg='black', highlightthickness=0)
        self.canvas.pack(fill='both', expand=True)

        # Create text (mirrored for beam splitter)
        self.prompt_font = font.Font(family='Helvetica', size=48, weight='bold')
        self.text_id = self.canvas.create_text(
            self.root.winfo_screenwidth() // 2,
            self.root.winfo_screenheight(),
            text=self.text,
            font=self.prompt_font,
            fill='white',
            anchor='n',
            width=self.root.winfo_screenwidth() - 100
        )

        # Mirror the canvas horizontally
        self.canvas.scale('all', self.root.winfo_screenwidth() // 2, 0, -1, 1)

        self.scroll_speed = 2
        self.scrolling = False

        # Key bindings
        self.root.bind('<space>', self.toggle_scroll)
        self.root.bind('<Up>', lambda e: self.adjust_speed(1))
        self.root.bind('<Down>', lambda e: self.adjust_speed(-1))
        self.root.bind('<Escape>', lambda e: self.root.quit())

        self.scroll()
        self.root.mainloop()

    def toggle_scroll(self, event=None):
        self.scrolling = not self.scrolling

    def adjust_speed(self, delta):
        self.scroll_speed = max(1, min(10, self.scroll_speed + delta))

    def scroll(self):
        if self.scrolling:
            self.canvas.move(self.text_id, 0, -self.scroll_speed)
        self.root.after(50, self.scroll)

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python3 teleprompter.py <text_file>")
        sys.exit(1)
    Teleprompter(sys.argv[1])
```

Save as `~/teleprompter.py` and run with:

```bash
python3 ~/teleprompter.py ~/script.txt
```

---

## Configure USB Foot Pedal

A USB foot pedal provides hands-free control of your teleprompter. Most USB foot pedals appear as HID keyboard devices.

### Step 1: Connect and Identify the Pedal

```bash
# Connect foot pedal via USB OTG adapter (for Pi Zero)
# Then check if it's recognized:
lsusb

# Look for something like:
# Bus 001 Device 003: ID 0c45:7403 Microdia Foot Switch
```

### Step 2: Test the Pedal Inputs

```bash
# Install evtest
sudo apt install -y evtest

# List input devices
sudo evtest

# Select your foot pedal device and press the pedals
# Note which key codes they send
```

Common foot pedal key mappings:
| Pedal | Common Key Code |
|-------|-----------------|
| Left | `KEY_A` or `KEY_LEFT` |
| Middle | `KEY_B` or `KEY_SPACE` |
| Right | `KEY_C` or `KEY_RIGHT` |

### Step 3: Remap Keys (If Needed)

If your pedal sends keys that don't match your teleprompter's controls, remap them:

```bash
# Install key remapper
sudo apt install -y evtest input-utils

# Create a hwdb file for your device
sudo nano /etc/udev/hwdb.d/99-footpedal.hwdb
```

Add remapping rules (example):

```
# Remap foot pedal keys
evdev:input:b0003v0C45p7403*
 KEYBOARD_KEY_70004=pagedown   # Left pedal → Page Down
 KEYBOARD_KEY_70005=space      # Middle pedal → Space
 KEYBOARD_KEY_70006=pageup     # Right pedal → Page Up
```

Apply the changes:

```bash
sudo systemd-hwdb update
sudo udevadm trigger
```

### Recommended Foot Pedal Models

| Model | Price | Notes |
|-------|-------|-------|
| iKKEGOL 3-Switch | $25 | Most popular, works out of box |
| Infinity IN-USB-2 | $50 | Professional quality, configurable |
| Generic 3-pedal USB | $15-20 | Budget option, may need remapping |

---

## Set Up Auto-Start on Boot

Configure your teleprompter to launch automatically when the Pi boots.

### For GUI Applications (Desktop/Tkinter)

Create a systemd service:

```bash
sudo nano /etc/systemd/system/teleprompter.service
```

Add this content:

```ini
[Unit]
Description=Teleprompter Application
After=graphical.target

[Service]
Type=simple
User=pi
Environment=DISPLAY=:0
ExecStart=/usr/bin/python3 /home/pi/teleprompter.py /home/pi/script.txt
Restart=always
RestartSec=5

[Install]
WantedBy=graphical.target
```

Enable the service:

```bash
sudo systemctl daemon-reload
sudo systemctl enable teleprompter.service
sudo systemctl start teleprompter.service
```

### For Web-Based Teleprompters

Launch Chromium in kiosk mode at boot:

```bash
mkdir -p ~/.config/autostart

cat > ~/.config/autostart/teleprompter.desktop << 'EOF'
[Desktop Entry]
Type=Application
Name=Teleprompter
Exec=chromium-browser --kiosk --disable-infobars --disable-session-crashed-bubble https://cueprompter.com
Hidden=false
NoDisplay=false
X-GNOME-Autostart-enabled=true
EOF
```

### Disable Screen Blanking

Prevent the screen from going to sleep:

```bash
# For X11/Desktop
sudo nano /etc/xdg/lxsession/LXDE-pi/autostart
```

Add these lines:

```
@xset s off
@xset -dpms
@xset s noblank
```

Or via command line:

```bash
# Add to ~/.bashrc or autostart script
xset s off
xset -dpms
xset s noblank
```

---

## Troubleshooting

### Common Issues

#### Pi Won't Boot / No Display

| Symptom | Solution |
|---------|----------|
| Green LED doesn't flash | SD card not recognized - reflash the card |
| Green LED flashes but no display | Check HDMI connection, try different cable |
| Rainbow screen | Power supply issue - use a better 5V/3A adapter |

#### Can't Connect via SSH

```bash
# Check if Pi is on the network
ping teleprompter.local

# If mDNS doesn't work, find IP via router admin page
# Or scan network:
nmap -sn 192.168.1.0/24
```

#### Display Mirroring Not Working

```bash
# Check available outputs
xrandr

# If HDMI-1 doesn't exist, try:
xrandr --output HDMI-2 --reflect x

# For composite output (older method):
# Edit /boot/config.txt and add: display_hdmi_rotate=0x10000
```

#### Foot Pedal Not Detected

```bash
# Check USB devices
lsusb

# Check input devices
ls /dev/input/

# View input events
sudo cat /dev/input/event0  # Press pedals, you should see output
```

#### Slow Scrolling / Poor Performance

```bash
# Check CPU usage
htop

# Disable unused services
sudo systemctl disable bluetooth
sudo systemctl disable hciuart

# Use Pi OS Lite instead of Desktop
# Use lighter teleprompter software
```

#### WiFi Drops Frequently

```bash
# Disable power management
sudo iwconfig wlan0 power off

# Make permanent:
echo 'wireless-power off' | sudo tee -a /etc/network/interfaces
```

### Getting Help

- **Raspberry Pi Forums:** [forums.raspberrypi.com](https://forums.raspberrypi.com)
- **Reddit:** [r/raspberry_pi](https://reddit.com/r/raspberry_pi)
- **Stack Overflow:** Tag questions with `raspberry-pi`

---

## Quick Reference Card

Print this for quick reference during setup:

```
=== TELEPROMPTER SETUP CHEAT SHEET ===

SSH Connect:     ssh pi@teleprompter.local
Update System:   sudo apt update && sudo apt upgrade -y
Config Tool:     sudo raspi-config
Mirror Display:  xrandr --output HDMI-1 --reflect x

Teleprompter Controls:
  Space      = Start/Stop scrolling
  Up/Down    = Adjust speed
  Escape     = Exit

Service Commands:
  Start:     sudo systemctl start teleprompter
  Stop:      sudo systemctl stop teleprompter
  Status:    sudo systemctl status teleprompter
  Logs:      journalctl -u teleprompter -f
```

---

## Next Steps

1. **Test your setup** - Run your teleprompter app and verify text displays correctly
2. **Load your script** - Add your teleprompter text content
3. **Mount in housing** - See [build-guide.md](build-guide.md) for assembly
4. **Fine-tune** - Adjust font size, scroll speed, and colors for your setup
