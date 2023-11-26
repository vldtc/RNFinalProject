import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  updateCurrentScreen,
  updateDrawerState,
} from '../../features/drawerReducer/drawerReducer';
import LinearGradient from 'react-native-linear-gradient';
import {LanguageModal} from '../../components';
import {useTranslation} from 'react-i18next';

const DrawerMenu = () => {
  const dispatch = useDispatch();
  const drawerScreens = useSelector(state => state.drawer.drawerScreens);
  const currentScreen = useSelector(state => state.drawer.currentScreen);

  const [modalVisible, setModalVisible] = useState(false);

  const {t} = useTranslation();

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
          <Text style={styles.textMenu} key={index}>
            {t(element)}
          </Text>
        </TouchableOpacity>
      ))}
      <View style={styles.divider} />
      <TouchableOpacity
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
        style={[styles.menuItemContainer, {backgroundColor: '#ffffff'}]}>
        <Text style={styles.textMenu}>{t('changeLanguage')}</Text>
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
