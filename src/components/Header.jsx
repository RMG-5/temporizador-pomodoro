import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

// Almacena los valores de pantalla para los botones del "Header"
const options = ['Session', 'Short Break', 'Long Break'];

// Define la sección "Header" de la Aplicación
// "isActive", "time" y "currentTime" se definieron en "App.jsx"
const Header = ({
  isActive,
  setIsActive,
  time,
  setTime,
  currentTime,
  setCurrentTime,
}) => {
  const handlePress = index => {
    // Genera el valor de "time" de acuerdo al "index" de cada boton
    setTime(index === 0 ? 1500 : index === 1 ? 300 : 900);
    // Genera el valor de "currentTime" de acuerdo al "index" de cada boton
    setCurrentTime(index);

    // Si se presiona un boton del "Header" diferente al actual detiene el temporizador
    if (index !== currentTime) {
      setIsActive(false);
      // Si se presiona el boton actual del "Header" no hace nada
    } else {
      setIsActive(isActive);
      setTime(time);
    }
  };

  return (
    <View style={styles.header}>
      {/* Genera los botones del "Header" con la información de "options" */}
      {options.map((item, index) => (
        // "TouchableOpacity" es un contenedor que se atenua al hacer clic en el
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(index)}
          style={[
            currentTime === index
              ? [styles.button, styles.buttonActive] // [] Permite agregar más de un estilo
              : styles.button,
          ]}>
          <Text style={styles.textButton}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

// Genera los estilos para "Header"
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    width: '33.33%',
    marginVertical: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonActive: {
    backgroundColor: 'rgba(0, 155, 255, 1)',
  },
  textButton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

// Exporta "Header" para su uso en la Aplicación
export default Header;
