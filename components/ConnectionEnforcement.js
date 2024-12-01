import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { useFocusEffect } from "@react-navigation/native";
import styles from "../styles";

const connectedMap = {
  none: "There is no connection detected.",
  unknown: "The network connection type is unknown.",
  wifi: "You are connected via wifi.",
  cell: "You are connected via a data plan.",
  mobile: "You are connected via a data plan.",
  ethernet: "You are connected via ethernet.",
  other: "You are connected by either localhost or some other type of network.",
};

export default function ConnectionEnforcer() {
  const [connected, setConnected] = useState("");
  const messageRemoveDelay = 10; // in seconds
  const updateConnectionStatus = (connection) => {
    setConnected(connectedMap[connection.type]);

    // Clear the message after 15 seconds
    setTimeout(() => {
      setConnected("");
    }, messageRemoveDelay * 1000);
  };

  useFocusEffect(
    React.useCallback(() => {
      // Check network status when the tab gains focus
      NetInfo.fetch().then((state) => {
        updateConnectionStatus(state);
      });

      // Subscribe to network status changes
      const unsubscribe = NetInfo.addEventListener(updateConnectionStatus);

      return () => {
        unsubscribe();
      };
    }, [])
  );

  return <View>{connected !== "" && <Text>{connected}</Text>}</View>;
}
