import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { typography } from '@hetic-saline-royale-academy/kit-ui';

const VideoTitle = styled(Typography)`
  ${typography.md.semiBold};
  width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export default VideoTitle;
