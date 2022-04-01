import { AppShell, Footer, Header } from '@mantine/core';
import React from 'react';
import Head from 'next/head';

import FooterLink from './FooterLink';

import Logo from '@svg/logo.svg';
import Near from '@svg/near.svg';
import Link from 'next/link';

interface Props {
  title: string;
  description?: string;
}

const Layout: React.FC<Props> = ({ children, title, description }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <AppShell
      padding="md"
      header={
        <Header height={60} p="md" className="flex items-center border-0">
          <Link href="/" passHref>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="h-full">
              <Logo className="h-full" />
            </a>
          </Link>
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
      {children}
    </AppShell>
  </>
);

Layout.defaultProps = {
  description: '',
};

export default Layout;
