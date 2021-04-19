import * as React from "react";
import { Header } from "react-native-elements";
import { TouchableOpacity, Dimensions } from "react-native";
import { Formik } from "formik";
import { useFormState, useFormDispatch } from "../form-context";
import styled from "styled-components";

const windowWidth = Dimensions.get('window').width;

const SignUpEmailScreen = ({ navigation }) => {
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
        centerComponent={<Heading>Please enter your email address</Heading>}
      />
      <Formik
        innerRef={form}
        initialValues={formValues}
        initialErrors={formErrors}
        enableReinitialize
      >
        {({ values, handleChange }) => (
          <>
            <EmailFieldGroup>
            <EmailLabel>Email</EmailLabel>
            <EmailInput
                autoCapitalize="none"
                label="Email Address"
                onChangeText={handleChange("email_address")}
              />
            </EmailFieldGroup>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUpPassword")}
            >
              <CTA>
                <CTAText>Continue</CTAText>
              </CTA>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </Container>
  );
};

export default SignUpEmailScreen;

const Container = styled.View`
  background-color: #fbfbfb;
  flex: 1;
  padding: 0 30px;
  justify-content: space-between;
`;

const LeftIcon = styled.Image``;

const Heading = styled.Text`
  font-family: "NunitoSans_700Bold";
  font-size: 22px;
  line-height: 29px;
  text-align: center;
`;

const EmailFieldGroup = styled.View`

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
