import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

function Shop() {
    return (
        <View style={styles.ViewStyle}>
            <Text>HELLO SHOP</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    ViewStyle:{
        justifyContent:"center",
        alignItems:"center",
        flex:1
    }
})
export default Shop;