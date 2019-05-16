import React from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
import SignUp from './SignUp/SignUp'
import SignIn from './SignIn/SignIn'
import logo from "../../Images/jobdLogo.png"

// import './login.css'
import styled from 'styled-components'

const LoginPage = styled.div`
  height: 100vh;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  color: white;
  @media only screen and (max-width: 700px) and (min-width: 300px) {
    flex-direction: column;
    align-items: center;
  }
`

const Aside = styled.div`
  display: flex;
  width: 50%;
  background-color: white;
  img{
    width:90%;
    height: 90%;
    margin:auto;
    @media(max-width: 800px){
      display:none
    }
  }
  @media only screen and (max-width: 700px) and (min-width: 300px) {
    display: none;
  }
`

const LoginForm = styled.div`
  width: 50%;
  background-color: #2e4158;
  padding: 25px 40px;
  overflow: auto;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`

const PageSwitch = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10%;
`

const FormTitle = styled.div`
  color: #707c8b;
  font-weight: 300;
  margin-bottom: 50px;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: inline-block;
  font-size: 1.5rem;
  margin: 0 10px;
  padding-bottom: 5px;
  :hover {
    color: wheat;
  }
`

function Login({ match }) {
  console.log('path', match.path)
  console.log('url', match.url)
  return (
    <LoginPage>
      <Aside > <img src={logo} alt=""/>
     
      </Aside>
      <LoginForm>
        {/* <PageSwitch>
          <NavLink to={`${match.url}`} className='PageSwitcher__Item'>
            Sign In
          </NavLink>
          <Link
            to={`${match.url}/signup`}
            className='PageSwitcher__Item PageSwitcher__Item--Active'>
            Sign Up
          </Link>
        </PageSwitch> */}

        <FormTitle>
          <StyledLink to={`${match.url}`}>Sign In</StyledLink> or{' '}
          <StyledLink to={`${match.url}/signup`}>Sign Up</StyledLink>
        </FormTitle>

        <Route path={`${match.path}/signup`} component={SignUp} />
        <Route exact path={`${match.path}`} component={SignIn} />
      </LoginForm>
    </LoginPage>
  )
}

export default Login
