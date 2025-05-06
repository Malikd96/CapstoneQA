# Mobile Web Login Test Report

# Test Case: Valid Login (TC001)

**Description:**
Verify that a user can log in with valid credentials on [https://automationexercise.com](https://automationexercise.com).

**Test Steps:**

1. Launch the mobile Chrome browser using Appium.
2. Navigate to `https://automationexercise.com/login`.
3. Enter email: `96malikdavis@gmail.com`.
4. Enter password: `malikdavisqa`.
5. Click the **Login** button.
6. Verify that the **Logout** button is displayed.
7. Take a screenshot named `valid_login_pass.png`.

**Expected Result:**
User is redirected to the logged-in dashboard and can see the `Logout` link.

**How to Test:**

* Run `TC001_validLogin.test.js` using the WDIO test runner:

  ```bash
  npx wdio run wdio.conf.js --spec ./appium/specs/TC001_validLogin.test.js
  ```
* Check that the test passes and a screenshot is saved to `./screenshots/valid_login_pass.png`.

---

## Test Case: Invalid Login (TC002)

**Description:**
Verify that login fails when invalid credentials are entered.

**Test Steps:**

1. Launch the mobile Chrome browser using Appium.
2. Navigate to `https://automationexercise.com`.
3. Click **Signup / Login** link.
4. Enter email: `fakeuser@mail.com`.
5. Enter password: `wrongpass`.
6. Click the **Login** button.
7. Validate the error message appears: `Your email or password is incorrect!`.
8. Take a screenshot named `invalid_login_fail.png`.

**Expected Result:**
User should see an error message that login credentials are incorrect.

**How to Test:**

* Run `TC002_invalidLogin.test.js` using the WDIO test runner:

  bash
  npx wdio run wdio.conf.js --spec ./appium/specs/TC002_invalidLogin.test.js
  
* Check that the test passes and a screenshot is saved to `./screenshots/invalid_login_fail.png`.

---

## Screenshot Evidence:

* `screenshots/valid_login_pass.png`
* `screenshots/invalid_login_fail.png`

---

## Environment:

* Emulator: Android 16
* Browser: Chrome 136.0.7103
* Automation: WebDriverIO + Appium

---

## Observations:

* Valid login test succeeded with expected redirection.
* Invalid login test correctly displayed error message.
* Screenshots captured as evidence for both scenarios.

---

## Notes:

* Ensure Chrome is updated on the emulator.
* Chromedriver must match browser version or be provided manually.
* Screenshots directory must exist prior to test execution.

---
