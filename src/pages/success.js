import React from "react"
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideFooter from '../components/SideFooter';

const Success = () => (
  <Layout>
  <div className="content">
    <h2>Thanks for your message!</h2>
    <p>The secretary will be in touch shortly.</p>
    </div>
  <section>
        <SideFooter />
      </section>
      <Footer />
  </Layout>
)

export default Success
