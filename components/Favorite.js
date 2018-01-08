import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Heading, Divider, Image } from '@shoutem/ui';

class Card extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.image}>
                    <Image
                        styleName="medium"
                        source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-10.png' }}
                    />
                </View>
                <Text>Pumpkin soup</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 10,
        height: 75,
        width: 75,
        backgroundColor: 'transparent',
        shadowColor: '#ccc',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: .8,
    },

    image: {
        flex: 2,
        backgroundColor: 'steelblue',
        borderRadius: 10,
    }
});

export default Card