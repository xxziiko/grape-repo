import { Avatar } from '@radix-ui/themes';
import { PersonIcon } from '@radix-ui/react-icons';

const AvatarIcon = ({ width, height }: { width: number; height: number }) => {
  return (
    <Avatar
      loading="lazy"
      color="gray"
      radius="full"
      fallback={<PersonIcon width={width} height={height} color="gray" />}
    />
  );
};

export default AvatarIcon;
