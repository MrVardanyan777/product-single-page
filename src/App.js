import React from 'react';
import './App.css';
import { Navbar } from './components';
import { CTA, Easyprocess, Features, Footer, Header, News, Performance, Pricing, Review } from './container';

const App = () => {
  return (
    <>
        <Navbar />
        <Header />
        <Features />
        <Performance />
        <Easyprocess />
        <News />
        <Pricing />
        <Review />
        <CTA />
        <Footer />
    </>
  )
}

export default App;