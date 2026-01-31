function MenuCard({ image, name, price, description }) {
  return (
    <div className="menu-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <h4>{price}</h4>

      <button className="order-btn">Order Now</button>
    </div>
  );
}

export default MenuCard;
