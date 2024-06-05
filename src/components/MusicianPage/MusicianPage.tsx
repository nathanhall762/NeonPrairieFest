import EmbedSelector from './EmbedSelector';
import LinkContainer from './LinkContainerPage';
import { type Musician } from '../MusicianCard/CardContainer';

interface Props {
  musician: Musician;
}

const MusicianPage: React.FC<Props> = ({ musician }) => {
  // destructure matched musician object
  const { name, music, genre, profileImage, profileImageSmall } = musician;

  return (
    <>
      <div className="mt-8 lg:mt-0 flex w-screen justify-center h-[75vh] box-border">
        <div
          className="flex flex-col items-center text-center justify-center p-8 w-full sm:w-1/3 bg-cover bg-center relative"
        >
          <a href="/" aria-label="homepage">
            <button className="bg-accent text-primary border-none rounded-md p-2 text-lg font-semibold cursor-pointer transition-all mb-4 absolute top-16 left-4 hidden sm:flex hover:bg-background-alt">
              Go Back
            </button>
          </a>
          <img src={profileImageSmall} alt={name} loading="lazy" className="size-1/2 rounded-full object-cover shadow-md transition-transform duration-300 ease-in-out" />
          <h2 className="p-4 text-4xl">{name}</h2>
          <div className="w-full h-[20vh] sm:hidden">
            <EmbedSelector Music={music} />
          </div>
          <p className="px-2 my-2.5 text-2xl">Genre: {genre.length !== 0 ? genre.join(', ') : 'NA'}</p>
          <LinkContainer musician={musician} />
        </div>
        <div
          className="hidden sm:flex flex-col items-center justify-around w-full sm:w-2/3 box-shadow-inset p-8 bg-cover bg-center"
          style={{ backgroundImage: `url(${profileImage})` }}
        >
          <div className="w-full h-full p-2 box-border">
            <EmbedSelector Music={music} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicianPage;
