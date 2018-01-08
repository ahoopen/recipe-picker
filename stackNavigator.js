import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Detail from './screens/detail';
import Home from './screens/home';

const RootNavigator = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    Details: {
        screen: Detail,
        navigationOptions: {
            headerTitle: 'Recipe detail',
        },
    },
});

export default RootNavigator;