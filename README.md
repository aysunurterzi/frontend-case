# Frontend Case - User Registration Form

A React TypeScript application demonstrating a modern user registration form with reusable UI components, form validation, and beautiful design using Tailwind CSS.

## 🚀 Features

- **User Registration Form**: Complete user account creation with validation
- **Reusable UI Components**: Modular, composable UI components
- **TypeScript Support**: Full type safety throughout the application
- **Form Validation**: Client-side validation with error handling
- **Modern UI**: Beautiful, responsive design with Tailwind CSS
- **React Router**: Client-side routing between pages
- **Accessibility**: WCAG compliant components with proper ARIA labels

## 📦 Tech Stack

- **React 18.3.1** - Latest stable React version
- **TypeScript 4.9.5** - Type safety and better developer experience
- **React Router DOM 6.30.1** - Client-side routing
- **Tailwind CSS 3.3.2** - Utility-first CSS framework
- **Lodash 4.17.21** - Utility library for data manipulation

## 🏗️ Project Structure

```
src/
├── components/
│   └── ui/
│       ├── Button.tsx        # Reusable button component with variants
│       ├── Checkbox.tsx      # Reusable checkbox component
│       └── Input.tsx         # Reusable input component with password toggle
├── pages/
│   ├── CreateUserPage.tsx    # User registration form page
│   └── UserDataPage.tsx      # User data display page
├── App.js                    # Main application component with routing
├── App.css                   # Application styles
└── index.js                  # Application entry point
```

## 🎯 Application Flow

1. **CreateUserPage** (`/`): User registration form with validation
2. **UserDataPage** (`/user-data`): Success page displaying user information

## 🧩 Component Usage

### Input Component

The Input component supports various input types with built-in password visibility toggle:

```tsx
import { Input } from './components/ui/Input';

// Basic input
<Input 
    type="text" 
    placeholder="Enter your name" 
    className="h-12 text-base"
/>

// Email input with validation
<Input
    type="email"
    placeholder="Enter your email"
    hasError={!!errors.email}
    errorMessage={errors.email}
    value={formData.email}
    onChange={(e) => handleInputChange('email', e.target.value)}
/>

// Password input with show/hide toggle
<Input
    type="password"
    placeholder="Enter your password"
    hasError={!!errors.password}
    errorMessage={errors.password}
/>
```

### Button Component

The Button component supports multiple variants and sizes:

```tsx
import { Button } from './components/ui/Button';

// Primary button (default)
<Button variant="primary" size="lg">
    Create Account
</Button>

// Secondary button
<Button variant="secondary">Cancel</Button>

// Outline button
<Button variant="outline">Edit</Button>

// Danger button
<Button variant="danger">Delete</Button>

// Success button
<Button variant="success">Save</Button>

// Loading state
<Button loading loadingText="Creating...">
    Create Account
</Button>
```

### Checkbox Component

The Checkbox component includes label and error handling:

```tsx
import { Checkbox } from './components/ui/Checkbox';

<Checkbox 
    label="Remember me"
    checked={formData.rememberMe}
    onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
    required={false}
/>
```

## 🎨 Component Variants

### Button Variants

- **primary**: Gradient indigo to purple background
- **secondary**: Gray background
- **outline**: White background with border
- **danger**: Red background
- **success**: Green background

### Button Sizes

- **sm**: Small (px-3 py-1.5 text-sm)
- **md**: Medium (px-4 py-2 text-sm) - Default
- **lg**: Large (px-6 py-3 text-base)
- **xl**: Extra Large (px-8 py-4 text-lg)

## 🔧 Form Validation

The application implements client-side validation with the following rules:

### Email Validation
- Required field
- Must be a valid email format
- Real-time validation feedback

### Password Validation
- Required field
- Must be alphanumeric only
- Real-time validation feedback

### Full Name
- Optional field
- No specific validation rules

### Remember Me
- Boolean checkbox
- No validation required

## 🎨 Design Features

### Visual Design
- **Gradient Background**: Beautiful blue to purple gradient
- **Card Layout**: Clean white cards with shadow and rounded corners
- **Responsive Design**: Works on all screen sizes
- **Hover Effects**: Smooth transitions and hover states
- **Focus States**: Clear focus indicators for accessibility

### Color Scheme
- **Primary**: Indigo to Purple gradient
- **Success**: Green
- **Error**: Red
- **Neutral**: Gray scale
- **Background**: Light blue gradient

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

3. **Open browser:**
   Navigate to `http://localhost:3000`

## 📝 Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

## 🎯 Key Features Demonstrated

1. **User Registration Flow**: Complete form submission and data display
2. **Form Validation**: Real-time client-side validation
3. **Reusable Components**: Modular UI components
4. **TypeScript Integration**: Full type safety
5. **Modern UI**: Beautiful, responsive design
6. **Accessibility**: WCAG compliant components
7. **React Router**: Client-side navigation
8. **Password Security**: Password visibility toggle
