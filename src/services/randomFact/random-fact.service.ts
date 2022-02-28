/* Types */
import type { RandomFact } from 'common/types';

/* Constants */
import ENV from 'common/environment';

export class RandomFactService {
  public static async getRandomFact(): Promise<RandomFact> {
    const response = await fetch(ENV.REACT_APP_RANDOM_FACT_API_URL);
    const data = await response.json();
    return data as RandomFact;
  }
}
