declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

export function isRecaptchaEnabled(): boolean {
  return RECAPTCHA_SITE_KEY.length > 0;
}

export function executeRecaptcha(action: string): Promise<string | null> {
  if (!isRecaptchaEnabled()) return Promise.resolve(null);

  return new Promise((resolve) => {
    const run = () => {
      window.grecaptcha
        ?.execute(RECAPTCHA_SITE_KEY, { action })
        .then(resolve)
        .catch(() => resolve(null));
    };

    if (window.grecaptcha?.ready) {
      window.grecaptcha.ready(run);
    } else {
      resolve(null);
    }
  });
}
