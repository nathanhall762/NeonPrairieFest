import LinkContainer from '../MusicianPage/LinkContainerPage';
import { type Musician } from './CardContainer';
import React, { useState, useEffect } from 'react';
// import TurntableArm from '/src/turntable-arm.webp';

interface MusicianCardProps {
  musician: Musician;
  isPending: boolean;
}

const MusicianCard: React.FC<MusicianCardProps> = ({ musician }) => {
  const { name, genre, profileImage } = musician;
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
    <a href={`${urlName}`}>
      <div
        className={`relative m-5 flex h-[450px] w-[270px] flex-col items-center justify-around overflow-hidden rounded-2xl bg-cover bg-center p-0 shadow-none transition-all duration-300 ease-in-out hover:cursor-pointer hover:border-none hover:shadow-lg`}
        style={{ backgroundImage: `url(${profileImage})` }}
      >
        <div className='absolute inset-0 z-0 bg-black bg-opacity-50 backdrop-blur-sm'></div>
        <h2 className='z-10 flex min-h-[72px] w-full items-center justify-center px-2.5 transition-all duration-500 ease-in-out'>
          {name}
        </h2>
        <div className='relative flex h-[250px] w-[250px] justify-center p-2.5'>
          <img
            src={profileImage}
            alt={name}
            loading='lazy'
            className='h-[250px] w-[250px] rounded-full object-cover shadow-md transition-transform duration-300 ease-in-out'
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: isHovered ? 'none' : 'all 1s',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
        <div className='pointer-events-none absolute right-[-18%] top-[22%] hidden h-[250px] w-[145px] -translate-x-1/2 transform lg:block'>
          <div
            className='h-full w-full bg-cover bg-left transition-transform duration-1000'
            style={{
              backgroundImage: `url(/turntable-arm.webp)`,
              transform: isHovered ? 'rotate(15deg)' : 'rotate(0deg)',
            }}
          ></div>
        </div>
        <p className='mt-2.5 px-2.5 transition-all duration-500 ease-in-out'>
          Genre: {genre.length !== 0 ? genre.join(', ') : 'NA'}
        </p>
        <LinkContainer musician={musician} />
      </div>
    </a>
  );
};

export default MusicianCard;
