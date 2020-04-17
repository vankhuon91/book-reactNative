import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import Constants from 'expo-constants';

import * as SQLite from 'expo-sqlite';
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';

import { Ionicons } from '@expo/vector-icons';


import ChapItem from "../components/ChapItem"
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class ContentChap extends Component {

    render() {
        const { navigation } = this.props;
        navigation.setOptions({
            title: 'Ngày xưa có một con bò',
            headerStyle: {
                backgroundColor: '#284f7b',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            drawerIcon: () => <Ionicons name="ios-arrow-dropright" />,
            headerLeft: () => (
                <Ionicons
                    style={styles.btnDraw}
                    onPress={() => {
                        navigation.toggleDrawer();
                    }}
                    name="md-menu"

                />
            ),
        });
        return (

            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Text>content</Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    flatlist: {
        paddingHorizontal: 8,
    },
    bottom: {

        alignItems: "flex-end",
        paddingVertical: 10,
        paddingRight: 16,

    },
    btnNext: {
        backgroundColor: "#E9CD2F",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,

        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 8,
    },
    btnText: {
        color: "#0a2856",
        fontSize: 18,
        fontWeight: "bold",

    },
    btnDraw: {
        paddingLeft: 16,
        fontSize: 26,
        color: '#fff',
        marginLeft: 8,
    },
    icon: {
        fontSize: 26,
        color: "#0a2856",

    }


});
