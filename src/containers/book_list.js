import React, {Component} from'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{
    
    renderList(){
        return this.props.books.map(book=>{
            return (
                <li className="list-group-item" 
                    key={book.title}
                    onClick={()=>this.props.selectBook(book)}>
                        {book.title}
                </li>
            );
        });
    }

    render(){
        return (
            <ul className="list-group col-sm-4">
            {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state){
    return {books:state.books}
}

//Anything returned from this function will end up as props
//on the booklist containers
function mapDispatchToProps(dispatch){
    //when ever select book is called, the rsult should be passed to all
    //our reducers
    return bindActionCreators({selectBook:selectBook},dispatch)
}

//promote BookList from a component to a container
export default connect(mapStateToProps,mapDispatchToProps)(BookList)