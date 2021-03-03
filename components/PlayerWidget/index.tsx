import React from 'react'
import { Text, Image, View } from 'react-native'
import styles from './styles'
import { EvilIcons, FontAwesome } from '@expo/vector-icons'

const song = {
    id:'1',
    imageUri:'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    title: 'Hit And Run',
    artist: 'Helen',
}

const PlayerWidgets = () => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: song.imageUri }} style={styles.image}/>
            <View style={styles.rightContainer}>
                <View style={styles.nameContainer}> 
                    <Text style={styles.title}>{song.title} •</Text>
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>
                <View style={styles.iconsContainer}>
                    <EvilIcons name='heart' size={40} color='white' />
                    <FontAwesome name='play' size={30} color='white'/>
                </View>
            </View>
                
        </View>
    )
}

export default PlayerWidgets
