// env=undefined => env=publish 
Cube("datav://qrcode/0.0.6com", ["datav:/npm/bcore/0.0.18/event", "datav:/npm/jquery/2.1.5", "datav:/npm/lodash/4.6.1", "datav:/npm/qrcodejs2/0.0.2"], function(t, e, i, r, o, a) {
	var n = i("bcore/0.0.18/event"),
		s = i("jquery/2.1.4"),
		A = i("lodash/4.6.1"),
		H = i("qrcodejs2/0.0.2");
	return t.exports = n.extend(function(t, e) {
		this.config = {
			theme: {}
		}, this.container = s(t), this.containSize = {
			boxWidth: this.container && this.container.width(),
			boxHeight: this.container && this.container.height()
		}, this.THREE = 3, this.base64Img = "data:image/png;base64,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", this.apis = e.apis, this._data = null, this.chart = null, this.qrcode = null, this.listenerImgCb = this.listenerImgCb.bind(this), this.init(e)
	}, {
		init: function(t) {
			this.mergeConfig(t), this.updateLayout(), this.updateStyle(), this.container.css("position", "relative"), this.container.html('<div id="qrcode"></div>\n          <div class="img-box" style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);font-size: 0;">\n            <img style="font-size: 0;" data-retry-num="0"/>\n          </div>'), this.listenerImgError()
		},
		listenerImgCb: function(t) {
			var e = t.target,
				t = e.getAttribute("data-retry-num");
			"IMG" !== e.nodeName.toUpperCase() || A.isNull(t) || (t >= this.THREE ? e.src = this.base64Img : (e.src = "https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/skylark/avatar/6990e17e-6f3e-4075-9b8f-d2faa61e056c.gif?x-oss-process=image%2Fresize%2Cm_fill%2Cw_90%2Ch_90%2Fformat%2Cpng", e.setAttribute("data-retry-num", t += 1)))
		},
		listenerImgError: function() {
			this.container[0].addEventListener("error", this.listenerImgCb, !0)
		},
		render: function(t, e) {
			t = this.data(t);
			var i = this.mergeConfig(e),
				r = this.containSize,
				o = r.boxWidth,
				a = r.boxHeight,
				n = this.container.find("#qrcode"),
				s = this.container.find(".img-box"),
				d = s.find("img"),
				h = i.text,
				c = i.color,
				l = c.colorDark,
				g = c.colorLight,
				b = i.border.borderWidth,
				m = i.logo,
				p = m.show,
				u = m.logoImg,
				f = m.size,
				y = f.sizeW,
				v = f.sizeH,
				e = m.backgroundColor,
				r = m.border,
				c = r.borderWidth,
				i = r.borderColor,
				f = r.borderRadius,
				r = r.borderStyle,
				m = m.imgBorderRadius,
				h = A.get(t, [0, "text"]) || h;
			s.css({
				display: p ? "block" : "none",
				"border-radius": f + "px",
				border: c + "px " + r + " " + i,
				"background-color": e
			}), d.css({
				width: y + "px",
				height: v + "px",
				"border-radius": m + "px"
			}), d.attr("src", u), n && n.empty(), this.qrcode && this.qrcode.clear(), this.qrcode = new H(n[0], {
				text: h,
				width: o - 2 * b,
				height: a - 2 * b,
				colorDark: l,
				colorLight: g,
				correctLevel: H.CorrectLevel.H
			}), this.updateStyle()
		},
		resize: function(t, e) {
			this.containSize = {
				boxWidth: t,
				boxHeight: e
			}, this.render(this._data, this.config)
		},
		setColors: function() {},
		data: function(t) {
			return t && (this._data = t), this._data
		},
		getThemableConfig: function(t) {
			if (!t) return null;
			var e = t.textColor,
				i = t.palette,
				t = "";
			return i && i.length && (i[A.floor(i.length / 2)], t = i[0]), {
				color: {
					colorDark: t,
					colorLight: e
				}
			}
		},
		mergeConfig: function(t) {
			return t && (this.config.theme = A.defaultsDeep(t.theme || {}, this.config.theme), this.setColors(), this.config = A.defaultsDeep(t || {}, this.config)), this.config
		},
		updateLayout: function() {},
		updateStyle: function() {
			var t = this.config.border,
				e = t.borderWidth,
				i = t.borderColor,
				r = t.borderRadius,
				t = t.borderStyle;
			this.container.css({
				border: e + "px " + t + " " + i,
				borderRadius: r,
				overflow: "hidden"
			})
		},
		destroy: function() {
			this.qrcode && this.qrcode.clear(), this.container.empty(), this._data = null
		}
	}), t.exports
});