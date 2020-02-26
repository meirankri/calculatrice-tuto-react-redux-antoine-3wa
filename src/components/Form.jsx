import React from 'react'
import {connect} from 'react-redux'
import { setDragon,addDragon} from'../actions/actions'
import Message from './Message'

class Form extends React.Component{

    

    handleChange =(e) =>{
       const {value} = e.target
        this.props.setDragon(value)
    }
   
    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.addDragon()

    }

    render(){
        const {dragon} = this.props
        
        return (
            <div>
                
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">add dragon</label>
                        <input type="text" value={dragon} onChange={this.handleChange} />
                        
                    </div>
                    {this.props.errorExist && <p className="alert alert-danger">{this.props.errorExist}</p> }
                    {this.props.message.text &&  <Message text={this.props.message.text} status={this.props.message.status} /> }
                    <button type="submit" className="btn btn-primary">Add dragon</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state=>{
    return {
      ...state
    }
  }
  const mapDispatchToProps = dispatch =>{
    return {
        addDragon : () => dispatch(addDragon()),
        setDragon: dragon =>dispatch(setDragon(dragon))
    }
   }

export default connect(mapStateToProps,mapDispatchToProps)(Form)