import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = ({name}) => {
    return <View style={stylez.view}>
        <Image style={stylez.image} source={require('../../assets/img/vredeEnRecht.jpg')} />
        <View style={stylez.greenRow}>
            <Text style={stylez.white}>{name}</Text>
        </View>
    </View>
}

const stylez = StyleSheet.create({
    view:{
        width: '100%',
        alignItems: 'center'
    },
    image:{
        width:70,
        height:50,
        marginTop: 10
    },
    greenRow:{
        backgroundColor: 'darkgreen',
        width: '100%',
        alignItems: 'center',
        padding: 10,
        marginTop: 10
    },
    white:{
        color: 'white'
    }
})

export default Header;