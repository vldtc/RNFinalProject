import AsyncStorage from '@react-native-async-storage/async-storage';

class LanguageStorage {
  setValue = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log('Default language has been set', value);
    } catch (exception) {
      console.log(exception);
    }
  };

  getValue = async key => {
    try {
      const value = await AsyncStorage.getItem(key);

      return value;
    } catch (exception) {
      console.log(exception);
    }
  };
}

export default new LanguageStorage();
