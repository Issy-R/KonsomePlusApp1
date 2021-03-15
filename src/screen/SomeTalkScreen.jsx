import React from 'react';
import { StyleSheet } from 'react-native';
import YoutubeList from '../components/YoutubeList';

export default function SomeTalkScreen() {
  return (
    <YoutubeList style={styles.container} />
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
