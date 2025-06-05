# Tracking App

This project contains a simple frontend and backend for order tracking.

## Local development

```bash
# Install dependencies for the backend
cd backend
npm install

# Start the backend server
npm start
```

The frontend files are located in the `frontend` directory and can be served with any static file server.

## Running Tests

The project includes a very small test suite that can be executed with:

```bash
npm test
```

Running this command will execute `test.js` in the project root.

## Continuous Deployment

GitHub Actions workflows handle Firebase Hosting deployments:

- `.github/workflows/deploy-preview.yml` creates a preview channel for every pull request and posts the URL in the PR.
- `.github/workflows/deploy-prod.yml` deploys the current state of `main` to the live channel.

Before these workflows can run successfully you must provide a Firebase service account key:

1. Run `firebase init hosting:github` in your local project and follow the prompts to generate a service account JSON file.
2. In your repository, navigate to **Settings → Secrets and variables → Actions** and add a new secret named `FIREBASE_SERVICE_ACCOUNT` containing the contents of that JSON file.

Without this secret the deploy steps will fail.

