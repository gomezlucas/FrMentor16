import styled from 'styled-components'


export const CountriesContainerDiv = styled.div`
padding: 2rem 4rem 2rem 4rem;
display: flex;
flex-direction: row;
justify-content: space-between;
align-content: center;
flex-wrap: wrap;
@media (max-width:693px){
    justify-content: center;
};
`


/*const styles = theme => ({
    root: {
        backgroundColor: 'red',
        color: 'blue',
    },
    countriesContainer: {
        padding: "2rem 4rem 2rem 4rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        flexWrap: "wrap",
        [theme.breakpoints.down('sm')]: {
           justifyContent: "center",
        }
    }

})


export default styles*/