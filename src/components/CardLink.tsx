const LINK_END_ARROW = ' 🡥';

interface Props {
  href: string;
  text: string;
  completed?: boolean;
}

const CardLink: React.FC<Props> = ({ href, text, completed }) => (
  <a href={href} className={`flex-1 text-primary-black hover:text-primary-orange ${completed ? 'text-gray-500' : 'font-semibold'}`}>
    {text}
    <span className="decoration-transparent">{LINK_END_ARROW}</span>
  </a>
);

CardLink.defaultProps = {
  completed: false,
};

export default CardLink;
