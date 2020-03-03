import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import { CountryBackBtn } from './styles'
import styles from './styles';


class CountryContainer extends Component {
    state = {
        nameBorder: [

        ]
    }
    render() {
        const { classes, country, borders } = this.props


        return (
            <>
                <Link to='/'>
                    <CountryBackBtn
                        className={classes.countryBackBtn}
                    >
                        <ArrowBackIcon className={classes.arrowBack} />
                        Back
                    </CountryBackBtn>
                </Link>
                <div className={classes.countryContainer}>
                    <div className={classes.countryFlag}>
                        <img src={country.flag} alt="country flag" srcSet="" />
                    </div>
                    <div className={classes.countryInfo}>
                        <h4 className={classes.countryInfoName} > {country.name}</h4>
                        <div className={classes.countryLists}>
                            <ul className={classes.countryInfoData1}>
                                <li>
                                    <p><strong>Native Name:</strong> {country.nativeName}</p>
                                </li>
                                <li>
                                    <p><strong>Population:</strong> {country.population}</p>
                                </li>
                                <li>
                                    <p><strong>Region:</strong> {country.region}</p>
                                </li>
                                <li>
                                    <p><strong>Sub Region:</strong> {country.subregion}</p>
                                </li>
                                <li>
                                    <p><strong>Capital:</strong> {country.capital}</p>
                                </li>
                            </ul>
                            <ul className={classes.countryInfoData2}>
                                <li>
                                    <p><strong>Top Level Domain: </strong> {country.topLevelDomain}</p>
                                </li>
                                <li>
                                    <p><strong>Currency: </strong>{country.currencies[0].name}</p>
                                </li>
                                <li>
                                    <p><strong>Languages:  </strong> {this.showLanguages(country.languages)}</p>
                                </li>
                            </ul>
                        </div>

                        <div className={classes.countryInfoBorders}>
                            {
                                country.borders.length > 0 ?
                                    <p className={classes.borderTitle}><strong>Border Countries:</strong></p> :
                                    null
                            }
                            <span className={classes.borderContainer}>


                                {

                                    borders.map(border => {
                                        return (
                                            <Link to={`/country/${border.code}`} key={border.code}>
                                                <p className={classes.countryBorder} > {border.name} </p>
                                            </Link>
                                        )
                                    })
                                }
                            </span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
 
    showLanguages(languagesArr) {
        let number = 0
        let languages = ''
        languagesArr.forEach(item => {
            if (number < languagesArr.length - 1) {
                languages += item.name + ', '
            } else {
                languages += item.name + ' '
            }
            number++
        })
        return languages
    }


}


export default withStyles(styles)(CountryContainer)