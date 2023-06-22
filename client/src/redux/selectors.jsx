export const tweetsHomeSelector = state => state.home.tweets;
export const scrollDataSelector = state => state.home.endScroll;
export const teweetSelector = state=> state.tweet.tweet;


export const tweetsMainPageSelector = state => state.main.tweets;
export const dataModalMainPage = state => state.main.modalData;
export const VisibleNoAutorizateModalSelector = state => state.main.VisibleNoAutorizateModal;
export const filteredUsersSelector = state => state.chat.filteredUsers;
export const getUserChats = state => state.chat.userChats;
export const getUser = state => state.user.user;
export const getActiveChat = state => state.chat.activeChat;
