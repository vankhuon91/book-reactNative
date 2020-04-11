import React from 'react'
import { Image, StyleSheet, View, Text,Linking  } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

export default function CustomDrawerContent(props) {
    return (
        <View style={styles.container}>
            <View style={styles.drawInfo}>
                <Image source={require('../assets/cover.jpg')} style={styles.drawImage} />
                <Text>Tác giả: Camilo Cruz, Ph.D.</Text>
            </View>

            <DrawerContentScrollView {...props} >
                <DrawerItemList {...props} />
                <DrawerItem
                    label="Share"
                    onPress={() => Linking.openUrl('https://facebook.com')}
                />
            </DrawerContentScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    drawImage: {
        height: 200,
        width: 130,
        marginVertical: 10,
    },
    drawInfo: {
        alignItems: "center",

    },
});

