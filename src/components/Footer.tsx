import { View, Pressable } from "react-native";
import { usePathname, router } from "expo-router";
import HomeIcon from "@/assets/home-icon.svg";
import ProfileIcon from "@/assets/profile-icon.svg";

export function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isProfile = pathname === "/profile";

  return (
    <View className="items-center pb-8">
      <View
        className="flex-row items-center gap-1 px-2 py-2 rounded-full"
        style={{
          backgroundColor: "rgba(18, 18, 18, 0.08)",
        }}
      >
        <Pressable
          onPress={() => router.push("/")}
          className="py-1 px-2 rounded-full"
        >
          <HomeIcon
            width={24}
            height={24}
            opacity={isHome ? 1 : 0.5}
          />
        </Pressable>
        <Pressable
          onPress={() => router.push("/profile")}
          className="py-1 px-2 rounded-full"
        >
          <ProfileIcon
            width={24}
            height={24}
            opacity={isProfile ? 1 : 0.5}
          />
        </Pressable>
      </View>
    </View>
  );
}
