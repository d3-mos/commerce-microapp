import {fromLonLat}  from 'ol/proj';
import Feature       from 'ol/Feature';
import Point         from 'ol/geom/Point';
import {Icon, Style} from 'ol/style';


/**
 * Build a new Icon Feature to show in OL Markers Layer, in other words,
 * create a new marker.
 * 
 * @author  Ricardo Bermudez Bermudez
 * @since   Oct 4th, 2019.
 * @extends {ol/Feature}
 */
export class Marker extends Feature {

    /**
     * Constructor of marker.
     * 
     * @param {number}     lat   Latitude. 
     * @param {number}     lng   Longitude.
     * @param {Function}   click Function will run when user press marker.
     * @this  {ol/Feature} New vector feature (Marker).
     */
    constructor(lat, lng, click, src='icon.png') {
      super();
      this.setGeometry(new Point(fromLonLat([lat, lng])));
      this.setStyle(new Style({
        image: new Icon({
          anchor: [46, 46],
          anchorXUnits: 'pixels',
          anchorYUnits: 'pixels',
          src
        })
      }));
      this.on('click', () => (click || (()=>{}))());
    } 
}