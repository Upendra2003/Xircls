import { useState } from 'react'
import axios from 'axios';


function App() {
  const [formData, setFormData] = useState({
    user_name: '',
    contact_no: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    if (formData.user_name === '' || formData.contact_no === '') {
      alert('User name and contact number cannot be blank.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/xircls/add-info/', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
      <nav>
        <h1 className='m-3 fs-3'>XIRCLS</h1>
        <hr/>
      </nav>
      <div className='border p-3 m-5 rounded shadow-lg'>
        <h1 className='text-center bold'>Subscribe✨</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Name</label>
            <input type="text" name='user_name' value={formData.name} onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Mobile Number</label>
            <input type="text" name='contact_no' value={formData.number} onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Address</label>
            <textarea type="text" name='address' value={formData.address} onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          
          <button className='btn btn-primary' type="submit">Submit</button>
        </form>
      </div>
      
        
    </>
  )
}

export default App
