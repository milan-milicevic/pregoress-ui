import { FC } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';

/* Componenets */
import { PhaseCheckboxList } from 'components/molecules';

/* Types */
import type { ProgressStatusProps } from './progress-status.types';

/* Styles */
import ProgressStatusStyled from './progress-status.styled';

export const ProgressStatus: FC<ProgressStatusProps> = ({ progress }) => {
  return progress && progress.phases.length > 0 ? (
    <ProgressStatusStyled.ProgressStatusWrapper>
      <Typography variant="h5" paddingLeft="1rem">
        My startup progress
      </Typography>
      <List>
        {progress.phases.map((phase, phaseIndex) => {
          return (
            <ListItem key={phaseIndex}>
              <ListItemAvatar>
                <ProgressStatusStyled.AvatarStyled>
                  {phaseIndex}
                </ProgressStatusStyled.AvatarStyled>
              </ListItemAvatar>
              <ProgressStatusStyled.CheckedTitileWrapper>
                <ListItemText primary={phase.name} />
                {phase.steps.every((step) => step.completed) ? (
                  <CheckIcon fontSize="large" />
                ) : null}
              </ProgressStatusStyled.CheckedTitileWrapper>
              <PhaseCheckboxList phase={phase} />
            </ListItem>
          );
        })}
      </List>
    </ProgressStatusStyled.ProgressStatusWrapper>
  ) : (
    <Typography>No progress defined yet</Typography>
  );
};
