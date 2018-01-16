import { RECORD_QUIZ_RESULT } from '../action';

function quizReducer(state = {}, action) {
  switch (action.type) {
    case RECORD_QUIZ_RESULT: {
      return {
        currentCardIndex: state.currentCardIndex + 1,
        correctAnswers: state.correctAnswers + 1,
      };
    }
    default:
      return { currentCardIndex: 0, correctAnswers: 0 };
  }
}

export default quizReducer;
