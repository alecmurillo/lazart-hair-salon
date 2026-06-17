# Design System — Agent Instructions

This skill describes the visual design language for all UI output. Every component, layout, and page should follow the design specs in the module files below. These describe *what the design looks like* — you choose how to implement the styles.

## Style
A refined, monochromatic luxury interface with clean rounded containers, elegant interactive elements, monospace typography, subtle border lines, generous whitespace, oversized display headings, and a high-contrast black and white palette


## Before Writing Any Code

1. **Read every module that applies.** For a landing page, read at minimum: `layout.md`, `typography.md`, `colors.md`, `buttons.md`, `cards.md`, `shadows.md`, `radius.md`, `borders.md`. Do NOT write JSX until you have loaded all relevant modules.

## Critical Rules

- **Tokens are AGNOSTIC, NOT Tailwind classes:** The tokens defined in the `.md` files (like `neutral-primary-soft`, `heading`, `border-default`) are agnostic design system tokens, NOT literal Tailwind classes. Do not blindly use classes like `bg-neutral-primary-soft` unless you have explicitly mapped them in the CSS/Tailwind configuration. You must implement the mapping yourself.

- **Cross-reference modules.** A card containing buttons must satisfy both `cards.md` AND `buttons.md`.
- **Dark mode is automatic.** The CSS custom properties resolve differently in light/dark via `@media (prefers-color-scheme: dark)`. Never manually swap colors.
- **Every interactive element needs hover, focus, and disabled states** — defined in the relevant module.
- **Use semantic HTML:** proper heading hierarchy (`h1`→`h6`), `<button>` for actions, `<a>` for navigation, ARIA attributes where needed.

## Module Index

### Foundation (read first for any UI work)
- [colors.md](colors.md) — all background, text, and border color tokens
- [typography.md](typography.md) — heading scale, paragraphs, labels, links
- [layout.md](layout.md) — spacing rhythm, containers, animation, visual depth
- [radius.md](radius.md) — border-radius scale
- [shadows.md](shadows.md) — elevation tokens
- [borders.md](borders.md) — border widths and styles

### Components
- [buttons.md](buttons.md) — button variants, sizes, states, glint effect
- [button-group.md](button-group.md) — grouped button structure
- [cards.md](cards.md) — card structure, background, interactivity
- [inputs.md](inputs.md) — form controls, labels, states
- [alerts.md](alerts.md) — alert variants
- [badges.md](badges.md) — badge variants, sizes, dismissible chips
- [lists.md](lists.md) — list components
- [avatars.md](avatars.md) — avatar variants, sizes, indicators
- [icon-shapes.md](icon-shapes.md) — icon containers

### Complex Components
- [accordion.md](accordion.md) — accordion variants
- [dropdown.md](dropdown.md) — dropdown menus
- [modals.md](modals.md) — modal dialogs
- [tabs.md](tabs.md) — tab navigation
- [tables.md](tables.md) — table structure
- [pagination.md](pagination.md) — pagination components
- [sidebars.md](sidebars.md) — sidebar navigation
- [radios-checkboxes-toggle.md](radios-checkboxes-toggle.md) — selection controls
- [tooltips-popovers.md](tooltips-popovers.md) — tooltips and popovers
- [content.md](content.md) — grid system, responsiveness

---

## Source file: `accordion.md`

# Accordion

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Wrapper:** full width, 1px border (border-default color), 12px radius — refined rounded corners
- **Item separator:** 1px bottom border (border-default) on every item except last

## Trigger (Button)

- **Layout:** flex, space-between, full width
- **Padding:** 20px horizontal, 16px vertical
- **Font:** 14px, medium weight
- **Text color:** heading
- **Background:** neutral-secondary-soft
- **Hover:** neutral-tertiary-soft background
- **Focus:** outline none, 2px ring in brand color
- **Transition:** colors, 150ms
- **Open state:** neutral-tertiary-soft background

## Panel (Content)

- **Padding:** 20px horizontal, 16px vertical
- **Background:** neutral-primary-soft
- **Top border:** 1px, border-default color
- **Font:** 14px, body color, 1.625 line-height

## Chevron Icon

- Size: 16x16px
- Color: body text color
- Closed: 0deg rotation
- Open: 180deg rotation
- Transition: transform, 150ms

## Variants

### Default (Collapse)
One panel open at a time. Items stacked inside a single shared bordered wrapper with 12px radius.

### Separated Cards
Each item is independent — has its own 1px border, 12px radius, and shadow-xs. 8px bottom margin between items. No shared outer border.

### Always Open
Multiple panels can expand simultaneously. Same styling as Default.

### Flush
No outer border. Trigger and panel have transparent backgrounds. Only bottom border dividers between items. Use inside containers that already provide a background.

## States

| State | Trigger appearance |
|---|---|
| Closed | heading text, neutral-secondary-soft background |
| Open | heading text, neutral-tertiary-soft background |
| Hover | neutral-tertiary-soft background |
| Focus | 2px brand ring, no outline |
| Disabled | fg-disabled text, not-allowed cursor, no hover/focus |

---

## Source file: `alerts.md`

# Alerts

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Padding:** 16px
- **Radius:** 12px (base) — refined rounded corners
- **Border:** 1px
- **Heading:** 16px, medium weight
- **Body:** 14px, normal weight, 1.6 line-height

## Variants

### Brand
- **Background:** brand-softer
- **Border:** border-brand-subtle
- **Text:** fg-brand-strong

### Success
- **Background:** success-soft
- **Border:** border-success-subtle
- **Text:** fg-success-strong

### Danger
- **Background:** danger-soft
- **Border:** border-danger-subtle
- **Text:** fg-danger-strong

### Warning
- **Background:** warning-soft
- **Border:** border-warning-subtle
- **Text:** fg-warning

---

## Source file: `avatars.md`

# Avatars

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Circular shape:** fully rounded (9999px)
- **Rounded square shape:** 12px radius (refined rounded corners)
- **Default size:** 40x40px
- **Image fit:** cover

## Sizes

| Size | Dimensions | Radius |
|---|---|---|
| Extra Small | 18x18px | 4px |
| Small | 24x24px | 4px |
| Base | 32x32px | 12px |
| Large | 44x44px | 12px |
| XL | 56x56px | 12px |
| 2XL | 64x64px | 12px |

## Bordered Avatar

- 4px padding, fully rounded, 2px outline in border-default color
- Alternative: 2px box-shadow ring in border-default color

## Stacked Avatars

- Displayed in a row (flex)
- Each avatar: 40x40px, fully rounded, 2px border in border-buffer color
- Overlap: -16px negative margin on all except first

