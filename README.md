# EchoLift ✨

A web application that generates quotes based on topics you choose. 

##  Features

- **Personalized Quotes**: Generate inspiring quotes based on any topic
- **One-Click Copy**: Click any quote card to copy it to your clipboard
- **Beautiful UI**: Modern gradient design with smooth animations
- **Responsive Design**: Works perfectly on desktop and mobile
- **Real-time Feedback**: Visual confirmation when quotes are copied
- **Fast & Optimized**: Built with Next.js 15 for optimal performance

##  Live Demo

 [View Live Demo](https://quote-generator-app-beryl.vercel.app/)

##  Screenshots

![EchoLift Demo](https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=EchoLift+Demo)

##  Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS + DaisyUI
- **Deployment**: Vercel

##  Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/echolift.git
   cd echolift
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your API keys and configuration in `.env.local`:
   ```env
   NEXT_PUBLIC_API_URL=your-api-url
   # Add other environment variables here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
echolift/
├── app/
│   ├── api/
│   │   └── quotes/
│   │       └── route.ts          # API endpoint for quotes
│   ├── components/
│   │   ├── QuoteCard.tsx         # Individual quote card component
│   │   ├── QuoteForm.tsx         # Main form component
│   │   └── ui/                   # Reusable UI components
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── public/
│   ├── favicon.ico
│   └── logo.png
├── components.json               # shadcn/ui configuration
├── tailwind.config.ts           # Tailwind configuration
├── next.config.ts               # Next.js configuration
└── package.json
```

##  Customization

### Changing Colors

Edit the color palette in `app/components/QuoteForm.tsx`:

```typescript
const cardColors = [
  "bg-rose-100 text-rose-800",
  "bg-amber-100 text-amber-800",
  "bg-purple-100 text-purple-800",
  // Add your custom colors here
];
```

### Adding New Quote Sources

Modify the API route in `app/api/quotes/route.ts` to integrate with your preferred quote API or database.

### Styling Components

All components use Tailwind CSS classes. Key files to customize:
- `QuoteCard.tsx` - Individual quote styling
- `QuoteForm.tsx` - Main form and layout
- `page.tsx` - Main page

## Environment Variables

Create a `.env.local` file in your root directory:

```env
# API Configuration
NEXT_PUBLIC_API_URL=https://your-api-url.com
```

##  Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables
   - Deploy!


## Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first styling
- [DaisyUI](https://daisyui.com/) for beautiful components
- [Vercel](https://vercel.com/) for seamless deployment

## Support

If you like this project, please give it a ⭐ on GitHub!

For support, aishasiddiqa243@gmail.com or create an issue on GitHub.

---

Made with ❤️ by [Aisha Siddiqa](https://github.com/AishaSid)