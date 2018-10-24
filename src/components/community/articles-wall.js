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
          <a
            className="text-link text-link--blue text-link--arrow"
            target="_blank"
            rel="noopener
            noreferrer"
            href={links['tech-salaries-germany']}
          >
            Show
          </a>
        </span>
      </div>
      <div className="c-articles-wall__right">
        <div className="c-articles-wall__top c-articles-wall__tile">
          <h4 className="c-articles-wall__headline">
            Tech Salaries in Amsterdam
          </h4>
          <a
            className="text-link text-link--blue"
            target="_blank"
            rel="noopener
            noreferrer"
            href={links['tech-salaries-amsterdam']}
          >
            Show
          </a>
        </div>
        <div className="c-articles-wall__bottom c-articles-wall__tile">
          <h4 className="c-articles-wall__headline">
            Women in
            <br />
            Tech Index
          </h4>
          <a
            target="_blank"
            rel="noopener
            noreferrer"
            href={links['woman-in-tech']}
          >
            Show
          </a>
        </div>
      </div>
    </div>
  </Wrapper>
)
