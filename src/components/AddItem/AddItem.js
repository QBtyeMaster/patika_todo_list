import React, {useState, useRef} from 'react';
import { TextInput, View, TouchableOpacity, Text } from 'react-native';
import styles from './AddItemStyle'; 

const AddItem = ({addItemData}) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);



return (
  <>
    <View style={styles.newItemWrapper}>
      <TextInput style={styles.itemTitle} 
      placeholder='Title'
      ref={titleRef}
      placeholderTextColor='#bfbfbf'
      onChangeText={text => setTitle(text)}
      />
      <TextInput style={styles.itemDescription} 
      placeholder='Description'
      ref={descriptionRef}
      placeholderTextColor='#bfbfbf'
      onChangeText={text => setDescription(text)}
      />
      <View style={styles.btnWrapper}>
        <TouchableOpacity style={styles.btn} onPress={() => {
          addItemData(title, description);
          titleRef.current.clear();
          descriptionRef.current.clear();
          setTitle("");
          setDescription("");
          }}>
          <Text style={styles.saveBtn} >Kaydet</Text> 
        </TouchableOpacity>
      </View>
    </View>
  </>
)
}

export default AddItem;