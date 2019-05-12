import * as React from 'react';
import {Link} from "react-router-dom";
import { Container } from 'react-materialize';
import { Switch, Route,  } from 'react-router-dom'
import Links from "./links/links";
import LinkDetail from './linkdetail/linkdetail'
import Items from './links/items'
import UserDetail from "./userdetail/userdetail";
import LinksList from "./links/linksList";
import SignInOrSignUp from "./sign/sign";
export const data = [{id:1,title: "Google",url:"http://www.google.com"},{id:2,title: "Facebook", url:"http://facebook.com"}]
export const comments = [{id:1,comment: "Is Google good?",userId: 1, date: new Date(0)},
    {id:2,comment: "Lets put a smile on that face",userId: 1, date: new Date(0)}]

export default class Main extends React.Component<any,any>{

    public render(){
        return (
            <Container>
                <Switch>
                    <Route exact path='/'
                           render={(props) => <LinksList {... props} items={data} />} />
                    <Route  path='/linkdetail/:id' 
                        render={(props) => <LinkDetail  {... props} items={data} comments={comments}  />} />
                    <Route  path='/userdetail/:id'
                            render={(props) => <UserDetail  {... props} items={data} comments={comments} />} />
                    <Route  path='/signup'
                            render={(props) => <SignInOrSignUp  {... props} isSignIn={false}/>} />
                    <Route  path='/signin'
                            render={(props) => <SignInOrSignUp  {... props} isSignIn={true}/>} />
                </Switch>

            </Container>

        )
    }

}