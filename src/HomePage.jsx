import { useEffect, useState} from 'react'

import './App.css'
import { Link , Outlet } from 'react-router-dom'

const HomePage = () => {

    const [imgFile, setImgFile] = useState({ preview: 'image.svg' , data:""})
    
  const handleSubmit = async (event) => {
      event.preventDefault()
      const formData = new FormData()
      formData.append('file', imgFile.data)
      const response = await fetch('http://localhost:5000/image', {
        method : 'POST',
        body: formData,
      })
      
  }
  
  const handleFileChange = (event) => {
    const image = {
      preview: URL.createObjectURL(event.target.files[0]),
      data : event.target.files[0],
    }
    setImgFile(image)
  }
  
  const click = () => {
    localStorage.setItem("images",JSON.stringify(imgFile))
  }
  
 console.log(localStorage.getItem("images"));

  return (
    <>
    <div>
      <h1>Image Uploader</h1>
    <div>
    <Link to = "/gallery" className='gallery btn btn-primary'>Gallery</Link>
    </div>
    </div>
    <div className='box'>
    <h2>Upload your file</h2>
    <h3>File should be jpeg,png etc.</h3>
    <div className='inside-box'>
    {imgFile.preview &&  <img src={imgFile.preview} width='100' height='100' alt="image"  />}
    <form onSubmit={handleSubmit}>
      <br />
      <br />
      <br />
    <input 
          className="form-control-file mb-3" 
          type="file" 
          accept=".jpeg,.png,.jpg"
          onChange={handleFileChange}
          />
          <br />
          <br />
          <button type='submit' onClick={click} className="btn btn-primary" >Upload</button>
      </form>
    
    <Outlet /> 
      </div>
  </div>
  </>
  )
}

export default HomePage