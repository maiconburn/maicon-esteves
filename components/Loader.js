import React from 'react'
import css from '../src/css/components/Loader.module.scss'


function Loader() {
  return(
    <div className={css.loader}>
      <div className={css.loader__bar}></div>
      <div className={css.loader__bar}></div>
      <div className={css.loader__bar}></div>
      <div className={css.loader__bar}></div>
      <div className={css.loader__bar}></div>
      <div className={css.loader__ball}></div>
    </div>
  )

}

export default Loader

