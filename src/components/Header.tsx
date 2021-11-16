import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Link to="/">ShowTable</Link> <br /> <Link to="/adduser">AddUser</Link>
    </nav>
    //   <nav>
    //     <ul>
    //       <Link to="/getusers">
    //         <li>ShowUser</li>
    //       </Link>
    //       <Link to="/adduser">
    //         <li>AddUser</li>
    //       </Link>
    //     </ul>
    //   </nav>
  );
};
