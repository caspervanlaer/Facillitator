import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Spacer from '../components/Spacer';

const ForgotPasswordScreen = () => {
    return <View style={stylez.view}>
        <Header name='Wachtwoord vergeten'/>
        <Text>hallo</Text>
    </View>
};

const stylez = StyleSheet.create({
    view:{
        alignItems: 'center',
        backgroundColor: 'white',
        height: '100%',
    }
});

export default ForgotPasswordScreen;