import { Vibration } from "react-native";

export const hapticLight = () => Vibration.vibrate(10);
export const hapticMedium = () => Vibration.vibrate(20);
export const hapticSuccess = () => Vibration.vibrate(30);
export const hapticError = () => Vibration.vibrate([0, 50, 30, 50]);
