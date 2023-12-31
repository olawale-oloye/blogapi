import React, { useState, useEffect } from "react";

const Registration = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPass: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const reg = async () => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const { email, username, password } = formValues;
      const payload = { email, username, password };

      try {
        const response = await fetch("https://mytaskz.onrender.com/signup", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        if (response.status === 201) {
          handleReset();
          setRegistrationSuccess(true);
        } else {
          console.error("Registraton failed with status:", response.status);
        }
      } catch (error) {
        console.error("Error during registration:", error);
      }
      const data = await response.json();
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFormValues(initialValues);
    setFormErrors({});
    setIsSubmit(false);
    setRegistrationSuccess(false);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!values.confirmPass) {
      errors.confirmPass = "Confirm password field is missing!";
    } else if (values.password !== values.confirmPass)
      errors.confirmPass = "Password do not match";

    return errors;
  };
  return (
    <div>
      <div className="flex justify-center mt-16">
        {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}

        <form onSubmit={handleSubmit} onReset={handleReset}>
          {registrationSuccess && (
            <div className="success-message">Registration is successful!</div>
          )}
          <div className="flex flex-col space-y-3">
            <span className="flex justify-end">{formErrors.username}</span>
            <div className="flex  justify-between">
              <label htmlFor="" className=" mr-6">
                Username:
              </label>
              <input
                type="text"
                className=" focus:outline-none rounded-xl text-black h-6 w-[30rem] pl-3"
                name="username"
                value={formValues.username}
                onChange={handleChange}
              />
            </div>

            <span className="flex justify-end">{formErrors.email}</span>
            <div className="flex  justify-between">
              <label htmlFor="" className=" mr-6">
                Email:
              </label>
              <input
                type="text"
                className=" focus:outline-none rounded-xl text-black h-6 w-[30rem] pl-3"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <span className="flex justify-end">{formErrors.password}</span>
            <div className="flex  justify-between">
              <label htmlFor="" className=" mr-6">
                Password:
              </label>
              <input
                type="password"
                className=" focus:outline-none rounded-xl text-black h-6 w-[30rem] pl-3"
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <span className="flex justify-end">{formErrors.confirmPass}</span>
            <div className="flex  justify-between">
              <label htmlFor="" className=" mr-6">
                Confirm Password:
              </label>
              <input
                type="password"
                className=" focus:outline-none rounded-xl text-black h-6 w-[30rem] pl-3"
                name="confirmPass"
                value={formValues.confirmPass}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-end space-x-8">
              <button
                type="submit"
                className=" bg-[#0f0] text-black rounded-3xl pl-4 pr-4 pt-1 pb-1 hover:shadow-lg shadow-white  hover:bg-white transition ease-in-out delay-60 duration-300"
              >
                Submit
              </button>
              <button
                type="reset"
                className=" bg-[#0f0] text-black rounded-3xl pl-4 pr-4 pt-1 pb-1 hover:shadow-lg shadow-white  hover:bg-white transition ease-in-out delay-60 duration-300"
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
