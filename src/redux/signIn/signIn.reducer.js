const INITIAL_STATE = {
   login: '',
   password: ''
};

const signInReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case 'LOGIN_CHANGE':
         return {
            ...state,
            login: action.payload
         };
      case 'PASSWORD_CHANGE':
         return {
            ...state,
            password: action.payload
         };
      case 'CLEAR_THE_FORMS':
         return {
            ...state,
            login: '',
               password: ''
         }
         default:
            return {
               ...state
            };
   }
};

export default signInReducer;