import { FC, useContext } from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';

/* Componenets */
import { PhaseCheckboxList } from 'components/molecules';

/* Context */
import { ProgressDataContext } from 'providers';

/* Styles */
import ProgressStatusStyled from './progress-status.styled';

export const ProgressStatus: FC = () => {
  const { progressData } = useContext(ProgressDataContext);

  return progressData && progressData.phases.length > 0 ? (
    <ProgressStatusStyled.ProgressStatusWrapper>
      <Typography variant="h5" paddingLeft="1rem">
        My startup progress
      </Typography>
      <List>
        {progressData.phases.map((phase, phaseIndex) => {
          return (
            <Box display="flex" flexDirection="column" key={phase.name}>
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
              </ListItem>
              <PhaseCheckboxList phase={phase} index={phaseIndex} />
            </Box>
          );
        })}
      </List>
    </ProgressStatusStyled.ProgressStatusWrapper>
  ) : (
    <Typography>No progress defined yet</Typography>
  );
};
