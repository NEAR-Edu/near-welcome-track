import { GetServerSideProps, NextPage } from 'next';

import prisma, { Persona } from '@lib/db';
import Layout from '@components/Layout';
import OptionSelect from '@components/OptionSelect';

interface Props {
  personas: Persona[];
}

const QuestionPage: NextPage<Props> = ({ personas }) => {
  return (
    <Layout title="NEAR Welcome Track">
      <OptionSelect personas={personas} />
    </Layout>
  );
};

export default QuestionPage;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const personas = await prisma.persona.findMany();

  return {
    props: { personas },
  };
};
