/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text
} from 'react-native';
import Header from './components/Header';
import ToDoItem from './components/ToDoItem';
import AddItem from './components/AddItem';

let data = [
  {id: 1, title: "title_1", description: "description_1", isActive: 1},
  {id: 2, title: "title_2", description: "description_2", isActive: 1},
  {id: 3, title: "title_3", description: "description_3", isActive: 1},
  {id: 4, title: "title_1", description: "description_1", isActive: 1},
  {id: 5, title: "title_2", description: "description_2", isActive: 1},
  {id: 6, title: "title_3", description: "description_3", isActive: 1},
  {id: 7, title: "title_1", description: "description_1", isActive: 1},
  {id: 8, title: "title_2", description: "description_2", isActive: 1},
  {id: 9, title: "title_3", description: "description_3", isActive: 1},
  {id: 10, title: "title_1", description: "description_1", isActive: 1},
  {id: 11, title: "title_2", description: "description_2", isActive: 1},
  {id: 12, title: "title_3", description: "description_3", isActive: 1},
  {id: 13, title: "title_1", description: "description_1", isActive: 1},
  {id: 14, title: "title_2", description: "description_2", isActive: 1},
  {id: 15, title: "title_3", description: "description_3", isActive: 1},
];



function App(){

  
  const [itemData, setItemData] = useState(data);
  const [itemCount, setItemCount] = useState(data.length);
  const activeData = data.filter(item => {if(item.isActive == 0){return item}})
  const [activeItemCount, setActiveItemCount] = useState(activeData.length);

  const toDoItemRender = ({item}) => {
    return <ToDoItem 
    itemData={item} 
    complatedFunction={complateItem}
    deleteFunction={deleteItem}
    />
  }

  const complateItem = (complatedItem:number) => {
    const newData = data.filter(item => {
      if(item.id !== complatedItem){
        return item;
      }else{
        item.isActive = 0;
        return item;
      }
    })

    setItemData(newData);
    data = newData;
    console.log(data);
    const newActive = data.filter(item => {
      if(item.isActive == 0){
        return item
      }
    })
    setActiveItemCount(newActive.length)
  }

  const deleteItem = (deletedItem:number) => {
    const newData = data.filter(item => {
      if(item.id !== deletedItem){
        return item;
      }
    })
    setItemData(newData);
    data = newData;
    setItemCount(data.length);
    const newActice = data.filter(item => {
      if(item.isActive == 0){
        return item
      }
    })
    setActiveItemCount(newActice.length)
  }

  const searchItem = (search:string) => {
    const searchedData = data.filter(item => {
      const title = item.title.toLowerCase();
      const description = item.description.toLowerCase();
      const searched = search.toLowerCase();
      if(title.indexOf(searched) > -1 || description.indexOf(searched) > -1){
        return item;
      }
    })
    setItemData(searchedData);
  }

  const addItemBtn = (title:string, description:string) => {
    if(title.trim() != "" || description.trim() != ""){
      const lastId = data[data.length-1].id

      const newItem = {id: lastId+1, description: description.trim(), title: title.trim(), isActive: 1};
      const newData = [...data,newItem];
      setItemData(newData);
      data = newData;
      setItemCount(data.length);
    }
  }

  

  

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header searched={searchItem} itemsCount={itemCount} activeCount={activeItemCount} />
      
      <FlatList
        style={{marginTop:10,marginBottom:10}}
        data={itemData} 
        renderItem={toDoItemRender}
        initialNumToRender={6}         
      />
      <AddItem 
        addItemData={addItemBtn} 
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#1e1e1e"
  },
  
});

export default App;
