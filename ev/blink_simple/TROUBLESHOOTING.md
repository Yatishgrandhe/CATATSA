# Troubleshooting picotool Error (Exit Code 249)

## Problem
The picotool command fails with exit code 249 when trying to flash the Pico.

## Common Causes and Solutions

### 1. Pico Not Connected or Not Detected
**Solution:**
- Make sure your Raspberry Pi Pico is connected via USB
- Run the "Check Pico Connection" task in VS Code to verify detection
- Or run manually: `~/.pico-sdk/picotool/2.2.0-a4/picotool/picotool info`

### 2. Pico Not in Correct Mode
**For picotool to work:**
- The Pico must be running a program that supports picotool (not in BOOTSEL mode)
- If you just plugged in the Pico, it might be in BOOTSEL mode

**Solution:**
- If in BOOTSEL mode, use the UF2 method instead (see below)
- Or flash a program that supports picotool first

### 3. Path with Spaces Issue
Your project path contains spaces which can cause issues:
```
Mobile Documents/com~apple~CloudDocs/TSA website/CATATSA/ev/blink_simple
```

**Solutions:**
1. **Use the helper script** (Recommended):
   - Run the task: "Run Project (via script)"
   - Or manually run: `./flash_pico.sh`

2. **Use UF2 method** (Most reliable):
   - Put Pico in BOOTSEL mode (hold BOOTSEL button while plugging in USB)
   - A drive named "RPI-RP2" will appear
   - Copy `build/blink_simple.uf2` to the RPI-RP2 drive
   - The Pico will automatically reboot and run your program

### 4. Permissions Issue
**Solution:**
- Make sure picotool is executable:
  ```bash
  chmod +x ~/.pico-sdk/picotool/2.2.0-a4/picotool/picotool
  ```

### 5. USB Driver Issues (macOS)
**Solution:**
- Make sure you have the necessary USB drivers installed
- Try a different USB cable or port
- Check System Information to see if the Pico is detected

## Recommended Workflow

### Method 1: Using UF2 (Easiest and Most Reliable)
1. Build your project (Ctrl+Shift+B or Cmd+Shift+B)
2. Put Pico in BOOTSEL mode:
   - Hold the BOOTSEL button on the Pico
   - While holding, plug in the USB cable
   - Release BOOTSEL button
3. Copy `build/blink_simple.uf2` to the RPI-RP2 drive
4. The Pico will automatically reboot and run your program

### Method 2: Using Helper Script
1. Build your project
2. Run the task: "Run Project (via script)"
3. The script will check for Pico connection and flash automatically

### Method 3: Using picotool Directly
1. Make sure Pico is connected and running (not in BOOTSEL mode)
2. Run: `~/.pico-sdk/picotool/2.2.0-a4/picotool/picotool info` to verify connection
3. Run: `~/.pico-sdk/picotool/2.2.0-a4/picotool/picotool load build/blink_simple.elf -fx`

## Quick Test
To test if your Pico is working:
```bash
~/.pico-sdk/picotool/2.2.0-a4/picotool/picotool info
```

If this works, your Pico is detected. If not, check USB connection and try BOOTSEL mode.

## Additional Notes
- The `.uf2` file is always generated during build and is the most reliable method
- The `.elf` file is used by picotool and debuggers
- Exit code 249 typically means "device not found" or "communication error"

