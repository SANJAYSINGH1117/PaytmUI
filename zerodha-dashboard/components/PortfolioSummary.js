import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const data = [
  { symbol: 'TCS', qty: 5, price: 3500, pnl: '+1.2%' },
  { symbol: 'INFY', qty: 3, price: 1470, pnl: '-0.8%' },
];

export default function PortfolioSummary() {
  return (
    <View>
      <Text style={styles.header}>Portfolio Summary</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.symbol}>{item.symbol}</Text>
            <Text>{item.qty} Qty</Text>
            <Text>₹{item.price}</Text>
            <Text style={{ color: item.pnl.includes('-') ? 'red' : 'green' }}>{item.pnl}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: { fontSize: 16, fontWeight: 'bold', marginVertical: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
  symbol: { fontWeight: 'bold' },
});
