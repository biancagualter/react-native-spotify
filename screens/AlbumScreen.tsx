import React, { useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'
import albumDetails from '../data/albumDetails'
import SongList from '../components/SongList'

const AlbumScreen = () => {
    const route = useRoute()

    useEffect(() => {
        console.log(route)
    }, [])

    return (
        <View>
            <FlatList 
                data={albumDetails.songs} 
                renderItem={({ item }) => <SongList song={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default AlbumScreen
