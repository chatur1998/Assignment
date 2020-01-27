import React, { useState, useEffect } from 'react';
import { View, Dimensions, StyleSheet, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import { getResult } from '../actions/MainActions';

const DetailScreen = ({ navigation, getResult, images }) => {
    const id = navigation.getParam('id');

    useEffect(() => {
        getResult(id);
    }, []);

    return (
        <View>
            <FlatList
                data={images.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
      width: Dimensions.get('window').width - 20,
      height: 200,
      borderRadius: 4,
      marginBottom: 5,
      marginLeft: 10,
      marginTop: 5
    }
});

const mapStateToProps = (state) => ({
  images: state.main.details
});

export default connect(mapStateToProps, { getResult })(DetailScreen);
