import React from 'react'
import logomark from '../assets/logomark.svg'
import { NavLink, Form } from 'react-router-dom'

function Nav({userName}) {
  return (
    <nav>
        <NavLink to='/' aria-label='Go to home'>
            <img src={logomark} alt="" height={30} />
            <span> Home Page </span>
        </NavLink>

        {
            userName && (
                <Form 
                method='POST' 
                action='/logout'
                onSubmit={(e) => {
                    if(!confirm("Delete user and all data?")){
                        e.preventDefault();
                    }
                }}
                >
                    <button type='submit' className='btn btn--warning'>
                        <span>Delete User</span>
                    </button>
                </Form>
            )
        }
    </nav>
  )
}

export default Nav