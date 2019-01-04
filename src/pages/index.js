import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Timer from '../components/timer'

const IndexPage = () => (
  <Layout>
    <SEO title="#FireBruceAllen" keywords={[`Redskins`, `Bruce`, `Allen`, `Football`, `Washington`]} />
    <h1>The Official Bruce Allen Tracker of the Washington Redskins</h1>
    <p>Is Bruce Allen still employed by the Washington Redskins?</p>
    <p>Bruce has worked for the Washington Redskins for <Timer /> days.</p>
    <button>Let's See!</button>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>      
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
