import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

function PlanetsDetails({ route }) {
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
        <Text style={styles.detailText}>Planet: {data.name}</Text>
        <Text style={styles.detailText}>Climate: {data.climate}</Text>
        <Text style={styles.detailText}>Terrain: {data.terrain}</Text>
        <Text style={styles.detailText}>Population: {data.population}</Text>
        <Text style={styles.detailText}>
          Day Length: {data.rotation_period} hours
        </Text>
        <Text style={styles.detailText}>
          Year Length: {data.orbital_period} days
        </Text>
        <Text style={styles.detailText}>
          Surface Water: {data.surface_water}%
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

export default PlanetsDetails;
