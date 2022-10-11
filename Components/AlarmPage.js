
import { Text, View, Switch} from 'react-native';
import React, {useState} from 'react';
import {gStyle} from "../style/style";
import {Ionicons} from "@expo/vector-icons";



export default  function AlarmPage({route}) {

    const [activeAlarm, setActiveAlarm] = useState(false)
    const toggleSwitch = () => setActiveAlarm(previousState => !previousState);

    return (
        <View style={gStyle.alarmPage}>
            <View>
                <Text style={gStyle.iconLeft}>Будильник включен</Text>
                <Text style={gStyle.iconRight}>Будильник отключен</Text>
            </View>
            <Switch trackColor={{false: '#ffb', true: 'lightblue'}}
                    thumbColor={activeAlarm ? "#f5dd4b" : "#f4f3f4"}
                    onValueChange={toggleSwitch}
                    value={activeAlarm}

            />



            <Text style={gStyle.alarmPageText}>Дата срабатывания: {route.params.date}</Text>
            <Text style={gStyle.alarmPageText}>Время срабатывания: {route.params.time}</Text>
            <Text style={gStyle.alarmPageText}>Выбрано радио под номером: {route.params.radio_id}</Text>
            <Text style={gStyle.textMiddle}>ключ будильника: {route.params.key}</Text>

            <Ionicons name={"trash-outline"} size={60}  color="black"  style={gStyle.iconClose}  />
        </View>
    );
}
/*
export default function AlarmPage({route}) {

    return (
        <View >
            <Text>{route.params.alarm_id}</Text>
            <Text>{route.params.alarm_time}</Text>
            <Text>{route.params.alarm_date}</Text>
            <Text>{route.params.alarm_radio_id}</Text>
        </View>
    );
}*/
