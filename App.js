import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  Alert,
  ToastAndroid,
  Platform,
} from 'react-native';


import colors from './colors'
import styles from './AppStyles'

import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import PhoneInput from 'react-native-phone-number-input';

const IsAndroid = Platform.OS === 'android';

const showErrorToast = (message) => {
  ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM,
    25,
    50
  );
};

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => {
  const [phoneNumber, onChangePhoneNumber] = React.useState(null);
  const [textMessage, onChangeTextMessage] = React.useState(null);

  const phoneNumberInputRef = React.useRef(PhoneInput);

  const handleSendButton = () => {
    if (phoneNumberInputRef.current?.isValidNumber(phoneNumber)) {
      if (textMessage !== null && textMessage.length > 0) {
        Alert.alert("Send Message:", "This message is about to send.",
          [
            { text: "Send", onPress: () => { console.log("Sending...") } },
            { text: "Cancel", onPress: () => { console.log('No') } }
          ]
        )
      }
      else { IsAndroid ? showErrorToast("Message is empty!") : alert("Message is Empty!") }
    }
    else { IsAndroid ? showErrorToast("Invalid Phone Number!") : alert("Invalid Phone Number!") }
  }

  const handleCancelButton = () => {
    if (textMessage !== null) {
      onChangeTextMessage(null)
      IsAndroid ? showErrorToast("Message is cleared!") : alert("Message is cleared!")
    }
    else {
      IsAndroid ? showErrorToast("Nothing to cancel!") : alert("Nothing to cancel!")
    }
  }
  return (
    <>
      <SafeAreaView style={styles.rootContainer}>

        <View style={styles.textContainer}>

          {/* {textMessage && !phoneNumber && (
            <Text style={{ color: colors.CoralRed }}>
              No Phone Number.
            </Text>
          )} */}

          <Text style={{ color: colors.CoralRed }}>
            {!phoneNumber && textMessage && ("Did you forget to enter phone number?")}
          </Text>


          <PhoneInput
            ref={phoneNumberInputRef}
            defaultValue={phoneNumber}
            defaultCode="MM"
            layout="first"
            onChangeText={onChangePhoneNumber}
            disableArrowIcon={true}
            withDarkTheme={true}
            withShadow={true}
            autoFocus={true}
            textInputStyle={{ color: colors.Emeraid }}
            codeTextStyle={{ color: colors.Sunglow }}
          />

          <Separator />

          <AutoGrowingTextInput
            style={styles.textMessage}
            placeholder={' Send Encrypted Message ... '}
            placeholderTextColor={'#66737C'}
            value={textMessage}
            onChangeText={onChangeTextMessage}
            maxHeight={200}
            minHeight={45}
            enableScrollCaret={true}
            onPress={
              () => { console.log('Text Message is pressed.') }
            }
          />

          <Text style={styles.normalText}>
            Character Count : {textMessage ? textMessage.length : 0}
          </Text>

        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="  Clear  "
            color={colors.CoralRed}
            // onPress={() => { Alert.alert('Alert Message', 'This is cancel event.') }
            onPress={handleCancelButton}
          />
          <Button
            title="   Send   "
            color={colors.CrayolaBlue}
            onPress={handleSendButton}
            accessibilityLabel="Send the message."
          />
        </View>
      </SafeAreaView>

      <View style={styles.footContainer}>
        <Text style={{ color: 'gray' }}> developed by minlaxz </Text>
      </View>

    </>
  );
}

export default App;