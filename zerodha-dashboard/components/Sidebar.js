import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Sidebar({ onSelect }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>KITE</Text>
      {['Dashboard', 'Portfolio', 'Orders'].map((item) => (
        <TouchableOpacity key={item} onPress={() => onSelect(item)}>
          <Text style={styles.item}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: 100, backgroundColor: '#111', paddingTop: 40 },
  logo: { color: '#00b386', fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  item: { color: '#fff', paddingVertical: 10, textAlign: 'center' },
});
