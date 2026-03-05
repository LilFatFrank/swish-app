import { ActivityIndicator } from "react-native";

interface SpinnerProps {
  size?: number;
  color?: string;
}

export function Spinner({ size = 48, color = "#121212" }: SpinnerProps) {
  return <ActivityIndicator size={size > 36 ? "large" : "small"} color={color} />;
}
