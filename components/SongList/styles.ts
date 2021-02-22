import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 15,
    },
    rightContainer: {
        justifyContent: 'space-around',
        marginLeft: 15,
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: '400',
        marginTop: 10
    },
    artist: {
        color: 'lightgray',
        fontSize: 18,
        marginBottom: 10
    },
    image: {
        width: 75,
        height: 75
    }
})

export default styles