### Stacked Counter
- Same size as avatars (40x40px), fully rounded
- Background: dark-strong, text: white, 12px font, medium weight
- Same overlap margin as other avatars

## Avatar with Text

- Flex row, 10px gap between avatar and text
- Avatar: 40x40px, fully rounded, cover fit
- Name: heading color, medium weight
- Subtitle: 14px, body color

---

## Source file: `badges.md`

# Badges

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Border:** 1px
- **Default radius:** 8px — all badges have refined rounded corners
- **Pill radius:** 8px

## Sizes

| Size | Font size | Horizontal padding | Vertical padding |
|---|---|---|---|
| Default (small) | 12px | 10px | 4px |
| Large | 14px | 12px | 6px |

## Variants

### Brand
- **Background:** brand-softer
- **Border:** border-brand-subtle
- **Text:** fg-brand-strong

### Alternative (Neutral Soft)
- **Background:** neutral-primary-soft
- **Border:** border-default
- **Text:** heading

### Gray (Neutral Medium)
- **Background:** neutral-secondary-medium
- **Border:** border-default
- **Text:** heading

### Danger
- **Background:** danger-soft
- **Border:** border-danger-subtle
- **Text:** fg-danger-strong

### Success
- **Background:** success-soft
- **Border:** border-success-subtle
- **Text:** fg-success-strong

### Warning
- **Background:** warning-soft
- **Border:** border-warning-subtle
- **Text:** fg-warning

### Dark
- **Background:** dark
- **Border:** transparent
- **Text:** white

## Pill Badges

All badges use 8px radius by default (refined rounded shape).

## Badges with Icons

- Icon size (default): 12x12px
- Icon size (large): 14x14px
- Icon spacing: 4px margin next to label

## Icon-only Badge

Square shape — equalize dimensions to 24x24px, no horizontal text padding.

## Dismissible Badges

Badge content + a close button. Close button hover backgrounds per variant:

| Variant | Close button hover background |
|---|---|
| Brand | brand-soft |
| Alternative | neutral-tertiary |
| Gray | neutral-quaternary |
| Danger | danger-medium |
| Success | success-medium |
| Warning | warning-medium |

## Dot / Notification Badge

- Positioned absolutely: -4px top, -4px right
- Size: 12x12px, fully rounded
- 2px border in border-buffer color
- Background: danger

---

## Source file: `borders.md`

# Borders

## Width Scale

| Context | Width |
|---|---|
| Default (inputs, buttons, cards, sections) | 1px |
| Emphasis / focus | 2px |

## Rules

- Whitespace is the primary separation mechanism — borders are secondary, shadows tertiary
- Use solid borders by default
- Dashed borders only for special cases like file dropzones
- Components in the same family must use matching border widths
- Never mix 1px and 2px borders within a single component
- Section dividers are subtle and span the full viewport width as horizontal rules

## Usage

| Context | Width |
|---|---|
| Inputs / selects / textareas | 1px default; 2px on focus or error |
| Buttons | 1px for variants that require outlining |
| Cards / containers | 1px, subtle borders for refined rounded containers |
| Sections | 1px full-width top/bottom borders spanning the viewport |

---

## Source file: `button-group.md`

# Button Groups

> Dependencies: `buttons.md`, `colors.md`, `radius.md`

## Core Specs

- **Wrapper:** inline-flex, 12px radius, shadow-xs
- **Children overlap:** -1px left margin on all except first button
- **Buttons inside the group must NOT have individual shadows.** Only the wrapper has a shadow.

## Anatomy

### Wrapper
- Display: inline-flex
- Radius: 12px
- Shadow: shadow-xs

### First Button
- 8px radius on inline-start side only, 0 on inline-end

### Middle Button(s)
- No radius (0 on all corners)

### Last Button
- 8px radius on inline-end side only, 0 on inline-start

### All buttons except first
- -1px left margin to overlap borders

## Rules

- Buttons inside groups follow all styles from `buttons.md` (background, border, focus rings) except individual shadows
- Icon-only buttons: 16x16px icon, match height of text buttons

---

## Source file: `buttons.md`

# Buttons

> Dependencies: `colors.md`, `radius.md`, `shadows.md`

## Core Specs (every button except ghost and disabled)

- **Radius:** 8px (default) — all buttons have refined rounded corners
- **Border:** 1px solid
- **Shadow:** shadow-xs
- **Glint effect:** Every button except ghost and disabled gets a combined box-shadow that layers the base shadow with an inset top-edge highlight and a subtle outer glow:
  - `var(--shadow-xs), inset var(--color-1-400) 0 1px 0px 0px, var(--color-1-700) 0 2px 4px -2px`
- **Font weight:** 500 (medium)
- **Font:** "IBM Plex Mono", monospace
- **Box sizing:** border-box
- **Transition:** color transitions on hover

## Sizes

| Size | Font size | Horizontal padding | Vertical padding |
|---|---|---|---|
| Extra small | 12px | 16px | 8px |
| Small | 14px | 20px | 10px |
| Base (default) | 15px | 24px | 12px |
| Large | 16px | 32px | 16px |
| Extra large | 16px | 40px | 18px |

## Variants

### Brand
- **Background:** brand token
- **Border:** transparent
- **Text:** white
- **Hover:** brand-strong background
- **Focus ring:** 4px, brand-medium color
- **Glint:** yes

### Secondary
- **Background:** neutral-secondary-medium
- **Border:** border-default-medium
- **Text:** body color
- **Hover:** neutral-tertiary-medium background, heading text color
- **Focus ring:** 4px, neutral-tertiary color
- **Glint:** yes

### Tertiary
- **Background:** neutral-primary-soft
- **Border:** border-default
- **Text:** body color
- **Hover:** neutral-secondary-medium background, heading text color
- **Focus ring:** 4px, neutral-tertiary-soft color
- **Glint:** yes

### Success
- **Background:** success token
- **Border:** transparent
- **Text:** white
- **Hover:** success-strong background
- **Focus ring:** 4px, success-medium color
- **Glint:** yes

### Danger
- **Background:** danger token
- **Border:** transparent
- **Text:** white
- **Hover:** danger-strong background
- **Focus ring:** 4px, danger-medium color
- **Glint:** yes

### Warning
- **Background:** warning token
- **Border:** transparent
- **Text:** white
- **Hover:** warning-strong background
- **Focus ring:** 4px, warning-medium color
- **Glint:** yes

### Dark
- **Background:** dark token
- **Border:** transparent
- **Text:** white
- **Hover:** dark-strong background
- **Focus ring:** 4px, neutral-tertiary color
- **Glint:** yes

