import React from "react";
import Particles from "react-particles-js";
import { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import data from './particales.json'
import { Theme } from "../theme";
const style = {
  bg:{
  height: '100%',
    width: '100%',
    background:Theme.boxColor,
    position: 'fixed',
    left: 0,
    top: 0,
    // zIndex: '-100'
  }
};

class background extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Particles
        className={classes.bg}
        params={data}
      />
    );
  }
}

export default withStyles(style)(background);
