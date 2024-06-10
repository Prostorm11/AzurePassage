import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Cart() {
    return (
       <View style={styles.ViewStyle1}>
            <Text>Hello My Cart</Text>
       </View>
    );
}

const styles=StyleSheet.create({

    ViewStyle1:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        
    }
})

export default Cart;