import React from 'react';
import Lottie from 'lottie-react-native';

import {Container} from './styles';

export default function Main() {
  return (
    <Container>
      {/* 
        Lottie_Animation
      */}
      <Lottie
        source={require('../../assets/animations/dev.json')}
        autoPlay
        loop
        speed={1.3}
      />
    </Container>
  );
}
