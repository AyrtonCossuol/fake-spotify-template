import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    Container: {
        height: 65,
        backgroundColor: '#222',
        borderTopColor: '#000',
        borderWidth: 2,
    }, 

    SubContainer: {
        height: 65,
        flexDirection: 'row',
    },

    GroupAction: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    ActionName: {
        color: '#fff',
        fontSize: 11,
        padding: 5
    }
});