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

A GitHub Actions workflow (`.github/workflows/firebase-deploy.yml`) automatically deploys the project to Firebase Hosting when changes are pushed to the `main` branch.

To enable deployments, create a service account in Firebase and add its JSON credentials to your repository's secrets as `FIREBASE_SERVICE_ACCOUNT`.

