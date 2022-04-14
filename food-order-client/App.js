import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, StatusBar, TextInput, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Input, Button, Header, Icon, SearchBar } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://192.168.1.174:3000/ReceiptApi/read')
      .then((response) => response.json())
      .then((json) => {
        for(var i in json){
          setData(json[i]);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  
  return (
    <>
        <View style={styles.container}>
      <View
        Style={{
          flex: 1
        }}
      >
        <Header
          containerStyle={{
            height: 90,
            backgroundColor: "#fff",
            borderBottomColor: "#fff",
            borderBottomWidth: 2,
            elevation: 0
          }}
          placement="center"
          leftComponent={
            <TouchableOpacity
              style={{ padding: 8 }}
              onPress={() => console.log("menu function here")}
            >
              <Ionicons name="menu" size={27} color="#333" />
            </TouchableOpacity>
          }
          centerComponent={{
            text: "Food Order",
            style: {
              color: "#FF4C29",
              fontSize: 22,
              fontWeight: "bold",
              marginTop: 10
            }
          }}
          rightComponent={
            <TouchableOpacity
              style={{ padding: 8 }}
              onPress={() => console.log("cart function here")}
            >
              <Ionicons name="cart-outline" size={27} color="#333" />
            </TouchableOpacity>
          }
        />
      </View>
      <ScrollView
        style={{ flex: 1, backgroundColor: "#fff" }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            paddingHorizontal: 21
            
          }}
        >
          <Text
            style={{
              color: "#333",
              fontSize: 26,
              fontWeight: "bold"
            }}
          >
            Welcome !
          </Text>
        </View>
        <View>
          <SearchBar
            placeholder="Search..."
            containerStyle={{
              backgroundColor: "#fff",
              borderBottomColor: "#fff",
              borderTopColor: "#fff"
            }}
            inputContainerStyle={{
              backgroundColor: "#f1f1f1",
              borderRadius: 15
            }}
            inputStyle={{
              fontSize: 15
            }}
          />
          <TouchableOpacity
          key={data._id}
          style={{
            justifyContent: "center",
            marginRight: 5,
            backgroundColor: "#fff",
            borderRadius: 5,
            padding: 5,
            height: 200,
            width: "48.5%"
          }}
          onPress={() => {
            navigation.navigate("Details", {
              id: data.id,
              img: data.img,
              name: data.name,
              price: data.price,
              desc: data.description
            });
          }}
        >
          <View
            style={{
              flex: 1,

              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Image
              source = {{uri:`${data.image}`}}
              resizeMode="contain"
              style={{
                width: "100%",
                height: "100%"
              }}
            />
          </View>
          <View
            style={{
              marginTop: 10
            }}
          >
            <Text
              numberOfLines={1}
              style={{ fontSize: 15, color: "#333", fontWeight: "bold" }}
            >
              {data.foodname}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 5
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-start"
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "#333",
                  marginRight: 7,
                  fontWeight: "bold"
                }}
              >
                {data.price}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "#9a9a9a"
                }}
              >
                / 1Kg
              </Text>
            </View>

            <View
              style={{
                justifyContent: "flex-end"
              }}
            >
              <Button
                titleStyle={{
                  color: "white",
                  fontSize: 12
                }}
                buttonStyle={{
                  backgroundColor: "#FF4C29",
                  borderRadius: 10,
                  width: 35,
                  height: 35
                }}
                icon={<Ionicons name="cart" size={18} color="#fff" />}
                onPress={() => {}}
              />
            </View>
          </View>
        </TouchableOpacity>
        </View>
        <View
          style={{
            paddingHorizontal: 5,
            paddingVertical: 10
          }}
        >
        </View>
        <View
          style={{
            paddingLeft: 8,
            paddingRight: 4,
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%"
          }}
        >
        </View>
      </ScrollView>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
        translucent={true}
      />
    </View>
    

    {/* <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <Text>Loading...</Text> : 
      ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
          <Text style={{ fontSize: 18, color: 'green', textAlign: 'center', marginTop: 150}}>
            {data.foodname}
          </Text>
          <Text style={{ fontSize: 14, color: 'green',}}>
            Gía: {data.price}</Text>        
          <Image source = {{uri:`${data.image}`}}
          style = {{ width: 200, height: 200 }}
   />
        </View>
      )}
    </View> */}
    </>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default App;
