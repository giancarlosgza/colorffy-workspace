## color-mix(in oklab, color, transparent):

Use for all your opacity utility classes (like bg-primary/50).

## color-mix(in srgb, color, background)

Use for generating tinted UI surfaces, borders, and subtle backgrounds.

## color-mix(in oklch, colorA, colorB)

Use only when you need to blend two highly vibrant colors together and want to avoid muddy middle tones.

- **Brand Tokens:**
- `--color-brand-dark-500`
- `--color-brand-dark-50`
    - **Base Light Token (:root):**
    - `--theme-dark-base` -> `--color-brand-dark-500`
    - **Base Dark Token (.dark-mode):**
    - `--theme-dark-base` -> `--color-brand-dark-50`
        - **Components Token Usage**
  ```
  --theme-surface-tooltip: var(--theme-dark-base);
  --_tooltip-bg-color: var(--theme-surface-tooltip);
  ```

    
- **Brand Dynamic Tones Tokens:**
- `--color-primary-dark-500`
- `--color-primary-dark-50`
    - **Base Light Token (:root):**
    - `--theme-primary-base` -> `--color-brand-primary-500`
    - **Base Dark Token (.dark-mode):**
    - `--theme-primary-base` -> `--color-brand-primary-50`
      - **Dynamic Tokens (a0 -> a90)**
      - `--theme-primary-a10: color-mix(in srgb, var(--theme-primary-base), var(--theme-surface-base) 95%);`
          - **Components Token Usage**
  ```
   .btn-filled { 
     --_btn-bg-color: var(--theme-primary-a10);
      background-color: var(--_btn-bg-color);
   }
  ```