import axios from 'axios';

import ContentWithTags from '@lib/interfaces/content';

async function getContent(): Promise<ContentWithTags> {
  const response = await axios.get<ContentWithTags>('/api/content', {
    baseURL: 'http://localhost:3000',
  });

  return response.data;
}

export default getContent;
