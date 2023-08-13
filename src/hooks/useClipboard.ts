import { useState, useCallback } from "react";

const COPIED_TIMEOUT_DURATION = 3000;

export const useClipboard = (text: string) => {
  const [isCopied, setCopied] = useState(false);

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => setCopied(false), COPIED_TIMEOUT_DURATION);
  }, [text]);

  return { isCopied, copyToClipboard };
};