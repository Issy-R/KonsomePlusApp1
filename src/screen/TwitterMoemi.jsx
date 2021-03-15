import React from 'react';
import { StyleSheet } from 'react-native';
import TwitterList from '../components/TwitterList';

export default function TwitterMoemi() {
  return (
    <TwitterList style={styles.container} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
