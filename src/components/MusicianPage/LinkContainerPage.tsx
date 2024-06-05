import LinkItem from './LinkItemPage';
import { type Musician } from '../MusicianCard/CardContainer';

interface MusicianCardProps {
  musician: Musician;
}

const LinkContainer: React.FC<MusicianCardProps> = ({ musician }) => {
  console.log('in the link container');
  const {
    music: { bandcamp, spotify, youtube, soundcloud, twitch },
    social: { facebook, instagram, tiktok, threads },
  } = musician;

  console.log(musician);

  return (
    <div className='relative z-20 flex w-full flex-wrap justify-center gap-2  p-0 text-2xl text-white'>
      <LinkItem url={spotify} icon='mdi:spotify' />
      <LinkItem url={youtube} icon='mdi:youtube' />
      <LinkItem url={soundcloud} icon='mdi:soundcloud' />
      <LinkItem url={facebook} icon='mdi:facebook' />
      <LinkItem url={instagram} icon='mdi:instagram' />
      <LinkItem url={tiktok} icon='ic:baseline-tiktok' />
    </div>
  );
};

export default LinkContainer;
