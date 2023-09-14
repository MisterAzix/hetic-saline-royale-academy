import { Text } from '@hetic-saline-royale-academy/kit-ui';
import { NextRouter, useRouter } from 'next/router';
import { IChapter } from '../../types';
import ChapterItem from '../Atoms/ChapterItem';
import ChapterList from '../Atoms/ChapterList';
import Description from '../Atoms/Description';
import ImageCard from '../Atoms/ImageCard';

const Chapters = ({ chapters }: { chapters: IChapter[] }) => {
  const router: NextRouter = useRouter();

  const handleCardClick = async (id: string | null) => {
    await router.push(`/masterclass/${id}`);
  };

  return (
    <>
      <Text preset="text-xl-semibold" color="gray-900">
        Liste de masterclasses
      </Text>
      <ChapterList>
        {chapters?.map((chapter: IChapter, index: number) => (
          <ChapterItem
            key={index}
            onClick={() => handleCardClick(chapter?.masterclass_id)}
          >
            <ImageCard
              src={
                chapter?.masterclass?.cover_url ?? '/images/default_cover.png'
              }
              alt={chapter?.masterclass?.title}
              width={100}
              height={100}
            />
            <div>
              <Text preset="text-lg-semibold" color="gray-900">
                {chapter?.title}
              </Text>
              <Text preset="text-sm-regular" color="gray-500">
                {chapter?.timecode}
              </Text>
              <Description>{chapter?.masterclass?.description}</Description>
            </div>
          </ChapterItem>
        ))}
      </ChapterList>
    </>
  );
};

export default Chapters;
