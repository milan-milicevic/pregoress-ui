import { Dispatch, SetStateAction } from 'react';
import { ProgressData } from 'common/types';

export type ProgressDataContextType = {
  progressData: ProgressData | undefined;
  setProgressData: Dispatch<SetStateAction<ProgressData | undefined>>;
};
