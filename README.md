<div align="center">
<h1>The Board Club App</h1>
 <p align="center">
  <img src="./Dev_Docs/BOARD_CLUB_LOGO_1.jpg" width="350" height="250" alt="Demo 1")
</p>
<h4>React Native application designed to offer the Newport Board Club app on both the Apple and Android platforms via their respective stores via a single code base utilizing Expo.</h4>
</div>

<br>
<br>

## Table-of-Contents

* [Deployment](#deployment)
* [Goal](#description)
* [Features](#features)
* [Installation](#installation)
* [Wireframe](#wireframe)
* [Technology](#technology)
* [Demo](#demo)



<br>

## [Goals](#table-of-contents)

The goal of this application to make members want to go surf by providing them with the all the infomation they need to have a great surf session. The app easily shows the current surf and weather conditons. Events are displayed to make it easy for memebers to get information they need to attend upcoming events. The Surf Log allow memebers to keep a log of all their surf sessions to track their progression and review previous sessions when selecting a surf spot or board for their next session. Surf hacks are listed to help new members with common surf problems. The Newport Surf map helps members easily pick the best spot to go surfing while visiting the club house based on  a variety of factors and conditions. The comminity forum helps memebers find other memebrs to surf with and also to interact memebers to build a sense of community.

<br>
<br>

## [Features](#table-of-contents)

<br>

* Events Page :confetti_ball:
  * Upcoming Events
  * Previous Events
  * Calender View

<br>

* Surf Log :open_book:
  * Log Each Surf Session
  * Review previous surf Sessions
  * Track surf progression

<br>

* Live WX :partly_sunny:
  * Water Temp
  * Tempeture
  * Wind
  * Sky Conditions
  * Popup/Overlay Widget

<br>

* Rental Infromation 🧾
  * Equipment
  * Prices / Hours

<br>

* About :question:
  * General Club Info


<br>


* Surf Resources :open_book:
  * Surf Hacks
  * Newport Surf Map / Surf Spot Beta

<br>

* Push Notification :loudspeaker:
  * Surfboard Overdue
  * New Surfboards
  * Upcoming Events
  * Swell / Conditions
 
<br>
<br>

## [Installation](#table-of-contents)

* Server/API

```
    1) npm run buildServer
    2) npm run startServer
```
<br>

* Client
  ```
  1) npm run buildClient
  2) npm run startClientServe
  ```
<br>
<br>

## [Wireframe](#table-of-contents)

 <p align="center">
  <img src="./Dev_Docs/Wireframes/Home_Page.png" height="300" alt="Demo 1"/img>
  <p align="center"><strong>Home Page</strong></p>
</p>

<br>
<br>

 <p align="center">
  <img src="./Dev_Docs/Wireframes/Club_Events_Page.png" height="300" alt="Demo 1"/img>
  <p align="center"><strong>Club Events</strong></p>
</p>

<br>
<br>

 <p align="center">
  <img src="./Dev_Docs/Wireframes/Surf_Log_Home.png" height="300" alt="Demo 1"/img>
  <p align="center"><strong>Surf Log</strong></p>
</p>

<br>
<br>

 <p align="center">
  <img src="./Dev_Docs/Wireframes/Rental_Page.png" height="300" alt="Demo 1"/img>
  <p align="center"><strong>Rental Page</strong></p>
</p>

<br>
<br>

 <p align="center">
  <img src="./Dev_Docs/Wireframes/Surf_Knowledge_Page.png" height="300" alt="Demo 1"/img>
  <p align="center"><strong>Surf Knowledge</strong></p>
</p>

<br>
<br>

 <p align="center">
  <img src="./Dev_Docs/Wireframes/About_Page.png" height="300" alt="Demo 1"/img>
  <p align="center"><strong>About Page</strong></p>
</p>

<br>
<br>

## [Technology](#table-of-contents)

* <h3> Software Stack </h3>

<br>

  * **Android Client**
    * Packages
      * @apollo/client (3.8.1)
      * @expo/vector-icons (13.0.0)
      * @react-native-community/checkbox (0.5.16)
      * @react-native-picker/picker (2.5.0)
      * @react-navigation/native (6.1.7)
      * @react-navigation/native-stack (6.9.13)
      * expo (49.0.6)
      * expo-constants (14.4.2)
      * expo-document-picker (11.5.4)
      * expo-file-system (15.4.3)
      * expo-linking (5.0.2)
      * expo-router (2.0.0)
      * expo-secure-store (12.3.1)
      * expo-splash-screen (0.20.5)
      * expo-status-bar (1.6.0)
      * graphql (15.8.0)
      * jwt-decode (3.1.2)
      * react (18.2.0)
      * react-dom(18.2.0)
      * react-native (0.72.3)
      * react-native-blob-util (0.19.1)
      * react-native-check-box (2.1.7)
      * react-native-dotenv (3.4.9)
      * react-native-gesture-handler (2.12.1)
      * react-native-image-pan-zoom (2.1.12)
      * react-native-modal (13.0.1)
      * react-native-reanimated (3.3.0)
      * react-native-safe-area-context (4.6.3)
      * react-native-screens (3.22.0)
      * react-native-switch-selector (2.3.0)
      * react-native-web (0.19.6)

<br>

  <!-- * **iOS Client** ()
    * Packages
      * 
      * 
      * 
      * 
      * 


<br> -->

* <h3> Hardware Stack/Deploy </h3>

  * Host: Railway
    * API: https://boardclubapp-production-api.up.railway.app/
  * Database: Self Host via Docker
    * MongoDB
  * Version Control: GitHub
    * https://github.com/DesertCow/NewportBoardClubApp_Native
  * Cloud Storeage: AWS
    * S3 - US West 1

<br>
<br>

## [Demo](#table-of-contents)

 <p align="center">
  <img src="./Dev_Docs/NBC_React_Native_Demo3.gif" height="650" alt="Demo 1"/img>
</p>

<br>
<br>
