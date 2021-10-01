import Piemapa from 'facade/piemapa';

const map = M.map({
  container: 'mapjs',
});

const config = {
  htmlCode: "<div id='social'> <ul> <li class='no_imprimir'><a id='btnCompartir' href='#'><img src='http://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/social/compartir24g.png' border='0' alt='Compartir'>&nbsp;<span>Compartir</span></a> <ul id='soc_compartir'> <li><a href='http://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.juntadeandalucia.es%2Finstitutodeestadisticaycartografia%2FVisorGrid%2Fvisor.htm&amp;t=+Visualizador+Grid+IECA&amp;d=' title='Compartir en Facebook' target='_blank'><img src='http://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/social/ico_facebook.png' border='0' alt='Compartir en Facebook'>&nbsp;<span>Facebook</span></a></li><li><a href='http://twitter.com/home?status=Visualizador+Grid+IECA-http%3A%2F%2Fwww.juntadeandalucia.es%2Finstitutodeestadisticaycartografia%2FVisorGrid%2Fvisor.htm%20v%C3%ADa%20@IECA_Andalucia' title='Compartir en Twitter' target='_blank'><img src='http://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/social/ico_twitter.png' border='0' alt='Compartir en Twitter'>&nbsp;<span>Twitter</span></a></li><li><a href='http://www.linkedin.com/shareArticle?mini=true&amp;url=http%3A%2F%2Fwww.juntadeandalucia.es%2Finstitutodeestadisticaycartografia%2FVisorGrid%2Fvisor.htm&amp;title=+Visualizador+Grid+IECA' title='Compartir en LinkedIn' target='_blank'><img src='http://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/social/ico_linkedin.png' border='0' alt='Compartir en LinkedIn'>&nbsp;<span>LinkedIn</span></a></li><li><a href='mailto:?subject=Compartiendo%20por%20correo%20electr%C3%B3nico&amp;body=%20Visualizador%20Grid%20IECA:%0D%0Ahttp://www.juntadeandalucia.es/institutodeestadisticaycartografia/VisorGrid/visor.htm' title='Compartir por correo electr&oacute;nico' target='_blank'><img src='http://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/icons/social/ico_mail.png' border='0' alt='Compartir por correo electr&oacute;nico'>&nbsp;<span>e-mail</span></a></li></ul> </li></ul> </div><div id='footer'> <div id='piea'> <div class='lineacolor fondocolor1'>&nbsp;</div><div>&nbsp;</div><div> <div id='piea1'> <a href='http://www.juntadeandalucia.es/institutodeestadisticaycartografia/ieagen/mapaWeb/index.htm' class='enlaces' accesskey='m'>Mapa web</a> | <a href='http://www.juntadeandalucia.es/institutodeestadisticaycartografia/ieagen/avisoLegal/index.htm' class='enlaces' accesskey='l'>Aviso legal</a> | <a href='http://www.juntadeandalucia.es/institutodeestadisticaycartografia/protecciondedatos/index.html' class='enlaces' accesskey='p'>Protecci&oacute;n de datos</a> | <a href='http://www.juntadeandalucia.es/institutodeestadisticaycartografia/buzon_web/index.jsp' class='enlaces' accesskey='o'>Tu opini&oacute;n</a> | <a href='http://www.juntadeandalucia.es/institutodeestadisticaycartografia/ieagen/accesibilidad/index.htm' class='enlaces' accesskey='a'>Accesibilidad</a> <img src='http://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/images/w3caa.jpg' alt='Logo de w3c' id='logow3caa'> <a href='http://www.juntadeandalucia.es/institutodeestadisticaycartografia/ieagen/avisoLegal/index.htm#cc' class='enlaceimg'><img src='http://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/images/images/cc-by.png' title='Publicado bajo Licencia Creative Commons - Reconocimiento 4.0' alt='CC-BY 4.0' id='logoccby'></a> </div><div id='piea2'> Pabell&oacute;n de Nueva Zelanda. <br>C/ Leonardo Da Vinci, n&deg; 21. Isla de La Cartuja. 41071-SEVILLA.<br>Tlf.: <strong>900 101 407/955 033 800</strong> | Fax: <strong>955 033 816</strong><br></div></div></div></div>",
  cssList: [
    { cssUrl: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/css/estiloCabecera2015.css'},
    { cssUrl: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/css/estiloGenerico.css'},
    { cssUrl: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/css/estiloVisor.css'},
    { cssUrl: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/portal/css/recursos/imprimir.css'}
  ]
}
const mp = new Piemapa(config);

map.addPlugin(mp);





/* Estilos pie */
