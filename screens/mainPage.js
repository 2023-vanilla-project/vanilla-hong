import React from "react";
import styled from "styled-components/native";

const Btn = styled.TouchableOpacity`
    flex:1;
    justify-content: center;
    align-items: center;
`
const Title = styled.Text`
`;

const MainPage = () => (
    <Btn>
        <Title>MainPage_Title</Title>
    </Btn>
);

export default MainPage;