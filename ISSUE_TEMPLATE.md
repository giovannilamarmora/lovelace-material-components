# Issue Report for Material Home Components

Thank you for reporting an issue. Before opening a new one, please check the following:

- [ ] You are using the latest version of the component.
- [ ] You have cleared your browser cache and reloaded resources.
- [ ] The problem is not already reported in existing issues.

## Required Information

### Description of the problem

Explain what you were trying to do, what happened instead, and what you expected to happen.

**Example:**

> "I tried to load the Material Weather card, but it doesn't display properly. Instead of showing the weather data, I get a blank card."

### Screenshots

Please include screenshots of the issue whenever possible. A picture helps us understand the context faster.

### Entity details

We need to know the data structure of the entity you are using. This information can be collected in two ways:

#### Option A – Home Assistant Developer Tools

1. Go to **Developer Tools** in Home Assistant.
2. Open the **States** tab.
3. Find the entity that is causing the problem (for example, `sensor.weather`).
4. Copy the full JSON data shown for that entity.
5. Paste this JSON in your issue.

#### Option B – Browser Inspect (Google Chrome, Edge, or Firefox)

1. Open the dashboard where the component is used.
2. Right-click on the card and select **Inspect**.
3. Look at the **Console** or **Network** tab to locate the entity data.
4. Copy and paste the relevant JSON in your issue.

### Steps to reproduce

Provide step-by-step instructions on how to reproduce the issue.

**Example:**

1. Add the component to a dashboard.
2. Configure it with entity `sensor.weather`.
3. Reload the Home Assistant frontend.
4. The card fails to load.

### Environment

Please share details about your setup:

- **Home Assistant version:**
- **Browser and version:**
- **Operating system:**
- **Component version:**

## Important Notes

- Issues without enough information may be closed without resolution.
- If you know how to fix the bug, please also consider opening a Pull Request with your solution.

---

Thank you for helping to improve Material Home Components!
