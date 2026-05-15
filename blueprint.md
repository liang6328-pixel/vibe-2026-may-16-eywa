# Project Blueprint

## Purpose

Eywa.ai is a secure digital vault designed to help users organize, store, and manage their most important life information. It provides a centralized and protected space for legal, financial, and medical documents, as well as personal and family history. The application will also feature a conversational AI, Eywa, to assist users in navigating their vault and accessing information.

## Features

*   **Digital Vault:** A secure and organized digital vault with predefined categories (Legal, Financial, Medical, History, End of Life).
*   **Dashboard:** A user-friendly dashboard that provides a clear overview of the vault categories.
*   **Routing:** A robust routing system using `react-router-dom`.
*   **Styling:** A clean and modern user interface styled with Tailwind CSS.
*   **Chat:** A basic chat interface that allows users to interact with the Eywa AI, now positioned above the vault categories.
*   **Document Upload:** A feature to upload documents to the vault categories using Firebase Storage.
*   **Vivid UI:** A visually engaging and modern user interface with a warmer, lighter color scheme, and a sticky navigation bar.
*   **Pricing Section:** A pricing section at the bottom of the home page showcasing "Free" and "Pro" (5 SGD/year) tiers.

## Completed Tasks

**Implement Document Upload Functionality (UI)**

*   **Objective:** To allow users to upload documents to a selected vault category.
*   **Steps:**
    1.  Created a modal component for file uploads.
    2.  The modal contains a file input and an "Upload" button.
    3.  When a user clicks the "plus" icon on a vault card, the modal opens.
    4.  Removed the `Link` component from the vault cards to prioritize the upload functionality.

**Integrate Firebase Storage for Document Uploads**

*   **Objective:** To store uploaded documents in Firebase Storage.
*   **Steps:**
    1.  Set up a new Firebase project and configured Firebase Storage.
    2.  Added the Firebase SDK to the React application.
    3.  Created a `firebase.ts` configuration file.
    4.  Updated the `handleUpload` function in `Home.tsx` to upload the selected file to Firebase Storage.
    5.  Displayed a success message to the user after the upload is complete.
    6.  Handled potential errors during the upload process.

**Enhance the Visual Design**

*   **Objective:** To create a more vivid and engaging user interface.
*   **Steps:**
    1.  Added a prominent header with the project name "Eywa.AI".
    2.  Introduced a modern color palette with a dark background and vibrant accent colors.
    3.  Enhanced the vault cards with icons, a subtle background texture, and a "lifted" effect.
    4.  Improved typography for a clearer visual hierarchy.
    5.  Refined the overall layout and spacing for a clean and balanced design.

**Integrate Disqus Comments**

*   **Objective:** To enable community discussion and feedback on the platform using the official React integration.
*   **Steps:**
    1.  Installed and configured the official `disqus-react` library.
    2.  Implemented the `DisqusComments` component using `DiscussionEmbed`.
    3.  Configured dynamic URL and identifier mapping to ensure correct thread loading across the SPA.
    4.  Integrated the component at the bottom of the main application layout.

**Remove Pricing Page**

*   **Objective:** To remove the dedicated pricing page.
*   **Steps:**
    1.  Deleted `src/pages/Pricing.tsx`.
    2.  Removed the route and navigation link to the pricing page from `App.tsx`.

**Add Pricing Section to Home Page**

*   **Objective:** To add a pricing plan section at the bottom of the home page.
*   **Steps:**
    1.  Created a new `Pricing.tsx` component in the `src/components` directory.
    2.  The component displays a "Free Tier" and a "Pro Tier" (5 SGD/year) with respective features.
    3.  Integrated the `Pricing` component into the `Home.tsx` page.
    4.  Updated the `blueprint.md` file to reflect the new feature.

**Update Color Scheme**

*   **Objective:** To change the application's color scheme to a warmer and lighter one.
*   **Steps:**
    1.  Modified the root stylesheet in `App.tsx` to use a warmer, lighter background color (`stone-100`).
    2.  Updated the colors in `Home.tsx` and `Pricing.tsx` from `slate` to `stone` to match the new color scheme.
    3.  Updated the `blueprint.md` file to reflect the changes.

**Reorder Chat and Vault Sections**

*   **Objective:** To move the "Chat with Eywa" section above the vault categories.
*   **Steps:**
    1.  Modified `src/pages/Home.tsx` to change the order of the sections.
    2.  Updated `blueprint.md` to reflect the change.