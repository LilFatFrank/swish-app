import { View, Text, Pressable } from "react-native";
import DeleteIcon from "@/assets/delete.svg";
import { hapticLight } from "@/utils/haptics";

interface NumberPadProps {
  onNumberPress: (num: string) => void;
  onBackspace: () => void;
}

export function NumberPad({ onNumberPress, onBackspace }: NumberPadProps) {
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0"];

  return (
    <View className="w-full" style={{ flexDirection: "row", flexWrap: "wrap" }}>
      {keys.map((num) => (
        <View key={num} style={{ width: "33.33%" }} className="items-center">
          <Pressable
            onPress={() => { hapticLight(); onNumberPress(num); }}
            className="h-14 w-full items-center justify-center rounded-xl active:bg-dark/10"
          >
            <Text
              className="text-2xl text-dark"
              style={{ fontFamily: "Jost_500Medium" }}
            >
              {num}
            </Text>
          </Pressable>
        </View>
      ))}
      <View style={{ width: "33.33%" }} className="items-center">
        <Pressable
          onPress={() => { hapticLight(); onBackspace(); }}
          className="h-14 w-full items-center justify-center rounded-xl active:bg-dark/10"
        >
          <DeleteIcon width={28} height={19} />
        </Pressable>
      </View>
    </View>
  );
}
