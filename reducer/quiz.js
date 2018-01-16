import { RECORD_QUIZ_RESULT, RESET_QUIZ_RESULTS } from '../action';

function quizReducer(state = {}, action) {
  switch (action.type) {
    case RECORD_QUIZ_RESULT: {
      return {
        currentCardIndex: state.currentCardIndex + 1,
        correctAnswers: state.correctAnswers + action.result,
      };
    }
    case RESET_QUIZ_RESULTS:
    default:
      return { currentCardIndex: 0, correctAnswers: 0 };
  }
}

export default quizReducer;
