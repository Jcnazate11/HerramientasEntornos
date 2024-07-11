import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import Instagram from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        bgcolor: 'black', 
        p: 3 
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, color: 'white' }}>
        ComidaEcu.com
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <IconButton sx={{ color: 'white' }} href="https://www.facebook.com" target="_blank">
          <Facebook />
        </IconButton>
        <IconButton sx={{ color: 'white' }} href="https://www.twitter.com" target="_blank">
          <Twitter />
        </IconButton>
        <IconButton sx={{ color: 'white' }} href="https://www.instagram.com" target="_blank">
          <Instagram />
        </IconButton>
      </Box>
      <Typography variant="body2" sx={{ color: 'white' }}>
        &copy; 2024 MyApp, Jeanhela Nazate, Cristhopher Villamarin, Johan Romo.
      </Typography>
    </Box>
  );
}

export default Footer;
