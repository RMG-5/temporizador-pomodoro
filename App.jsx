import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  Text,
  View,
  SafeAreaView,
  Platform,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import Header from './src/components/Header';
import Timer from './src/components/Timer';
import PlayStop from './src/components/PlayStop';

// Almacena los colores para los fondos de pantalla
const colors = ['rgb(40, 40, 40)', 'rgb(8, 32, 128)', 'rgb(40, 23, 84)'];

// Contiene la Aplicación
function App() {
  // Sirve para activar y detener el temporizador
  const [isActive, setIsActive] = useState(false);
  // Sirve para darle un tiempo de inicio al temporizador
  const [time, setTime] = useState(1500);
  // Sirve para conocer el boton de "Header" activo
  const [currentTime, setCurrentTime] = useState(0);

  // "useColorScheme" indica el esquema de color preferido por el usuario
  const isDarkMode = useColorScheme() === 'dark';

  // Actualiza el temporizador segun el valor de "isActive"
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    // Cuando "time" llegue a 00:00 detiene el temporizador
    if (time === 0) {
      setIsActive(false);
      // Al detener el temporizador reinicia el valor de "time"
      setTime(currentTime === 0 ? 1500 : currentTime === 1 ? 300 : 900);
    }

    // Funcio de limpieza de "useEffect"
    return () => clearInterval(interval);
  }, [time, currentTime, isActive]);

  return (
    <>
      {/* StatusBar es la barra superior de los telefonos. */}
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        // Permite cambiar el "backgroundColor" segun el valor de "currentTime"
        backgroundColor={colors[currentTime]}
      />
      {/* SafeAreaView es un componente exclusivo de "iOS". */}
      <SafeAreaView style={styles.container}>
        {/* Permite cambiar el "backgroundColor" segun el valor de "currentTime" */}
        <View style={[styles.viewApp, {backgroundColor: colors[currentTime]}]}>
          <Text style={styles.title}>Temporizador Pomodoro</Text>
          <Header
            isActive={isActive}
            setIsActive={setIsActive}
            time={time}
            setTime={setTime}
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
          />
          <Timer time={time} />
          <PlayStop isActive={isActive} setIsActive={setIsActive} />
        </View>
      </SafeAreaView>
    </>
  );
}

// Genera los estilos para la "App"
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewApp: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: Platform.OS === 'android' && 10, // Solo se aplica a dispositivos "Android".
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

// Exporta la "App"
export default App;
