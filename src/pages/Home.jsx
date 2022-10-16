import { useEffect, useState } from "react";
import axios from "axios";

const urlProduct = "http://localhost:1337/api/products/";

const urlUser = "http://localhost:1337/api/users/";

const urlOAuthOne = "http://localhost:1337/api/auth/local/";

const urlOAuthTwo = "http://localhost:1337/api/auth/local/register/";

const Home = () => {
  const [jwt, setJWT] = useState("");
  const [username, setUsername] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // fetch all products
    axios
      .get(urlProduct)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });

    // fetch authentication status
    const token = localStorage.getItem("token");
    const myUsername = localStorage.getItem("username");
    const isAuthenticated = localStorage.getItem("authenticated");

    setJWT(token);
    setUsername(myUsername);
    setAuthenticated(isAuthenticated);
  }, []);

  const container = {
    border: "1px solid black",
    borderRadius: "0.5rem",
    padding: "3rem",
    width: "50%",
    margin: "5rem auto",
  };

  const header = {
    display: "flex",
    alignItems: "center",
    justifyContent: "evenly",
    padding: "3rem",
    margin: "0 4rem",
    flexWrap: "wrap",
  };

  const fullWidth = {
    width: "100%",
  };

  return (
    <div>
      <div style={header}>
        <div style={fullWidth}>
          <p>Token: {jwt}</p>
        </div>
        <div style={fullWidth}>
          <p>username: {username}</p>
        </div>
        <div style={fullWidth}>
          <p>is authenticated: {authenticated}</p>
        </div>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            const data = {
              username: e.target.username.value,
              email: e.target.email.value,
              password: e.target.password.value,
            };

            axios
              .post(urlUser, data)
              .then((response) => {
                console.log(response.data);
              })
              .catch((error) => {
                console.log(error.message);
              });
          }}
          style={container}
        >
          <h1>user creation form</h1>
          <hr />
          <div>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" />
          </div>
          <br />
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" />
          </div>
          <br />
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" />
          </div>
          <br />
          <button type="submit">Sub meat!</button>
        </form>
      </div>

      {/* divider */}

      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            const data = {
              identifier: e.target.email.value,
              password: e.target.password.value,
            };

            axios
              .post(urlOAuthOne, data)
              .then((response) => {
                console.log(response.data);

                localStorage.setItem("token", response.data.jwt);
                localStorage.setItem("username", response.data.user.username);
                localStorage.setItem("email", response.data.user.email);
                localStorage.setItem("authenticated", true);
              })
              .catch((error) => {
                console.log(error.message);
              });
          }}
          style={container}
        >
          <h1>user authentication form {"(using identifier)"}</h1>
          <hr />
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" />
          </div>
          <br />
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" />
          </div>
          <br />
          <button type="submit">Sub meat!</button>
        </form>
      </div>

      {/* divider */}

      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            const data = {
              username: e.target.username.value,
              email: e.target.email.value,
              password: e.target.password.value,
            };

            axios
              .post(urlOAuthTwo, data)
              .then((response) => {
                console.log(response.data);
              })
              .catch((error) => {
                console.log(error.message);
              });
          }}
          style={container}
        >
          <h1>user authentication form {"(using username)"}</h1>
          <hr />
          <div>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" />
          </div>
          <br />
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" />
          </div>
          <br />
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" />
          </div>
          <br />
          <button type="submit">Sub meat!</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
