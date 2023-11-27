import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import FirestoreHelper from '../../helpers/FirestoreHelper';

const PeopleScreen = () => {
  const [userDetails, setUserDetails] = useState([]);

  const fetchUsers = async () => {
    try {
      const users = await FirestoreHelper.getAllUsers();
      setUserDetails(users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View style={styles.containerStyle}>
      <FlatList
        style={styles.flatListStyle}
        data={userDetails}
        keyExtractor={item => item.userId}
        renderItem={({item}) => (
          <View
            style={{
              backgroundColor: '#00bbff',
              marginHorizontal: 16,
              marginVertical: 8,
              padding: 16,
            }}>
            <Text>{item.email}</Text>
            <Text>
              {item.firstName} {item.lastName}
            </Text>
            <Text>{item.gender}</Text>
            <Text>{item.userColor}</Text>
            <Text>{item.userLocation}</Text>
            <Text>{item.age}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
  },
  flatListStyle: {
    marginBottom: 16,
  },
});

export default PeopleScreen;
