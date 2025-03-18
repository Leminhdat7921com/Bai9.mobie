import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header với nền xanh */}
      <View style={styles.header} />
      
      {/* Ảnh đại diện */}
      <Image
        source={{ uri: "https://via.placeholder.com/100" }} // Thay URL ảnh thật ở đây
        style={styles.avatar}
      />

      {/* Tên và chức danh */}
      <Text style={styles.name}>Minh Dat</Text>
      <Text style={styles.role}>Mobile developer</Text>

      {/* Mô tả */}
      <Text style={styles.description}>
        I have above 5 years of experience in native mobile apps development,
        now I am learning React Native
      </Text>

      {/* Nút Sign Out */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  header: {
    width: "100%",
    height: 100,
    backgroundColor: "#00AEEF",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
    marginTop: -50, // Kéo ảnh lên phần nền xanh
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
  role: {
    fontSize: 16,
    color: "#00AEEF",
    marginBottom: 10,
  },
  description: {
    textAlign: "center",
    paddingHorizontal: 20,
    fontSize: 14,
    color: "#555",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#F9A825",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold
