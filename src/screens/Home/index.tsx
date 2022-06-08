import React, { useState } from "react";
import { ScrollView } from "react-native";
import { FriendsList } from "../../components/FriendsList";

import { Container, Input, Button, TextButton, Title } from "./styles";

export function Home() {
  const [name, setName] = useState("");
  const [friends, setFriends] = useState([]);

  async function handleSearch() {
    const response = await fetch(`http://192.168.2.124:3333/friends?q=${name}`);

    const data = await response.json();

    setFriends(data);
  }

  return (
    <Container>
      <Title>Amigos</Title>
      <Input placeholder="Nome do cliente" onChangeText={setName} />

      <Button  onPress={handleSearch}>
        <TextButton>Buscar</TextButton>
      </Button>
      <ScrollView>
        <FriendsList data={friends} />
      </ScrollView>
    </Container>
  );
}
