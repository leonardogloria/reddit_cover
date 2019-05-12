import * as React from 'react';
import {Link} from "react-router-dom";
import { Row, Col, Card,Button } from 'react-materialize';


export default class ComunityInfo extends React.Component<any,any>{
    state = {
        userCount: 0
    }
    componentDidMount () {
        fetch(' /api/v1/users/count' +
            '')
            .then(response => response.json())
            .then(response => this.setState({
                userCount: response.count,
                loading: false
            }))
            .catch(error => this.setState({
                loading: false,
                error: true
            }));
    }
    public render(){
        const {userCount} = this.state;
        return (
            <Card>
                <Row>
                    <Col m={6}>
                        r/CCT
                    </Col>
                    <Col m={6}>
                        {userCount} Users
                    </Col>
                </Row>
                <Row>
                    <Col m={12} s={12}>
                        <Button waves="light" style={{marginRight: '5px'}}>Create Post </Button>

                    </Col>
                </Row>


            </Card>
        )
    }

}