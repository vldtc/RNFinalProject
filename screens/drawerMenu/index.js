import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useId} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  updateCurrentScreen,
  updateDrawerState,
} from '../../features/drawerReducer/drawerReducer';
import LinearGradient from 'react-native-linear-gradient';

const DrawerMenu = () => {
  const dispatch = useDispatch();
  const drawerScreens = useSelector(state => state.drawer.drawerScreens);
  const currentScreen = useSelector(state => state.drawer.currentScreen);
  return (
    <LinearGradient
      colors={['#00bbff', '#424242']}
      // start={{x: 0, y: 0}}
      // end={{x: 1, y: 1}}
      style={styles.drawerView}>
      {drawerScreens.map((element, index) => (
        <TouchableOpacity
          style={[
            styles.menuItemContainer,
            {
              backgroundColor:
                currentScreen === element ? '#ffffff' : '#ffffff48',
            },
          ]}
          onPress={() => {
            dispatch(updateCurrentScreen(element));
            dispatch(updateDrawerState());
          }}>
          <Text style={styles.textMenu} key={index}>
            {element}
          </Text>
        </TouchableOpacity>
      ))}
      <View style={styles.divider} />
      <TouchableOpacity
        style={[styles.menuItemContainer, {backgroundColor: '#ffffff'}]}>
        <Text style={styles.textMenu}>Change language</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  drawerView: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    //backgroundColor: '#00bbff',
    justifyContent: 'center',
    padding: 16,
  },
  menuItemContainer: {
    marginBottom: 8,
    borderTopStartRadius: 8,
    borderBottomStartRadius: 8,
  },
  textMenu: {
    padding: 16,
    fontSize: 16,
    fontWeight: '500',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ffffff',
    marginBottom: 8,
  },
});
export default DrawerMenu;
