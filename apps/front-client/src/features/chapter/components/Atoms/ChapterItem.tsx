import styled from '@emotion/styled';

const ChapterItem = styled.div`
  display: flex;
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e5e5e5;
  }
`;

export default ChapterItem;
