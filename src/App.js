import React from 'react';
import './App.css';
import Greet from './components/Greet'

import Projects from './components/Projects'
import Curriculum from './components/Curriculum'
import AboutMe from './components/AboutMe'

import { Link, Route, Switch, Redirect } from 'react-router-dom'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      counter: 0,
      showGreet: true,
      dataCards: '',
      dataYesNo: '',
      admin: false
    }

    this.print = ()=>{
      console.log('Estoy pintando en la consola')
    }

    // console.log('CONSTRUCTOR')
  }

  //Component Did Mount: Método que se activa solo una vez tras el primer renderizado (y nunca más)


  // componentDidMount(){
    
    // fetch('https://yesno.wtf/api')
    // .then((result)=>{
    //   return result.json()
    // })
    // .then((data)=>{
    //   this.setState({dataYesNo: data})
    // })


    // fetch('https://api.magicthegathering.io/v1/cards')
    // .then((result)=>{
    //   return result.json()
    // })
    // .then((data)=>{
    //   this.setState({dataCards: data})
    // })
  // }

  //Component Did update: Método que se activa cada vez que se detecta un cambio en mi página (aka cuando se sobreescribe el state)

  // componentDidUpdate(prevProps, prevState){
  //   console.log('Component Did UPDATE')
  //   console.log(prevState)
  // }

  render(){
    console.log('RENDER')
    return (
      <div className="App">
        {/* <h1>{this.state.counter}</h1>
        <button onClick={()=>this.setState({counter: 0})}>Add 1 to counter</button>
        {this.state.showGreet && <Greet counter={this.state.counter}/>}
        <button onClick={()=>this.setState({showGreet: !this.state.showGreet})}>Show/Hide Greet</button> */}
        {/* {this.state.dataFromAPI ? 'API CARGADA' : 'Loading'} */}


        <Link to="/aboutMe">About Me</Link>
        <br />
        <Link to="/curriculum">Curriculum</Link>
        <br />
        <Link to="/projects">Projects</Link>

        <Switch>

          {/* Ruta que renderiza el componente AboutMe. Esta forma de crear routes no parece que tenga ninguna utilidad por encima de las otras dos formas. Es importante que sepáis que se pueden crear rutas de esta forma, pero utilizando las otras dos tienes más funcionalidades que esta no te da */}
          <Route path="/aboutMe">
            <AboutMe />
          </Route>

          {/* Ruta que revisa si eres admin. En el caso de que lo seas, te va a renderizar el componente de Curriculum. Si no lo eres, te va a hacer un redirect a '/aboutMe' */}
          <Route path="/curriculum" render={() => (
            !this.state.admin
            ? <Redirect to="/aboutMe"/> 
            : <Curriculum />
          )}/>
 
          {/* Ruta que te renderiza el componente de Projects */}
          <Route path="/projects/:id" component={Projects} />


        </Switch>


        <h1>App</h1>
        {/* <AboutMe />
        <Curriculum />
        <Projects /> */}
      </div>
    );    
  }
}

export default App;


//<Router> <App /> </Router>  --> Conecta la interfaz del usuario con la URL.
//<Link>  --> Equivalente al "a" de HTML. Sirve para poner enlaces.
//<Route> --> Renderizar una interfaz dependiendo de la URL
//<Switch> --> Envoltorio de las rutas (Routes) para que te devuelva solo la primera ruta que coincida con el url
// <Redirect> --> Redirecciona a un enlace



//TRES FORMAS DE CREAR ROUTES

//1. Envolviendo el componente entre el componente Route. Este es útil cuando quieres hacer un redirect con condicional, aunque no es la mejor forma de hacerlo.

  // {/* <Route path="/curriculum" >
  //   {this.state.admin ? <Curriculum /> : <Redirect to="/aboutMe" />}
  // </Route> */}


//2. Utilizando la propiedad de component. Este es necesario para pasar params por el url.
// <Route path="/projects/:id" component={Projects} />


//3. Utilizano la propiedad de render. Este es útil cuando quires llevar a cabo más funcionalidades a parte de la de renderizar un componente, como por ejemplo, actualizar también el estado, o realizar algún tipo de condicional.

//<Route path="/projects" render={
//  ()=> {
//    <Projects />
//    this.setState({name: 'Jaime'})
//  }
//}/>