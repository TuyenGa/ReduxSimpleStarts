import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveBook extends Component{
    render(){
        return (
            <div className="col-sm-8">
                <h1>{this.props.active.title}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    active: state.activeBook
});

export default connect(mapStateToProps)(ActiveBook);