const LINK_END_ARROW = ' 🡥';

interface Props {
  href: string;
  text: string;
  done?: boolean;
}

const CardLink: React.FC<Props> = ({ href, text, done }) => (
  <a href={href} className={`text-primary-black hover:text-primary-orange visited:text-primary-gray-4 visited:line-through ${done ? 'line-through' : ''}`}>
    {text}
    <span className="decoration-transparent">{LINK_END_ARROW}</span>
  </a>
);

CardLink.defaultProps = {
  done: false,
};

export default CardLink;
