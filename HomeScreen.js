import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from "./styles.js";

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>

    <Text>{`\n\n\n\n\n\n\n\nMedical Purpose`}</Text>
    <Text style={styles.title}>Recommended</Text>
      <Button
        title="CHARGE CAPTURE"
        onPress={() => navigation.navigate('RNTextDetector')}
        style={styles.button}
      />



      <Text>{`\n\n\n\n\n\n\n\n\n\n\nMedical Purpose application powered by!`}</Text>

      <Button
              title="Exarcplus"
              onPress={() => navigation.navigate('RNTextDetector')}
              style={styles.button}
            />
  </View>
);

export default HomeScreen;

