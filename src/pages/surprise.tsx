import { GetServerSideProps, NextPage } from 'next';
import { dehydrate, QueryClient } from 'react-query';

import Layout from '@components/Layout';
import getContent from '@lib/queries/get-content';
import SupriseSlide from '@components/SupriseSlide';

const SuprisePage: NextPage = () => {
  return (
    <Layout title="NEAR Welcome Track">
      <SupriseSlide />
    </Layout>
  );
};

export default SuprisePage;

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('random-content', getContent);

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};
