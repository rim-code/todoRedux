import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css'
class App extends Component {

  add=()=>{
    
    let  text=this.props.SetInput
    let  undo="text-normal"
  
       this.props.ADD_TODO(text,undo)
   
   }





  
  
  render() { 
    console.log(this.props.todos)
    return ( <section>
<div>   { /*Add */}
<input onChange={(e)=>this.props.CHANGE_TEXT(e)} ></input>
<span  onClick={this.add}>Add </span>


</div>

<div>   { /*List */}



{this.props.todos.map((el,i)=>{

return (
<p key={i}><span className={el.undo}>{el.text}</span>
<span  >Delete</span>
<span >Undo</span> </p>


)


}





)}



    </div> 



    </section> );
  }
}
 







const mapStateToProps = ({todos ,SetInput })=>{
  return{
    todos:todos,
    SetInput:SetInput
  }
    }





    const mapDispatchToProps=(dispatch)=>{
   
      return { 

      ADD_TODO:(text,undo)=>{
        dispatch({type:'ADD_TODO',text:text,undo:undo})
      
    
      },
      CHANGE_TEXT:(e)=>{
dispatch({type:'CHANGE_TEXT',value:e.target.value})

      },


      delete_Todo:(id)=>{dispatch({
type:'delete_Todo',id:id


      })},


      Undo_Todo:(id)=>{

dispatch({type:'Undo_Todo',id:id})

      }


      
  
      
      }}



export default connect(mapStateToProps, mapDispatchToProps)(App)
