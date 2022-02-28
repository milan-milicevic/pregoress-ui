import { useEffect, useState } from 'react';

/* Types */
import type { ProgressData } from 'common/types';

/* Constants */
import { DEFAULT_PROGRESS_DATA } from 'common/constants';
import ENV from 'common/environment';

/* Services */
import { LocalStorageService } from 'services';

export const useProgressData = () => {
  const [progressData, setProgressData] = useState<ProgressData | null>(null);
  const [fetchingError, setFetchingError] = useState<string>();

  useEffect(() => {
    try {
      const value = LocalStorageService.get(ENV.REACT_APP_PROGRESS_DATA_KEY) as
        | ProgressData
        | undefined;
      if (value) {
        setProgressData(value);
      } else {
        LocalStorageService.put(
          DEFAULT_PROGRESS_DATA,
          ENV.REACT_APP_PROGRESS_DATA_KEY
        );
      }
    } catch (error) {
      //Handle specific error
      setFetchingError(error as string);
    }
  }, []);

  return { progressData, error: fetchingError } as const;
};
