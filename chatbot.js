(function() {

  // Configuration object for proactive messages
  const proactiveMessagesList = {
    '/': {
      firstTimeout: 0,
      firstMessage: 'W czym mogę Ci pomóc?',
      secondMessage: null,
      timeout: 0,
    },
    '/nieruchomosci': {
      firstTimeout: 0,
      firstMessage: 'Potrzebujesz wsparcia w poszukiwaniach? 🏢',
      secondMessage: 'Porozmawiaj z agentem AI',
      timeout: 5000,
    },
    '/uslugi': {
      firstTimeout: 0,
      firstMessage: 'Potrzebujesz wsparcia?',
      secondMessage: 'Porozmawiajmy!',
      timeout: 5000,
    },
    '/o-nas': {
      firstTimeout: 0,
      firstMessage: 'Czy potrzebujesz dodatkowych informacji?',
      secondMessage: 'Porozmawiajmy 👀',
      timeout: 5000,
    },
    '/kalkulator-m2': {
      firstTimeout: 0,
      firstMessage: 'Potrzebujesz optymalizacji powierzchni? 📐',
      secondMessage: 'Albo szukasz biura na wynajem?',
      timeout: 5000,
    },
    '/blog': {
      firstTimeout: 0,
      firstMessage: 'Czy możemy Ci jakoś pomóc?',
      secondMessage: 'Porozmawiaj z naszym doradcą AI 💬',
      timeout: 5000,
    },
    '/kontakt': {
      firstTimeout: 5000,
      firstMessage: 'Potrzebujesz pomocy?',
      secondMessage: 'Zostaw swoje namiary, oddzwonimy! ☎️',
      timeout: 8000,
    },
  };

const proactiveMessagesListEn = {
  '/': {
    firstTimeout: 0,
    firstMessage: 'How can I assist you?',
    secondMessage: null,
    timeout: 0,
  },
  '/nieruchomosci': {
    firstTimeout: 0,
    firstMessage: 'Need help with your search? 🏢',
    secondMessage: 'Talk to the AI agent',
    timeout: 5000,
  },
  '/uslugi': {
    firstTimeout: 0,
    firstMessage: 'Do you need support?',
    secondMessage: "Let's talk!",
    timeout: 5000,
  },
  '/o-nas': {
    firstTimeout: 0,
    firstMessage: 'Do you need additional information?',
    secondMessage: "Let's chat 👀",
    timeout: 5000,
  },
  '/kalkulator-m2': {
    firstTimeout: 0,
    firstMessage: 'Looking to optimize your space? 📐',
    secondMessage: 'Or searching for an office to rent?',
    timeout: 5000,
  },
  '/blog': {
    firstTimeout: 0,
    firstMessage: 'Can we help you with something?',
    secondMessage: 'Talk to our AI advisor 💬',
    timeout: 5000,
  },
  '/kontakt': {
    firstTimeout: 5000,
    firstMessage: 'Do you need help?',
    secondMessage: 'Leave your contact, and we’ll call you back! ☎️',
    timeout: 8000,
  },
};

const addMessagesToConversationHistory = (history) => {
  const { pathname } = window.location;
  const isEnPath = pathname.includes('/en/');
  const proactiveMessages = isEnPath ? proactiveMessagesListEn : proactiveMessagesList;

  // Special handling for exact match with home path ("/")
  const matchedPath =
    pathname === '/'
      ? '/'
      : Object.keys(proactiveMessages).find((key) => key !== '/' && pathname.includes(key));

  if (!matchedPath) return; // No matching path found

  const config = proactiveMessages[matchedPath];

  const pushMessage = (message) => {
    if (message) history.push({ role: 'assistant', content: message });
  };

  pushMessage(config.firstMessage);
  pushMessage(config.secondMessage);
};

    let conversationHistory = [];

    addMessagesToConversationHistory(conversationHistory);

    // Add Tailwind CSS for styling
    document.head.insertAdjacentHTML(
      'beforeend',
      '<link href="https://fonts.googleapis.com/css2?family=Tinos:wght@400;700&display=swap" rel="stylesheet">'
    );
  
    // Inject custom CSS
    const style = document.createElement('style');
    style.innerHTML = `
    .custom-hidden {
      display: none !important;
    }

    .message-container {
      display: flex;
    }
    
    #reply-message {
      background-color: #E5E7EB;  /* bg-gray-200 */
      color: rgb(0, 0, 0);                   /* text-black */
      border-radius: 0.5rem;                 /* rounded-lg */
      padding: 0.5rem 1rem;                  /* py-2 px-4 */
      max-width: 70%;                        /* max-w-[70%] */                         /* flex */
      align-items: center;
      justify-content: flex-start;
      margin-right: auto;
    }
    
    #user-message {
      border: 2px solid #1F2937;
      background-color: rgb(0, 0, 0);                   /* text-black */
      color: white;                   /* text-white */
      border-radius: 0.5rem;                 /* rounded-lg */
      padding: 0.5rem 1rem;                  /* py-2 px-4 */
      max-width: 70%;                        /* max-w-[70%] */
      display: flex;                         /* flex */
      align-items: center;
      justify-content: flex-end;
      margin-left: auto;
    }

    .custom-display {
      display: flex !important;
    }

    #close-popup {
      background-color: #100F2D;
      border: none;
    }

    #chat-input-container {
      border-top: 2rem;
      border-bottom-left-radius: .5rem;
      border-bottom-right-radius: .5rem;
      box-shadow: var(--shadow-md);
    }

    #chat-input-container-2 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 0.5rem;
        bottom-radius: 0.5rem;


        textarea {
            color: #000;
            border: 1.5px solid #e5e7eb;
            border-radius: 5px;
            resize: none;
            width: 100%;
        }
    }
    .custom-chat-container {
      background-color: rgb(31, 41, 55); /* bg-gray-800 */
      color: white; /* text-white */
      border-radius: 5px; /* rounded-md */
      padding: 8px 16px; /* px-4 py-2 */
    }

    .custom-chat-container:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .custom-icon-container {
      background-color: #100F2D;
      font-size: 1.875rem;
      line-height: 2.25rem;
      border-radius: 9999px;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      width: 4rem;
      height: 4rem;
      display: flex;
    }

    .custom-helper-text-container {
      background: white;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -2px rgba(0, 0, 0, .1);
      font-size: .875rem;
      line-height: 1.25rem;
      text-align: right;
      border-width: 1px;
      border-radius: .5rem;
      max-width: max-content;
    }

    #chat-submit {
      border: 0;
    }

    #chat-header {
      background-color: #100F2D;
      color: white;
      font-size: .875rem;
      line-height: 1.25rem;
      border-top-left-radius: .5rem;
      border-top-right-radius: .5rem;
      justify-content: space-between;
      align-items: center;
      display: flex;
      padding: .5rem !important;
    }

    .chat-spacer-top {
      display: flex;
      column-gap: .5rem; 
    }

    .chat-spacer-top-img {
      width: 1.5rem;
      height: 1.5rem;
      color: white;
    }

    .hero-container-intro {
      padding: 1.5rem;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      display: flex;
      margin-bottom: 1rem;
      padding-bottom: 1rem;

        h3 {
          font-weight: 600;
          color: #000;
        }
        
        p {
          text-align: center;
          margin-top: .25rem;
          margin-bottom: .25rem;
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 1rem;
        }
    }

    .hero-container-intro-img {
      height: 4rem;
      width: 4rem;
    }
    
    #chat-widget-container {
      position: fixed;
      bottom: 60px;
      right: 20px;
      display: flex;
      flex-direction: column;
      font-family: 'Tinos', serif; /* Apply Tinos font */
      align-items: flex-end;
      height; 760px;
      width: 560px; 

    }
      
    #chat-popup {
      height: 560px;
      width: 360px;
      transition: all 0.3s;
      font-family: 'Tinos', serif;
    }

    #chat-messages {
      background: white;
      padding: 1rem;
      max-height: 300px; /* Set a fixed height */
      overflow-y: auto;

    &::-webkit-scrollbar {
        width: 2px;
      }
    
      &::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
    
      &::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 5px;
      }

    }


    #custom-shadow-chat {
      box-shadow: 2px 2px 4px rgb(45, 45, 45);
      border-top-left-radius: .5rem;
      border-top-right-radius: .5rem;
      border-bottom-left-radius: .5rem;
      border-bottom-right-radius: .5rem;
    }
    `;
    document.head.appendChild(style);

    // Create the chat widget container
    const chatWidgetContainer = document.createElement('div');
    chatWidgetContainer.id = 'chat-widget-container';
    chatWidgetContainer.className = 'flex flex-column justify-end items-end absolute z-[100]';
    chatWidgetContainer.style.zIndex = '1000';
    document.body.appendChild(chatWidgetContainer);
  
    // Inject the HTML for the widget
    chatWidgetContainer.innerHTML = `
      <div id="proactive-messages-container">
      </div>
      <div style="background-color: #100F2D;" id="chat-bubble" class="custom-icon-container w-16 h-16 rounded-full flex items-center justify-center cursor-pointer text-3xl">
        <img class="h-12 w-12" src="data:image/svg+xml,%3csvg%20viewBox='0%200%2036%2036'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cg%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cpath%20d='M18.0000533,7%20C24.6266329,7%2030,11.4789312%2030,16.9976931%20C30,22.5163617%2024.6266329,26.9953062%2018.0000533,26.9953062%20C17.123351,26.9971724%2016.2483812,26.9169271%2015.386606,26.7553699%20C14.0404188,27.7431078%2012.5315125,28.4873102%2010.9284053,28.9541197%20C10.4583473,29.0903502%209.95341047,28.916663%209.66660965,28.5199682%20C9.37982216,28.1234068%209.37297168,27.5894152%209.64952342,27.1855224%20C10.1505552,26.5172998%2010.5515886,25.7796289%2010.840002,24.9957036%20C7.9365286,23.3624038%206.10015838,20.3278759%206,16.9976931%20C6,11.4789179%2011.3733271,7%2018.0000533,7%20Z%20M18.0000533,18.0020932%20L14.0000889,18.0020932%20L13.8644511,18.0112196%20C13.3765531,18.0774186%2013.0005042,18.4957012%2013.0005042,19.0018279%20C13.0005042,19.5539661%2013.4480335,20.0015625%2014.0000889,20.0015625%20L18.0000533,20.0015625%20L18.135691,19.9924361%20C18.623589,19.9262371%2018.9996379,19.5079545%2018.9996379,19.0018279%20C18.9996379,18.4496896%2018.5521087,18.0020932%2018.0000533,18.0020932%20Z%20M22.0001244,14.001515%20L14.0000889,14.001515%20L13.8644511,14.0106414%20C13.3765531,14.0768404%2013.0005042,14.495123%2013.0005042,15.0012497%20C13.0005042,15.5533879%2013.4480335,16.0009843%2014.0000889,16.0009843%20L22.0001244,16.0009843%20L22.1357621,15.9918579%20C22.6236601,15.9256589%2022.999709,15.5073764%2022.999709,15.0012497%20C22.999709,14.4491115%2022.5521797,14.001515%2022.0001244,14.001515%20Z'%20fill='%23ffffff'%3e%3c/path%3e%3c/g%3e%3c/svg%3e" />
      </div>
      <div id="chat-popup" class="custom-hidden hidden absolute bottom-20 right-0 w-96 bg-white rounded-md shadow-md flex flex-col transition-all text-sm">
      <div id="custom-shadow-chat">
        <div  style="background-color: #100F2D;" id="chat-header" class="flex justify-between items-center p-2 text-sm text-white rounded-t-lg">
          <div class="chat-spacer-top flex gap-x-2">
          <img class="chat-spacer-top-img w-6 w-max-6 h-6 h-max-6" src="https://cm4-production-assets.s3.amazonaws.com/1729313423218-apple-touch-icon.png" />  
          <h3 class="m-0 text-base">Wirtualny Asystent</h3>
          </div>
            <button id="close-popup" class="bg-transparent border-none text-white cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 chat-spacer-top-img" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

        <div id="chat-messages">
        <div class="hero-container-intro flex flex-col justify-center items-center mb-6 p-8">
            <img class="hero-container-intro-img w-16 h-16" src="https://cm4-production-assets.s3.amazonaws.com/1731862489163-unnamed-1.png" />
            <h3 class="m-2 text-lg font-semibold">Wirtualny Asystent</h3>
            <p class="text-gray-600 text-center">Jestem wirtualnym asystentem z BNM, dostępny dla Ciebie 24/7.</p>
        </div>
        </div>
        <div>
          <div id="chat-input-container" style="background: white;" class="p-4">
            <div id="chat-input-container-2">
              <textarea type="text" rows="1" id="chat-input" class="flex-1 border border-gray-300 rounded-md px-4 py-2 outline-none w-3/4" placeholder="Message..."></textarea>
              <button id="chat-submit" class="custom-chat-container bg-gray-800 text-white rounded-md px-4 py-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  
    // Add event listeners
    const chatInput = document.getElementById('chat-input');
    const chatSubmit = document.getElementById('chat-submit');
    const chatMessages = document.getElementById('chat-messages');
    const chatBubble = document.getElementById('chat-bubble');
    const chatPopup = document.getElementById('chat-popup');
    const closePopup = document.getElementById('close-popup');
  
    // Display initial assistant message
    conversationHistory.forEach(({content}) => {
      displayReplyMessage(content);
    })

    chatSubmit.addEventListener('click', function() {
      const message = chatInput.value.trim();
      if (!message) return;
  
      chatInput.value = '';
      displayUserMessage(message);
      getChatGPTReply(message);
    });
  
    chatInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        // Allow Shift+Enter to add a new line
        if (event.shiftKey) return;
        // Prevent new line for Enter without Shift and submit the form
        event.preventDefault();
        chatSubmit.click();
      }
    });
  
    chatBubble.addEventListener('click', function() {
      removeProactiveMessages();
      chatBubble.classList.toggle('custom-hidden');
      togglePopup();
      initializeChatWidget();
    });
  
    closePopup.addEventListener('click', function() {
      togglePopup();
      chatBubble.classList.toggle("custom-hidden");

    });
  
    function togglePopup() {
      chatPopup.classList.toggle('custom-hidden');

      if (!chatPopup.classList.contains('custom-hidden')) {
        chatInput.focus();
      }

    }
  
    let threadId = null;

    window.addEventListener('beforeunload', () => {
      try {
        if(!!threadId && threadId !== undefined) sendEmailWithChatHistory(threadId);
      } catch (error) {
        console.error('Error sending chat history:', error);
      }
  });
  
    function displayUserMessage(message) {
      const messageElement = document.createElement('div');
      messageElement.className = 'message-container flex justify-end mb-3';
      messageElement.innerHTML = `
        <div id="user-message" class="bg-gray-800 text-white rounded-lg py-2 px-4 max-w-[70%]">
          ${formatMessageWithNewLines(message)}
        </div>
      `;
      chatMessages.appendChild(messageElement);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  
    function displayReplyMessage(message) {
      const replyElement = document.createElement('div');
      replyElement.className = 'message-container flex justify-start mb-3';
      replyElement.innerHTML = `
        <div id="reply-message" class="bg-gray-200 text-black rounded-lg py-2 px-4 max-w-[70%]">
          ${parseMarkdownToHtml(message)}
        </div>
      `;
      chatMessages.appendChild(replyElement);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  
    function displayLoader() {
      const loaderElement = document.createElement('div');
      loaderElement.id = 'loading-indicator';
      loaderElement.className = 'flex mb-3';
      loaderElement.innerHTML = `
        <div class="bg-gray-200 text-black rounded-lg py-2 px-4 max-w-[70%] flex items-center">
          <span class="dot">.</span>
          <span class="dot">.</span>
          <span class="dot">.</span>
        </div>
      `;
      chatMessages.appendChild(loaderElement);
      chatMessages.scrollTop = chatMessages.scrollHeight;

      // Add animation
      const style = document.createElement('style');
      style.innerHTML = `
        #loading-indicator .dot {
          animation: blink 1s infinite;
        }
        #loading-indicator .dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        #loading-indicator .dot:nth-child(3) {
          animation-delay: 0.4s;
        }
        @keyframes blink {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `;
      document.head.appendChild(style);
    }

    // Function to remove the loader
    function removeLoader() {
      const loaderElement = document.getElementById('loading-indicator');
      if (loaderElement) loaderElement.remove();
    }

    async function getChatGPTReply(userMessage) {
      // Display the loader
      displayLoader();
      // Disable the send button
      disableButton();

      try {
        // Existing code to send the message
        const response = await sendMessage(userMessage, threadId);
        conversationHistory.push({ role: 'user', content: userMessage });
        conversationHistory.push({ role: 'assistant', content: response });

        // Remove the loader
        removeLoader();

        // Display the assistant's response
        const cleanedResponse = removeBracketedText(response);
        displayReplyMessage(cleanedResponse);
        enableButton();
      } catch (error) {
        removeLoader();
        console.error('Error fetching the response:', error);
      }
    }
  
    const initializeChatWidget = async () => {
      if(!!threadId) return;
    
    //   assistant = await getAssistant('asst_bQIay4lQB3U9l265MevyHJCT');
      const response = await requestInitialization();
      threadId = await response;
    }

  //http://localhost:3000
  //https://reframe-ai.uc.r.appspot.com
  const ENDPOINT = 'https://reframe-ai.uc.r.appspot.com';


  const requestInitialization = async () => {
    const response = await fetch(`${ENDPOINT}/api/initialize`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const {threadId} = await response.json();
    return threadId;
  }

  const sendMessage = async (userMessage, threadId) => {
    const response = await fetch(`${ENDPOINT}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userMessage,
        threadId,
        assistantId: 'asst_bQIay4lQB3U9l265MevyHJCT',
      }),
    });
    const data = await response.json();
    return data;
  }

  const sendEmailWithChatHistory = (id) => {
    const url = `${ENDPOINT}/api/send-history`;
    const payload = new Blob([JSON.stringify({ threadId: id })], {type: 'application/json'});
    navigator.sendBeacon(url, payload);
  }

  function removeBracketedText(text) {
    // Regex to match any text within brackets, including the brackets
    const bracketPattern = /【.*?】/g;
    // Replace all matches with an empty string
    return text.replace(bracketPattern, '');
}

