import Card from "../components/card";
import Header from "../components/header";

function Home() {
  return (
    <main>
      <Header />
      {/* Dishes */}
      <section className="container py-3">
        <h2 className="fs-1 p-3">Menu Management</h2>
        <div className="container">
          <div className="row">
            <div className="col">
              <Card
                title="Special Dish 1"
                description="Delicious description of the dish. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                imgText={"Special Dish 1"}
              />
            </div>
            <div className="col">
              <Card
                title="Special Dish 2"
                imgText={"Special Dish 2"}
                description="Another tempting dish description. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
          </div>
        </div>
      </section>
      {/* Orders */}
      <section className="container py-3">
        <h2 className="fs-1 p-3">Order Tracking</h2>
        <div className="container ">
          <div className="row">
            <div className="col">
              <Card
                title="Order #1"
                description="Details and status of the first order. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                imgText={"Special Order 1"}
              />
            </div>
            <div className="col">
              <Card
                title="Order #2"
                imgText={"Special Order 2"}
                description="Another tempting dish description. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container py-3">
        <h2 className="fs-1 p-3 ">About BistroPal</h2>
        <p className="px-3">
          Discover the story behind BistroPal and how we strive to revolutionize
          restaurant management for businesses of all sizes.
        </p>
      </section>
    </main>
  );
}
export default Home;
