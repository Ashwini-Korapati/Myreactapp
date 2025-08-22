# React Login/Signup Application

A modern, responsive login and signup application built with React, featuring form validation, password visibility toggles, and smooth animations.

## Features

- 🔐 **Secure Authentication Forms** - Login and signup with comprehensive validation
- 🎨 **Modern UI/UX** - Beautiful gradient designs with smooth animations
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- ✅ **Form Validation** - Real-time validation with helpful error messages
- 👁️ **Password Visibility Toggle** - Show/hide password functionality
- 🚀 **Smooth Transitions** - Page transitions and loading states
- 🧩 **Modular Components** - Reusable components with custom hooks
- 🌈 **Tailwind CSS Styling** - Modern utility-first CSS framework

## Tech Stack

- **React** - UI library with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **JavaScript (ES6+)** - Modern JavaScript features

## Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 14.0 or higher)
- **npm** or **yarn** package manager

## Installation & Setup

1. **Clone or download the project**
   ```bash
   # If using git
   git clone <your-repository-url>
   cd react-login-app
   ```

2. **Create a new React application**
   ```bash
   npx create-react-app react-login-app
   cd react-login-app
   ```

3. **Install required dependencies**
   ```bash
   npm install lucide-react
   # or with yarn
   yarn add lucide-react
   ```

4. **Install Tailwind CSS**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

5. **Configure Tailwind CSS**
   
   Update `tailwind.config.js`:
   ```javascript
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

6. **Add Tailwind directives to CSS**
   
   Replace the content of `src/index.css` with:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

7. **Replace App.js content**
   
   Copy the React component code into `src/App.js`

8. **Start the development server**
   ```bash
   npm start
   # or with yarn
   yarn start
   ```

9. **Open your browser**
   
   The application will open at `http://localhost:3000`

## Project Structure

```
src/
├── App.js                 # Main application component
├── index.js              # React DOM entry point
├── index.css             # Tailwind CSS imports
└── components/           # (Optional) Individual component files
    ├── forms/
    │   ├── LoginPage.js
    │   ├── SignupPage.js
    │   └── DashboardPage.js
    ├── ui/
    │   ├── InputField.js
    │   ├── ActionButton.js
    │   └── FormHeader.js
    └── hooks/
        ├── useForm.js
        └── usePasswordVisibility.js
```

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test` or `yarn test`
Launches the test runner in interactive watch mode.

### `npm run build` or `yarn build`
Builds the app for production to the `build` folder.

### `npm run eject` or `yarn eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## Usage

1. **Login Page** - Default landing page
   - Enter username and password
   - Form validation will show errors if fields are invalid
   - Click "Sign In" to login (simulated)

2. **Signup Page** - Accessible from login page
   - Fill in all required fields (name, username, email, phone, password)
   - Password confirmation validation
   - Click "Create Account" to register (simulated)

3. **Dashboard Page** - Shown after successful login
   - Welcome message and basic dashboard layout
   - "Back to Login" button to return to login

## Form Validation Rules

- **Name**: Alphabets only, minimum 2 characters
- **Username**: Alphanumeric and special characters, minimum 3 characters
- **Email**: Valid email format required
- **Phone**: International format with country code (e.g., +1234567890)
- **Password**: Minimum 6 characters, cannot be same as username
- **Confirm Password**: Must match the password field

## Customization

### Adding New Pages
1. Create a new page component following the existing pattern
2. Add the route to the Router component
3. Update navigation calls to include the new route

### Modifying Validation
Update the `validators` object in the main component to change validation rules.

### Styling Changes
The application uses Tailwind CSS. Modify the className props to change styling.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions, please:
1. Check the existing issues in the repository
2. Create a new issue with detailed information
3. Include steps to reproduce any bugs

---

