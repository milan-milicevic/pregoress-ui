import { cleanEnv, str } from 'envalid';

// Default values
const ENV = cleanEnv(process.env, {
  REACT_APP_PROGRESS_DATA_KEY: str({ default: 'progressData' }),
});

export default ENV;
