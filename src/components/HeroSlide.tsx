import React from 'react';

import CornerGradient from './CornerGradient';
import CtaButton from './CtaButton';
import MainHeader from './MainHeader';

const HeroSlide: React.FC = () => (
  <div className="flex justify-center items-center flex-col space-y-12 py-48 max-w-5xl mx-auto">
    <CornerGradient colorA="#E6E2FF" colorB="#E5F6FF" className="absolute -z-10 top-0 left-0" />
    <MainHeader>Learn about NEAR & Web3</MainHeader>
    <p className="text-xl text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper amet senectus elit volutpat, amet lorem diam, id. Sed ultricies id tempus ante sed vestibulum nibh risus, nec.
      Nisl vitae id enim sem nibh imperdiet netus velit sit. Viverra ut mauris at turpis mauris velit arcu.
    </p>
    <div className="flex space-x-12">
      <CtaButton className="w-48" outline>
        Surprise me!
      </CtaButton>
      <CtaButton className="w-48">Start here!</CtaButton>
    </div>
  </div>
);

export default HeroSlide;
