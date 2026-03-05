import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { NumberPad, ActionButton } from "@/components";

export default function HomeScreen() {
  const [amount, setAmount] = useState("0");

  const numAmount = parseFloat(amount) || 0;
  const hasValidAmount = numAmount > 0;

  const handleNumberPress = (num: string) => {
    if (amount === "0" && num !== ".") {
      setAmount(num);
    } else if (num === "." && amount.includes(".")) {
      return;
    } else {
      setAmount(amount + num);
    }
  };

  const handleBackspace = () => {
    if (amount.length === 1) {
      setAmount("0");
    } else {
      setAmount(amount.slice(0, -1));
    }
  };

  const handleActionPress = (action: "send" | "receive") => {
    if (!hasValidAmount) return;
    // TODO: Auth check + modal open (feat/auth branch)
  };

  return (
    <View className="flex-1 items-center px-4">
      {/* Amount Display */}
      <View className="items-center mb-8 w-full">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="max-w-[320px]"
        >
          <Text
            className="text-6xl text-dark text-center"
            style={{ fontFamily: "Jost_300Light" }}
          >
            {amount}
          </Text>
        </ScrollView>

        {/* Balance / Connect placeholder */}
        <Text
          className="mt-2 text-sm text-dark/50 underline"
          style={{
            fontFamily: "Jost_400Regular",
            textDecorationStyle: "dashed",
          }}
        >
          Connect Wallet
        </Text>
      </View>

      {/* Number Pad */}
      <View className="mb-8 w-full max-w-[320px]">
        <NumberPad
          onNumberPress={handleNumberPress}
          onBackspace={handleBackspace}
        />
      </View>

      {/* Action Buttons */}
      <View className="flex-row gap-4 w-full max-w-[320px]">
        <View className="flex-1">
          <ActionButton
            variant="send"
            onPress={() => handleActionPress("send")}
            disabled={!hasValidAmount}
          />
        </View>
        <View className="flex-1">
          <ActionButton
            variant="receive"
            onPress={() => handleActionPress("receive")}
            disabled={!hasValidAmount}
          />
        </View>
      </View>
    </View>
  );
}
