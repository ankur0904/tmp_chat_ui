import React, { useEffect, useState } from "react";
import './chatbot.css';

function ChatBot() {
    const [eventListenerAdded, setEventListenerAdded] = useState(false);

    useEffect(() => {
        if (!eventListenerAdded) {
            const $ChatInput = document.querySelector('.ChatInput-input');
            const $ChatWindow = document.querySelector('.ChatWindow');

            $ChatInput.addEventListener('keyup', (e) => {
                if (e.shiftKey && e.which === 13) {
                    e.preventDefault();
                    return false;
                }

                if (e.which === 13) {
                    const $this = e.target;
                    const newText = $this.innerHTML;
                    $this.innerHTML = '';

                    const chatItemHTML = `
                        <div class="ChatItem ChatItem--expert">
                            <div class="ChatItem-meta">
                                <div class="ChatItem-avatar">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-standing ChatItem-avatarImage" viewBox="0 0 16 16">
  <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM6 6.75v8.5a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2.75a.75.75 0 0 0 1.5 0v-2.5a.25.25 0 0 1 .5 0Z"/>
</svg>
                                </div>
                            </div>
                            <div class="ChatItem-chatContent">
                                <div class="ChatItem-chatText">${newText}</div>
                                <div class="ChatItem-timeStamp"><strong>Me</strong> · Today 05:49</div>
                            </div>
                        </div>
                    `;

                    $ChatWindow.insertAdjacentHTML('beforeend', chatItemHTML);
                    $ChatWindow.scrollTop = $ChatWindow.scrollHeight;
                }
            });

            setEventListenerAdded(true);
        }
    }, [eventListenerAdded]);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div class="ChatWindow">
                    <div class="ChatItem ChatItem--customer">
                        <div class="ChatItem-meta">
                            <div class="ChatItem-avatar">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-robot ChatItem-avatarImage" viewBox="0 0 16 16">
                                    <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z" />
                                    <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z" />
                                </svg>
                            </div>
                        </div>
                        <div class="ChatItem-chatContent">
                            <div class="ChatItem-chatText">sound isnt working on my phone anymore</div>
                            <div class="ChatItem-timeStamp"><strong>Chat Bot</strong> • Today 05:49</div>
                        </div>
                    </div>
                    <div class="ChatItem ChatItem--expert">
                        <div class="ChatItem-meta">
                            <div class="ChatItem-avatar">
                                {/* <img class="ChatItem-avatarImage" src="https://image.ibb.co/eTiXWa/avatarrobot.png" /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-standing ChatItem-avatarImage" viewBox="0 0 16 16">
  <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM6 6.75v8.5a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2.75a.75.75 0 0 0 1.5 0v-2.5a.25.25 0 0 1 .5 0Z"/>
</svg>
                            </div>
                        </div>
                        <div class="ChatItem-chatContent">
                            <div class="ChatItem-chatText">hi there!</div>
                            <div class="ChatItem-chatText">i'd be happy to help you!</div>
                            <div class="ChatItem-chatText">just to make sure, have you tried pressing the physical volume button on the side to make sure the volume is all the way up?</div>
                            <div class="ChatItem-timeStamp"><strong>Me</strong> • Today 05:49</div>
                        </div>
                    </div>
                    <div class="ChatItem ChatItem--customer">
                        <div class="ChatItem-meta">
                            <div class="ChatItem-avatar">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-robot ChatItem-avatarImage" viewBox="0 0 16 16">
                                    <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z" />
                                    <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z" />
                                </svg>
                            </div>
                        </div>
                        <div class="ChatItem-chatContent">
                            <div class="ChatItem-chatText">k let metry</div>
                            <div class="ChatItem-timeStamp"><strong>Chat Bot</strong> • Today 05:51</div>
                        </div>
                    </div>
                    <div class="ChatItem ChatItem--customer">
                        <div class="ChatItem-meta">
                            <div class="ChatItem-avatar">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-robot ChatItem-avatarImage" viewBox="0 0 16 16">
                                    <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z" />
                                    <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z" />
                                </svg>
                            </div>
                        </div>
                        <div class="ChatItem-chatContent">
                            <div class="ChatItem-chatText">i think the volume is all the way up</div>
                            <div class="ChatItem-timeStamp"><strong>Chat Bot</strong> • Today 05:53</div>
                        </div>
                    </div>
                    <div class="ChatItem ChatItem--expert">
                        <div class="ChatItem-meta">
                            <div class="ChatItem-avatar">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-standing ChatItem-avatarImage" viewBox="0 0 16 16">
  <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM6 6.75v8.5a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2.75a.75.75 0 0 0 1.5 0v-2.5a.25.25 0 0 1 .5 0Z"/>
</svg>
                            </div>
                        </div>
                        <div class="ChatItem-chatContent">
                            <div class="ChatItem-chatText">no worries!</div>
                            <div class="ChatItem-chatText">try this for me: <br />- Go to Settings<br />- Go to Sound <br />- Make sure mute is off</div>
                            <div class="ChatItem-timeStamp"><strong>Me</strong> • Today 05:54</div>
                        </div>
                    </div>
                    <div class="ChatInput is-hidey">
                        <div class="ChatInput-input" contenteditable="true" placeholder="Type your message here..."></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatBot;