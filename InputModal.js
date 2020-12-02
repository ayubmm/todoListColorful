import React, {useState} from 'react';
import {Modal, View, Button, TextInput, StyleSheet} from 'react-native';
import NoteColors from './NoteColors';
import addNote from './function_addNote';
import GetDate from './days';
import Toast from './function_Toast';

function Input(props) {
  return (
    <TextInput
      placeholder={'Write your notes'}
      multiline={true}
      value={props.Note}
      onChangeText={(text) => props.setNote(text)}
      style={styles.textInput}
    />
  );
}

export default function InputModal(props) {
  const [Note, setNote] = useState('');
  const [NoteColor, setNoteColor] = useState('tan');
  const [colormodalVisibility, setcolormodalVisibility] = useState(false);
  return (
    <Modal
      animationType={'slide'}
      visible={props.modalVisibility}
      transparent={true}
      onRequestClose={() => props.setmodalVisibility(!props.modalVisibility)}>
      <View style={styles.container}>
        <View style={{...styles.noteContainer, backgroundColor: NoteColor}}>
          <Input Note={Note} setNote={setNote} />

          <NoteColors
            colormodalVisibility={colormodalVisibility}
            setcolormodalVisibility={setcolormodalVisibility}
            setNoteColor={setNoteColor}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button
              title={'Change Color'}
              color={NoteColor}
              onPress={() => setcolormodalVisibility(!colormodalVisibility)}
            />
          </View>
          <View style={styles.button}>
            <Button
              title={'Save Note'}
              color={NoteColor}
              onPress={() => {
                if (Note) {
                  addNote(
                    Note,
                    props.NoteArray,
                    props.setNoteArray,
                    GetDate,
                    NoteColor,
                    setNote,
                  );
                  setNote('');
                } else {
                  Toast('Write your note first!');
                }
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column-reverse',
    backgroundColor: 'rgba(56, 56, 56, 0.79)',
    alignItems: 'center',
    flex: 1,
  },
  noteContainer: {
    marginVertical: 10,
    padding: 7,
    borderRadius: 15,
    height: '75%',
    width: '100%',
  },
  textInput: {
    backgroundColor: '#fafafa',
    fontSize: 19,
    borderRadius: 15,
    textAlignVertical: 'top',
    flex: 1,
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 160,
    margin: 10,
  },
});
