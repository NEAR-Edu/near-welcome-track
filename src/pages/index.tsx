import { AppShell, Footer, Header } from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';

import Logo from '../svg/logo.svg';
import Near from '../svg/near.svg';

import FooterLink from 'src/components/FooterLink';
import HeroSlide from 'src/components/HeroSlide';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NEAR Welcome Track</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppShell
        padding="md"
        header={
          <Header height={60} p="md" className="flex items-center border-0">
            <Logo className="h-full" />
          </Header>
        }
        footer={
          <Footer height={60} p="md" className="flex items-center justify-between border-0">
            <FooterLink href="https://near.university">NEAR Education, 2022</FooterLink>
            <FooterLink href="https://near.org" className="inline-flex items-center">
              <span className="mr-3">Powered by</span>
              <Near className="h-6" />
            </FooterLink>
          </Footer>
        }
      >
        <HeroSlide />
      </AppShell>
    </>
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
