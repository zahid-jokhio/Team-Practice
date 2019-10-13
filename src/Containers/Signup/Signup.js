import React from 'react'
import { Button, Input, Paper, Navbar } from '../../Components'
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'
import {SignupFuc} from '../../Store/Actions/auth-action'
class Signup extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }
    render() {
        return (
            <div>
                <div style={{ marginBottom: "50px" }}>
                    <Navbar title="Singup" />
                </div>
                <Grid justify="center" container spacing={3}>
                    <Grid item xs={12} sm={12} md={8} lg={5} >
                        <Paper>
                            <Input onChange={(e) => this.setState({ name: e.target.value })} type="text" value={this.state.name} placeholder='Enter your Name' label="Your Name" />

                            <Input onChange={(e) => this.setState({ email: e.target.value })} type="email" value={this.state.email} placeholder='Enter your Email' label="Your Email" />
                            <Input onChange={(e) => this.setState({ password: e.target.value })} type="password" value={this.state.password} placeholder='Enter your Password' label="Your Password" />
                            <div style={{ textAlign: 'center' }}>
                                <Button click={()=>this.props.SignupFuc(this.state,this.props.history)}>
                                    Singup
                                </Button>
                            </div>
                            <p style={{ marginTop: '10px', textAlign: 'center' }}>
                                Already Have Account,<span onClick={() => this.props.history.push('/')} style={{ color: 'blue', cursor: "pointer", textDecoration: 'underline' }}>  Login </span>
                            </p>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.AuthReducer.isSignup)
    return {
        isSignup: state.AuthReducer.isSignup
    }
}

const mapDispatchToProps = dispatch => {
    return {
        SignupFuc: (data,path) => dispatch(SignupFuc(data,path)),
  
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)