import firestore from '@react-native-firebase/firestore';

class FirestoreHelper {
  // Function to fetch all users
  static async getAllUsers() {
    try {
      const users = [];
      const querySnapshot = await firestore().collection('UserProfile').get();
      querySnapshot.forEach(documentSnapshot => {
        const user = documentSnapshot.data();
        const id = documentSnapshot.id;
        users.push({id, ...user});
      });
      console.log('Data retrieved', users);
      return users;
    } catch (error) {
      console.error('Error fetching users!', error);
      return [];
    }
  }

  static async addUser(userId, userProfile, onSuccess) {
    try {
      await firestore().collection('UserProfile').doc(userId).set(userProfile);
      onSuccess();
    } catch (e) {
      console.error('Error adding user', e);
      return null;
    }
  }

  static async getUserProfile(userId) {
    try {
      const documentSnapshot = await firestore()
        .collection('UserProfile')
        .doc(userId)
        .get();

      if (documentSnapshot.exists) {
        const userData = documentSnapshot.data();
        console.log('Data received', userData);
        return userData;
      } else {
        console.log('Document does not exist');
        return null;
      }
    } catch (e) {
      console.error('Error fetching user data', e);
      return null;
    }
  }
}

export default FirestoreHelper;
