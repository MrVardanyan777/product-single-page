import React from 'react';
import './news.css';
import Newslist from '../../components/newslist/Newslist';

const News = () => {
  return (
    <div className='product__news section__padding'>
        <div className='product__news-heading'>
            <h1>Contents Strategies</h1>
            <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
        </div>
        <div className='product__news-list'>
            <Newslist />
        </div>
    </div>
  )
}

export default News;