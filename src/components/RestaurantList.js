import React, { Component } from 'react';
import { Text, View } from 'react-native';
import zomato from 'zomato';

class RestaurantList extends Component {
  componentWillMount() {
    const client = zomato.createClient({
  userKey: 'f4427b20e07ce83596b26c6cd4bf9a5e' });
  console.log(client);
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
