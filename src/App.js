import React from "react";
import { Navbar } from './component';
import { Header, Blog, Product, Aboutus, Footer } from './containers';
import './App.css';

const App = () => {
    return (
        <div className='App'>
            <div className='greenup__bg'>
                <Navbar />
                <Header />    
            </div>
            <div>
                <Blog />
                <Product />
                <Aboutus />
                <Footer />
            </div>
        </div>
    );
}

export default App;
