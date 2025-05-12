import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  Alert,
  Animated,
  StatusBar,
  View,  // Asegurarse de importar View
} from 'react-native';

export default function App() {
  const [mensaje, setMensaje] = useState('');
  const opacity = useRef(new Animated.Value(1)).current;

  const handleContactar = () => {
    Alert.alert('Mensaje enviado', mensaje || 'No escribiste nada');
  };

  const handleVerPerfil = () => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 0.5,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#222" />
      <ImageBackground
        source={{ uri: 'https://i.imgur.com/UYiroysl.jpg' }}
        style={styles.background}
      >
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://i.imgur.com/TkIrScD.png' }}
            style={styles.avatar}
          />
          <Text style={styles.nombre}>Felipe Lipreti</Text>
          <Text style={styles.titulo}>Planero</Text>

          <TextInput
            style={styles.input}
            placeholder="Escribe tu mensaje..."
            placeholderTextColor="#aaa"
            value={mensaje}
            onChangeText={setMensaje}
          />

          <TouchableOpacity style={styles.boton} onPress={handleContactar}>
            <Text style={styles.botonTexto}>Contactar</Text>
          </TouchableOpacity>

          <Pressable onPress={handleVerPerfil}>
            <Animated.View style={[styles.perfilBtn, { opacity }]}>
              <Text style={styles.perfilTexto}>Ver Perfil</Text>
            </Animated.View>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  card: {
    margin: 20,
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 15,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nombre: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  titulo: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 10,
    marginBottom: 10,
    color: '#000',
  },
  boton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  botonTexto: {
    color: '#fff',
    fontSize: 16,
  },
  perfilBtn: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  perfilTexto: {
    color: '#fff',
    fontSize: 16,
  },
});
