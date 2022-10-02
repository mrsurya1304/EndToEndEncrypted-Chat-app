# SecureChat
## Description
SecureChat is a secure instant messaging application made in React and Firebase which allows users to chat with each other securely with Firebase Authentication and End to End Encryption performed with a Diffie Hellman Key Exchange and AES Encryption. 

Messages are stored in encrypted format and the encrypted message is decrypted on the client side. 

The secret key is only known to the two users chatting and not even the backend server so messages cant be accessed by anyone other than the two users chatting hence bringing in security.

## How to run on a computer from Github
1. Create a folder in a path convinient to you
2. Git bash into the folder you created (You can also use command prompt or powershell) and change directory to your folder
3. Copy the repository link from Github under the Code section
4. Type the command git clone https://github.com/mrsurya1304/EndToEndEncrypted-Chat-app.git and hit enter
5. Check that the repository has been cloned on the folder you created
6. Open Visual Studio Code
7. Click on File -> Open Folder -> Your cloned repository folder -> EndToEndEncrypted-Chat-app and click select folder
8. Click on Terminal -> New terminal to launch a new terminal and type the command npm i
9. Type the command npm start to start the app

SecureChat loads up and will be ready to use Enjoy

Demo : https://youtu.be/mH0QRrmPZ5k

## How to use SecureChat
- Entering the app there will be a login screen which asks for your username and password
- If you are a registered user, enter your registered credentials and click Log in
- Else enter your new username and password and click register
- Once you are logged in you can see all the users using SecureChat on your left
- Select the person you would like to chat wilth by clicking on their username which opens up a chat screen
- If you have already chatted with the person before your previous messages are available for you
- You can type in messages and send them with the send button or enter key to the receiver
- Along with the chat screen on the far right you can see how DH Key exchange and AES work dynamically
- Once you are done with your conversation you can click the Log out button on the top left to log out redirecting you back to the login page

## Sample credentials
  Username followed by password for 3 sample users
  
  user1@gmail.com   abcd1234
  
  user2@gmail.com   1234abcd
  
  user3@gmail.com   12345678

## Features of SecureChat
- Register: Enter your credentials (Username and Password) and by using Firebase Authentication a new user will be created and added to the users database
- Login: If previously registered, enter your credentials and your credentials will be verified and authenticated. You will now be able to access the chat
- Users retreival: All users of the chatting application are retreived from the users database and shown to the logged in user.
- Chatting: Select the user you want to chat to by clicking on their username.
- Previous message retreival: Once you select a user, if you have previously chatted your old conversations are fetched from the conversations database and shown to the user
- Send messages: Type your message in the text field given and either click the send button or click enter to send the message to the receiver and store in the conversations database
- Receive message: The sent message is instantly received from the conversations database and displayed onto the receivers screen
- Encryption demonstration: When you are chatting the various Diffie Hellman Parameters, Secret key, Encrypted and Decrypted message is visible to you and changes according to the message sent/received.
- Log out: Click the log out button to sign out which redirects back to the Log in page

## Concepts used to build SecureChat
- We have 2 screens for the app
  - Login Screen
  - Chat Screen

### Login Screen
- Initially we generate the DH parameters (prime and generator values) and store it in the Diffie Hellman parameters database
 
#### Registration
- We get the entered credentials (userid and password from the user)
- Use Firebase Authentication and the details entered to create an account for the user
- After authentication get the Diffie Hellman parameters and generate a private key for the user
- Compute the public key for the user
- Add the user with DH parameters to the users database
- Add the user to localstorage so the user doesnt have to log in if on the same session
- Log in the user to access the chat after registration

#### Login
- We get the entered credentials (userid and password from the user)
- Check credentials using Firebase Authentication
- If there is a match add the user to localstorage and log the user in

### Chat Screen
- Here we have 3 components
    - Navbar
    - Chat heads
    - Conversation Screen

#### Navigation bar
- Contains the SecureChat logo
- Contains the current user's username and log out button while logged in

#### Chat heads
- Shows the various users to chat with
- When a user is selected displays a conversation screen and sets the selected user as the receiver

#### Conversation screen
- Handles Sending messages, Uses the secret key generated between the two users previously using DH and encrypts messages with that key using AES
- Contains an input bar to enter a message and a button to send message (Can also be sent with enter)
- Feature to scroll to the bottom of the chat if there are many messages while loading
- This process is shown on the encryption demo screen on the right (Encrypted message fetched from database, Decryption process, Message typed from the user to send and the Encryption process)
- Appends sent message to the conversations database if it already exists else we create a new document for the conversation
- Also retreives messages sent by getting the conversation from the conversations database

## How SecureChat looks like
![alt text](https://github.com/mrsurya1304/EndToEndEncrypted-Chat-app/blob/main/samples/sample1.png)
![alt text](https://github.com/mrsurya1304/EndToEndEncrypted-Chat-app/blob/main/samples/sample2.png)
![alt text](https://github.com/mrsurya1304/EndToEndEncrypted-Chat-app/blob/main/samples/sample3.png)
![alt text](https://github.com/mrsurya1304/EndToEndEncrypted-Chat-app/blob/main/samples/sample4.png)
![alt text](https://github.com/mrsurya1304/EndToEndEncrypted-Chat-app/blob/main/samples/sample5.png)

## Demo
Link: https://youtu.be/UCQ_4NTSVSA

## Link to use SecureChat
This project has been hosted on GitHub Pages. 

You can run this application on your browser

Link : https://mrsurya1304.github.io/EndToEndEncrypted-Chat-app

## Future ideas
- Limit the number of users using the system (Retain the n newest newest users), No count function in Firebase
- Implement Triple Diffie Hellman along with a double ratchet (Signal protocol), End to End Encryption strategy used in famous instant messaging apps.
- Plenty of unnecessary reads making the app slow. (Need optimization and reduced number of reads)
- Diffie Hellman parameters are in a certain small range difficult to work with large numbers in JS (Wrapping araound of numbers) hence chances for duplication in private, public and secret key. Need to widen the range for DH parameters.

## Acknowledgements
- The idea of building a chatting application with React and Firebase is heavily inspired by the youtube channel Nxt-Code
- Video link: https://youtu.be/hQqqBr02W6k
- I have added Diffie Hellman key exchange along with AES encryption to make the chat app end to end encrypted enhancing security 
