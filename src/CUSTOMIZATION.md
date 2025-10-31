# 🎨 Lucidev Customization Guide

Welcome to the Lucidev customization guide! This document will help you customize tabs, themes, and components to make Lucidev truly yours.

---

## 📑 Table of Contents

1. [Adding New Tabs](#adding-new-tabs)
2. [Customizing Existing Tabs](#customizing-existing-tabs)
3. [Creating Custom Themes](#creating-custom-themes)
4. [Styling Components](#styling-components)
5. [Advanced Customization](#advanced-customization)

---

## 🆕 Adding New Tabs

### Step 1: Create a New Page Component

Create a new file in `/components/pages/` for your custom tab:

```tsx
// /components/pages/MyCustomPage.tsx

export function MyCustomPage() {
  return (
    <div className="flex items-center justify-center h-full p-4 md:p-8">
      <div className="text-center space-y-6 animate-fade-in">
        <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-2xl shadow-indigo-500/30 animate-pulse-slow">
          <span className="text-4xl md:text-5xl">🚀</span>
        </div>
        <div className="space-y-2 glass-sidebar rounded-2xl p-6 md:p-8 border border-white/20 dark:border-white/10">
          <h1 className="text-gray-900 dark:text-white rainy:text-gray-100">
            My Custom Page
          </h1>
          <p className="text-gray-600 dark:text-gray-400 rainy:text-gray-300 max-w-md mx-auto">
            This is my custom page content!
          </p>
        </div>
      </div>
    </div>
  );
}
```

### Step 2: Add Route in App.tsx

Import your new page and add a route:

```tsx
// In /App.tsx

// Add import at the top
import { MyCustomPage } from "./components/pages/MyCustomPage";

// Inside <Routes> component, add your route
<Route path="/my-custom" element={<MyCustomPage />} />;
```

### Step 3: Add Navigation Item in Sidebar

Update the sidebar navigation items:

```tsx
// In /components/Sidebar.tsx

// Add import for your icon
import { Rocket } from "lucide-react"; // Or any icon you want

// Update navItems array
const navItems = [
  { path: "/home", label: "Home", icon: Home },
  { path: "/user", label: "User", icon: User },
  { path: "/upload", label: "Upload", icon: Upload },
  { path: "/my-custom", label: "My Custom", icon: Rocket }, // Add this
  { path: "/settings", label: "Settings", icon: Settings },
];
```

That's it! Your new tab will now appear in the sidebar.

---

## ✏️ Customizing Existing Tabs

### Modifying Page Content

Edit any page file in `/components/pages/` to customize its content:

```tsx
// Example: Customizing /components/pages/User.tsx

import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { User as UserIcon, Mail, Phone } from "lucide-react";

export function User() {
  return (
    <div className="min-h-full p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-gray-900 dark:text-white rainy:text-gray-100">
          User Profile
        </h1>

        <Card className="glass-card-feature p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <UserIcon className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-gray-900 dark:text-white">
                John Doe
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Developer
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700 dark:text-gray-300">
                john@example.com
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700 dark:text-gray-300">
                +1 234 567 8900
              </span>
            </div>
          </div>

          <Button className="w-full mt-6 glass-button-cta">
            Edit Profile
          </Button>
        </Card>
      </div>
    </div>
  );
}
```

### Using Available Glass Components

Lucidev provides several pre-styled glass components:

- `glass-card-feature` - Feature cards with hover effects
- `glass-card-benefits` - Benefit/info cards
- `glass-card-cta` - Call-to-action cards
- `glass-button-cta` - Primary action buttons
- `glass-button-secondary` - Secondary buttons
- `glass-badge` - Small badge elements

---

## 🎨 Creating Custom Themes

### Adding a New Theme

1. **Update the Theme Type** in `/App.tsx`:

```tsx
export type Theme = "light" | "dark" | "rainy" | "sunset"; // Add your theme
```

2. **Add Theme Background** in `/App.tsx`:

```tsx
// Inside the background div, add your theme
<div
  className={`absolute inset-0 transition-opacity duration-1000 ${theme === "sunset" ? "opacity-100" : "opacity-0"}`}
>
  {/* Sunset theme gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-orange-600 via-pink-500 to-purple-600"></div>

  {/* Add any decorative elements */}
  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-orange-800 to-transparent"></div>
</div>
```

3. **Add Theme Variant in CSS**:

```css
/* In /styles/globals.css */

@custom-variant sunset (&:is(.sunset *));

/* Add sunset-specific glass styling */
.sunset .glass-sidebar-realistic {
  background: linear-gradient(
    135deg,
    rgba(251, 146, 60, 0.2) 0%,
    rgba(249, 115, 22, 0.15) 50%,
    rgba(251, 146, 60, 0.18) 100%
  );
  backdrop-filter: blur(45px) saturate(160%);
  -webkit-backdrop-filter: blur(45px) saturate(160%);
  border-left: 1px solid rgba(255, 255, 255, 0.25);
}
```

4. **Update Theme Cycling**:

```tsx
// In /App.tsx

const cycleTheme = () => {
  setTheme((prev) => {
    if (prev === "light") return "dark";
    if (prev === "dark") return "rainy";
    if (prev === "rainy") return "sunset"; // Add this
    return "light";
  });
};
```

5. **Add Theme Icon** in `/components/Sidebar.tsx`:

```tsx
import { Sunset } from "lucide-react"; // Or create custom icon

const getThemeIcon = () => {
  switch (theme) {
    case "dark":
      return <Moon className="w-5 h-5" strokeWidth={2} />;
    case "rainy":
      return <CloudRain className="w-5 h-5" strokeWidth={2} />;
    case "sunset":
      return <Sunset className="w-5 h-5" strokeWidth={2} />; // Add this
    default:
      return <Sun className="w-5 h-5" strokeWidth={2} />;
  }
};

const getThemeLabel = () => {
  switch (theme) {
    case "dark":
      return "Dark Mode";
    case "rainy":
      return "Rainy Mode";
    case "sunset":
      return "Sunset Mode"; // Add this
    default:
      return "Light Mode";
  }
};
```

---

## 🎭 Styling Components

### Creating Custom Glass Effects

```css
/* Add to /styles/globals.css */

.my-custom-glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.my-custom-glass:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.15),
    inset 0 0 0 1px rgba(255, 255, 255, 0.15);
}
```

### Using Custom Animations

```css
/* Add to /styles/globals.css */

@keyframes my-custom-animation {
  0% {
    opacity: 0;
    transform: translateY(20px) rotate(-5deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotate(0);
  }
}

.animate-my-custom {
  animation: my-custom-animation 0.6s ease-out forwards;
}
```

Then use it in your components:

```tsx
<div className="animate-my-custom my-custom-glass">
  Custom animated glass component
</div>
```

---

## 🚀 Advanced Customization

### Custom Icon Sets

Replace Lucide icons with custom SVGs or other icon libraries:

```tsx
// Create /components/icons/MyCustomIcon.tsx

export function MyCustomIcon({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
}
```

### Dynamic Tab Order

Make tabs reorderable:

```tsx
// In /components/Sidebar.tsx

const [navItems, setNavItems] = useState([
  { path: "/home", label: "Home", icon: Home },
  { path: "/user", label: "User", icon: User },
  // ... more items
]);

// Add drag and drop logic or manual reordering
```

### Conditional Tabs

Show/hide tabs based on conditions:

```tsx
// In /components/Sidebar.tsx

const navItems = [
  { path: "/home", label: "Home", icon: Home },
  { path: "/user", label: "User", icon: User },
  // Conditional tab
  ...(userIsAdmin
    ? [{ path: "/admin", label: "Admin", icon: Shield }]
    : []),
  { path: "/settings", label: "Settings", icon: Settings },
];
```

### Tab Badges/Notifications

Add notification badges to tabs:

```tsx
// In /components/Sidebar.tsx

const navItems = [
  { path: "/home", label: "Home", icon: Home, badge: null },
  { path: "/user", label: "User", icon: User, badge: 3 }, // 3 notifications
  {
    path: "/upload",
    label: "Upload",
    icon: Upload,
    badge: null,
  },
];

// In rendering
<span className="relative">
  {item.label}
  {item.badge && (
    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
      {item.badge}
    </span>
  )}
</span>;
```

---

## 💡 Tips & Best Practices

1. **Keep Consistency**: Use the existing glass components for a cohesive look
2. **Test All Themes**: Make sure your customizations work in Light, Dark, and Rainy modes
3. **Mobile First**: Always test your customizations on mobile screens
4. **Performance**: Avoid excessive animations or heavy effects
5. **Accessibility**: Ensure proper contrast and keyboard navigation

---

## 📚 Resources

- **Lucide Icons**: https://lucide.dev/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React Router**: https://reactrouter.com/

---

## 🆘 Need Help?

If you encounter any issues:

1. Check the console for errors
2. Verify your imports and file paths
3. Ensure your theme variants are properly defined in CSS
4. Test in different browsers

Happy customizing! 🎉