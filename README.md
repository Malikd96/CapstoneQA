# QA Capstone Project - Multi-Platform E-Commerce Quality Assurance

## Overview

This capstone project demonstrates comprehensive QA practices across web, mobile, API, performance, and security testing domains. The goal was to ensure a robust and reliable user experience for a multi-platform e-commerce application using both manual and automated testing strategies.

---

## Project Structure

```
Capstone/
├── appium/                   # Mobile testing with WebdriverIO & Appium
│   ├── specs/
│   │   ├── TC001_validLogin.test.js
│   │   └── TC002_invalidLogin.test.js
│   └── screenshots/
├── cypress/                  # Web UI and API automation testing
│   ├── e2e/
│   │   └── booking_api_spec.cy.js
│   └── support/
├── jmeter/                   # Performance testing JMX and results
│   ├── automationexercise_load_test.jmx
│   └── results/
├── zap/                      # Security testing exported context and results
├── docs/                     # Reports and documentation
│   ├── performance_report.md
│   ├── security_report.md
│   └── mobile_login_test_report.md
├── README.md                 # Project overview (this file)
└── package.json              # Node project metadata
```

---

## Technologies Used
* **Appium + WebdriverIO** for Android mobile web automation
* **Cypress** for API and UI testing and automation
* **Apache JMeter** for performance and stress testing
* **OWASP ZAP** for security vulnerability scanning
* **GitHub** for version control

---

# Testing Breakdown

#Manual Testing

* Performed exploratory and usability testing on the web app.
* Logged defects with screenshots and reproduction steps.

# Automated Web Testing (Selenium)

* Automated search functionality and login flows using Java and TestNG.
* Used Apache POI to run tests with Excel-based test data (data-driven approach).

#  Mobile Web Testing (Appium)

Scripts:

* **TC001\_validLogin.test.js**
* **TC002\_invalidLogin.test.js**

# How to Test Mobile Login Cases:

1. Launch Android Emulator (API 16).
2. Run: `npx wdio run wdio.conf.js`
3. For valid login:

   * Script will go to `automationexercise.com/login`
   * Enter valid credentials (`96malikdavis@gmail.com`, `malikdavisqa`)
   * Expect logout link, screenshot saved to `/screenshots/valid_login_pass.png`
4. For invalid login:

   * Use wrong credentials
   * Expect error text: `Your email or password is incorrect!`
   * Screenshot saved to `/screenshots/invalid_login_fail.png`

## API Testing (Cypress)

* Tested `https://restful-booker.herokuapp.com`
* Validated create, update, and delete booking endpoints.
* Used loops and dynamic assertions in Cypress.

# Performance Testing (JMeter)

* Simulated 50 users over 5 minutes on `automationexercise.com`
* Gradually scaled up to 200 users.
* Measured:

  * Response times
  * Throughput
  * Error rate

#### How to Test:

1. Open `automationexercise_load_test.jmx` in JMeter.
2. Run test in GUI or CLI mode.
3. View results in Summary Report and Graph Results listeners.

### Security Testing (ZAP)

* Scanned web app using ZAP spider and active scan.
* Detected:

  * Cookie without `HttpOnly`
  * Potential script injection points
* Context exported and saved in `/zap`

---

## Key Findings

* Web login passed all validation checks.
* Mobile login stable for valid and invalid flows.
* APIs returned correct codes and data integrity.
* App degraded gracefully under load.
* Minor security warnings addressed.

---

## How to Run This Project

1. **Clone this repo** and install dependencies:

```bash
npm install
```

2. **Run Appium mobile tests:**

```bash
npx wdio run wdio.conf.js
```

3. **Run Cypress API tests:**

```bash
npx cypress open
```

4. **Open JMeter and run test plan:**
   Open `.jmx` file and execute.
5. **Import ZAP context and run scans** using OWASP ZAP.

---

## Screenshots

Screenshots are stored under `appium/screenshots/`:

* `valid_login_pass.png`
* `invalid_login_fail.png`

---

## Contributors

Malik Davis

---

## License

This project is part of the Coding Temple QA Engineering program and is for educational purposes only.
