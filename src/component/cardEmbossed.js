import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { pxToVh,pxToVw, Theme } from '../theme';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';

const styles =makeStyles(t=>({
	root: {
		background: Theme.boxColor,
		boxShadow: `10px 10px 14px 1px rgba(00,00,00,0.2)`,
		height: '100%',
		width: '100%',
		borderRadius: pxToVh(180),
		[t.breakpoints.down('xs')]:{ 
			borderRadius: pxToVh(70),
		}
	}, 
}))

const CardComponent = (props) => {
	const { id } = props;
const classes = styles()
	return (
		<Grid
		{...props}
			container
			justify="center"
			alignItems="center"
			className={classes.root}
			id={id ? id : Math.random()}>
			{props.children}
		</Grid>
	);
};


export default  (CardComponent);
