import { formatDuration } from 'date-fns';

interface Props {
  duration: number;
}

const Duration: React.FC<Props> = ({ duration }) => <span>{formatDuration({ minutes: duration })}</span>;

export default Duration;
