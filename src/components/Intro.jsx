import React from 'react'
import { Form } from 'react-router-dom'
import { UserPlusIcon } from '@heroicons/react/24/solid'
import illustration from "../assets/illustration.jpg"

function Intro() {
  return (
    
    <div className='intro'>
        <div>
        <h1>Take control of <span className="accent">Your expenses</span> </h1>
        <p>Tracking expenses is the key. Start now!</p>

        <Form method='post'>
            <input 
                type="text"
                name='userName'
                required
                placeholder='What is your name?'
                aria-label='Your name'
                autoComplete='given-name'
            />
            <input type="hidden" name="_action" value="newUser" />
            <button type='submit' className='btn btn--dark'>
                <span >Create Account</span>
                <UserPlusIcon width={20} />
            </button>
        </Form>
    </div>
    <img src={illustration} alt='person with money' width={600} />
    </div>
  )
}

export default Intro