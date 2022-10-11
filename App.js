
import React from 'react';
import Main from './navigate';

/*
//import * as Font from 'expo-font';
//import AppLoading from 'expo-app-loading';
//import useFonts from "./style/useFonts";
*/


export default  function App() {
        return (
            <Main/>
        );
}
/*

//import styled from "styled-components";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import main from './navigate';


class AlarmProfile extends Component {
  state = {
    alarm_id: '',
    alarm_date: '',
    alarm_time: '',
    alarm_radio_id: '',
  }
  constructor(props) {
    super(props);
    this.getData();
  }

  onDeleteAlarm = async () => {
    try {
      this.setState({alarm_id: ''})
      //await AsyncStorage.clear()
      await AsyncStorage.removeItem('alarm_id')
    } catch (err) {
      console.log(err)
    }
  }

  onSubmit = async () => {
    try {
      await this.setState({alarm_id: '1'})
      //await AsyncStorage.multiSet([
      // ['alarm_id', this.state.alarm_id],
      // ['alarm_date', this.state.alarm_date],
      // ['alarm_time', this.state.alarm_time],
      // ['alarm_radio_id', this.state.alarm_radio_id]
      //])
      await AsyncStorage.setItem('Alarm', JSON.stringify(this.state))
    } catch (err) {
      console.log(err)
    }
  }
  getData = async () => {
    try {
      const alarm = await AsyncStorage.getItem('alarm')
      const Alarm = JSON.parse(alarm)
      //const alarm_date = await AsyncStorage.getItem('alarm_date')
      //const alarm_time = await AsyncStorage.getItem('alarm_time')
      //const alarm_radio_id = await AsyncStorage.getItem('alarm_radio_id')

      if (Alarm != null) {
        this.setState({...Alarm})
      }
      //if (alarm_date != null) {
      //  this.setState({alarm_date})
      //}
      //if (alarm_time != null) {
      //  this.setState({alarm_time})
      //}
      //if (alarm_radio_id != null) {
      //  this.setState({alarm_radio_id})
      //}
    } catch (e) {

    }
  }

  render() {
    return (
        <View>
          <Text>Будильники</Text>
          <Text>{(this.state.alarm_id, this.state.alarm_date, this.state.alarm_time, this.state.alarm_radio_id) }</Text>
          <Button title=' Подтвердить' onPress={this.onSubmit}/>
          <TouchableOpacity>
            <Text>(Будильник, {this.state.alarm_id})</Text>
            <Text>{(this.state.alarm_id, this.state.alarm_date, this.state.alarm_time, this.state.alarm_radio_id) }</Text>
              <Text>{this.state.alarm_id}</Text>
          </TouchableOpacity>

          <Button title="Удалить будильник" onPress={this.onDeleteAlarm}/>

        </View>
    )
  }

}
*/



