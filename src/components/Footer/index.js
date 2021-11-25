import React from 'react'
import { FooterContainer,
    FooterLink, 
    FooterLinkItems,
    FooterLinksTitle,
    FooterLinksWrapper,
    FooterLinksContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    
} from './FooterElements'

import {
    FaFacebook,
    FaInstagram,
    FaTwitter
} from 'react-icons/fa'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinksTitle> About Us </FooterLinksTitle>
                            
                            <FooterLink to="/signin">
                                How it works 
                            </FooterLink>
                            <FooterLink to="/signin">
                                Testimonials 
                            </FooterLink>
                            <FooterLink to="/signin">
                                Carrers
                            </FooterLink>
                            <FooterLink to="/signin">
                                Investors 
                            </FooterLink>
                            <FooterLink to="/signin">
                                Terms of Service
                            </FooterLink>
                        


                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinksTitle> Conatact Us </FooterLinksTitle>
                            
                            <FooterLink to="/signin">
        Contact                            </FooterLink>
                            <FooterLink to="/signin">
                                Support  
                            </FooterLink>
                            <FooterLink to="/signin">
                                Destinations
                            </FooterLink>
                            <FooterLink to="/signin">
                                Sponsorships 
                            </FooterLink>
                           
                        


                    </FooterLinkItems>
                </FooterLinksWrapper>


                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinksTitle> Videos </FooterLinksTitle>
                            
                            <FooterLink to="/signin">
                               Submit a Video 
                            </FooterLink>
                            <FooterLink to="/signin">
                                Ambassadors 
                            </FooterLink>
                            <FooterLink to="/signin">
                                Agency
                            </FooterLink>
                            <FooterLink to="/signin">
                                Influencer 
                            </FooterLink>
                            
                        


                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinksTitle> Social </FooterLinksTitle>
                            
                            <FooterLink to="/signin">
                               Instagram
                            </FooterLink>
                            <FooterLink to="/signin">
                                Facebook 
                            </FooterLink>
                            <FooterLink to="/signin">
                                Youtube
                            </FooterLink>
                            <FooterLink to="/signin">
                                Twitter 
                            </FooterLink>
                            
                        


                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                    Dablo
                    </SocialLogo>
                    <WebsiteRights> © 2020 {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>

                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instgram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
