import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CarDTO } from '../dtos/CarDTO';
import { CarDetails } from '../screens/CarDetails';
import { Home } from '../screens/Home';
import { MyCars } from '../screens/MyCars';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingComplete } from '../screens/SchedulingComplete';
import { SchedulingDetails } from '../screens/SchedulingDetails';

export type StackNavigatorParamList = {
  Home: undefined;
  CarDetails: { car: CarDTO };
  Scheduling: { car: CarDTO };
  SchedulingDetails: { car: CarDTO; dates: string[] };
  SchedulingComplete: undefined;
  MyCars: undefined;
};

const { Navigator, Screen } =
  createNativeStackNavigator<StackNavigatorParamList>();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
}
