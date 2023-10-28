import React, {FC} from 'react';
import style from './css/loading.module.css';

const Loading:FC = () => {
  return (
    <div className={style.spinner}/>
  );
};

export default Loading;