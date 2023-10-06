import React from 'react'
import ImCard from '../ImCard';
import './Gallery.css';

function Gallery() {

    const imageurls = [
        "https://firebasestorage.googleapis.com/v0/b/parakhmultipoint-44acc.appspot.com/o/gallery%20images%2Fsps-glry-img-1-cropped.jpg?alt=media&token=c7ddd4e7-15da-46ca-85c7-1beab9f1f5ff",
        "https://firebasestorage.googleapis.com/v0/b/parakhmultipoint-44acc.appspot.com/o/gallery%20images%2Fsps-glry-img-2.jpeg?alt=media&token=87e88c6e-92a6-4fc0-9255-311ff9328d95",
        "https://firebasestorage.googleapis.com/v0/b/parakhmultipoint-44acc.appspot.com/o/gallery%20images%2Fsps-glry-img-3.jpg?alt=media&token=e7f57638-37ec-416f-b60c-373a946faf50",
    ];

    return (
        <div className='background'>
            <h1 style={{color:"white", fontSize:"50px",textAlign:"center"}}>Gallery</h1>
            {imageurls.map((iurl,i)=>{
                return <div className="responsive" key={i+"div"}><ImCard src={iurl} key={i}/></div>
            })}
        </div>
    )
}

export default Gallery
