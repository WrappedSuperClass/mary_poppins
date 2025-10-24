# Mary Poppins Child Care - One Page Website Framework

This is a production-ready, scalable one-page website framework built with Next.js 14, TypeScript, and Tailwind CSS.

## 🏗️ Framework Structure

### Core Components

#### 1. **Section Component** (`/src/components/layout/Section.tsx`)
Base component for all sections with consistent styling and responsive design.

**Props:**
- `id`: Section identifier for navigation
- `children`: Section content
- `className`: Additional CSS classes
- `background`: 'transparent' | 'gradient' | 'solid'
- `padding`: 'none' | 'sm' | 'md' | 'lg' | 'xl'
- `minHeight`: 'screen' | 'auto' | 'fit'

#### 2. **SectionTemplate Component** (`/src/components/sections/SectionTemplate.tsx`)
Pre-built template for common section layouts with title, subtitle, and content areas.

**Props:**
- `id`: Section identifier
- `title`: Section title (optional)
- `subtitle`: Section subtitle (optional)
- `children`: Section content
- `background`: Background type
- `className`: Additional CSS classes

#### 3. **Navigation Component** (`/src/components/layout/Navigation.tsx`)
Responsive navigation with scroll effects and smooth scrolling.

### Current Sections

1. **Hero Section** - Title and navigation
2. **Services Section** - Main services card with glass effect
3. **About Section** - Company information (example)
4. **Contact Section** - Contact form and information (example)

## 🚀 Adding New Sections

### Method 1: Using SectionTemplate (Recommended for standard sections)

```tsx
// src/components/sections/YourNewSection.tsx
import SectionTemplate from './SectionTemplate'

export default function YourNewSection() {
  return (
    <SectionTemplate
      id="your-section"
      title="Your Section Title"
      subtitle="Your section subtitle"
      background="gradient" // or 'transparent' or 'solid'
    >
      {/* Your content here */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>Content left</div>
        <div>Content right</div>
      </div>
    </SectionTemplate>
  )
}
```

### Method 2: Using Base Section Component (For custom layouts)

```tsx
// src/components/sections/YourCustomSection.tsx
import Section from '@/components/layout/Section'

export default function YourCustomSection() {
  return (
    <Section 
      id="your-section"
      background="gradient"
      padding="xl"
      minHeight="auto"
    >
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Your custom content */}
      </div>
    </Section>
  )
}
```

### Method 3: Adding to Main Page

```tsx
// src/app/page.tsx
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import YourNewSection from '@/components/sections/YourNewSection'

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Services />
      <YourNewSection />
      {/* Add more sections here */}
    </main>
  )
}
```

## 🎨 Design System

### Background Types
- `transparent`: No background (for hero sections)
- `gradient`: Dreamy gradient background
- `solid`: Solid color background

### Responsive Breakpoints
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

### Color Palette
- Primary: Blue gradients (`#9bb8ef`, `#c8baf1`, `#f6c1c7`)
- Text: White with opacity variations
- Accent: Yellow tints for hover effects

## 📱 Responsive Features

- **Mobile-first design** with progressive enhancement
- **Flexible grid systems** that adapt to screen size
- **Touch-friendly navigation** and interactions
- **Optimized images** with Next.js Image component
- **Performance optimizations** for mobile devices

## 🛠️ Development Guidelines

### File Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page with sections
├── components/
│   ├── layout/
│   │   ├── Section.tsx     # Base section component
│   │   └── Navigation.tsx   # Navigation component
│   └── sections/
│       ├── Hero.tsx        # Hero section
│       ├── Services.tsx    # Services section
│       ├── About.tsx       # About section (example)
│       ├── Contact.tsx     # Contact section (example)
│       └── SectionTemplate.tsx # Section template
```

### Best Practices

1. **Use SectionTemplate** for standard sections with titles
2. **Use base Section** for custom layouts
3. **Follow responsive design patterns** (mobile-first)
4. **Use semantic HTML** for accessibility
5. **Optimize images** with Next.js Image component
6. **Test on multiple devices** and screen sizes

### Adding Navigation Items

Update the `navigationItems` array in `/src/components/layout/Navigation.tsx`:

```tsx
const navigationItems = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
  { name: 'Your New Section', href: '#your-new-section' }
]
```

## 🚀 Production Ready Features

- ✅ **SEO Optimized** with proper metadata
- ✅ **Performance Optimized** with Next.js 14
- ✅ **Mobile Responsive** design
- ✅ **Accessibility** features
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** for consistent styling
- ✅ **Component-based** architecture
- ✅ **Easy to extend** and maintain

## 📝 Example: Adding a Testimonials Section

1. Create the component:
```tsx
// src/components/sections/Testimonials.tsx
import SectionTemplate from './SectionTemplate'

export default function Testimonials() {
  return (
    <SectionTemplate
      id="testimonials"
      title="What Parents Say"
      subtitle="Trusted by families across the region"
      background="solid"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Testimonial cards */}
      </div>
    </SectionTemplate>
  )
}
```

2. Add to main page:
```tsx
import Testimonials from '@/components/sections/Testimonials'
// ... add <Testimonials /> to the main component
```

3. Update navigation:
```tsx
{ name: 'Testimonials', href: '#testimonials' }
```

That's it! Your new section is ready and fully responsive.

## Instagram Embed (Third-Party Widget)

A ready section exists at `src/components/sections/Instagram.tsx`.

- Set your widget URL by replacing `WIDGET_SRC` with your provider iframe URL (e.g., Elfsight/LightWidget):

```ts
// src/components/sections/Instagram.tsx
const WIDGET_SRC = 'https://lightwidget.com/widgets/XXXXXXXX.html'
```

- The section is already added to the page and navigation. If `WIDGET_SRC` is null, a fallback CTA to `https://instagram.com/poppins_childcare` is shown.

- Styling: the iframe is wrapped in a glass card with rounded corners. Adjust height via the inline style on the iframe.
