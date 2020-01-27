import { Alert } from 'react-native';
import { SEARCH, DETAILS, REFRESH } from './types';
import yelp from '../api/yelp';

export const searchApi = (number) => {
  return async(dispatch) => {
    try {
      const response = await yelp.get('/search', {
                params: {
                   limit: 50,
                   term: 'pasta',
                   location: 'san jose',
                   offset: `${number}`
                }
            });
    dispatch({ type: SEARCH, payload: response.data.businesses });
  } catch (err) {
    Alert.alert(err);
  }
  };
};

export const getResult = (id) => {
  return async(dispatch) => {
    try {
      const res = await yelp.get(`/${id}`);
    dispatch({ type: DETAILS, payload: res.data });
    console.log(res);
  } catch (err) {
    Alert.alert(err);
  }
  };
};

export const contains = (term, rest) => {
    if (rest.name.includes(term)) {
      return true;
    }
      return false;
};

export const refreshed = () => {
  return async(dispatch) => {
    try {
      const response = await yelp.get('/search', {
                params: {
                   limit: 50,
                   term: 'pizza',
                   location: 'san jose'
                }
            });
    dispatch({ type: REFRESH, payload: response.data.businesses });
  } catch (err) {
    Alert.alert(err);
  }
  };
};
