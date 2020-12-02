import React from 'react';
import {Modal, View, Text, Button, TouchableOpacity} from 'react-native';

export default function NoteColors(props) {
  return (
    <Modal
      visible={props.colormodalVisibility}
      animationType={'slide'}
      onRequestClose={() =>
        props.setcolormodalVisibility(!props.colormodalVisibility)
      }
      transparent={true}>
      <TouchableOpacity
        onPress={() =>
          props.setcolormodalVisibility(!props.colormodalVisibility)
        }
        style={{
          height: '70%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      />
      <View
        style={{
          height: '30%',
          width: '100%',
          backgroundColor: '#dbdbdbd9',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <Button
          title={'Make it green'}
          color={'green'}
          onPress={() => props.setNoteColor('green')}
        />
        <Button
          title={'Make it teal'}
          color={'teal'}
          onPress={() => props.setNoteColor('teal')}
        />
      </View>
    </Modal>
  );
}
