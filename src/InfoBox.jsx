import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SunnyIcon from '@mui/icons-material/Sunny';
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./infoBox.css"

export default function InfoBox({info}) {
  let RAIN_URL = 'https://media.istockphoto.com/id/498063665/photo/rainy-landscape.jpg?s=1024x1024&w=is&k=20&c=JmmkAKBNVz2QC2YaXGl8lLvYQYrn6SYXt_FPtN-8JUc=';
  let SUMMER_URL = "https://images.unsplash.com/photo-1531782448421-d9aecfeba579?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let WINTER_URL = "https://plus.unsplash.com/premium_photo-1669226800983-8a1847e0b246?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2ludGVyJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  return (
    <div>
        <div className='infoBox'>
            <Card sx={{ maxWidth: 345, width : 320 }}>
            <CardMedia
                sx={{ height: 140 }}
                image = {info.humidity > 80 ? RAIN_URL : info.temp > 20 ? SUMMER_URL : WINTER_URL}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" >
                {info.city}{info.humidity > 80 ? <CloudySnowingIcon /> : info.temp > 20 ? <SunnyIcon /> : <AcUnitIcon />}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                <p>temprature = {info.temp}&deg;C</p>
                <p>feels_like = {info.feels_like}&deg;C</p>
                <p>humidity = {info.humidity}</p>
                <p>Maximum Temprature = {info.tempMax}&deg;C</p>
                <p>Minimun Temprature  = {info.tempMin}&deg;C</p>
                <p>description = {info.description}</p>
                </Typography>
            </CardContent>
            </Card>
         </div>
    </div>
  )
}
