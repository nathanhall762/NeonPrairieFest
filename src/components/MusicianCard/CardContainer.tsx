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
};

type CardContainerProps = {
  musicians: Musician[];
};

const CardContainer = ({ musicians }: CardContainerProps) => {

  console.log(musicians);

  return (
    <CardContainerDiv className='card-container'>
      {musicians.map((musician) => (
        <MusicianCard
          key={musician.name}
          musician={musician}
          isPending={false}
        />
      ))}
    </CardContainerDiv>
  );
};

const CardContainerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  padding: rem;
  text-align: center;
  width: 90%;
`;

export default CardContainer;
