import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from './Components/Header'
import Footer from './Components/Footer';
import Card from './Components/Card';

export default App = () => {
  return (
    <View style={styles.container}>
      <Card 
        header={<Header text="Direccion del viento" />}
        footer={<Footer text="Nombre de alumnos y asesor" />}
        style={styles.card}>        
        <View style={styles.compass}> {/* De este view al otro view se añade la brujula */}
          <Text style={styles.compassText}>🧭 Brújula</Text>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    height: 830, //Este es el tamaño de la carta
  },
  compass: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  compassText: {
    fontSize: 24,
    color: '#333',
  },
});
