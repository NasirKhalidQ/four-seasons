import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-seasons-gray sm:px-12 pt-6 pb-2 text-gray-500 border-t-2 border-gray-300">
      <div className="grid lg:grid-cols-5 mx-4 lg:mx-0">
        <div className="lg:inline-flex lg:col-start-1 lg:col-end-3 mt-4">
          <Link to="/">
            <img
              className="w-1/3 lg:w-auto mb-5"
              src="./imgs/logo.svg"
              alt="logo"
            />
          </Link>
          <p className="lg:ml-5">
            Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="lg:col-start-5 lg:col-end-6">
          <h2 className="text-lg text-seasons-primary mb-2 mt-4 lg:mt-0">
            Contact Info
          </h2>
          <div className="inline-flex">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                fill="#F9AD81"
              />
            </svg>
            <p className="mb-2 ml-2">1525 Boring Lane, Los Angeles, CA</p>
          </div>
          <div className="inline-flex">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                fill="#F9AD81"
              />
            </svg>
            <p className="mb-2 ml-2">+1 (603)535-4592</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
