import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import TechnologyTriangle from './TechnologyTriangle'
import { HASH } from '../../constants/url'
import { Element }  from'react-scroll'
import { PAD_WIDTH } from '../../constants/deviceTypes'

const contents = [{
  title : '人工智慧',
  text  : '透過多層級機器學習(Machine Learning)演算法，持續將內在、外在因素資訊進行深度運算，做出準確性的預測',
}, {
  title : '遊戲思維',
  text  : '以創造商業價值為目標，透過數據分析、深入了解使用者， 導入符合企業目標的遊戲思維專案',
}, {
  title : '跨端整合',
  text  : '透過跨界整合開發最佳化使用者體驗，以創造個別化互動為目標。藉由數據分析、追蹤調整模組，將過程數據化、成果可視化',
}]

const Technology = () => {
  return (
    <section id={ HASH.TECHNOLOGY }>
      <Element name={ HASH.TECHNOLOGY } className="scroll-point"/>
      <div className="section-title">
        <h1>我們的專業來自對技術的堅持</h1>
      </div>

      <MediaQuery minWidth={ PAD_WIDTH + 1 }>
        <TechnologyTriangle contents={ contents } />
      </MediaQuery>

      <MediaQuery maxWidth={ PAD_WIDTH }>
        <div className="container">
          <ul>
            {
              contents.map((content) => (
                <li key= { content.title }>
                  <div className="circle">{ content.title }</div>
                  <p>{ content.text }</p>
                </li>
              ))
            }
          </ul>
        </div>
      </MediaQuery>
    </section>
  )
}

export default Technology
