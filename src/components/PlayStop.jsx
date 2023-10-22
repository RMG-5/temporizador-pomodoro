import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

// Define el boton "PlayStop" de la Aplicacion
// "isActive" se definio en "App.jsx"
const PlayStop = ({isActive, setIsActive}) => {
  // Alterna el valor de "isActive" en cada clic
  const handlePress = () => {
    setIsActive(!isActive);
  };

  return (
    // "TouchableOpacity" es un contenedor que se atenua al hacer clic en el
    <TouchableOpacity onPress={handlePress} style={styles.playStop}>
      <Text style={styles.textButton}>{isActive ? 'STOP' : 'PLAY'}</Text>
    </TouchableOpacity>
  );
};

// Genera los estilos para "PlayStop"
const styles = StyleSheet.create({
  playStop: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
    backgroundColor: 'rgba(0, 155, 255, 1)',
    borderRadius: 10,
  },
  textButton: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

// Exporta "PlayStop" para su uso en la Aplicación
export default PlayStop;
