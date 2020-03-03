import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import Styles from './styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {Input, Select} from './styles'

class Search extends Component {
    render() {
        const { classes } = this.props
        return (
            <form className={classes.searchContainer} type="submit">
                <div className={classes.headerFormInput}>
                    <Input
                        type="text"
                        placeholder="Search for a country..."
                        name="country"
                        aria-label="Search for a country..."
                        className='inputForm'
                        onChange={(e)=> this.props.handleChange(e, 'country')}
                    />
                    <SearchIcon className={classes.headerSearchIcon} size="lg" />
                </div>
                <div className={classes.headerFormSelect}>
                    <Select
                        name="select"
                        className={classes.headerFormRegion}
                        aria-label="region"
                        onChange={(e)=> this.props.handleChange(e, 'region')}
                    >
                        <option value="all" > Filter by Region </option>
                        <option value="africa">Africa</option>
                        <option value="americas">America</option>
                        <option value="asia">Asia</option>
                        <option value="europe"> Europe</option>
                        <option value="oceania"> Oceania</option>
                    </Select>
                    <KeyboardArrowDownIcon className={classes.headerDownIcon} />
                </div>
            </form>
        )
    }
}


export default withStyles(Styles)(Search)