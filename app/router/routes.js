
//const prefix = "../../components/";

//import Gateway from '../../../components/core/gateway.js';
//import Apps from `${ prefix }apps.js`; DOESN'T WORK, doesn't like string template literals
import Apps from "../../components/apps.js";


export default [
    {
		path: '/',
		component: Apps
	},{
		path: '*',
		redirect: '/'
	}
]
