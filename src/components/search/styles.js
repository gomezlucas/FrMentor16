
import styled from 'styled-components'

export const Form = styled.form`
padding: 3rem 4rem 1rem 4rem;
display: flex;
justify-content: space-between;
`

export const Input = styled.input`
background: ${props => props.theme.backgroundSecond};
width: 100%;
border: none;
padding: 1rem 1rem 1rem 4rem;
color: ${props => props.theme.color};
outline: none;
box-shadow: 1px 1px 10px hsla(200, 15%, 8%, 0.322);
letter-spacing: 0.1rem;
border-radius: 5px;
 
`


export const Select = styled.select`
     background: ${props => props.theme.backgroundSecond};
    outline: none;
    padding: 1rem 4rem 1rem 2rem;
    letter-spacing: 0.1rem;
    color: ${props => props.theme.color};
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: relative;
    border-radius: 5px;
    opacity: 0.5;
    box-shadow: 1px 1px 10px hsla(200, 15%, 8%, 0.322);
    @media (max-width:959px){
        width: 100%;
    }
   
`

const styles = theme => (

    {

        searchContainer: {
            padding: "3rem 4rem 1rem 4rem",
            display: "flex",
            justifyContent: "space-between",
            [theme.breakpoints.down('sm')]: {
                flexDirection: "column",
            }
        },
        headerFormInput: {
            width: "40%",
            position: "relative",
            [theme.breakpoints.down('sm')]: {
                width: "100%",
                marginBottom: "2rem",
            }
        },
        headerSearchIcon: {
            position: "absolute",
            top: "7px",
            left: "15px",
            fontSize: "2rem",
        },
        headerFormSelect: {
            position: "relative",
            display: "block",
        },


        headerDownIcon: {
            position: "absolute",
            top: "12px",
            right: "16px",
            zIndex: "-1",
        }

    })


export default styles
