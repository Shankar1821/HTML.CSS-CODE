const subscribeButton = document.querySelector('.subscribe-button');
const joinButton = document.querySelector('.join-button');
const tweetButton = document.querySelector('.tweet-button');

subscribeButton.addEventListener('click', () => {
    alert('You have subscribed to our newsletter!');
});

joinButton.addEventListener('click', () => {
    alert('Welcome to our community!');
});

tweetButton.addEventListener('click', () => {
    alert('Thank you for sharing our content on Twitter!');
});
