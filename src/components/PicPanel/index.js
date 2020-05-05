import React, { Fragment } from 'react';
import AutoPic from '../../utils/imgs/auto.jpg';
import './style.scss';

export const PicPanel = () => {
  return (
    <Fragment>
      <div className="pic-panel-wrapper">
        <div className="pic-panel-block">
          <div className="pic-panel-left">
            <h1>The easy way to compare and buy auto insurance</h1>
            <a
              href="https://chenxiicheng.github.io/Management-Platform/#/login"
              className="button-link"
            >
              GET QUOTES
            </a>
          </div>
          <div className="pic-panel-right">
            <div className="pic-panel-banner-before"></div>
            <img src={AutoPic} alt="auto pic" />
            <div className="pic-panel-banner"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
