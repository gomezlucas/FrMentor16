import React, { Component } from 'react';
//import { withStyles } from '@material-ui/core/styles';
//import styles from './styles'
 import { NavbarContainer, ButtonNavBar, ButtonNavInfo } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons' 
 

class Navbar extends Component {

    render() {
        return (
            <NavbarContainer>
                <h1>Where in the world? </h1>
                <ButtonNavBar onClick={this.props.handleClickTheme}>
                    <FontAwesomeIcon icon={faMoon} size="lg" />
                    <ButtonNavInfo> Dark Mode </ButtonNavInfo>
                </ButtonNavBar>
            </NavbarContainer>
        )
    }
}




export default Navbar