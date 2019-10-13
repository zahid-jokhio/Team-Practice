import React from 'react'
import { Button, Input, Paper,Navbar } from '../../Components'
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';


import {LoginFuc} from '../../Store/Actions/auth-action'


class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }



    render() {
        return (
            <div>
                <div style={{ marginBottom: "50px" }}>
                    <Navbar title="Login" />
                </div>
                <Grid justify="center" container spacing={3}>
                    <Grid item xs={12} sm={12} md={8} lg={5} >
                        <Paper>
                            <Input onChange={(e) => this.setState({ email: e.target.value })} type="email" value={this.state.email} placeholder='Enter your Email' label="Your Email" />
                            <Input onChange={(e) => this.setState({ password: e.target.value })} type="password" value={this.state.password} placeholder='Enter your Password' label="Your Password" />
                            <div style={{ textAlign: 'center' }}>
                                <Button click={()=>this.props.LoginFuc(this.state,this.props.history)}>
                                    Login
                                </Button>
                            </div>
                            <p style={{marginTop:'10px',textAlign:'center'}}>
                                Already Have'nt Account,<span onClick={()=>this.props.history.push('signup')} style={{color:'blue',cursor:"pointer",textDecoration:'underline'}}>  Signup </span> 
                            </p>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps =state=>{
    return{
        loginErr:state.AuthReducer.LoginErr
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        LoginFuc : (data,path)=>dispatch(LoginFuc(data,path))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Login)