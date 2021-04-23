import * as React from "react";
import { Header } from "react-native-elements";
import { TouchableOpacity, Alert } from "react-native";
import { Formik } from "formik";
import { useFormState, useFormDispatch } from "../form-context";
import { AuthContext } from "../App";
import styled from "styled-components";

const LoginScreen = ({ navigation }) => {
  const form = React.useRef();
  const dispatch = useFormDispatch();
  const { values: formValues, errors: formErrors } = useFormState("user");

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      if (form.current) {
        const { values, errors } = form.current;
        dispatch({
          type: "UPDATE_FORM",
          payload: {
            id: "user",
            data: { values, errors },
          },
        });
      }
    });

    return unsubscribe;
  }, [navigation]);

  const { signIn } = React.useContext(AuthContext);

  return (
    <Container>
      <Header
        backgroundColor="#fbfbfb"
        containerStyle={{ paddingBottom: 30, paddingTop: 40 }}
        leftComponent={
          <TouchableOpacity onPress={navigation.goBack}>
            <LeftIcon source={require("../assets/black-left-icon.png")} />
          </TouchableOpacity>
        }
        centerComponent={<Heading>Welcome Back</Heading>}
      />
      <Formik
        innerRef={form}
        initialValues={formValues}
        initialErrors={formErrors}
        enableReinitialize
        onSubmit={(values) => signIn(values)}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <>
            <FieldGroupContainer>
              <EmailFieldGroup>
                <EmailLabel>Email</EmailLabel>
                <EmailInput
                    autoCapitalize="none"
                    label="Email Address"
                    onChangeText={handleChange("email_address")}
                  />
              </EmailFieldGroup>
              <PasswordFieldGroup>
                <PasswordLabel>Password</PasswordLabel>
                <PasswordInput
                  secureTextEntry={true}
                  autoCapitalize="none"
                  label="Password"
                  onChangeText={handleChange("password")}
                />
              </PasswordFieldGroup>
              <TouchableOpacity>
                <ForgotPasswordCTA>Forgot Password?</ForgotPasswordCTA>
              </TouchableOpacity>
            </FieldGroupContainer>
            <TouchableOpacity
              onPress={handleSubmit}
            >
              <CTA>
                <CTAText>Log In</CTAText>
              </CTA>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </Container>
  );
};

export default LoginScreen;

const Container = styled.View`
  background-color: #fbfbfb;
  flex: 1;
  padding: 0 30px;

`;

const LeftIcon = styled.Image``;

const Heading = styled.Text`
  font-family: "NunitoSans_700Bold";
  font-size: 22px;
  line-height: 29px;
  text-align: center;
`;

const FieldGroupContainer = styled.View`

`;

const EmailFieldGroup = styled.View`
  padding-bottom: 10px;
`;

const EmailLabel = styled.Text`
  margin-bottom: 10px;
`;

const EmailInput = styled.TextInput`
  border: 1px solid black;
  border-radius: 25px;
  height: 50px;
  padding-left: 20px;
`;

const PasswordFieldGroup = styled.View`
  padding-bottom: 25px;
`;

const PasswordLabel = styled.Text`
  margin-bottom: 10px;
`;

const PasswordInput = styled.TextInput`
  border: 1px solid black;
  border-radius: 25px;
  height: 50px;
  padding-left: 20px;
`;

const ForgotPasswordCTA = styled.Text`
  color: #808080;
  font-size: 16px;
  margin-bottom: 25px;
`;

const CTA = styled.View`
  background-color: black;
  border-radius: 360px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 16px 0;
  margin-bottom: 20px;
  text-align: center;
`;

const CTAText = styled.Text`
  color: white;
  font-family: "NunitoSans_600SemiBold";
  font-size: 17px;
  text-align: center;
`;