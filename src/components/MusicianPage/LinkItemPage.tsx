import React, { type AnchorHTMLAttributes, type ReactNode } from 'react';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

const Link = ({ children, ...props }: LinkProps) => (
  <a
    {...props}
    className="flex justify-center items-center w-10 h-10 text-2xl transition-all duration-300 ease-in-out hover:scale-150"
  >
    {children}
  </a>
);

const BandcampLink = ({ children, ...props }: LinkProps) => (
  <a
    {...props}
    className="hover:text-bandcamp-color"
  >
    {children}
  </a>
);

const SoundcloudLink = ({ children, ...props }: LinkProps) => (
  <a
    {...props}
    className="hover:text-soundcloud-color"
  >
    {children}
  </a>
);

// Other styled links follow the same pattern...

const linkIconMap = {
  bandcamp: BandcampLink,
  soundcloud: SoundcloudLink,
  // Other styled links...
};

type LinkStyleClassNames = keyof typeof linkIconMap;

interface LinkItemProps {
  url: string | null;
  iconClassName: string;
  styleClassName: LinkStyleClassNames;
}

const LinkItem: React.FC<LinkItemProps> = ({
  url,
  iconClassName,
  styleClassName,
}) => {
  if (!url) return null;

  const LinkIcon = linkIconMap[styleClassName] || Link;

  return (
    <LinkIcon
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={styleClassName}
    >
      <i className={iconClassName} aria-hidden='true'></i>
    </LinkIcon>
  );
};

export default LinkItem;
