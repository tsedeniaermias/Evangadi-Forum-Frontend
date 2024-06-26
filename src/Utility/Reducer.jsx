import { Type } from "./action.type";

export const initialState = {
      signState: "LOGIN"
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.LOGIN:
      return {
        signState: "LOGIN"
      }
      
        
      
    case Type.LOGOUT:
      return {
        signState: "LOGOUT"
      }
     

    default:
      return state;
  }
};
