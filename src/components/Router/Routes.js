import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Company from '../pages/Company'
import NewProject from '../pages/NewProject'
import Project from '../pages/Project'


import Footer from '../layout/Footer'
import Container from '../layout/Container'
import NavBar from '../layout/NavBar'

function Routes() {
    return(
        <Router>
            <NavBar />
            <Switch>
                <Container customClass='min_height'>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/projects'>
                        <Projects />
                    </Route>
                    <Route path='/company'>
                        <Company />
                    </Route>
                    <Route path='/newproject'>
                        <NewProject />
                    </Route>
                    <Route path='/project/:id'>
                        <Project />
                    </Route>
                </Container>
            </Switch>
            <Footer />
        </Router>
    )
}

export default Routes