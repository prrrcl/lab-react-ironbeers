import React from 'react'
import {Link} from 'react-router-dom'
export default function Home() {
  return (
    <main>
      <Link className="home-link" to="/all">
      <section className="beer-section">
        <div>
          <h2>All beers</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque iusto itaque consectetur vero praesentium fuga perferendis nostrum distinctio dolorem accusantium alias voluptates, dolorum minus rem assumenda quibusdam odit laborum cumque.</p>
        </div>
      </section>
      </Link>
      <Link className="home-link" to="/random">
      <section className="beer-section">
        <div>
          <h2>Random beer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia harum quas blanditiis, qui asperiores temporibus officia quaerat ea doloribus reiciendis fugit veniam, id non cupiditate fugiat quam fuga rerum quidem?</p>
        </div>
      </section>
      </Link>
      <section className="beer-section">
        <div>
          <h2>New beer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolore magnam quas, tenetur, aliquam provident recusandae debitis veniam autem culpa repudiandae minima eos labore? Animi dignissimos temporibus aperiam distinctio. Enim.</p>
        </div>
      </section>
    </main>
  )
}
