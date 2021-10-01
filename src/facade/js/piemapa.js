/**
 * @module M/plugin/Piemapa
 */
import 'assets/css/piemapa';
import PiemapaControl from './piemapacontrol';
import api from '../../api.json';

export default class Piemapa extends M.Plugin {
  /**
   * @classdesc
   * Main facade plugin object. This class creates a plugin
   * object which has an implementation Object
   *
   * @constructor
   * @extends {M.Plugin}
   * @param {Object} impl implementation object
   * @api stable
   */
  constructor(config) {
    super();
    /**
     * Facade of the map
     * @private
     * @type {M.Map}
     */
    this.map_ = null;
    this.config=config;
    /**
     * Array of controls
     * @private
     * @type {Array<M.Control>}
     */
    this.controls_ = [];

    /**
     * Metadata from api.json
     * @private
     * @type {Object}
     */
    this.metadata_ = api.metadata;
  }

  /**
   * This function adds this plugin into the map
   *
   * @public
   * @function
   * @param {M.Map} map the map to add the plugin
   * @api stable
   */
  addTo(map) {
    this.control_= new PiemapaControl(this.config)
    this.controls_.push(this.control_);
    this.map_ = map;
    // panel para agregar control - no obligatorio
    this.panel_ = new M.ui.Panel('panelPiemapa', {
      collapsible: true,
      className: 'm-piemapa',
      position: M.ui.position.BL,
      collapsedButtonClass: 'g-cartografia-flecha-arriba',
      tooltip: 'Ver pie de página'
      
    });
    this.panel_.addControls(this.controls_);
    map.addPanels(this.panel_);
    this.panel_.open();
  }

  /**
   * This function gets metadata plugin
   *
   * @public
   * @function
   * @api stable
   */
  getMetadata(){
    return this.metadata_;
  }
}
