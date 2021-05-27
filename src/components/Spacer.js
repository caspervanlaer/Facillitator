import React from 'react';
import { View, StyleSheet } from 'react-native';

const Spacer = ({ children }) => {
    return <View style={stylez.space}>
    {children}
    </View>
};

const stylez = StyleSheet.create({
    space: {
        margin: 15
    }
});

export default Spacer;