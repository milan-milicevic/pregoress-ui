import styled from 'styled-components';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

const CheckedTitileWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const AvatarStyled = styled(Avatar)`
  background-color: black;
`;

const ProgressStatusWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ProgressStatusStyled = {
  AvatarStyled,
  CheckedTitileWrapper,
  ProgressStatusWrapper,
};

export default ProgressStatusStyled;
