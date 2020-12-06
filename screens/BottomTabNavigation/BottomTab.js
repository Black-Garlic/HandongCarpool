import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { StyleSheet } from 'react-native';

const BottomTabNavigator = createBottomTabNavigator();

import HomeScreen from '../Home/HomeScreen'
import CarpoolListScreen from '../Carpool/CarpoolListScreen'
import TaxiListScreen from '../Taxi/TaxiListScreen'
import MyInfoScreen from '../MyInfo/MyInfoScreen'

export default function BottomTab() {
    return (
        <BottomTabNavigator.Navigator>
            <BottomTabNavigator.Screen
                name="Home"
                component={HomeScreen}
            />
            <BottomTabNavigator.Screen
                name="Carpool"
                component={CarpoolListScreen}
            />
            <BottomTabNavigator.Screen
                name="Taxi"
                component={TaxiListScreen}
            />
            <BottomTabNavigator.Screen
                name="MyInfo"
                component={MyInfoScreen}
            />
        </BottomTabNavigator.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});