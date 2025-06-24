function getEnv(key, fallback = undefined) {
  const value = import.meta.env[key];

  if (value === undefined && fallback === undefined) {
    console.warn(`Warning: Missing environment variable ${key}`);
  }

  return value ?? fallback;
}

const ENVAR = {
  API_URL: getEnv('VITE_API_URL'),
  MODE: getEnv('MODE', 'development'),
  DEBUG: getEnv('VITE_DEBUG', 'false') === 'true',
};

export default ENVAR;