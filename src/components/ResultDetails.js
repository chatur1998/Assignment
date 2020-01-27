import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const ResultsDetails = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews </Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        margin: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2
    },

    image: {
        width: Dimensions.get('window').width - 30,
        height: 200,
        borderRadius: 4,
        marginBottom: 3,
        paddingRight: 10,
        elevation: 10
    },
    name: {
        fontWeight: 'bold'
    }
});

export default ResultsDetails;
