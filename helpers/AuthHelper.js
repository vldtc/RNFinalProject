import auth from '@react-native-firebase/auth';
import {
  updateLoginState,
  updateAnnouncement,
  updateUserDetails,
} from '../features/loginReducer/loginReducer';
import FirestoreHelper from './FirestoreHelper';

class AuthHelper {
  static async signInUser(dispatch, email, password, onSuccess) {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      dispatch(updateLoginState(true));
      onSuccess();
    } catch (e) {
      console.error('Error signing in:', e.message);
      dispatch(
        updateAnnouncement('Login failed! Password or user is invalid.'),
      );
      setTimeout(() => {
        dispatch(updateAnnouncement(''));
      }, 5000);
    }
  }

  static async registerUser(dispatch, email, password, onSuccess) {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      dispatch(updateAnnouncement('Registration success! Please login now.'));
      setTimeout(() => {
        dispatch(updateAnnouncement(''));
      }, 5000);
      onSuccess();
    } catch (e) {
      console.error('Error registering user:', e.message);
      dispatch(updateAnnouncement(e.message));
      setTimeout(() => {
        dispatch(updateAnnouncement(''));
      }, 5000);
    }
  }
}

export default AuthHelper;
