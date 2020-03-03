import React, { Component } from 'react'
import Country from '../country/Country'
import { Link } from 'react-router-dom'
import { CountriesContainerDiv } from './styles'


class CountriesContainer extends Component {
    render() {
        const { countries } = this.props
         return (
            <CountriesContainerDiv>
                {
                    countries.length > 0 ?
                        countries.map(country => {
                            return (
                                <Link to={'/country/' + country.alpha3Code} key={country.alpha3Code}  >
                                    <Country
                                        name={country.name}
                                        population={country.population}
                                        region={country.region}
                                        capital={country.capital}
                                        flag={country.flag}
                                        code={country.code}
                                    />
                                </Link>
                            )
                        }
                        ) :
                        null
                }
            </CountriesContainerDiv>
        )
    }
}


export default CountriesContainer