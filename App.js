import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import PhoneInput from 'react-native-phone-number-input';

const App = () => {

  const [phoneNumber, onChangePhoneNumber] = React.useState(null);
  const [textMessage, onChangeTextMessage] = React.useState(null);
  const phoneNumberInput = React.useRef(PhoneInput);

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
    fontSize: 13,
    color: 'dodgerblue',
  },
  headingText: {
    fontSize: 18.5,
    color: 'blue',
  },

})

export default App;