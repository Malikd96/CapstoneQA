## TC_WEB_001 – User Registration (https://automationexercise.com)

- **Description**: Verify that a new user can register successfully using valid input
- **Precondition**: User is on the homepage

- **Steps**:
  1. Open Chrome and go to [https://automationexercise.com](https://automationexercise.com)
  2. Click on **“Signup / Login”** in the top navigation
  3. Enter a new name and email in the **“New User Signup!”** section
  4. Click **“Signup”**
  5. Fill in all required details on the **Signup page** (title, password, date of birth, etc.)
  6. Click **“Create Account”**
  7. Click **“Continue”** after the account is created

- **Expected Result**: Account is created successfully, and user sees the message **“ACCOUNT CREATED!”** and is redirected to the logged-in state

- **Actual Result**: Account was created successfully and user was redirected to the logged-in homepage

- **Status**: Pass






## TC_WEB_002 – User Login (https://automationexercise.com)

- **Description**: Verify that an existing user can log in with valid credentials
- **Precondition**: User account must already exist

- **Steps**:
  1. Open Chrome and go to [https://automationexercise.com](https://automationexercise.com)
  2. Click on **“Signup / Login”** in the top navigation
  3. In the **“Login to your account”** section, enter a valid email and password
  4. Click the **“Login”** button

- **Expected Result**: User is logged in and redirected to the homepage

- **Actual Result**: User is logged in and redirected to the homepage

- **Status**: Pass






## TC_WEB_003 – Product Search (https://automationexercise.com)

- **Description**: Verify that users can search for a product using the search bar
- **Precondition**: User is on the homepage

- **Steps**:
  1. Open [https://automationexercise.com](https://automationexercise.com)
  2. Enter a product keyword (e.g., “Tshirt”) into the search bar at the top
  3. Click the **search icon** or press Enter

- **Expected Result**: Search results are displayed showing products that match the keyword

- **Actual Result**: Search results are displayed

- **Status**: Pass





## TC_WEB_004 – Add Product to Cart

- **Description**: Verify user can add a product to the cart
- **Precondition**: User is logged in

- **Steps**:
  1. Go to the homepage
  2. Click on **Products**
  3. Hover over a product and click **“Add to cart”**
  4. Click **“View Cart”**

- **Expected Result**: Product appears in the cart with correct name and price

- **Actual Result**: Product appears in the cart with correct name and price

- **Status**: Pass







## TC_WEB_005 – Checkout

- **Description**: Verify a user can proceed through the checkout process
- **Precondition**: Product is in the cart and user is logged in

- **Steps**:
  1. Go to **Cart**
  2. Click **Proceed to Checkout**
  3. Enter address details (if needed)
  4. Click **Place Order**
  5. Enter payment details and submit

- **Expected Result**: User sees confirmation message like **“Order Placed Successfully!”**

- **Actual Result**: User sees confirmation message like **“Order Placed Successfully!”**

- **Status**: Pass



# Manual Test Results Summary – automationexercise.com

| Test Case ID | Feature           | Result | Notes                        |
|--------------|-------------------|--------|------------------------------|
| TC_WEB_001   | User Registration | Pass   | Account created successfully |
| TC_WEB_002   | User Login        | Pass   | Logged in as expected        |
| TC_WEB_004   | Add to Cart       | Pass   | Product added to cart        |
| TC_WEB_005   | Checkout          | Pass   | Order placed successfully    |
