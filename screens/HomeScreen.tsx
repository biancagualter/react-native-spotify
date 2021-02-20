import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AlbumCategory from '../components/AlbumCategory'

const albumCategory = {
  id:'1',
  title: 'Dance',
  albumsData: [
    {
      id: '1',
      imageUri: 'http://sportplaylists.com/wp-content/uploads/2017/05/79001a86998ccf89637309570d3dc45c196b2f3d.jpeg',
      artistsHeadline: 'Lady Gaga, Cardi B, Ariana Grande, Martin Garrix'
    },
    {
      id: '2',
      imageUri: 'http://sportplaylists.com/wp-content/uploads/2017/05/79001a86998ccf89637309570d3dc45c196b2f3d.jpeg',
      artistsHeadline: 'Lady Gaga, Cardi B, Ariana Grande, Martin Garrix'
    },
    {
      id: '3',
      imageUri: 'http://sportplaylists.com/wp-content/uploads/2017/05/79001a86998ccf89637309570d3dc45c196b2f3d.jpeg',
      artistsHeadline: 'Lady Gaga, Cardi B, Ariana Grande, Martin Garrix'
    },
    {
      id: '4',
      imageUri: 'http://sportplaylists.com/wp-content/uploads/2017/05/79001a86998ccf89637309570d3dc45c196b2f3d.jpeg',
      artistsHeadline: 'Lady Gaga, Cardi B, Ariana Grande, Martin Garrix'
    }
  ]
}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <AlbumCategory title={albumCategory.title} albums={albumCategory.albumsData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
