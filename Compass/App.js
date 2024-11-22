import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Compass from './Components/Compass';
// import {socket} from './socket';

export default App = () => {
  const [data, setData] = useState('');
  const [connected, setConnected] = useState(false);

  //Alternativa el useEffect principal
  // useEffect(() => {
  //   socket.on('message', (mensaje) => console.log('Dato recibido: ', mensaje))
  // }, [])

  useEffect(() => {

    const ws = new WebSocket('ws://192.168.4.1:8081');

    ws.onopen = () => {
      console.log('Conectado al servidor WebSocket');
      setConnected(true);
    };

    ws.onmessage = (event) => {
      console.log('Mensaje recibido:', event.data);
      setData(event.data); 
    };

    ws.onclose = () => {
      console.log('Desconectado del servidor WebSocket');
      setConnected(false);
    };

    ws.onerror = (error) => {
      console.error('Error en WebSocket:', error.message);
    };

    return () => ws.close();
  }, []);

  return (
    <View style={styles.container}>
      <Header text="Dirección del viento" style={styles.header} />
     {
      connected && 
      <Compass directionCode={data} />
     } 
      <Text style={styles.dataText}>
        {connected
          ? `Datos del ESP8266: ${data || 'Esperando datos...'}`
          : 'Conectando al servidor WebSocket...'}
      </Text>
      <Footer text="Creadores y asesores:" style={styles.footer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  header: { marginTop: 10 },
  footer: { marginBottom: 10 },
  dataText: { color: '#fff', fontSize: 16, marginTop: 20 },
});

