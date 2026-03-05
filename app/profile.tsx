import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Spinner } from "@/components";

type TabType = "wallet" | "activity";

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState<TabType>("wallet");

  // TODO: Auth check — show connect wallet if not authenticated (feat/auth branch)

  return (
    <View className="flex-1 items-center px-4">
      {/* Header placeholder */}
      <View className="w-full max-w-[320px] mb-6">
        <Text
          className="text-dark text-lg"
          style={{ fontFamily: "Jost_500Medium" }}
        >
          Connect Wallet
        </Text>
      </View>

      {/* Tab Toggle */}
      <View className="w-full max-w-[320px] flex-row mb-6 bg-dark/5 rounded-full p-1">
        <Pressable
          onPress={() => setActiveTab("wallet")}
          className={`flex-1 h-8 rounded-full items-center justify-center ${
            activeTab === "wallet" ? "bg-dark" : ""
          }`}
        >
          <Text
            className={`text-sm ${
              activeTab === "wallet" ? "text-light" : "text-dark/50"
            }`}
            style={{ fontFamily: "Jost_500Medium" }}
          >
            Wallet
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setActiveTab("activity")}
          className={`flex-1 h-8 rounded-full items-center justify-center ${
            activeTab === "activity" ? "bg-dark" : ""
          }`}
        >
          <Text
            className={`text-sm ${
              activeTab === "activity" ? "text-light" : "text-dark/50"
            }`}
            style={{ fontFamily: "Jost_500Medium" }}
          >
            Activity
          </Text>
        </Pressable>
      </View>

      {/* Tab Content */}
      {activeTab === "wallet" ? (
        <View className="w-full max-w-[320px] items-center">
          {/* Total Balance */}
          <View className="items-center mb-6">
            <Text
              className="text-dark/50 text-sm mb-1"
              style={{ fontFamily: "Jost_400Regular" }}
            >
              Total Balance
            </Text>
            <Text
              className="text-4xl text-dark"
              style={{ fontFamily: "Jost_400Regular" }}
            >
              $0
            </Text>
          </View>

          {/* Placeholder for token rows, stats, buttons */}
          <Text
            className="text-dark/30 text-sm"
            style={{ fontFamily: "Jost_400Regular" }}
          >
            Connect wallet to view balances
          </Text>
        </View>
      ) : (
        <View className="w-full max-w-[320px] items-center py-8">
          <Text
            className="text-dark/50 text-sm"
            style={{ fontFamily: "Jost_400Regular" }}
          >
            No activity yet
          </Text>
        </View>
      )}
    </View>
  );
}
