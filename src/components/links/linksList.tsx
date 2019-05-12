import * as React from "react";
import { Row, Col, Card } from 'react-materialize';
import Post from "../linkentry/linkentry";
import ComunityInfo from "../comunity/comunity-info";
import Links from "./links";

interface Props{
    items: any;
}
export default class LinksList extends React.Component<any,any>{
    public render(){
        return (
            <Row>

                <Col m={8} s={12}>

                    <Links items={this.props.items}></Links>

                </Col>
                <Col m={4} s={12}>
                    <ComunityInfo />
                </Col>
            </Row>

        )
    }

}