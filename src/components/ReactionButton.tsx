import { UnstyledButton, UnstyledButtonProps } from '@mantine/core';
import { nanoid } from 'nanoid/non-secure';
import { useState } from 'react';

export interface ReactionButtonProps {
  component: React.ElementType;
  label?: string;
  isActive?: boolean;
  activeClass?: string;
  inactiveClass?: string;
}

const ReactionButton: React.FC<ReactionButtonProps & UnstyledButtonProps> = ({ component: Component, isActive, activeClass, inactiveClass, label, className, ...props }) => {
  const [controlId] = useState(() => nanoid());

  return (
    <UnstyledButton
      id={controlId}
      className={`
        transition
        duration-75
        whitespace-nowrap
        flex
        items-center
        p-1
        gap-2
        cursor-pointer
        ${isActive ? activeClass : inactiveClass}
        ${className}
      `}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <Component className="w-5 h-5" />
      {label && (
        <label htmlFor={controlId} className="text-sm font-semibold cursor-pointer">
          {label}
        </label>
      )}
    </UnstyledButton>
  );
};

ReactionButton.defaultProps = {
  isActive: false,
  activeClass: 'text-gray-400 hover:text-gray-500',
  inactiveClass: 'text-gray-400 hover:text-gray-500',
};

export default ReactionButton;
