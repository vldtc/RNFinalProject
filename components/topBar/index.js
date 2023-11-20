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
const {StatusBarManager} = NativeModules;

const STATUSBAR_HEIGHT = StatusBarManager.HEIGHT;

const TopBarItem = () => {
  const dispatch = useDispatch();
  const drawerState = useSelector(state => state.drawer.drawerState);
  return (
    <View style={styles.topBarContainer}>
      <View style={styles.topBarRow}>
        <TouchableOpacity
          onPress={() => {
            dispatch(updateDrawerState());
          }}>
          <Text>{drawerState ? 'Close' : 'Open'}</Text>
        </TouchableOpacity>
        <Text>Middle</Text>
        <Text>Right</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBarContainer: {
    backgroundColor: '#00aeff',
    borderTopStartRadius: Platform.OS === 'ios' ? 50 : 10,
    borderTopEndRadius: Platform.OS === 'ios' ? 50 : 10,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    width: '97%',
    marginTop: 5,
  },
  topBarRow: {
    marginTop: Platform.OS === 'ios' ? STATUSBAR_HEIGHT : 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
});

export default TopBarItem;
