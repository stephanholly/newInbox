import React, {Component} from 'react'

class Toolbar extends Component {
  render() {
    return (
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">{this.props.unreadCount()}</span>
            unread messages
          </p>

          <button className="btn btn-default" onClick={e => this.props.boxClick()}>
            <i className={ this.props.boxChange()}></i>
          </button>

          <button className="btn btn-defualt" onClick={e => this.props.clickRead()}>
            Mark As Read
          </button>

          <button className="btn btn-defualt" onClick={e => this.props.clickUnread()}>
            Mark As Unread
          </button>

          <select className="form-control label-select" onChange={e => this.props.labelAdd(e.target.value)}>
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select className="form-control label-select" onChange={e => this.props.labelDelete(e.target.value)}>
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button className="btn btn-default" onClick={e => this.props.messageDelete()}>
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Toolbar
