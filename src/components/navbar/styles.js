
import styled from 'styled-components'


export const NavbarContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
list-style-type: none;
padding: 1.5rem 4rem 1.5rem 4rem;
background: ${props => props.theme.backgroundSecond};
color: ${props =>  props.theme.color};
box-shadow: ${props =>props.theme.boxShadow};
 @media (max-width:500px){
    padding: 1.5rem 1rem 1.5rem 1rem;
}
     }`;


export const ButtonNavBar = styled.div`
border: none;
background: transparent;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
color: ${props => props.theme.color};
outline: none;
cursor: pointer;
 `


export const ButtonNavInfo = styled.h3`
font-size: 0.8rem;
padding-left: 0.7rem;
font-weight: 300;
font-family: "Nunito Sans", sans-serif; 
`

/*const styles = theme => ({
    root: {
        backgroundColor: 'red',
        color: 'blue',
    },
    navbarContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        listStyleType: "none",
        padding: "1.5rem 4rem 1.5rem 4rem",
        background: "var(--darkBlue)",
        color: "white",
        transition: "var(--theme-change-timing)",
        boxShadow: "1px 1px 1px hsla(200, 15%, 8%, 0.459)",
        [theme.breakpoints.down('xs')]: {
            padding: "1.5rem 1rem 1.5rem 1rem",
         },
        "& lightmode":{
            background: "white",
        }
    },
    navbarButton: {
        border: "none!important",
        background: "var(--darkBlue)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        outline: "none",
        cursor: "pointer",
        transition: "var(--theme-change-timing)",
    },
    navbarButtonInfo: {
        fontSize: "1rem",
        paddingLeft: "0.7rem",
        fontWeight: "300",
        fontFamily: ["Nunito Sans", "sans-serif"],
    },
    NavbarMoon: {
        transform: "rotate(135deg)"
    }

});

export default styles*/