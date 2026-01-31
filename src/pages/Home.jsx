import { useNavigate } from "react-router-dom";
import heroimage from "../assets/hero.png";
function Home() {
  const navigate=useNavigate();
  return (
    <div>
      <div className="hero">
        <div className="hero-text">
          <h1>Welcome to Foodie!</h1>
          <p>Delicious Food, Fresh Ingredients, Fast Delivery
            Experience the taste you'll Love.
          </p>
          <button className="hero-btn" onClick={()=>navigate("/menu")}>View Menu</button>
        </div>
        <div className="hero-image">
          <img src={heroimage} alt="Delicious Food" />
        </div>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>🍔 Fresh Food</h3>
          <p>Prepared daily with high-quality ingredients</p>
        </div>
        <div className="feature-card">
          <h3>🚚 Fast Delivery</h3>
          <p>Quick and reliable doorstep delivery.</p>
        </div>
        <div className="feature-card">
          <h3>⭐ Best Quality</h3>
          <p>Trusted by thousands of happy customers.</p>
        </div>
      </div>  
    </div>
  );
}

export default Home;
