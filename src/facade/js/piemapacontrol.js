/* eslint-disable no-console */
/**
 * @module M/control/PiemapaControl
 */

import PiemapaImplControl from 'impl/piemapacontrol';
import template from 'templates/piemapa';

export default class PiemapaControl extends M.Control {
  /**
   * @classdesc
   * Main constructor of the class. Creates a PluginControl
   * control
   *
   * @constructor
   * @extends {M.Control}
   * @api stable
   */
  constructor(config) {
    // 1. checks if the implementation can create PluginControl
    if (M.utils.isUndefined(PiemapaImplControl)) {
      M.exception('La implementación usada no puede crear controles PiemapaControl');
    }
    // 2. implementation of this control
    const impl = new PiemapaImplControl();
    super(impl, 'Piemapa');

    this.config = config;
    this.htmlCode = this.config.htmlCode
    this.cssList = this.config.cssList
    this.templateVars = { vars: { htmlCode: this.htmlCode , cssList : this.cssList} };

    
  }

  /**
   * This function creates the view
   *
   * @public
   * @function
   * @param {M.Map} map to add the control
   * @api stable
   */
  createView(map) {
    console.log(this.htmlCode);
    console.log(this.cssList);

    return new Promise((success, fail) => {
      const html = M.template.compileSync(template, this.templateVars);
      // Añadir código dependiente del DOM
      success(html);
    });
  }

  /**
   * This function is called on the control activation
   *
   * @public
   * @function
   * @api stable
   */
  activate() {
    // calls super to manage de/activation
    super.activate();
    const div = document.createElement('div');
    div.id = 'msgInfo';
    div.classList.add('info');
    div.innerHTML = 'Haz doble click sobre el mapa';
    this.map_.getContainer().appendChild(div);

    this.getImpl().activateClick(this.map_);
  }
  /**
   * This function is called on the control deactivation
   *
   * @public
   * @function
   * @api stable
   */
  deactivate() {
    // calls super to manage de/activation
    super.deactivate();
    const div = document.getElementById('msgInfo');
    this.map_.getContainer().removeChild(div);

    this.getImpl().deactivateClick(this.map_);
  }
  /**
   * This function gets activation button
   *
   * @public
   * @function
   * @param {HTML} html of control
   * @api stable
   */
  getActivationButton(html) {
    return html.querySelector('.m-piemapa button');
  }

  /**
   * This function compares controls
   *
   * @public
   * @function
   * @param {M.Control} control to compare
   * @api stable
   */
  equals(control) {
    return control instanceof PiemapaControl;
  }

  // Add your own functions
}
