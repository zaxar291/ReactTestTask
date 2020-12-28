const isLoggedInSelector = (state) => state.user.isLoggedIn;
const messageSelector = (state) => state.user.message;
const messageTypeSelector = (state) => state.user.messageType;

export { isLoggedInSelector, messageSelector, messageTypeSelector };
