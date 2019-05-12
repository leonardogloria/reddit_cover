import * as React from 'react';
import {Link} from "react-router-dom";

import { Row, Col, Card } from 'react-materialize';
import avatar from './rick.png'
interface Props{
    id: String;
    picUrl: String;
    name: String;
    bio: string
}
export default class Userprofile extends React.Component<any,any>{
    public render(){
        return (
            <Card>
                <Row>
                    <Col s={8} m={8} offset="s2 m2">
                        <img src={avatar} className="circle responsive-img" />
                    </Col>
                </Row>
                <Row className="center-align">
                    <h5 >{this.props.name}</h5>
                    <p className="grey darken-2 white-text">{this.props.bio}</p>
                </Row>
            </Card>

        )
    }

}