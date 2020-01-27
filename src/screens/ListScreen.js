import React, { useEffect, useState } from 'react';
import { View, ScrollView, RefreshControl, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { searchApi, contains, refreshed } from '../actions/MainActions';
import SearchBar from '../components/SearchBar';
import ResultDetails from '../components/ResultDetails';

const ListScreen = ({ searchApi, navigation, fullData, contains, refreshed, refresh }) => {
  const [term, setTerm] = useState('');
  const [searchData, setsearchData] = useState(fullData);
  const [refreshing, setRefreshing] = useState(refresh);

  useEffect(() => {
    searchApi(0);
}, [searchApi]);

  const handleSearch = (term) => {
    const data = [];
     fullData.map(async (rest) => {
       rest.name.toLowerCase();
   if (rest.name.includes(term)) {
     return data.push(rest);
      }
    });
    if (data.length === 0) {
      return Alert.alert('NOt Found!');
    }
    setsearchData(data);
  };

  const onRefresh = () => {
    setRefreshing(true);
    refreshed();
    setRefreshing(refresh);
};

if (searchData.length !== 0) {
  return (
    <ScrollView
      style={{ flex: 1 }}
      refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={() => onRefresh()} />
          }
    >
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => handleSearch(term)}
        onClosePressed={() => {
          setTerm('');
        }}
      />
              <FlatList
                  data={searchData}
                  renderItem={({ item }) => {
                      return (
                          <TouchableOpacity onPress={() => navigation.navigate('details', { id: item.id })}>
                              <ResultDetails result={item} />
                          </TouchableOpacity>
                      );
                  }}

                  keyExtractor={item => item.id}
                  onEndReachedThreshold={0.1}
                  onEndReached={() => searchApi(50)}
              />

    </ScrollView>
  );
}
return (
  <ScrollView
    style={{ flex: 1 }}
    refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={() => onRefresh()} />
        }
  >
    <SearchBar
      term={term}
      onTermChange={setTerm}
      onTermSubmit={() => handleSearch(term)}
      onClosePressed={() => {
        setTerm('');
      }}
    />
            <FlatList
                data={fullData}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('details', { id: item.id })}>
                            <ResultDetails result={item} />
                        </TouchableOpacity>
                    );
                }}

                keyExtractor={item => item.id}
            />

  </ScrollView>
);
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 20
    }
});

const mapStateToProps = (state) => ({
  fullData: state.main.results,
  refresh: state.main.refreshing
});

export default connect(mapStateToProps, { searchApi, contains, refreshed })(ListScreen);
