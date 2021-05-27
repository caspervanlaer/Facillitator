import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import Spacer from '../components/Spacer';

const MainScreen = ({navigation}) => {
    return <View>
        <Text>hallo wereld 2.0</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text>Ga terug</Text>
        </TouchableOpacity>
    </View>
};

const stylez = StyleSheet.create({});

MainScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};

export default MainScreen;