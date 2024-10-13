import { View, Text, TextInput, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback } from 'react-native'
import React, {useState} from 'react'
import { COLORS, FONTS } from '../../constants';
// import Feather from 'react-native-vector-icons/Feather';
// import Error from 'react-native-vector-icons/MaterialIcons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Signup = (props: any) => {
  const [firstName, setFirstName] = useState('');
  const [firstNameVerify, setFirstNameVerify] = useState(false);
  const [lastName, setLastName] = useState('');
  const [lastNameVerify, setLastNameVerify] = useState(false);
  const [email, setEmail] = useState('');
  const [emailVerify, setEmailVerify] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordVerify, setConfirmPasswordVerify] = useState(false);
  const [mobile, setMobile] = useState('');
  const [mobileVerify, setMobileVerify] = useState(false);

  function handleName(e : any){
    // console.log(e.nativeEvent.text);
    const firstNameVar = e.nativeEvent.text;
    setFirstName(firstNameVar);
    if (firstNameVar.length>1) {
      setFirstNameVerify(true);
    }
  }

return (

    <KeyboardAvoidingView
      style={{ flex: 1, }}
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}  // 'height' for Android
      keyboardVerticalOffset={Platform.OS === 'android' ? 50 : 0}  // Adjust for status bar/header
    >
      <ScrollView style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 20 }}
        keyboardShouldPersistTaps={true}
        keyboardDismissMode="on-drag"
      >
        <SafeAreaView style={{ marginHorizontal: 30 }}>
          <View>
            <Text
              style={{
                marginTop: 30,
                textAlign: 'center',
                fontFamily: FONTS.MONTSERRAT_BOLD,
                fontSize: 24,
              }}>
              Hello!
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: FONTS.MONTSERRAT,
                fontSize: 20,
                marginTop: 10,
                marginHorizontal: 30,
              }}>
              Welcome to the simplified version of React Native tutorial series!
            </Text>

          </View>

          <View style={{ flexDirection: 'row', marginTop: 50 }}>
          <View style={{ flex: 1, marginEnd: 5}}>
            {/* <FontAwesome name="user-o" color="#420475" size={20} /> */}
             <TextInput
                style={{
                  backgroundColor: COLORS.WHITE,
                  borderColor: COLORS.BLACK,
                  borderWidth: 2,
                  height: 50,
                  maxHeight: 50,
                  minHeight: 50,
                  fontSize: 16,
                  borderRadius: 10,
                  paddingHorizontal: 20,
                  fontFamily: FONTS.MONTSERRAT,
                }}
                placeholder="First Name"
                placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
                cursorColor={COLORS.ORANGE}
              selectionColor={COLORS.ORANGE}
              onChange={e=>handleName(e)}
            />
            {/* {
              firstName.length > 1 ? null : firstNameVerify ? (
              <Feather name="check-circle" color="blue" size={20} />
            ) : (
              <Error name="error" color="red" size={20} />
            )} */}
            </View>
            <View style={{ flex: 1, marginStart: 5 }}>
              <TextInput
                style={{
                  borderColor: COLORS.BLACK,
                  borderWidth: 2,
                  backgroundColor: COLORS.WHITE,
                  height: 50,
                  maxHeight: 50,
                  minHeight: 50,
                  fontSize: 16,
                  borderRadius: 10,
                  paddingHorizontal: 20,
                  fontFamily: FONTS.MONTSERRAT,
                }}
                placeholder="Last Name"
                placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
                cursorColor={COLORS.ORANGE}
                selectionColor={COLORS.ORANGE}
              />
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <TextInput
              style={{
                borderColor: COLORS.BLACK,
                borderWidth: 2,
                backgroundColor: COLORS.WHITE,
                height: 50,
                maxHeight: 50,
                minHeight: 50,
                fontSize: 16,
                borderRadius: 10,
                paddingHorizontal: 20,
                fontFamily: FONTS.MONTSERRAT,
              }}
              placeholder="Email"
              placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
              cursorColor={COLORS.ORANGE}
              selectionColor={COLORS.ORANGE}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <TextInput
              style={{
                borderColor: COLORS.BLACK,
                borderWidth: 2,
                backgroundColor: COLORS.WHITE,
                height: 50,
                maxHeight: 50,
                minHeight: 50,
                fontSize: 16,
                borderRadius: 10,
                paddingHorizontal: 20,
                fontFamily: FONTS.MONTSERRAT,
              }}
              placeholder="Password"
              placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
              cursorColor={COLORS.ORANGE}
              selectionColor={COLORS.ORANGE}

            />
          </View>
          <View style={{ marginTop: 20 }}>
            <TextInput
              style={{
                borderColor: COLORS.BLACK,
                borderWidth: 2,
                backgroundColor: COLORS.WHITE,
                height: 50,
                maxHeight: 50,
                minHeight: 50,
                fontSize: 16,
                borderRadius: 10,
                paddingHorizontal: 20,
                fontFamily: FONTS.MONTSERRAT,
              }}
              placeholder="Confirm Password"
              placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
              cursorColor={COLORS.ORANGE}
              selectionColor={COLORS.ORANGE}

            />
          </View>
          <View style={{ marginTop: 20 }}>
            <TextInput
              style={{
                borderColor: COLORS.BLACK,
                borderWidth: 2,
                backgroundColor: COLORS.WHITE,
                height: 50,
                maxHeight: 50,
                minHeight: 50,
                fontSize: 16,
                borderRadius: 10,
                paddingHorizontal: 20,
                fontFamily: FONTS.MONTSERRAT,
              }}
              placeholder="Mobile"
              placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
              cursorColor={COLORS.ORANGE}
              selectionColor={COLORS.ORANGE}
            />
          </View>


          <TouchableWithoutFeedback>
            <View
              style={{
                height: 50,
                backgroundColor: COLORS.ORANGE,
                marginTop: 20,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: FONTS.MONTSERRAT_SEMI_BOLD,
                  color: COLORS.WHITE,
                  fontSize: 16,
                }}>
                Sign Up
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <View
            style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 25 }}>
            <Text style={{ fontFamily: FONTS.MONTSERRAT_MEDIUM }}>
              Already a member?
            </Text>
            <TouchableWithoutFeedback>
              <Text
                style={{
                  marginStart: 5,
                  fontFamily: FONTS.MONTSERRAT_SEMI_BOLD,
                  color: 'orange',
                }}>
                Sign In
              </Text>
            </TouchableWithoutFeedback>
          </View>

        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Signup