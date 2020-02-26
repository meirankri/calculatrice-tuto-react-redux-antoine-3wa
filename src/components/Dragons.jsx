import React from 'react'
import {connect} from 'react-redux'
import Form from './Form'
import { deleteDragon,reverseDragon} from'../actions/actions'

class Dragons extends React.Component{


    delete = (dragon) =>{
        this.props.deleteDragon(dragon)
    }
    reverse= () =>{
        this.props.reverseDragon()
    }
    render(){
        const {Dragons} = this.props
        return (
            <div>
                <h1>liste dragons</h1>
                <div className="container">
                    <div className="row">
                    <Form/>

                    <ul className="list-group">
                        {Dragons && Dragons.map((dragon,i)=>{
                            return <li className="list-group-item" key={i}> 
                                    <button className="btn btn-danger" onClick={() => this.delete(dragon)}>delete</button> {dragon} 
                             </li>
                        }) }
                        
                    </ul>
                    <button className="btn btn-primary" onClick={this.reverse}> reverse</button>
                    </div>
                </div>
            </div>
        )
    }
}


//la function qui lie le state en premier parametre
//qui met le state dans les props, on peut donc l'atteindre grace a props
const mapStateToProps = state=>{
    return {
      ...state
    }
  }
  const mapDispatchToProps = dispatch =>{
    return {
        deleteDragon: dragon =>dispatch(deleteDragon(dragon)),
        reverseDragon: () =>dispatch(reverseDragon())

    }
   }
  
export default connect(mapStateToProps,mapDispatchToProps)(Dragons)