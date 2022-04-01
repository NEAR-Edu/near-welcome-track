import React from 'react';
import { useQuery } from 'react-query';

import ContentCardWide from './ContentCardWide';
import CornerGradient from './CornerGradient';
import CtaButton from './CtaButton';
import MainHeader from './MainHeader';

import getContent from '@lib/queries/get-content';

const SurpriseSlide: React.FC = () => {
  const { data, refetch } = useQuery('random-content', getContent);

  return (
    <div className="flex justify-center items-center flex-col space-y-12 py-48 max-w-5xl mx-auto">
      <CornerGradient colorA="#E6E2FF" colorB="#E5F6FF" className="absolute -z-10 top-0 left-0" />
      <MainHeader>Does it seem interesting for you?</MainHeader>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {data ? <ContentCardWide {...data} /> : <div />}
      <div className="flex space-x-12">
        <CtaButton className="w-48" url="#" onClick={() => refetch()}>
          Next please
        </CtaButton>
      </div>
    </div>
  );
};

export default SurpriseSlide;
