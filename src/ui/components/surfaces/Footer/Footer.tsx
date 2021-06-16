import React from 'react';
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  AppList,
} from './Footer.style';
import { Typography, Box } from '@material-ui/core';

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: '400px' }}>
          <FooterTitle>Quem Somos</FooterTitle>
          <Typography variant={'body2'} sx={{ mt: 2 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            dolores soluta placeat molestias, possimus culpa, unde laboriosam
            ipsam reprehenderit quam aliquam ex corporis nemo, sit eos quod modi
            cum. Quibusdam.
          </Typography>
        </Box>
        <div>
          <FooterTitle>Baixe nosso Aplicativo</FooterTitle>
          <AppList>
            <li>
              <a href={'/'} target={'_blank'} rel={'noopener noreferrer'}>
                <img src={'/img/logos/app-store.png'} alt={'App Store'} />;
              </a>
            </li>
            <li>
              <a href={'/'} target={'_blank'} rel={'noopener noreferrer'}>
                <img src={'/img/logos/google-play.png'} alt={'Google Play'} />;
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
