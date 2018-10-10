import React from 'react'
import Wrapper from '../wrapper'
import team from '../../static/team-picture.png'

export default () => (
  <Wrapper nowrap>
    <img src={team} className="c-team-picture" />
  </Wrapper>
)
