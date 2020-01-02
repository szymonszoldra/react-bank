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
      default:
         return {
            ...state
         };
   }
};

export default signInReducer;
