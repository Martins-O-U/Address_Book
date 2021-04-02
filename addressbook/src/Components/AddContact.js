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
      < div className="page-content">
            <div className="form-v10-content" id="addcontact">
                <form className="form-detail" method="post" id="myform" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-left">
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Contact to List</button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Add Contact</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div className="">
                                            <div className="contact-input-div">
                                                <input type="text" name="business_name" className="" id="" 
                                                placeholder="Enter Full Name" ref={register({ required: true })} />
                                                {errors.business_name && <p className="error-para">Full Name</p>}
                                            </div>
                                            <div className="contact-input-div">
                                                <input type="text" name="business_tel" className=""
                                                id="" placeholder="Enter Phone Number" ref={register({ required: true })} />
                                                {errors.business_tel && <p className="error-para">Phone Number</p>}
                                            </div>
                                            <div className="contact-input-div">
                                                <input type="text" name="business_email" id="your_email" className=""
                                                ref={register({ required: true })} pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" placeholder="Enter Email Address" />
                                                {errors.business_email && <p className="error-para">Email Address</p>}
                                            </div>
                                            <div className="contact-input-div">
                                                <input type="text" name="business_state" className=""
                                                id="" placeholder="Enter Address" ref={register({ required: true })} />
                                                {errors.business_state && <p className="error-para">Address</p>}
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>          
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}

