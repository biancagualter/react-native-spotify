import React from 'react'
import { Text, View, Image, TouchableOpacity} from 'react-native'
import { AlbumData } from '../../types'
import styles from './styles'

export type AlbumHeaderProps = {
    album: AlbumData;
}

const AlbumHeader = (props: AlbumHeaderProps) => {
    const { album } = props
    return (
        <View style={styles.container}>
            <Image source={{ uri: album.imageUri }}  style={styles.image} />
            <Text style={styles.name}>{album.name}</Text>
            <View style={styles.creatorContainer}>
                <Text style={styles.creator}>By {album.by} • </Text>
                <Text style={styles.likes}>{album.likes} Likes</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>PLAY</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default AlbumHeader