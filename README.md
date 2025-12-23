# 🏠 Real Estate Application

A modern, full-featured real estate web application built with Next.js, enabling users to search, browse, and view detailed property listings. This application provides a seamless user experience with advanced filtering capabilities and responsive design.

## ✨ Features

- **Property Listings**: Browse through available properties with detailed information
- **Advanced Search**: Filter properties by price, room count, bathrooms, property type, and location
- **Property Details**: View comprehensive property information including multiple images, pricing, specifications, and descriptions
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Image Galleries**: Interactive horizontal scrolling galleries with navigation arrows for property photos
- **Real-time Data**: Integration with UAE Real Estate 2 API (RapidAPI) for up-to-date Dubai property listings
- **Modern UI**: Built with Chakra UI for a clean and professional interface
- **Performance Optimized**: Next.js Image component with priority loading for LCP optimization
- **Server-Side Rendering**: Fast page loads with SSR and SSG capabilities

## 🛠️ Tech Stack

- **Framework**: [Next.js 13.1.6](https://nextjs.org/) - React framework with SSR and SSG
- **React**: [React 18.2.0](https://react.dev/) - Latest React with concurrent features
- **UI Library**: [Chakra UI 1.8.7](https://chakra-ui.com/) - Component library for React
- **Styling**: CSS Modules & Emotion
- **HTTP Client**: [Axios 0.26.1](https://axios-http.com/) - Promise-based HTTP client
- **Animations**: [Framer Motion 6.2.8](https://www.framer.com/motion/) - Production-ready animation library
- **Icons**: [React Icons 4.3.1](https://react-icons.github.io/react-icons/)
- **Image Optimization**: [Sharp 0.30.3](https://sharp.pixelplumbing.com/) - High-performance image processing
- **Progress Bar**: NProgress 0.2.0 - Loading indicator
- **Horizontal Scrolling**: react-horizontal-scrolling-menu 2.7.1 - Image gallery scroller
- **Number Formatting**: millify 4.0.0 - Human-readable number formatting

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

- Node.js 14.x or higher (16.x or 18.x recommended)
- npm or yarn package manager
- RapidAPI account with UAE Real Estate 2 API access

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
   Create a `.env.local` file in the root directory and add your RapidAPI key:
   ```env
   NEXT_PUBLIC_RAPIDAPI_KEY=your_rapidapi_key_here
   ```

   Get your API key from [RapidAPI UAE Real Estate 2](https://rapidapi.com/apidojo/api/uae-real-estate2/)

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
- Image optimization settings (Sharp image processor)
- External image domains (bayut-production.s3.eu-central-1.amazonaws.com)
- React Strict Mode enabled
- SWC minification for faster builds
- Build configurations

### API Configuration

The app uses the UAE Real Estate 2 API from RapidAPI:
- **Base URL**: `uae-real-estate2.p.rapidapi.com`
- **Main Endpoint**: POST `/properties_search`
- **Detail Endpoint**: GET `/property/{id}`
- **Location**: Dubai (location_ids: [2])

API calls are handled through `utils/fetchApi.js` with support for both GET and POST requests.

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
