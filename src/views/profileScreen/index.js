import React from 'react';
import {Container, Header, Left, Body, Title, Right} from 'native-base';
import {View, Text} from 'react-native';

const ProfileScreen = () => {
  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>Profile Screen</Title>
        </Body>
        <Right />
      </Header>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Profile Screen</Text>
      </View>
    </Container>
  );
};

export default ProfileScreen;
