import { Group } from '@mantine/core';
import { useEffect, useState } from 'react';

import CardLink from './CardLink';
import Duration from './Duration';
import Tag from './Tag';
import ReactionButton from './ReactionButton';

import AcceptCircle from '@svg/accept-circle.svg';
import ThumbsUp from '@svg/thumbs-up.svg';
import CancelCircle from '@svg/cancel-circle.svg';
import { ContentWithPersonaAndTags } from '@lib/interfaces/content';
import { mapExperience } from '@lib/color-mapping';
import * as storage from '@lib/storage';

const ContentRow: React.FC<ContentWithPersonaAndTags> = ({ id, title, link, personas, experience, duration }) => {
  const [completed, setCompleted] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setCompleted(storage.read('content', id.toString(), 'completed') === 'true');
    setSaved(storage.read('content', id.toString(), 'saved') === 'true');
  }, [id]);

  return (
    <Group>
      <ReactionButton
        component={AcceptCircle}
        isActive={completed}
        activeClass="text-green-600 hover:text-green-500"
        onClick={() => {
          setCompleted(storage.toggle('content', id.toString(), 'completed'));
        }}
      />
      <ReactionButton
        component={ThumbsUp}
        isActive={saved}
        activeClass="text-purple-400 hover:text-purple-600"
        onClick={() => {
          setSaved(storage.toggle('content', id.toString(), 'saved'));
        }}
      />
      <CardLink href={link} text={title} completed={completed} />
      <Duration duration={duration} />
      <Tag className="w-32" text={personas.at(0)?.name || ''} /* color={mapColor(personas.at(0).color)} */ />
      <Tag className="w-32" text={experience} color={mapExperience(experience)} />
      <ReactionButton component={CancelCircle} />
    </Group>
  );
};

export default ContentRow;
