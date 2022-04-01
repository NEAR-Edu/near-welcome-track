import axios from 'axios';

import { ContentWithPersonaAndTagsAndType } from '@lib/interfaces/content';

async function getContent(): Promise<ContentWithPersonaAndTagsAndType> {
  const response = await axios.get<ContentWithPersonaAndTagsAndType>('/api/content', {
    baseURL: '/',
  });

  return response.data;
}

export default getContent;
