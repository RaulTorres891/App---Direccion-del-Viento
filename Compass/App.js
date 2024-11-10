import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Card from './Components/Card';
import Compass from './Components/Compass';

export default App = () => {
  return (
    <View style={styles.container}>
      <Card 
        header={<Header text="Dirección del viento" />}
        footer={<Footer text="Nombre de alumnos y asesor" />}
        style={styles.card}
      >
        {/* Aquí va el diseño de la brújula o cualquier componente central */}
        <View style={styles.compass}>
          <Text style={styles.compassText}>🧭 Brújula</Text>
        </View>
      </Card>
    </View>
  );
};

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
});

