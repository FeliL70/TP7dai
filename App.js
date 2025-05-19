import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  StatusBar,
  View,
} from "react-native";

export default function App() {
  const [mensaje, handleMensaje] = useState("");
  const [carga, setCarga] = useState(true);

  const handleContactar = () => {
   if(mensaje===""){
    alert("no escribiste nada")
   }
   else{
    alert(mensaje)
   }
  };

  const handleVerPerfil = () => {

  };

  useEffect(() => {
    setTimeout(() => {
      setCarga(false);
    }, 1000);
  }, []);

  if (carga) {
    return (
      <SafeAreaView style={styles.splashContainer}>
        <Text style={styles.splashText}>Cargando</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#222" barStyle="light-content" />
      <ImageBackground
        source={{
          uri: "https://media.tycsports.com/files/2020/07/15/107186/estudiantes-libertadores-2009.jpg",
        }}
        style={styles.background}
      >
        <View style={styles.card}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbH3mcr4zTf6JB7212FI_XYISZ51Zl8WTlg&s",
            }}
            style={styles.foto}
          />
          <Text style={styles.nombre}>Felipe Lipreti</Text>
          <Text style={styles.titulo}>Jugador</Text>

          <TextInput
            style={styles.input}
            placeholder="Escribí lo que quieras"
            placeholderTextColor="#aaa"
            onChangeText={handleMensaje}
            value={mensaje}
          />

          <TouchableOpacity style={styles.boton} onPress={handleContactar}>
            <Text style={styles.botonTexto}>Contactar</Text>
          </TouchableOpacity>

          <Pressable
            onPress={handleVerPerfil}
            style={({ pressed }) => [
              styles.perfil,
              { opacity: pressed ? 0.7 : 1, backgroundColor: pressed ? "#388E3C" : "#4CAF50" },
            ]}
          >
            <Text style={styles.perfilTexto}>Ver Perfil</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  splashText: {
    color: "#fff",
    fontSize: 24,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  card: {
    margin: 20,
    padding: 20,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 15,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nombre: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  titulo: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    borderRadius: 10,
    marginBottom: 10,
    color: "#000",
  },
  boton: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
  botonTexto: {
    color: "#fff",
    fontSize: 16,
  },
  perfil: {
    padding: 10,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  perfilTexto: {
    color: "#fff",
    fontSize: 16,
  },
});
