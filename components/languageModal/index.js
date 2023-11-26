import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import LanguageStorage from '../../helpers/LanguageStorage';

const LanguageModal = props => {
  const {t, i18n} = useTranslation();

  const changeLanguage = language => {
    i18n.changeLanguage(language);
    LanguageStorage.setValue('lng', language);
    props.setModalVisible();
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          props.setModalVisible();
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>{t('changeLanguage')}</Text>
            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: '#2196F3',
                marginBottom: 8,
              }}
            />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => changeLanguage('en')}>
              <Text style={styles.textStyle}>{t('en')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => changeLanguage('ro')}>
              <Text style={styles.textStyle}>{t('ro')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => changeLanguage('es')}>
              <Text style={styles.textStyle}>{t('es')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => changeLanguage('it')}>
              <Text style={styles.textStyle}>{t('it')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => changeLanguage('fr')}>
              <Text style={styles.textStyle}>{t('fr')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => changeLanguage('de')}>
              <Text style={styles.textStyle}>{t('de')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => changeLanguage('ru')}>
              <Text style={styles.textStyle}>{t('ru')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => changeLanguage('hu')}>
              <Text style={styles.textStyle}>{t('hu')}</Text>
            </TouchableOpacity>
            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: '#2196F3',
                marginBottom: 8,
                marginTop: 8,
              }}
            />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => props.setModalVisible()}>
              <Text style={styles.textStyle}>{t('cancel')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    zIndex: -1,
  },
  modalView: {
    width: '70%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: '60%',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LanguageModal;
