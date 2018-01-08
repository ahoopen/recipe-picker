import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

class Badge extends Component {

    render() {
        const { text, icon } = this.props;

        return (
            <View style={styles.badge}>
                <View style={styles.badgeText}>
                    <FontAwesome style={styles.large}>{icon}</FontAwesome>
                    <Text bold>{text}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    large: {
        fontSize: 34,
        marginBottom: 10
    },

    badge: {
        flex: 1,
        margin: 10,
        height: 75,
        borderRadius: 10,
        backgroundColor: '#fff',
        overflow: 'hidden'
    },

    badgeText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }


});

export default Badge;