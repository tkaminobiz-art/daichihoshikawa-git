export function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    // Record the managed runtime patch in private logs for security verification.
    console.info(`[security-runtime] node=${process.version}`);
  }
}
