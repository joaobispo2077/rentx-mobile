import React from 'react';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { CarStat } from '../../components/CarStat';
import { ImageSlider } from '../../components/ImageSlider';
import { StackNavigatorParamList } from '../../routes/stack.routes';
import { getIconByIconType } from '../../utils/getIconByIconType';
import {
  CarImage,
  Container,
  Header,
  Content,
  Details,
  Identity,
  Brand,
  Model,
  Pricing,
  Period,
  Price,
  Description,
  CarStatList,
  CarStatItem,
  Footer,
} from './styles';

type CarDetailsScreenNavigationProps = NativeStackNavigationProp<
  StackNavigatorParamList,
  'CarDetails'
>;

export function CarDetails() {
  const navigation = useNavigation<CarDetailsScreenNavigationProps>();

  const route = useRoute<RouteProp<StackNavigatorParamList, 'CarDetails'>>();
  const { car } = route.params;

  const handleNavigateGoBack = () => {
    navigation.goBack();
  };

  const handleNavigateToSelectRentalPeriod = () => {
    navigation.navigate('Scheduling', {
      car,
    });
  };

  return (
    <Container>
      <Header>
        <BackButton onPress={handleNavigateGoBack} />
      </Header>
      <CarImage>
        <ImageSlider imagesURL={car.photos} />
      </CarImage>

      <Content>
        <Details>
          <Identity>
            <Brand>{car.brand}</Brand>
            <Model>{car.name}</Model>
          </Identity>
          <Pricing>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Pricing>
        </Details>
        <CarStatList>
          {car.accessories.map((accessory) => (
            <CarStatItem key={accessory.type}>
              <CarStat
                title={accessory.name}
                icon={getIconByIconType(accessory.type)}
              />
            </CarStatItem>
          ))}
        </CarStatList>
        <Description>{car.about}</Description>
      </Content>
      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleNavigateToSelectRentalPeriod}
        />
      </Footer>
    </Container>
  );
}
