export const focusRing =
  "focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-salmon";

export const buttonBase = `inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-sm font-semibold leading-none transition-colors ${focusRing}`;

export const buttonPrimary = `${buttonBase} bg-brand text-paper hover:bg-brand-deep`;

export const buttonSecondary = `${buttonBase} bg-paper text-ink ring-1 ring-inset ring-ink/15 hover:bg-ink hover:text-paper`;

export const buttonInverse = `${buttonBase} bg-paper text-brand hover:bg-rice`;

export const buttonGhostLight = `${buttonBase} bg-transparent text-paper ring-1 ring-inset ring-paper/45 hover:bg-paper hover:text-ink`;

export const buttonOnDark = `${buttonBase} bg-paper text-ink hover:bg-salmon`;

export const container = "mx-auto w-full max-w-6xl px-5";
