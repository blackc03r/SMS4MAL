import { StyleSheet } from 'react-native';
import colors from './colors'

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#1b1b1b',
        justifyContent: 'center',
    },
    textContainer: {
        alignItems: 'center',
    },

    normalText: {
        fontSize: 12,
        color: 'gray',
        marginBottom: "5%"
    },
    textMessage: {
        padding: "0.5%",
        borderRadius: 8,
        marginBottom: "5%",
        color: colors.RadicalRed,
        fontSize: 14.5,
        width: "100%",
        paddingLeft: "1%",
        paddingRight: "1%"
    },
    headingText: {
        fontSize: 18.5,
        color: 'blue',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    footContainer: {
        backgroundColor: "#1b1b1b",
        alignItems: 'flex-end', // X
        justifyContent: 'flex-end'
    },

})

export default styles;