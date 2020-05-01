import React from 'react';
import { WorkSection } from './styles';
import chart from '../img/chart.jpg';

function Works () {
    return (
        <WorkSection>
            <img src={chart} alt='better professor app' className='chart-img' />
            <div className='works'>
                <div className='works-pitch'>
                    <h2>How It Works</h2>
                    <p>Better Professor allows you to better organize, manage, and remind not just your students, but yourself.<br /> <br />
			        Find the students that you are mentoring, and keep track of their progress on their assignments, projects, and research.<br /> <br />
	 		        Create unique due dates that will automatically remind you and your students, when something is coming up or due with automated or custom messages!<br /> <br />
			        Never miss an opportunity to mentor again!</p>
                </div>
            </div>
        </WorkSection>
    )
}

export default Works;