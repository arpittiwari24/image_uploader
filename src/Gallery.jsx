import React from 'react'

const Gallery = () => {

const data = JSON.stringify(localStorage.getItem('images'))


return (
    <div>
        <img src={data} alt="image" />
    </div>
)
}

export default Gallery