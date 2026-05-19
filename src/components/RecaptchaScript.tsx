"use client";

import Script from "next/script";
import { isRecaptchaEnabled, RECAPTCHA_SITE_KEY } from "@/lib/recaptcha-client";

export function RecaptchaScript() {
  if (!isRecaptchaEnabled()) return null;

  return (
    <Script
      src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
      strategy="afterInteractive"
    />
  );
}
