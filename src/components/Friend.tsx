import React, { memo } from "react";
import { Text } from "react-native";
import { Friend as FriendTypes } from "../types/friends";
interface Props {
  data: FriendTypes;
}

function FriendComponent({ data }: Props) {
  return (
    <Text>
      {data.name} - Likes: {data.likes} 
      Online: {data.online}
    </Text>
  );
}

export const Friend = memo(FriendComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data);
});
