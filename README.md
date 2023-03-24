# CHAT APP GPT 3.5 TURBO
#### Chat app that uses open ai's gpt 3.5 turbo based on the tutorial by Ed Roh ([video here](https://github.com/ed-roh/chat-app)).

---

### Install the app
Currently, the app is not hosted anywhere for public use so one must pull/clone the repo down ([here](https://github.com/bryson-palmer/chat-app-gpt)) and run the app locally.

### Run the app
1. cd into the server folder, open the terminal, and run **npm run dev**.
2. cd into the client folder, open a new terminal window, and run **npm run dev**

### Use the app
1. Register a new user
2. Sign in
3. Add a new chat
  - A user can change the gpt context by creating a chat from the (+) button at the top of the **My Chats** window and adding one of these prefixes to the title of the new chat:
    - AiChat_ responds as a helpful assistant  
    - AiCode_ responds as an assistant coder with only code and no explanations
    - AiAssist_ responds as a helpful assistant that serves to only complete user's thoughts or sentences
4. Go to the Members drop down, select *Add Member*, and choose AI_bot-Juliet (except for AiAssist_ as it is only set up to return the predictive text of open ai and is not being sent to chat engine)
5. Pick a chat and start interacting with Chat GPT 3.5 turbo
6. Please AI responsibly

### Features
Chat app where users can: 
- Register an account
- Create chats
- Add one or more members to a chat thread from the members drop down
- Add a an AI bot assistant by prefixing the chat title with one of the options (see step 3 in **Use the app**)
- Add an attachment to a chat with the ability of full screen image viewer when clicked
- View photos from the drop down under members
- Delete chat from the options drop down below photos

### Goal
To build with the infamous Chat Gpt over at Open AI.

### My experience
I really liked this tutorial because of all the differnt tools that came together to make the app. I used open ai, chat engine, dropzone for attachments, redux toolkit for state management, and it was full stack. A good exercise in how to set up a quick backend with express and all the workings needed. Chat engine is a new UI API to work with and it will be interesting to see where this feature can get added on other projects.

### APIs
- openai
  - model: gpt-3.5-turbo
- chatengine

### Dependencies
- nodemon
- vite
- react router dom
- react dropzone
- redux toolkit
- redux toolkit query
- hero icons
- dotenv

### To Do
Aspects of the app need improvement to be realistic.
- A good auth and login experience needs to be built.
- Key press is not set up for submit button.
- A logout button in a new app header.
- Refreshing logs a user out.
- A user can enter an empty input.
- There is still a good bit of chat engine UI that could be improved on.