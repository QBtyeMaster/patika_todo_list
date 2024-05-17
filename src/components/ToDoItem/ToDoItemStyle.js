import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  todoitem_wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#262626",
    borderRadius: 20,
    marginHorizontal: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#404040",
    
    
  },
  info_wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 5
  },
  item_title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
    color: "#F1F1F1"
  },
  item_description: {
    paddingStart: 10,
    color: "#F1F1F1"
  },
  delete_edit_wrapper: {
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#ca2027",
    borderTopEndRadius: 20,
    borderEndEndRadius: 20
    
  },
  delete_btn: {
    fontSize: 18,
    fontWeight: "600",
    color: "#bfbfbf",
    paddingHorizontal: 15,
  },
  complated_edit_wrapper: {
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#379e00",
    borderTopStartRadius: 20,
    borderBottomStartRadius: 20
    
  },
  complated_btn: {
    fontSize: 18,
    fontWeight: "600",
    color: "#bfbfbf",
    paddingHorizontal: 15,
  },
  passiveText:{
    textDecorationLine: "line-through",
    fontWeight: "300",
    color:"#379e00"
  }
})