import * as React from 'react';
import RootStack, { AuthScreens } from "./navigator/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FormProvider } from "./form-context";
import AppLoading from 'expo-app-loading';
import * as SecureStore from 'expo-secure-store';
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_600SemiBold,
  NunitoSans_700Bold,
  NunitoSans_800ExtraBold,
  NunitoSans_900Black,
} from "@expo-google-fonts/nunito-sans";
import * as firebase from "firebase";
import apiKeys from "./firebase";

export const AuthContext = React.createContext();

const App = () => {
  const [userId, setUserId] = React.useState("");

  if (!firebase.apps.length) {
    console.log("Connected with Firebase");
    firebase.initializeApp(apiKeys.firebaseConfig);
  }

  let [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_600SemiBold,
    NunitoSans_700Bold,
    NunitoSans_800ExtraBold,
    NunitoSans_900Black,
  });

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        let userToken = "";
        let reference;
        try {
            await firebase
                .auth()
                .createUserWithEmailAndPassword(
                    data.email_address.trim(),
                    data.password.trim()
                )
                .then((data) => {
                    userToken = data.user.uid
                    console.log('this is usertoken', userToken)
                    setUserId(userToken)

                })
                .catch((error) => {
                    console.log(error);
                });
        } catch (err) {
            console.log("firebase auth error: ", err.message);
        }

        try {
              reference = "users/";
              await firebase
                  .database()
                  .ref(reference + userToken)
                  .set({
                      userId: userToken,
                  });
          

      } catch (err) {
          console.log("firebase database error: ", err.message);
      }
      setUserId(userToken);

      dispatch({ type: "SIGN_UP", token: userToken });
      },
    }),
    []
  );


  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <AuthContext.Provider value={authContext}>
        <SafeAreaProvider>
          <FormProvider>
          <NavigationContainer>
            {userId == null ? (
              <AuthScreens />
            ) : (
              <RootStack />
            )}
          </NavigationContainer>
          </FormProvider>
        </SafeAreaProvider>
      </AuthContext.Provider>

    );
  }
};

export default App;
