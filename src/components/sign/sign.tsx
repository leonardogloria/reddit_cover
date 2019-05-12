import * as React from 'react';
import {Link} from "react-router-dom";
import { Row, Col, Card, TextInput, Button, Icon} from 'react-materialize';
import {sign} from "crypto";

interface Props{
  isSignIn:true;
}
export default class SignInOrSignUp extends React.Component<any,any>{

    handleLogin(e){
        e.preventDefault();



    }
s
    public signin(){

        return (
            <div>
                <h3>Sign IN</h3>
                <form onSubmit={this.handleLogin.bind(this)}>
                    <TextInput placeholder={"Email"}/>
                    <TextInput placeholder={"Password"}/>
                    <Button type="submit" waves="light">
                        Submit
                        <Icon right>
                            send
                        </Icon>
                    </Button>
                </form>

            </div>
        )

    }
    public signup(){

        return (
            <div>
                <h3>Sign UP</h3>
                <TextInput placeholder={"Email"}/>
                <TextInput placeholder={"Password"}/>
                <Button type="submit" waves="light">
                    Submit
                    <Icon right>
                        send
                    </Icon>
                </Button>

            </div>
        )

    }
    public render(){
        if(this.props.isSignIn){
            return this.signin();

        }else {
            return this.signup();
        }

    }

}