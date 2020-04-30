import React,{Component } from 'react';
import {connect} from 'react-redux';

class CommentForm extends Component {
    handleSubmit = (e) =>{
        e.preventDefault();
        const name = this.getName.value; //ดึงค่าจากตัวแปร getName
        const message = this.getMessage.value; //ดึงค่าจากตัวแปร getMessage
        //Object
        const data = {
            id: new Date(),
            name,
            message,
            editing:false
        }
        this.props.dispatch({
            type:'ADD_COMMENT',
            data
        })

        this.getName.value=""
        this.getMessage.value=""
        //console.log(data)
    }

    render() {
        return (
          <div>
            <h1>Add New Diary</h1>
            <form onSubmit={this.handleSubmit}>
                <input required type="text" placeholder="ป้อนชื่อ" ref={(input) => this.getName = input} /><br /><br />
                <textarea required rows="5" cols="50" placeholder="ใส่เนื้อหา" ref={(input) => this.getMessage = input} /><br /><br />
                <button>Add</button>
            </form>
          </div>
        )
      }

}

export default connect()(CommentForm);
