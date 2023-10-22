import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

// Define la sección "Timer" de la Aplicacion
// "time" se definio en "App.jsx"
const Timer = ({time}) => {
  // Genera el formato correcto de "time"
  const formattedTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`;
  return (
    <View style={styles.timer}>
      <Text style={styles.time}>{formattedTime}</Text>
    </View>
  );
};

// Genera los estilos para "Timer"
const styles = StyleSheet.create({
  timer: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 155, 255, 1)',
    borderRadius: 10,
  },
  time: {
    color: 'white',
    fontSize: 70,
    fontWeight: 'bold',
  },
});

// Exporta "Timer" para su uso en la Aplicación
export default Timer;