// Get the current page path
const { pathname } = window.location;

// Determine if the current path is in English
const isEnPath = pathname.includes('/en');

// Select the appropriate proactive messages list
const proactiveMessages = isEnPath ? proactiveMessagesListEn : proactiveMessagesList;

// Special handling for the home path to avoid matching everything
let matchedPath = pathname === '/' 
  ? '/' 
  : Object.keys(proactiveMessages).find((key) => key !== '/' && pathname.includes(key));

if (matchedPath) {
  const config = proactiveMessages[matchedPath];

  // Display the first message after the specified timeout
  setTimeout(() => {
    addMessageToWidget(config.firstMessage);

    // Display the second message if configured
    if (config.secondMessage) {
      setTimeout(() => {
        addMessageToWidget(config.secondMessage);
      }, config.timeout);
    }
  }, config.firstTimeout);
}

const addMessageToWidget = (message) => {
  const widget = document.querySelector('#proactive-messages-container'); // Update with actual widget selector
  if (widget && message) {
    const messageElement = document.createElement('div');
    messageElement.className = `
      custom-helper-text-container
      bg-white 
      text-gray-700 
      shadow-md 
      rounded-lg 
      p-2
      text-sm
      mb-2 
      border 
      border-gray-200
      max-w-fit
      w-fit
      max-w-max 
      flex 
      text-right
      self-end
      justify-self-end
    `;
    messageElement.textContent = message;
    widget.appendChild(messageElement, widget.firstChild); // Add message to the top of the widget
  }
};

