import React from 'react';
import { withStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '../theme';
import Grid from '@material-ui/core/Grid';
import { Typography, IconButton } from '@material-ui/core';
import clsx from 'clsx' 
import Background from './background'

import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useEffect } from 'react';

const styles = makeStyles(t => ({
	root: {
		height: '100vh',
		width: '100vw',
		flexDirection: 'column',
		background: Theme.boxColor
	},
	title: {
		color: '#fff', fontWeight: 'bold', letterSpacing: 1, marginBottom: -80
	},
	Mtitle: {
		color: '#fff', fontWeight: 'bold', letterSpacing: 1, fontFamily: 'Wallman', paddingBottom: 30
	},
	Ctitle: {
		color: '#fff', fontWeight: 'bold', fontFamily: 'Wallman',
	},
	logo: {
		height: 200, width: 200
	},
	radius: {
		borderRadius: '20px',
	},
	rotate: {
		animation: ' Loader-keyframes-rotate-12 2s linear',
		animationIterationCount: 'infinite'
	},
	fade: {
		animation: '$fade linear 1s ',
		animationIterationCount: 1,
		animationFillMode: 'forwards',
	},
	depthBackground: {
		animation: '$load linear 1s ',
		animationIterationCount: 1,
		animationFillMode: 'forwards',
	},

	embossShadow: {
		animation: '$load2 linear 2s ',
		animationIterationCount: 1,
		animationFillMode: 'forwards',
	},
	'@keyframes load2': {
		'0%': {
			boxShadow: `4px 4px 7px 0px #C6CCE1,  -4px -4px 7px 0px white`,
		},
		'100%': {
			boxShadow: `0px 0px 0px 0px #C6CCE1,  -0px -0px 0px 0px white`,
		},
	},

	'@keyframes rotate': {
		'0%': {
			transform: `rotate(0deg)`,
		},
		'100%': {
			transform: `rotate(360deg)`,
		},
	},
	'@keyframes fade': {
		'0%': {
			color: `#c6cce100`,
		},
		'100%': {
			color: `#FFFFFF`,
		},
	},
}))


const	ComingSoon=()=> {
		const  classes =styles()
		useEffect(()=>{
			document.title="Qriocty Box"
		},[])
		return (<>
		
			<Grid container alignItems='center' style={{
				position: 'absolute', top: '0', left: 0,
				width: '100%',
				height: '100%',
				background: Theme.boxColor,
				opacity: .5
			}} >

			</Grid>
			<Grid container justify='center' style={{
				position: 'absolute', top: '0', left: 0,
				// background: Theme.boxColor,
				width: '100%',
				height: '100%',
				flexDirection:'column'
				
			}}>
			<Background/>
			<Grid container style={{position:'absolute'}}>
				<Typography variant='h1' className={clsx(classes.fade, classes.Ctitle)}>
					We are coming soon
				</Typography> </Grid>
				<Grid container style={{flexDirection:'column', position:'absolute',bottom:0,left:0}}>
				<Typography variant='h6' className={clsx(classes.fade, classes.Ctitle)}>
					Stay tuned for something amazing
				</Typography>
				<Grid>
					<IconButton  onClick={()=>{window.location='https://www.facebook.com/qrioctybox/'}}>
						<FacebookIcon style={{color:"#fff"}}/>
					</IconButton>
					<IconButton  onClick={()=>{window.location='https://www.youtube.com/channel/UCFI607_YfGNUmlw7E6HTu5g'}}>
						<YouTubeIcon style={{color:"#fff"}}/>
					</IconButton>
					<IconButton onClick={()=>{window.location='https://www.instagram.com/qrioctybox/'}}>
						<InstagramIcon style={{color:"#fff"}}/>
					</IconButton>
				</Grid>
				</Grid>

			</Grid>
		</>
		);
	}



export default  (ComingSoon);
