import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(255,255,255, .1)"
  },
  headerTitle: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: "#ff643e",
    fontSize: 24,
    fontWeight: "600",
    fontStyle: "italic",
  },
  searchInput: {
    marginVertical: 7,
    marginHorizontal: 10,
    paddingVertical : 10,
    paddingHorizontal : 20,
    color: "#f0f0f0",
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "rgba(255,255,255, .2)"
  }
})