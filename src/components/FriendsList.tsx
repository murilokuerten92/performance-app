import React, { useMemo } from "react";
import { View, Text, FlatList } from "react-native";
import { Friend } from "./Friend";
import { Friend as FriendTypes } from "../types/friends";

interface Props {
  data: FriendTypes[];
}

export function FriendsList({ data }: Props) {
  const totalLikes = useMemo(() => {
    return data.reduce((likes, friend) => {
      return likes + friend.likes;
    }, 0);
  }, [data]);

  return (
    <View>
      <Text>Total de likes: {totalLikes}</Text>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Friend data={item}  />
        )}
      />
    </View>
  );
}
