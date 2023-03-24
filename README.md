# CHAT APP GPT 3.5 TURBO
#### Chat app that uses open ai's gpt 3.5 turbo based on the tutorial by Ed Roh [video here] (https://github.com/ed-roh/chat-app).

I really liked this tutorial because of all the differnt tools that came together to make the app. I got to use open ai, chat engine, dropzone for attachments, redux toolkit for state management, and it was full stack. It was a good exercise in how to set up a quick backend with express and all the workings needed. Chat engine is a new UI API to work with but I see a chat app in there. The input accepts adding an attachment image for the chats. When clicked, you get a full screen view.

There are three different endpoints we're making calls to open ai and building a response to highlight unique features. One, is the text chat. Two, is the code assistant. Three, is the finish my sentence or text. You can get code snippets back from the text chat as well. Seems like the last feature of finishing up a sentence could be combined with the text chat. That way we have one gpt experience with inputs that finish your sentences and also able to chat or code.

Aspects of the app need improvement to be realistic.
- A good auth and login experience needs to be built.
- A logout button in a new app header.
- There is still a good bit of chat engine UI that could be improved on.

### Dependencies
- nodemon
- vite
- react router dom
- react dropzone
- redux toolkit
- redux toolkit query
- hero icons
- dotenv

### APIs
- chatengine docs/storybook/api/styling
- openai 