import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  updateCurrentScreen,
  updateDrawerState,
} from '../../features/drawerReducer/drawerReducer';
import {updateLoginState} from '../../features/loginReducer/loginReducer';
import LinearGradient from 'react-native-linear-gradient';
import {LanguageModal} from '../../components';
import {useTranslation} from 'react-i18next';
import auth from '@react-native-firebase/auth';

const DrawerMenu = () => {
  const dispatch = useDispatch();
  const drawerScreens = useSelector(state => state.drawer.drawerScreens);
  const currentScreen = useSelector(state => state.drawer.currentScreen);

  const [modalVisible, setModalVisible] = useState(false);

  const {t, i18n} = useTranslation();

  const currentLanguage = i18n.language;

  return (
    <LinearGradient colors={['#00bbff', '#001eff']} style={styles.drawerView}>
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
          <Text
            style={[
              styles.textMenu,
              {color: currentScreen === element ? 'black' : 'white'},
            ]}
            key={index}>
            {t(element)}
          </Text>
        </TouchableOpacity>
      ))}
      <View style={styles.divider} />
      <View
        style={{
          backgroundColor: 'white',
          padding: 8,
          borderRadius: 8,
          marginBottom: 8,
        }}>
        <Text style={{marginStart: 8, fontWeight: '300'}}>
          {t(currentLanguage)}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
        style={[styles.menuItemContainer, {backgroundColor: '#ffffff'}]}>
        <Text style={styles.textMenu}>{t('changeLanguage')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(updateLoginState(false));
          dispatch(updateDrawerState());
          auth().signOut();
        }}
        style={[styles.menuItemContainer, {backgroundColor: '#ffffff'}]}>
        <Text style={styles.textMenu}>{t('signOut')}</Text>
      </TouchableOpacity>

      <LanguageModal
        modalVisible={modalVisible}
        setModalVisible={() => {
          setModalVisible(!modalVisible);
        }}
      />
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
