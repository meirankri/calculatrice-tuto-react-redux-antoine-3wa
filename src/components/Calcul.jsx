import React from 'react'
import {connect} from 'react-redux'

class Calcul extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            number1: "",
            number2 : ""
        }
    }

    handleChange =(e) =>{
        const {name, value} = e.target
        this.props.addNumber(value, name)

        //if(name === 'number2') this.props.handleChange2(value)

    }
    calculation = (e)=>{
        const name = e.target.name
        
        if(name === "add") this.props.add()
        if(name === "multiple") this.props.multiple()
        if(name === "reset") this.props.reset()

    }
    submit = (e) =>{
        e.preventDefault()
    }

    render(){
        
        return (
            <div>
                <form onSubmit={this.submit}>
                    <label htmlFor="">Premier nombre</label>
                    <input type="text" name="number1" value={this.props.number1}  onChange={this.handleChange} />
                    <label htmlFor="">deuxieme nombre</label>
                    <input type="text" name="number2"  value={this.props.number2}   onChange={this.handleChange} />
                    <input onClick={this.calculation} name="add" type="submit" value="add" />
                    <input onClick={this.calculation} name="multiple" type="submit" value="multiple" />
                    <input onClick={this.calculation} name="reset" type="submit" value="reset" />
                </form>
                <p>resultat: {this.props.result} </p>
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
  
  //function qui va prendre en parametre le message et qui va appeler 
  //la function disptach de redux pour modifier le store avec la nouvelle valeur
  const mapDispatchToProps = dispatch =>{
    return {
      add : () => dispatch({
        type: 'ADD'
      }),
      reset : () => dispatch({
        type: 'RESET'
      }),
      multiple : () => dispatch({
        type: 'MULTIPLE'
      }),
     
      addNumber : (number, name) =>dispatch({
        type: 'HANDLE_CHANGE',
        number: number,
        name: name
      })
      
    }
    
  }

export default connect(mapStateToProps,mapDispatchToProps)(Calcul)