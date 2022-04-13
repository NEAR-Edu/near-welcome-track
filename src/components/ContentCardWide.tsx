import { useEffect, useState } from 'react';
import { Anchor } from '@mantine/core';

import ReactionButton from './ReactionButton';

import ThumbsUp from '@svg/thumbs-up.svg';
// import ThumbsDown from '@svg/thumbs-down.svg';
import AcceptCircle from '@svg/accept-circle.svg';
import CancelCircle from '@svg/cancel-circle.svg';
import { ContentWithPersonaAndTagsAndType } from '@lib/interfaces/content';
import * as storage from '@lib/storage';

const ContentCardWide: React.FC<ContentWithPersonaAndTagsAndType> = ({ id, link, type, duration, title, description, tags }) => {
  const [completed, setCompleted] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setCompleted(storage.read('content', id.toString(), 'completed') === 'true');
    setSaved(storage.read('content', id.toString(), 'saved') === 'true');
  }, [id]);

  return (
    <div className="flex flex-col px-4 py-5 rounded-md bg-white border border-gray-200 gap-3 w-[560px]">
      <div className="flex items-center gap-4">
        <ReactionButton
          label="Save"
          component={ThumbsUp}
          isActive={saved}
          activeClass="text-purple-600 hover:text-purple-400"
          onClick={() => {
            setSaved(storage.toggle('content', id.toString(), 'saved', !saved));
          }}
        />
        {/* <ThumbsDown className="w-5 h-5" /> */}

        <p className="text-sm text-neutral-500 font-semibold">{type.name}</p>
        <p className="text-sm text-neutral-500 font-semibold">{duration} minutes</p>

        {/* spacer */}
        <div className="flex-grow" />

        <ReactionButton
          label="Done"
          component={AcceptCircle}
          isActive={completed}
          activeClass="text-green-600 hover:text-green-500"
          onClick={() => {
            setCompleted(storage.toggle('content', id.toString(), 'completed', !completed));
          }}
        />
        <ReactionButton label="Hide" component={CancelCircle} isActive={false} activeClass="text-red-600 hover:text-red-500" />
      </div>

      <Anchor href={link} className="font-semibold text-left text-neutral-800 text-2xl">
        {title}
      </Anchor>
      <p className="text-neutral-600 mb-3">{description}</p>

      <div className="flex gap-2">
        {tags.map(({ id: tagId, name }) => (
          <div className="text-sm rounded-full bg-gray-200 text-neutral-700 px-3 py-1" key={tagId}>
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentCardWide;
