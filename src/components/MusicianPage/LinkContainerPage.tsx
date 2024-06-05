import LinkItem from './LinkItemPage';
import { type Musician } from '../MusicianCard/CardContainer';

interface MusicianCardProps {
  musician: Musician;
}

const LinkContainer: React.FC<MusicianCardProps> = ({ musician }) => {
  const {
    music: { bandcamp, spotify, youtube, soundcloud, twitch },
    social: { facebook, instagram, tiktok, threads },
  } = musician;

  function extractBandcampURL(iframeString: string): string | null {
    const match = iframeString.match(
      /href="(https:\/\/.*?\.bandcamp\.com)\/.*?"/
    );
    return match ? match[1] : null;
  }
  if (!bandcamp) return null;
  const bandcampURL = extractBandcampURL(bandcamp);

  function extractSoundcloudProfileURL(embedCode: string): string | null {
    const match = embedCode.match(
      /<a href="(https:\/\/soundcloud\.com\/[^"]+)"/
    );
    return match ? match[1] : null;
  }

  const soundcloudProfileURL = extractSoundcloudProfileURL(soundcloud);
  return (
    <div className='relative z-10 flex w-full flex-wrap justify-center p-0 sm:p-10'>
      hello
      <LinkItem
        url={bandcampURL}
        iconClassName='fa fa-bandcamp'
        styleClassName='bandcamp'
      />
      <LinkItem
        url={spotify}
        iconClassName='fa fa-spotify'
        styleClassName='spotify'
      />
      <LinkItem
        url={youtube}
        iconClassName='fa fa-youtube'
        styleClassName='youtube'
      />
      <LinkItem
        url={soundcloudProfileURL}
        iconClassName='fa fa-soundcloud'
        styleClassName='soundcloud'
      />
      <LinkItem
        url={facebook}
        iconClassName='fa fa-facebook'
        styleClassName='facebook'
      />
      <LinkItem
        url={instagram}
        iconClassName='fa fa-instagram'
        styleClassName='instagram'
      />
      <LinkItem
        url={tiktok}
        iconClassName='fa-brands fa-tiktok'
        styleClassName='tiktok'
      />
      <LinkItem
        url={threads}
        iconClassName='fa-brands fa-threads'
        styleClassName='threads'
      />
      <LinkItem
        url={twitch}
        iconClassName='fa fa-twitch'
        styleClassName='twitch'
      />
    </div>
  );
};

export default LinkContainer;
