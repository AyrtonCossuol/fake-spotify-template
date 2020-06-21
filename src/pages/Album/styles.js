import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#111',
    },

    ContainerHeader: {
        height: '50%',
        justifyContent: "space-between"
    },

    Photo: {
        position: 'absolute',
        marginLeft: 0,
        marginTop: 0,
        marginBottom: '50%',
        marginRight: 0,
        height: '100%',
        width: '100%',
    },  

    ContainerNavBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },

    GroupItemNavBar: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    ButtonFollow: {
        marginRight: 20,
        color: '#fff',
        borderColor: '#fff',
        borderWidth: 1,
        padding: 6,
        borderRadius: 6,
    },

    ContainerInfoBand: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    BandName: {
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
        padding: 15,
    },

    BandFooter: {
        fontSize: 12,
        textTransform: 'uppercase',
        color: '#e6e6e6'
    },

    Content: {
        flex: 1,
        
        alignItems: 'center',
        justifyContent: 'center',
    },

    ButtonRandomOrder: {
        backgroundColor: "green",
        alignItems: "center",
        padding: 10,
    },

    ButtonRandomOrderText: {
        color: '#fff',
    },

    InfoCategory: {

    }
});