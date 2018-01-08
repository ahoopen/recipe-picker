import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Card extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text>Guacamole</Text>
                    <Text style={styles.textStyle}>by Auke ten Hoopen</Text>
                </View>
                <View style={styles.image}>
                    <Text>image</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 10,
        height: 175,
        width: 230,
        backgroundColor: 'transparent',
        shadowColor: '#ccc',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: .8,
    },

    content: {
        flex: 1,
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: 'skyblue'
    },

    image: {
        flex: 2,
        backgroundColor: 'steelblue',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }
});

export default Card