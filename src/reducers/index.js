import currentPage from './current-page';

export default function (currentState, action) {
  return {
    currentPage: currentPage(currentState ? currentState.currentPage : 'home', action),
  };
}
