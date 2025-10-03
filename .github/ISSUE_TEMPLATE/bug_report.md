---
name: Bug report
about: Create a report to help us improve
title: "[BUG]: "
labels: bug
assignees: giovannilamarmora

---

**Describe the bug**  
A clear and concise description of what the bug is.  
Please also include which **component** you are using (e.g. `material-weather`, `material-sensor`).

---

**To Reproduce**  
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

---

**Expected behavior**  
A clear and concise description of what you expected to happen.

---

**Screenshots**  
If applicable, add screenshots to help explain your problem.  
A screenshot of the card in Lovelace or the error in the browser console is very helpful.  

---

**Entity details (mandatory)**  
To investigate the issue, please provide the **full entity data** for the entity used in the card.  
This can be collected in one of two ways:

- **Option A – Home Assistant Developer Tools**  
  1. Go to *Developer Tools* in Home Assistant.  
  2. Open the *States* tab.  
  3. Find the entity that is causing the problem (for example: `sensor.weather`).  
  4. Copy the entire JSON block (state + attributes).  
  5. Paste it here inside triple backticks (```).  

- **Option B – Browser Inspect (Google/Edge/Firefox)**  
  1. Open the dashboard where the component is used.  
  2. Right-click on the card and select *Inspect*.  
  3. Look in the *Console* or *Network* tab for the entity data.  
  4. Copy and paste the relevant JSON here inside triple backticks (```).  

---

**Environment (please complete the following information):**  
- Home Assistant version: [e.g. 2024.9.1]  
- Browser and version: [e.g. Chrome 119, Safari 17]  
- Operating system: [e.g. Windows 11, macOS, iOS]  
- Component version: [e.g. v2.0.0-beta1]  

---

**Smartphone (if applicable):**  
- Device: [e.g. iPhone 14, Samsung S23]  
- OS: [e.g. iOS 17.1, Android 14]  
- Browser [e.g. Safari, Chrome]  
- Version [e.g. 22]  

---

**Additional context**  
Add any other context about the problem here.  
If possible, also mention if the bug happens only on one device/browser or on all of them.
