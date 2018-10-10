import React from 'react';
import Layout from '../components/layout';
import TextImageWrapper from '../components/text-image-wrapper';
import CaptionBar from '../components/caption';
import DoubleTextBox from '../components/about/double-text-box';
import header from '../static/about.header.png';

import '../styles/main.scss';

export default () => (
  <Layout smallerHeader >
    <TextImageWrapper img={ header }>
      <h1>Life at<br /><b>Honeypot</b></h1>
    </TextImageWrapper>

    <DoubleTextBox page="about" />

    <CaptionBar page="about" topic="team" />
  </Layout>
)
