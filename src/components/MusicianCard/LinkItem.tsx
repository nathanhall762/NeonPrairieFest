interface LinkItemProps {
  url: string | null;
  iconClassName: string;
  styleClassName: string;
}

const LinkItem: React.FC<LinkItemProps> = ({
  url,
  iconClassName,
  styleClassName,
}) => {
  if (!url) return null;

  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='flex h-12 w-12 items-center justify-center text-xl transition-all duration-300 ease-in-out hover:scale-150'
      style={{ color: `var(--${styleClassName}-color)` }}
      aria-label={styleClassName}
    >
      <i className={iconClassName} aria-hidden='true'></i>
    </a>
  );
};

export default LinkItem;
