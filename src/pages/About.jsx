function About() {
  return (
    <main className="container">
      <section
        className="container p-4 rounded-3"
        style={{ backgroundColor: "#e9ecef" }}
      >
        <div className="pb-2 border-bottom border-secondary border-opacity-10">
          <h1 className="pt-3 fw-light display-1">About Us</h1>
          <p className="fw-lighter fs-5">
            Welcome to Restaurant Management, your go-to platform for
            efficiently managing and exploring a curated list of restaurants.
            Whether you&apos;re a food enthusiast or a restaurant owner, our
            application provides a seamless experience to discover, add, update,
            and explore various restaurants with ease.
          </p>
        </div>

        <div>
          <h2 className="pt-3 fs-2">Our Mission</h2>
          <p className="pt-2 fs-5 fw-lighter">
            At Restaurant Management, our mission is to simplify the process of
            restaurant management and enhance the dining experience for both
            customers and restaurant owners. We strive to provide a
            user-friendly platform that brings together food lovers and
            establishments in a harmonious digital environment.
          </p>
        </div>
      </section>

      <section className="container py-3">
        <h2 className="fs-3 p-3 ">Contact Us</h2>
        <p className="px-3">
          If you have any questions, suggestions, or feedback, feel free to
          reach out to us:{" "}
        </p>
        <ul style={{ listStyle: "disc" }} className="ms-3">
          <li>
            Email:
            <a
              className="ms-2 text-primary link-offset-2 link-underline link-underline-opacity-0"
              href="mailto:info@restaurantmanagement.com"
            >
              info@restaurantmanagement.com
            </a>
          </li>
          <li>Phone: (123) 456-7890</li>
        </ul>
      </section>
    </main>
  );
}
export default About;
