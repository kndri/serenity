import React from "react";
import { Dimensions } from 'react-native';
import styled from "styled-components";
import { Header } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const windowWidth = Dimensions.get('window').width;

const WelcomeScreen = ({ navigation })  => (
  <Container>
        <Header
        backgroundColor="#fbfbfb"
        containerStyle={{ paddingBottom: 30, paddingTop: 40 }}
        leftComponent={<Logo source={require("../assets/logo.png")} />}
      />
      <WelcomeImage source={require("../assets/welcome-image.png")} />
      <HeadingContainer>
        <Heading>Joy.</Heading>
        <Heading>Peace.</Heading>
        <Heading>Christ.</Heading>
      </HeadingContainer>
      <SubHeading>Experience mindfullness powered by Christ.</SubHeading>
      <TouchableOpacity
        onPress={() => navigation.navigate('SignUpEmail')}
      >
        <CTA>
          <CTAText>Sign up</CTAText>
        </CTA>
      </TouchableOpacity>
      <LoginContainer>
        <LoginText>Already have an account?</LoginText>
        <TouchableOpacity>
          <LoginCTA>Login</LoginCTA>
        </TouchableOpacity>
      </LoginContainer>
  </Container>
)

export default WelcomeScreen;

const Container = styled.View`
  background-color: #fbfbfb;
  flex: 1;
  align-items: center;
  padding: 0 30px;
`;

const Logo = styled.Image`
`;

const WelcomeImage = styled.Image`
`;

const HeadingContainer = styled.View`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  width: 100%;
`;

const Heading = styled.Text`
  font-family: "NunitoSans_800ExtraBold";
  font-size: 48px;
`;

const SubHeading = styled.Text`
  font-family: "NunitoSans_400Regular";
  font-size: 20px;
  margin-bottom: 30px;
  width: 100%;
`;

const CTA = styled.View`
  background-color: black;
  border-radius: 360px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 16px 0;
  margin-bottom: 20px;
  text-align: right;
  width: ${windowWidth - 30}px;
`;

const CTAText = styled.Text`
  color: white;
  font-family: "NunitoSans_600SemiBold";
  font-size: 17px;
  text-align: center;
`;

const LoginContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const LoginText = styled.Text`
  font-family: "NunitoSans_400Regular";
  font-size: 20px;
`;

const LoginCTA = styled.Text`
  font-family: "NunitoSans_800ExtraBold";
  font-size: 20px;
  margin-left: 5px;
`;