import * as React from "react";
import { Header } from "react-native-elements";
import { TouchableOpacity, Dimensions } from "react-native";
import { AuthContext } from "../App";
import styled from "styled-components";

const SettingsScreen = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);

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
        centerComponent={<Heading>Settings</Heading>}
      />
      <ListContainer>
        <ListItem>
          <ListDetail onPress={() => signOut()} >
            <ListIcon source={require("../assets/logout-icon.png")} />
            <ListTitle>Logout</ListTitle>
          </ListDetail>
        </ListItem>
      </ListContainer>
    </Container>
  );
};

export default SettingsScreen;

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

const ListContainer = styled.View`
`;

const ListItem = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 30px;
`;

const ListIcon = styled.Image`
  margin-right: 20px;
`;

const ListTitle = styled.Text`
  font-family: 'NunitoSans_700Bold';
  font-size: 17px;
`;

const ListDetail = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
