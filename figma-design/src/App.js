import React from 'react'

// import les containers components component
import { Blog, Features, Footer, Header, Pos, GP3 } from './containers'
// import les components principaux
import { Brand, Cta, Navbar } from './components'
// app css
import './App.css'

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
                <Brand />
                <GP3 />
                <Features />
                <Pos />
                <whatGP3 />
                <Cta />
                <Blog />
                <Footer />
        </div>
    )
}

export default App
