import React from 'react';

import CornerGradient from './CornerGradient';
import CtaButton from './CtaButton';
import MainHeader from './MainHeader';

import { Persona } from '@lib/db';

interface Props {
  personas: Persona[];
}

const OptionSelect: React.FC<Props> = ({ personas }) => (
  <div className="flex justify-center items-center flex-col space-y-12 py-48 max-w-5xl mx-auto">
    <CornerGradient colorA="#E6E2FF" colorB="#E5F6FF" className="absolute -z-10 top-0 left-0" />

    <MainHeader>You consider yourself as a</MainHeader>

    {personas.map(({ id, name }) => (
      <CtaButton className="w-64 text-2xl" outline key={id} url={{ pathname: '/results/[persona]', query: { persona: name } }}>
        {name}
      </CtaButton>
    ))}
  </div>
);

export default OptionSelect;
