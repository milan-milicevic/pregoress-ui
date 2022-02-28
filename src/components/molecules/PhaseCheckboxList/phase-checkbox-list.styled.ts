import { styled } from '@mui/material';

import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';

const ListItemWrapper = styled(ListItem)`
  width: 15rem;
`;

const GridContianer = styled(Grid)`
  padding-left: 0.5rem;
`;

const PhaseCheckboxListStyled = { ListItemWrapper, GridContianer };

export default PhaseCheckboxListStyled;
