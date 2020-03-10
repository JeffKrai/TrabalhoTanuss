import React from 'react';
//interface de programação para documentos HTML e XML
import ReactDOM from 'react-dom';
//Importando arquivos de Deatil
import Deatil from './Deatil';
import 'bootstrap/dist/css/bootstrap.css'

//Passando de Função para class
class App extends  React.Component {  
      
      VetorJogadores = [
            {
                  nome : 'Alissa',
                  pais : 'Goianesia',
                  time : 'Deus'
                  },
            {
                  nome : 'Jefferson',
                  pais : 'Jaragua',
                  time : 'Cristo'
                  },
            {
                  nome : 'Italo',
                  pais : 'Anapolis',
                  time : 'Jesus'
                  }
      ]


      constructor(props){
            //Busca na clase pai o props
            super(props);

            console.log(this);

            this.state = {
                  indice: 0
            }

      }

      incrementarIndice = (event) => {
        if (this.state.indice<=this.VetorJogadores.length-2)
        {
            this.setState({
                  indice: this.state.indice+1
            })
        }
      }

      decrementarIndice = (event) => {
            
        if (this.state.indice!==0) {
            this.setState({
                      indice: this.state.indice-1  
            })
        }
        
      }
      
      render(){
             return(
                   <div className="container">

                        <br/>
                        <Deatil nome="Jefferson" VetorJogadores={this.VetorJogadores[this.state.indice]}>
                        </Deatil>
                        <br/>

                        <button type="button" className ="btn btn-primary" onClick = {this.decrementarIndice} >Anterior</button>
                            
                        <button type="button" className ="btn btn-primary"  onClick = {this.incrementarIndice} >Proximo</button>

                   </div>    
            );      
      }
}

ReactDOM.render(<App/>, document.querySelector('#root'))
