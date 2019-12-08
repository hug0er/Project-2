# Project 2

This project consists of the implementation of a chat page, with different channels. To better explain this project, we can divide it into 3 components that are: authentication, Channels, and messages.

- The first component Corresponding to the authentication uses** index.html**  to find out if there is a user stored in the local storage. If it exists, and the user has not yet visited a channel, it will remain in **index.html**, where the different channels will be displayed, in addition to the option to create one. If the username exists in the local storage, and there is also a channel saved in local storage, the user will be redirected to **"/channel/name_of_channel"** to continue on that channel. Finally, if there is no username in the local storage, the user is going to be redirected to **register.html** where it creates a new username. If the username already exists, an error message is displayed, if it does not exist, it will be redirected to **logged.html** where he will wait 3 seconds before going to **index.html** (aesthetic purposes).

- In the channels component **index.html**. Each user can create a new channel if the channel name already exists an error message will appear. By clicking on one of the existing channels the user will be redirected to that channel.

- Finally, the message section uses channels.html, which shows the last 100 messages that belong to that channel, with the username and time. Each user can add new messages, in each of the different channels.

**Note:** The personal touch is a button in ** index.html**, which allows us to logout, eliminating our username and also all the messages that we have put with that username. The values to be set in order to run the environment are:

- set FLASK_APP=application.py

