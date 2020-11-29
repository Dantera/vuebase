
//--------------------------------------------------
// Hooks
//--------------------------------------------------

//import beforeCreate from "./hooks/beforeCreate.js";
//import beforeDestroy from "./hooks/beforeDestroy.js";
//import beforeMount from "./hooks/beforeMount.js";
//import beforeUpdate from "./hooks/beforeUpdate.js";

//import created from "./hooks/created.js";
//import destroyed from "./hooks/destroyed.js";
import mounted from "./hooks/mounted.js";
//import updated from "./hooks/updated.js";


//--------------------------------------------------
// Modules
//--------------------------------------------------

import store from "./store.js";
import router from "./router/index.js";
//import VueMessage from "../lib/vue-message.js";
//import modal from "../components/modal.js";


//--------------------------------------------------
// Main Application
//--------------------------------------------------


//-------------------------
// 
//-------------------------

import data from "./main/data.js";
import methods from "./main/methods.js";
import computed from "./main/computed.js";
//import watch from "./main/watch.js";


//-------------------------
// Uses
//-------------------------

//Vue.use(VueMessage);


//-------------------------
// Main
//-------------------------

const x = new Vue({

    //beforeCreate,
    //beforeDestroy,
    //beforeMount,
    //beforeUpdate,

    //created,
    //destroyed,
    mounted,
    //updated,
        
    router,
    store,

    data,
    methods,
    computed,
    //watch,
    
    components: { modal }

}).$mount("#app");
