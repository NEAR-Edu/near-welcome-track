import { Center } from '@mantine/core';

import { ThemeColor } from '@lib/color-mapping';

interface Props {
  text: string;
  color?: ThemeColor;
}

const Tag: React.FC<Props> = ({ text, color }) => (
  <Center className={`${color} text-primary-white text-paragraph-1 rounded-full px-4 py-1`}>
    <span>{text}</span>
  </Center>
);

Tag.defaultProps = {
  color: ThemeColor.gray,
};

export default Tag;
