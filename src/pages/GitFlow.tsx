import { NavLink } from "react-router-dom";

const GitFlow = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <NavLink to="/" className="mb-12">
        {"<<"} Home
      </NavLink>

      <h1>Hello, I am Git flow!</h1>
      <p>I am here {"))"}</p>
      <p>I am test3 {"бе-бе-бе"}</p>
      <p>I am test4 {"юхууу!"}</p>
    </section>
  );
};
export default GitFlow;
