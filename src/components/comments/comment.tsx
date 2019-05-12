import * as React from 'react';
import {Link} from "react-router-dom";
import { Row, Col, Card } from 'react-materialize';


interface Props{
    id: String;
    comment: String;
    date: Date;
}
export default class CommentItem extends React.Component<any,any>{
    public render(){
        return (
            <Card>
                <Row>
                    <Col s={12}>
                        <p>{new Date().getTime() - this.props.date.getTime()  } Seconds Ago</p>
                    </Col>
                </Row>
                <Row>
                    <Col s={12}>
                        <p>{this.props.comment}</p>
                    </Col>
                </Row>
            </Card>


        )
    }

}