import styled from "styled-components";
import { Text } from "../common";

export const FooterWrap = styled.footer`
width:100%;
height:100px;
display:flex;
justify-content:center;
align-items:center;
gap: 50px;
background:${({theme})=>theme.pallete.grey7}
`
export const Field = styled(Text)`
display:flex;
color:${({theme})=>theme.pallete.white};
gap:15px;
`
export const Link = styled.button`
background:none;
border:none;
`
export const Engineer = styled(Text)`
color:${({theme})=>theme.pallete.white}
`