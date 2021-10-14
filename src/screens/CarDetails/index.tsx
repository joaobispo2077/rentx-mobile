import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { CarImage, Container, Header } from './styles';

export function CarDetails() {
  const imagesURL = [
    'https://www.webmotors.com.br/imagens/prod/347468/PORSCHE_PANAMERA_2.9_V6_EHYBRID_4_PDK_34746814472691347.png?s=fill&w=130&h=97&q=70&t=true)',
  ];

  return (
    <Container>
      <Header>
        <BackButton onPress={() => console.log('irra')} />
      </Header>
      <CarImage>
        <ImageSlider imagesURL={imagesURL} />
      </CarImage>
    </Container>
  );
}
