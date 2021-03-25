
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components";

const CategoriesCard = props => (
  <TouchableOpacity>
  <Card>
    {props.icon}
    <Title>{props.title}</Title>
  </Card>
  </TouchableOpacity>
);

export default CategoriesCard;


const Card = styled.View`
  background-color: white;
  border-radius: 20px;
  height: 142px;
  margin-right: 30px;
  padding-left: 15px;
  padding-top: 27px;
  width: 142px;
`;

const Title = styled.Text`
  font-family: 'NunitoSans_600SemiBold';
  font-size: 17px;
  font-weight: 700;
  padding-top: 20px;
`;