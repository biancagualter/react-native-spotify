import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useRoute } from '@react-navigation/native'

const album = {
    id: '11',
    name: 'Good Vibes',
    by: 'Spotify',
    Likes: 29,
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    artistsHeadline: 'Taylor Swift, Kygo Objective C, Avicii',
    songs: [{
        id:'1',
        imageUri:'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
        title: 'Hit And Run',
        artist: 'Helen',
    },
    {
        id:'2',
        imageUri:'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
        title: 'Lorem Ipsum',
        artist: 'Lorem',
    },
    {
        id:'3',
        imageUri:'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
        title: 'Lorem Ipsum',
        artist: 'Lorem',
    },
    {
        id:'4',
        imageUri:'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
        title: 'Lorem Ipsum',
        artist: 'Lorem',
    },
    {
        id:'5',
        imageUri:'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
        title: 'Lorem Ipsum',
        artist: 'Lorem',
    }]
  }

const AlbumScreen = () => {
    const route = useRoute()

    useEffect(() => {
        console.log(route)
    }, [])

    return (
        <View>
            <Text style={{color: 'white'}}>Hello</Text>
        </View>
    )
}

export default AlbumScreen
