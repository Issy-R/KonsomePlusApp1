import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function YoutubeList() {
  return (
    <View style={styles.listContainer}>
      <View style={styles.listInner}>
        <View style={styles.listLeft}>
          <View style={styles.listTitleContainer}>
            <Text
              style={styles.title}
              numberOfLines={2}
            >
              【ソメトーーク】今から楽器始めるなら？分増やすため【新コーナー】
            </Text>
          </View>
          <View style={styles.listSubTitle}>
            <Text style={styles.theme}>ソメトーーク</Text>
            <Text style={styles.date}>2021/3/15</Text>
          </View>
        </View>
        <View style={styles.listRight}>
          <View />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    height: 128,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0, 0, 0, 0.6)',
  },
  listInner: {
    flex: 1,
    flexDirection: 'row',
  },
  listLeft: {
    flex: 1,
    paddingVertical: 8,
    paddingRight: 8,
    justifyContent: 'space-between',
  },
  listRight: {
    backgroundColor: 'blue',
    width: 96,
    height: 96,
    borderRadius: 8,
  },
  listSubTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  theme: {
    fontSize: 16,
  },
  date: {
    fontSize: 16,
  },
});
