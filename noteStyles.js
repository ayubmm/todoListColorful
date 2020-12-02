import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    height: (Dimensions.get('window').height * 20) / 100,
    width: Dimensions.get('window').width,
    backgroundColor: '#d9d9d9',
  },
  innerContainer: {
    margin: 5,
    borderWidth: 5,
    borderColor: 'darkorange',
    borderRadius: 10,
  },
  noteContainer: {
    width: '100%',
    height: '75%',
    padding: 3,
    backgroundColor: '#eee',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  bottomContainer: {
    flexDirection: 'row',
    height: '25%',
    paddingLeft: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButton: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateContainer: {
    width: '85%',
  },
  trashImg: {
    height: '90%',
    width: '90%',
    resizeMode: 'contain',
  },
});
