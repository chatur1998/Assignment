import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit, onClosePressed }) => {

    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle} />
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.inputStyle}
                    placeholder="Search"
                    value={term}
                    onChangeText={onTermChange}
                    onEndEditing={onTermSubmit}
                />
              <TouchableOpacity onPress={onClosePressed}>
                <MaterialCommunityIcons name="close" style={styles.iconStyle2} />
              </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        margin: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1
    },
    iconStyle: {
       fontSize: 35,
       alignSelf: 'center',
       marginHorizontal: 15,
    },
    iconStyle2: {
       fontSize: 35,
       alignSelf: 'center',
       marginHorizontal: 15,
       paddingTop: 5
    }


});

export default SearchBar;
