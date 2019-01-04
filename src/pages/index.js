import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Timer from '../components/timer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-solid-svg-icons'
import { faRedditAlien } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const IndexPage = () => (
  <Layout>
    <SEO title="#FireBruceAllen" keywords={[`Redskins`, `Bruce`, `Allen`, `Football`, `Washington`]} />
    <h1>The Official Bruce Allen Tracker of the Washington Redskins</h1>
    <p>Is Bruce Allen still employed by the Washington Redskins?</p>    
    <button>Let's See!</button>
    <Timer />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
