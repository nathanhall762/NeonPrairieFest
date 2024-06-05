import styled from 'styled-components';
import MusicianCard from './MusicianCard';

export type Musician = {
  id: string;
  name: string;
  music: {
    bandcamp: string;
    spotify: string;
    youtube: string;
    soundcloud: string;
    twitch: string;
  };
  social: {
    facebook: string;
    instagram: string;
    tiktok: string;
    threads: string;
  };
  genre: string[];
  profileImage: string;
  profileImageSmall: string;
};

type CardContainerProps = {
  musicians: Musician[];
};

const CardContainer = ({ musicians }: CardContainerProps) => {
  console.log(musicians);

  return (
    <div className='flex flex-wrap justify-center mx-auto p-4 text-center w-11/12'>
      {musicians.map((musician) => (
        <MusicianCard
          key={musician.name}
          musician={musician}
          isPending={false}
        />
      ))}
    </div>
  );
};

export default CardContainer;
