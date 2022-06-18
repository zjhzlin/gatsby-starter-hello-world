import React from "react"
import {Link} from "gatsby"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllRecipes from "../components/AllRecipes"

export default function Home() {
  return (
  <Layout>
    <main className="page">
      <header className="hero">
        <StaticImage
        src="../assets/images/main.jpeg"
        alt="eggs"
        className="hero-img"
        placeholder="tracedSVG"
        layout="fullWidth"
        ></StaticImage>
        <div className="hero-container">
          <div className="hero-text">
            <h1>AM PM</h1>
            <h4>Symstem for Portfolio Managers</h4>
          </div>
        </div>
      </header>
    </main>
    <AllRecipes />
  </Layout>
  )
}
  
