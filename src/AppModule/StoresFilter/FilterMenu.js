import React from 'react';

import { IconPay }      from './SVGIcons/IconPay';
import { IconCash }     from './SVGIcons/IconCash';
import { IconAddMoney } from './SVGIcons/IconAddMoney';


/** 
 * This is a "view" component use to render a button (option) of filter.
 * 
 * @author Ricardo Bermúdez Bermúdez
 * @since  7th Oct, 2019.
 * 
 * @param   {IconSVG} p.icon       Icon of button.
 * @param   {string}  p.string     Title of button.
 * @param   {object}  p.titleStyle Custom styles to button title.
 * @returns {React.Component}      Div container of button. 
 */
const FilterButton = ({
  icon, title, titleStyle, rightSeparator=true, click=(()=>{}), active=false
}) =>
  <React.Fragment>
    <div 
      className={`filter__btn-filter ${active?'--is-active':''}`}
      onClick={click}>
      {icon}
      <p className="text--note" style={titleStyle}>{title}</p>
    </div>
    {rightSeparator?<div className="filter__btn-sep"/>:null}
  </React.Fragment>;

/**
 * This component manage the filter to stores locations applied by the app user.
 * 
 * @author Ricardo Bermúdez Bermúdez
 * @since  7th Oct, 2019.
 * @since  8th Oct, 2019. Change the component function definition by class.
 */
export class FilterMenu extends React.Component {

  /**
   * constructor method. Set state of filter to manage the buttons state.
   * @since Oct 8th, 2019.
   * @param {...any} props Arguments to send to React.Component constructor.  
   */
  constructor(...props) {
    super(...props);
    this.state = {
      payLoc:  false,
      atmLoc:  false,
      addLoc:  false,
      promLoc: false,
    }
  }

  /**
   * Change state of filter button select by user. Generate the function that
   * will be use as component hook to the button.
   * 
   * @since Oct 8th, 2019
   * @param   {string} btnRef Key of button in state object to change the state.
   * @returns {Function} Component hook that use as action trigger.
   */
  toggleButton = btnRef => 
    () => this.setState({[btnRef]: !this.state[btnRef]});
  
  /**
   * Render the filter component.
   * 
   * @since Oct 8th, 2019.
   */
  render = () =>
    <div className="filter">
      <div className="filter__btn-drag"/>
      <p className="text--abstract">
        Selecciona la opción que quieres
        para ver el lugar más cercano.
      </p>
      <div className="filter__btn-bar">
        <FilterButton 
          icon  ={<IconPay width={33} height={32}/>}
          title ="Paga en Comercios"
          active={this.state.payLoc}
          click ={this.toggleButton('payLoc')}/>
        <FilterButton
          icon  ={<IconCash width={33} height={32}/>}
          title ="Retirar"
          active={this.state.atmLoc}
          click ={this.toggleButton('atmLoc')}/>
        <FilterButton
          icon  ={<IconAddMoney width={33} height={32}/>}
          title ="Agregar Fondos"
          active={this.state.addLoc}
          click ={this.toggleButton('addLoc')}/>
        <FilterButton
          icon  ={<IconPay width={33} height={32}/>}
          title ="Promociones"
          active={this.state.promLoc}
          click ={this.toggleButton('promLoc')}
          titleStyle={{width: 60}}
          rightSeparator={false}/>
      </div>
    </div>;
}