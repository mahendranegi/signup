# Signup & Login App 🚀

A simple **React.js application** with **Login, Signup, and Welcome pages** using **React Router** and **Material UI**.

---

## 📌 Features

* Login with email and password
* Signup with basic details
* Redirect to **Welcome page** after login
* Client-side form validation
* Built with **React Router v6** for navigation
* Clean Material UI components

---

## 📂 Project Structure

```
src/
│── components/
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── Welcomepage.jsx
│── App.js
│── index.js
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/mahendranegi/signup.git
```

2. **Navigate to project folder**

```bash
cd signup
```

3. **Install dependencies**

```bash
npm install
```

4. **Run the project**

```bash
npm start
```

Now the app will be running at 👉 [http://localhost:3000](http://localhost:3000)

---

## 🚦 Available Routes

* `/` → Login page
* `/signup` → Signup page
* `/welcome` → Welcome page

---

## 🌐 Deployment (GitHub Pages)

1. Install GitHub Pages package:

```bash
npm install gh-pages --save-dev
```

2. In **package.json**, add:

```json
"homepage": "https://mahendranegi.github.io/signup",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:

```bash
npm run deploy
```

Now your app will be live at:
👉 `https://mahendranegi.github.io/signup`

---

## 🛠 Tech Stack

* **React.js**
* **Material UI**
* **React Router v6**

---

## 📧 Author

**Mahendra Negi**

* GitHub: [mahendranegi](https://github.com/mahendranegi)

---


