import React from 'react'
import Layout from "../components/Layout"
import { graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'

const Contact = ({data}) => {
    const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
 
      <main className = "page">
          <section className='contact-page'>
            <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
            I'm baby hella edison bulb wolf kale chips quinoa meggings taiyaki ethical DSA. Direct trade raw denim humblebrag, live-edge 90's asymmetrical occupy meh mustache kombucha fam try-hard venmo. Put a bird on it fingerstache twee, gluten-free chia skateboard williamsburg edison bulb gentrify offal salvia listicle. Shoreditch green juice tote bag raw denim messenger bag, before they sold out wolf poke helvetica etsy synth vegan four dollar toast. Vape green juice +1 kombucha trust fund selfies, af yr forage air plant lo-fi microdosing. Iceland heirloom la croix hell of shaman adaptogen.
            </p>
            <p>Cardigan prism bicycle rights put a bird on it deep v.</p>
            <p>
              Hashtag swag health goth air plant, raclette listicle fingerstache
              cold-pressed fanny pack bicycle rights cardigan poke.
            </p>
            </article>
            <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
          </section>
          <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes = {recipes} />
        </section>
        
      </main>
      
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default Contact