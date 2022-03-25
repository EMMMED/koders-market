import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../lib/api";

const LoginForm = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [token, setToken] = useState();

  const newUser = (event) => {
    const value = event.target.value;
    const property = event.target.name;
    setUser({ ...user, [property]: value });
    console.log(user);
  };

  const createUser = async () => {
    let result = await api.login(user)
    setToken(result.name)
    localStorage.setItem('token',result.name)
    navigate("/")
    
  }

  return (
    <form>
      <div className="form-outline mb-4">
        <input
          type="email"
          id="form2Example1"
          className="form-control"
          name="email"
          onChange={newUser}
        />
        <label className="form-label" for="form2Example1">
          Email address
        </label>
      </div>

      <div className="form-outline mb-4">
        <input
          type="text"
          id="form2Example2"
          className="form-control"
          name="name"
          onChange={newUser}
        />
        <label className="form-label" for="form2Example2">
          Name
        </label>
      </div>

      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="form2Example31"
              checked
            />
            <label className="form-check-label" for="form2Example31">
              {" "}
              Remember me{" "}
            </label>
          </div>
        </div>

        <div className="col">
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      <button
        type="button"
        class="btn btn-primary btn-block mb-4"
        onClick={createUser}
      >
        Sign in
      </button>

      <div class="text-center">
        <p>
          Not a member? <a href="#!">Register</a>
        </p>
        <p>or sign up with:</p>
        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-facebook-f"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-google"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-twitter"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-github"></i>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
