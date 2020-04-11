import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default class ChapItem extends Component {


    render() {
        const { infoChap } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.viewtext}>
                    <Text style={styles.text}> {infoChap.chapName}</Text>
                </View>
                <View >
                    <Ionicons style={styles.checkIcon} name="md-checkmark-circle-outline" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 0 },
        marginBottom: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
    },
    checkIcon: {
        color:"#62a0c3",
        fontSize:26,
        width: 30,
        justifyContent: "center",
    },
    viewtext: {

        marginRight: 10,
        flexGrow: 1,
        flexBasis: 0,
        justifyContent: "center",

    },
    text: {
        color: "#0a2856",
        fontSize: 16,
        fontWeight: "500",

    }


});
