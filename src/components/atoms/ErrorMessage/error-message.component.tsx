import { memo } from 'react';
import { Typography } from '@mui/material';

/* Types */
import { ErrorMessageProps } from './error-message.types';

export const ErrorMessage = memo<ErrorMessageProps>(({ message }) => {
  return (
    <Typography variant="h1" color="red">
      {message ?? 'There was an unknow error.'}
    </Typography>
  );
});
