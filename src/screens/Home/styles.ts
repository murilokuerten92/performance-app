import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled.View`
flex: 1;
margin-top: 100px;
padding: 25px;
`;

export const Input = styled(TextInput)`
border-width: 1px;
padding: 7px;
margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  background: #c2c2c2;
  padding: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

export const TextButton = styled.Text`

`

export const Title = styled.Text`
  font-size: 24px;
  color: #000;
  font-weight: bold;
  margin-bottom: 12px;
  `