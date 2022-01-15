import {
  FaFacebookSquare,
  FaGithub,
  FaGoogle,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <footer className="bg-gradient text-center text-white">
        {/* <!-- Grid container --> */}
        <div className="container p-4">
          {/* <!-- Section: Social media --> */}
          <section className="mb-4">
            {/* <!-- Facebook --> */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="www.facebook.com"
              role="button"
            >
              <FaFacebookSquare />
            </a>

            {/* <!-- Twitter --> */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="/"
              role="button"
            >
              <FaTwitter />
            </a>

            {/* <!-- Google --> */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="/"
              role="button"
            >
              <FaGoogle />
            </a>

            {/* <!-- Instagram --> */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="/"
              role="button"
            >
              <FaInstagram />
            </a>

            {/* <!-- Linkedin --> */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="/"
              role="button"
            >
              <FaLinkedin />
            </a>

            {/* <!-- Github --> */}
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="/"
              role="button"
            >
              <FaGithub />
            </a>
          </section>
          {/* <!-- Section: Social media --> */}

          {/* <!-- Section: Form --> */}
          <section className="">
            <form action="">
              {/* <!--Grid row--> */}
              <div className="row d-flex justify-content-center">
                {/* <!--Grid column--> */}
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>
                {/* <!--Grid column--> */}

                {/* <!--Grid column--> */}
                <div className="col-md-5 col-12">
                  {/* <!-- Email input --> */}
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example21"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form5Example21">
                      Email address
                    </label>
                  </div>
                </div>
                {/* <!--Grid column--> */}

                {/* <!--Grid column--> */}
                <div className="col-auto">
                  {/* <!-- Submit button --> */}
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
                {/* <!--Grid column--> */}
              </div>
              {/* <!--Grid row--> */}
            </form>
          </section>
          {/* <!-- Section: Form --> */}

          {/* <!-- Section: Text --> */}
          <section className="mb-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti dicta,
              aliquam sequi voluptate quas.
            </p>
          </section>
          {/* <!-- Section: Text --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          {/* © 2020 Copyright: */}
          <a className="text-white" href="https://rickandmortyapi.com/">
            Rick And Morti &copy;
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      ;{/* <!-- Footer --> */}
    </>
  );
};
