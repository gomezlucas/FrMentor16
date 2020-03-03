import styled from 'styled-components'

export const Card = styled.div`
    color: color: ${props => props.theme.color};
    max-width: 250px;
    background: ${props => props.theme.backgroundSecond};
    border: none;
    border-radius: 8px;
    margin: 1.5rem 1.5rem 1.5rem 0;
    box-shadow: 1px 1px 10px hsla(200, 15%, 8%, 0.322);
    overflow: hidden;
     cursor: pointer; 
   
`



const styles = theme => ({

    cardImage: {
        width: "100%",
        height: "125px",
        transition: "all 0.7s linear",
        "& img ": {
            width: "100%",
            height: "100%",
            borderTopRightRadius: "8px",
            borderTopLeftRadius: "8px",
            objectFit: "cover",
        },
        "&:hover": {
            opacity: "0.4",
            transform: "scale(1.1)",
        },
    },
    cardInfo: {
        padding: "1.5rem",
        "& p": {
            lineHeight: "2",
            fontWeight: "600",
            fontSize: "14px",
        },
    },
    cardName: {
        marginBottom: "1rem",
        fontWeight: "600",
    },


})


export default styles