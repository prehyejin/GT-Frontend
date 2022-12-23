import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import imgSrc from '../../img/cards/043_Kesra_png.png';
import WaterLogoSrc from '../../img/Water_1.png';
import styled from 'styled-components';

const WaterLogo = styled.img`
  height: 30px;
  width: 30px;
`;

const CumProductionWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export default function FailityCard({ index, data /* see data tab */ }) {
  const imgSrc = '../../img/cards/' + String(data.imgSrc) + '.jpg';
  // const imgSrc = 'public/img/cards' + String(data.imgSrc) + '.jpg';
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          src={imgSrc}
          alt="facility1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {index} {data.name}
          </Typography>
          <TextWrapper>
            <div>
              <Typography variant="body2" color="text.secondary">
                농축수 순간 유량(LPM) {data.concentrated_rate}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                처리수 순간 유량(LPM) {data.treated_rate}
              </Typography>
            </div>
            <CumProductionWrapper>
              <WaterLogo src={WaterLogoSrc}></WaterLogo>
              <Typography variant="body1" color="text.secondary" marginTop={'5px'}>
                현 누적 식수 생산량 {data.cumulative_water_output} ton
              </Typography>
            </CumProductionWrapper>
          </TextWrapper>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
