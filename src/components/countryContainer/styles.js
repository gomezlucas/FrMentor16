
import styled from 'styled-components'


export const CountryBackBtn = styled.button`
    background: ${props => props.theme.background};
    border: none;
    padding: 0.5rem 2rem 0.5rem 3rem;
    color: ${props => props.theme.color};
    outline: none;
    box-shadow: 1px 1px 10px hsla(200, 15%, 8%, 0.322);
    border-radius: 5px;
    margin: 4rem 3rem 0rem 3rem;
    position: relative;
    cursor: pointer;
     @media (max-width: 500px){
        margin: 4rem 3rem 2rem 1rem;

    }
    `

const styles = theme => ({
    root: {
        backgroundColor: 'red',
        color: 'blue',
    },
    countryContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "3rem",
        [theme.breakpoints.down('md')]: {
            flexDirection: "column",
        },
        [theme.breakpoints.down('xs')]: {
            margin: "1rem",

        },
    },
    countryFlag: {
        width: "40%",
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            paddingBottom: "2rem",
        },
        "& img": {
            width: "100%",
        },
    },
    countryInfo: {
        width: "50%",
        [theme.breakpoints.down('md')]: {
            width: "100%",
        },
    },
    countryInfoName: {
        marginBottom: "1.2rem",
        fontSize: "2rem",
     },
    countryLists: {
        display: "flex",
        justifyContent: "space-between",
        paddingRight: "10rem",
        paddingBottom: "1rem",
        [theme.breakpoints.down('md')]: {
            flexDirection: "column",
            paddingRight:"0rem",
            justifyContent: 'flex-start',
        },
    },
    countryInfoData1: {
        listStyleType: "none",
        lineHeight: "2",
     },
    countryInfoData2: {
        listStyleType: "none",
        lineHeight: "2",
     },


    arrowBack: {
        position: "absolute",
        top: "8px",
        left: "24px",
        fontSize: "15px",
    },
    countryInfoBorders: {
        display: "flex",
        alignItems: "center",
        textAlign: "start",
         [theme.breakpoints.down('md')]: {
            paddingTop:"2rem",
            flexDirection: "column",
            alignItems: "start"
        },
    },
    countryBorder: {
        border: "none",
        padding: "0.4rem 0.9rem",
        outline: "none",
        boxShadow: "1px 1px 10px hsla(200, 15%, 8%, 0.322)",
        letterSpacing: "0.1rem",
        borderRadius: "5px",
        margin: "0 0.4rem",
        marginBottom: "1rem",
         cursor: "pointer",
        fontSize: "0.8rem",

    },
    borderContainer: {
        paddingTop: "1rem",
        display: "flex",
        flexWrap: "wrap",
    },
    borderTitle: {
        fontSize: "1rem",
        width: "35%",

    },



})

export default styles
