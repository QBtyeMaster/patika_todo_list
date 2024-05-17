import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './ToDoItemStyle';



const ToDoItem = ({itemData, complatedFunction, deleteFunction}) => {
  
  const [itemIsActive, setItemIsActive] = useState(itemData.isActive);
  const [deleteBtnVisible, setDeleteBtnVisible] = useState(false);
  const [complatedBtnVisible, setComplatedBtnVisible] = useState(false);

  const itemOnPress = () => {
    setComplatedBtnVisible(true);
    setTimeout(() => {
      setComplatedBtnVisible(false);
    },2000)
  }
  const itemOnLongPress = () => {
    setDeleteBtnVisible(true);
    setTimeout(() => {
      setDeleteBtnVisible(false);
    },2000)
  }
  

  return (
    <View style={styles.todoitem_wrapper}>
      {complatedBtnVisible && (
        <TouchableOpacity style={styles.complated_edit_wrapper} onPress={() => {
          complatedFunction(itemData.id);
          setItemIsActive(0);
        }}>
          <View>
            <Text style={styles.complated_btn}>Complated</Text>
          </View>
        </TouchableOpacity>
      )}
      <TouchableOpacity 
      style={styles.info_wrapper} 
      onPress={itemOnPress}
      onLongPress={itemOnLongPress}
      >
        <View>
          <Text style={[styles.item_title, itemIsActive == 0 && styles.passiveText]}>{itemData.title}</Text>
          <Text style={[styles.item_description, itemIsActive == 0 && styles.passiveText]}>{itemData.description}</Text>
        </View>
      </TouchableOpacity>
      {deleteBtnVisible && (
        <TouchableOpacity style={styles.delete_edit_wrapper} onPress={() => {
          deleteFunction(itemData.id);
        }}>
          <View>
            <Text style={styles.delete_btn}>Delete</Text>
          </View>
        </TouchableOpacity>
      )}
      
    </View>
  );
};

export default ToDoItem;
