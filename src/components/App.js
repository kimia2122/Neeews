import React from 'react';
import { Route, Router } from 'react-router';
import History from './History';

import Home from './Homepage/Home';
import Categories from './Categories/Categories';
import Artapi from './Categories/Category/Artapi';
import Sportapi from './Categories/Category/Sportapi';
import USapi from './Categories/Category/USapi';
import Techapi from './Categories/Category/Techapi';
import Worldapi from './Categories/Category/Worldapi';
import Healthapi from './Categories/Category/Healthapi';
import Movieapi from './Categories/Category/Movieapi';
import Bookapi from './Categories/Category/Bookapi';
import Foodapi from './Categories/Category/Foodapi';
import Search from './Search/Search';
import About from './About/About';
import Header from './Header';
import Footer from './Footer';

const App = () => {
    return (
        <div>
            <Router history={History}>
                <Header />
                <Route path="/" exact component={Home}/>
                <Route path="/Categories" exact component={Categories} />
                    <Route path="/Categories/Art" exact component={Artapi}/>
                    <Route path="/Categories/Sport" exact component={Sportapi} />
                    <Route path="/Categories/United" exact component={USapi} />
                    <Route path="/Categories/Technology" exact component={Techapi} />
                    <Route path="/Categories/Worlds" exact component={Worldapi} />
                    <Route path="/Categories/Healthy" exact component={Healthapi} />
                    <Route path="/Categories/Movie" exact component={Movieapi} />
                    <Route path="/Categories/Book" exact component={Bookapi} />
                    <Route path="/Categories/Food" exact component={Foodapi} />
                <Route path="/Search" exact component={Search} />
                <Route path="/About" exact component={About} />
                <br></br>
                <Footer />
            </Router>
        </div>
    );
};

export default App;