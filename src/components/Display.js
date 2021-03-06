import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'

import '../../node_modules/grommet-css'
import App from 'grommet/components/App'
import Box from 'grommet/components/Box'

import * as actions from '../actions'
import Header from '../containers/Header'
import Footer from '../containers/Footer'
import Status from './Status'
import See from './See'
import Upload from './Upload'
import Showblock from './Showblock'
import Myblock from './myblock'
import {LoginPage} from '../user/LoginPage';

import Blockchain from '../Blockchain/Blockchain'

class Display extends Component {

    componentDidMount() {

        this.props.initIPFS()

    }

    render() {
        return (

            <div>

                <BrowserRouter>
                    <div>
                        <Box align='center' responsive={true} pad='large'>
                            <Status ipfs={this.props.ipfs} {...this.props} />
                            <Box align='center' responsive={true} pad='medium'>
                                <Header/>
                            </Box>
                            <Route  path='/upload' component={Upload}/>
                            <Route  path='/see' component={See}/>

                            <Route  path='/showblock' component={Showblock}/>
                            <Route  path='/myblock' component={Myblock}/>


                        </Box>
                        <Footer/>
                    </div>
                </BrowserRouter>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        ipfs: state.ipfs,


    }
}

export default connect(mapStateToProps, actions)(Display)
