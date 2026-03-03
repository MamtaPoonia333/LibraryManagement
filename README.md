# 📚 Library Management System

A modern, full-stack library management application with a beautiful glassmorphism UI theme, built with Spring Boot and React.

![Java](https://img.shields.io/badge/Java-21-orange?style=flat&logo=openjdk)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.3.5-brightgreen?style=flat&logo=springboot)
![React](https://img.shields.io/badge/React-19.2.0-blue?style=flat&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38bdf8?style=flat&logo=tailwindcss)

## ✨ Features

### 📖 Book Management
- Add, view, and delete books
- Support for both physical books and eBooks (PDF/EPUB)
- ISBN validation (10 or 13 digits)
- Advanced search by title, author, or genre
- Filter by genre and availability status
- Real-time book count and availability tracking

### 👥 User Management
- Register new library members
- Email validation with duplicate checking
- Phone number field (10-15 digits)
- View all registered users
- Track borrowed books per user

### 📝 Issue/Return System
- Issue books to users with due date tracking
- **3-book limit** per user enforcement
- **Early return support** - users can return books anytime before due date
- Overdue tracking with visual indicators
- Days remaining/overdue calculation
- User book count display (X/3 books)

### 📊 Dashboard
- Total books, available books, issued books statistics
- Total users count
- **Overdue books alerts** with highlighting
- Due soon notifications (within 3 days)
- Beautiful gradient stat cards with icons

### 🎨 UI/UX Features
- **Soft glassmorphism theme** with frosted glass effects
- **Pastel color palette** (pink, purple, blue gradients)
- **Poppins font family** for modern typography
- Cute emoji icons throughout
- Smooth animations and hover effects
- Floating bubble background animations
- Custom gradient scrollbars
- Responsive design for all screen sizes

## 🛠️ Tech Stack

### Backend
- **Java 21 LTS** - Latest long-term support version
- **Spring Boot 3.3.5** - Framework for REST API
- **Maven 3.9.12** - Build automation tool
- **CSV File Storage** - Lightweight data persistence

### Frontend
- **React 19.2.0** - UI library
- **Vite 7.3.1** - Fast build tool and dev server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **React Hot Toast** - Toast notifications
- **Google Fonts (Poppins)** - Modern, friendly typography

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **CORS Configuration** - Cross-origin resource sharing

## 📁 Project Structure

```
LIBRARY MANAGEMENT/
├── backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/com/library/management/
│   │       │   ├── LibraryManagementApplication.java
│   │       │   ├── config/
│   │       │   │   └── CorsConfig.java
│   │       │   ├── controller/
│   │       │   │   ├── BookController.java
│   │       │   │   └── UserController.java
│   │       │   ├── exception/
│   │       │   │   ├── ApiException.java
│   │       │   │   └── GlobalExceptionHandler.java
│   │       │   ├── model/
│   │       │   │   ├── Book.java
│   │       │   │   ├── EBook.java
│   │       │   │   └── User.java
│   │       │   └── service/
│   │       │       └── LibraryService.java
│   │       └── resources/
│   │           └── application.properties
│   ├── pom.xml
│   └── target/
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── client.js
│   │   ├── components/
│   │   │   ├── Layout.jsx
│   │   │   └── Skeleton.jsx
│   │   ├── pages/
│   │   │   ├── DashboardPage.jsx
│   │   │   ├── BooksPage.jsx
│   │   │   ├── UsersPage.jsx
│   │   │   └── IssueReturnPage.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Java 21 or higher
- Maven 3.9+
- Node.js 18+ and npm

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Build the project:
```bash
mvn clean install -DskipTests
```

3. Run the Spring Boot application:
```bash
java -jar target/library-management-0.0.1-SNAPSHOT.jar
```

The backend server will start on **http://localhost:8080**

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at **http://localhost:5173**

## 🎯 Usage

1. **Dashboard** - View library statistics and due soon alerts
2. **Books** - Manage book catalog with search and filters
3. **Users** - Register and manage library members
4. **Issue/Return** - Issue books to users and process returns

### API Endpoints

#### Books
- `GET /api/books` - Get all books
- `POST /api/books` - Add a new book
- `DELETE /api/books/{id}` - Delete a book
- `GET /api/books/issued` - Get all issued books

#### Users
- `GET /api/users` - Get all users
- `POST /api/users` - Register a new user
- `POST /api/users/{userId}/issue/{bookId}` - Issue a book to user
- `POST /api/users/{userId}/return/{bookId}` - Return a book

## 🎨 Design Features

### Glassmorphism Theme
- Frosted glass effects with `backdrop-blur-lg`
- Semi-transparent white backgrounds (`bg-white/60`)
- Soft shadows and gradients
- Border highlights with `border-white/50`

### Color Palette
- **Primary**: Pink to Purple gradients (`from-pink-400 to-purple-400`)
- **Success**: Green to Emerald (`from-green-300 to-emerald-300`)
- **Warning**: Amber to Yellow (`from-amber-200 to-yellow-200`)
- **Error**: Red to Pink (`from-red-300 to-pink-300`)
- **Background**: Soft pastels (`from-pink-50 via-purple-50 to-blue-50`)

### Typography
- **Font Family**: Poppins (weights 300-800)
- **Headings**: Gradient text with `bg-clip-text`
- **Body**: Clean, readable with proper spacing

## 🔒 Validation & Business Rules

### Email Validation
- Format: `example@domain.com`
- Regex pattern validation
- Duplicate email prevention (case-insensitive)

### ISBN Validation
- Accepts 10 or 13 digit ISBNs
- Strips formatting characters
- Optional field

### Phone Number Validation
- Minimum 10 digits, maximum 15 digits
- Optional field
- Supports international formats

### Book Issue Rules
- Maximum 3 books per user
- Automatic due date calculation (14 days)
- Cannot issue unavailable books
- Real-time book count display

### Return Policy
- **Early returns welcome** - no restrictions
- Can return anytime before or after due date
- Overdue tracking with visual indicators
- Automatic availability update

## 📊 Data Storage

The application uses CSV files for data persistence:
- `data/books.csv` - Book records
- `data/users.csv` - User information
- Files created automatically on first run
- Easy to export and backup

## 🔮 Future Enhancements

- [ ] Database integration (PostgreSQL/MySQL)
- [ ] User authentication and authorization
- [ ] Book reservation system
- [ ] Fine calculation for overdue books
- [ ] Email notifications for due dates
- [ ] Book reviews and ratings
- [ ] Advanced analytics and reports
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Mobile app version

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Mamta Poonia**
- GitHub: [@MamtaPoonia333](https://github.com/MamtaPoonia333)

## 🙏 Acknowledgments

- Spring Boot team for the excellent framework
- React team for the amazing UI library
- Tailwind CSS for the utility-first CSS framework
- Google Fonts for the beautiful Poppins font

---

Made with 💝 and ☕️
