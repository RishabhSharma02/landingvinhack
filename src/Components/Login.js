import React from 'react'

const Login = () => {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center ">
    <div className="col-md-5 p-5 shadow-sm border rounded-5 border-primary bg-white">
      <h2 className="text-center mb-4 text-primary">Login Form</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control border border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control border border-primary" id="exampleInputPassword1" />
        </div>
        <div className="flex justify-center items-center">
          <button type="button" className="btn btn-primary w-24"><a href="http://localhost:3001">Login</a></button>
        </div>
      </form>
      <div className="mt-3">
        <p className="mb-0  text-center">Don't have an account? <a href="signup.html" className="text-primary fw-bold">Sign
            Up</a></p>
      </div>
    </div>
  </div>

  )
}

export default Login