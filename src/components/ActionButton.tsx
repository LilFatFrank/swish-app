import { Pressable } from "react-native";
import SendIcon from "@/assets/send.svg";
import ReceiveIcon from "@/assets/receive.svg";

interface ActionButtonProps {
  variant: "send" | "receive";
  onPress?: () => void;
  disabled?: boolean;
}

export function ActionButton({ variant, onPress, disabled }: ActionButtonProps) {
  const Icon = variant === "send" ? SendIcon : ReceiveIcon;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className="w-full h-10 bg-dark rounded-full items-center justify-center"
      style={[
        {
          shadowColor: "#121212",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.15,
          shadowRadius: 12,
          elevation: 4,
        },
        disabled ? { opacity: 0.4 } : {},
      ]}
    >
      <Icon width={24} height={16} />
    </Pressable>
  );
}
