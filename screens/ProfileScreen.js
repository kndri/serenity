
import React from "react";
import { Header } from "react-native-elements";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import styled from "styled-components";

const ProfileScreen = ({ navigation }) => {
  return (
    <Container>
      <Header
        backgroundColor="#fbfbfb"
        containerStyle={{ paddingBottom: 30, paddingTop: 40 }}
        leftComponent={{
          text: "Profile",
          style: {
            color: "#000000",
            fontFamily: "NunitoSans_700Bold",
            fontSize: 25,
          },
        }}
        rightComponent={<Feather name="settings" size={24} color="black" />}
        leftContainerStyle={{ flex: 3 }}
      />
      <UserContainer>
        <Image source={require('../assets/user-icon.png')} />
        <UserDetails>
          <UserName>John Smith</UserName>
          <Text>johnsmith@gmail.com</Text>
        </UserDetails>
      </UserContainer>
      <LearnMoreCard>
          <LearnMoreContent>
            <LearnMoreHeading>Target Achieved</LearnMoreHeading>
            <Text>Learn more about everything that you have achieved below.</Text>
          </LearnMoreContent>
          <Image source={require('../assets/trophy-icon.png')} />
        </LearnMoreCard>
        <ProgressContainer>
          <Subtitle>Progress</Subtitle>
          <CardContainer>
            <ProgressCard>
              <ProgressIcon source={require('../assets/wave-light-icon.png')} />
              <ProgressHeading>120 h</ProgressHeading>
              <Text>Total meditation</Text>
            </ProgressCard>
            <ProgressCard>
              <ProgressIcon source={require('../assets/play-light-icon.png')} />
              <ProgressHeading>35 min</ProgressHeading>
              <Text>Long session</Text>
            </ProgressCard>
          </CardContainer>
        </ProgressContainer>
    </Container>
  );
};

export default ProfileScreen;

const Container = styled.View`
  background-color: #fbfbfb;
  flex: 1;
  padding: 0 30px;
`;

const UserContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding-bottom: 60px;
`;

const Image = styled.Image`
  height: 58px;
  width: 58px;
  border-radius: 360px;
`;

const UserDetails = styled.View`
  flex-direction: column;
  padding-left: 25px;
`;

const UserName = styled.Text`
  font-family: "NunitoSans_700Bold";
  font-size: 19px;
`;

const Text = styled.Text`
  font-family: "NunitoSans_400Regular";
  font-size: 13px;
`;

const LearnMoreCard = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 14px;
  margin-bottom: 60px;
`; 

const LearnMoreHeading = styled.Text`
  font-family: "NunitoSans_600SemiBold";
  font-size: 17px;
  padding-bottom: 5px;
`;

const LearnMoreContent = styled.View`
  flex-direction: column;
  padding-right: 20px;
  max-width: 215px;
`;

const ProgressContainer = styled.View`
  padding-bottom: 60px;
`;

const Subtitle = styled.Text`
  font-family: "NunitoSans_600SemiBold";
  font-size: 19px;
  margin-bottom: 30px;
`;

const CardContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ProgressCard = styled.View`
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 142px;
  padding: 27px 24px;
  width: 175px;
`;

const ProgressIcon = styled.Image`
  height: 24px;
  width: 24px;
  margin-bottom: 20px;
`;

const ProgressHeading = styled.Text`
  font-family: "NunitoSans_600SemiBold";
  font-size: 17px;
`;
