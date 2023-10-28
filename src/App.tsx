import React, {Suspense} from 'react';
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import Loading from './components/Loading';
import Header from './components/Header';

const AppRoot = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Suspense fallback={
        <div className='suspense-loader'>
          <Loading/>
        </div>}>
        <Routes>
          <Route path='/' element={<h1>hello</h1>}/>
          <Route path='/catalog' element={<h1>catalog</h1>}/>
          <Route path='/programs' element={<h1>programs</h1>}/>
          <Route path='*' element={<Navigate to={{pathname: '/'}}/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoot;
