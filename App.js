import React from 'react';
import './App.css'
import axios from 'axios';

class App extends React.Component {

   state = {
    wiring: []
   }
  renderState() {
    return this.state.wiring.map((wiring)=>{
      return(
        <ul className='wiring' >
       <li key = {wiring.id}> 
      <li >{wiring.email }</li>
     <li >{wiring.subject}</li> 
     <li>{wiring.username}</li> 
      <li>{wiring.message}</li>
       </li> 
       </ul>
      
      )
    })
  }
  
  async componentDidMount() {
      try {
        const response= await axios.get('https://wiring-8f50d-default-rtdb.firebaseio.com/messages.json')
        const wiring = []
        Object.values(response.data).forEach((values)=> {
          wiring.push({
            email:values.email,
            message: values.subject,
            subject: values.username,
            username: values.message               
          })
          this.setState({
            wiring
            
          })
        }) 
      }catch(e) {
console.log(e)
      }
   
    }  

  

  render() {
  
  return (
    <div >
       <p><h1  style={{ marginTop: '10%', marginLeft: '43%', position: 'absolute', zIndex: 100}} >Панель Администратора</h1></p> 
      <form className="App" >
       
       
     <div> <p> {this.renderState()}</p> </div>
   
     </form>
      
   
      
    </div>
  )
}
  ;
}

export default App;
