import React from 'react';
import {Container, Header, Left, Body, Title, Right} from 'native-base';
import {View, Text} from 'react-native';

const SettingScreen = () => {
  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>Setting Screen</Title>
        </Body>
        <Right />
      </Header>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Setting Screen</Text>
      </View>
    </Container>
  );
};

export default SettingScreen;
