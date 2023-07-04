import styled from '@emotion/styled';
import DashboardLayout from '../../layout/DashboardLayout';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  return (
    <StyledPage>
      <DashboardLayout />
    </StyledPage>
  );
}

export default Index;
