# 🚀 Antigravity Backend

A clean, production-ready **Node.js + Express** backend built for **DevOps training**.

## 📁 Project Structure

```
antigravity-backend/
├── src/
│   ├── app.js                  # Express app setup
│   ├── server.js               # Server entry point
│   ├── routes/
│   │   └── api.routes.js       # Route definitions
│   ├── controllers/
│   │   └── api.controller.js   # Route handlers
│   └── middlewares/
│       └── error.middleware.js  # Centralized error handling
├── .env                        # Environment variables
├── .gitignore
├── package.json
└── README.md
```

## ⚡ Quick Start

```bash
# Install dependencies
npm install

# Start in development mode (with auto-reload)
npm run dev

# Start in production mode
npm start
```

## 🔗 API Endpoints

| Method | Endpoint            | Description                     |
| ------ | ------------------- | ------------------------------- |
| GET    | `/`                 | Root — confirms backend is live |
| GET    | `/health`           | Health check for monitoring     |
| GET    | `/api/antigravity`  | Sample API resource             |

## ⚙️ Environment Variables

| Variable   | Default       | Description           |
| ---------- | ------------- | --------------------- |
| `PORT`     | `5000`        | Server port           |
| `NODE_ENV` | `development` | Node environment mode |

### 📡 Live Server Status
[Live Demo](https://kevingeorge100.github.io/Backend-Docker-Sample/) (Static Frontend Only)

## Deployment to GitHub Pages

This project includes a static landing page in the `public/` directory. To deploy it to GitHub Pages:

```bash
npm run deploy
```

**Note:** GitHub Pages hosts static content only. The backend API endpoints (`/health`, `/api`) will not function on this static deployment. For full functionality, deploy to a service like Render, Railway, or AWS.

## 🐳 Docker Ready

This project is structured for easy containerization. Add a `Dockerfile` and you're good to go!
