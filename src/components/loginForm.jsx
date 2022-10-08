import React, { useState } from 'react'
// import './App.css'

const LoginForm = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [allEntry, setAllEntry] = useState([])

  const submitForm = (e) => {
    e.preventDefault()

    const newEntry = {userName: userName, email: email, password: password}

    setAllEntry([...allEntry, newEntry])
  }

  return (
    <>
      <form onSubmit={submitForm}>
      <div>
          <label htmlFor='username'>Username</label>
          <input type='text' name='username' id='username' value={userName} autoComplete='off' 
          onChange={(e) => setUserName(e.target.value)}/>
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' value={email} autoComplete='off' 
          onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password' value={password} 
          onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <button type='submit'>Login</button>
      </form>

      <div>
        {
          allEntry.map((curElem) => {
            return(
              <div className='showData'>
                <p>Welcome {curElem.userName}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default LoginForm