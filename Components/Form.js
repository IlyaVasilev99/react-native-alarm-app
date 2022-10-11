import React,  from "react";
import { View, TextInput} from "react-native";
import {gStyle} from "../style/style";
import {Formik} from "formik";
import {Ionicons} from "@expo/vector-icons";
//import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Form({addArticle}) {

/*class AlarmProfile extends Component {
    state = {key: '', time: '', date: '', radio_id: ''}

    constructor(props) {
        super(props);
    }

    onSubmit = async () => {
        try {
            await this.setState({key: '1'})
            await AsyncStorage.setItem('alarmprofile', JSON.stringify({
                date: this.state.date,
                time: this.state.time,
                radio_id: this.state.radio_id
            }))
        } catch (err) {
            console.log(err)
        }
    }
    getData = async () => {
        try {
            const alarmprofile = await AsyncStorage.getItem('alarmprofile')
            const alarmProfile = JSON.parse(alarmprofile)
            if (alarmProfile !== null) {
                this.setState({...alarmProfile})
            }
        } catch (e) {
        }
    }

}*/

    return (
            <View>

            <Formik initialValues={{ time: '', date: '', radio_id: ''}} onSubmit={(values, action) => {
                addArticle(values);
                console.log(values)
                action.resetForm();}}>
                {(props) => (<View style={gStyle.alarmPageText}>
                        <Ionicons name={"radio-outline"}  size={60} color="lightblue" style={gStyle.iconAlarmAdd}/>
                            <TextInput style={gStyle.modalWindowInput}
                                value={props.values.radio_id}
                                placeholder='Введите номер радио'
                                onChangeText={props.handleChange('radio_id')}/>
                            <View>
                                <Ionicons name={"alarm-outline"}  size={50} style={gStyle.iconAlarmAdd}/>
                            </View>
                            <TextInput style={gStyle.modalWindowInput}
                                       value={props.values.time}
                                       placeholder='Введите время (например 23:55)'
                                       onChangeText={props.handleChange('time')}/>
                    <View>
                        <Ionicons name={"calendar-outline"}  size={60} color="lightblue" style={gStyle.iconAlarmAdd}/>
                    </View>
                            <TextInput style={gStyle.modalWindowInput}
                                       value={props.values.date}
                                       placeholder='Введите дату (например 31/12/2022)'
                                       onChangeText={props.handleChange('date')}/>
                            <View >
                                <Ionicons name={"add-circle-outline"} size={80}  color="green"  style={gStyle.iconLeft}  onPress={props.handleSubmit} />

                            </View>
                    </View>)}
            </Formik>
            </View>


    );
}
