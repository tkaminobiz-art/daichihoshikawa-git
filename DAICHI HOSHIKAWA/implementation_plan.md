# Implementation Plan - Support Portal Navigation

## Goal
Add navigation elements to the Support Portal (`/support`) to allow users to easily return to the main Daichi Hoshikawa website (`/`).

## Proposed Changes

### 1. Update `components/layout/MobileHeader.tsx`
- **Change**: Use `usePathname` hook to determine current path.
- **Logic**: If on homepage (`/`), use relative anchors (`#vision`). If on other pages (`/support`), use absolute paths (`/#vision`).
- **Reason**: Maintains smooth scrolling on homepage while enabling navigation from support pages without full reload issues where possible.

### 2. Update `app/support/page.tsx`
- **Change**: Import and include `<MobileHeader />` at the top of the page.
- **Reason**: Provide mobile navigation menu (Hamburguer menu) on the support page.

### 3. Update `components/support/SupportSidebar.tsx`
- **Change**: Add a "Back to Main Site" (公式サイトへ戻る) link button at the top of the sidebar.
- **Reason**: Provide a clear way for desktop users to return to the main site without using browser back button.

## Verification Plan
- **Mobile**: Verify Hamburger menu appears on `/support` and links correctly navigate to main page sections.
- **Desktop**: Verify "Back to Main Site" button appears in the sidebar and works correctly.
