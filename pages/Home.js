import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import Constants from 'expo-constants';

import * as SQLite from 'expo-sqlite';
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';

import { Ionicons } from '@expo/vector-icons';


import ChapItem from "../components/ChapItem"
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
       
    }

    componentDidMount() {

        // load in db
        FileSystem.downloadAsync(
            Asset.fromModule(require('../assets/db/db.mp4')).uri,
            `${FileSystem.documentDirectory}SQLite/db.db`
        )
            .then(() => {
                let dbbook = SQLite.openDatabase('db.db');

                // do whatever else you need here
                let test=[];
                console.log(dbbook)
                dbbook.transaction((tx) => {
                    tx.executeSql('SELECT * FROM chaps', [], (tx, results) => {
                        
                        var len = results.rows.length;
                        for (let i = 0; i < len; i++) {
                            let row = results.rows.item(i);
                            test.push({ stt: row.stt, chapName: row.chapName, isRead: row.isRead, content: row.content })
                        }
                        this.setState({
                            list: test
                        })
                    });
                });

            })
            .catch(error => {
                console.error(error);
            });
    }

   
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
                <FlatList
                    style={styles.flatlist}
                    data={this.state.list}
                    renderItem={({ item }) => <ChapItem infoChap={item} onPress={() => navigation.toggleDrawer()}/>}
                    keyExtractor={item => `${item.stt}`}
                /> 

                <View style={styles.bottom}>
                    <TouchableOpacity >
                        <View style={styles.btnNext}>
                            <Text style={styles.btnText}>Đọc tiếp </Text>
                            <Ionicons name="ios-arrow-dropright" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                </View>
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
