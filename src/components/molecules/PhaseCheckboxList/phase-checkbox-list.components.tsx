import { FC, useCallback, useContext } from 'react';
import { cloneDeep } from 'lodash';

import Grid from '@mui/material/Grid';
import List from '@mui/material/List';

/* Components */
import { ProgressCheckbox } from 'components/atoms';

/* Types */
import type { PhaseCheckboxListProps } from './phase-checkbox-list.types';
import type { ProgressData } from 'common/types';

/* Context */
import { ProgressDataContext } from 'providers';

/* Styles */
import PhaseCheckboxListStyled from './phase-checkbox-list.styled';

export const PhaseCheckboxList: FC<PhaseCheckboxListProps> = ({
  phase,
  index,
}) => {
  const { progressData, setProgressData } = useContext(ProgressDataContext);

  const setCopiedProgressData = useCallback(
    (
      progressDataCopied: ProgressData,
      stepIndex: number,
      newCompletedValue: boolean
    ) => {
      progressDataCopied.phases[index].steps[stepIndex].completed =
        newCompletedValue;
      setProgressData(progressDataCopied);
    },
    [index, setProgressData]
  );

  const changeHandler = useCallback(
    (value: boolean, key: string) => {
      if (progressData) {
        const progressDataCopy = cloneDeep(progressData);
        const foundIndex = progressDataCopy.phases[index].steps.findIndex(
          (copiedPhase) => copiedPhase.name === key
        );
        if (index > 0) {
          const previousPhase = progressDataCopy.phases[index - 1];
          if (!previousPhase.steps[previousPhase.steps.length - 1].completed) {
            return;
          }
        } else {
          const nextPhase = progressDataCopy.phases[index + 1];
          if (!nextPhase || nextPhase.steps[0].completed) {
            return;
          }
        }
        if (foundIndex !== -1) {
          const previousStep =
            progressDataCopy.phases[index].steps[foundIndex - 1];
          const nextStep = progressDataCopy.phases[index].steps[foundIndex + 1];
          if (foundIndex === 0 && !nextStep.completed) {
            setCopiedProgressData(progressDataCopy, foundIndex, value);
          } else {
            if (previousStep?.completed && !nextStep?.completed) {
              setCopiedProgressData(progressDataCopy, foundIndex, value);
            }
          }
        }
      }
    },
    [index, progressData, setCopiedProgressData]
  );

  return (
    <PhaseCheckboxListStyled.GridContianer container spacing={2}>
      <Grid item xs={12} md={6}>
        <List dense>
          {phase.steps.map((step) => (
            <PhaseCheckboxListStyled.ListItemWrapper key={step.name}>
              <ProgressCheckbox
                checkboxKey={step.name}
                checked={step.completed}
                onChange={changeHandler}
                text={step.name}
              />
            </PhaseCheckboxListStyled.ListItemWrapper>
          ))}
        </List>
      </Grid>
    </PhaseCheckboxListStyled.GridContianer>
  );
};
