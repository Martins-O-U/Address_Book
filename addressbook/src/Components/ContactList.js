import React, {useEffect, useState} from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import axios from "axios"

export default function ContactList({ history}) {
  const { register, handleSubmit, errors } = useForm();

  const [storedData, setStoredData] = useState([]);
  useEffect(() => {
    axios
      .get("https://blinx-addressbook.herokuapp.com/api/get",
      {headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }})
      .then(res => {
        setStoredData(res.data);
      });
  }, []);

  const errormessage = (message) => {
    toast.error(
      message,
      { autoClose: 7000 },
      {
        position: toast.POSITION.TOP_LEFT,
      }
    );
  };

  const onSubmit = (data) => {
    // let user = []
    // let data = user.append(datum)

    // console.log("Test..")
    // console.log(data)
    axios
      .post(`https://blinx-addressbook.herokuapp.com/api/create`, data)
      .then((res) => {
        history.push('/contactlist');
      })
      .catch((error) => {
        errormessage(error.message);
      });
  };

  return (
    <div>
        <div className="">
            <h1 className="intro">Contacts</h1>
            {storedData.map(user => (
            <div key={user.id} >
                <p>{user.email}</p>
                <p>{user.password}</p>
            </div>
            ))}
        </div>       
      < div className="page-content">
            <div className="form-v10-content" id="addcontact">
                <form className="form-detail" method="post" id="myform" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-left">
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Contact to List</button>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Add Contact</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="">
                                            <div className="contact-input-div">
                                                <input type="text" name="name" className="" id="" 
                                                placeholder="Enter Full Name" ref={register({ required: true })} />
                                                {errors.business_name && <p className="error-para">Full Name</p>}
                                            </div>
                                            <div className="contact-input-div">
                                                <input type="text" name="phoneNumber" className=""
                                                id="" placeholder="Enter Phone Number" ref={register({ required: true })} />
                                                {errors.business_tel && <p className="error-para">Phone Number</p>}
                                            </div>
                                            <div className="contact-input-div">
                                                <input type="text" name="email" id="your_email" className=""
                                                ref={register({ required: true })} pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" placeholder="Enter Email Address" />
                                                {errors.business_email && <p className="error-para">Email Address</p>}
                                            </div>
                                            <div className="contact-input-div">
                                                <input type="text" name="address" className=""
                                                id="" placeholder="Enter Home Address" ref={register({ required: true })} />
                                                {errors.business_state && <p className="error-para">Address</p>}
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="submit" className="btn btn-primary">Save changes</button>
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

