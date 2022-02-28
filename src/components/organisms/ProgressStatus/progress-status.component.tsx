import { FC, useContext, useEffect, useMemo } from 'react';

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
import { useRandomFact } from 'hooks';

export const ProgressStatus: FC = () => {
  const { progressData } = useContext(ProgressDataContext);
  const {
    data: randomFactData,
    loading: randomFactDataLoading,
    error: randomFactDataError,
    getRandomFact,
  } = useRandomFact();

  const allProgresCompleted = useMemo(() => {
    if (progressData) {
      const lastProgressPhase =
        progressData.phases[progressData.phases.length - 1];
      const lastStepOfProgress =
        lastProgressPhase.steps[lastProgressPhase.steps.length - 1];
      return lastStepOfProgress.completed;
    }
    return false;
  }, [progressData]);

  useEffect(() => {
    if (allProgresCompleted) {
      getRandomFact();
    }
  }, [allProgresCompleted, getRandomFact]);

  useEffect(() => {
    // handle error
    if (randomFactDataError) {
      console.error(randomFactDataError);
    }
  }, [randomFactDataError]);

  return progressData && progressData.phases.length > 0 ? (
    allProgresCompleted && !randomFactDataLoading && randomFactData ? (
      <Typography variant="h3">{randomFactData.text}</Typography>
    ) : (
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
    )
  ) : (
    <Typography>No progress defined yet</Typography>
  );
};
