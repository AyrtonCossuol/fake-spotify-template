import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    Container: {
        width: 160,
        paddingBottom: 10,
        paddingRight: 0,
        marginRight: 8,
    },

    Photo: {
        width: 150,
        height: 150,
        backgroundColor: '#888',
        borderRadius: 6,
    },

    ContainerSubtitle: {
        flexDirection: 'column',
        paddingBottom: 10,
        paddingRight: 0,
    },

    SubtitleTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
        paddingBottom: 2,
        paddingRight: 0,
    },

    SubtitleDescription: {
        color: '#999',
        fontSize: 12,
    },
});