import React from 'react';
import {Container, Header, Left, Body, Title, Right} from 'native-base';
import {View, Text} from 'react-native';

const HomeScreen = () => {
  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>Home Screen</Title>
        </Body>
        <Right />
      </Header>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home Screen</Text>
      </View>
    </Container>
  );
};

export default HomeScreen;
