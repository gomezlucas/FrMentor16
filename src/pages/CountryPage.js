import React, { Component } from 'react'
import CountryContainer from '../components/countryContainer/CountryContainer'

class CountryPage extends Component {
    state = {
        country: {},
        nameBorder: []

    }
    render() {
        if (!this.state.country.name) {
            return null
        } else {
            return <CountryContainer country={this.state.country} borders={this.state.nameBorder} />
        }
    }



    componentDidMount = () => {
        const url = `https://restcountries.eu/rest/v2/alpha/${this.props.match.params.code}`
        let urlCodes = 'https://restcountries.eu/rest/v2/alpha?codes='
        fetch(url)
            .then(res => res.json())
            .then(res => {
                /* check borders of the country */

                if (res.borders.length > 0) {

                    res.borders.forEach(border => {
                        urlCodes += `${border};`
                    })
                     fetch(urlCodes)
                        .then(res => res.json())
                        .then(res => {
                            res.forEach(country => {
                                this.setState({
                                    nameBorder: [
                                        ...this.state.nameBorder, {
                                            name: country.name,
                                            code: country.alpha3Code
                                        }
                                    ]
                                })
                            }
                            )
                        })
                    res.borders.forEach(border => {
                        urlCodes += `${border};`
                    })
                }
                /*----------------------------*/
                this.setState({ country: res })
            }
            )
    }


    componentDidUpdate = (prevProps) => {
        if (prevProps.match.params !== this.props.match.params) {
            const url = `https://restcountries.eu/rest/v2/alpha/${this.props.match.params.code}`
            let urlCodes = 'https://restcountries.eu/rest/v2/alpha?codes='

            fetch(url)
                .then(res => res.json())
                .then(res => {
                    /* Check borders of the country*/
                    let arrayBorder = []

                    res.borders.forEach(border => {
                        urlCodes += `${border};`
                    })
                    fetch(urlCodes)
                        .then(res => res.json())
                        .then(res => {
                            res.forEach(country => {
                                arrayBorder = [...arrayBorder, { name: country.name, code: country.alpha3Code }]
                            }
                            )
                            this.setState({ nameBorder: arrayBorder })
                        })



                    /*---------------------------------*/
                    this.setState({ country: res })
                }
                )
        }

    }


}


export default CountryPage