import React from 'react';
import { ReviewsDiv, ReviewsH2 } from './styles';
import FiveStars from '../img/5stars.png';


function Reviews () {
    return (
        <div>
    <ReviewsH2>See what customers are saying about Better Professor!</ReviewsH2> 
        <ReviewsDiv>
            
                <div className='review'>
                    <h3>Deborah S.<img height='50px' width='300px' src={FiveStars} alt='five blue stars' /></h3>
                    <p>January 29, 2020</p>
                    <p>This app has made my life so much easier!
					I love that I can log in and see exactly what
					deadlines my students have coming up in a glance.</p>
                </div>
                <div className='review'>
                    <h3>Sally May J.<img height='50px' width='300px' src={FiveStars} alt='five blue stars' /></h3>
                    <p>December 15, 2019</p>
                    <p>Wow! Just Wow!</p>
                </div>
                <div className='review'>
                    <h3>Dr. Phillip W.<img height='50px' width='300px' src={FiveStars} alt='five blue stars' /></h3>
                    <p>October 10, 2019</p>
                    <p>This app helps keep me at the top of my game!</p>
                </div>
                <div className='review'>
                    <h3>Millicent C.<img height='50px' width='300px' src={FiveStars} alt='five blue stars' /></h3>
                    <p>October 27, 2019</p>
                    <p>Where has this app been all my life?! 
					I highly recommend this to all my fellow 
					teachers out there. It makes keeping your students on 
					track such a breeze.</p>  
                </div>
                <div className='review'>
                    <h3>Joe Bob D.<img height='50px' width='300px' src={FiveStars} alt='five blue stars' /></h3>
                    <p>September 9, 2019</p>
                    <p>A great way to stay on top of deadlines.</p>    
                </div>
                <div className='review'>
                    <h3>Roberto V.<img height='50px' width='300px' src={FiveStars} alt='five blue stars' /></h3>
                    <p>January 29, 2019</p>
                    <p>Es una muy buena applicacion.</p>  
                </div>
        </ReviewsDiv>
        </div>
    )
}

export default Reviews;