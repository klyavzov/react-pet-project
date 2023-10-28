import React, {Suspense} from 'react';
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import Loading from './Components/Loading';

const AppRoot = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <div className='suspense-loader'>
          <Loading/>
        </div>}>
        <Routes>
          <Route path='/' element={<h1>hello</h1>}/>
          <Route path='*' element={<Navigate to={{pathname: '/'}}/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoot;
