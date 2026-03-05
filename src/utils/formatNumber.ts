export function formatNumber(num: number): string {
  if (num < 0) {
    return `-${formatNumber(Math.abs(num))}`;
  }

  const suffixes = [
    { value: 1e9, suffix: "B" },
    { value: 1e6, suffix: "M" },
    { value: 1e3, suffix: "K" },
  ];

  for (const { value, suffix } of suffixes) {
    if (num >= value) {
      const scaled = num / value;
      const rounded = Math.ceil(scaled * 100) / 100;
      const formatted = rounded.toFixed(2).replace(/\.?0+$/, "");
      return `${formatted}${suffix}`;
    }
  }

  if (Number.isInteger(num)) {
    return num.toString();
  }

  const rounded = Math.ceil(num * 100) / 100;
  return rounded.toFixed(2).replace(/\.?0+$/, "");
}

export function formatUSDC(amount: number): string {
  return `${formatNumber(amount)} USDC`;
}
