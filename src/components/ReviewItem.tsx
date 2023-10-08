import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { ReviewItemProps } from "../types/type";
import StarRating from "react-native-star-rating-widget";
import { ReviewItemStyle } from "../Styles/ReviewItem";

const ReviewItem = ({ item }: ReviewItemProps) => {
  return (
    <View style={ReviewItemStyle.container}>
      <View style={ReviewItemStyle.ImageContainer}>
        <Image
          source={{
            uri: item?.Image,
          }}
          style={ReviewItemStyle.Image}
        />
      </View>
      <View style={ReviewItemStyle.TextContainer}>
        <View style={ReviewItemStyle.titleContainer}>
          <Text style={ReviewItemStyle.Title}>{item?.name}</Text>
          <Text style={ReviewItemStyle.Date}>{item?.date}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            margin: -5,
          }}
        >
          <StarRating
            rating={item?.Rating}
            onChange={(rating) => console.table(rating)} // for ignoring
            starSize={17}
            emptyColor="#DFDFDF"
            enableHalfStar
            maxStars={5}
          />
          <Text style={ReviewItemStyle.RatingText}>{item?.Rating}</Text>
        </View>
        <View style={ReviewItemStyle.ReviewTextContainer}>
          <Text
            numberOfLines={3}
            ellipsizeMode="tail"
            style={ReviewItemStyle.ReviewText}
          >
            {item?.Reviewed}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;
