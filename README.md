# 🚀 Vue Job Portal

A modern, responsive job portal application built with Vue.js 3 and Vite. This application allows users to browse job listings, view detailed job information, add new jobs, and manage existing job postings.

![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Features

- 🏠 **Home Dashboard** - Welcome page with featured job listings
- 💼 **Job Listings** - Browse all available job postings
- 🔍 **Job Details** - View comprehensive job information
- ➕ **Add Jobs** - Create new job postings
- ✏️ **Edit Jobs** - Modify existing job listings
- 📱 **Responsive Design** - Optimized for all device sizes
- 🎨 **Modern UI** - Clean and intuitive user interface with Tailwind CSS
- 🌐 **SPA Navigation** - Smooth single-page application experience
- 📊 **JSON Server** - Local backend for development

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      Vue Job Portal                        │
└─────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────┐
│                    Frontend (Vue.js 3)                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │   Router    │  │   Views     │  │     Components      │ │
│  │             │  │             │  │                     │ │
│  │ • Home      │  │ • HomeView  │  │ • NavBar           │ │
│  │ • Jobs      │  │ • JobView   │  │ • HeroTab          │ │
│  │ • Single    │  │ • SingleJob │  │ • JobListing       │ │
│  │ • Add       │  │ • AddJob    │  │ • SingleCard       │ │
│  │ • Edit      │  │ • EditJob   │  │ • HomeCards        │ │
│  │ • 404       │  │ • NotFound  │  │ • BackButton       │ │
│  └─────────────┘  └─────────────┘  └─────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                                │
                                ▼ HTTP/Axios
┌─────────────────────────────────────────────────────────────┐
│                  Backend (JSON Server)                     │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                jobs.json                            │   │
│  │  • Job Data Storage                                 │   │
│  │  • CRUD Operations                                  │   │
│  │  • REST API Endpoints                              │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## 🛠️ Tech Stack

### Frontend
- **Vue.js 3** - Progressive JavaScript framework
- **Vue Router 4** - Official router for Vue.js
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - Promise-based HTTP client
- **Vue Toastification** - Toast notifications
- **Vue Spinner** - Loading spinners
- **PrimeIcons** - Icon library

### Development Tools
- **JSON Server** - Full fake REST API
- **ESLint** - JavaScript linting utility
- **Prettier** - Code formatter
- **PostCSS** - CSS post-processor
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
Vue-Job-Portal-with-VueJS/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── img/
│   │   │   └── logo.png
│   │   ├── base.css
│   │   ├── logo.svg
│   │   └── main.css
│   ├── components/
│   │   ├── icons/
│   │   │   ├── IconCommunity.vue
│   │   │   ├── IconDocumentation.vue
│   │   │   ├── IconEcosystem.vue
│   │   │   ├── IconSupport.vue
│   │   │   └── IconTooling.vue
│   │   ├── BackButton.vue
│   │   ├── HeroTab.vue
│   │   ├── HomeCards.vue
│   │   ├── JobListing.vue
│   │   ├── NavBar.vue
│   │   ├── SingleCard.vue
│   │   └── SingleJob.vue
│   ├── router/
│   │   └── index.js
│   ├── views/
│   │   ├── AddJobView.vue
│   │   ├── EditJobView.vue
│   │   ├── HomeView.vue
│   │   ├── JobView.vue
│   │   ├── NotFoundView.vue
│   │   └── SingleJobView.vue
│   ├── App.vue
│   ├── constants.js
│   ├── jobs.json
│   └── main.js
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/masudursourav/Vue-Job-Portal-with-VueJS.git
   cd Vue-Job-Portal-with-VueJS
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the JSON server** (in a separate terminal)
   ```bash
   npm run server
   ```
   The JSON server will run on `http://localhost:3001`

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run server` - Start JSON server on port 3001
- `npm run lint` - Lint and fix JavaScript/Vue files
- `npm run format` - Format code with Prettier

## 🌐 API Endpoints

The JSON server provides the following REST API endpoints:

- `GET /jobs` - Get all jobs
- `GET /jobs/:id` - Get a specific job
- `POST /jobs` - Create a new job
- `PUT /jobs/:id` - Update a job
- `DELETE /jobs/:id` - Delete a job

## 📱 Pages and Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | HomeView | Landing page with featured jobs |
| `/jobs` | JobView | All job listings page |
| `/jobs/:id` | SingleJobView | Individual job details |
| `/jobs/edit/:id` | EditJobView | Edit existing job |
| `/add-job` | AddJobView | Create new job posting |
| `/*` | NotFoundView | 404 error page |

## 🎨 UI Components

### Core Components
- **NavBar** - Main navigation with responsive design
- **HeroTab** - Hero section with call-to-action
- **HomeCards** - Feature cards for developers and employers
- **JobListing** - Displays job cards with pagination
- **SingleCard** - Individual job card component
- **SingleJob** - Detailed job view component
- **BackButton** - Navigation helper component

### Icon Components
- Various Vue icon components for enhanced UI

## 📊 Data Structure

Jobs are stored with the following structure:

```json
{
  "id": "string",
  "title": "string",
  "type": "Full-Time | Part-Time | Contract",
  "description": "string",
  "location": "string",
  "salary": "string",
  "company": {
    "name": "string",
    "description": "string",
    "contactEmail": "string",
    "contactPhone": "string"
  }
}
```

## 🛠️ Development Guidelines

### Recommended IDE Setup
- [VS Code](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (disable Vetur)

### Code Style
- ESLint configuration with Vue 3 rules
- Prettier for consistent formatting
- Follow Vue 3 Composition API patterns

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- [Vue.js Documentation](https://vuejs.org/)
- [Vite Documentation](https://vite.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Vue Router Documentation](https://router.vuejs.org/)

## 📞 Support

If you have any questions or need help with setup, please open an issue on GitHub.

---

Made with ❤️ using Vue.js 3


