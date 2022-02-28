import { useCallback, useState } from 'react';

/* Types */
import type { RandomFact } from 'common/types';

/* Services */
import { RandomFactService } from 'services';

export const useRandomFact = () => {
  const [data, setData] = useState<RandomFact>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const getRandomFact = useCallback(async () => {
    try {
      setLoading(true);
      const randomFactData = await RandomFactService.getRandomFact();
      setData(randomFactData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      //Handle specific error
      setError(error as string);
    }
  }, []);

  return { getRandomFact, data, loading, error } as const;
};
