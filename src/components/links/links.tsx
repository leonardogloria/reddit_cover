import * as React from "react";
import { Row, Col, Card } from 'react-materialize';
import Post from "../linkentry/linkentry";
import ComunityInfo from "../comunity/comunity-info";

interface Props{
    items: any;
}
export default class Links extends React.Component<any,any>{
    public render(){
        return (
<div>
                    {this.props.items.map(post =>
                        <Post id={post['id']} title={post['title']} url={post['url']}/>
                    )}
</div>


        )
    }

}