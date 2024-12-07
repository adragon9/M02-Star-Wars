import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

function SpaceshipsDetails({ route }) {
  const { item } = route.params;
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataCollection = async () => {
      try {
        const response = await fetch(item.url);
        if (!response.ok) {
          throw new Error("Failed to connect!");
        }
        const json = await response.json();
        setData(json.result.properties);
      } catch (err) {
        console.log(err);
      }
    };
    dataCollection();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.pad}></View>
      <View style={styles.descHolder}>
        <Text style={styles.detailText}>Ship Model: {data.model}</Text>
        <Text style={styles.detailText}>Ship Class: {data.starship_class}</Text>
        <Text style={styles.detailText}>
          Ship Manufacturer: {data.manufacturer}
        </Text>
        <Text style={styles.detailText}>
          Ship Cost: {data.cost_in_credits} credits
        </Text>
        <Text style={styles.detailText}>Ship Length: {data.length}</Text>
        <Text style={styles.detailText}>Crew Size: {data.crew}</Text>
        <Text style={styles.detailText}>
          Passenger Capacity: {data.passengers}
        </Text>
        <Text style={styles.detailText}>
          Cargo Capacity: {data.cargo_capacity}
        </Text>
        <Text style={styles.detailText}>
          Hyperdrive Rating: {data.hyperdrive_rating}
        </Text>
      </View>
      <View style={styles.pad}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  pad: {
    flex: 1,
  },
  descHolder: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 30,
    borderRadius: 10,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  detailText: {
    fontSize: 18,
    alignSelf: "flex-start",
    marginBottom: 10,
  },
});

export default SpaceshipsDetails;
