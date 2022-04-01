import { Group } from '@mantine/core';
import { GetServerSideProps, NextPage } from 'next';

import ContentRow from '@components/ContentRow';
import Layout from '@components/Layout';
import prisma, { Persona } from '@lib/db';
import { withPersonaAndTags } from '@lib/interfaces/content';
import { CategoryWithContent } from '@lib/interfaces/category';

interface ResultsPageProps {
  persona: Persona | undefined;
  content: CategoryWithContent[];
}

const empty: ResultsPageProps = {
  persona: undefined,
  content: [],
};

const ResultsPage: NextPage<ResultsPageProps> = ({ persona, content }) => {
  console.log({ persona, content });
  if (!persona) {
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
                {category.content.length} items, {category.content.reduce((sum, piece) => piece.duration + sum, 0)} minutes
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

export const getServerSideProps: GetServerSideProps<ResultsPageProps> = async ({ query }) => {
  const { persona: name } = query;

  if (!name || name instanceof Array) {
    return { props: empty };
  }

  const persona = await prisma.persona.findUnique({
    where: {
      name,
    },
  });

  if (!persona) {
    return { props: empty };
  }

  const content = await prisma.category.findMany({
    include: {
      content: {
        ...withPersonaAndTags,
        where: {
          personas: {
            some: {
              id: persona.id,
            },
          },
        },
      },
    },
  });

  return {
    props: {
      persona,
      content,
    },
  };
};
