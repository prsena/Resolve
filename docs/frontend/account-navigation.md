# Account Navigation

## Overview

Account navigation provides a consistent interface for accessing personal profile information, account settings, and sign-out functionality.

The profile menu is positioned at the bottom of the dashboard sidebar and is intended to be shared across employee, IT technician, and administrator interfaces.

## Related User Stories

| ID          | User Story           |
| ----------- | -------------------- |
| US 01.01.02 | Secure User Sign-Out |
| US 01.02.01 | View User Profile    |
| US 01.02.02 | Edit User Profile    |
| US 01.02.03 | Change Password      |

## Components

| Component           | Responsibility                                           |
| ------------------- | -------------------------------------------------------- |
| ProfileMenu.tsx     | Displays user identity and account actions               |
| Sidebar.tsx         | Integrates account navigation into the dashboard sidebar |
| ProfilePage.tsx     | Displays personal and account information                |
| SettingsPage.tsx    | Provides the destination for account settings            |
| App.tsx             | Defines application routes                               |
| DashboardLayout.tsx | Provides the shared dashboard layout                     |

## Design Decisions

### Profile Placement

The profile card is positioned at the bottom of the sidebar, separating personal account actions from workspace navigation.

### Reusable Component

ProfileMenu receives the user's display name, role, and action handlers through props.

This separates presentation from routing and authentication logic and allows the component to be reused across different user roles.

### Menu Behavior

Material UI's native Menu component is used to provide menu positioning, keyboard navigation, focus management, and dismissal behavior.

The menu opens above the profile card to accommodate its position near the bottom of the sidebar.

### Visual Consistency

The implementation uses the centralized Blueberry Edition theme, including existing typography, colors, borders, and spacing conventions.

## Routes

| Route     | Purpose                               |
| --------- | ------------------------------------- |
| /profile  | View personal and account information |
| /settings | Access account settings               |
| /login    | Sign-in interface                     |

## Current Limitations

- User information is currently populated using mock data.
- Profile information is not retrieved from a backend service.
- Profile editing is not yet implemented.
- Sign-out currently navigates to the sign-in page without invalidating an authenticated session.
- Dashboard routes are not yet protected by authentication guards.
- Role-specific navigation and authorization are not yet implemented.
- The System online indicator is currently static and does not represent a verified backend health check.

## Security Considerations

- User identity and role information must eventually originate from authenticated user context.
- Displayed roles must not be used as the sole basis for authorization.
- Hiding navigation items does not prevent unauthorized access to protected resources.
- Backend endpoints must independently validate authentication and authorization.
- Sign-out must terminate the authenticated session according to the final authentication architecture.
- Account roles must not be editable through the personal profile interface.

## Testing

The following behaviors must be verified:

- Profile card renders correctly.
- User name and role are displayed.
- Avatar initials are generated correctly.
- Account menu opens and closes correctly.
- Keyboard navigation and Escape dismissal function correctly.
- Account actions navigate to their intended destinations.
- Existing sidebar navigation remains functional.
- Existing branding and theme styling remain consistent.

## Future Integration

- Replace mock identity with authenticated user context.
- Retrieve profile information from the backend.
- Implement profile editing.
- Implement password changes.
- Implement secure sign-out.
- Introduce protected routes and role-based access control.

## Implementation Status

Frontend implementation in progress.

Authentication, authorization, backend integration, and automated component testing remain pending.
