# 🚀 Zainab Yousaf - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and professional experience as a Full-Stack Software Engineer.

## ✨ Features

-   **Modern Design**: Clean, professional interface with gradient backgrounds and smooth animations
-   **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
-   **Interactive Navigation**: Fixed sidebar with smooth scrolling and active section highlighting
-   **Animated Sections**: Beautiful fade-in and slide-up animations throughout
-   **Contact Form**: Functional contact form with validation and success/error states
-   **Project Showcase**: Detailed project cards with tech stacks and live demos
-   **Skills Display**: Interactive skills section with proficiency indicators
-   **Social Integration**: Direct links to LinkedIn and email

## 🛠️ Tech Stack

-   **Frontend**: Next.js 14, React 18, TypeScript
-   **Styling**: Tailwind CSS
-   **Icons**: Lucide React
-   **Animations**: CSS Keyframes & Tailwind Animations
-   **Deployment**: Vercel (recommended)

## 🎨 Design Highlights

-   **Color Scheme**: Professional blue and purple gradients
-   **Typography**: Modern font combinations with gradient text effects
-   **Layout**: Fixed sidebar navigation with full-width content sections
-   **Interactions**: Hover effects, smooth transitions, and micro-animations
-   **Accessibility**: Proper contrast ratios and semantic HTML

## 📱 Sections

1. **Home**: Hero section with animated background and call-to-action buttons
2. **About**: Personal introduction, experience, and core values
3. **Projects**: Showcase of professional projects with detailed descriptions
4. **Skills**: Technical expertise categorized by proficiency levels
5. **Contact**: Interactive contact form and professional information

## 🚀 Getting Started

### Prerequisites

-   Node.js 18+
-   npm or yarn

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/zainab-yousaf/zainab-yousaf.git
    cd zainab-yousaf
    ```

2. **Install dependencies**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Run the development server**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

-   `npm run dev` - Start development server
-   `npm run build` - Build for production
-   `npm run start` - Start production server
-   `npm run lint` - Run ESLint

## 🎯 Customization

### Personal Information

Update the following files with your information:

-   `components/SideNav.tsx` - Profile image, name, and social links
-   `components/About.tsx` - Personal introduction and experience
-   `components/Project.tsx` - Your projects array
-   `components/Skills.tsx` - Your skills and proficiency levels
-   `components/ContactInfo.tsx` - Contact information and social links

### Styling

-   Modify `app/globals.css` for global styles and animations
-   Update Tailwind classes in component files for color schemes
-   Adjust `components/SideNav.tsx` for navigation styling

### Images

-   Replace `public/profileImage.jpg` with your profile photo
-   Add project screenshots to `public/` directory

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with zero configuration

### Netlify

1. Build your project: `npm run build`
2. Drag and drop the `out` folder to [Netlify](https://netlify.com)

### GitHub Pages

1. Update `next.config.ts` for static export
2. Push to GitHub and enable Pages in repository settings

## 📄 Project Structure

```
zainab-yousaf/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── About.tsx            # About section component
│   ├── ContactInfo.tsx      # Contact form and info
│   ├── Project.tsx          # Projects showcase
│   ├── SideNav.tsx          # Navigation sidebar
│   └── Skills.tsx           # Skills display
├── public/
│   └── profileImage.jpg     # Profile photo
├── package.json
├── tailwind.config.js
└── README.md
```

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📞 Contact

-   **Email**: zainab.yousaf161@gmail.com
-   **LinkedIn**: [zainabyousaf](https://www.linkedin.com/in/zainabyousaf/)
-   **Portfolio**: [Live Demo](https://zainab-yousaf.vercel.app)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

-   Design inspiration from modern portfolio websites
-   Icons provided by [Lucide React](https://lucide.dev)
-   Built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com)

---

⭐ **Star this repository if you found it helpful!**

_Last updated: December 2024_
