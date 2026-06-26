# Code Signing with SHA256 Checksums

This project automatically generates SHA256 checksums for all build artifacts. No certificates required!

## Quick Start

Build your app and checksums are generated automatically:

```bash
# Desktop (Windows, macOS, Linux)
npm run build:desktop

# Android
npm run build:android

# iOS
npm run build:ios
```

That's it! Checksums are automatically created for every build artifact.

## What Gets Generated

After building, you'll find:

1. **Individual checksum files** - Each artifact gets a `.sha256` file
   - `KeyboardSimulator.exe.sha256`
   - `KeyboardSimulator.dmg.sha256`
   - `keyboardsimulator.AppImage.sha256`
   - etc.

2. **CHECKSUMS.txt manifest** - A complete list of all checksums in one file

## Verifying Downloads

### On Linux/macOS:
```bash
# Verify a single file
sha256sum -c KeyboardSimulator.dmg.sha256

# Verify all files
sha256sum -c CHECKSUMS.txt
```

### On Windows (PowerShell):
```powershell
# Verify a single file
$hash = (Get-FileHash KeyboardSimulator.exe -Algorithm SHA256).Hash
$expected = Get-Content KeyboardSimulator.exe.sha256
if ($hash -eq $expected.Split()[0]) { 
    Write-Host "✓ Checksum verified" 
} else { 
    Write-Host "✗ Checksum mismatch" 
}
```

## Manual Checksum Generation

If you need to regenerate checksums:

```bash
npm run checksums
```

This scans the `src-tauri/target/release/bundle/` directory and generates checksums for all artifacts.

## Checksum Files Location

After building, find your checksums here:

```
src-tauri/target/release/bundle/
├── dmg/
│   ├── KeyboardSimulator.dmg
│   └── KeyboardSimulator.dmg.sha256
├── appimage/
│   ├── keyboardsimulator.AppImage
│   └── keyboardsimulator.AppImage.sha256
├── deb/
│   ├── keyboardsimulator.deb
│   └── keyboardsimulator.deb.sha256
├── nsis/
│   ├── KeyboardSimulator.exe
│   └── KeyboardSimulator.exe.sha256
└── CHECKSUMS.txt
```

## Distribution

When distributing your app:

1. **Upload the installer/package**
2. **Upload the corresponding `.sha256` file** or the `CHECKSUMS.txt`
3. **Users can verify integrity** before installation

Example release structure:
```
releases/
├── v0.1.0/
│   ├── KeyboardSimulator-0.1.0.dmg
│   ├── KeyboardSimulator-0.1.0.dmg.sha256
│   ├── KeyboardSimulator-0.1.0.exe
│   ├── KeyboardSimulator-0.1.0.exe.sha256
│   ├── keyboardsimulator-0.1.0.AppImage
│   ├── keyboardsimulator-0.1.0.AppImage.sha256
│   └── CHECKSUMS.txt
```

## CI/CD Integration

### GitHub Actions

```yaml
name: Build & Sign

on:
  push:
    tags:
      - 'v*'

jobs:
  build:
    strategy:
      matrix:
        platform: [ubuntu-latest, windows-latest, macos-latest]
    
    runs-on: ${{ matrix.platform }}
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Install Rust
        uses: dtolnay/rust-toolchain@stable
      
      - name: Install dependencies
        run: npm install
      
      - name: Build with checksums
        run: npm run build:desktop
      
      - name: Upload artifacts
        uses: actions/upload-artifact@v4
        with:
          name: ${{ matrix.platform }}-build
          path: |
            src-tauri/target/release/bundle/**/*
            src-tauri/target/release/bundle/**/*.sha256
            src-tauri/target/release/bundle/CHECKSUMS.txt
```

### GitLab CI

```yaml
build-desktop:
  stage: build
  parallel:
    matrix:
      - PLATFORM: [linux, windows, macos]
  script:
    - npm install
    - npm run build:desktop
  artifacts:
    paths:
      - src-tauri/target/release/bundle/**/*
      - src-tauri/target/release/bundle/**/*.sha256
      - src-tauri/target/release/bundle/CHECKSUMS.txt
```

## Supported Platforms

✅ **Windows** - `.exe`, `.msi`  
✅ **macOS** - `.dmg`, `.app`  
✅ **Linux** - `.AppImage`, `.deb`, `.rpm`  
✅ **Android** - `.apk`, `.aab`  
✅ **iOS** - `.ipa`

## Security Benefits

- ✓ **Integrity verification** - Users can confirm files haven't been tampered with
- ✓ **Distribution validation** - Ensure downloads aren't corrupted
- ✓ **No certificate costs** - Free and open
- ✓ **Automated** - Generated on every build
- ✓ **Update safety** - Built-in updater uses checksums via `createUpdaterArtifacts`

## How It Works

1. **Build** - Tauri compiles your app for the target platform
2. **Scan** - Script finds all build artifacts automatically
3. **Hash** - SHA256 checksum generated for each file
4. **Save** - Individual `.sha256` files + combined `CHECKSUMS.txt`
5. **Distribute** - Upload artifacts with checksums

## Troubleshooting

### "No build artifacts found"
Build the app first:
```bash
npm run tauri build
```

### Checksums not in release
Make sure you run the build commands that include checksum generation:
```bash
npm run build:desktop   # Not just 'npm run tauri build'
```

### Want to customize?
Edit `scripts/generate-checksums.cjs` to add support for additional file types or change the output format.

## Build Commands Reference

| Command | Description |
|---------|-------------|
| `npm run build:desktop` | Build desktop apps + generate checksums |
| `npm run build:android` | Build Android APK/AAB + generate checksums |
| `npm run build:ios` | Build iOS IPA + generate checksums |
| `npm run checksums` | Regenerate checksums for existing builds |

## Updates & Verification

The `createUpdaterArtifacts: true` setting in `tauri.conf.json` ensures:
- Tauri's built-in updater uses checksums
- `.sig` files are created for update verification
- Users get safe, verified updates automatically

Your app is now secure and verifiable without expensive code signing certificates! 🎉
