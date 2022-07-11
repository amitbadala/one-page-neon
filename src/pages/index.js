import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Featured, Projects, Contact } from '@components';
import ProgressBar from 'react-scroll-progress-bar';
import Helmet from 'react-helmet';
const StyledMainContainer = styled.main`
  counter-reset: section;
`;

<Helmet>
<html lang="en" />
<title>Portfolio | Parth Desai</title>
<meta name="google-site-verification" content="_Ba0lKk4Dl9XMvABJ9gZEtoMPITT5Vr5TGx2M-34Z_I" />
</Helmet>

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <ProgressBar bgcolor="#64ffda" />
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      <Jobs />
      <Featured />
      <Projects />
      <Contact />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
