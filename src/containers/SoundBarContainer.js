import React, { Component } from "react";
import SoundBar from '../components/SoundBar';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        paused: state.app.paused
    }
}

export default connect(mapStateToProps, null)(SoundBar);