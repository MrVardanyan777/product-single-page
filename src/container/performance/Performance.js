import React from 'react';
import './performance.css';
import managImage from '../../assets/managment-img.png';
import FolderImage from '../../assets/folder.png';
import laptopImage from '../../assets/laptop.png';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const Performance = () => {
    return (
        <div className='product__performance section__padding'>
            <div className='product__performance-container'>
                <div className='product__performance-container_content'>
                    <h5 className='product__performance-content_topheading'>Effortless Validation for</h5>
                    <h2 className='product__performance-content_heading'>Management</h2>
                    <p className='product__performance-content_para'>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person. </p>
                    <h4 className='product__performance-content_second-heading'>Accessory makers</h4>
                    <p className='product__performance-content_para'>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
                    <h4 className='product__performance-content_second-heading'>Alterationists</h4>
                    <p className='product__performance-content_para'>If you are looking for a new way to promote your business that wont cost you more money.</p>
                </div>
                <div className='product__performance-container_image'>
                    <img src={managImage} alt='management' />
                </div>
            </div>
            <div className='product__performance-container'>
                <div className='product__performance-container_image product__performance-container_image-order'>
                    <img src={laptopImage} alt='management' />
                </div>
                <div className='product__performance-container_content'>
                    <h5 className='product__performance-content_topheading'>Easier decision making for</h5>
                    <h2 className='product__performance-content_heading'>Customer Support</h2>
                    <p className='product__performance-content_para'>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person. </p>
                    <div className='product__performance__contnet-dots'>
                        <div>
                            <CheckBoxIcon fontSize='large' sx={{ marginRight: '0.7rem', color: '#FF9900' }} />
                            <p className='product__performance-content_para'>Never worry about overpaying for your energy again. </p>
                        </div>
                        <div>
                            <CheckBoxIcon fontSize='large' sx={{ marginRight: '0.7rem', color: '#F03E3D' }}  />
                            <p className='product__performance-content_para'>We will only switch you to energy companies that we trust and will treat you right. </p>
                        </div>
                        <div>
                            <CheckBoxIcon fontSize='large' sx={{ marginRight: '0.7rem', color: '#4D8DFF' }}  />
                            <p className='product__performance-content_para'>We track the markets daily and know where the savings are. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product__performance-container'>
                <div className='product__performance-container_content'>
                    <h5 className='product__performance-content_topheading'>Optimisation for</h5>
                    <h2 className='product__performance-content_heading'>Collaborative</h2>
                    <p className='product__performance-content_para'>Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. </p>
                    <h4 className='product__performance-content_second-heading'>Accessory makers</h4>
                    <p className='product__performance-content_para'>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
                    <h4 className='product__performance-content_second-heading'>Alterationists</h4>
                    <p className='product__performance-content_para'>If you are looking for a new way to promote your business that wont cost you more money.</p>
                </div>
                <div className='product__performance-container_image'>
                    <img src={FolderImage} alt='management' />
                </div>
            </div>
        </div>
    )
}

export default Performance;