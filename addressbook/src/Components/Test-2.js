import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from "axios"

export default function AddContact({ history}) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {

    axios
      .post(`/fairs/vendor-credentials`, data, {})
      .then((res) => {
        const { data } = res.data;
        history.replace(`/vendorprofile/${data.vendor}`);
      })
      .catch((error) => {
        console.log(error.message)
      });
  };

  return (
    <div>
      <div className="page-content">
        <div className="form-v10-content" id="addcontact">
          <form className="form-detail" method="post" id="myform" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-left">
              <p className="prerequisites-paragraph">
                You must be a registered user to use this form.
                {' '}
                <div>
                  Register
                  {' '}
                  <Link to="/register" className="signIn-link">
                    Here
                  </Link>
                </div>
              </p>
              <p className="prerequisites-paragraph">
                Already have an account?
                {' '}
                <div>
                  Login
                  {' '}
                  <Link to="/register" className="signIn-link">
                    Here
                  </Link>
                </div>
              </p>
            </div>
            <div className="form-right">
              <h2>Add Contact To List</h2>
              <div className="form-row">
                <input
                  type="text"
                  name="business_name"
                  className="company"
                  id="company"
                  placeholder="Enter Full Name"
                  ref={register({ required: true })}
                />
                {errors.business_name && <p className="error-para">Enter Full Name</p>}
              </div>
              <div className="form-row">
                <input
                  type="text"
                  name="business_address"
                  className="company"
                  id="company"
                  placeholder="Phone Number"
                  ref={register({ required: true })}
                />
                {errors.business_address && (
                  <p className="error-para">Business address is required</p>
                )}
              </div>
              <div className="form-row">
                <input
                  type="text"
                  name="business_city"
                  className="company"
                  id="company"
                  placeholder="Email Address"
                  ref={register({ required: true })}
                />
                {errors.business_city && <p className="error-para">Please input your city</p>}
              </div>
              <div className="form-row">
                <input
                  type="text"
                  name="business_state"
                  className="company"
                  id="company"
                  placeholder="City, State"
                  ref={register({ required: true })}
                />
                {errors.business_state && <p className="error-para">Please put in your state</p>}
              </div>
              <div className="form-row">
                <input
                  type="text"
                  name="business_tel"
                  className="phone"
                  id="phone"
                  placeholder="Phone Number"
                  ref={register({ required: true })}
                />
                {errors.business_tel && <p className="error-para">Phone number is required</p>}
              </div>
              <div className="form-row">
                <input
                  type="text"
                  name="business_email"
                  id="your_email"
                  className="input-text"
                  ref={register({ required: true })}
                  pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                  placeholder="Your Email"
                />
                {errors.business_email && <p className="error-para">Business email is required</p>}
              </div>
              <div className="form-row">
                <input type="file" multiple name="requirements" ref={register({ required: true })} id="input-file" />
                {errors.requirements && <p className="error-para">Please upload an image</p>}
              </div>
              <div className="form-row">
                <input type="number" multiple name="delivery_duration" ref={register({ required: true })} id="delivery-duration" placeholder="Delivery Duration in digits" />
                {errors.requirements && (
                  <p className="error-para">Please specify a delivery duration</p>
                )}
              </div>
              <div className="form-checkbox">
                <label htmlFor="checkbox" className="container">
                  <p>
                    I accept the
                    {' '}
                    <a href="##" className="text">
                      Terms and Conditions
                    </a>
                    {' '}
                    of your fair.
                  </p>
                  <input type="checkbox" name="checkbox" />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="form-row-last">
                <input type="submit" name="register" className="register" value="Register for Fair" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

