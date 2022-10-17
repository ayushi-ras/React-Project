import CardGrid from "../card/card";
import Footer from "../Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
const Home = () => {
  return (
    <>
      <section>
        <div className="header">
          <div className="box">
            <div className="text">
              <h4>Wide Options of Choice</h4>
              <h1>Delicious Recipes</h1>
              <h3>Order Tasty And Fresh Food <span>ANYTIME!!</span></h3>
              <h2>Fastest Delivery And Easy Pickup</h2><br/>
              <button className="btn1">Get Our Menu</button>
              <button className="btn1">Book Your Table</button><br></br>
            </div>
          </div>
        </div>
      </section>
      <div>
        <CardGrid/>
      </div>

      <div>
        <Footer/>
      </div>
    
     


    </>
  );
};

export default Home;