# 🚀 Zerodha Trading Platform Clone 

A **full-stack Zerodha-inspired trading platform clone** built to demonstrate modern web development skills, clean project structuring, and real-world frontend–backend integration.

> 🎯 **Objective:** To showcase hands-on experience with React, Node.js, Express, MongoDB, REST APIs, and component-based UI design — exactly what interviewers look for in full‑stack roles.

---

## 🧠 Project Overview

This project is a **functional clone of Zerodha’s core UI and trading dashboard**, focusing on:

* Market-style dashboard UI
* Holdings, Positions, Orders, and Funds views
* Backend APIs connected to MongoDB
* Clean separation of backend, dashboard, and landing-page frontend

⚠️ **Note:** This project does **not** include authentication. The focus is on **data flow, UI rendering, backend APIs, and architecture**, not user login systems.

---

## ✨ Key Features

### 📊 Trading Dashboard

* Interactive dashboard similar to Zerodha Kite
* Holdings, Positions, Orders, Funds summary
* Buy action window & watchlist UI

### ⚙️ Backend API

* RESTful APIs using Express.js
* MongoDB integration with Mongoose
* Structured schemas and models
* Centralized server entry point

### 🖥️ Frontend (Dashboard)

* Component-based React architecture
* Charts & data visualization components
* Context API for shared state
* Clean, reusable UI components

### 🌐 Frontend (Landing Page)

* Separate React app for landing pages
* Home, About, Pricing, Products, Signup, Support pages
* Navbar & Footer components
* NotFound (404) handling

---

## 🏗️ Tech Stack

### Frontend

* **React.js**
* **React Context API**
* **CSS**
* **Chart components**

### Backend

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **dotenv**

---

## 📁 Project Structure (Actual)

```
Zerodha/
│
├── backend/
│   ├── model/
│   │   ├── HoldingsModel.js
│   │   ├── OrdersModel.js
│   │   └── PositionsModel.js
│   ├── schemas/
│   │   ├── HoldingsSchema.js
│   │   ├── OrdersSchema.js
│   │   └── PositionsSchema.js
│   ├── .env
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── dashboard/                 # Trading dashboard (React)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Apps.js
│   │   │   ├── BuyActionWindow.js
│   │   │   ├── Dashboard.js
│   │   │   ├── DoughnoutChart.js
│   │   │   ├── Funds.js
│   │   │   ├── GeneralContext.js
│   │   │   ├── Holdings.js
│   │   │   ├── Home.js
│   │   │   ├── Menu.js
│   │   │   ├── Orders.js
│   │   │   ├── Positions.js
│   │   │   ├── Summary.js
│   │   │   ├── TopBar.js
│   │   │   ├── VerticalGraph.js
│   │   │   └── WatchList.js
│   │   ├── data/
│   │   │   └── data.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── public/
│   ├── .env
│   ├── package.json
│   └── package-lock.json
│
├── frontend/                  # Landing page (React)
│   ├── src/
│   │   ├── landing_page/
│   │   │   ├── home/
│   │   │   ├── about/
│   │   │   ├── pricing/
│   │   │   ├── products/
│   │   │   ├── signup/
│   │   │   └── support/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── OpenAccount.js
│   │   ├── NotFound.js
│   │   ├── index.js
│   │   └── index.css
│   ├── public/
│   ├── .env
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
├── README.md
└── .vscode/
```

---

## 🔌 Backend API Overview

| Method | Endpoint   | Description         |
| ------ | ---------- | ------------------- |
| GET    | /holdings  | Fetch all holdings  |
| GET    | /positions | Fetch all positions |
| GET    | /orders    | Fetch all orders    |
| POST   | /orders    | Place a new order   |

---

## 🗄️ Database Design

### Holdings

Stores long-term investments displayed in dashboard.

### Positions

Represents open/active trades.

### Orders

Tracks buy/sell history.

Schemas and models are separated for **clean architecture and scalability**.

---

## ⚙️ Environment Setup

### Backend `.env`

```env
PORT=3002
MONGO_URL=your_mongodb_connection_string
```

### Dashboard `.env`

```env
REACT_APP_BACKEND_URL=http://localhost:3002
```

---

## 🚀 Running the Project Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/omarKhan56/your-repo-name.git
cd Zerodha
```

### 2️⃣ Start Backend

```bash
cd backend
npm install
npm start
```

### 3️⃣ Start Dashboard

```bash
cd dashboard
npm install
npm start
```

### 4️⃣ Start Landing Page

```bash
cd frontend
npm install
npm start
```

---

## 📸 Screenshots

> Add screenshots of:

* Landing Page
* Trading Dashboard
* Holdings / Orders / Positions views

---

## 🌱 Future Enhancements

* Live market data integration
* WebSocket-based real-time updates
* Chart improvements
* Pagination & filtering
* Better error handling

---

## 👨‍💻 About the Developer

**Omar Khan**
GitHub: [https://github.com/omarKhan56](https://github.com/omarKhan56)

A passionate full‑stack developer focused on building **scalable, real‑world web applications**.

---

## ⭐ Final Note

This project is intentionally designed to reflect **real project structure, clean code organization, and frontend–backend integration** — making it ideal for interviews and portfolio reviews.

If you find this project useful, consider giving it a ⭐ on GitHub!

