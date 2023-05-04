import React from 'react';
import './review.css';
import { Reviewlist } from '../../components';

const Review = () => {
    return (
        <div className='product__review section__padding'>
            <div className='product__review-heading'>
                <h1>What Clients Say</h1>
                <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <div className='product__review-main'>
                <Reviewlist />
            </div>
        </div>
    )
}

export default Review;