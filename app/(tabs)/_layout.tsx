import { Stack, Tabs } from "expo-router";
import React from "react";
import { Platform, TouchableOpacity } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import ThemeToggler from "@/components/ThemeToggler";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      {/* Остальные табы */}

      <Tabs.Screen
        name="index"
        options={{
          title: "Главная",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Содержание",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="bars" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cube"
        options={{
          title: "Кубы",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="bars" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
