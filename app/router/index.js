
import routes from "./routes.js";


Vue.use(VueRouter);


const router = new VueRouter({
    
    mode: 'history',
    
    base: '/framework',
    
    linkActiveClass: 'font-weight-bold',

    routes // short for `routes: routes`
    
    /*
    linkExactActiveClass: '',
    scrollBehavior: function(to, from, savedPosition) {
        console.log(`scrollBehavior: FROM ${ from.path } TO ${ to.path }`);
    },
    */
});

router.beforeEach((to, from, next) => {
    console.log(`beforeEach: FROM ${ from.path } TO ${ to.path }`);
    next();
});

router.beforeResolve((to, from, next) => {
    console.log(`beforeResolve: FROM ${ from.path } TO ${ to.path }`);
    next();
});

router.afterEach((to, from, next) => {
    console.log(`afterEach FROM ${ from.path } TO ${ to.path }`);
    // next(); NOT NEEDED
});

export default router;