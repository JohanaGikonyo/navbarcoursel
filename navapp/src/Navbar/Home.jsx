import  { useEffect } from 'react'
import { useState } from 'react'
import img1 from './images/pexels-agung-pandit-wiguna-3401403.jpg'
import img2 from './images/pexels-cottonbro-studio-4709832.jpg'
import img3 from './images/pexels-linkedin-sales-navigator-1251861.jpg'
import img4 from './images/pexels-mikhail-nilov-7776963.jpg'
import img5 from './images/pexels-rdne-stock-project-7713135.jpg'
import img6 from './images/pexels-tam-hoang-1007066.jpg'
import './home.css'
    
function Home(){
    const images=[
        img1,img2,img3,img4,img5,img6
    ];
    const image=[img1,img2,img3,img4,img5,img6]
    const [index, setIndex]=useState(0);
const next=()=>{
        setIndex(index+1)
}
const previous=()=>{  
            setIndex(index-1)
    
}

    return(
<div className='home'>
    <h1>Image Carousel</h1>
    <div className='gallary'>
    {
        index===0?(<button style={{border:'none',backgroundColor:'white'}}></button>):(<button onClick={previous} style={{left:"0"}}><box-icon name='skip-previous'></box-icon></button>)
    }
    
    <img src={images[index]} className='images'></img>
    {
        index===images.length-1?(<button style={{border:'none',backgroundColor:'white'}}></button>):(<button onClick={next} style={{right:"0"}}><box-icon name='skip-next'></box-icon></button>)
    }

</div>

</div>
    );
}

export default Home