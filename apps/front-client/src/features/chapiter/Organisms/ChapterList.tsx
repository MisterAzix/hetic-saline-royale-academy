import styled from '@emotion/styled';
import { Text } from '@hetic-saline-royale-academy/kit-ui';
import { Stack } from '@mui/material';
import { Chapter } from '@prisma/client';
import { NextRouter, useRouter } from 'next/router';

const ChapterList = styled(Stack)`
  gap: 1rem;
  padding: 20px;
  font-size: 1.2rem;
`;

const ChapterItem = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e5e5e5;
  }
`;

interface ChapitersI {
  chapiters: Chapter[];
}

const Chapiters = ({ chapiters }: ChapitersI) => {
  const router: NextRouter = useRouter();

  const handleCardClick = async (id: string | null) => {
    await router.push(`/masterclass/${id}`);
  };

  return (
    <>
      <Text preset="text-xl-semibold" color="gray-900">
        Liste de master classe
      </Text>
      <ChapterList>
        {chapiters?.map((chapter: Chapter, index: number) => (
          <ChapterItem
            key={index}
            onClick={() => handleCardClick(chapter?.masterclass_id)}
          >
            <Text preset="text-lg-semibold" color="gray-900">
              {chapter?.title}
            </Text>
            <Text preset="text-sm-regular" color="gray-500">
              {chapter?.timecode}
            </Text>
          </ChapterItem>
        ))}
      </ChapterList>
    </>
  );
};

export default Chapiters;
