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
            image={require("@assets/CARD.FRONT.png")}
            ImageClassName="h-44"
            title="Tarot Reader"
            description="Let the card do all rest of the magic"
          />
          <CardView
            image={require("@assets/ball.png")}
            title="Crystal Ball"
            ImageClassName="-rotate-12"
            description="Des"
          />
        </View>
        <View className="w-1/2 flex-1 flex flex-col">
          <View className="flex-[.4] ">
            <CardView
              image={require("@assets/horoscope.png")}
              title="Learn Horoscope"
              ImageClassName="h-28"
              description="Horoscope is the study..."
              className=" h-[40%] rounded-full "
            />
          </View>
          <View className="flex-[.6] ">
            <CardView
              image={require("@assets/Card.png")}
              title="Palmistry"
              description="Des"
              className=" h-[60%]"
            />
          </View>
        
        </View>
      </View>
    </SafeAreaView>
  );
}

function CardView({
  className,
  ImageClassName,
  image,
  title,
  description,
}: {
  className?: string;
  ImageClassName?: string;
  image: ImageSourcePropType;
  title: string;
  description: string;
}) {
  return (
    <TouchableOpacity
      className={
        "border border-primary/50 flex flex-1 rounded-2xl overflow-hidden my-2 justify-center items-center " +
        (className ? ` ${className}` : "")
      }
    >
      <ImageBackground
        resizeMode="stretch"
        resizeMethod="resize"
        className="flex-1 flex justify-center items-center py-6 px-2"
        source={require("@assets/MAINCARD.png")}
      >
        <View className="flex justify-evenly items-center flex-1 ">
          <View
            className="shadow-2xl"
          >
            <Image
              source={image}
              className={
                "h-32 flex rotate-12 " + (ImageClassName ? ImageClassName : "")
              }
              resizeMode="contain"
            />
          </View>
          <View className="w-full flex ">
            <Text className="text-white font-DMSerif text-2xl text-center">{title}</Text>
            {/* <Text className="text-white font-sans text-xs">{description}</Text> */}
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