### Ghost (NO shadow, NO glint)
- **Background:** transparent
- **Border:** transparent
- **Text:** heading color
- **Hover:** neutral-secondary-medium background
- **Focus ring:** 4px, neutral-tertiary color
- **No shadow, no glint effect**

### Disabled (NO shadow, NO glint)
- **Background:** disabled token
- **Border:** border-default-medium
- **Text:** fg-disabled color
- **Cursor:** not-allowed
- **No hover, no focus, no shadow, no glint**

## Icons in Buttons

- Icon size: 16x16px
- Spacing: 8px gap between icon and label
- Layout: inline-flex, vertically centered

---

## Source file: `cards.md`

# Cards

> Dependencies: `colors.md`, `radius.md`, `shadows.md`, `typography.md`

## Core Specs

- **Background:** neutral-primary-soft
- **Border:** 1px, border-default color
- **Radius:** 12px (base) — all cards have refined rounded corners
- **Shadow:** shadow-xs

## Card Heading

- Desktop: 20px, medium weight, heading color
- Mobile: 16px, medium weight, heading color
- Never skip heading levels — the page hierarchy must logically arrive at the card heading level.

## States

### Static Card (no interactivity)
- Background: neutral-primary-soft
- Border: 1px, border-default
- Radius: 12px
- Shadow: shadow-xs
- No hover styles. Non-interactive cards must NOT have hover background changes.

### Interactive Card (clickable)
- Same base styles as static card
- Hover: neutral-secondary-medium background
- Transition: colors
- Cursor: pointer

## Rules

- Background: neutral-primary-soft
- Border: 1px, border-default
- Radius: 12px
- Shadow: shadow-xs
- Interactive hover: neutral-secondary-medium background
- Non-interactive: no hover styles

---

## Source file: `colors.md`

# Color Tokens


## Background Tokens

### Neutral
| Token | Light | Dark |
|---|---|---|
| neutral-primary-soft | #FFFFFF | #0C0C0C |
| neutral-primary | #FFFFFF | #060606 |
| neutral-primary-medium | #FAFAFA | #141414 |
| neutral-primary-strong | #F2F2F2 | #1E1E1E |
| neutral-secondary-soft | #FAFAFA | #0C0C0C |
| neutral-secondary | #F5F5F5 | #060606 |
| neutral-secondary-medium | #F0F0F0 | #141414 |
| neutral-secondary-strong | #E8E8E8 | #1E1E1E |
| neutral-tertiary-soft | #E0E0E0 | #141414 |
| neutral-tertiary | #E0E0E0 | #1C1C1C |
| neutral-tertiary-medium | #D0D0D0 | #262626 |
| neutral-quaternary | #C0C0C0 | #262626 |
| quaternary-medium | #B0B0B0 | #333333 |
| gray | #999999 | #444444 |

### Brand
| Token | Light | Dark |
|---|---|---|
| brand-softer | #F5F5F5 | #1A1A1A |
| brand-soft | #E0E0E0 | #333333 |
| brand | #1A1A1A | #E5E5E5 |
| brand-medium | #C0C0C0 | #333333 |
| brand-strong | #000000 | #FFFFFF |

### Status
| Token | Light | Dark |
|---|---|---|
| success-soft | #F0FDF4 | #002A1F |
| success | #16A34A | #22C55E |
| success-medium | #DCFCE7 | #004D38 |
| success-strong | #15803D | #16A34A |
| danger-soft | #FEF2F2 | #450A0A |
| danger | #DC2626 | #EF4444 |
| danger-medium | #FEE2E2 | #7F1D1D |
| danger-strong | #B91C1C | #DC2626 |
| warning-soft | #FFFBEB | #713F12 |
| warning | #F59E0B | #F59E0B |
| warning-medium | #FEF3C7 | #713F12 |
| warning-strong | #B45309 | #D97706 |

### Button Glint (CSS custom properties, used for the glint box-shadow effect)
| Variable | Light | Dark |
|---|---|---|
| `--color-1-400` | rgba(255,255,255,0.10) | rgba(255,255,255,0.05) |
| `--color-1-700` | rgba(0,0,0,0.04) | rgba(0,0,0,0.10) |

### Utility
| Token | Light | Dark |
|---|---|---|
| dark | #111111 | #111111 |
| dark-strong | #0A0A0A | #1E1E1E |
| disabled | #E0E0E0 | #1C1C1C |

### Accent
| Token | Value (same both modes) |
|---|---|
| purple | #7C3AED |
| sky | #0284C7 |
| teal | #0F766E |
| pink | #BE185D |
| cyan | #0891B2 |
| fuchsia | #A21CAF |
| indigo | #4338CA |
| orange | #1A1A1A |

## Text Color Tokens

### Base
| Token | Light | Dark |
|---|---|---|
| white | #FFFFFF | #FFFFFF |
| black | #0A0A0A | #0A0A0A |
| heading | #0A0A0A | #F5F5F5 |
| body | #555555 | #999999 |
| body-subtle | #888888 | #666666 |

### Brand
| Token | Light | Dark |
|---|---|---|
| fg-brand-subtle | #C0C0C0 | #333333 |
| fg-brand | #1A1A1A | #E5E5E5 |
| fg-brand-strong | #000000 | #FFFFFF |

### Status
| Token | Light | Dark |
|---|---|---|
| fg-success | #16A34A | #15803D |
| fg-success-strong | #15803D | #22C55E |
| fg-danger | #DC2626 | #EF4444 |
| fg-danger-strong | #991B1B | #F87171 |
| fg-warning-subtle | #D97706 | #F59E0B |
| fg-warning | #92400E | #FBBF24 |
| fg-disabled | #999999 | #555555 |

### Informational / Accent
| Token | Light | Dark |
|---|---|---|
| fg-yellow | #EAB308 | #EAB308 |
| fg-info | #1E1B4B | #93C5FD |
| fg-purple | #7C3AED | #A78BFA |
| fg-purple-strong | #6D28D9 | #DDD6FE |
| fg-cyan | #0891B2 | #06B6D4 |
| fg-indigo | #4338CA | #6366F1 |
| fg-pink | #BE185D | #EC4899 |
| fg-lime | #65A30D | #84CC16 |

## Border Color Tokens

