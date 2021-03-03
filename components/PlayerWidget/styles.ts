import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 79,
        backgroundColor: '#131313',
        flexDirection: 'row',
        width: '100%', 
        borderBottomWidth: 1,
        alignItems: 'center'
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-around',
        marginRight: 10
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 5,
    },
    artist: {
        color: 'lightgray',
        fontSize: 18,
    },
    image: {
        width: 75,
        height: 75,
        marginRight: 10,
    }
})

export default styles