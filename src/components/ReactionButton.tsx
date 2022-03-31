import { UnstyledButton, UnstyledButtonProps } from '@mantine/core';

export interface ReactionButtonProps {
  component: React.ElementType;
}

const ReactionButton: React.FC<ReactionButtonProps & UnstyledButtonProps> = ({ component: Component, className, ...props }) => (
  <UnstyledButton
    className={`
      w-5
      h-5
      transition
      duration-75
      text-gray-300
      hover:text-gray-400
      ${className}
    `}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    <Component />
  </UnstyledButton>
);

export default ReactionButton;
