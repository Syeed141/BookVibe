# 📚 Book Vibe

A modern React-based web application for browsing books, viewing details, and tracking your reading progress.

---

## 🚀 Features

* 📖 Browse a collection of books
* 🔍 View detailed information about each book
* ✅ Mark books as "Read"
* 💾 Persist reading data using Local Storage
* 🧭 Client-side routing with React Router
* 🎨 Clean and responsive UI using Tailwind CSS & DaisyUI

---

## 🛠️ Tech Stack

* **Frontend:** React 19, Vite
* **Routing:** React Router
* **Styling:** Tailwind CSS, DaisyUI
* **Icons:** Lucide React
* **State Management:** React Hooks
* **Storage:** Browser Local Storage

---

## 📁 Project Structure

```
src/
│
├── Components/        # Reusable UI components
│   ├── Banner/
│   ├── Book/
│   ├── Footer/
│   ├── Header/
│   └── MarkAsReadViewier/
│
├── Pages/             # Application pages
│   ├── About/
│   ├── BookDetails/
│   ├── Books/
│   ├── MarkAsRead/
│   └── Root/
│
├── Routes/            # Route configuration
├── Utilities/         # Helper functions (e.g., LocalStorage)
├── assets/            # Images and static assets
├── App.jsx
└── main.jsx
```

---

## Live link : https://book-vibe-delta.vercel.app/

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/book-vibe.git
cd book-vibe
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## 📦 Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## 🔄 Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| npm run dev     | Start development server |
| npm run build   | Build for production     |
| npm run preview | Preview production build |
| npm run lint    | Run ESLint               |

---

## 📊 Data Source

Book data is loaded from:

```
/public/booksData.json
```

---

## 💡 Key Functionalities

### 📘 Book Listing

Displays all available books with basic information.

### 📄 Book Details

Shows detailed information about a selected book.

### ✅ Mark as Read

Allows users to mark books as read and stores them locally.

### 📚 Read List Page

Displays all books marked as read.

---

## 🧠 Local Storage Utility

The app uses a utility function to:

* Save read books
* Retrieve saved books
* Prevent duplicates

---

## 🎨 UI Components

* Navbar & Footer
* Book Cards
* Banner Section
* Tabs (for filtering read books)

---

## 🔗 Routing

Handled via `react-router`:

* `/` → Home
* `/books` → All Books
* `/book/:id` → Book Details
* `/read` → Marked as Read
* `/about` → About Page

---

## 🧪 Future Improvements

* 🔎 Search & filter functionality
* ⭐ Book rating system
* 📝 Notes or reviews
* 🌐 API integration instead of static JSON

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push and open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Developed by **Shahriar Syeed**

---

## 🌟 Support

If you like this project, give it a ⭐ on GitHub!
