import type { NextPage } from 'next';

import HeroSlide from '@components/HeroSlide';
import Layout from '@components/Layout';

const Home: NextPage = () => {
  return (
    <Layout title="NEAR Welcome Track">
      <HeroSlide />
    </Layout>
  );
};

export default Home;

// https://react-query.tanstack.com/guides/ssr
/* 
export const getStaticProps: GetStaticProps<{}> = async (context) => {
  const queryClinet = new QueryClient();

  await queryClient.prefetchQuery('posts', getPosts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
 */
