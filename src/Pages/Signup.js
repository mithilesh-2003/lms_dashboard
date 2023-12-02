import React, { useState} from 'react';
import '../App.css';
import axios from 'axios'
import Swal from 'sweetalert2'
import{ useNavigate } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    address: '',
    date: '',
    password: '',
  });
const Navigate=useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        // api call
        const response =await axios.post('http://localhost:3001/Signup',formData);
        if(response && response.data){
            console.log(response.data);
            Swal.fire({
                icon:'success',
                title:'signup scuuessfully'
            })
            Navigate('/Login')
        }
        else{
            console.error('invalid response data',response);
        }
    }catch(error){
        console.error('error during signup ',error);
        if(error.response && error.response.data){
            console.error('error details:',error.response.data);
        }else{
            console.error('unspected error')
        }
    }
  };

  return (
    <div className="App">
      <form>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>

        <button type="button" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;


 