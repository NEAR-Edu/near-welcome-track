import { Group } from '@mantine/core';
import { useState } from 'react';

import CardLink from './CardLink';
import Duration from './Duration';
import Tag from './Tag';

import AcceptCircle from '@svg/accept-circle.svg';
import CancelCircle from '@svg/cancel-circle.svg';
import { ContentWithPersonaAndTags } from '@lib/interfaces/content';
import { mapExperience } from '@lib/color-mapping';

const ContentRow: React.FC<ContentWithPersonaAndTags> = ({ title, link, personas, experience, duration }) => {
  const [done, setDone] = useState(false);

  return (
    <Group>
      <AcceptCircle className={done ? 'bg-primary-green-3' : ''} onClick={() => setDone((old) => !old)} />
      <Group className={`flex-col md:flex-row ${done ? 'grayscale' : 'grayscale-0'}`}>
        <CardLink href={link} text={title} done={done} />
        <Group className="md:self-end flex-col md:flex-row">
          <Duration duration={duration} />
          <Group>
            <Tag text={personas.at(0)?.name || ''} /* color={mapColor(personas.at(0).color)} */ />
            <Tag text={experience} color={mapExperience(experience)} />
          </Group>
        </Group>
      </Group>
      <CancelCircle />
    </Group>
  );
};

export default ContentRow;
