import { UnstyledButton, UnstyledButtonProps } from '@mantine/core';

export interface ReactionButtonProps {
  component: React.ElementType;
  isActive?: boolean;
  activeClass?: string;
  inactiveClass?: string;
}

const ReactionButton: React.FC<ReactionButtonProps & UnstyledButtonProps> = ({ component: Component, isActive, activeClass, inactiveClass, className, ...props }) => (
  <UnstyledButton
    className={`
      w-5
      h-5
      transition
      duration-75
      ${isActive ? activeClass : inactiveClass}
      ${className}
    `}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    <Component />
  </UnstyledButton>
);

ReactionButton.defaultProps = {
  isActive: false,
  activeClass: 'text-gray-300 hover:text-gray-400',
  inactiveClass: 'text-gray-300 hover:text-gray-400',
};

export default ReactionButton;
