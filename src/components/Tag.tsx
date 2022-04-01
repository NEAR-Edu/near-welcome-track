import { Center, CenterProps } from '@mantine/core';

import { ThemeColor } from '@lib/color-mapping';

interface Props {
  text: string;
  color?: ThemeColor;
}

const Tag: React.FC<Props & Omit<CenterProps<'div'>, 'children'>> = ({ text, color, className, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Center className={`${className} ${color} text-primary-white text-paragraph-1 rounded-full px-4 py-1 capitalize`} {...props}>
    <span>{text.toLowerCase()}</span>
  </Center>
);

Tag.defaultProps = {
  color: ThemeColor.gray,
};

export default Tag;
