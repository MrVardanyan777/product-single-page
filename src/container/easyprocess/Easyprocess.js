import React from 'react';
import './easyprocess.css';
import { Opinioncard } from '../../components';
import data from '../../db/opininoncarddata';



const Easyprocess = () => {
    return (
        <div className='product__easyprocess section__padding'>
            <div className='product__easyprocess-heading'>
                <h1>Quick & Easy Process</h1>
                <p>Do you require some help for your project: Conception workshop, prototyping, marketing strategy, landing page, Ux/UI?</p>
            </div>
            <div className='product__easyprocess-opinions'>
                <Opinioncard opinioncardImage={data[0].img} opinioncardText={data[0].text} />

                <Opinioncard opinioncardImage={data[1].img} opinioncardText={data[1].text} />

                <Opinioncard opinioncardImage={data[2].img} opinioncardText={data[2].text} />

        
                <Opinioncard opinioncardImage={data[3].img} opinioncardText={data[3].text} />
        </div>
        </div>
    )
}

export default Easyprocess;