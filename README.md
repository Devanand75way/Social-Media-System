# Social Media System

## 📌 Overview

The **Social Media System** is a full-stack web application where users can create posts, upload images, and interact with content. This project utilizes **React.js** for the frontend and **json-server** as a mock backend to handle CRUD operations for posts.

## ✨ Features

- 📝 **Create Posts**: Users can add a description and upload an image.
- 📤 **Upload Images**: Images are previewed before posting.
- 📄 **View All Posts**: Fetches posts from a database (`db.json`).
- 🔍 **Category Filtering**: View posts based on selected categories.
- 🔥 **Smooth UI & Animations**: Uses `framer-motion` for animations.

## 🛠 Tech Stack

- **Frontend:** React.js, Material-UI
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Animations:** Framer Motion
- **Backend (Mock API):** json-server
- **API Handling:** Redux Toolkit Query

## 🚀 Installation & Setup

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/yourusername/social-media-system.git
cd social-media-system
```

### **2️⃣ Install Dependencies**

```sh
npm install
```

### **3️⃣ Run Mock Backend (json-server)**

```sh
npx json-server --watch db.json --port 5000
```

### **4️⃣ Start the React App**

```sh
npm run dev
```

## 📌 API Endpoints (Mock Backend)

| Method | Endpoint   | Description       |
| ------ | ---------- | ----------------- |
| GET    | /posts     | Fetch all posts   |
| POST   | /posts     | Create a new post |
| DELETE | /posts/:id | Delete a post     |

## 💡 Future Improvements

- ✅ Implement user authentication (JWT-based login/signup)
- ✅ Add likes and comments feature
- ✅ Improve UI with dark mode support
- ✅ Deploy the application on Vercel or Netlify

## 🤝 Contributing

Contributions are welcome! Feel free to open issues and submit pull requests.

---

Made with ❤️ by [Devanand Rana](https://github.com/Devanand75way)