const removeProactiveMessages = () => {
  const proactiveContainer = document.querySelector('#proactive-messages-container');
  if (proactiveContainer) proactiveContainer.remove();
}


const disableButton = () => {
  const button = document.getElementById('chat-submit');

  button.style.opacity = '0.5'; // Makes the button appear disabled
  button.disabled = true; // Disables functionality
}

const enableButton = () => {
  const button = document.getElementById('chat-submit');

  button.style.opacity = '1'; // Restores opacity
  button.disabled = false; // Enables functionality
}

function parseMarkdownToHtml(markdown) {
  // Replace **text** with <b>text</b> for bold
  markdown = markdown.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');

  // Replace *text* or _text_ with <i>text</i> for italics
  markdown = markdown.replace(/\*(.*?)\*/g, '<i>$1</i>');
  markdown = markdown.replace(/_(.*?)_/g, '<i>$1</i>');

  // Replace - Item or * Item with <ul><li>Item</li></ul> for lists
  markdown = markdown.replace(/(?:^|\n)- (.*?)(?:\n|$)/g, '<ul><li>$1</li></ul>');
  markdown = markdown.replace(/(?:^|\n)\* (.*?)(?:\n|$)/g, '<ul><li>$1</li></ul>');

  // Replace \n\n with <br> for line breaks
  markdown = markdown.replace(/\n/g, '<br>');

  return markdown;
}

function formatMessageWithNewLines(message) {
  return message.replace(/\n/g, '<br>');
}
  })();