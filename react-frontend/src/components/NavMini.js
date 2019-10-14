import  React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bars from './Images/bars.png';
import './NavMini.css'

class NavMini  extends Component {
    constructor(props){
    super(props)
        this.state = {
            showMenu: false 
        }

        this.showMenu = this.showMenu.bind(this)
        this.closeMenu = this.closeMenu.bind(this)
    }

  showMenu(event){
       event.preventDefault();

       this.setState({
           showMenu: true
       },
       () => {
           document.addEventListener('click', this.closeMenu);
       });
   }

   closeMenu(){
       this.setState({
           showMenu: false 
       }, () => {
           document.removeEventListener('click', this.closeMenu);
       })
   }

    render(){
        return(
            <div id="Navigation-mini"> 
            <button  onClick={this.showMenu} className="button-nav">
                 <img className="Mini-nav" src={bars} alt="nav-icon"/>
            </button>
            {
            this.state.showMenu
                ? (
                <div className="Navmenu">
                    <Link className="NavLink-mini" to='/'>Home</Link>
                    <Link className="NavLink-mini" to='/About'>About</Link>
                    <Link className="NavLink-mini" to='/Blog'>Blog</Link>
                    <Link className="NavLink-mini" to='/Contact'>Contact</Link>
                </div>
                )
                : (
                    null
                )
            }

         </div>
        )
    }
}

export default NavMini