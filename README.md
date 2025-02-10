# ShipmentApp

ShipmentApp is a React Native application that allows users to book shipments offline and sync them when they are back online. It uses **AsyncStorage** or **SQLite** for local data storage.

## Features

- Book shipments offline
- Store shipment data locally
- Sync shipments automatically when online

## Technologies Used

- **React Native**
- **AsyncStorage / SQLite**
- **NetInfo (for connectivity check)**

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- Node.js & npm
- React Native CLI
- Android Studio (for Android development) or Xcode (for iOS development)

### Steps to Set Up the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/prosper-85/shipment-app.git
   cd ShipmentApp
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the app:
   ```bash
   npx react-native run-android  # For Android
   npx react-native run-ios      # For iOS (Mac only)
   ```

## Implementation Details

- **Offline Booking:** Shipments are stored locally using AsyncStorage/SQLite.
- **Sync Mechanism:** When an internet connection is detected, all stored shipments are sent to the server.
- **Network Detection:** Uses React Native NetInfo to check connectivity status.

## Troubleshooting

- Clear storage if data isn't syncing properly:
  ```bash
  AsyncStorage.clear();
  ```
- Ensure network permissions are granted in `AndroidManifest.xml` and `Info.plist`.
