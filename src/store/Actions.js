export const increment = () => {
  return {
    type: "INC",
    counter: 1,
  };
};

export const decrement = () => {
  return {
    type: "DEC",
    counter: 2,
  };
};

export const Login = () => {
    return {
      type: "LOGIN",
    };
  };
  
  export const Logout = () => {
    return {
      type: "LOGOUT",
    };
  };
  

// export {increment, decrement}