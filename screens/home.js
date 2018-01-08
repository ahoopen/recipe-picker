import React, { Component } from 'react';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';
import { Heading, Divider, ListView } from '@shoutem/ui';

import Card from '../components/Card';
import Favorites from '../components/Favorite';

class Home extends Component {

    state = {
        favorites: [{
            "text": "4 pers",
            "image": {
                "url": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg"
            },
        }, {
            "text": "10 min",
            "image": {
                "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg"
            },
        }, {
            "text": "Easy",
            "image": {
                "url": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg"
            },
        }],
    }

    renderBlock = () => {
        return (
            <Card></Card>
        );
    };

    renderFavorites = () => {
        return (
            <Favorites></Favorites>
        );
    };

    render() {
        const { navigation } = this.props;

        return (
            <ScrollView>
                <View style={styles.highlight}>
                    <Button
                        onPress={() => navigation.navigate('Details')}
                        title="Go to details"
                    />

                    <Heading styleName='md-gutter'>Highlighted</Heading>
                    <ListView
                        horizontal={true}
                        data={this.state.favorites}
                        renderRow={this.renderBlock}
                    />
                </View>

                <View style={styles.favorites}>
                    <Heading styleName='lg-gutter'>Your Favorites</Heading>
                    <ListView
                        horizontal={true}
                        data={this.state.favorites}
                        renderRow={this.renderFavorites}
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    highlight: {
        // backgroundColor: '#ECEFF1',
        // backgroundColor: 'red',
        marginBottom: 15
    },

    favorites: {
        height: 400,
        backgroundColor: '#fff'
    }
});

// style={{ flex: 1, justifyContent: 'space-between', padding: 10 }} 

export default Home;