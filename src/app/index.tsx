import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MainPage() {
  return (
    <SafeAreaView className="bg-darkGray flex-1 h-full justify-start items-center p-4 gap-y-5">
      <View className="flex mb-4 flex-col items-center justify-center gap-y-2">
        <Image
          source={require("@assets/appIcon.png")}
          width={1000}
          height={1000}
          className="w-20 h-20"
        />
        <View className="flex flex-col justify-center items-center">
          <Text className="font-DMSerif text-primary text-5xl">Tarrot</Text>
          <Text className="font-DMSerif text-primary -mt-4">
            Find out secrets about your future life
          </Text>
        </View>
      </View>
      <View className="flex flex-1 flex-row gap-x-5">
        <View className="w-1/2 flex-1 flex flex-col">
          <CardView
            image={require("@assets/MAINCARD.png")}
            title="Tarot Reader"
            description="Des"
          />
          <CardView
            image={require("@assets/MAINCARD.png")}
            title="Tarot Reader"
            description="Des"
          />
        </View>
        <View className="w-1/2 flex-1 flex flex-col">
          <CardView
            image={require("@assets/MAINCARD.png")}
            title="Learn Horoscope"
            description="Horoscope is the study..."
          />
          <CardView
            image={require("@assets/MAINCARD.png")}
            title="Tarot Reader"
            description="Des"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

function CardView({
  className,
  image,
  title,
  description,
}: {
  className?: string;
  image: ImageSourcePropType;
  title: string;
  description: string;
}) {
  return (
    <TouchableOpacity
      className={
        "border border-primary/50 flex flex-1 rounded-2xl overflow-hidden my-2 justify-center items-center" +
        (className ? ` ${className}` : "")
      }
    >
      <ImageBackground
        resizeMode="repeat"
        resizeMethod="resize"
        className="flex-1 flex justify-center items-center py-6 px-2"
        source={image}
      >
        <View className="flex justify-evenly items-center flex-1 ">
          <View
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.43,
              shadowRadius: 9.51,

              elevation: 15,
            }}
            className="shadow-2xl"
          >
            <Image
              source={require("@assets/Card.png")}
              className="h-36 flex rotate-12 "
              resizeMode="contain"
            />
          </View>
          <View className="w-full flex ">
            <Text className="text-white font-DMSerif text-xl">{title}</Text>
            <Text className="text-white font-sans text-xs">{description}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
