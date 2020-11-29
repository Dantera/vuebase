
export default {

    toast: function (code, message, duration = 2000) {
        let colors = {
            SUCCESS: "#34a853",
            ERROR: "#db4437",
            WARNING: "#f4b400",
            INFO: "#4285f4"
        };
        this.$msg({ text: message, background: colors[code], duration: duration });
        console.log(code);
    }
    
};
