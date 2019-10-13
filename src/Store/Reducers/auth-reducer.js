const intialState = {
    isSignup: false,
    isLogin:false,
    LoginErr:''

}



const AuthReducer = (state = intialState, action) => {
    switch (action.type) {
        case "userSignup":
            return state

        case "userLogin" : 
        return state

        case "loginErr" :
            state.LoginErr = action.payload
            console.log(state)
        return {...state,loginErr:state.loginErr}


        default: return state
    }


}


export default AuthReducer

