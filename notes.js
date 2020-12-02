import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './noteStyles';

function Notes(props) {
  return (
    <View style={styles.container} activeOpacity={0.5}>
      <View style={[styles.innerContainer, {borderColor: props.noteColor}]}>
        <TouchableOpacity style={styles.noteContainer}>
          <Text style={styles.noteText} numberOfLines={4}>
            {props.noteText}
          </Text>
        </TouchableOpacity>
        <View
          style={[styles.bottomContainer, {backgroundColor: props.noteColor}]}>
          <View style={styles.dateContainer}>
            <Text>{props.date}</Text>
          </View>
          <TouchableOpacity
            style={[styles.deleteButton, {backgroundColor: props.noteColor}]}
            activeOpacity={0}
            onPress={props.deleteMethod}>
            <Image
              source={require('./assets/img/bin.png')}
              style={styles.trashImg}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default Notes;
