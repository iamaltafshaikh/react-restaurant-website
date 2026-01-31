import MenuCard from "../components/MenuCard";
import images from "../assets/images";

function Menu() {
  const menuItems = [
    {
      id: 1,
      name: "Cheese Pizza",
      price: "₹299",
      description: "Loaded with mozzarella cheese and fresh toppings",
      image: images.pizza
    },
    {
      id: 2,
      name: "Veg Burger",
      price: "₹199",
      description: "Crispy patty with fresh vegetables and sauce",
      image: images.burger
    },
    {
      id: 3,
      name: "White Sauce Pasta",
      price: "₹249",
      description: "Creamy Italian pasta with herbs",
      image: images.pasta
    },
    {
      id: 4,
      name: "French Fries",
      price: "₹149",
      description: "Golden and crispy fries",
      image: images.fries
    }
  ];

  return (
    <div>
      <h1>Our Menu 🍽️</h1>

      <div className="menu-container">
        {menuItems.map((item) => (
          <MenuCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
