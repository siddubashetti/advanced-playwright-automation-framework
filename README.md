# 🚀 Advanced QA Automation Framework (Playwright + API + DB + SQL)

## 📌 Project Overview

This is a **comprehensive QA Automation Framework** designed for **end-to-end testing of modern web applications**, covering:

- 🌐 UI Automation using Playwright (TypeScript)
- 🔗 API Testing (REST API validation)
- 🗄️ Database Testing using SQL queries
- 🔄 End-to-End Data Validation (UI ↔ API ↔ DB)

The framework follows **industry best practices** including modular design, reusability, and scalable test architecture.

---

## 🧠 Key Strength of This Framework

Unlike basic UI automation projects, this framework validates the **entire system flow**:

UI actions → API calls → Database updates → Data verification

This makes it suitable for **real enterprise-level testing scenarios**.

---

## 🏗️ Tech Stack

- Playwright 🎭
- TypeScript 📘
- Node.js
- REST API Testing (Axios / Playwright APIRequestContext)
- SQL (MySQL / PostgreSQL / SQLite integration)
- GitHub Actions (CI-ready)

---

## 📂 Project Architecture

advanced-playwright-automation-framework/

├── pages/                     # UI Page Objects (POM)

├── tests/
│   ├── ui-tests/              # Playwright UI automation
│   ├── api-tests/             # API automation tests
│   ├── db-tests/              # Database/SQL validation tests
│   ├── e2e-tests/             # End-to-End workflows

├── api/
│   ├── services/              # API service layer
│   ├── utils/                 # API helpers (auth, requests)

├── db/
│   ├── connection.ts          # DB connection setup
│   ├── queries.sql            # SQL test queries
│   ├── db-utils.ts            # DB helper functions

├── utils/                     # Common utilities
├── fixtures/                  # Test setup & teardown
├── playwright.config.ts
└── README.md

---

## 🌐 UI Automation (Playwright)

### ✔️ Covered Scenarios:
- Login / Register flows
- Form validations
- File upload & download
- Alerts & popups
- Table data verification
- UI state validation

- ## 📤 File Upload Module (UI Deep Dive)

### ✔️ Covered Operations:

- Single file upload
- Multiple file upload
- File type validation
- Upload success verification
- Reset / clear upload state
- Negative testing (invalid files)
- Screenshot assertions
- Window ahndle
- Frame handle
- Drag and Drop operation
- Radio button selections
- Visual testing

---

## 🔗 API Testing Module

### ✔️ Features:

- GET / POST / PUT / DELETE validation
- Response schema validation
- Status code verification
- Chaining Api testing
- Authentication handling (token-based APIs)
- Data-driven API tests
- Negative test scenarios

### 📌 Example Flow:
- Create user via API
- Validate response
- Fetch same user via GET
- Assert data consistency

---

## 🗄️ Database Testing (SQL Validation)

### ✔️ Features:

- Direct DB connection testing
- SQL query execution validation
- Data integrity checks
- Backend vs UI data comparison
- API vs DB validation

### 📌 Example Scenarios:
- Verify user created in UI exists in DB
- Validate API response matches DB record
- Check data updates after operations

---

## 🔄 End-to-End Testing Flow

This framework supports full-stack validation:

UI (Create User)
   ↓
API (POST /users)
   ↓
DB (SELECT * FROM users)
   ↓
Validation (Data Match)

---


## 🧩 Example: API Test

```ts
test("Create User API Test", async ({ request }) => {
  const response = await request.post("/users", {
    data: {
      name: "Siddaram",
      job: "QA Engineer"
    }
  });

  expect(response.status()).toBe(201);

  const responseBody = await response.json();
  expect(responseBody.name).toBe("Siddaram");
});
 ```

▶️ How to Run
npm install
npx playwright install
npx playwright test

Run specific tests:

npx playwright test tests/ui-tests
npx playwright test tests/api-tests
npx playwright test tests/db-tests

---

📊 Reporting
Allur Reports
HTML Reports (Playwright)
API response logs
DB query logs
Trace viewer for debugging
Screenshot/video on failure

----

🔥 What Makes This Framework Strong

✔ UI + API + DB combined testing
✔ Real-world enterprise architecture
✔ End-to-end data validation
✔ Modular scalable design
✔ CI/CD ready

----

🎯 Skills Demonstrated

Playwright Automation (Advanced)
API Testing (REST)
SQL Database Testing
Test Architecture Design
End-to-End System Validation
Debugging & Test Strategy Design

----

👨‍💻 Author

Siddaram Bashetti
QA Automation Engineer
Playwright | API Testing | SQL | CI/CD


