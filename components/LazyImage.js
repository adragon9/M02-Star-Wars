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
      <Placeholder loaded={loaded} {...props} />
      <Image
        {...props}
        onLoad={() => {
          setLoaded(true);
        }}
      />
    </View>
  );
}

LazyImage.propTypes = {
  style: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
};
