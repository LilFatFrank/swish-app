import LogoSvg from "@/assets/logo.svg";

interface LogoProps {
  width?: number;
  height?: number;
}

export function Logo({ width = 48, height = 24 }: LogoProps) {
  return <LogoSvg width={width} height={height} />;
}
