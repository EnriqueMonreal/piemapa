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
    this.injectCSS(this.cssList)
    this.templateVars = { vars: { htmlCode: this.htmlCode} };
    

    
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
  injectCSS(cssList){
    for (let index = 0; index < cssList.length; index++) {
      const cssFile = cssList[index];
      let link = document.createElement( "link" );  
      link.href = cssFile;
      //link.type = "text/css";
      link.rel = "stylesheet";
      // link.media = "screen,print";
      document.getElementsByTagName( "head" )[0].appendChild( link );
    }
  }
}
