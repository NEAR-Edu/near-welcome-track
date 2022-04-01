import axios from 'axios';

import { ContentWithPersonaAndTagsAndType } from '@lib/interfaces/content';

async function randomContent(): Promise<ContentWithPersonaAndTagsAndType> {
  const response = await axios.get<ContentWithPersonaAndTagsAndType>('/api/content/random', {
    baseURL: '/',
  });

  return response.data;
}

export default randomContent;
