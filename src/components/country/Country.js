import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import { Card } from './styles'
import styles from './styles';

class Country extends Component {
    render() {
        const { classes, name, population, region, capital, flag } = this.props
        return (
            <Card>
                <div className={classes.cardImage}>
                    <img src={flag} alt="flag country" />
                </div>
                <div className={classes.cardInfo}>
                    <h2 className={classes.cardName}> {name}</h2>
                    <p><strong>Population:</strong> {population}</p>
                    <p><strong>Region:</strong> {region}</p>
                    <p><strong>Capital:</strong> {capital}</p>
                </div>
            </Card>
        )
    }
}



export default withStyles(styles)(Country)