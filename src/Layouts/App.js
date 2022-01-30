import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";

//import share file
import Header from './Share/Header';
import Footer from './Share/Footer';

// imports Routes
const Home = loadable(() => import('./../Pages/Home'))
const Login = loadable(() => import('./../Pages/Auth/Login'))
const About = loadable(() => import('./../Pages/other/About'))
const Contact = loadable(() => import('./../Pages/other/Contact'))
const NotFound = loadable(() => import('./../Pages/other/NotFound'))

class App extends React.PureComponent{

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <main className={`my-3`}>
                        <Switch>
                            <Route path="/" exact component={Home}/>

                            {/*auth routes*/}
                            <Route path="/auth/login" component={Login}/>
                            <Route path="/auth/forget-password" component={Login}/>

                            <Route path="/about" component={About}/>
                            <Route path="/contact" component={Contact}/>
                            <Route path="/404" component={NotFound}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </main>

                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
