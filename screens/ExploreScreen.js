import React from "react";
import { FlatList } from "react-native";
import { Header } from "react-native-elements";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import MeditationCard from "../components/MeditationCard";
import styled from "styled-components";

const ExploreScreen = ({ navigation }) => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
      time: "20 min",
      width: "315px",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
      time: "20 min",
      width: "100px",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
      time: "20 min",
      width: "100px",
    },
  ];

  const renderCard = ({item}) => {
    return (
    <MeditationCard title={item.title} time={item.time} width={item.width} />
  )};

  return (
    <Container>
      <Header
        backgroundColor="#fbfbfb"
        containerStyle={{ paddingBottom: 30, paddingTop: 40 }}
        leftComponent={{
          text: "Explore",
          style: {
            color: "#000000",
            fontFamily: "NunitoSans_700Bold",
            fontSize: 25,
            fontWeight: "500",
          },
        }}
        rightComponent={<Feather name="filter" size={24} color="black" />}
        leftContainerStyle={{ flex: "3" }}
      />
      <FlatList
        data={DATA}
        renderItem={renderCard}
        keyExtractor={card => card.id}
      />
    </Container>
  );
};

export default ExploreScreen;

const Container = styled.View`
  background-color: #fbfbfb;
  flex: 1;
  padding: 0 30px;
`;

const Text = styled.Text``;
