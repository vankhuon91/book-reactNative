// In App.js in a new project

import * as React from 'react';
import { Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';



import Draw from './pages/Draw'
import CustomDrawerContent from './components/customDraw'
import Root from './components/Root'


const Drawer = createDrawerNavigator();



function AppNavigator() {
    return (
        <NavigationContainer >
            <Drawer.Navigator
                drawerStyle={{
                    backgroundColor: '#fff',
                    width: 240,
                }}
                drawerContent={props => <CustomDrawerContent {...props} />}>
                <Drawer.Screen 
                
                name="Home" component={Root} />
                <Drawer.Screen name="Setting" component={Draw} />
                <Drawer.Screen name="Rating" component={Root} />

            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;


