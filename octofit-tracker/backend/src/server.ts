const PORT = 8000;
const CODESPACE_NAME = process.env.CODESPACE_NAME;

const API_HOST = CODESPACE_NAME
  ? `https://${CODESPACE_NAME}-8000.app.github.dev`
  : `http://localhost:${PORT}`;

const API_URL = `${API_HOST}/api`;
const CODESPACE_URL = CODESPACE_NAME ? `https://${CODESPACE_NAME}-8000.app.github.dev` : null;

export { PORT, CODESPACE_NAME, API_HOST, API_URL, CODESPACE_URL };
