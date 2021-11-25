import styled from "styled-components"



export const ServicesContainer = styled.div`
height: 800px;
display: flex;
flex-direction: column;
justify-contennt: center;
align-items: center;
background: #010606;

@media screen and (max-width: 768px){
    height: 1100px;

}


@media screen and (max-width: 480px){
    height: 1300px;

}
`

export const ServicesWrapper = styled.div`

display: grid;
max-width: 1000px;
margin: auto;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
color:#010606;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;

}
`

export const ServicesCard = styled.div`
background: #fff;
display: column;
justify-content: flex-start;
align-items: center;
border-radius:10px;
max-height:340px;
padding:30px;
box-shadow:0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2 ease-in-out;

&:hover{
transform: scale(1.02);
transition: all 0.2 ease-in-out;
cursor: pointer;

}
`

export const ServicesIcon = styled.img`
height: 160px;
width:  160px;
margin-bottom: 10px;
align-item:center;


@media screen and (max-width: 768px){

margin: 0 0 0 30%;

}

`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-top:60px;
    margin-bottom: 64px;

@media screen and (max-width: 480px){

font-size:2rem;

}

`
export const ServicesH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
text-align:center;
`

export const ServicesP = styled.p`

font-size:1rem;
text-align:center;

`

