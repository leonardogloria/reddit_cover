import * as React from "react";
import { Row, Col, Card } from 'react-materialize';
import {Link
    ,match}from "react-router-dom";


interface Props{
    id: number,
    title: string;
    url: string;
}
export default class Post extends React.Component<any,any>{
    public render(){
        return (
            <Card title={this.props.title} actions={["Up", " Down"]} >
                <div>
                    <p><b><h5></h5></b></p>
                    <p><h6>

                      <Link to={"/linkdetail/" + this.props.id}>  {this.props.url}</Link>
                    </h6></p>
                    <p><h6>3 Comments</h6></p>
                    <p><h6>12 Minutes ago by teste@teste.com</h6></p>

                </div>
            </Card>

        )
    }

}