import styled from '@emotion/styled';
import { Button } from '@mui/base';

const SubscribeButton = styled(Button)`
  position: absolute;
  bottom: 10px;
  left: 10px;
  padding: 8px 16px;
  background-color: ${(props) => (props.hasUserId ? '#00cc00' : '#007bff')};
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => (props.hasUserId ? '#00aa00' : '#0056b3')};
  }
`;

export default SubscribeButton;
