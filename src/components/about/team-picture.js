import React from 'react'
import Wrapper from '../wrapper'
import team from '../../static/team-picture.png'
import team2x from '../../static/team-picture@2x.png'

export default () => (
  <Wrapper nowrap>
    <img src={team} srcSet={`${team2x} 2x`} className="c-team-picture" />
  </Wrapper>
)
