import React from 'react'
import Wrapper from '../wrapper'
import CaptionBar from '../caption'
import arrow from '../../static/arrow_blue.svg'
import bottom from '../../static/katie_resized.png'
import left from '../../static/train_resized.png'
import links from './articles-links.json'

export default () => (
  <Wrapper>
    <CaptionBar page="community" topic="articles" />
    <div className="c-articles-wall">
      <div className="c-articles-wall__left c-articles-wall__tile">
        <span className="c-articles-wall__text c-articles-wall__tile">
          <h4 className="c-articles-wall__headline">
            Tech Salaries in Germany
          </h4>
          <a href={links['tech-salaries-germany']}>
            Show <img src={arrow} />
          </a>
        </span>
      </div>
      <div className="c-articles-wall__right">
        <div className="c-articles-wall__top c-articles-wall__tile">
          <h4 className="c-articles-wall__headline">
            Tech Salaries in Amsterdam
          </h4>
          <a href={links['tech-salaries-amsterdam']}>
            Show <img src={arrow} />
          </a>
        </div>
        <div className="c-articles-wall__bottom c-articles-wall__tile">
          <h4 className="c-articles-wall__headline">
            Woman in
            <br />
            Tech Index
          </h4>
          <a href={links['woman-in-tech']}>Show</a>
        </div>
      </div>
    </div>
  </Wrapper>
)
