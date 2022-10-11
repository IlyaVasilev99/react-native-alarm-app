import {StyleSheet} from 'react-native';

export const gStyle = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,

    },
    mainAlarms: {
        flex: 1,
        marginTop: 5,
        marginBottom: 5,
        paddingHorizontal: 180,
        backgroundColor: '#ffb',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
        borderRadius: 10,


    },
    modalWindowStyle: {
        flex: 1,
        backgroundColor: '#ffb',
    },
    modalWindowInput:  {
        borderWidth: 1,
        marginTop: 15,
        padding: 15,
        marginBottom: 15,
        marginHorizontal: 25,
        borderColor: 'silver',
        borderRadius: 5,

    },
    modalButton: {
        color: 'aaa',
        marginTop: 15,
        padding: 15,
        marginBottom: 15,
        marginHorizontal: 25,
    },

    alarmPage: {
        flex: 1,
        backgroundColor: '#aac',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 60,
    },
    alarmPageText:{
        fontSize: 24,
        //fontFamily: ub,\
        fontWeight: "300",
        fontStyle: "italic",
        padding: 20

    },

    title:{
        fontSize: 24,
        color: '#333',
        //fontFamily: ub,
        textAlign: 'center',


    },
    iconLeft: {
        position: 'absolute',
        left: 25,
        top: 20,
    },
    iconCloseRight: {
        position: 'absolute',
        right: 25,
        top: 505,
    },
    iconRight: {
        position: 'absolute',
        right: 25,
        top: 20,
    },
    textLeft: {
        position: 'absolute',
        left: 25,
        top: 20,
        fontSize: 25,

    },
    textRight: {
        position: 'absolute',
        right: 25,
        top: 25,
        fontSize: 16,
    },
    textMiddle: {
        position: 'absolute',
        right: 120,
        top: 45
    },
    iconAdd: {
        textAlign: 'center',
        paddingBottom: 60,
    },
    iconAlarmAdd: {
        textAlign: 'left',
        paddingLeft: 15,
        paddingBottom: 5,
        color: 'lightblue'
    },
    iconClose: {
        textAlign: 'center',
        paddingTop: 60
    }
})