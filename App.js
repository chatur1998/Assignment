import React, { Component } from 'react';
import { createAppContainer, HeaderBackButton } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import ListScreen from './src/screens/ListScreen';
import DetailScreen from './src/screens/DetailScreen';
import SearchBar from './src/components/SearchBar';
import rootreducer from './src/reducers/index';

const stackNavigator = createStackNavigator({
  main: {
    screen: ListScreen,
    navigationOptions: {
      headerTitle: 'List',
      headerTitleStyle: {
        fontWeight: 'bold',
        paddingLeft: 15
    }
    },
  },
  details: {
    screen: DetailScreen,
    navigationOptions: {
      headerTitle: 'Details',
      headerTitleStyle: {
        fontWeight: 'bold',
        paddingLeft: 5
    }
    }
  },
  search: SearchBar
  }, {
  initialRouteName: 'main',
  headerMode: 'screen',
});

const Navigation = createAppContainer(stackNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(rootreducer, {}, applyMiddleware(ReduxThunk))}>
        <Navigation />
      </Provider>
    );
  }
}
