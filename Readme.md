# LAB - React Native - Milestone 1: MVP

Create your first native phone/device application using React Native, tapping into at least 2 phone features.

## Before you begin

Refer to Getting Started in the lab submission instructions for complete setup, configuration, deployment, and submission instructions.

Create a new GitHub repository titled with your course code and this lab number (i.e. js-401n15-class-10)

You will be submitting the URL to the README (docs) at the root of this repository for your assignment.

## Getting Started

Remote Development (Optional)

    - Create an account at https://expo.io
    - Confirm login for https://snack.expo.io

Local Development (Required)

Leverage local Expo functionality and the Expo Go Application on your moblie device to scan the QR code generated in your local terminal after running the command npx expo start or npx expo start --tunnel to interact with your application throughout developmemnt.

## Assignment

Over the next 2 lab coding sessions, you will create your first Phone App. What it does and how it looks is up to you. This is an opportunity to play around with whats possible in React Native and to get a feel for how you can get into the various device features.

This is a 2-session assignment, after which you will live-demo your phone app to the class (at the start of class 43)

Lab/Coding Session #1 - Focus on getting your dev system up and operational, getting “proof of life” and reaching your MVP in terms of baseline functionality

Lab/Coding Session #2 - Add in the device features, polish, and prepare for deployments.

## Requirements

    - Use at least 1 native device feature (Contacts, Camera, GPS, etc)
    - High Fidelity Styling and UX
        - Good starting points:
            - Native Base
            - Builder X
    - Properly Documented for End Users
    - Live Demo & Presentation

## Milestone 1 - MVP (This Lab)

    - Deliver your MVP for raw functionality
    - Your dev environment should be properly working
    - Other users should be able to scan your QR and see your app on any device
    - All of your core “features” should be working properly
        - Un-Styled is fine. We’re looking for things to buzz, light up, detect movement, etc.

## User Stories

- User Story 1: Display Current Location
As a user, I want to see my current location displayed in the app so that I can easily determine my coordinates.

- Acceptance Criteria:

  - When I open the app, it should request permission to access my device's location.
  - Once I grant permission, the app should retrieve and display my current latitude and longitude.
  - The displayed location should update dynamically as I move to different locations.
  - If the app is unable to access my location or permission is denied, it should display an appropriate error message.

- User Story 2: Location Tracking
As a user, I want the app to continuously track my location so that I can view my real-time movement on a map.

  - Acceptance Criteria:

  - The app should continuously track and update my location as I move.
  - It should display my current location on a map, allowing me to see my position visually.
  - The map should update in real-time to reflect any changes in my location.
  - If there is an issue with the location tracking, such as a loss of GPS signal, the app should display a message indicating the problem.

These user stories focus on the core functionality related to GPS in the app. You can further expand these stories or modify them based on your specific app requirements and desired features.

### Operating Instructions

1. [Fork Repo](https://github.com/Hcooper23/js-401D53-LAB---React-Native---Milestone-1-MVP) down from GitHub
2. Run NPM i for your system to install all dependencies
3. Run in Terminal expo start or npm start
4. Open your camera function to scan a QR code from the terminal that will open up EXPO Go on mobile device.
5. Phone will detect the exact location of the user and will render and image seen ![Phone Image](./assets/GPS%20Location%20Phone.PNG)
