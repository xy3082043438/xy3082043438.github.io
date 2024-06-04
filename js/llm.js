document.querySelector('.chat-input button').addEventListener('click', () => {
  const input = document.querySelector('.chat-input input');
  const message = input.value.trim();
  if (message) {
    const userMessage = document.createElement('div');
    userMessage.classList.add('chat-message', 'user-message');
    userMessage.textContent = message;
    document.querySelector('.chat-body').appendChild(userMessage);

    // Simulate bot response
    setTimeout(() => {
      const botMessage = document.createElement('div');
      botMessage.classList.add('chat-message', 'bot-message');
      botMessage.textContent = '这是一个自动回复的示例。';
      document.querySelector('.chat-body').appendChild(botMessage);
      document.querySelector('.chat-body').scrollTop = document.querySelector('.chat-body').scrollHeight;
    }, 1000);

    input.value = '';
    document.querySelector('.chat-body').scrollTop = document.querySelector('.chat-body').scrollHeight;
  }
});