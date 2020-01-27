import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'bearer XksRS08X_0Z10tsjDrkM-jnUZYmr8zUGJxHxtlK5OWJChSrGN47bL9sfU0TVqgXgeI4rTKPX4w90bBFgAlBPExVPIxsp1tnEvR6ipsB1QIsMv1F3cotVPvtSf2pvXXYx'
  }
});
