import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Compass = () => {
  return (
    <View style={styles.compassContainer}>
   
      <Text style={[styles.directionText, styles.northText]}>N</Text>
      <Text style={[styles.directionText, styles.southText]}>S</Text>
      <Text style={[styles.directionText, styles.eastText]}>E</Text>
      <Text style={[styles.directionText, styles.westText]}>W</Text>

    
      <Text style={[styles.directionText, styles.northeastText]}>NE</Text>
      <Text style={[styles.directionText, styles.northwestText]}>NW</Text>
      <Text style={[styles.directionText, styles.southeastText]}>SE</Text>
      <Text style={[styles.directionText, styles.southwestText]}>SW</Text>

   
      <View style={styles.needleContainer}>
        <View style={styles.needle} />
      </View>

    
      <View style={styles.degreeMarkers}>
        {[...Array(36)].map((_, i) => (
          <View key={i} style={styles.degreeMark(i * 10)}>
            <Text style={styles.degreeText}>{i * 10}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Compass;

const styles = StyleSheet.create({
  compassContainer: {
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: '#1e2b38',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderWidth: 2,
    borderColor: '#888',
  },
  directionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    position: 'absolute',
  },
  northText: { top: 10, alignSelf: 'center' },
  southText: { bottom: 10, alignSelf: 'center' },
  eastText: { right: 10, alignSelf: 'center' },
  westText: { left: 10, alignSelf: 'center' },
  northeastText: { top: 40, right: 40 },
  northwestText: { top: 40, left: 40 },
  southeastText: { bottom: 40, right: 40 },
  southwestText: { bottom: 40, left: 40 },
  needleContainer: {
    position: 'absolute',
    width: 10,
    height: '70%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  needle: {
    width: 4,
    height: '70%',
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
  },
  degreeMarkers: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  degreeMark: (rotation) => ({
    position: 'absolute',
    transform: [{ rotate: `${rotation}deg` }],
    justifyContent: 'center',
    alignItems: 'center',
  }),
  degreeText: {
    fontSize: 10,
    color: '#bbb',
    position: 'absolute',
    top: 5,
  },
});
