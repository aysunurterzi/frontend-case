# Frontend Case - User Registration Application

A modern React TypeScript application showcasing a user registration form with reusable UI components, form validation, and beautiful design using Tailwind CSS.

## 🚀 Features

- **User Registration Form**: Complete user account creation with validation
- **Reusable UI Components**: Modular, composable UI components
- **TypeScript Support**: Full type safety throughout the application
- **Form Validation**: Client-side validation with error handling
- **Modern UI**: Beautiful, responsive design with Tailwind CSS
- **React Router**: Client-side routing between pages
- **Accessibility**: WCAG compliant components with proper ARIA labels
- **LocalStorage Integration**: Local storage of user data

## 📦 Tech Stack

- **React 18.2.0** - Latest stable React version
- **TypeScript 4.7.4** - Type safety and better developer experience
- **React Router DOM 6.3.0** - Client-side routing
- **Tailwind CSS 3.3.2** - Utility-first CSS framework
- **PostCSS & Autoprefixer** - CSS processing tools

## 🏗️ Project Structure

```
src/
├── components/
│   └── ui/
│       ├── Button.tsx          # Reusable button component with variants
│       ├── Checkbox.tsx        # Reusable checkbox component
│       ├── Form.tsx            # Form wrapper component
│       ├── FormItem.tsx        # Form item wrapper component
│       ├── Input.tsx           # Basic input component
│       └── PasswordInput.tsx   # Password input with visibility toggle
├── pages/
│   ├── CreateUserPage.tsx      # User registration form page
│   └── UserDataPage.tsx        # User data display success page
├── services/
│   ├── userService.ts          # User operations service
│   └── validationService.ts    # Form validation service
├── types/
│   ├── index.ts                # Main type exports
│   ├── ui/                     # UI component types
│   │   ├── ButtonProps.ts
│   │   ├── CheckboxProps.ts
│   │   ├── FormProps.ts
│   │   ├── InputProps.ts
│   │   └── index.ts
│   └── user/                   # User-related types
│       ├── UserFormData.ts     # User form data type
│       ├── ValidationErrors.ts # Validation error type
│       └── index.ts
├── App.tsx                     # Main application component with routing
├── App.css                     # Application styles
├── index.tsx                   # Application entry point
└── index.css                   # Global styles and Tailwind imports
```

## 🎯 Application Flow

1. **CreateUserPage** (`/`): User registration form with validation
2. **UserDataPage** (`/user-data`): Success page displaying user information

## 🧩 Component Usage

### Input Component

The Input component supports various input types:

```tsx
import { Input } from './components/ui/Input';

// Basic input
<Input 
    type="text" 
    placeholder="Enter your full name" 
    value={formData.fullname}
    onChange={(e) => handleInputChange('fullname', e.target.value)}
/>

// Email input with error state
<Input
    type="email"
    placeholder="Enter your email address"
    hasError={!!errors.email}
    errorMessage={errors.email}
    value={formData.email}
    onChange={(e) => handleInputChange('email', e.target.value)}
    required
/>
```

### PasswordInput Component

Special password input with visibility toggle:

```tsx
import { PasswordInput } from './components/ui/PasswordInput';

<PasswordInput
    placeholder="Enter your password"
    value={formData.password}
    onChange={(e) => handleInputChange('password', e.target.value)}
    hasError={!!errors.password}
    errorMessage={errors.password}
    required
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

// Button with loading state
<Button 
    loading={isLoading} 
    loadingText="Creating..."
    disabled={isLoading}
>
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
/>
```

## 🎨 Component Variants

### Button Variants

- **primary**: Indigo to purple gradient background
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
- Must be at least 6 characters long
- Must contain only alphanumeric characters
- Real-time validation feedback

### Full Name
- Optional field
- No specific validation rules

### Remember Me
- Boolean checkbox
- No validation required

## 🛠️ Services

### UserService
- `createUser()`: User creation simulation (1 second delay)
- `saveUserData()`: Save user data to LocalStorage
- `getUserData()`: Read user data from LocalStorage

### ValidationService
- `validateUserForm()`: Validate form data
- `isValidForm()`: Check form validity

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
9. **Data Persistence**: LocalStorage data storage
10. **Service Layer**: Separated business logic layers

## 📱 Responsive Design

The application is designed to look perfect on all device sizes:
- **Mobile**: Full width, touch-friendly
- **Tablet**: Medium-sized layout
- **Desktop**: Centered card layout

## 🧪 Testable Features

- Form validation rules
- Responsive design
- Keyboard navigation
- Screen reader compatibility
- Loading states
- Error states
