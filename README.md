# 🏠 Real Estate Application

A modern, full-featured real estate web application built with Next.js, enabling users to search, browse, and view detailed property listings. This application provides a seamless user experience with advanced filtering capabilities and responsive design.

## ✨ Features

- **Property Listings**: Browse through available properties with detailed information
- **Advanced Search**: Filter properties by price, room count, property type, and more
- **Property Details**: View comprehensive property information including images, pricing, and specifications
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Image Galleries**: Horizontal scrolling image galleries for property photos
- **Real-time Data**: Integration with external API for up-to-date property listings
- **Modern UI**: Built with Chakra UI for a clean and professional interface

## 🛠️ Tech Stack

- **Framework**: [Next.js 12](https://nextjs.org/) - React framework with SSR and SSG
- **UI Library**: [Chakra UI](https://chakra-ui.com/) - Component library for React
- **Styling**: CSS Modules & Emotion
- **HTTP Client**: [Axios](https://axios-http.com/) - Promise-based HTTP client
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Production-ready animation library
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Image Optimization**: [Sharp](https://sharp.pixelplumbing.com/) - High-performance image processing
- **Progress Bar**: NProgress - Loading indicator

## 📁 Project Structure

```
realestate/
├── components/          # Reusable React components
│   ├── Footer.jsx      # Footer component
│   ├── ImageScrollbar.jsx  # Horizontal image scroller
│   ├── Layout.jsx      # Main layout wrapper
│   ├── Navbar.jsx      # Navigation bar
│   ├── Property.jsx    # Property card component
│   └── SearchFilters.jsx   # Advanced search filters
├── pages/              # Next.js pages and routing
│   ├── _app.js        # Custom App component
│   ├── index.js       # Home page
│   ├── search.js      # Search results page
│   ├── api/           # API routes
│   └── property/      # Dynamic property pages
│       └── [id].js    # Individual property detail page
├── utils/             # Utility functions
│   ├── fetchApi.js    # API fetching utilities
│   └── filterData.js  # Filter configuration data
├── styles/            # Global styles
├── assets/            # Static assets
└── public/            # Public static files
```

## 🚀 Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/audrbar/realestate.git
   cd realestate
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add necessary API keys:
   ```env
   NEXT_PUBLIC_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application

## 📜 Available Scripts

- `npm run dev` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm start` - Runs the built app in production mode
- `npm run lint` - Runs ESLint to check code quality

## 🔧 Configuration

The application uses Next.js configuration in `next.config.js` for:
- Image optimization settings
- External API domains
- Build configurations

## 🌐 Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Configure environment variables
4. Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/audrbar/realestate)

### Deploy on Netlify

This project includes Netlify plugin configuration:

```bash
npm run build
```

Then connect your repository to Netlify for automatic deployments.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/audrbar/realestate/issues).

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

- GitHub: [@audrbar](https://github.com/audrbar)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Chakra UI for the beautiful component library
- Real estate API providers for data access
