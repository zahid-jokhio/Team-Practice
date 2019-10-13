import Firebase from '../../Config/Firebase/Firebase'



// Function for userSingup

const SignupFuc = (data, path) => {

    return async dispatch => {

        await Firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then(
            dispatch({ type: 'userSignup' })
        )
        path.push('/')

    }

}


//Function for UserLogin

const LoginFuc = (data, path) => {
    return async dispatch => {

        await Firebase.auth().signInWithEmailAndPassword(data.email, data.password).then(res => {
            dispatch({ type: 'userLogin' })
            path.push('home')

        }
        ).catch(err => {
            dispatch({ type: 'loginErr',payload:err })
        })

    }

}


export {
    SignupFuc,
    LoginFuc
}