import React, { useEffect, useState } from "react";
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  NativeBaseProvider,
} from "native-base";

import { View } from "react-native";
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { db } from "../Firebase";

export default function LeaderBoard() {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  );
}

const Example = () => {
  const [allUsers, setUser] = useState([]);
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    const userCol = collection(db, "users");
    const getUser = async () => {
      const data = await getDocs(userCol);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log("col: ", userCol);
    };
    const q = query(collection(db, "users"));
    const unsubscribe = onSnapshot(q, () => {
      getUser();
    });
  }, []);
  console.log("users are : ", allUsers);
  useEffect(() => {
    allUsers.map((user, index) => {
      console.log("user is :", user.id, "index is :", index);
    });
  }, []);

  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "12an",
      timeStamp: "12:47 PM",
      recentText: "1244 ",
      avatarUrl: "https://gcdnb.pbrd.co/images/9h0UyvQkHymd.png?o=1",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "Emily",
      timeStamp: "11:11 PM",
      recentText: "840",
      avatarUrl: "https://gcdnb.pbrd.co/images/BqIJUkXLbyy7.png?o=1",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      fullName: "Oliva",
      timeStamp: "6:22 PM",
      recentText: "330",
      avatarUrl: "https://gcdnb.pbrd.co/images/BqIJUkXLbyy7.png?o=1",
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      fullName: "Jakob Jr",
      timeStamp: "8:56 PM",
      recentText: "10",
      avatarUrl: "https://gcdnb.pbrd.co/images/9h0UyvQkHymd.png?o=1",
    },
  ];
  return (
    <Box>
      <Heading fontSize="xl" p="4" pb="3"></Heading>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: "gray.600",
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2"
          >
            <HStack space={3} justifyContent="space-between">
              <Avatar
                size="48px"
                source={{
                  uri: item.avatarUrl,
                }}
              />
              <VStack>
                <Text
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  bold
                >
                  {item.fullName}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {item.recentText}
                </Text>
              </VStack>
              <Spacer />
              <Text
                fontSize="xs"
                _dark={{
                  color: "warmGray.50",
                }}
                color="coolGray.800"
                alignSelf="flex-start"
              >
                {item.timeStamp}
              </Text>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
};
