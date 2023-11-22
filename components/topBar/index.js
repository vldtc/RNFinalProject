import {
  View,
  Text,
  StyleSheet,
  Platform,
  NativeModules,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {updateDrawerState} from '../../features/drawerReducer/drawerReducer';
import {updateLoginState} from '../../features/loginReducer/loginReducer';
const {StatusBarManager} = NativeModules;
import auth from '@react-native-firebase/auth';

const STATUSBAR_HEIGHT = StatusBarManager.HEIGHT;

const TopBarItem = () => {
  const dispatch = useDispatch();
  const drawerState = useSelector(state => state.drawer.drawerState);
  const currentScreen = useSelector(state => state.drawer.currentScreen);
  return (
    <View style={styles.topBarContainer}>
      <View style={styles.topBarRow}>
        <TouchableOpacity
          style={{flex: 1, textAlign: 'left'}}
          onPress={() => {
            dispatch(updateDrawerState());
          }}>
          <Text>{drawerState ? 'Close' : 'Open'}</Text>
        </TouchableOpacity>
        <Text style={styles.titleText}>{currentScreen}</Text>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => {
            dispatch(updateLoginState(false));
            auth().signOut();
          }}>
          <Text style={{textAlign: 'right'}}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBarContainer: {
    backgroundColor: '#00aeff',
    borderTopStartRadius: Platform.OS === 'ios' ? 52 : 10,
    borderTopEndRadius: Platform.OS === 'ios' ? 52 : 10,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    width: '97.5%',
    marginTop: 5,
  },
  topBarRow: {
    marginTop: Platform.OS === 'ios' ? STATUSBAR_HEIGHT : 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  titleText: {
    flex: 1,
    color: '#fff',
    fontSize: 22,
    fontWeight: '300',
    textAlign: 'center',
  },
});

export default TopBarItem;
