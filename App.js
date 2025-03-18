import React from "react";
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Dữ liệu mẫu
const categories = [
  { id: "1", name: "Giày", image: "https://via.placeholder.com/80" },
  { id: "2", name: "Áo", image: "https://via.placeholder.com/80" },
  { id: "3", name: "Quần", image: "https://via.placeholder.com/80" },
];

const products = [
  { id: "1", name: "Nike Air Max", price: "$99", image: "https://via.placeholder.com/100" },
  { id: "2", name: "Áo Bóng Đá", price: "$35", image: "https://via.placeholder.com/100" },
  { id: "3", name: "Quần Thể Thao", price: "$25", image: "https://via.placeholder.com/100" },
];

// Màn hình chính
const ExplorerScreen = () => {
  return (
    <View style={styles.container}>
      {/* Thanh tìm kiếm */}
      <View style={styles.searchBar}>
        <Icon name="magnify" size={24} color="#888" />
        <TextInput placeholder="Tìm kiếm sản phẩm..." style={styles.searchInput} />
      </View>

      {/* Danh mục sản phẩm */}
      <Text style={styles.sectionTitle}>Danh Mục</Text>
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryItem}>
            <Image source={{ uri: item.image }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />

      {/* Danh sách sản phẩm */}
      <Text style={styles.sectionTitle}>Sản Phẩm Phổ Biến</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

// Màn hình Account (tạm thời chỉ hiển thị chữ)
const AccountScreen = () => (
  <View style={styles.centered}>
    <Text style={{ fontSize: 20 }}>Tài Khoản</Text>
  </View>
);

// Tạo Bottom Tab Navigation
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Explorer"
          component={ExplorerScreen}
          options={{
            tabBarLabel: "Khám Phá",
            tabBarIcon: ({ color, size }) => <Icon name="compass-outline" color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarLabel: "Tài Khoản",
            tabBarIcon: ({ color, size }) => <Icon name="account-outline" color={color} size={size} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// CSS Styles
const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: "#fff" },
  searchBar: { flexDirection: "row", alignItems: "center", padding: 10, borderRadius: 10, backgroundColor: "#f5f5f5", marginBottom: 10 },
  searchInput: { flex: 1, marginLeft: 10 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  categoryItem: { alignItems: "center", marginRight: 15 },
  categoryImage: { width: 80, height: 80, borderRadius: 10 },
  categoryText: { marginTop: 5, fontSize: 14 },
  productItem: { flex: 1, alignItems: "center", margin: 5, padding: 10, backgroundColor: "#f9f9f9", borderRadius: 10 },
  productImage: { width: 100, height: 100, borderRadius: 10 },
  productName: { marginTop: 5, fontSize: 14, fontWeight: "bold" },
  productPrice: { fontSize: 14, color: "#e67e22" },
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default App;
