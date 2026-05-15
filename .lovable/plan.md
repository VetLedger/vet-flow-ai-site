## Plan: Replace header/footer logo with new mark

**Steps:**
1. Copy `user-uploads://logo-mark.svg` to `src/assets/vetledger-logo.svg`.
2. Update `src/components/Header.tsx` to import and use the new SVG instead of `vetledger-logo.png`.
3. Update `src/components/Footer.tsx` likewise.
4. Leave the old `vetledger-logo.png` and `VetLedgerLogo.tsx` in place (unused) unless you'd like them deleted.

The new mark uses the brand blue (#1D5C97) plus a sage green (#70A690) — colors are baked into the SVG, so it will render identically in header and footer at the existing 40×40 size.