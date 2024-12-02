import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ini adalah teks di tengah layar</Text>
      <View style={styles.boxContainer}>
        <View style={[styles.box, { backgroundColor: 'orange' }]}></View>
        <View style={[styles.box, { backgroundColor: 'black' }]}></View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3', // Latar belakang abu-abu terang
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24, // Ukuran font 24
    color: 'blue', // Warna teks biru
    fontWeight: 'bold', // Gaya teks tebal (bold)
    marginBottom: 20, // Memberi jarak antara teks dan kotak
  },
  boxContainer: {
    flexDirection: 'row', // Menyusun kotak secara horizontal
    justifyContent: 'space-between', // Memberi jarak merata di antara kotak
    width: '80%', // Membatasi lebar container kotak
  },
  box: {
    width: 100,
    height: 100,
  },
});
