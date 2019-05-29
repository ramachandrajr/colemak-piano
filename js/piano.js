function Piano() {
    this.isMouseDown = !1;
    this.play_cycle = !1;
    this.play_pause = !1;
    this.stp_cycle = !1;    
    this.stp = !1;
    this.as = !1;
    this.b = !1;
    this.chord = [""];
    this.time = [0];
    this.indexes = [0];
    this.msx;
    this.t1 = 0;
    this.t2 = 0;
    this.nmb = 1;
    this.col = 0;
    this.play_count = 0;
    this.deff = 0;
    this.defff = 0;
    this.default = function() {
        this.play_count = 0;
        this.indexes = [0];
        this.chord = [""];
        this.time = [0];
        this.nmb = 1;
        this.b = !1
    };
    this.chkdsk = function(n, t) {
        this.isMouseDown == !0 ? this.music(n, t) : this.delayer(n, t + 1)
    };
    this.timer = function() {
        this.t1 = this.t2;
        var n = new Date;
        return this.t2 = n.getMinutes() * 6e4 + n.getSeconds() * 1e3 + n.getMilliseconds(), this.b ? this.t2 - this.t1 : (this.b = !0, 0)
    };
    this.music = function(n, t) {
        var i = $(n);
        i.currentTime = 0;
        i.play();
        this.delayer(n, t);
        this.record && (this.chord[this.chord.length] = n, this.time[this.time.length] = this.time[this.time.length - 1] + this.timer())
    };
    this.timereset = function(n, t) {
        for (var i = t + 1; i < n.length; i++) n[i] = n[i] - n[t];
        for (i = 0; i <= t; i++) n[i] = 0;
        return n
    };

    this.assist = function() {
        var n;
        if (this.as) {
            for ($("assistd").innerHTML = "Key assist Off", n = 0; n < notes.w_n.length; n++) $("a" + notes.w_c[n] + "d").innerHTML = "";
            for (n = 0; n < notes.b_n_.length; n++) $("b" + notes.b_c[n] + "d").innerHTML = "";
            this.as = !1;
            loc.set("assist", "")
        } else {
            for ($("assistd").innerHTML = "Key assist On", n = 0; n < notes.w_c.length; n++) $("a" + notes.w_c[n] + "d").innerHTML = "<br/><br/><br/><br/><br/><br/>" + notes.w_n[n];
            for (n = 0; n < notes.b_c.length; n++) $("b" + notes.b_c[n] + "d").innerHTML = "<br/>" + notes.b_n_[n] + "<br/>+<br/>&#8679";
            this.as = !0;
            loc.set("assist", "x")
        }
    };

    this.delayer = function(n, t) {
        var i = $(n + "d");
        i.style.backgroundImage = notes.styles[t];
        setTimeout(function() {
            i.style.backgroundImage = t < 3 ? notes.styles[0] : notes.styles[5]
        }, 150)
    }
}
var piano = new Piano;