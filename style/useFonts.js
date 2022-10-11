import * as Font from 'expo-font';

let useFonts;
export default useFonts = async () =>
    await Font.loadAsync({
        ub: require('../assets/fonts/Ubuntu-Bold.ttf'),
        um: require('../assets/fonts/Ubuntu-Medium.ttf'),
        ul: require('../assets/fonts/Ubuntu-Light.ttf'),
    });