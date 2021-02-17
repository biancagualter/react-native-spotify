import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Album from '../components/album/index'

const album = {
  id:'1',
  imageUri: 'https://google.com',
  artistsHeadline: 'Lady Gaga, Cardi B, Ariana Grande, Martin Garrix'
}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Album album={album} />
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
