import { FC } from 'react';

import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

/* Types */
import type { PhaseCheckboxListProps } from './phase-checkbox-list.types';

/* Styles */
import PhaseCheckboxListStyled from './phase-checkbox-list.styled';

export const PhaseCheckboxList: FC<PhaseCheckboxListProps> = ({ phase }) => {
  return (
    <PhaseCheckboxListStyled.GridContianer container spacing={2}>
      <Grid item xs={12} md={6}>
        <List dense>
          {phase.steps.map((step) => (
            <PhaseCheckboxListStyled.ListItemWrapper>
              <Checkbox
                edge="start"
                checked={step.completed}
                tabIndex={-1}
                disableRipple
              />
              <ListItemText primary={step.name} />
            </PhaseCheckboxListStyled.ListItemWrapper>
          ))}
        </List>
      </Grid>
    </PhaseCheckboxListStyled.GridContianer>
  );
};
