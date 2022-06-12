import React, { useMemo } from "react";
import { View, Text } from "react-native";
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
      {data.map((friend) => (
        <Friend key={String(friend.id)} data={friend} />
      ))}
    </View>
  );
}
