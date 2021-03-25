import React from "react";
import { ScrollView } from "react-native";
import { Header } from "react-native-elements";
import styled from "styled-components";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import MeditationCard from "../components/MeditationCard";
import CategoriesCard from "../components/CategoriesCard";

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Header
        backgroundColor="#fff"
        containerStyle={{ paddingBottom: 30, paddingTop: 40 }}
        leftComponent={{
          text: "Dashboard",
          style: { color: "#000000", fontFamily: 'NunitoSans_700Bold', fontSize: 25, fontWeight: "500" },
        }}
        rightComponent={<Feather name="filter" size={24} color="black" />}
        leftContainerStyle={{ flex: "3" }}
      />
      <DailyCard>
        <TouchableOpacity>
          <Image source={require("../assets/play-button.png")} />
        </TouchableOpacity>
        <DailyCardContent>
          <DailyCardTitle>Daily Relaxation</DailyCardTitle>
          <DailyCardText>
            It is the right time to relax and get rid of all the stress.
          </DailyCardText>
        </DailyCardContent>
      </DailyCard>
      <Subtitle>Recommended</Subtitle>
      <ScrollView
        horizontal={true}
        style={{ paddingBottom: 30 }}
        showsHorizontalScrollIndicator={false}
      >
        <MeditationCard title="Anxiety Problems" time="20 min" width="255px" />
        <MeditationCard title="Meditation Break" time="20 min" width="255px" />
        <MeditationCard title="Deep Breathing" time="20 min" width="255px" />
      </ScrollView>
      <Subtitle>Categories</Subtitle>
      <ScrollView
        horizontal={true}
        style={{ paddingBottom: 30 }}
        showsHorizontalScrollIndicator={false}
      >
        <CategoriesCard icon={<MaterialCommunityIcons name="briefcase-check-outline" size={24} color="black" />} title="Job Stress" />
        <CategoriesCard icon={<Feather name="book-open" size={24} color="black" />} title="Mind Journal" />
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;

const Container = styled.View`
  background-color: #fbfbfb;
  flex: 1;
  padding: 0 30px;
`;

const DailyCard = styled.View`
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  margin-bottom: 60px;
  padding: 25px 15px;
  width: 100%;
`;

const DailyCardContent = styled.View`
  display: flex;
  width: 100%;
`;

const Image = styled.Image`
  margin-right: 20px;
`;

const DailyCardTitle = styled.Text`
  font-family: "NunitoSans_600SemiBold";
  font-size: 17px;
  font-weight: 600;
  padding-bottom: 5px;
`;

const DailyCardText = styled.Text`
  color: #1A202C;
  font-family: "NunitoSans_400Regular";
  font-size: 13px;
  width: 205px;
`;

const Subtitle = styled.Text`
  font-family: "NunitoSans_600SemiBold";
  font-size: 19px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const Text = styled.Text``;
