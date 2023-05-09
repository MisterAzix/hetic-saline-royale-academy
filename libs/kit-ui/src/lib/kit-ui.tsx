import styled from 'styled-components';

/* eslint-disable-next-line */
export interface KitUiProps {}

const StyledKitUi = styled.div`
  color: pink;
`;

export function KitUi(props: KitUiProps) {
  return (
    <StyledKitUi>
      <h1>Welcome to KitUi!</h1>
    </StyledKitUi>
  );
}

export default KitUi;
