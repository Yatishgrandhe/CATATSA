# Solution: Pico Only Works Once After Reconnecting

## The Problem
Your Pico only works once after reconnecting, then picotool can't detect it anymore. This happens because:
- **picotool requires the Pico to be running a program with picotool support**
- After flashing your program (which doesn't have picotool support), the Pico can no longer be detected by picotool
- You have to put it in BOOTSEL mode every time to flash again

## The Solution: Use UF2 Method (Always Works!)

The **UF2 method is the most reliable** way to flash your Pico. It works every time, regardless of what program is running.

### Quick Steps:

1. **Build your project**: Press `Ctrl+Shift+B` (or `Cmd+Shift+B` on Mac)

2. **Put Pico in BOOTSEL mode**:
   - Hold the **BOOTSEL** button on your Pico
   - While holding, plug in the USB cable
   - Release the BOOTSEL button
   - Wait 2-3 seconds - you should see an "RPI-RP2" drive appear

3. **Flash using the script**:
   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P`)
   - Type: `Tasks: Run Task`
   - Select: **"Flash UF2 (Recommended - Always Works)"**
   - The script will automatically copy the UF2 file!

### Or Use Terminal:
```bash
./flash_uf2.sh
```

The script will:
- ✅ Check if your project is built
- ✅ Check if Pico is in BOOTSEL mode
- ✅ Automatically copy the UF2 file
- ✅ The Pico will reboot and run your program automatically

## Why UF2 is Better

- ✅ **Always works** - No need for picotool support
- ✅ **Simple** - Just copy a file
- ✅ **Reliable** - Works every time
- ✅ **No detection issues** - Doesn't matter what program is running

## Alternative: Enable picotool Support

If you want picotool to work every time, you need to rebuild your project with picotool support enabled. I've already updated your `CMakeLists.txt` to enable USB stdio, but you'll need to:

1. **Rebuild your project** (the CMakeLists.txt was updated)
2. **Flash once using UF2 method** (to get the new version with picotool support)
3. **After that, picotool should work** for subsequent flashes

However, **UF2 method is still recommended** because it's simpler and always works!

## Summary

**Use the UF2 method** - it's the easiest and most reliable solution. Just:
1. Build project
2. Put Pico in BOOTSEL mode
3. Run "Flash UF2" task
4. Done! ✅

