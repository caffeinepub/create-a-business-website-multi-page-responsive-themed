# Specification

## Summary
**Goal:** Add Internet Identity sign-in/sign-out controls to the site header and mobile navigation.

**Planned changes:**
- Add a header authentication control that shows “Sign in” when signed out and “Sign out” (optionally with an abbreviated principal) when signed in.
- Wire the “Sign in” action to the existing `useInternetIdentity()` hook (user-initiated only) with a disabled/loading state during login.
- Wire the “Sign out” action to `clear()` from `useInternetIdentity()` and update UI state immediately after sign-out.
- Display a clear English error message in the UI when login fails.
- Ensure the mobile navigation/menu exposes the same auth controls with matching loading/error states.

**User-visible outcome:** Visitors can sign in and sign out via Internet Identity from both desktop header and mobile menu, with clear loading and error feedback.
