import LinkContainer from '../MusicianPage/LinkContainerPage';
import { type Musician } from './CardContainer';
import React, { useState, useEffect } from 'react';
// import TurntableArm from '/src/turntable-arm.webp';

interface MusicianCardProps {
  musician: Musician;
  isPending: boolean;
}

const MusicianCard: React.FC<MusicianCardProps> = ({ musician }) => {
  const { name, genre, profileImage, profileImageSmall } = musician;
  console.log(musician);

  const urlName = '/' + name.replaceAll(' ', '_').toLowerCase();

  // stuff for animating the image
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let animationFrameId: any;

    if (isHovered) {
      const startTime = performance.now();

      const animate = (currentTime: any) => {
        const elapsed = currentTime - startTime;
        setRotation((elapsed / 5000) * 360); // 5000ms is the duration of one rotation
        animationFrameId = requestAnimationFrame(animate);
      };

      animate(performance.now());
    } else {
      cancelAnimationFrame(animationFrameId);
      setRotation(0); // Reset rotation to 0 when hover state is removed
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);

  return (
    <a href={`${urlName}`} className='group'>
      <div
        className={`relative m-5 flex h-[450px] w-[270px] flex-col items-center justify-around overflow-hidden rounded-2xl bg-cover bg-center p-0 shadow-none transition-all duration-300 ease-in-out hover:cursor-pointer hover:border-none hover:shadow-lg hover:text-shadow-xl hover:scale-105`}
        style={{ backgroundImage: `url(${profileImageSmall})` }}
      >
        <div className='absolute inset-0 z-0 bg-[#ff00ff] bg-opacity-30 backdrop-brightness-[.25] group-hover:backdrop-brightness-75 backdrop-blur-sm transition-all duration-md ease-in-out'></div>
        <h2 className='z-20 flex min-h-[72px] w-full items-center justify-center px-2.5 text-2xl transition-all duration-500 ease-in-out'>
          {name}
        </h2>
        <div className='relative flex h-[250px] w-[250px] justify-center p-2.5'>
          <img
            src={profileImageSmall}
            alt={name}
            loading='lazy'
            className='z-10 h-[250px] w-[250px] rounded-full object-cover shadow-md transition-transform duration-300 ease-in-out'
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: isHovered ? 'none' : 'all 1s',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
        <div className='pointer-events-none absolute right-[-25%] top-[22%] z-20 hidden h-[250px] w-[145px] -translate-x-1/2 transform lg:block'>
          <div
            className='h-full w-full bg-cover bg-left transition-transform duration-1000'
            style={{
              backgroundImage: `url(/turntable-arm.webp)`,
              transform: isHovered ? 'rotate(15deg)' : 'rotate(0deg)',
            }}
          ></div>
        </div>
        <div className='relative z-50 flex flex-col gap-4 pt-6'>
          <p className='px-2.5 text-lg transition-all duration-500 ease-in-out'>
            Genre: {genre.length !== 0 ? genre.join(', ') : 'NA'}
          </p>
          <LinkContainer musician={musician} />
        </div>
      </div>
    </a>
  );
};

export default MusicianCard;
