# Welcome to LetsMeet
<img src="./client/public/images/StudentTaskMateImage.png" />
A video chat platform

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Functionality](#functionality)
* [Figma Design](#figma-design)
* [Video Demonstration](#video-demonstration)
* [Setup](#setup)




## General info
LetsMeet allows users to create and login through the web application using their gmail, which will then take them to the home page. On the homepage, users can enter private groups where they can view that specific groups schedule and events. Within that group, users can also create/join a live video chat stream where they're allowed to communicate with others who join that stream.

## Technologies
This project is created with:
* React
* Node
* Firebase
* Agora
* Figma 

## Functionality
<b />

* Login Page - demonstrates Google's user authentication feature from Firebase that allows users to login/register with their gmail credentials 
* Home Page - displays the app logo, your name that is associated with your gmail account, a functional logout button that reroutes you to the sign in page, and a list of groups that you can enter that will route you to the associated group page
* Group Page - displays a functional calendar that you can traverse through, the date chosen from the calendar, any events/meetings going on today, a back button that reroutes you to the Home Page, and a Video Call button that reroutes you to the video call page
* Video Call Page - contains a "Join Stream" button that will take you to the private newly created video stream
* Video Stream Page - connects to the users camera and mic allowing for multiple users to be shown, allows users to turn on/off their camera and mic, as well as leave the stream

## Figma Design
Blueprint:
<div>
  
</div>

## Video Demonstration
![LetsMeet Video]()

## Setup

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
