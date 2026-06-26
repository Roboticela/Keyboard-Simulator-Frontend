<div align="center">

![App Logo](https://github.com/Roboticela/KeyboardSimulator-NativeApplication/blob/main/public/Favicon.png)

# KeyboardSimulator

[![AGPL License](https://img.shields.io/badge/license-AGPL--3.0-blue.svg)](LICENSE)
[![Tauri](https://img.shields.io/badge/Tauri-2.0-blue.svg)](https://tauri.app/)
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![Rust](https://img.shields.io/badge/Rust-Latest-orange.svg)](https://www.rust-lang.org/)

**A modern, powerful, and open-source desktop application for keyboard simulation**

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage-guide) • [Contributing](#-contributing) • [Support](#-support)

---

</div>

## 📖 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Running the Application](#-running-the-application)
- [Building for Production](#-building-for-production)
- [Usage Guide](#-usage-guide)
- [Project Structure](#-project-structure)
- [Database](#-database)
- [Configuration](#-configuration)
- [Contributing](#-contributing)
- [Code of Conduct](#-code-of-conduct)
- [Support](#-support)
- [Roadmap](#-roadmap)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)
- [About Roboticela](#-about-roboticela)

---

## 🌟 About

**KeyboardSimulator** is a cross-platform desktop application that provides an interactive 3D visualization of laptop keyboards. Built with modern technologies like Tauri, React, React Three Fiber, and Rust, it offers a realistic keyboard simulation experience with real-time typing feedback, multiple keyboard models, and extensive customization options.

Perfect for demonstrations, tutorials, accessibility testing, or simply exploring different keyboard layouts, KeyboardSimulator brings keyboard interaction to life with beautiful 3D graphics and smooth animations.

### Why This Project?

- ✅ **Free and Open Source** - Licensed under AGPL-3.0
- ✅ **Cross-Platform** - Works on Linux, Windows, and macOS
- ✅ **Fast & Lightweight** - Built with Tauri and Rust for maximum performance
- ✅ **3D Visualization** - Realistic 3D keyboard rendering with React Three Fiber
- ✅ **Multiple Keyboard Models** - Support for various laptop keyboard layouts
- ✅ **Real-time Interaction** - Live typing feedback and keyboard synchronization
- ✅ **Privacy-Focused** - All data stored locally, no external servers
- ✅ **Modern UI** - Beautiful, responsive design with 8 customizable themes
- ✅ **Interactive Features** - Hand visualization, mouse controls, and system indicators
- ✅ **Actively Maintained** - Regular updates and community support

---

## ✨ Features

### ⌨️ 3D Keyboard Visualization
- **Multiple Keyboard Models** - Support for various laptop keyboard layouts:
  - Asus UX370UAR
  - Dell Latitude 5300 2-in-1
  - Dell Latitude E7270
  - HP EliteBook 820 G4
  - Toshiba Portege X30-E
- **Interactive 3D Rendering** - Powered by React Three Fiber for realistic keyboard visualization
- **Real-time Key Press Feedback** - Visual feedback when keys are pressed
- **Keyboard Synchronization** - Sync with your physical keyboard input
- **Customizable View** - Rotate, zoom, and adjust keyboard perspective

### 📝 Document Editor
- **Live Text Editor** - Type and see your text appear in real-time
- **Caret Position Tracking** - Visual cursor position indicator
- **Fullscreen Mode** - Focus on typing without distractions
- **Save & Copy Functions** - Export your typed content easily
- **Clear & Reset** - Start fresh with one click

### 🎨 Customization & Themes
- **Multiple Themes** - Choose from 8 beautiful color themes:
  - Navy, Dark, Light, Sunset, Ocean, Forest, Purple Dream, Midnight
- **Theme Switching** - Seamless theme transitions
- **Responsive Design** - Optimized for various screen sizes
- **Smooth Animations** - Powered by Framer Motion

### 🎮 Interactive Controls
- **Hand Visualization** - See animated hands typing on the keyboard
- **Mouse Controls** - Interactive mouse pointer visualization
- **Arrow Key Indicators** - Visual feedback for arrow key presses
- **Fn Shortcut Mode** - Toggle Fn key shortcuts
- **Typing Hands** - Animated hands that follow your typing

### 🔒 Keyboard Lock States
- **Caps Lock Indicator** - Visual LED indicator for Caps Lock
- **Num Lock Indicator** - Visual LED indicator for Num Lock
- **Scroll Lock Indicator** - Visual LED indicator for Scroll Lock
- **Insert Mode Indicator** - Visual feedback for Insert mode
- **Fn Lock/Hold** - Toggle Fn lock states

### 💻 System State Indicators
- **Battery Status** - Monitor battery level
- **WiFi Status** - Connection indicator
- **Bluetooth Status** - Bluetooth connection state
- **Flight Mode** - Airplane mode indicator
- **Microphone Status** - Mic on/off indicator
- **Display Brightness** - Screen brightness controls
- **Volume Control** - Audio level indicators
- **Touchpad Status** - Touchpad enable/disable

### 🎯 Advanced Features
- **Fullscreen Mode** - Immersive keyboard viewing experience
- **Keyboard Sync** - Real-time synchronization with physical keyboard
- **Reset View** - Quickly reset keyboard camera position
- **Reset All** - Reset all settings to defaults
- **About & License** - Project information and licensing details

---

## 🛠️ Technology Stack

### Frontend
- **[React 19](https://reactjs.org/)** - Modern UI library with latest features
- **[TypeScript 5.8](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[TailwindCSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion 12](https://www.framer.com/motion/)** - Animation library
- **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)** - 3D rendering library
- **[Three.js](https://threejs.org/)** - 3D graphics library
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Vite 7](https://vitejs.dev/)** - Lightning-fast build tool

### Backend
- **[Tauri 2](https://tauri.app/)** - Desktop application framework
- **[Rust](https://www.rust-lang.org/)** - Systems programming language

### Development Tools
- **[npm](https://www.npmjs.com/)** - Node package manager
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[ESLint](https://eslint.org/)** - Code linting (optional)

---

## 📋 Prerequisites

Before installing, ensure you have the following:

> 💡 **For detailed installation instructions and complete dependency lists, see [INSTALL_DEPENDENCIES.md](INSTALL_DEPENDENCIES.md)**

### Required Software

1. **Node.js** (v20 or higher) - [Download](https://nodejs.org/)
2. **Rust** (latest stable) - [Install](https://www.rust-lang.org/tools/install)
3. **npm** (comes with Node.js)

### System Dependencies

#### Linux (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install libwebkit2gtk-4.1-dev \
  build-essential \
  curl \
  wget \
  file \
  libxdo-dev \
  libssl-dev \
  libayatana-appindicator3-dev \
  librsvg2-dev
```

#### Linux (Fedora)
```bash
sudo dnf check-update
sudo dnf install webkit2gtk4.1-devel \
  openssl-devel \
  curl \
  wget \
  file \
  libappindicator-gtk3-devel \
  librsvg2-devel
```

#### Linux (Arch)
```bash
sudo pacman -Syu
sudo pacman -S webkit2gtk \
  base-devel \
  curl \
  wget \
  file \
  openssl \
  appmenu-gtk-module \
  gtk3 \
  libappindicator-gtk3 \
  librsvg
```

#### macOS
```bash
xcode-select --install
```

#### Windows
- Install [Microsoft Visual Studio C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/)
- Install [WebView2](https://developer.microsoft.com/en-us/microsoft-edge/webview2/) (usually pre-installed on Windows 10/11)

### For Multi-Platform & Mobile Development (Optional)

If you plan to build for multiple platforms or mobile devices:
- **Android builds** - See [INSTALL_DEPENDENCIES.md](INSTALL_DEPENDENCIES.md#android-build-tools) for Android SDK, NDK, and JDK setup
- **iOS builds** - Requires macOS with Xcode and Apple Developer account
- **Cross-compilation** - See [INSTALL_DEPENDENCIES.md](INSTALL_DEPENDENCIES.md#cross-compilation-tools) for toolchain setup
- **Automated setup scripts** - Available in [INSTALL_DEPENDENCIES.md](INSTALL_DEPENDENCIES.md#all-in-one-installation-scripts)

---

## 📥 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Roboticela/KeyboardSimulator-NativeApplication.git
cd KeyboardSimulator-NativeApplication
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Build Rust Dependencies

```bash
cd src-tauri
cargo build
cd ..
```

---

## 🚀 Running the Application

### Development Mode

Run the application in development mode with hot-reload:

```bash
npm run tauri dev
```

This will:
- Start the Vite development server for the frontend
- Build and run the Tauri application
- Enable hot-reload for both frontend and backend changes

### Frontend Only (Web Preview)

To test the frontend without Tauri:

```bash
npm run dev
```

Then open http://localhost:5173 in your browser.

---

## 📦 Building for Production

### Prerequisites

Before building for production, ensure you have:

1. **All dependencies installed** - See [INSTALL_DEPENDENCIES.md](INSTALL_DEPENDENCIES.md) for detailed platform-specific setup
2. **Node.js 20+** and **npm** installed
3. **Rust** and **Cargo** installed
4. **Platform-specific build tools** (WebKit2GTK for Linux, MSVC for Windows, Xcode for macOS)

To verify your setup:
```bash
node --version
npm --version
rustc --version
cargo --version
```

### Quick Build (Current Platform)

Build for your current platform:

```bash
npm run build
npm run tauri build
```

This will:
1. Build the frontend (React + Vite)
2. Compile the Rust backend
3. Bundle the application with Tauri
4. Generate platform-specific installers

### Automated Multi-Platform Builds

#### Build for Desktop (All Platforms)
```bash
npm run build:desktop
```

This builds for your current platform and generates checksums.

#### Build for Android
```bash
npm run build:android
```

**Note:** Requires Android SDK. See [INSTALL_DEPENDENCIES.md](INSTALL_DEPENDENCIES.md) for setup.

#### Build for iOS
```bash
npm run build:ios
```

**Note:** Requires macOS with Xcode. See [INSTALL_DEPENDENCIES.md](INSTALL_DEPENDENCIES.md) for setup.

#### Build for All Available Platforms
```bash
npm run build:all
```

This script automatically:
- Detects your current platform
- Builds for all compatible targets
- Skips platforms that require unavailable toolchains
- Generates checksums for all builds
- Provides a detailed build summary

The script will intelligently handle cross-compilation and skip unsupported builds.

### Platform-Specific Manual Builds

#### Linux

**x86_64 (64-bit Intel/AMD):**
```bash
npm run tauri build -- --target x86_64-unknown-linux-gnu
```

**ARM64 (64-bit ARM):**
```bash
npm run tauri build -- --target aarch64-unknown-linux-gnu
```

**ARMv7 (32-bit ARM):**
```bash
npm run tauri build -- --target armv7-unknown-linux-gnueabihf
```

**Output formats:**
- `.deb` package (Debian/Ubuntu)
- `.rpm` package (Fedora/RHEL) - when built on RPM-based systems
- `.AppImage` (Universal Linux)

#### Windows

**x86_64 (64-bit):**
```bash
npm run tauri build -- --target x86_64-pc-windows-msvc
```

**ARM64 (ARM-based Windows):**
```bash
npm run tauri build -- --target aarch64-pc-windows-msvc
```

**i686 (32-bit - legacy):**
```bash
npm run tauri build -- --target i686-pc-windows-msvc
```

**Output formats:**
- `.msi` installer (Windows Installer)
- `.exe` standalone executable

#### macOS

**Intel Macs (x86_64):**
```bash
npm run tauri build -- --target x86_64-apple-darwin
```

**Apple Silicon (M1/M2/M3/M4 - ARM64):**
```bash
npm run tauri build -- --target aarch64-apple-darwin
```

**Universal Binary (Intel + Apple Silicon):**
```bash
npm run tauri build -- --target universal-apple-darwin
```

**Output formats:**
- `.dmg` disk image (recommended for distribution)
- `.app` application bundle

#### Android

**ARM64 (64-bit - most modern devices):**
```bash
npm run tauri android build --target aarch64 --apk
```

**ARMv7 (32-bit - older devices):**
```bash
npm run tauri android build --target armv7 --apk
```

**x86_64 (64-bit emulators):**
```bash
npm run tauri android build --target x86_64 --apk
```

**Output format:**
- `.apk` package (Android Package)

**Note:** Android builds require Android SDK, NDK, and JDK. See [INSTALL_DEPENDENCIES.md](INSTALL_DEPENDENCIES.md) for complete setup instructions.

#### iOS

**Device (ARM64):**
```bash
npm run tauri ios build -- --target aarch64-apple-ios
```

**Simulator (Intel):**
```bash
npm run tauri ios build -- --target x86_64-apple-ios
```

**Simulator (Apple Silicon):**
```bash
npm run tauri ios build -- --target aarch64-apple-ios-sim
```

**Output format:**
- `.ipa` package (iOS App)

**Note:** iOS builds require macOS with Xcode and an Apple Developer account for distribution.

### Build Output Locations

**Desktop builds:**
```
src-tauri/target/release/          # Executables
src-tauri/target/release/bundle/   # Installers
```

**Android builds:**
```
src-tauri/gen/android/app/build/outputs/apk/
```

**iOS builds:**
```
src-tauri/gen/ios/build/
```

### Advanced Build Options

#### Debug Build (Faster, Larger, with Debug Symbols)
```bash
npm run tauri build --debug
```

#### Release Build with Optimizations (Default)
```bash
npm run tauri build
```

#### Build with Specific Features
```bash
npm run tauri build -- --features "custom-protocol"
```

#### Verbose Build Output
```bash
npm run tauri build -- --verbose
```

### 🔐 Code Signing and Checksums

All builds automatically generate SHA256 checksums for integrity verification:

```bash
# Build with automatic checksum generation
npm run build:desktop    # Desktop (Windows, macOS, Linux)
npm run build:android    # Android
npm run build:ios        # iOS
npm run build:all        # All platforms
```

Each build artifact gets:
- Individual `.sha256` checksum file
- Combined `CHECKSUMS.txt` manifest

**Manually generate checksums:**
```bash
npm run checksums
```

**Verify downloads:**
```bash
# Linux/macOS
sha256sum -c KeyboardSimulator.dmg.sha256

# Windows (PowerShell)
Get-FileHash KeyboardSimulator.msi -Algorithm SHA256

# Or use the included verification script
npm run verify /path/to/installer
```

For detailed code signing, notarization, and security information, see [SIGNING.md](SIGNING.md).

### Cross-Platform Build Matrix

| Platform | Host OS | Requirements |
|----------|---------|--------------|
| **Linux x86_64** | Linux, macOS, Windows | GTK3, WebKit2GTK |
| **Linux ARM64** | Linux | ARM64 cross-compiler |
| **Linux ARMv7** | Linux | ARMv7 cross-compiler |
| **Windows x86_64** | Windows | MSVC or MinGW (Linux) |
| **Windows ARM64** | Windows | MSVC ARM64 tools |
| **macOS Intel** | macOS | Xcode |
| **macOS ARM64** | macOS (Apple Silicon) | Xcode |
| **Android** | Linux, macOS, Windows | Android SDK, NDK, JDK 17+ |
| **iOS** | macOS only | Xcode, Apple Developer |

### CI/CD Builds

For automated builds in CI/CD pipelines:

**GitHub Actions example:**
```yaml
- name: Install dependencies
  run: |
    # See INSTALL_DEPENDENCIES.md for platform-specific commands
    
- name: Build desktop app
  run: npm run build:desktop
  
- name: Upload artifacts
  uses: actions/upload-artifact@v3
  with:
    name: installers
    path: src-tauri/target/release/bundle/
```

### Build Troubleshooting

**Frontend build fails:**
```bash
# Clear cache and reinstall
rm -rf node_modules dist
npm install
npm run build
```

**Rust compilation errors:**
```bash
# Update Rust toolchain
rustup update

# Clean Rust build cache
cd src-tauri
cargo clean
cd ..
```

**Missing dependencies:**
- See [INSTALL_DEPENDENCIES.md](INSTALL_DEPENDENCIES.md) for complete dependency lists
- Run the automated installation script: `./install-build-deps.sh`

**Cross-compilation issues:**
- Ensure target is installed: `rustup target add <target-triple>`
- Install platform-specific cross-compilers (see [INSTALL_DEPENDENCIES.md](INSTALL_DEPENDENCIES.md))

**Build size too large:**
```bash
# Strip debug symbols (Linux/macOS)
strip src-tauri/target/release/keyboardsimulator

# Or use cargo-strip
cargo install cargo-strip
cargo strip

```

### Production Build Checklist

Before releasing:

- [ ] Update version in `package.json` and `src-tauri/tauri.conf.json`
- [ ] Update `CHANGELOG.md` with release notes
- [ ] Test the application thoroughly in development mode
- [ ] Run `npm run build:all` for all platforms
- [ ] Verify checksums are generated
- [ ] Test installers on target platforms
- [ ] Run security audits: `npm audit` and `cargo audit`
- [ ] Update documentation if needed
- [ ] Create GitHub release with installers and checksums
- [ ] Update website with download links

### Build Performance Tips

1. **Use npm** for package management
2. **Enable Rust incremental compilation** (already enabled by default)
3. **Build on SSD** for faster I/O
4. **Allocate sufficient RAM** (8GB+ recommended)
5. **Use multi-core builds** (Rust uses all cores by default)
6. **Cache dependencies** in CI/CD (node_modules, cargo cache)

### Additional Resources

- **Detailed dependency installation:** [INSTALL_DEPENDENCIES.md](INSTALL_DEPENDENCIES.md)
- **Code signing guide:** [SIGNING.md](SIGNING.md)
- **Tauri documentation:** https://tauri.app/
- **Build configuration:** `src-tauri/tauri.conf.json`
- **Build scripts:** `scripts/build-all.cjs`

---

## 📚 Usage Guide

### Getting Started

1. **Launch the Application** - Open the built application or run in dev mode
2. **Select Keyboard Model** - Choose from the available keyboard models in the header
3. **Start Typing** - Use the document editor to type and see the keyboard respond
4. **Explore Features** - Try different themes, enable hand visualization, and experiment with controls

### Using the Keyboard Simulator

1. **Select a Keyboard Model**
   - Click the keyboard dropdown in the header
   - Choose from: Asus UX370UAR, Dell Latitude 5300, Dell Latitude E7270, HP EliteBook 820 G4, or Toshiba Portege X30-E

2. **Type in the Document Editor**
   - The editor is located in the top section of the interface
   - Type any text and watch the 3D keyboard respond
   - Use the toolbar buttons to save, copy, or clear your text

3. **Interact with the 3D Keyboard**
   - Click on keys to see them press
   - Rotate and zoom the keyboard view using mouse controls
   - Enable keyboard sync to see your physical keyboard input reflected

### Customization Options

1. **Change Theme**
   - Click the theme button in the header
   - Select from 8 available themes (Navy, Dark, Light, Sunset, Ocean, Forest, Purple Dream, Midnight)

2. **Enable Features**
   - **Hand Visualization** - See animated hands typing
   - **Mouse Controls** - Show mouse pointer visualization
   - **Arrow Keys** - Visual feedback for arrow key presses
   - **Fn Shortcut** - Toggle Fn key shortcuts
   - **Typing Hands** - Animated hands that follow typing
   - **Keyboard Sync** - Sync with physical keyboard input
   - **Fullscreen** - Enter immersive fullscreen mode

3. **View Status Indicators**
   - Check the status controls panel for:
     - Lock states (Caps Lock, Num Lock, Scroll Lock, Insert)
     - System indicators (Battery, WiFi, Bluetooth, Flight Mode, etc.)
     - Click indicators to toggle states

### Keyboard Controls

- **Rotate View** - Click and drag on the keyboard
- **Zoom** - Use mouse wheel or pinch gesture
- **Reset View** - Click "Reset View" button to restore default camera position
- **Reset All** - Click "Reset" button to restore all settings to defaults

### Fullscreen Mode

1. Click the **Fullscreen** button in the header
2. The keyboard will expand to fill the entire screen
3. Press **Escape** to exit fullscreen mode

### Menu Options

Access additional options from the menu button:
- **Story** - View the project story
- **About** - Learn about the project
- **GitHub** - Open the repository
- **License** - View license information
- **Privacy Policy** - Read privacy policy
- **Terms of Service** - View terms of service

---

## 📁 Project Structure

```
KeyboardSimulator-NativeApplication/
│
├── src/                          # React frontend source
│   ├── components/              # React components
│   │   ├── Keyboard.tsx         # Main 3D keyboard component
│   │   ├── DocumentEditor.tsx   # Text editor component
│   │   ├── AppHeader.tsx        # Application header with controls
│   │   ├── StatusControls.tsx  # Status indicators panel
│   │   ├── AboutModal.tsx       # About dialog
│   │   ├── LicenseModal.tsx     # License dialog
│   │   ├── StoryModal.tsx       # Story dialog
│   │   ├── ThemeScript.tsx     # Theme initialization
│   │   ├── Asus-UX370UAR.tsx   # Asus keyboard model
│   │   ├── Dell-Latitude-5300-2-in-1.tsx  # Dell keyboard model
│   │   ├── Dell-Latitude-E7270.tsx  # Dell keyboard model
│   │   ├── HP-EliteBook-820-G4.tsx  # HP keyboard model
│   │   ├── Toshiba-Portege-X30-E.tsx  # Toshiba keyboard model
│   │   └── ui/                  # UI components
│   │       ├── button.tsx       # Button component
│   │       └── dropdown-menu.tsx  # Dropdown menu component
│   │
│   ├── contexts/                # React contexts for state management
│   │   ├── ThemeContext.tsx     # Theme state
│   │   ├── KeyboardTypeContext.tsx  # Keyboard model selection
│   │   ├── KeyboardViewContext.tsx  # 3D view controls
│   │   ├── KeyboardSyncContext.tsx  # Keyboard synchronization
│   │   ├── KeyboardInputContext.tsx  # Keyboard input handling
│   │   ├── KeyboardLockContext.tsx  # Lock states (Caps, Num, etc.)
│   │   ├── HandContext.tsx      # Hand visualization
│   │   ├── MouseContext.tsx     # Mouse controls
│   │   ├── ArrowContext.tsx     # Arrow key controls
│   │   ├── FnFunctionContext.tsx  # Fn function keys
│   │   ├── FnShortcutContext.tsx  # Fn shortcuts
│   │   ├── FullscreenContext.tsx  # Fullscreen mode
│   │   └── SystemStateContext.tsx  # System indicators
│   │
│   ├── lib/                     # Utility libraries
│   │   ├── keyboard-configs/    # Keyboard button configurations
│   │   │   ├── asus-ux370uar.ts
│   │   │   ├── dell-latitude-5300-2-in-1.ts
│   │   │   ├── dell-latitude-e7270.ts
│   │   │   ├── hp-elitebook-820-g4.ts
│   │   │   ├── toshiba-portege-x30-e.ts
│   │   │   └── index.ts
│   │   ├── keyboard-button-types.ts  # TypeScript types
│   │   └── utils.ts             # Utility functions
│   │
│   ├── styles/                  # Component-specific styles
│   │   ├── Asus-UX370UAR.css
│   │   ├── Dell-Latitude-5300-2-in-1.css
│   │   ├── Dell-Latitude-E7270.css
│   │   ├── HP-EliteBook-820-G4.css
│   │   └── Toshiba-Portege-X30-E.css
│   │
│   ├── App.tsx                   # Main app component
│   ├── App.css                   # Global app styles
│   └── main.tsx                  # React entry point
│
├── src-tauri/                   # Tauri/Rust backend
│   ├── src/
│   │   ├── main.rs              # Tauri entry point
│   │   └── lib.rs               # Tauri commands (API)
│   │
│   ├── icons/                   # Application icons
│   ├── capabilities/            # Tauri security capabilities
│   ├── Cargo.toml              # Rust dependencies
│   ├── build.rs                # Build script
│   └── tauri.conf.json         # Tauri configuration
│
├── public/                      # Public static assets
│   └── Favicon.png             # Application favicon
│
├── scripts/                     # Build/utility scripts
│   ├── build-all.cjs           # Multi-platform build script
│   ├── generate-checksums.cjs   # Checksum generation
│   ├── verify-checksum.cjs     # Checksum verification
│   ├── update-year.cjs         # Copyright year updater
│   ├── generate-android-keystore.sh  # Android keystore generation
│   └── encode-keystore-for-github.sh  # Keystore encoding
│
├── dist/                        # Built frontend files
│
├── node_modules/                # Node.js dependencies
│
├── .gitignore                   # Git ignore rules
├── index.html                   # HTML entry point
├── package.json                 # Node.js package config
├── package-lock.json           # npm lock file
├── tsconfig.json               # TypeScript config (app)
├── tsconfig.node.json          # TypeScript config (node)
├── vite.config.ts              # Vite configuration
├── LICENSE                      # AGPL-3.0 license
└── README.md                    # This file
```

---

## 🗄️ Data Storage

The application stores user preferences and settings locally. No database is required as this is a client-side visualization tool.

### Local Storage

The application uses browser local storage (via Tauri's storage APIs) to persist:
- Selected keyboard model
- Theme preference
- View settings (camera position, zoom level)
- Feature toggles (hand visualization, mouse controls, etc.)
- System state preferences

All data is stored locally on your device and never transmitted to external servers.

---

## ⚙️ Configuration

### Tauri Configuration

The `src-tauri/tauri.conf.json` file contains Tauri-specific settings:

- App identifier and version
- Window size and title
- Security capabilities
- Bundle configuration
- Platform-specific options

Modify this file to customize the application behavior.

### Keyboard Configuration

Keyboard layouts are defined in `src/lib/keyboard-configs/`. Each keyboard model has its own configuration file that maps button IDs to key codes and visual properties.

To add a new keyboard model:
1. Create a new component in `src/components/` (e.g., `NewKeyboard.tsx`)
2. Create a configuration file in `src/lib/keyboard-configs/`
3. Add the keyboard to the `keyboards` array in `AppHeader.tsx`
4. Export the configuration in `src/lib/keyboard-configs/index.ts`

---

## 🤝 Contributing

We welcome contributions from the community! Whether you're fixing bugs, adding features, improving documentation, or spreading the word, every contribution matters.

### Ways to Contribute

1. **Report Bugs** - Open an issue on GitHub with detailed information
2. **Suggest Features** - Share your ideas for new features or improvements
3. **Write Code** - Submit pull requests with bug fixes or new features
4. **Improve Documentation** - Help make the docs clearer and more comprehensive
5. **Share the Project** - Star the repository and tell others about it

### Getting Started with Development

1. **Fork the Repository**
   ```bash
   # Click the "Fork" button on GitHub, then clone your fork
   git clone https://github.com/Roboticela/KeyboardSimulator-NativeApplication.git
   cd KeyboardSimulator-NativeApplication
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   # or
   git checkout -b fix/bug-description
   ```

3. **Make Your Changes**
   - Write clean, readable code
   - Follow existing code style and conventions
   - Add comments where necessary
   - Test your changes thoroughly

4. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Add: Brief description of your changes"
   ```

   Commit message prefixes:
   - `Add:` - New feature
   - `Fix:` - Bug fix
   - `Update:` - Improvement to existing feature
   - `Docs:` - Documentation changes
   - `Style:` - Code style changes (formatting, etc.)
   - `Refactor:` - Code refactoring
   - `Test:` - Adding or updating tests
   - `Chore:` - Maintenance tasks

5. **Push to Your Fork**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Go to the original repository on GitHub
   - Click "New Pull Request"
   - Select your fork and branch
   - Provide a clear description of your changes
   - Reference any related issues

### Code Style Guidelines

#### Frontend (TypeScript/React)
- Use functional components with hooks
- Use TypeScript for type safety
- Follow React best practices
- Use TailwindCSS utility classes for styling
- Keep components small and focused
- Write descriptive variable and function names

#### Backend (Rust)
- Follow Rust conventions and idioms
- Use `cargo fmt` for formatting
- Use `cargo clippy` for linting
- Handle errors properly
- Write documentation comments for public APIs


### Testing

Before submitting a pull request:

1. Test your changes in development mode
2. Build the application and test the production build
3. Test on multiple platforms if possible
4. Verify no existing functionality is broken
5. Check for console errors or warnings

### Pull Request Review Process

1. A maintainer will review your PR
2. They may request changes or ask questions
3. Make any requested updates
4. Once approved, your PR will be merged
5. Your contribution will be credited

---

## 📜 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive environment for all contributors, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards

**Positive Behavior:**
- Being respectful and inclusive
- Being patient and welcoming to newcomers
- Accepting constructive criticism gracefully
- Focusing on what's best for the community
- Showing empathy towards others

**Unacceptable Behavior:**
- Harassment, trolling, or derogatory comments
- Personal or political attacks
- Publishing others' private information
- Any conduct inappropriate in a professional setting

### Enforcement

Instances of unacceptable behavior may be reported to the project maintainers. All complaints will be reviewed and investigated promptly and fairly. Maintainers have the right to remove, edit, or reject comments, commits, code, issues, and other contributions that don't align with this Code of Conduct.

---

## 💬 Support

Need help? We're here for you!

### In-App Support

Use the built-in **Support** page to send us a message directly through the application. Fill out the contact form with your name, email, subject, and message.

### GitHub Issues

For bug reports, feature requests, or technical issues:

🐛 **[Open an Issue](https://github.com/Roboticela/KeyboardSimulator-NativeApplication/issues)**

When reporting a bug, please include:
- Operating system and version
- Application version
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots (if applicable)
- Error messages or logs

### Community

- 🌐 **Website**: [keyboard-simulator.roboticela.com](https://keyboard-simulator.roboticela.com)
- 💻 **GitHub**: [Roboticela/KeyboardSimulator-NativeApplication](https://github.com/Roboticela/KeyboardSimulator-NativeApplication)
- ⭐ **Star the Project**: Show your support by starring the repository!

### FAQ

**Q: Is this application free to use?**  
A: Yes! It's completely free and open-source under the AGPL-3.0 license.

**Q: Can I use this for commercial purposes?**  
A: Yes, but you must comply with the AGPL-3.0 license terms. Any modifications made to the software that is used over a network must be made available to users.

**Q: Does my data get sent to any servers?**  
A: No. All data is stored locally on your device. Your privacy is our priority. The application works entirely offline.

**Q: Can I add my own keyboard model?**  
A: Yes! You can add custom keyboard models by creating a new component and configuration file. See the [Configuration](#-configuration) section for details.

**Q: Does keyboard sync work with all keyboards?**  
A: Keyboard sync works with most standard keyboards. It captures keyboard events from your system and reflects them in the 3D visualization.

**Q: Can I customize the keyboard appearance?**  
A: Yes! You can change themes, and the keyboard models are styled with CSS. Advanced customization would require modifying the component styles.

**Q: What if I find a security vulnerability?**  
A: Please report security issues responsibly by opening a GitHub issue or contacting the maintainers directly.

---

## 🗺️ Roadmap

### Upcoming Features

- [ ] **More Keyboard Models** - Additional laptop keyboard layouts
- [ ] **Custom Keyboard Layouts** - Create and import custom keyboard configurations
- [ ] **Keyboard Macros** - Record and replay key sequences
- [ ] **Multi-language Support** - Internationalization (i18n)
- [ ] **Export/Import Settings** - Share keyboard configurations
- [ ] **Advanced Animations** - More realistic key press animations
- [ ] **Sound Effects** - Optional keyboard typing sounds
- [ ] **Color Customization** - Custom color schemes for keys
- [ ] **Keyboard Shortcuts** - Application-wide keyboard shortcuts
- [ ] **Performance Optimizations** - Enhanced rendering performance

### Version History

**v0.1.0** (Current)
- Initial release
- 5 keyboard models (Asus, Dell, HP, Toshiba)
- 3D keyboard visualization with React Three Fiber
- Document editor with real-time typing feedback
- Multiple themes (8 color schemes)
- Hand visualization
- Mouse and arrow key controls
- Keyboard synchronization
- System state indicators
- Fullscreen mode
- Status controls panel

See [Releases](https://github.com/Roboticela/KeyboardSimulator-NativeApplication/releases) for detailed changelog.

---

## 📄 License

This project is licensed under the **GNU Affero General Public License v3.0 (AGPL-3.0)**.

### What This Means

✅ **You CAN:**
- Use the software for any purpose
- Study how the software works and modify it
- Distribute copies of the software
- Distribute modified versions of the software
- Use the software commercially

⚠️ **You MUST:**
- Disclose your source code when distributing
- Include the original license and copyright notice
- State any changes made to the original code
- Make your modified source code available under AGPL-3.0
- **If you run a modified version on a server/network, provide source access to users**

❌ **You CANNOT:**
- Hold the authors liable for damages
- Use the authors' names for promotion without permission

The AGPL-3.0 license is similar to GPL-3.0 but adds an important provision: if you modify this software and make it available over a network (e.g., as a web service), you must also make the complete source code available to users of that service.

**Full License Text:** See the [LICENSE](LICENSE) file for complete terms and conditions.

### Why AGPL?

We chose the AGPL license to ensure that improvements to this software remain open and available to the community, even when the software is used as a service. This protects the rights of end users and promotes collaboration.

---

## 🙏 Acknowledgments

This project wouldn't be possible without these amazing open-source projects and communities:

### Core Technologies
- **[Tauri](https://tauri.app/)** - For the incredible desktop application framework
- **[React](https://reactjs.org/)** - For the powerful UI library
- **[Rust](https://www.rust-lang.org/)** - For performance and safety
- **[Vite](https://vitejs.dev/)** - For lightning-fast development experience

### Libraries & Tools
- **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)** - For 3D rendering and keyboard visualization
- **[Three.js](https://threejs.org/)** - For 3D graphics and WebGL rendering
- **[@react-three/drei](https://github.com/pmndrs/drei)** - Useful helpers for React Three Fiber
- **[TailwindCSS](https://tailwindcss.com/)** - For beautiful, utility-first styling
- **[Framer Motion](https://www.framer.com/motion/)** - For smooth animations and transitions
- **[Lucide React](https://lucide.dev/)** - For comprehensive icon sets
- **[TypeScript](https://www.typescriptlang.org/)** - For type safety and better developer experience

### Community
- All the contributors who have helped improve this project
- The open-source community for inspiration and support
- Users who provide feedback and report issues

### Special Thanks
- **Free Software Foundation** - For promoting software freedom
- **GitHub** - For hosting and collaboration tools
- All the developers who contribute to open-source

---

## 🏢 About Roboticela

<div align="center">

<img src="https://github.com/Roboticela/Restaurant-Management-System/blob/main/src/assets/CompanyLogo.png" alt="Logo" width="200" style="padding:30px;" />

**[Roboticela](https://github.com/Roboticela)** is dedicated to creating high-quality, open-source software solutions that empower businesses and individuals.

</div>

### Our Mission

To build innovative, accessible, and privacy-focused software that respects user freedom and promotes open collaboration.

### Our Projects

This **KeyboardSimulator** is proudly developed and maintained by Roboticela. We believe in:

- 🔓 **Open Source** - Transparency and community collaboration
- 🔒 **Privacy** - Your data belongs to you
- 🚀 **Innovation** - Modern technologies and best practices
- 🌍 **Accessibility** - Software for everyone, everywhere
- 💚 **Sustainability** - Building for the long term

### Get in Touch

- 🐙 **GitHub**: [github.com/Roboticela](https://github.com/Roboticela)
- 🌐 **Website**: [keyboardsimulator.roboticela.com](https://keyboardsimulator.roboticela.com)
- 📧 **Email**: contact@roboticela.com
- 🔗 **Project Repository**: [github.com/Roboticela/KeyboardSimulator-NativeApplication](https://github.com/Roboticela/KeyboardSimulator-NativeApplication)

### More Projects

Check out our other open-source projects on our [GitHub profile](https://github.com/Roboticela). We're always working on new ideas and welcome collaboration!

### Support Roboticela

If you find our projects useful:

- ⭐ **Star our repositories** on GitHub
- 🐛 **Report bugs** and **suggest features**
- 🤝 **Contribute code** or **improve documentation**
- 📣 **Spread the word** and share with others
- ☕ **Support development** (donation links on website)

---

<div align="center">

## 💖 Thank You!

Thank you for using **KeyboardSimulator**. We hope it helps with your keyboard simulation needs.

**Built with ❤️ by [Roboticela](https://github.com/Roboticela)**

Licensed under AGPL-3.0.

---

⭐ **If you find this project useful, please consider giving it a star on GitHub!** ⭐

[⬆ Back to Top](#-keyboardsimulator)

</div>
