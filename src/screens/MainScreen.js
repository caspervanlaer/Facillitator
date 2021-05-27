import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import Spacer from '../components/Spacer';
import Header from '../components/Header';

const MainScreen = ({navigation}) => {
    return <View style={stylez.view}>
        <Header name='test'/>
        <Text>hallo wereld 2.0</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text>Ga terug</Text>
        </TouchableOpacity>
    </View>
};

const stylez = StyleSheet.create({
    view:{
        alignItems: 'center',
        backgroundColor: 'white',
        height: '100%',
    }
});

export default MainScreen;