import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Marker} from 'react-native-maps';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CustomMarker = props => {
  const [isExtraVisible, setIsExtraVisible] = useState(false);
  return (
    <Marker
      key={props.index}
      coordinate={{
        latitude: props.latitude,
        longitude: props.longitude,
      }}
      onPress={() => {
        setIsExtraVisible(!isExtraVisible);
      }}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        {isExtraVisible && (
          <View
            style={{
              padding: 16,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              marginBottom: 8,
            }}>
            <Text>
              {props.fName} {props.lName} set marker at
            </Text>
            <Text>{props.locationTitle}</Text>
          </View>
        )}
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            backgroundColor: props.color || '#fff000',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>
            {props.fName}
            {props.lName}
          </Text>
        </View>
      </View>
    </Marker>
  );
};

export default CustomMarker;
