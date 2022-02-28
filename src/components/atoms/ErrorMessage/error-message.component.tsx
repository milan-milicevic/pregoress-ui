import { FC } from 'react';
import { Typography } from '@mui/material';

/* Types */
import { ErrorMessageProps } from './error-message.types';

export const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => {
  return (
    <Typography variant="h1" color="red">
      {error.message ?? 'There was an unknow error.'}
    </Typography>
  );
};
