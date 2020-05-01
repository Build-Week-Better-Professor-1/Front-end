import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from './styles';
import phone from '../img/bpa-phone.jpg';
import { BigBlueButton, BigWhiteButton } from './styles';

function Home () {
    return (
        <Section>
            <img src={phone} alt='better professor app' className='app-img' />
            <div className='homepage'>
            <div className='homepage-pitch'>
                <h2>Never miss another deadline again!</h2>
                <p>Managing multiple projects with numerous deadlines for 
                a myriad of students can be a hassle for even the most
                organized teacher. Streamline the process now with Better Professor.</p>
            </div>
            <Link to='/SignUp'><BigBlueButton>Sign Up</BigBlueButton></Link>
            <Link to='/Login'><BigWhiteButton>Log In</BigWhiteButton></Link>
            </div>
        </Section>
    )
}

export default Home;