
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components";

const MeditationCard = props => (
  <Card>
    <Title>{props.title}</Title>
    <Content>
      <ContentLeft>
        <Time>{props.time}</Time>
        <TouchableOpacity>
          <Icon source={require('../assets/next-button.png')} />
        </TouchableOpacity>
      </ContentLeft>
      <ContentRight>
        <Image source={require('../assets/illustration.png')} />
      </ContentRight>
    </Content>
  </Card>
);

export default MeditationCard;

const Card = styled.View`
  background-color: #fbfbfb;
  border-radius: 20px;
  height: 160px;
  margin-right: 30px;
  padding-left: 15px;
  padding-top: 32px;
  width: ${props => props.width};
  
`;

const Title = styled.Text`
  font-family: 'NunitoSans_600SemiBold';
  font-size: 17px;
  font-weight: 700;
  padding-bottom: 5px;
`;

const Content = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ContentLeft = styled.View`
  display: flex;
  flex-direction: column;
`;

const ContentRight = styled.View`

`;

const Time = styled.Text`
  font-family: 'NunitoSans_400Regular';
  font-size: 13px;
  padding-bottom: 20px;
`;

const Icon = styled.Image`
  height: 32px;
  width: 32px;
`;

const Image = styled.Image`

`;