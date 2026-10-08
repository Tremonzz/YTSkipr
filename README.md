<p align="center">
  <img src="public/icons/LogoSponsorBlocker256px.png" alt="YTSkipr Logo" width="128" height="128">
</p>

<h1 align="center">YTSkipr</h1>

<p align="center">
  <b>A modern, minimal, and distraction-free YouTube sponsor skipping extension.</b>
</p>

<p align="center">
  <a href="https://github.com/Tremonzz/YTSkipr"><img src="https://img.shields.io/badge/version-6.2.0-0ea5e9?style=flat-square" alt="Version"></a>
  <a href="https://github.com/Tremonzz/YTSkipr/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-GPL--3.0-blue?style=flat-square" alt="License"></a>
  <a href="https://github.com/Tremonzz/YTSkipr"><img src="https://img.shields.io/badge/status-active-emerald?style=flat-square" alt="Status"></a>
</p>

---

## 🌟 Overview

**YTSkipr** is a streamlined browser extension designed to automatically skip sponsored segments, intros, self-promotion, and subscription reminders on YouTube videos.

Unlike traditional extensions that clutter your video player with dozens of buttons and complex menus, **YTSkipr** is reimagined with a **clean, native player experience** and a **sleek dark glassmorphic user interface**.

---

## ✨ Features

- ⚡ **Seamless Auto-Skip**: Instantly skips sponsored segments, intros, outros, and non-music sections.
- 🎨 **Modern Glassmorphic UI**: Completely redesigned popup and options menu featuring dark translucent cards, glowing accents, and intuitive toggle switches.
- 🧹 **Zero Player Clutter**: No intrusive buttons or overlays injected into YouTube's native player controls.
- ⏱️ **Time Saved Counter**: Real-time tracking of time and skips saved across all your watched videos.
- ⚙️ **Distraction-Free Settings**: Pruned down to the essential settings you actually care about.
- 🛡️ **Crowdsourced Database**: Powered by the proven crowdsourced database of segments.

---

## 🚀 Installation & Development

### Requirements
- **Node.js** (v16 or higher)
- **npm** (v8 or higher)

### Build from Source

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Tremonzz/YTSkipr.git
   cd YTSkipr
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build the extension for Chrome / Chromium:**
   ```bash
   npm run build:chrome
   ```

4. **Load into your browser:**
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable **Developer mode** (top-right toggle).
   - Click **Load unpacked** and select the `dist/` directory inside the project root.

---

## 🛠️ Tech Stack

- **TypeScript** & **Webpack 5**
- **React 18** (Popup UI & interactive components)
- **Chrome Extensions Manifest V3**

---

## 📄 License

This project is licensed under the **GNU General Public License v3.0 (GPL-3.0)**.
Original code based on [SponsorBlock](https://github.com/ajayyy/SponsorBlock).
