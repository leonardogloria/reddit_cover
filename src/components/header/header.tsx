import * as React from 'react';
import {Link} from "react-router-dom";

export default class Header extends React.Component<any,any>{
    constructor(props){
        super(props)
        this.state = {
            looged: "Teste"

        }
        this.updateText = this.updateText.bind(this)
    }
    updateText(text) {
        this.setState({text})
    }
    public  logged(){

    }
    public notLogged(){
        return (
            <div>
            <li><Link to="/signup">Sign up</Link></li>
            <li><Link to="/signin">Sign in</Link></li>
            </div>
        )
    }



    public render(){
        if(this.state.logged){
            return(
                <nav>
                    <div className="nav-wrapper">
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/userdetail/1">User Profile</Link></li>
                        </ul>
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                            <li><Link to="/">Links</Link></li>

                        </ul>
                    </div>
                </nav>
            )
        }else {


            return (
                <nav>
                    <div className="nav-wrapper">
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <div>
                                <li><Link to="/signup">Sign up</Link></li>
                                <li><Link to="/signin">Sign in</Link></li>
                            </div>

                        </ul>
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                            <li><Link to="/">Links</Link></li>
                            <li><Link to="/userdetail/1">My profile</Link></li>


                        </ul>
                    </div>
                </nav>

            )
        }
    }

}