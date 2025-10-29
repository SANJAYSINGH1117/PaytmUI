import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { View, Text, Dimensions } from 'react-native';

export default function ChartSection() {
  return (
    <View>
      <Text style={{ color: '#333', fontSize: 16, marginBottom: 5 }}>NIFTY 50</Text>
      <LineChart
        data={{
          labels: ['9AM', '11AM', '1PM', '3PM'],
          datasets: [{ data: [19000, 19120, 19200, 19150] }],
        }}
        width={Dimensions.get('window').width - 120}
        height={220}
        chartConfig={{
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          color: () => `#00b386`,
          labelColor: () => `#555`,
        }}
        bezier
      />
    </View>
  );
}
