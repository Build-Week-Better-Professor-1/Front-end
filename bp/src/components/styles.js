import styled from 'styled-components';
// Homepage
export const Header = styled.header`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2% 2%;

  h1, h2, p {
    font-family: 'Roboto Slab', serif;
  }
  p {
    font-size: 1.6rem; 
  }
`;

export const LogoContainer = styled.div`

  display:flex;
	width: 50%;
  align-items: center;
  
  
  color: #2196F3;

  .logo {
    margin: 2% 2%;
  }

  .logo-text {
    text-align: center;
    margin: 0% 0%;
  }

  h1 {
    font-size: 3.2rem;
    margin: 0% 0%;
  }

  p {
    margin: 0% 0%;
    font-size: 1.6rem;
    color: black;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  background-color: #0A2738;
  color: white;
  a {
    font-family: 'Roboto Slab', serif;
    margin: 1% 2%;
    text-decoration: none;
    color: white;
  }
`;

// Homepage Content
export const Section = styled.section`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  padding: 4%;

  h1, h2, p {
    font-family: 'Roboto Slab', serif;
  }

  h2 {
    font-size: 3.5rem;
    margin: 1% 1%;
  }

  p {
    font-size: 1.5rem;
    margin: 0% 1%;
  }

  .homepage-pitch{
	display:flex;
	flex-direction:column;
    justify-content:flex-start;
    padding: 0 2%;
    width: 80%;
  }

  .signup-btn{
    width: 60%;
    background-color: #2196F3;
    border: 1px solid white;
    border-radius: 8px;
    color: white;
    margin: 5%;
    padding: 3%;
    cursor: pointer;
    font-family: 'Roboto Slab', serif;
  }

  .login-btn{
    background-color: white;
    border: 1px solid #2196F3;
    border-radius: 8px;
    color: #2196F3;
    width: 60%;
    margin: 5%;
    padding: 3%;
    cursor: pointer;
    font-family: 'Roboto Slab', serif;
  }

  .app-img{
    width: 50%;
    height: 50%;
  }
`;

// How It Works
export const WorkSection = styled.section`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  padding: 4%;

  h1, h2, p {
    font-family: 'Roboto Slab', serif;
  }

  h2 {
    font-size: 3.5rem;
    margin: 6% 1%;
  }

  p {
    font-size: 1.5rem;
    margin: 0% 1%;
  }

  .works-pitch{
	display:flex;
	flex-direction:column;
    justify-content:flex-start;
    padding: 0 2%;
    width: 80%;
  }

  .chart-img{
    width: 50%;
    height: 50%;
  }
`;

// Reviews Page
export const ReviewsDiv = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    h3, p {
        font-family: 'Roboto Slab', serif;
    }

    h2 {
        font-family: 'Roboto Slab', serif;
        text-align: center;
    }
    .review {
        display: flex;
        flex-direction: column;
        max-height: 10%;
        width: 45%; 
        margin: 2% 2%;
    }
    
`;

export const ReviewsH2 = styled.h2`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
  text-align: center;
  font-family: 'Roboto Slab', serif;
`;

// Login Form
export const LoginForm = styled.form`
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    .errors{
        color: red;
    }
`;

export const StyledInput = styled.input`
    height: 32px;
    border-radius: 8px;
    border: 1px solid black;
    text-align: center;
    margin: 1% 0%;
`;

// Sign Up Form
export const SignUpForm = styled.form`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  .errors{
      color: red;
  }
`;

// // Buttons

export const BigWhiteButton = styled.button`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
    width: 60%;
    background-color: white;
    border: 1px solid #2196F3;
    border-radius: 8px;
    color: #2196F3;
    margin: 5%;
    padding: 3%;
    cursor: pointer;
    font-family: 'Roboto Slab', serif;
`;

export const BigBlueButton = styled.button`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
    width: 60%;
    background-color: #2196F3;
    border: 1px solid white;
    border-radius: 8px;
    color: white;
    margin: 5%;
    padding: 3%;
    cursor: pointer;
    font-family: 'Roboto Slab', serif;
`;

export const BigBlueButton1 = styled.button`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
    width: 100%;
    background-color: #2196F3;
    border: 1px solid white;
    border-radius: 8px;
    color: white;
    margin: 5%;
    padding: 13%;
    cursor: pointer;
    font-family: 'Roboto Slab', serif;
`;

export const SmallBlueButton = styled.button`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');
    width: 20%;
    background-color: #2196F3;
    border: 1px solid white;
    border-radius: 8px;
    color: white;
    margin: 1%;
    padding: 1%;
    cursor: pointer;
    font-family: 'Roboto Slab', serif;
`;

// Dashboard
export const DashboardDiv = styled.div`
  padding: 40px;
  align-items: center;
  text-align: center;
  .errors{
      color: red;
  }
`;

// Add Student Form
export const AddStudentForm = styled.form`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

// Student List
export const StudentListDiv = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const StudentListItem = styled.li`
  background-color: #F5F5F5;
  padding: 40px;
`;