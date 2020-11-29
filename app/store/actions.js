
export default {
    addApp: function(self, payload) { self.commit("addApp", payload); },
    add: function(self, payload) { self.commit(`add`, payload); },
    addDir: function(self, payload) { self.commit("addDir", payload); },
    addSub: function(self, payload) { self.commit("addSub", payload); },
    addAct: function(self, payload) { self.commit("addAct", payload); },
    addObj: function(self, payload) { self.commit("addObj", payload); },
}
