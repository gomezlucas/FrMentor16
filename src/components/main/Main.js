import React, { Component } from 'react'
import Search from '../search/Search';
import CountriesContainer from '../countriesContainer/CountriesContainer'

class Main extends Component {
    state = {
        countrySelected: '',
        regionSelected: '',
        countries: [],
        selection: []
    }

    render() {
        return (

            <div>
                <Search handleChange={this.handleChange} />
                <CountriesContainer countries={this.state.selection} />
            </div>
        )
    }


    componentDidMount = () => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(res => this.setState({ selection: res, countries: res }))

    }

    handleChange = async (e, type) => {
         switch (type) {
            case 'country':
                await this.setState({
                    countrySelected: e.target.value
                })
                this.checkCountry()
                break;
            case 'region':
                await this.setState({
                    regionSelected: e.target.value
                })
                this.checkRegion()
                break;
            default:
                 break;
        }
     }




    checkRegion = async () => {
        let url
        if (this.state.regionSelected === '' || this.state.regionSelected === 'all') {
            url = 'https://restcountries.eu/rest/v2/all'
        } else {
            url = `https://restcountries.eu/rest/v2/region/${this.state.regionSelected}`
        }

        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    selection: res
                })
                if (this.state.countrySelected !== '') {
                     let answer = this.checkCoincidence('withCountry')
                    this.setState({
                        selection: answer
                    })
                }
            })
            .catch(error => console.log(error))
    }

    checkCountry = async () => {
         let url

        if (this.state.countrySelected === '') {
            url = 'https://restcountries.eu/rest/v2/all'
        } else {
            url = `https://restcountries.eu/rest/v2/name/${this.state.countrySelected}`
        }

        await fetch(url)
            .then(res => res.json())
            .then(res => {
                 this.setState({
                    selection: res
                })
                if (this.state.regionSelected !== 'all' && this.state.regionSelected !== '') {
                    let answer = this.checkCoincidence('withRegion')
                    this.setState({
                        selection: answer
                    })
                 }
            })
            .catch(error => console.log(error))
    }


    checkCoincidence = (coincidence) => {
        let result
        if (coincidence === 'withRegion') {
             result = this.state.selection.filter(country => {
                 let regionMayus = country.region.toUpperCase()
                let regionSele = this.state.regionSelected.toUpperCase()
                 if (regionMayus === regionSele) {
                    return country
                } else {
                    return null
                }
            })

        } else {
            result = this.state.selection.filter(country => {
                let countryMayus = country.name.toUpperCase()
                let countrySele = this.state.countrySelected.toUpperCase()
                 if (countryMayus.indexOf(countrySele) >= 0) {
                    return country
                } else {
                    return null
                }
            })
        }
         return result
    }

}
export default Main