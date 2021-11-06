import React from 'react';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import AccelerationIcon from '../../assets/acceleration.svg';
import AutoIcon from '../../assets/exchange.svg';
import ForceIcon from '../../assets/force.svg';
import GasolineIcon from '../../assets/gasoline.svg';
import PeopleIcon from '../../assets/people.svg';
import SpeedIcon from '../../assets/speed.svg';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { CarStat } from '../../components/CarStat';
import { ImageSlider } from '../../components/ImageSlider';
import { StackNavigatorParamList } from '../../routes/stack.routes';
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
    navigation.navigate('Scheduling');
  };

  const getIconByIconType = (iconType: string) => {
    const iconComponentByIconName = {
      acceleration: AccelerationIcon,
      exchange: AutoIcon,
      turning_diameter: ForceIcon,
      gasoline_motor: GasolineIcon,
      seats: PeopleIcon,
      speed: SpeedIcon,
      default: PeopleIcon,
    };

    const IconComponent = iconComponentByIconName[iconType];
    const IconDefault = iconComponentByIconName.gasoline_motor;

    return IconComponent ? IconComponent : IconDefault;
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
