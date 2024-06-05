import { Icon } from '@iconify-icon/react/dist/iconify.js';

interface LinkItemProps {
  url: string | null;
  icon: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ url, icon }) => {
  if (!url) return null;

  return (
    <a href={url} target='_blank' rel='noopener noreferrer'>
      <Icon icon={icon} />
    </a>
  );
};

export default LinkItem;
