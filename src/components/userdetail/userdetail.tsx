import * as React from 'react';
import {Link} from "react-router-dom";
import { Row, Col, Card } from 'react-materialize';
import Userprofile from "./userprofile";
import Links from "../links/links"
import CommentItem from "../comments/comment";


interface Props{
    items: any;
    comments: any;
}
export default class UserDetail extends React.Component<any,any>{
    public render(){
        return (

    <Row>
        <Col m={3} s={12}>
            <Userprofile name="Rick Sanchez" bio="Mastermind"></Userprofile>
        </Col>
        <Col m={8} s={12} >
           <Links items={this.props.items}></Links>
        </Col>
        {this.props.comments.map(comment =>
                <Col m={8} s={7} >

                <CommentItem id={comment['id']} comment={comment['comment']} date={comment["date"]} />
                </Col>
        )}

    </Row>
        )
    }

}