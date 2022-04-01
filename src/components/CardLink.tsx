const LINK_END_ARROW = ' 🡥';

interface Props {
  href: string;
  text: string;
  completed?: boolean;
}

const CardLink: React.FC<Props> = ({ href, text, completed }) => (
  <a
    href={href}
    target="_blank"
    className={`flex-1 text-primary-black hover:text-primary-orange visited:text-primary-gray-4 visited:line-through ${completed ? 'line-through' : ''}`}
    rel="noreferrer"
  >
    {text}
    <span className="decoration-transparent">{LINK_END_ARROW}</span>
  </a>
);

CardLink.defaultProps = {
  completed: false,
};

export default CardLink;
