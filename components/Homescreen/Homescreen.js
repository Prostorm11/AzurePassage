import React from 'react';
import { Dimensions, StyleSheet, Text,View } from 'react-native';

function Homescreen() {
    return (
        <View style={styles.View1Style}>
            <Text>Hello</Text>
        </View>
    );
}

const styles=StyleSheet.create({
        View1Style:{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        }
    
})
export default Homescreen;