import { FC, useEffect, useState, createContext } from 'react';

/* Types */
import type { ProgressDataContextType } from './progress-data.types';
import type { ProgressData } from 'common/types';

/* Constants */
import ENV from 'common/environment';

/* Services */
import { LocalStorageService } from 'services';

/* Hooks */
import { useProgressData } from 'hooks';

export const ProgressDataContext = createContext<ProgressDataContextType>({
  progressData: { phases: [] },
  setProgressData: () => {},
});

export const ProgressDataProvider: FC = ({ children }) => {
  const [progressData, setProgressData] = useState<ProgressData>();
  const { progressData: progressDataFetched, error } = useProgressData();

  useEffect(() => {
    if (progressDataFetched) {
      setProgressData(progressDataFetched);
    }
  }, [progressDataFetched]);

  useEffect(() => {
    if (progressData) {
      LocalStorageService.put(progressData, ENV.REACT_APP_PROGRESS_DATA_KEY);
    }
  }, [progressData]);

  useEffect(() => {
    if (error) {
      //TODO: should handle error
      console.error(error);
    }
  }, [error]);

  return (
    <ProgressDataContext.Provider value={{ progressData, setProgressData }}>
      {children}
    </ProgressDataContext.Provider>
  );
};
