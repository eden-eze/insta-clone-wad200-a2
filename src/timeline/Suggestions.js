import React from 'react';
import "./Suggestions.css";
import { Avatar } from '@mui/material';


function Suggestions() {
  return <div className="suggestions">
    <div className="suggestions__title">Suggestions for you</div>
    <div className="suggestions__usernames">


        <div className="suggestion__username">
            <div className="usename__left">
                <span className="avatar">
                    <Avatar>A</Avatar>
                </span>
            </div>
            <div className="username__info">
                <span className="username">ahoy_sadie</span>
                <span className="relation">New to Instagram</span>
            </div>
            <button className="follow__button">Follow</button>
        </div>

        <div className="suggestion__username">
            <div className="usename__left">
                <span className="avatar">
                    <Avatar>E</Avatar>
                </span>
            </div>
            <div className="username__info">
                <span className="username">elia_aziz</span>
                <span className="relation">New to Instagram</span>
            </div>
            <button className="follow__button">Follow</button>
        </div>

        <div className="suggestion__username">
            <div className="usename__left">
                <span className="avatar">
                    <Avatar>I</Avatar>
                </span>
            </div>
            <div className="username__info">
                <span className="username">ignatius_pev</span>
                <span className="relation">New to Instagram</span>
            </div>
            <button className="follow__button">Follow</button>
        </div>

        <div className="suggestion__username">
            <div className="usename__left">
                <span className="avatar">
                    <Avatar>O</Avatar>
                </span>
            </div>
            <div className="username__info">
                <span className="username">Ola_ola</span>
                <span className="relation">New to Instagram</span>
            </div>
            <button className="follow__button">Follow</button>
        </div>

        <div className="suggestion__username">
            <div className="usename__left">
                <span className="avatar">
                    <Avatar>U</Avatar>
                </span>
            </div>
            <div className="username__info">
                <span className="username">umad_bro</span>
                <span className="relation">New to Instagram</span>
            </div>
            <button className="follow__button">Follow</button>
        </div>
    </div>
  </div>

}

export default Suggestions
