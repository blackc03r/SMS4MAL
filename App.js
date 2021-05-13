import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button
} from 'react-native';

import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import PhoneInput from 'react-native-phone-number-input';

const App = () => {

  const [phoneNumber, onChangePhoneNumber] = React.useState(null);
  const [textMessage, onChangeTextMessage] = React.useState(null);
  const phoneNumberInput = React.useRef(PhoneInput);

  const handlePreSending = () => { console.log('Send Message is clicked.') }
  return (
    <SafeAreaView style={styles.rootContainer}>

      <PhoneInput
        ref={phoneNumberInput}
        defaultValue={phoneNumber}
        defaultCode="MM"
        layout="first"
        onChangeText={onChangePhoneNumber}
        disableArrowIcon={true}
        withDarkTheme={true}
        withShadow={true}
        autoFocus={true}
      />

      <AutoGrowingTextInput
        style={styles.textMessage}
        placeholder={' Send Encrypted Message ... '}
        placeholderTextColor={'#66737C'}
        value={textMessage}
        onChangeText={onChangeTextMessage}
        maxHeight={200}
        minHeight={45}
        enableScrollCaret={true}
        onPress={() => { console.log('Text Message is pressed.') }}
      />

      <Text style={styles.normalText}>
        Character Count : {textMessage ? textMessage.length : 0}
      </Text>

      <Button
        title=" Send Message "
        style={styles.sendButton}
        onPress={handlePreSending}
        accessibilityLabel="Click me to send the message."
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#1b1b1b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalText: {
    fontSize: 12,
    color: 'gray',
    marginBottom: "5%"
  },
  textMessage: {
    padding: "0.5%",
    borderRadius: 8,
    marginBottom: "5%",
    color: "dodgerblue",
    fontSize: 14.5,
    width: "100%",
    paddingLeft: "1%",
    paddingRight: "1%"
  },
  headingText: {
    fontSize: 18.5,
    color: 'blue',
  },
  sendButton: {
    width: "30%",
  },

})

export default App;