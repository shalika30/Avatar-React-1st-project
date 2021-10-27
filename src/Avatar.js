import React, {Component} from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';

class Avatar extends Component{

    constructor(){
        super();
        this.state = {
            name : "Welcome to Avatar World"
        }
    }

    namechange(){
        this.setState({
            name : "Hello Avatars"
        })
    }
             render (){
            const avatarlistarray = [
                {
                    id : 1,
                    name : "Shalika",
                    work : "Software Engineer"
                },
                {
                    id : 2,
                    name : "Surbhi",
                    work : "Backend Engineer"
                },
                {
                    id : 3,
                    name : "Sinha",
                    work : "Frontend Engineer"
                },
                {
                    id : 4,
                    name : "Shal",
                    work : "Database Engineer"
                }
        
            ]
        
            const arrayavatarcard = avatarlistarray.map((avatarcard, i) => {
                return <Avatarlist key = {i} id = {avatarlistarray[i].name}
                                   name = {avatarlistarray[i].name}
                                   work = {avatarlistarray[i].work} />
                
        
            }
            )
            return( 
                <div className = "mainpage">
                    <h1>{this.state.name}</h1>
                    {arrayavatarcard}
                    <button onClick = {() => this.namechange()}>Subscribe</button>
                </div>
               )
            }
        }           

        
    
   

export default Avatar;