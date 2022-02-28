import { memo, useCallback, ChangeEvent } from 'react';

import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

/* Types */
import type { ProgressCheckboxProps } from './progress-checkbox.types';

export const ProgressCheckbox = memo<ProgressCheckboxProps>(
  ({ checked, text, checkboxKey, onChange }) => {
    const changeEventHandler = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked, checkboxKey);
      },
      [checkboxKey, onChange]
    );

    return (
      <>
        <Checkbox
          edge="start"
          checked={checked}
          tabIndex={-1}
          disableRipple
          onChange={changeEventHandler}
        />
        <ListItemText primary={text} />
      </>
    );
  }
);
