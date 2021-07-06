import React from 'react'
import Header from '../Header/Header'
import './NoMatch.scss'
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <div className='no-match'>
            <Header/>
            <div className="no-match-main">
                <h2>Invalid Video Call name</h2>
                <div className='action-btn'>
                    <Link className='btn' to='/'>
                    Return to home screen
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default NoMatch;
