import { GetServerSideProps, NextPage } from 'next';

import prisma, { Persona, Content } from '@lib/db';
import Layout from '@components/Layout';
import OptionSelect from '@components/OptionSelect';
import ContentRow from '@components/ContentRow';
import { ContentWithPersonaAndTags, withPersonaAndTags } from '@lib/interfaces/content';

interface ResultsPageProps {
  persona: Persona | undefined;
  content: ContentWithPersonaAndTags[];
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
      <div className="mx-12 space-y-3">
        {content.map((c) => (
          <div key={c.id}>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <ContentRow {...c} />
          </div>
        ))}
      </div>
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

  const content = await prisma.content.findMany({
    ...withPersonaAndTags,
    where: {
      personas: {
        some: {
          id: persona.id,
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
