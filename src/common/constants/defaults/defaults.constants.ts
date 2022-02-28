import type { ProgressData } from 'common/types';

export const DEFAULT_PROGRESS_DATA: ProgressData = {
  phases: [
    {
      name: 'Foundation',
      steps: [
        {
          name: 'Setup virtual office',
          completed: true,
        },
        {
          name: 'Set mission & vision',
          completed: true,
        },
        {
          name: 'Slect business name',
          completed: true,
        },
        {
          name: 'Buy domains',
          completed: true,
        },
      ],
    },
    {
      name: 'Discovery',
      steps: [
        {
          name: 'Create roadmap',
          completed: true,
        },
        {
          name: 'Competitor analysis',
          completed: false,
        },
      ],
    },
    {
      name: 'Delivery',
      steps: [
        {
          name: 'Release marketing websites',
          completed: false,
        },
        {
          name: 'Release MVP',
          completed: false,
        },
      ],
    },
  ],
};
