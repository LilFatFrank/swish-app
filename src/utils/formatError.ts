const ERROR_MAP: [RegExp, string][] = [
  [/insufficient.*balance/i, "Insufficient USDC balance"],
  [/insufficient.*funds/i, "Insufficient funds"],
  [/insufficient.*lamports/i, "Not enough SOL for network fees"],
  [/0x1$/i, "Insufficient balance for this transaction"],
  [/custom program error.*0x1/i, "Insufficient balance for this transaction"],
  [/account not found/i, "Wallet account not found"],
  [/blockhash not found/i, "Transaction expired. Please try again"],
  [/block height exceeded/i, "Transaction expired. Please try again"],
  [/transaction.*expired/i, "Transaction expired. Please try again"],
  [/transaction.*timeout/i, "Transaction timed out. Please try again"],
  [/signature verification/i, "Signature verification failed. Please reconnect"],
  [/invalid session/i, "Session expired. Please reconnect your wallet"],
  [/not registered/i, "This user hasn't set up their wallet yet"],
  [/could not resolve/i, "Could not find a wallet for this X handle"],
  [/network.*error/i, "Network error. Check your connection"],
  [/failed to fetch/i, "Network error. Check your connection"],
  [/user rejected/i, "Transaction was cancelled"],
  [/signing rejected/i, "Transaction was cancelled"],
];

export function formatError(error: unknown): string {
  const message =
    error instanceof Error
      ? error.message
      : typeof error === "string"
        ? error
        : "Something went wrong";

  for (const [pattern, friendly] of ERROR_MAP) {
    if (pattern.test(message)) {
      return friendly;
    }
  }

  // If message is short enough and doesn't look like JSON/technical, use it as-is
  if (message.length < 80 && !message.includes("{") && !message.includes("0x")) {
    return message;
  }

  return "Something went wrong. Please try again";
}
