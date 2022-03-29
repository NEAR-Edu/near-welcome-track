import { NextPage } from 'next';
import { Anchor, AnchorProps } from '@mantine/core';

const FooterLink: NextPage<AnchorProps<'a'>> = ({ children, className, ...props }) => {
  return (
    <Anchor
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      className={`
        ${className}
        transition
        ease-out
        duration-75
      text-gray-400
        hover:no-underline
      hover:text-gray-600
      `}
    >
      {children}
    </Anchor>
  );
};

export default FooterLink;
