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
import { collection, doc, getDoc, getDocs, onSnapshot, query, updateDoc,  } from "firebase/firestore";
import { db } from "../Firebase";
import { ScoreBoardCall } from "../data";

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
  const [userIds, setUserIds] = useState([]);
  const [setp, setSetp] = useState([])
  var pointGetter = [];
  let pointGetter2 = [];

  const pointAdder = async (user, idx) => { 
   console.log(user, idx)
   }
  useEffect(() => {
    const userCol = collection(db, "users");
    const getUser = async () => {
      const data = await getDocs(userCol);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const q = query(collection(db, "users"));
    const unsubscribe = onSnapshot(q, () => {
      getUser();
    });
  }, []);

  useEffect(() => {
    allUsers.map((user, index) => {
        console.log("user id :", user.id, "index is:", index);

      
    const booksCol= collection(db, "users", user.id, "books");
    const getUser = async () => {
      const data = await getDocs(booksCol);
      setAllBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    };

    const q = collection(db, "users", user.id, "books");
    const unsubscribe = onSnapshot(q, () => {
      getUser();
    });
    });
  }, [allUsers]);



 const res = allBooks.forEach(i => pointGetter.push(i.index,i.points, ));

console.log("pg: ", res)

  
allUsers.map((user, index) => {
        // pointAdder(user, index);
        // let result = allBooks.groupBy( ({ index }) => index ); 
        // console.log(result)
})


  
  return (
    <Box>
      <Heading fontSize="xl" p="4" pb="3"></Heading>
      <FlatList
        data={ScoreBoardCall }
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
                source={
                item.avatarUrl
                }
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
