'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { FaWindows, FaLinux, FaApple, FaAndroid, FaMobile } from 'react-icons/fa';
import { APP_URL, APP_VERSION, GITHUB_RELEASES, GITHUB_RELEASE_BASE } from '@/lib/constants';

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

interface DownloadFile {
  format: string;
  arch: string;
  label: string;
  filename: string;
}

const downloadLinks = [
  {
    platform: 'Windows',
    platformKey: 'windows',
    icon: FaWindows,
    files: [
      { format: 'exe', arch: 'x64', label: 'Windows x64 (.exe)', filename: `keyboard-simulator-windows-x64-${APP_VERSION}.exe` },
      { format: 'msi', arch: 'x64', label: 'Windows x64 (.msi)', filename: `keyboard-simulator-windows-x64-msi-${APP_VERSION}.msi` },
      { format: 'exe', arch: 'aarch64', label: 'Windows ARM64 (.exe)', filename: `keyboard-simulator-windows-aarch64-${APP_VERSION}.exe` },
      { format: 'exe', arch: 'i686', label: 'Windows 32-bit (.exe)', filename: `keyboard-simulator-windows-i686-${APP_VERSION}.exe` },
    ] as DownloadFile[],
    iconColor: 'text-blue-500',
  },
  {
    platform: 'Linux',
    platformKey: 'linux',
    icon: FaLinux,
    files: [
      { format: 'AppImage', arch: 'x64', label: 'Linux x64 (.AppImage)', filename: `keyboard-simulator-linux-x64-appimage-${APP_VERSION}.AppImage` },
      { format: 'deb', arch: 'x64', label: 'Linux x64 (.deb)', filename: `keyboard-simulator-linux-x64-deb-${APP_VERSION}.deb` },
      { format: 'rpm', arch: 'x64', label: 'Linux x64 (.rpm)', filename: `keyboard-simulator-linux-x64-rpm-${APP_VERSION}.rpm` },
    ] as DownloadFile[],
    iconColor: 'text-orange-500',
  },
  {
    platform: 'macOS',
    platformKey: 'macos',
    icon: FaApple,
    files: [
      { format: 'dmg', arch: 'universal', label: 'macOS Universal (.dmg)', filename: `keyboard-simulator-macos-universal-${APP_VERSION}.dmg` },
      { format: 'dmg', arch: 'arm64', label: 'macOS Apple Silicon (.dmg)', filename: `keyboard-simulator-macos-arm64-${APP_VERSION}.dmg` },
      { format: 'dmg', arch: 'x64', label: 'macOS Intel (.dmg)', filename: `keyboard-simulator-macos-x64-${APP_VERSION}.dmg` },
      { format: 'gz', arch: 'arm64', label: 'macOS ARM64 App (.gz)', filename: `keyboard-simulator-macos-arm64-app-${APP_VERSION}.gz` },
      { format: 'gz', arch: 'x64', label: 'macOS Intel App (.gz)', filename: `keyboard-simulator-macos-x64-app-${APP_VERSION}.gz` },
    ] as DownloadFile[],
    iconColor: 'text-gray-500',
  },
  {
    platform: 'iOS',
    platformKey: 'ios',
    icon: FaMobile,
    files: [
      { format: 'zip', arch: 'aarch64', label: 'iOS Simulator ARM64 (.zip)', filename: `keyboard-simulator-ios-simulator-aarch64-${APP_VERSION}.zip` },
      { format: 'zip', arch: 'x86_64', label: 'iOS Simulator x64 (.zip)', filename: `keyboard-simulator-ios-simulator-x86_64-${APP_VERSION}.zip` },
    ] as DownloadFile[],
    iconColor: 'text-indigo-500',
  },
  {
    platform: 'Android',
    platformKey: 'android',
    icon: FaAndroid,
    files: [
      { format: 'apk', arch: 'aarch64', label: 'Android ARM64 (.apk)', filename: `keyboard-simulator-android-aarch64-${APP_VERSION}.apk` },
      { format: 'apk', arch: 'armv7', label: 'Android ARMv7 (.apk)', filename: `keyboard-simulator-android-armv7-${APP_VERSION}.apk` },
      { format: 'apk', arch: 'x86_64', label: 'Android x64 (.apk)', filename: `keyboard-simulator-android-x86_64-${APP_VERSION}.apk` },
      { format: 'apk', arch: 'i686', label: 'Android x86 (.apk)', filename: `keyboard-simulator-android-i686-${APP_VERSION}.apk` },
    ] as DownloadFile[],
    iconColor: 'text-green-500',
  },
];

function DownloadCard({ platform, icon: Icon, files, iconColor }: {
  platform: string;
  icon: React.ComponentType<{ className?: string }>;
  files: DownloadFile[];
  iconColor: string;
}) {
  return (
    <motion.div
      variants={itemAnimation}
      whileHover={{ scale: 1.02 }}
      className="bg-card/40 backdrop-blur-md rounded-xl p-8 text-center border border-border/40 hover:border-primary/40 transition-all duration-300"
    >
      <Icon className={`w-16 h-16 mx-auto mb-4 ${iconColor}`} />
      <h3 className="text-2xl font-bold text-foreground mb-6">{platform}</h3>
      <div className="space-y-3">
        {files.map((file, fileIndex) => {
          const downloadUrl = `${GITHUB_RELEASE_BASE}/${file.filename}`;
          const sha256Url = `${GITHUB_RELEASE_BASE}/${file.filename}.sha256`;
          const sha512Url = `${GITHUB_RELEASE_BASE}/${file.filename}.sha512`;

          return (
            <div key={fileIndex} className="space-y-2">
              <motion.a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-accent/50 hover:bg-accent/70 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer border border-border/40 text-foreground"
              >
                <Download className="w-4 h-4" />
                <span className="text-sm md:text-base">{file.label}</span>
              </motion.a>
              <div className="flex gap-2 justify-center text-xs">
                <a
                  href={sha256Url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-foreground/90 underline"
                  title="SHA256 Checksum"
                >
                  SHA256
                </a>
                <span className="text-foreground/40">|</span>
                <a
                  href={sha512Url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-foreground/90 underline"
                  title="SHA512 Checksum"
                >
                  SHA512
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function Downloads() {
  return (
    <section id="downloads" className="py-16 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Download for Your Platform</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-4">
            Use the simulator in your browser or download the desktop app for Windows, Linux, macOS, and more
          </p>
          <p className="text-sm text-foreground/60">Current Version: {APP_VERSION}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-8"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {downloadLinks.slice(0, 3).map((platform, index) => (
            <DownloadCard key={index} {...platform} />
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {downloadLinks.slice(3, 5).map((platform, index) => (
            <DownloadCard key={index} {...platform} />
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-foreground/70 mb-4">
            Looking for the latest version? Check our{' '}
            <a
              href={GITHUB_RELEASES}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold transition-all duration-200 cursor-pointer"
            >
              GitHub Releases
            </a>
          </p>
          <p className="text-foreground/60 text-sm mt-4">
            Or use the{' '}
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              web version
            </a>
            {' '}directly in your browser — no installation required!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
