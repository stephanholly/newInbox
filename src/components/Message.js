import React, {Component} from 'react'

class Message extends Component {

  render() {
    return (
      <div className={ this.props.messageType(this.props.message.id) } onClick={ (e) => this.props.readMessage(this.props.message.id,e)}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" checked={this.props.message.selected ? true: false} onClick={ (e) => this.props.clicked(this.props.message.id)} />
            </div>
            <div className="col-xs-2">
              <i className={ this.props.message.starred ? "star fa fa-star" : "star fa fa-star-o"} onClick={ (e) => this.props.star(this.props.message.id)} ></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
        { this.props.message.labels.map((label, i) => <span key={ i } className="label label-warning">{ label }</span>) }
          <a href="#">
            {this.props.message.subject}
          </a>
        </div>
      </div>
    );
  }
}




export default Message
