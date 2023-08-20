import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { typography } from '@hetic-saline-royale-academy/kit-ui';

const VideoDescription = styled(Typography)`
  ${typography.sm.regular};
  display: -webkit-box;
  width: 200px;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
`;

export default VideoDescription;
