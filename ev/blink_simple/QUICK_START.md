# Quick Start Guide - Method 1: Using the Helper Script

## Step-by-Step Instructions

### Step 1: Build Your Project
1. Open VS Code in the `blink_simple` folder
2. Press **Ctrl+Shift+B** (or **Cmd+Shift+B** on Mac) to build
3. Wait for the build to complete (you should see "Build finished" in the terminal)

### Step 2: Connect Your Pico
1. Connect your Raspberry Pi Pico to your computer via USB
2. **Important**: The Pico should be running normally (NOT in BOOTSEL mode)
   - If you just plugged it in and see an "RPI-RP2" drive, it's in BOOTSEL mode
   - In that case, unplug and replug WITHOUT holding BOOTSEL button

### Step 3: Run the Flash Script
You have two options:

#### Option A: Using VS Code Task (Easiest)
1. Press **Ctrl+Shift+P** (or **Cmd+Shift+P** on Mac)
2. Type: `Tasks: Run Task`
3. Select: **"Run Project (via script)"**
4. The script will automatically:
   - Check if your Pico is connected
   - Flash the program
   - Show you the results

#### Option B: Using Terminal
1. Open a terminal in VS Code (Ctrl+` or Cmd+`)
2. Run:
   ```bash
   ./flash_pico.sh
   ```

### What the Script Does
- ✅ Checks if picotool is installed
- ✅ Checks if your project is built
- ✅ Checks if your Pico is connected
- ✅ Flashes your program automatically
- ✅ Shows clear error messages if something goes wrong

### If It Doesn't Work
If the script says "Pico not detected", try:
1. **Check USB connection** - Try a different USB cable or port
2. **Use Method 2 (UF2)** - Put Pico in BOOTSEL mode and copy the `.uf2` file manually
3. **Check permissions** - Make sure picotool is executable

### Quick Test
To test if your Pico is detected, run this in terminal:
```bash
~/.pico-sdk/picotool/2.2.0-a4/picotool/picotool info
```

If you see Pico information, it's working! If you see an error, the Pico isn't detected.

