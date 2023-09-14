import styled from '@emotion/styled';
import { Stack } from '@mui/material';

const CardContainer = styled(Stack)`
  gap: 1.5rem;
  padding: 40px 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export default CardContainer;
