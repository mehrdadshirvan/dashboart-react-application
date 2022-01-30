import React from "react";
import Connection from './../../Api/Connection';

class Login extends React.Component {
    state = {
        email : '',
        password: ''
    }

    formHandler(e) {
        e.preventDefault();
        // ajax
        if(this.state.email.length > 1) {
            Connection.post(`/auth/login`)
                .then(response =>  console.log(response))
                .catch(err => console.log(err))
            //
            this.setState({ text : '' })
        }
    }


    emailInputHandler = e => this.setState({ email : e.target.value});
    passwordInputHandler = e => this.setState({ password : e.target.value});






    render() {
        return (
            <>
                <div className={`container-fluid`}>
                    <div className={`row`}>
                        <div className={`col-sm-6 m-auto`}>
                            <div className={`card`}>
                                <div className={`card-body`}>
                                    <h5 className="card-title">Login</h5>
                                    <hr/>
                                    <form onSubmit={this.formHandler.bind(this)}>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">
                                                Email address
                                            </label>
                                            <input type="email"
                                                   className="form-control"
                                                   id="email"
                                                   name="email"
                                                   aria-describedby="emailHelp"
                                                   value={this.state.email}
                                                   onChange={this.emailInputHandler.bind(this)}/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                            <input type="password"
                                                   className="form-control"
                                                   id="password"
                                                   name="password"
                                                   value={this.state.password}
                                                   onChange={this.passwordInputHandler.bind(this)}/>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Login;