
export default {
    addApp: function(self, payload) { self.apps.push(payload.item); },
    add: function(self, payload) { self.apps[payload.index][payload.type].push(payload.item); },
    addDir: function(self, payload) { self.apps[payload.index].dirs.push(payload.dir); },
    addSub: function(self, payload) { self.apps[payload.index].subs.push(payload.sub); },
    addAct: function(self, payload) { self.apps[payload.index].acts.push(payload.act); },
    addObj: function(self, payload) { self.apps[payload.index].objs.push(payload.obj); },
}