| Token | Light | Dark |
|---|---|---|
| border-dark | #1A1A1A | #555555 |
| border-buffer | #FFFFFF | #060606 |
| border-buffer-medium | #FFFFFF | #141414 |
| border-buffer-strong | #FFFFFF | #1E1E1E |
| border-muted | #FAFAFA | #0C0C0C |
| border-light-subtle | #E8E8E8 | #0C0C0C |
| border-light | #E5E5E5 | #141414 |
| border-light-medium | #D5D5D5 | #1E1E1E |
| border-default-subtle | #D5D5D5 | #0C0C0C |
| border-default | #D0D0D0 | #1C1C1C |
| border-default-medium | #C0C0C0 | #262626 |
| border-default-strong | #999999 | #333333 |
| border-success-subtle | #BBF7D0 | #064E3B |
| border-success | #16A34A | #15803D |
| border-danger-subtle | #FECDD3 | #991B1B |
| border-danger | #DC2626 | #DC2626 |
| border-warning-subtle | #FED7AA | #92400E |
| border-warning | #D97706 | #F59E0B |
| border-brand-subtle | #E0E0E0 | #333333 |
| border-brand-light | #555555 | #AAAAAA |
| border-brand | #1A1A1A | #E5E5E5 |
| border-dark-subtle | #1A1A1A | #262626 |
| border-purple | #7C3AED | #A78BFA |
| border-orange | #1A1A1A | #E5E5E5 |

## Semantic Usage Rules

