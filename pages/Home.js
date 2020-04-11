import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import Constants from 'expo-constants';

import { Ionicons } from '@expo/vector-icons';

const book = {
    bookName: "ngày xưa có một con bò",
    currentChap: 0,
    chaps:
        [
            {
                stt: 0,
                chapName: "Lời nói đầu",
                isRead: false,
                content: "không có gì để giới thiệu"
            },
            {
                stt: 1,
                chapName: "Lời giới thiệu",
                isRead: false,
                content: "giới thiệu với các bạn mình là khuôn xấu zai"
            },
            {
                stt: 2,
                chapName: "1. Chuyện ngụ ngôn về một con Bò",
                isRead: false,
                content: "có một con bò mang tên là tình yêu"
            },
            {
                stt: 3,
                chapName: "2. Đừng bao giờ cho rằng mọi con bò để kêu Ủn Ỉn",
                isRead: false,
                content: "Éc éc Éc éc Éc éc Éc éc Éc éc Éc éc Éc éc Éc éc Éc éc Éc éc "
            },
            {
                stt: 4,
                chapName: "1. Chuyện ngụ ngôn về một con Bò",
                isRead: false,
                content: "có một con bò mang tên là tình yêu"
            },
            {
                stt: 5,
                chapName: "2. Đừng bao giờ cho rằng mọi con bò để kêu Ủn Ỉn",
                isRead: false,
                content: "Éc éc Éc éc Éc éc Éc éc Éc éc Éc éc Éc éc Éc éc Éc éc Éc éc "
            },
            {
                stt: 6,
                chapName: "1. Chuyện ngụ ngôn về một con Bò",
                isRead: false,
                content: "có một con bò mang tên là tình yêu"
            },
            {
                stt: 7,
                chapName: "2. Đừng bao giờ cho rằng mọi con bò để kêu Ủn Ỉn",
                isRead: false,
                content: "Éc éc Éc éc Éc éc Éc éc Éc éc Éc éc Éc éc Éc éc Éc éc Éc éc "
            },


        ]

};

import ChapItem from "../components/ChapItem"
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Home extends Component {
  
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
            drawerIcon:()=> <Ionicons name="ios-arrow-dropright" />,
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
                    data={book.chaps}
                    renderItem={({ item }) => <ChapItem infoChap={item} />}
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
