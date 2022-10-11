import { Text, View, TouchableOpacity, FlatList, Modal} from 'react-native';
import React, {useState} from 'react';
import {gStyle} from "../style/style";
import {Ionicons} from "@expo/vector-icons";
import Form from "./Form";

/*export default  function Main() {
    return (
        <View style={gStyle.main}>
            <Text style={gStyle.title}>__Все Работает</Text>
        </View>
    );
}*/

export default function Main({navigation}) {



    const [AlarmsList, setAlarm] = useState([
        { time: '15:23', date: '26/10/2022', radio_id: '2', key: '1' },
        {time: '16:23', date: '14/10/2022', radio_id: '1', key: '2' },]
    )
    const [modalWindow, setModalWindow] = useState(false)

    const addArticle = (article) => {
        setAlarm((list) => {
            article.key = Math.random().toString();
            return [
                article,
                ...list
            ]
        });
        setModalWindow(false);
    }

    return (
        <View style={gStyle.main}>
            <Modal visible={modalWindow} >
                <View style={gStyle.modalWindowStyle}>

                    <Form addArticle={addArticle}/>
                    <Ionicons name={"close-circle-outline"} size={80} color='red' style={gStyle.iconCloseRight} onPress={() => setModalWindow(false)} />
                </View>
            </Modal>
            <FlatList data={AlarmsList} renderItem={({item}) => (
                <TouchableOpacity style={gStyle.mainAlarms } onPress={ () => navigation.navigate('AlarmPage', item) }>
                    <Text style={gStyle.textLeft}>{item.time}</Text>
                    <Text style={gStyle.textRight}>{item.date}</Text>
                    <Text style={gStyle.textMiddle}>Выбрано радио {item.radio_id}</Text>
                </TouchableOpacity>
            )}/>
            <View>
                <Ionicons name={"add-circle-outline"} size={60} color="#ffb" style={gStyle.iconAdd}  onPress={() => setModalWindow(true)}/>
            </View>

        </View>
    );
}