- Page/section backgrounds: neutral-primary-soft (pure white), neutral-secondary-soft (off-white #FAFAFA), neutral-tertiary-soft (light gray #E0E0E0 for alternating)
- Dark sections (footer, hero overlays): dark (#111111)
- Primary buttons: brand background
- Headings: heading text color
- Body text: body text color
- CTA links: fg-brand text color
- Default borders: border-default
- Status borders match intent: success → border-success, danger → border-danger, warning → border-warning
- Disabled: disabled background + fg-disabled text

## Prohibited

- No raw hex/rgb values in component code — always use design tokens
- No brand text color for long-form paragraphs
- No accent text tokens (fg-purple, etc.) for body copy or navigation
- No brand/accent backgrounds for large layout surfaces (pages, sections) unless it's a hero/campaign area
- No manual light/dark value swapping — let the CSS custom properties handle it

---

## Source file: `content.md`

# Content & Grid System

> Dependencies: `layout.md`, `typography.md`

## Containers

| Type | Max width | Horizontal padding |
|---|---|---|
| Standard | 1280px | 32px |
| Internal (reading) | 768px | — (45–75 char line length) |

## Vertical Padding

| Breakpoint | Vertical padding |
|---|---|
| Mobile | 40px |
| Tablet (≥768px) | 64px |
| Desktop (≥1024px) | 80px or 120px for hero/feature sections |

## Grid System

Mobile-first with flexible desktop configurations.

| Context | Gap |
|---|---|
| Standard content/cards | 32px |
| Compact widgets/metadata | 16px |

### Responsive Columns

| Breakpoint | Columns |
|---|---|
| Mobile (default) | 1–2 |
| Small/Tablet (≥640px) | 2–4 |
| Desktop (≥1024px) | 3–12 |

Full support for 6, 7, 8, 9+ column grids where needed.

## Breakpoints

| Name | Width |
|---|---|
| Small | 640px |
| Medium | 768px |
| Large | 1024px |
| Extra large | 1280px |
| 2x Extra large | 1536px |

## Rules

- Always design mobile-first
- Use layout shifts (column → row) to accommodate horizontal space
- Lists: 24px indentation, 8px vertical gap between items
- Body copy: 15px, 1.625 line-height
- All interactive links follow brand underline/hover protocol

---

## Source file: `dropdown.md`

# Dropdown

> Dependencies: `colors.md`, `radius.md`, `shadows.md`, `inputs.md`

## Core Specs

### Chevron Icon
- Size: 16x16px
- Spacing: 6px left margin, -2px right margin
- Color: inherits from trigger button

### Menu Container
- Background: neutral-primary-soft
- Border: 1px, border-default
- Radius: 12px (base) — refined rounded corners
- Shadow: shadow-md
- Z-index: elevated above content

### Menu List
- Padding: 8px
- Font: 14px, body color, medium weight

### Menu Item
- Layout: inline-flex, vertically centered, full width
- Padding: 8px horizontal, 8px vertical
- Radius: 8px (default) — refined rounded items
- Hover: neutral-tertiary-medium background, heading text
- Transition: colors, 150ms

## Trigger Sizes

| Size | Font size | Horizontal padding | Vertical padding |
|---|---|---|---|
| Small | 14px | 20px | 10px |
| Base | 15px | 24px | 12px |
| Large | 16px | 32px | 16px |

## Icon-only Trigger

- Padding: 8px
- Min size: 44x44px
- Icon: 20x20px

## Variants

### Default
- Menu width: 176px, items have 8px radius

### With Divider
- Top border (border-default) between child groups, skip first group

### With Header
- Header padding: 16px horizontal, 12px vertical
- Bottom border: border-default
- Name: heading color, 14px, semibold weight
- Email: body-subtle color, 14px, truncated

### With Icons
- Icon before label: 16x16px, 8px right margin, body color
- On hover, icon color changes to heading

### With Checkbox / Radio
- Inputs: 16x16px, 4px radius, focus ring in brand-soft
- Helper text: 12px, body-subtle color, 2px top margin

### With Search
- Search input at top of menu following `inputs.md` specs
- Left icon: 16px left padding, input 40px left padding

### Scrollable
- Max height: 192px, vertical scroll overflow

## States

| State | Appearance |
|---|---|
| Focused trigger | no outline, 2px brand ring |
| Hover item | neutral-tertiary-medium background, heading text |
| Active/open item | neutral-tertiary-soft background, heading text |
| Disabled item | fg-disabled text, not-allowed cursor, no pointer events |

---

## Source file: `icon-shapes.md`

# Icon Shapes

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- Box sizing: border-box
- Icon must be perfectly centered (inline-flex, centered both axes)
- Circle: fully rounded (9999px)
- Rounded square: 12px radius (refined rounded corners for all sizes)

## Sizes

| Size | Container | Icon |
|---|---|---|
| XS | 24x24px | 14x14px |
| SM | 32x32px | 16x16px |
| MD | 40x40px | 20x20px |
| LG | 48x48px | 24x24px |
| XL | 56x56px | 28x28px |

## Color Variants

### Brand
- Shape: circle
- Background: brand-softer
- Icon color: fg-brand-strong

### Gray
- Shape: circle
- Background: neutral-secondary-soft
- Icon color: body

### Danger
- Shape: circle
- Background: danger-soft
- Icon color: fg-danger-strong

### Success
- Shape: circle
- Background: success-soft
- Icon color: fg-success-strong

### Warning
- Shape: circle
- Background: warning-soft
- Icon color: fg-warning

---

## Source file: `inputs.md`

# Inputs

> Dependencies: `colors.md`, `radius.md`

## Core Specs

- **Display:** block, full width
- **Radius:** 8px (default) — all inputs have refined rounded corners
- **Border:** 1px, border-default-medium
- **Background:** neutral-secondary-medium
- **Shadow:** shadow-xs
- **Font:** 14px, heading color, "IBM Plex Mono"
- **Padding:** 16px horizontal, 12px vertical
- **Placeholder:** body color
- **Transition:** all properties, 200ms

## Label

- Display: block
- Font: 14px, medium weight, heading color
- Margin bottom: 8px
- Label `htmlFor` must match the input `id`

## States

### Default
- Border: border-default-medium
- Background: neutral-secondary-medium

### Hover
- Border: border-default-strong

### Focus
- No outline
- Border: border-brand
- Ring: 1px, brand color

### Success
- Border: border-success
- Focus ring: 1px, success color

### Error / Danger
- Border: border-danger
- Focus ring: 1px, danger color

### Disabled
- Background: disabled
- Text: fg-disabled
- Cursor: not-allowed

## Input with Icons

- Icon size: 16x16px
- Icon color: body
- Container: relative positioned wrapper
- Start icon: absolutely positioned left, 16px left padding — input gets 40px left padding
- End icon: absolutely positioned right, 16px right padding — input gets 40px right padding
- Icons vertically centered within the wrapper

## Rules

- Every input must have a unique `id`
- Every label must have a matching `htmlFor`
- Padding: 16px horizontal, 12px vertical unless overridden for icon variants
- No arbitrary hex or hardcoded colors

---

## Source file: `layout.md`

# Layout & Spacing

## Spacing Rhythm

Base unit: **8px**. All spacing values should be multiples of 8px.

| Context | Value |
|---|---|
| Section vertical padding | 120px |
| Section header → content | 56px or 72px |
| Heading → paragraph | 20px |
| Container horizontal padding | 32px |
| Flex/grid row gap | 16px |
| Card grid gap | 32px |
| Wide component grid gap | 40px |
| Column layout gap | 56px |

## Container

Standard section container: max-width 1280px, centered, 32px horizontal padding.

Every major section wraps content in this container.

## Section Separation

Sections flow into each other through **generous whitespace** — not border lines. There are no visible horizontal rules or grid lines between sections.

### Rules for Section Transitions
- No 1px horizontal border lines between sections
- No `gap-px` grid-line technique between sections
- No visible vertical border rails on containers
- All sections must use the `#262642` background color
- Whitespace alone handles the breathing room between sections

## Content Composition Order

Inside each section, follow this order:
1. Heading (`h1`–`h3`) — this is the dominant visual element; headings should command attention with their size
2. Leading paragraph
3. Normal paragraph(s)
4. Lists, CTA links, or component grids

## Section Pattern

Each section has:
- 120px vertical padding
- A background color of `#262642` for all sections
- A centered container (max-width 1280px, 32px horizontal padding)
- A section header area with 56px bottom margin
- Section content below
- No visible borders on containers or between sections — separation is purely through color and spacing

## Design Philosophy — Layered Editorial Luxury

- **Oversized headings are the hero of every section.** Headings (especially h1 and h2) should be the largest, most dominant visual element on the page. They anchor each section and create immediate visual hierarchy.
- **Overlapping, layered compositions.** Elements should overlap and layer on top of each other. Images overlap other images, cards overlap images, avatars cluster and overlap. Use negative margins, absolute positioning within relative containers, and z-index stacking to create depth. Nothing sits in a rigid, isolated box.
- **Rounded image treatments.** All images use generous border-radius (16px–24px for feature images, `rounded-full` for avatar thumbnails). No sharp-cornered images anywhere. Images should feel soft and approachable.
- **Circular accent elements.** Small circular thumbnails (avatars, mini product previews) appear as navigation hints, social proof clusters, or decorative accents. Group them in overlapping rows with negative margin spacing.
- **Asymmetric editorial grids.** Layouts are not rigid even-column grids. Mix a large image on one side with text on the other. Vary image sizes within a row. Use 60/40 or 70/30 splits rather than 50/50. Let one element dominate while others support.
- **Numbered section indicators.** Use large, styled numbers (01, 02, 03…) inside rounded containers as section markers. These sit on top of or adjacent to images to add editorial structure.
- **Generous negative space.** Whitespace is a design tool, not wasted space. Sections should breathe. Let large headings float in ample space to create an editorial, luxury feel.
- **Image-forward layout.** Sections should feature large, high-quality imagery as primary visual content. Images are the focal point — large, rounded, and layered — not squeezed into small frames.
- **Strong type-scale contrast.** The difference between heading sizes and body text should be dramatic. A 96px h1 next to 15px body copy creates the high-contrast editorial look.
- **Pill-shaped badges and tags.** Category labels, tags, and small navigation elements use `rounded-full` pill shapes with subtle backgrounds. They float near headings or above cards as metadata.
- **Let content lead.** Navigation should be minimal and unobtrusive. CTAs should be clear but not visually heavy. The content and typography should dominate, not UI chrome.
- **Dark accent sections for contrast.** CTA bands and the footer use dark (#111111) backgrounds to create dramatic contrast against the predominantly light page. These sections break the rhythm and draw attention.

## Overlapping & Layering Techniques

Layered compositions are core to this aesthetic. Every feature section should have at least one instance of visual overlap.

### Image Overlapping
- Use a relative-positioned parent container. Place a primary image, then use absolute positioning + negative offsets to partially overlap secondary images on top.
- Overlapping images should have a white border (3px–4px solid white) or a subtle shadow to lift them off the layer below.
- Typical overlap: 20%–40% of the secondary image overlaps the primary.

### Avatar Clusters
- Display 3–5 circular avatars in a horizontal row with negative horizontal margins (`-ml-3` or `-ml-4`) so they overlap each other.
- Each avatar gets a white ring border (`ring-2 ring-white` or `border-2 border-white`).
- Use z-index stacking so the first avatar is on top, descending order.

### Card-on-Image Overlapping
- Feature cards or numbered indicator badges sit partially over a hero image.
- The card uses absolute positioning anchored to a corner of the image container, offset by negative margin so it breaks the image boundary.
- The card gets a solid background and shadow to create separation from the image below.

### Z-Index Layering
- Images: z-0 (base)
- Overlapping secondary images: z-10
- Cards/badges overlapping images: z-20
- Avatar clusters: z-10
- Keep layering consistent and predictable

## Hero Section Pattern

The hero section is the most complex layered composition on the page.

- **Typography:** Massive display heading (h1, 96px desktop) with mixed emphasis — use a combination of bold and italic weights within the same heading to create typographic interest. One word or phrase in a lighter italic style contrasts with the rest in bold.
- **Image collage:** 2–4 images of varying sizes arranged in an overlapping cluster. At least one image should be significantly larger (hero focal image), with smaller images partially overlapping it.
- **Avatar row:** A cluster of 3–5 overlapping circular avatars near the hero content, serving as social proof.
- **CTA:** A single primary button or pill-shaped CTA below the heading.
- **Composition:** Text and images interweave — the heading can wrap around or sit between images rather than being strictly above or beside them.

## Product / Collection Grid Pattern

**CRITICAL RULE:** We do NOT use grid cards on the landing page. The landing page must only use big titles, premium PNG images, and big buttons. No small grid layouts or standard feature cards.

## Feature / Craftsmanship Section Pattern

- Two-column asymmetric layout (roughly 55/45 or 60/40 split).
- One column: large rounded image with a smaller overlapping element (numbered badge, secondary image, or stat card).
- Other column: heading + paragraph text, vertically centered.
- Numbered indicators (01, 02, 03) in rounded containers as section sequence markers.

## Stats / Social Proof Pattern

- Key metrics displayed in bold large type (e.g., "101k+") with a short label below.
- Arrange in a horizontal row or within feature cards.
- Use heading text color for the number, body text color for the label.

## Testimonial Pattern

- Large quote text (h3 or larger size) as the visual centerpiece.
- Avatar + name + role below the quote.
- Star rating row (5 filled/unfilled stars).
- Optional: a supporting image on one side (two-column layout).
- Rounded container or subtle background distinction.

## CTA Band Pattern

- Full-width dark (#111111) background section.
- Large display heading in white text.
- A single CTA button.
- Optional decorative image element (partially visible, clipped at edges).
- 120px vertical padding, text centered or left-aligned.

## Motion & Animation

- Prefer CSS-native: `transition`, `animation`, `@keyframes`. Use Motion library only when CSS cannot achieve the behavior.
- Prioritize high-impact orchestrated moments over scattered micro-interactions. A single well-sequenced page-load animation using staggered `animation-delay` delivers more perceived quality than many isolated effects.
- Reserve scroll-triggered and hover transitions for moments that reinforce hierarchy or reward attention.
- Image hover: subtle scale-up (`scale(1.03)`) with overflow hidden on the rounded container — the image zooms slightly but stays within its rounded mask.

## Backgrounds & Visual Depth

- Default to clean, flat backgrounds. All sections must use the `#262642` background color.
- No grid lines, no border rails, no wireframe aesthetic. The page should feel editorial and organic, not structured/gridded.
- Depth comes from overlapping layers, subtle shadows on overlapping elements, and white ring borders on avatars/thumbnails — not from section borders.

## Must

- All sections: consistent 120px vertical padding
- All containers: max-width 1280px, centered, 32px horizontal padding
- **No visible border lines between sections** — separation is through whitespace only
- **No vertical border rails on containers** — clean edge-to-edge backgrounds
- **No `gap-px` grid-line technique** — cards and grid items float with regular gap spacing
- All images: rounded corners (16px–24px for feature images, `rounded-full` for avatars/thumbnails)
- At least one overlapping/layered element per major section
- Headings must be the largest, most dominant element in every section — oversized display type is core to the aesthetic
- Consistent vertical rhythm, no crowded sections
- Generous whitespace around all content — editorial luxury feel, not density
- Layouts readable and properly spaced on both desktop and mobile
- Footer and CTA band: dark (#111111) background with white text
- Large, prominent, rounded imagery in feature and product sections — images should be a focal point with soft corners
- Circular avatar clusters with overlapping white-ring borders for social proof
- Pill-shaped badges and tags using `rounded-full`

---

## Source file: `lists.md`

# Lists

> Dependencies: `colors.md`

## Core Specs

- Item spacing: 16px vertical gap between list items
- Text: body color

## List Icons

- Size: 20x20px
- Prevent squishing: no shrink
- Spacing: 6px right margin between icon and text
- Active/featured icon: fg-brand color
- Neutral icon: body color

## Inactive / Disabled Items

Strikethrough text with body color decoration on the list item.

## Pattern

Vertical flex list with 16px gap. Each item is a flex row with centered alignment — icon (20x20, no-shrink, 6px right margin) followed by a span of body-colored text.

---

## Source file: `modals.md`

# Modals

> Dependencies: `colors.md`, `radius.md`, `shadows.md`, `buttons.md`, `inputs.md`

## Core Specs

### Overlay (Backdrop)
- Fixed, covers full screen
- Z-index: 40
- Background: black at 50% opacity
- Backdrop blur: small amount

### Content Container
- Background: neutral-primary
- Radius: 12px (base) — refined rounded corners
- Shadow: shadow-lg
- Padding: 20px

## Anatomy

### Header
- Bottom border: border-default
- Top corners: 12px (refined)
- Title: 20px, semibold weight, heading color
- Close button: Ghost variant from `buttons.md`, 6px padding

### Body
- Vertical padding: 24px
- Vertical spacing between elements: 24px
- Text: 16px, 1.625 line-height, body color

### Footer
- Top border: border-default
- Bottom corners: 12px (refined)

## Variants

### Default (Information)
Standard header + body + footer with primary/secondary action buttons.

### Pop-up (Confirmation)
Centered text, prominent icon, reduced padding:
- Body: 24px padding, text centered
- Icon: centered, 16px bottom margin, 48x48px, gray color

### Form Modal
Body contains inputs following `inputs.md`. Vertical spacing between form elements: 16px.

## Rules

- Backdrop covers full screen with fixed positioning
- Content: neutral-primary background, 12px radius, shadow-lg
- Header/Footer separated by border-default borders
- Close button must be present and functional
- Accessibility: `role="dialog"`, implement focus trap in code
- Dark mode automatic via token system

---

## Source file: `pagination.md`

# Pagination

> Dependencies: `colors.md`, `radius.md`

## Container

Font: 14px. Items displayed as flex with -1px overlap for seamless borders.

## Pagination Item

- Layout: flex, centered both axes
- Size: 36x36px (or 40x40px)
- Text: body color, medium weight
- Background: neutral-secondary-medium
- Border: 1px, border-default-medium
- Hover: neutral-tertiary-medium background, heading text
- Focus: no outline
- Overlap: -1px left margin

## Previous / Next Buttons

- Horizontal padding: 12px, height: 36px
- First item: 8px radius on inline-start side — rounded ends
- Last item: 8px radius on inline-end side — rounded ends

## Active Page Item

- Text: fg-brand color
- Background: neutral-tertiary-medium
- Hover text: fg-brand (stays same)

## Rules

- Display as flex with -1px child overlap for seamless borders
- Items: neutral-secondary-medium background, border-default-medium border, body text
- Active: fg-brand text, neutral-tertiary-medium background
- First item: rounded start, Last item: rounded end
- All items need hover and focus states

---

## Source file: `radios-checkboxes-toggle.md`

# Radios, Checkboxes & Toggles

> Dependencies: `colors.md`, `radius.md`

## Checkbox

- Size: 16x16px
- Radius: 4px
- Border: 1px, border-default-medium
- Background: neutral-secondary-medium
- Focus ring: 2px, brand-soft

### Disabled
- Border: border-light
- Text: fg-disabled

## Radio

- Size: 16x16px
- Radius: fully rounded
- Border: 1px, border-default-medium
- Background: neutral-secondary-medium
- Focus ring: 2px, brand-soft
- Checked: border-brand, indicator: neutral-primary color

### Disabled
- Border: border-light-medium
- Text: fg-disabled

Group all radio items under the same `name` attribute.

## Toggle

### Track
- Fully rounded
- Background: neutral-quaternary
- Focus-within ring: 2px, brand-soft
- Checked track: brand background
- Disabled track: neutral-tertiary background

### Thumb
- Fully rounded
- Background: white
- Border: border-buffer

### Disabled
- Track: neutral-tertiary background
- Label: fg-disabled text

## Rules

- All selection inputs must have `id` matching label `htmlFor`
- Focus states use the appropriate brand token for each control type
- Disabled states: no hover/focus interaction

---

## Source file: `radius.md`

# Border Radius

| Token | Value | Default usage |
|---|---|---|
| base | 12px | Cards, modals, sections, tables, accordions, containers |
| default | 8px | Buttons, inputs, badges, tooltips, dropdown items, small controls |
| sm | 4px | Checkboxes, tiny elements |
| full | 9999px | Avatars, toggles, dot indicators |

## Rules

- 12px (refined rounded) is the default for all container-type components (cards, sections, modals, tables)
- 8px (moderate rounded) is the default for all interactive small components (buttons, inputs, badges)
- Never use arbitrary radius values outside this scale
- Radius must be consistent within each component family

---

## Source file: `shadows.md`

# Shadows

| Token | CSS value |
|---|---|
| shadow-2xs | `0 1px rgb(0 0 0 / 0.01)` |
| shadow-xs | `0 1px 2px 0 rgb(0 0 0 / 0.02)` |
| shadow-sm | `0 1px 3px 0 rgb(0 0 0 / 0.03), 0 1px 2px -1px rgb(0 0 0 / 0.02)` |
| shadow-md | `0 4px 6px -1px rgb(0 0 0 / 0.04), 0 2px 4px -2px rgb(0 0 0 / 0.02)` |
| shadow-lg | `0 10px 15px -3px rgb(0 0 0 / 0.04), 0 4px 6px -4px rgb(0 0 0 / 0.02)` |
| shadow-xl | `0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.03)` |
| shadow-2xl | `0 25px 50px -12px rgb(0 0 0 / 0.08)` |

## Component Mapping

| Component type | Token |
|---|---|
| Subtle separators, tiny UI details | shadow-2xs or shadow-xs |
| Inputs, buttons, small controls, lightweight cards | shadow-xs or shadow-sm |
| Standard cards, popovers, dropdowns | shadow-sm |
| Prominent cards, sticky surfaces | shadow-md |
| Modals, high-priority overlays | shadow-lg |
| Hero overlays, top-level emphasis (sparingly) | shadow-xl |

## Rules

- Use only these tokens — no custom box-shadow values
- Prefer whitespace and subtle borders over shadows for separation; shadows are a tertiary tool
- Keep elevation steps intentional; avoid jumping multiple levels
- Components in the same family share the same baseline elevation
- Hover/focus on interactive elevated elements: step up by one level
- Never stack multiple shadow tokens on one element
- Never use shadow-xl/shadow-2xl for dense list items or body containers

---

## Source file: `sidebars.md`

# Sidebars

> Dependencies: `colors.md`, `radius.md`, `typography.md`, `badges.md`, `alerts.md`

## Core Specs

- Background: neutral-primary-soft
- Right border: 1px, border-default (for left-sidebar); left border for right-sidebar
- Width: 256px

## Anatomy

### Outer Container
Hidden on mobile, visible at small breakpoint. Needs a toggle/trigger for mobile.

### Inner Wrapper
- Full height, vertical scroll overflow
- Padding: 12px horizontal, 16px vertical

### Navigation List
- Vertical spacing: 8px between items
- Font weight: medium

### Navigation Item
- Layout: flex, vertically centered
- Padding: 8px horizontal, 8px vertical
- Text: heading color
- Radius: 8px (default) — refined rounded nav items
- Hover: neutral-secondary-medium background
- Transition: colors
- Icon: 20x20px, body color, hover → heading color, 75ms transition
- Label: 12px left margin from icon

### Active Item
- Background: neutral-secondary-strong
- Text: fg-brand-strong

### Separator
- 16px top padding, 16px top margin
- Top border: border-default
- 8px vertical spacing below

### Bottom CTA / Card
- Padding: 16px
- Top margin: 24px
- Radius: 12px (base) — refined rounded corners for card-like elements
- Background: brand-softer
- Can also use any alert variant from `alerts.md`

## Rules

- Responsive: hidden on mobile with a trigger mechanism
- Icons: 20x20px, body color (hover: heading color)
- Multi-level menus: indent with 44px left padding
- Spacing follows 8px grid
- Only neutral, brand, or status tokens — no arbitrary colors

---

## Source file: `tables.md`

# Tables

> Dependencies: `colors.md`, `radius.md`, `shadows.md`

## Wrapper

- Horizontal scroll overflow
- Background: neutral-primary-soft
- Radius: 12px (base) — refined rounded corners
- Border: 1px, border-default
- Shadow: shadow-xs

## Table Element

- Full width, left-aligned text (right-aligned for RTL)
- Font: 14px, body color

## Table Head

- Font: 14px, body color, medium weight
- Background: neutral-secondary-soft
- Bottom border: border-default
- Cell padding: 24px horizontal, 12px vertical

## Table Body

- Row background: neutral-primary
- Row bottom border: border-default (omit on last row to avoid doubling with wrapper border)
- Row hover: neutral-secondary-soft background (optional)
- Row header: medium weight, heading color, no-wrap
- Cell padding: 24px horizontal, 16px vertical

## Rules

- Wrapper must have horizontal scroll overflow for responsive scrolling
- Last row: omit bottom border to avoid doubling with wrapper border
- Row headers: always `scope="row"` for semantic structure
- Hover on rows is optional
- No arbitrary hex codes — use token colors only

---

## Source file: `tabs.md`

# Tabs

> Dependencies: `colors.md`, `radius.md`, `shadows.md`

## Core Specs

- Typography: 14px, medium weight, body color
- Transitions: all properties, 200ms

## Variants

### 1. Underline (Default)

**Wrapper:** bottom border, border-default

**Tab Item:**
- Padding: 16px horizontal, 16px vertical
- Bottom border: 2px, transparent
- Top corners: 12px radius
- Transition: colors, 150ms

| State | Appearance |
|---|---|
| Active | fg-brand text, border-brand bottom border |
| Inactive | transparent bottom border; hover → heading text, border-default-strong bottom border |
| Disabled | fg-disabled text, not-allowed cursor |

### 2. Pills

**Tab Item:**
- Padding: 16px horizontal, 10px vertical
- Radius: 8px (default) — refined rounded
- Font weight: medium
- Transition: all, 200ms

| State | Appearance |
|---|---|
| Active | brand background, white text, shadow-sm |
| Inactive | body text; hover → neutral-secondary-soft background, heading text |
| Disabled | fg-disabled text, not-allowed cursor |

### 3. Full Width

Children overlap with -1px left margin on all except first.

**Tab Item:**
- Full width, centered text
- Padding: 16px horizontal, 16px vertical
- Background: neutral-primary-soft
- Border: 1px, border-default
- Transition: colors, 150ms
- Hover: neutral-secondary-medium background, heading text

| State | Appearance |
|---|---|
| Active | neutral-secondary-soft background, fg-brand text |
| First item | 12px radius (refined) |
| Last item | 12px radius (refined) |

## Tabs with Icons

- Icon size: 16x16px or 20x20px
- Spacing: 8px right margin
- Layout: inline-flex, centered
- Icons inherit the text color of the tab state

---

## Source file: `tooltips-popovers.md`

# Tooltips & Popovers

> Dependencies: `colors.md`, `radius.md`, `shadows.md`

## Tooltips

### Core Specs
- Padding: 12px horizontal, 8px vertical
- Font: 14px, medium weight
- Radius: 8px (default) — refined rounded tooltips
- Shadow: shadow-xs
- Transition: opacity, 300ms

### Dark (Default)
- Background: dark
- Text: white
- Border: transparent

### Light
- Background: neutral-primary-medium
- Text: heading color
- Border: 1px, border-default

## Popovers

### Core Specs
- Background: neutral-primary
- Radius: 12px (base) — refined rounded corners
- Shadow: shadow-sm
- Border: 1px, border-default
- Transition: opacity, 300ms

### Header / Title
- Padding: 12px horizontal, 8px vertical
- Background: neutral-secondary-soft
- Bottom border: border-default
- Font: 14px, medium weight, heading color

### Body / Content
- Standard: 12px horizontal, 8px vertical padding; 14px, body color
- Rich: 16px padding; 14px, body color

## Arrows

- Size: 8x8px rotated 45deg
- Color must match the background of the tooltip/popover variant

## Rules

- Tooltips: 8px radius (refined rounded)
- Popovers: 12px radius (refined rounded corners)
- Dark tooltips: dark background, white text
- Light tooltips/popovers: semantic neutral background + border tokens
- Arrows match parent background color

---

## Source file: `typography.md`

# Typography

> Dependencies: `colors.md`

## Core Rules

- **Font:** "IBM Plex Mono", monospace — configured at app level, never override
- **Headings:** bold weight (700), heading text color, mixed case (sentence or title case) for all heading levels
- **Body copy:** body text color, never use brand color for paragraphs longer than one sentence
- **Semantic HTML:** Use `h1`–`h6` in order, never skip levels

## Heading Scale

### Desktop

| Element | Size | Line-height | Letter-spacing | Margin-bottom |
|---|---|---|---|---|
| `h1` | 140px | 0.95 | -3px | 40px |
| `h2` | 140px | 1.05 | -1.5px | — |
| `h3` | 40px | 1.1 | -0.5px | — |
| `h4` | 30px | 1.2 | — | — |
| `h5` | 22px | 1.4 | — | — |
| `h6` | 18px | 1.3 | — | — |

**Important Rule for Headings:** Only main section headings (`h1`, `h2`) should be 140px. Card headings, footer headings, and other secondary headings MUST use the smaller sizes (`h3`–`h6`) and should never be 140px.

### Responsive

| Element | Tablet (≥768px) | Mobile (default) |
|---|---|---|
| `h1` | 64px | 40px |
| `h2` | 48px | 36px |
| `h3` | 32px | 26px |
| `h4` | 26px | 22px |
| `h5` | 20px | 18px |
| `h6` | 16px | 16px |

Mobile-first: start with mobile sizes, scale up at tablet and desktop breakpoints.

Never reduce line-height below 1.1 for any heading.

## Paragraphs

### Leading Paragraph
- Size: 18px
- Weight: normal
- Color: body
- Line-height: 1.7
- Max width: ~65 characters

### Normal Paragraph
- Size: 15px
- Weight: normal
- Color: body
- Line-height: 1.7
- Max width: ~60 characters

### Small Supporting Copy
- Size: 13px
- Weight: normal
- Color: body
- Line-height: 1.6
- Use only for helper text, legal text, captions, metadata.

## UI Labels

| Context | Size | Weight |
|---|---|---|
| Button labels | 15px | 500 (medium) |
| Input labels | 14px or 15px | 500 (medium) |
| Captions / meta / badges | 12px or 13px | 500 (medium) |

Do not apply paragraph line-height (1.7) to control labels.

## Links

- **Inline links:** Same size as surrounding text, fg-brand color, underline, hover → no underline
- **CTA links:** fg-brand color, medium weight, underline, hover → no underline

## Emphasis

- `<strong>` for high-priority emphasis in body text
- `<em>` for tone emphasis only, not visual hierarchy
- All-caps only for short labels: uppercase, 1.5px letter-spacing, 12px or 13px

## Dark Mode

Hierarchy stays identical. Only color tokens change (automatic via CSS custom properties). Size, weight, and spacing remain constant.

