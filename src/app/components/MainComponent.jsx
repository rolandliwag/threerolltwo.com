import React from 'react';
import {connect} from 'react-redux';
import DocumentTitle from 'react-document-title';

function mapStateToProps(state, ownProps) {
    console.log(state);
    return {
        title: state.title,
        body: state.body
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {};
}

class MainComponent extends React.Component {
    render() {
        return <DocumentTitle title={this.props.title}>
            <div>{this.props.body}</div>
        </DocumentTitle>;
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(MainComponent);
