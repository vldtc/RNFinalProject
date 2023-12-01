import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Marker} from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CustomMarker = props => {
  const [isExtraVisible, setIsExtraVisible] = useState(false);
  const fNameInitial = props.fName;
  const lNameInitial = props.lName;
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
          <View style={styles.markerInfoContainer}>
            <Text
              style={{
                fontWeight: '600',
              }}>
              {props.fName} {props.lName}
            </Text>
            <Text style={{fontWeight: '200', fontSize: 12, marginVertical: 4}}>
              has a marker at
            </Text>
            <Text>{props.locationTitle}</Text>
          </View>
        )}
        <TouchableOpacity
          onPress={() => {
            setIsExtraVisible(!isExtraVisible);
          }}
          style={[
            styles.markerContainer,
            {backgroundColor: props.color || '#fff000'},
          ]}>
          <Text>
            {fNameInitial.charAt(0).toUpperCase()}
            {lNameInitial.charAt(0).toUpperCase()}
          </Text>
          <LinearGradient
            colors={['#ffffff0d', '#ffffff8e']}
            style={styles.highlightContainer}
          />
        </TouchableOpacity>
      </View>
    </Marker>
  );
};

const styles = StyleSheet.create({
  highlightContainer: {
    position: 'absolute',
    height: '70%',
    width: '120%',
    backgroundColor: '#ffffff2d',
    transform: [{rotate: '35deg'}, {translateY: 15}],
    zIndex: -1,
  },
  markerContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  markerInfoContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 5,
    padding: 8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 8,
    width: 'auto',
  },
});

export default CustomMarker;
