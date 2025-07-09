# Misqabbi Store

## 🛍️ Description

This is the backend for the **Misqabbi Store**, an e-commerce platform that powers a women-owned fashion brand specializing in made-to-measure pieces designed exclusively for women.

Built with Node.js, Express, and Firebase Admin SDK, this backend is designed for scalability, security, and collaboration.

---

## ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/anorme/misqabbi-store.git
   ```
2. Navigate into the project directory:
   ```bash
   cd misqabbi-store
   ```
3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Add your Firebase Admin SDK credentials:  
   Place your `firebase-admin.json` file in the root directory (this file is ignored by Git).

5. Create a `.env` file:
   ```env
   PORT=5000
   GOOGLE_APPLICATION_CREDENTIALS="path to your firebase-admin.json" # Use backslashes on Windows
   ```

---

## 🚀 Usage

To start the development server in watch mode:

```bash
npm run dev
```

To start the server normally:

```bash
npm start
```

---

## 🔐 RBAC Middleware (In Progress)

We're scaffolding role-based access control using Firebase Admin SDK.

### Middleware to Implement

- `verifyToken`: Verifies Firebase ID tokens and attaches user info to `req.user`
- `checkAdmin`: Checks Firestore for user role and allows access if `role === 'admin'`

### How to Contribute

- Follow the TODOs in each middleware file:
  - `src/middleware/auth.middleware.js`
  - `src/middleware/rbac.middleware.js`
- Use `auth.verifyIdToken()` to decode tokens
- Use `db.collection('users').doc(uid)` to fetch user roles
- Test with the `/api/admin/dashboard` route

Once implemented, we’ll review and compare solutions before merging.

---

## 📦 Routes Overview

| Endpoint               | Method | Access     | Description                     |
| ---------------------- | ------ | ---------- | ------------------------------- |
| `/api/admin/dashboard` | GET    | Admin only | Protected admin dashboard route |
| `/api/orders`          | GET    | Auth only  | Get all orders (TODO)           |
| `/api/orders/:id`      | GET    | Auth only  | Get order by ID (TODO)          |
| `/api/orders`          | POST   | Auth only  | Create new order (TODO)         |

---

## 🤝 Contributing

We love contributions! To get started, please read our  
[Contributing Guide](CONTRIBUTING.md) for coding standards, commit conventions, and submission steps.

If you're collaborating on the RBAC feature, check the section above for implementation notes and TODOs.

---

## 📄 License

This project does not currently have a license. Check back later for updates.

---
