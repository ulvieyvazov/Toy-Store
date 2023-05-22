import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from "axios"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import { ProductAdd } from '../../../Schema/ProductAdd';


const AddProducts = () => {


  const [data, setData] = useState([])


  const [state, setState] = useState({
    img: "",
    name: "",
    price: "",

  })

  const getData = async () => {
    const res = await axios.get("http://localhost:5050/toys")
    setData(res.data)
  }


  const { register, handleSubmit, formState: { errors } } = useForm({
  });


  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const postToy = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5050/toys", {
      img: state.img,
      name: state.name,
      price: state.price
    })
  }


  useEffect(() => {
    getData()
  }, [])


  return (
    <div>
      <form action="" onSubmit={postToy} style={{ width: '30%', margin: '0 auto', padding: '50px 0' }}>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" variant="filled" type='outlined' name='img'  {...register('img')} onChange={handleChange} />
          {
            errors.img?.message && <p style={{ color: "red" }}>{errors.img?.message}</p>
          }
          <TextField id="filled-basic" label="toy name" variant="outlined" name='name'  {...register('name')} onChange={handleChange} />
          {
            errors.name?.message && <p style={{ color: "red" }}>{errors.name?.message}</p>
          }
          <TextField id="outlined-basic" label="price" variant="outlined" type='number' name='price'  {...register('price')} onChange={handleChange} />
          {
            errors.price?.message && <p style={{ color: "red" }}>{errors.price?.message}</p>
          }
        </Box>
        <button style={{ padding: '5px 70px', color: 'white', cursor: 'pointer', margin: '18px 10px', fontSize: 22, backgroundColor: 'teal', border: 0, borderRadius: 8 }}>submit</button>
      </form>
    </div>
  )
}

export default AddProducts