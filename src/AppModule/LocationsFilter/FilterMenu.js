import React from 'react';
import { Swipeable }    from 'react-swipeable';

import { FilterButton } from './FilterButton'
import { IconPay }      from './FilterSVGIcons/IconPay';
import { IconCash }     from './FilterSVGIcons/IconCash';
import { IconAddMoney } from './FilterSVGIcons/IconAddMoney';


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
    this.state = { active:false }
  }
  
  /**
   * Active the filter menu (menu is up) by flag active.
   */
  upMenu   = () => this.setState({active: true});

  /**
   * Inactive the filter menu (menu is down) by flag active.
   */
  downMenu = () => this.setState({active: false});

  /**
   * Render the filter component.
   * 
   * @since Oct 8th, 2019.
   */
  render = () =>
    <Swipeable onSwipedDown={()=>this.downMenu()} onSwipedUp={()=>this.upMenu()}>
      <div className={`filter ${this.state.active?'--is-active':''}`}>
        <div className="filter__btn-drag"/>
        <p className="text--abstract">
          Selecciona la opción que quieres
          para ver el lugar más cercano.
        </p>
        <div className="filter__btn-bar">
          <FilterButton 
            icon  ={<IconPay/>}
            title ="Paga en Comercios"/>
          <FilterButton
            icon  ={<IconCash/>}
            title ="Retirar"/>
          <FilterButton
            icon  ={<IconAddMoney/>}
            title ="Agregar Fondos"/>
          <FilterButton
            icon  ={<IconPay/>}
            title ="Promociones"
            titleStyle={{width: 60}}
            separator={false}/>
        </div>
      </div>
    </Swipeable>;
}