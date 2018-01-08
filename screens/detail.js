import React, { Component } from 'react';
import { View, ScrollView, Button, Text, StyleSheet } from 'react-native';
import { Heading, Divider, Image, Overlay, Title, Tile, Subtitle, Caption, ListView } from '@shoutem/ui';
import { Col, Row, Grid } from "react-native-easy-grid";
import FontAwesome, { Icons } from 'react-native-fontawesome';

import Badge from '../components/badge';

class RecipeDetail extends Component {

    state = {
        title: 'Guacamole',
        author: 'Auke ten Hoopen',
        description: 'Delicioisly creamy with a hit of chili',
        ingredients: [{
            "text": "1 a small red onion",
        }, {
            "text": "1-2 fresh red chillies",
        }, {
            "text": "3 ripe avocados",
        }],
        badges: [
            {
                text: '4 pers',
                icon: Icons.cutlery
            },
            {
                text: '10 min',
                icon: Icons.clockO
            },
            {
                text: 'easy',
                icon: Icons.tachometer
            }
        ],
        methods: []
    }

    renderIngredient = ({ text }) => {
        return <Text style={styles.ingredient} key={text}>{text}</Text>;
    };

    renderRecipeDescription() {
        const { title, author, description } = this.state;

        return (
            <View>
                <Text style={styles.header}>{title.toUpperCase()}</Text>
                <Caption styleName="sm--gutter-vertical">by {author}</Caption>
                <Text style={styles.description}>{description}</Text>
            </View>
        );
    }

    renderIngredientTile() {
        return (
            <View>
                <Text style={styles.ingredientHeader}>Ingredients</Text>
                {this.state.ingredients.map(ingredient => this.renderIngredient(ingredient))}
            </View>
        );
    }

    renderBadgeTitle() {
        return (
            <View style={styles.badgeContainer}>
                {this.state.badges.map(badge => <Badge key={badge.text} {...badge} />)}
            </View>
        );
    }

    renderMethod() {
        return (
            <View>
                <Text style={styles.header}>Method</Text>
            </View>
        );
    }

    render() {
        const { navigation } = this.props;

        return (
            <ScrollView>
                <Grid>
                    <Row>
                        <Image
                            styleName="large-banner"
                            source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
                        >
                            <FontAwesome style={styles.favorise}>{Icons.heartO}</FontAwesome>
                        </Image>
                    </Row>
                    <Row style={styles.row}>{this.renderRecipeDescription()}</Row>
                    <Row style={styles.badge}>{this.renderBadgeTitle()}</Row>
                    <Row style={styles.row}>{this.renderIngredientTile()}</Row>
                    <Row style={styles.method}>{this.renderMethod()}</Row>
                </Grid>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    highlight: {
        marginBottom: 15
    },

    favorise: {
        fontSize: 46,
        flex: 1,
        justifyContent: 'space-between',
        alignSelf: 'flex-end',
        marginTop: 20,
        marginRight: 20,
        color: '#CCC',
    },

    method: {
        marginTop: 30,
        padding: 20,
        backgroundColor: '#fff'
    },

    row: {
        padding: 20,
        backgroundColor: '#fff'
    },

    description: {
        marginTop: 15,
        fontSize: 18,
        color: '#555857',
    },

    badgeContainer: {
        flex: 1,
        alignItems: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    header: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#1f1f1f',
    },

    ingredientHeader: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#1f1f1f',
        marginTop: 5,
        marginBottom: 15
    },

    ingredient: {
        color: '#555857',
        fontSize: 16,
        marginBottom: 8
    },

    badge: {
        padding: 20,
        backgroundColor: '#ECEFF1'
    }

});

export default RecipeDetail;