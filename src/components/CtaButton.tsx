import React from 'react';

const CtaButton: React.FC<{ outline?: boolean } & React.HTMLProps<HTMLButtonElement>> = ({ outline, className, children, ...props }) => (
  <button
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
      duration-75
      ${outline ? 'text-gray-800 hover:bg-slate-100' : 'text-white bg-gray-800 hover:bg-slate-700'}
    `}
  >
    {children}
  </button>
);

CtaButton.defaultProps = {
  outline: false,
};

export default CtaButton;
