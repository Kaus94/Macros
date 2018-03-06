import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class RestaurantList extends Component {
  componentWillMount() {
    axios.get('https://developers.zomato.com/api/v2.1/collections?city_id=1')
      .then(response => console.log(response));
  }

  render() {
  return (
    <View>
      <Text>Testing</Text>
    </View>
    );
  }
}

export default RestaurantList;
