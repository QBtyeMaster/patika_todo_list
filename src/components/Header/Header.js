import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './HeaderStyle';

const Header = ({searched, itemsCount, activeCount}) => {
  return (
    <View>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerTitle}>To Do List Items</Text>
        <Text style={styles.headerTitle}>{itemsCount +'/'+activeCount}</Text>
      </View>
      <View>
        <TextInput style={styles.searchInput} 
        placeholder='Search...'
        placeholderTextColor='#bfbfbf'
        onChangeText={searched}
        />
      </View>
    </View>
  );
};
export default Header;
