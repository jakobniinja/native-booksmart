import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Dimensions,
  ScrollView,
} from "react-native";
import {
  doc,
  collection,
  onSnapshot,
  query,
  getDocs,
} from "firebase/firestore";
import AppContext from "../Context/AppContext";
import { db } from "../Firebase";

import { initialWindowMetrics } from "react-native-safe-area-context";
import BookGridHelper from "./BookGridHelper";
export default function BookGrid(props) {
  const { user, setUser } = useContext(AppContext);
  const [flag, setFlag] = useState(false);
  useMemo(() => ({ flag, user }), [flag, user]);

  useEffect(() => {
    const userCol = collection(db, "users");
    const getUser = async () => {
      const data = await getDocs(userCol);
    };
    const q = query(collection(db, "users"));
    const unsubscribe = onSnapshot(q, () => {
      getUser();
    });
  }, []);
  return <BookGridHelper />;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    backgroundColor: "#ddd",
  },
  item: {
    width: 80,
    borderRadius: 12,
    height: 70,
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "16%",
    marginTop: "20%",
  },
  top: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "345%",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginLeft: "-4%",
  },
  lock: {
    width: 80,
    margin: 8,
    borderRadius: 12,
    height: 70,
    backgroundColor: "gray",
    color: "#fff",
    textAlign: "center",
    justifyContent: "center",
  },
});
