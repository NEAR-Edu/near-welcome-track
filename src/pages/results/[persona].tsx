import { Group } from '@mantine/core';
import { GetServerSideProps, NextPage } from 'next';

import ContentRow from '@components/ContentRow';
import Layout from '@components/Layout';
import prisma, { Persona } from '@lib/db';
import { withPersonaAndTags } from '@lib/interfaces/content';
import { CategoryWithContent } from '@lib/interfaces/category';
import { dehydrate, QueryClient, useQuery } from 'react-query';

import forPersona from '@lib/queries/contentForPersona';
import { useRouter } from 'next/router';

interface ResultsPageProps {
  persona: Persona | undefined;
}

const empty: ResultsPageProps = {
  persona: undefined,
};

const ResultsPage: NextPage<ResultsPageProps> = ({ persona }) => {
  const { data: content } = useQuery('for-persona', () => (persona ? forPersona(persona.name) : []));

  console.log({ content, persona });

  if (!content || !persona) {
    return <div>Not found.</div>;
  }

  return (
    <Layout title={`NEAR Welcome Track: ${persona.name}`}>
      {content
        .filter((c) => c.content.length > 0)
        .map((category) => (
          <>
            <Group
              className="
                items-baseline
                py-2
                px-4
                mb-5
                border-b
                border-b-gray-200
              "
            >
              <h2
                className="
                  text-3xl
                  font-bold
                  capitalize
                "
              >
                {category.name}
              </h2>
              <div className="text-gray-500">
                {category.content.length} item{category.content.length !== 1 ? 's' : ''}, {category.content.reduce((sum, piece) => piece.duration + sum, 0)} minutes
              </div>
            </Group>
            <div className="mx-12 space-y-3">
              {category.content.map((piece) => (
                <div key={piece.id}>
                  {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                  <ContentRow {...piece} />
                </div>
              ))}
            </div>
          </>
        ))}
    </Layout>
  );
};

export default ResultsPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { persona: personaName } = query;
  if (!personaName || personaName instanceof Array) {
    return {
      props: empty,
    };
  }

  const persona = prisma.persona.findUnique({
    where: {
      name: personaName,
    },
  });

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('for-persona', () => (personaName ? forPersona(personaName) : []));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      persona: await persona,
    },
  };
};
