import React, {Component} from 'react';
import {View, TextInput, Button, AsyncStorage} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';

export default class App extends Component {
  state = {
    email: '',
    password: '',
  };

  simpanData() {
    let newData = {
      email: this.state.email,
      password: this.state.password,
    };
    AsyncStorage.setItem('dataEmail', JSON.stringify(newData)).catch((err) =>
      console.log(err),
    );
  }

  ambilData() {
    AsyncStorage.getItem('dataEmail')
      .then((responnya) => {
        console.log('Sebelum json parse = ' + responnya);
        let hasil = JSON.parse(responnya);
        console.log('Setelah json parse = ' + hasil);
        this.setState({
          email: hasil.email,
          password: hasil.password,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <View>
        <TextInput
          value={this.state.email}
          onChangeText={(text) => this.setState({email: text})}
          placeholder={'Email'}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(text) => this.setState({password: text})}
          placeholder={'Password'}
        />
        <Button title={'Simpan Data'} onPress={() => this.simpanData()} />
        <Button title={'Tampilkan Data'} onPress={() => this.ambilData()} />
      </View>
    );
  }
}
