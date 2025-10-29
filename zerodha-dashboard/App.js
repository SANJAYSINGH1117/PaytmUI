import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Sidebar from './components/Sidebar';
import ChartSection from './components/ChartSection';
import PortfolioSummary from './components/PortfolioSummary';
import OrderPlacement from './components/OrderPlacement';

export default function App() {
  const [selected, setSelected] = useState('Dashboard');

  return (
    <View style={styles.container}>
      <Sidebar onSelect
