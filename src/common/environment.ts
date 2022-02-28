import { cleanEnv, str } from 'envalid';

// Default values
const ENV = cleanEnv(process.env, {
  REACT_APP_PROGRESS_DATA_KEY: str({ default: 'progressData' }),
  REACT_APP_RANDOM_FACT_API_URL: str({
    default: 'https://uselessfacts.jsph.pl/random.json',
  }),
});

export default ENV;
