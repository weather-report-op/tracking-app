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

To enable deployments, create a service account in Firebase and add its JSON credentials to your repository's secrets as `FIREBASE_SERVICE_ACCOUNT`.

