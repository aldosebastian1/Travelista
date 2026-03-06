export function captureError(error, context = {}) {
  const normalizedError = error instanceof Error ? error : new Error(String(error));

  if (typeof globalThis !== "undefined" && globalThis.Sentry?.captureException) {
    globalThis.Sentry.captureException(normalizedError, { extra: context });
    return;
  }

  if (process.env.NODE_ENV !== "production") {
    console.error("[ErrorMonitor]", context, normalizedError);
  }
}
