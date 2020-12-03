
import React from 'react'

class Greet extends React.Component{

  //Component Will Unmount: Método que se activa cuando el componente en el que se está llamando deja de aparecer en mi página, es decir, cuando se desmonta

  componentWillUnmount(){
    console.log('Componente Greet desmontado')
  }

  render(){
    return(
      <div>
        <h2>Soy Greet {this.props.counter}</h2>
      </div>
    )
  }

}

export default Greet