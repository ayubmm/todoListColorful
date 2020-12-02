import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Notes from './notes';
import LinearGradient from 'react-native-linear-gradient';
import InputModal from './InputModal';

function App() {
  const [NoteArray, setNoteArray] = useState([]);
  const [modalVisibility, setmodalVisibility] = useState(false);
  const [Splash, setSplash] = useState(true);

  useEffect(() => {
    //Run once when mounting
    console.log('Getting Data from AsyncStorage..');
    AsyncStorage.getItem('dataJSON')
      .then((response) => {
        if (response !== null) {
          console.log(`Current Notes Are : ${response}`);
          setNoteArray(JSON.parse(response));
        } else {
          console.log('AsyncStorage returns null or undefined');
        }
      })
      .catch((err) => {
        console.log(err);
        alert('Something went wrong,\n Please reload');
      });
    setTimeout(() => {
      setSplash(false);
    }, 10000);
  }, []);

  useEffect(() => {
    let newArrNotes = JSON.stringify(NoteArray);
    console.log(
      'CONSOLE of USE-EFFECT UPDATING, THE CURRENT ARRAY IS = ' + newArrNotes,
    );
    AsyncStorage.setItem('dataJSON', newArrNotes).catch((err) => {
      console.log(err);
      alert('Something went wrong,\nPlease reload.');
    });
  }, [NoteArray]);

  const renderItem = ({item, index}) => {
    return (
      <Notes
        noteText={item.note}
        deleteMethod={() => {
          let currNotes = [...NoteArray];
          currNotes.splice(index, 1);
          setNoteArray([...currNotes]);
        }}
        noteColor={item.noteColor}
        date={item.date}
      />
    );
  };

  if (Splash) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>My Notes</Text>
        <Image
          style={styles.splashIcon}
          source={require('./assets/img/todo_icon.png')}
        />
        <ActivityIndicator size={60} color={'#0f89e6'} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <InputModal
          modalVisibility={modalVisibility}
          setmodalVisibility={setmodalVisibility}
          NoteArray={NoteArray}
          setNoteArray={setNoteArray}
        />
        <LinearGradient
          colors={['#3f34b7', '#28207e']}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}
          style={styles.header}>
          <Text style={styles.headerText}>My Notes</Text>
        </LinearGradient>
        <FlatList
          data={NoteArray}
          renderItem={renderItem}
          keyExtractor={(item, index) => {
            return index + item;
          }}
          contentContainerStyle={{paddingBottom: 75}}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            setmodalVisibility(!modalVisibility);
          }}>
          <Image
            source={require('./assets/img/add_button.png')}
            style={styles.addButtonImg}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashIcon: {
    height: '40%',
    resizeMode: 'contain',
  },
  splashText: {
    color: '#0b5b98',
    fontSize: 85,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#d9d9d9',
  },
  header: {
    height: (Dimensions.get('window').height * 7) / 100,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    padding: 5,
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 29,
    color: 'white',
    fontWeight: 'bold',
  },
  addButton: {
    height: 75,
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
    alignSelf: 'center',
    backgroundColor: '#28207e',
    borderRadius: 420,
  },
  addButtonImg: {
    height: 45,
    width: 45,
    resizeMode: 'contain',
  },
});
