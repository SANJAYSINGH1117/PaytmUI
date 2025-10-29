import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function OrderPlacement() {
  const [symbol, setSymbol] = useState('');
  const [qty, setQty] = useState('');

  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Order Placement</Text>
      <TextInput placeholder="Symbol" value={symbol} onChangeText={setSymbol} style={{ borderBottomWidth: 1, marginVertical: 5 }} />
      <TextInput placeholder="Quantity" value={qty} onChangeText={setQty} keyboardType="numeric" style={{ borderBottomWidth: 1, marginVertical: 5 }} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
        <Button title="BUY" color="#00b386" onPress={() => alert(`Buy ${qty} of ${symbol}`)} />
        <Button title="SELL" color="red" onPress={() => alert(`Sell ${qty} of ${symbol}`)} />
      </View>
    </View>
  );
}
