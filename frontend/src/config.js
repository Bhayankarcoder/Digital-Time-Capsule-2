const config = {
  API_BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
  MAX_FILE_SIZE: 5242880, // 5MB in bytes
  SUPPORTED_FILE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'],
  withCredentials: true // Enable credentials for cross-origin requests
};

export default config;
