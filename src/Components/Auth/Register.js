import touringImage from '../../static/touring1.jpg'
import logo from '../../static/toured-logos.jpeg'
import { register } from '../../API/auth'
import { useState } from 'react'
import {Navigate} from 'react-router-dom'

export default function Register() {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('') 
  const [user, setUser] = useState(null)
  const [redirectTo, setRedirectTo] = useState(false)
  const [badUsername, setBadUsername] = useState(false)

  const handleRegister = async (event) => {
    event.preventDefault()
    try {
      const user = await register({
        username, password, email
      })
      setEmail('')
      setUser(user)
      setUsername('')
      setPassword('')
      setRedirectTo(true)
    } catch (exception) {
      // TODO add error handling 
      if (exception.response.status >= 400 && exception.response.status < 500) {
        alert(exception.response.data.error)
      }
      else {
        alert("An unknown error occured on the server")
      }
      setRedirectTo(false)
    }
  }
    if (redirectTo) {
      return <Navigate to='/dashboard' />
    }
    return (
      <>
        <div className="min-h-full flex">
          <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div>
                <img
                  className="h-14 w-auto rounded"
                  src={logo}
                  alt="Workflow"
                />
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Create your account</h2>
              </div>
  
              <div className="mt-8">
                <div className="mt-6">
                  <form onSubmit={handleRegister} method="POST" className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          onChange={({ target }) => setEmail(target.value)}
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                        Username
                      </label>
                      <div className="mt-1">
                        <input
                          id="username"
                          name="username"
                          type="text"
                          onChange={({ target }) => setUsername(target.value)}
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
  
                    <div className="space-y-1">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <div className="mt-1">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          onChange={({ target }) => setPassword(target.value)}
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
  
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                          <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                              Already have an account?
                          </a>
                      </div>
                    </div>
  
                    <div>
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Sign up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block relative w-0 flex-1">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={touringImage}
              alt=""
            />
          </div>
        </div>
      </>
    )
  }