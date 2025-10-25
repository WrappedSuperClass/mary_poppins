
## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## IMPORTANT:
For the Instagram Section, please emmbed an instagram feed from elfsight.com
1. **Add this custom scc to the embedding and remove the header, add an autpscroll of 3 seconds**:
   ```bash
    .eapps-instagram-feed {
  border-radius: 20px;
  overflow: hidden;
  /* ensures inner corners stay clean */
   } 
   ```



## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── childcare/         # Childcare page route
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── layout/           # Layout components
│   │   ├── Navigation.tsx
│   │   └── Section.tsx
│   ├── sections/         # Page sections
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Founder.tsx
│   │   ├── Gallery.tsx
│   │   ├── Hero.tsx
│   │   ├── Instagram.tsx
│   │   ├── Press.tsx
│   │   ├── Reviews.tsx
│   │   ├── SectionTemplate.tsx
│   │   └── Services.tsx
│   ├── ui/               # Base UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── Reveal.tsx
│   └── ParallaxBackground.tsx
├── lib/                  # Utility functions
│   └── utils.ts
└── styles/               # Global styles
    └── globals.css
```


## 📄 License

This template is open source and available under the [MIT License](LICENSE).

