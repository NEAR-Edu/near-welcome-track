import { UrlObject } from 'url';

import Link from 'next/link';
import React from 'react';

type Url = string | UrlObject;

const CtaButton: React.FC<{ outline?: boolean; url: Url } & React.HTMLProps<HTMLAnchorElement>> = ({ outline, url, className, children, ...props }) => (
  <Link href={url}>
    <a
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      type="button"
      className={`
        ${className}
        px-8
        py-4
        border
        border-gray-800
        text-xl
        font-bold
        rounded-full
        transition
        duration-100
        block
        text-center
        hover:bg-primary-black
        active:bg-primary-black
        ${outline ? 'text-primary-black hover:text-primary-white' : 'text-primary-white bg-primary-gray-6'}
      `}
    >
      {children}
    </a>
  </Link>
);

CtaButton.defaultProps = {
  outline: false,
};

export default CtaButton;
