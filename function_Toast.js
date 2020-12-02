import {ToastAndroid} from 'react-native';

export default function Toast(message) {
  ToastAndroid.show(message, ToastAndroid.SHORT);
}
