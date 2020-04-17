import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import Constants from 'expo-constants';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import Home from '../pages/Home'
import ContentChap from '../pages/ContentChap'

const Stack = createStackNavigator();

export default class Root extends Component {
    render(){
        const { navigation } = this.props;
        navigation.setOptions({
            drawerIcon:()=> <Ionicons name="md-home" style={styles.icon}/>,})
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="ContentChap"
                component={ContentChap}
            />
        </Stack.Navigator>
    )}
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    icon:{
        fontSize:26,
        color:"#0493cd",
    }
   
});
