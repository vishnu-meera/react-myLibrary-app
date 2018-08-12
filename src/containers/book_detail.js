import React, {Component} from'react';
import {connect} from 'react-redux';


class BookDetail extends Component{

    renderActiveBook(){
        if(!this.props.book)
            return <div>No book selected ...</div>
        else
            return <div>{this.props.book.title}</div>
    }

    render(){
        return (
            <div className="list-group col-sm-8">
                {this.renderActiveBook()}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {book:state.activeBook}
}

//promote BookList from a component to a container
export default connect(mapStateToProps)(BookDetail)