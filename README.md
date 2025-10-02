[![My Home Assistant](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?repository=lovelace-google-components&owner=giovannilamarmora&category=Plugin)

# 🏠 Google Home Dashboard Component for Home Assistant

![Dashboard](https://raw.githubusercontent.com/giovannilamarmora/lovelace-google-components/refs/heads/master/src/shared/assets/img/control.png)

![Button](https://raw.githubusercontent.com/giovannilamarmora/lovelace-google-components/refs/heads/master/src/shared/assets/img/button.png)

![Slider](https://raw.githubusercontent.com/giovannilamarmora/lovelace-google-components/refs/heads/master/src/shared/assets/img/slider.png)

![Climate](https://raw.githubusercontent.com/giovannilamarmora/lovelace-google-components/refs/heads/master/src/shared/assets/img/climate.png)

A custom card suite that brings the **Google Home app experience** into Home Assistant, using **Material You** design principles.

📘 [Read the full documentation](https://giovannilamarmora.gitbook.io/google-home-on-home-assistant)

---

## ✨ Highlights

- 📱 Mobile-first UI with swipeable views
- 🎨 Material You design with dynamic theming
- 🧩 Smart cards for Lights, Climate, Cameras, and more
- ⚙️ Easy to install and configure

---

## 📦 Installation

### 🔧 Method 1 – Manual Installation

1. Download [`google-components.js`](https://github.com/giovannilamarmora/lovelace-google-components/blob/master/dist/google-components.js)

2. Move it to your `config/www/` folder:

   ```
   config/www/google-components.js
   ```

3. In Home Assistant, go to:

   - `Settings` → `Dashboards` → `Manage Resources`

4. Click **Add Resource**:

   - **Type:** JavaScript module
   - **URL:** `/local/google-components.js`

5. Save and restart Home Assistant.

---

### ☁️ Method 2 – CDN Installation - Recommended

1. In Home Assistant, go to:

   - `Settings` → `Dashboards` → `Manage Resources`

2. Click **Add Resource**:

   - **Type:** JavaScript module
   - **URL:**
     ```
     https://cdn.jsdelivr.net/gh/giovannilamarmora/lovelace-google-components@master/dist/google-components.js?v=20250626
     ```

3. Save and restart Home Assistant.

> You can update the version parameter `?v=YYYYMMDD` to force cache refresh after pushing updates.

---

## 📚 Documentation

For setup instructions, examples, requirements, and customization:

👉 https://giovannilamarmora.gitbook.io/google-home-on-home-assistant

## 🧩 Dependencies

This component uses:

- [swipe-card](https://github.com/bramkragten/swipe-card)
- [button-card](https://github.com/custom-cards/button-card)
- Material Design Icons (via Home Assistant)
- Material You theme (optional but recommended)

---

## 🙏 Credits

This project builds on the work of:

- [@Nerwyn](https://github.com/Nerwyn) – [Material You theme](https://github.com/Nerwyn/material-you-theme)
- [@beecho01](https://github.com/beecho01) – [Material Symbol Icons](https://github.com/beecho01/material-symbols)

---

## 📜 License

MIT License – feel free to use, modify, and share.

---

## 🛠 Contributing

This project is currently in beta. Contributions, ideas, and feedback are welcome!

Feel free to open issues or submit pull requests.
