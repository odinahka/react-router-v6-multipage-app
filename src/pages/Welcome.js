import { Link, Outlet} from "react-router-dom";

const Welcome = () => {
  return(  <section className="centered">
    <h1>Welcome Page</h1>
    <Link to = "new-user">New User</Link>
    <Outlet/>
  </section>)
};

export default Welcome;
