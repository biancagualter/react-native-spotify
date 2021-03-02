import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20
    },
    image: {
        width: 200,
        height: 200,
        margin: 30
    },
    name: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 5
    },
    creatorContainer: {
        flexDirection: 'row',
        margin: 10
    },
    creator: {
        color: 'lightgray',
        textTransform: 'uppercase',
        letterSpacing: 2.5
    },
    likes: {
        color: 'lightgray',
        textTransform: 'uppercase',
        letterSpacing: 2.5
    },
    button: {
        backgroundColor: '#1CD05D',
        height: 60,
        width: 175,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    buttonText: {
        color: 'lightgray',
        fontWeight: 'bold',
        fontSize: 20,
    }
})

export default styles