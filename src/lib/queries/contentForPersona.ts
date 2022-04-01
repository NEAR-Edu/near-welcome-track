import axios from 'axios';

import { ContentWithPersonaAndTagsAndType } from '@lib/interfaces/content';
import { CategoryWithContent } from '@lib/interfaces/category';

async function contentForPersona(persona: string): Promise<CategoryWithContent[]> {
  const response = await axios.get<CategoryWithContent[]>('/api/content/forPersona', {
    baseURL: '/',
    params: {
      persona,
    },
  });

  return response.data;
}

export default contentForPersona;
