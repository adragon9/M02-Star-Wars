import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, Image } from "react-native";
import styles from "../styles";

const placeholder = require("../assets/icon.png");


function Placeholder(props) {
  if (props.loaded) {
    return null;
  } else {
    return <Image style={styles.img_placeholder} source={placeholder} />;
  }
}

export default function LazyImage(props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <View style={styles.image}>
      <Placeholder loaded={loaded} />
      <Image
        {...props}
        onLoad={() => {
          console.log("Image loaded");
          setLoaded(true);
        }}
      />
    </View>
  );
}

LazyImage.propTypes = {
  source: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string.isRequired,
    }),
    PropTypes.number, // For local images
  ]).isRequired,
  style: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
};
