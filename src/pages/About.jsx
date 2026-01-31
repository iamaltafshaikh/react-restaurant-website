function About() {
  return (
    <div className="about-page">
      <h1>About Foodie 🍽️</h1>

      <p className="about-intro">
        Foodie is a modern restaurant focused on delivering delicious,
        fresh, and affordable meals to everyone.
      </p>

      <div className="about-section">
        <h2>Our Story</h2>
        <p>
          Founded in 2015, Foodie started with a simple idea —
          serve quality food made from fresh ingredients.
          Today, we proudly serve thousands of happy customers.
        </p>
      </div>

      <div className="about-features">
        <div className="about-card">
          <h3>🍅 Fresh Ingredients</h3>
          <p>We use only fresh and high-quality ingredients.</p>
        </div>

        <div className="about-card">
          <h3>👨‍🍳 Expert Chefs</h3>
          <p>Our chefs craft each dish with passion.</p>
        </div>

        <div className="about-card">
          <h3>😊 Happy Customers</h3>
          <p>Customer satisfaction is our top priority.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
