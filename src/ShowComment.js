import React,{Component } from 'react';
import {connect} from 'react-redux';
import Comment from './Comment'
import EditComponent from './EditComponent'
import './App.css';

class ShowComment extends Component {
    render() {
        return (
          <div class="show">
            <h1>Show All Diary</h1>
            <div class="row">
              {this.props.comments.map((comment) => (
                <div class="column">
                  <div class="card">
                    <div key = {comment.id}>
                    {comment.editing ? <EditComponent comment = {comment} key = {comment.id} /> :
                    <Comment key={comment.id} comment ={comment} />}
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        )
      }

}

const mapStateToProps = (state) => {
    return {
        comments: state
    }
}
export default connect(mapStateToProps)(ShowComment);
