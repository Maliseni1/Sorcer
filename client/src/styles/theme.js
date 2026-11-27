// Single source of truth for recurring Tailwind class combinations.
//
// Every component in src/ should read colors/surfaces/text styles from here
// instead of hardcoding utility strings. Change the brand look in one place.

export const theme = {
    text: {
        heading: 'text-night dark:text-cream',
        body: 'text-night/60 dark:text-cream/60',
        muted: 'text-night/50 dark:text-cream/50',
        subtle: 'text-night/35 dark:text-cream/35',
        faint: 'text-night/30 dark:text-cream/30',
    },
    accent: {
        // gold text on light backgrounds needs a darker shade to stay readable;
        // on dark backgrounds the full-brightness gold reads fine.
        text: 'text-gold-dark dark:text-gold',
        iconBg: 'bg-gold/20',
    },
    surface: {
        card: 'bg-white dark:bg-cream/[0.04] border border-night/10 dark:border-cream/10',
        field: 'border border-night/15 dark:border-cream/15 bg-black/[0.02] dark:bg-white/[0.04]',
        // The brand header band (Login modal) and splash screen are always navy,
        // regardless of light/dark mode — it's the icon's own self-contained color.
        brandBand: 'bg-night',
    },
    border: {
        subtle: 'border-night/10 dark:border-cream/10',
        standard: 'border-night/30 dark:border-cream/30',
    },
}
