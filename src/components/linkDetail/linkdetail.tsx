import * as React from "react";
import { Row, Col, Card, TextInput, Button } from 'react-materialize';
import {Link
    ,match}from "react-router-dom";
import { Switch, Route, Router , RouteComponentProps } from 'react-router-dom'
import Post from "../linkentry/linkentry";
import {PostItem} from "../../model/post";
import items from "../links/items";
import Comment from "../../model/comment"
import CommentItem from "../comments/comment";
import {get} from "https";
export const data = [{id:1,title: "Google",url:"http://www.google.com"},{id:2,title: "Facebook", url:"http://facebook.com"}]


interface HomeRouterProps {
    id: string;   // This one is coming from the router
  }
interface HomeProps extends RouteComponentProps<HomeRouterProps> {
    // Add your regular properties here
    items: any;
    comments: any;
  }
interface IState{
    posts: PostItem[];
}
export default class LinkDetail extends React.Component<HomeProps,IState>{
    public readonly state: Readonly<IState> = {
        posts: [new PostItem("1", "Google","http://www.google.com",
            [new Comment('1','Is facebook a good thing?'),new Comment('2','Is Google a good thing?')] ),
            new PostItem("2", "Facebook","http://www.facebook.com",
                [new Comment('1','Is facebook a good thing?'),new Comment('2','Is Google a good thing?')] )
        ]
    }
    constructor(props: HomeProps) {
        super(props);

    }
    handleClick(event: MouseEvent) {
        event.preventDefault();

    }

    public render(){
        let id  = this.props.match.params.id+ - 1
        return (
            <div>

                                <Card title={ this.props.items[1]['title']} actions={["Like", " Dislike"]} >
                                    <div>
                                        <p><b><h5></h5></b></p>

                                    </div>

                                </Card>

                {this.props.comments.map(comment =>
                    <CommentItem id={comment.id} comment={comment.comment} date={comment.date}></CommentItem>

                )}


                <TextInput/><Button onClick={this.handleClick} waves="light" style={{marginRight: '5px'}}>
                Comment
            </Button>





            </div>

            )
        }

    }