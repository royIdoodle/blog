webpackJsonp([164], [function(e, t, o) {
  o(2),
    e.exports = o(145)
}
  , , function(e, t, o) {
    "use strict";
    function i(e) {
      if (e && e.__esModule)
        return e;
      var t = {};
      if (null != e)
        for (var o in e)
          Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
      return t.default = e,
        t
    }
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function n(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
    }
    function a() {
      var e = void 0;
      if ("true" === m.default.cookie("isLogin") && !m.default.cookie("memberId"))
        try {
          e = new Image,
            e.src = "//node." + h.default.tgDomain + "/monitor/memberIdNone.gif?type=memberIdLost"
        } catch (e) {}
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.factory = t.request = t.app = t.tgs = t.api = t.domain = t.maple = t.$ = void 0;
    var s = function() {
      function e(e, t) {
        var o = []
          , i = !0
          , r = !1
          , n = void 0;
        try {
          for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (o.push(a.value),
          !t || o.length !== t); i = !0)
            ;
        } catch (e) {
          r = !0,
            n = e
        } finally {
          try {
            !i && s.return && s.return()
          } finally {
            if (r)
              throw n
          }
        }
        return o
      }
      return function(t, o) {
        if (Array.isArray(t))
          return t;
        if (Symbol.iterator in Object(t))
          return e(t, o);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }
    }()
      , c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      }
      : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }
      , u = function() {
      function e(e, t) {
        for (var o = 0; o < t.length; o++) {
          var i = t[o];
          i.enumerable = i.enumerable || !1,
            i.configurable = !0,
          "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
      }
      return function(t, o, i) {
        return o && e(t.prototype, o),
        i && e(t, i),
          t
      }
    }()
      , p = o(3)
      , d = r(p)
      , l = o(6)
      , m = r(l)
      , y = o(111)
      , h = r(y)
      , f = o(112)
      , g = r(f)
      , v = o(115)
      , b = i(v)
      , k = o(144)
      , C = r(k)
      , S = o(145)
      , P = r(S)
      , w = o(117)
      , A = o(148)
      , x = i(A)
      , O = o(149)
      , j = o(150)
      , T = o(151)
      , I = o(153)
      , M = o(154)
      , q = r(M)
      , B = o(155)
      , D = r(B)
      , L = o(156)
      , R = r(L)
      , N = o(157)
      , E = (r(N),
      o(120))
      , U = (r(E),
      o(119))
      , G = r(U)
      , W = o(158)
      , F = r(W)
      , J = o(159)
      , V = r(J)
      , H = !1
      , Q = !1
      , $ = "done"
      , z = ""
      , K = 1
      , Y = {}
      , Z = 1
      , X = ((0,
      d.default)(window),
      []);
    "true" === m.default.cookie("hybrid") && (b.imSer._getByMemberId = b.imSer.getByMemberId,
        b.imSer.getByMemberId = function(e) {
          e.data.tgAppVersion = P.default.getTgAppVersion(),
            this._getByMemberId(e)
        }
        ,
        b.imSer._getServiceList = b.imSer.getServiceList,
        b.imSer.getServiceList = function(e) {
          e.data.tgAppVersion = P.default.getTgAppVersion(),
            this._getServiceList(e)
        }
    );
    var ee = d.default.Deferred()
      , te = d.default.Deferred()
      , oe = d.default.Deferred()
      , ie = d.default.Deferred()
      , re = function() {
      function e(t) {
        n(this, e),
        t && "function" == typeof t && t.call(this)
      }
      return u(e, [{
        key: "_initPage",
        value: function(e) {
          var t = this
            , o = this;
          this.addScrollEventToJquery(d.default),
            this.addIsInViewToJquery(d.default),
            this._initDefaultSetting(),
            this._initGlobal(),
            this._initParams(),
            this._initUrl(),
            this._initAppPage(),
            this._initLinksEvent(),
            this._initScrollUp(),
            this._initAutoAnalyse(),
            this._initAutoBaoguang(),
            this._autoRunApp(),
            this._scrollLoadMore(),
            this._initUrlInCookie(),
            this._initCheckWebp(),
            (0,
              V.default)(),
            this.addScrollClass(),
            d.default.when(oe).done(function() {
              t.runBusinessCode(e, function() {
                !Q && o._overHandler()
              })
            }).fail(function() {
              t.runBusinessCode(e, function() {
                !Q && o._overHandler()
              })
            }),
            (0,
              T.loadWcSdk)(oe),
          this.needRefresh && this._initNeedRefresh(),
          this.needRefresh || this._pageBackSetScrollBar()
        }
      }, {
        key: "dataFormat",
        value: function(e) {
          return e
        }
      }, {
        key: "addScrollClass",
        value: function() {
          var e = (0,
            d.default)("body")
            , t = !1
            , o = _.debounce(function() {
            e.removeClass("pageScrollIng"),
              t = !1
          }, 50);
          (0,
            d.default)(window).on("scroll", function() {
            0 == t && (t = !0,
              e.addClass("pageScrollIng")),
              o()
          })
        }
      }, {
        key: "addScrollEventToJquery",
        value: function(e) {
          var t = e.event.dispatch || e.event.handle
            , o = e.event.special
            , i = "D" + +new Date
            , r = "D" + (+new Date + 1);
          o.scrollstart = {
            setup: function(r) {
              var n, a = e.extend({
                latency: o.scrollstop.latency
              }, r), s = function(e) {
                var o = this
                  , i = arguments;
                n ? clearTimeout(n) : (e.type = "scrollstart",
                  t.apply(o, i)),
                  n = setTimeout(function() {
                    n = null
                  }, a.latency)
              };
              e(this).bind("scroll", s).data(i, s)
            },
            teardown: function() {
              e(this).unbind("scroll", e(this).data(i))
            }
          },
            o.scrollstop = {
              latency: 250,
              setup: function(i) {
                var n, a = e.extend({
                  latency: o.scrollstop.latency
                }, i), s = function(e) {
                  var o = this
                    , i = arguments;
                  n && clearTimeout(n),
                    n = setTimeout(function() {
                      n = null,
                        e.type = "scrollstop",
                        t.apply(o, i)
                    }, a.latency)
                };
                e(this).bind("scroll", s).data(r, s)
              },
              teardown: function() {
                e(this).unbind("scroll", e(this).data(r))
              }
            }
        }
      }, {
        key: "addIsInViewToJquery",
        value: function(e) {
          e.fn.isInView = function(t) {
            if (!this.length)
              return !1;
            var o = (e.extend(!0, {}, e.fn.isInView.defaults, t),
            e(this).eq(0).offset().top - (document.body.scrollTop || document.documentElement.scrollTop),
            e(this).eq(0).offset().top - (document.body.scrollTop || document.documentElement.scrollTop))
              , i = e(this).eq(0).offset().left
              , r = o >= 0 && o < document.documentElement.clientHeight
              , n = i >= 0 && i < document.documentElement.clientWidth;
            return r && n
          }
            ,
            e.fn.isInView.defaults = {}
        }
      }, {
        key: "startBaoguang",
        value: function() {
          var e = this;
          X.filter(function(e) {
            return !e.hasBaoguang && e.dom.isInView()
          }).forEach(function(t) {
            t.hasBaoguang = !0;
            var o = t.dom.data()
              , i = (e.page || "*.*") + "." + o.scp + "." + Math.random().toString(34).slice(2, 7);
            C.default.baoguang(i, o.bk, o.traceId)
          })
        }
      }, {
        key: "updateTraceProductList",
        value: function() {
          var e = [];
          (0,
            d.default)("[data-trace-id]").each(function() {
            e.push({
              hasBaoguang: !1,
              dom: (0,
                d.default)(this)
            })
          }),
            X = _.unionBy(X, e, "dom[0]"),
            this.startBaoguang()
        }
      }, {
        key: "getServerTime",
        value: function(e) {
          (0,
            w.request)({
            url: h.default.baseMidService + "/base/timestamp.node",
            success: function(t) {
              _.isFunction(e) && e(_.isNumber(t) ? t : +new Date)
            },
            error: function() {
              e(+new Date)
            }
          })
        }
      }, {
        key: "scrollOverHandler",
        value: function() {}
      }, {
        key: "loadMidData",
        value: function(e, t, o) {
          this.useMidDataByStaticMethod = !0;
          var i = this
            , r = {
            type: "GET",
            loadMore: !0
          };
          "object" == c(arguments[0]) ? r = _.defaults(arguments[0], r) : (r.url = e || z,
            r.data = t || {},
            r.success = o,
            r.format = d.default.proxy(i.dataFormat, i));
          var n, a, s = _.get(m.default.url(), "params.currentPosition");
          if (s && (/\d+_\d+/.test(s) && (n = s.split("_")[0],
            a = s.split("_")[1]),
            m.default.url().replace("currentPosition")),
          n && !_.includes(r.url, "currentView")) {
            r.url = i.addParams(r.url, {
              totalView: n
            }),
              Z = n;
            var u = {
              page: location.href,
              url: r.url
            };
            n > 10 && d.default.get("http://nodelog.51tiangou.com/log/custom/add", {
              key: "currentPosition",
              message: JSON.stringify(u)
            })
          }
          "done" == $ && r.url && (r.loadMore && ($ = "loadding"),
            Q = !0,
          r.beforeRequest && r.beforeRequest(),
            (0,
              w.request)({
              url: r.url,
              cache: !1,
              type: r.type,
              data: r.data,
              success: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                arguments[1],
                  arguments[2];
                if (889 === _.get(_.last(arguments), "httpCode") && !localStorage.getItem("ssoConfirmed") && (0,
                  G.default)(location.pathname))
                  return void m.default.alert({
                    content: "您的账号已在其他终端登录，请重新登录",
                    okFn: function() {
                      localStorage.setItem("ssoConfirmed", !0),
                      m.default.pageIns && m.default.pageIns.changePage("/login/login.html")
                    }
                  });
                if (888 === _.get(_.last(arguments), "httpCode") && (0,
                  G.default)(location.pathname))
                  return void (m.default.pageIns && m.default.pageIns.changePage("/login/login.html"));
                "function" == typeof r.before ? r.before(e) : "function" == typeof i.loadMidDataBefore && i.loadMidDataBefore(K);
                var t = i.vm ? JSON.parse(JSON.stringify(i.vm.$data)) : {}
                  , o = _.get(e.filter(function(e) {
                  return "editComponent" == e.key
                })[0], "data.url")
                  , n = i.listCom || [];
                e.forEach(function(e) {
                  var o = e.key || e.name;
                  "object" === c(e.data) && (e.data.props = e.prop || {},
                  _.isArray(e.data.items) && e.data.id && _.forEach(e.data.items, function(t) {
                    t._parentId = e.data.id
                  })),
                    n.indexOf(o) < 0 ? t[o] = e.data : (t[o] = t[o] || [],
                      t[o].push(e.data))
                }),
                H || (i._overHandler(),
                  (r.callback || function() {}
                  )(t)),
                "function" == typeof r.format && (t = r.format(t));
                var s = _.chain(e).filter(function(e) {
                  return "wcShareInfo" === e
                }).get(0, {}).value();
                i.dynamicWcShare = s.data || {},
                i.vm && (Object.keys(t).forEach(function(e) {
                  var o = i.vm.$get(e);
                  "object" == c(t[e]) ? _.isEqual(t[e], o) || (_.isArray(o) ? _.differenceWith(t[e], o, _.isEqual).forEach(function(e) {
                    o.push(e)
                  }) : i.vm.$set(e, t[e])) : "emptyList" === e && i.vm.$set(e, t[e])
                }),
                  _.defer(function() {
                    i.updateTraceProductList(),
                      (0,
                        V.default)(),
                    _.isFunction(r.success) && r.success()
                  })),
                  "function" == typeof r.after ? r.after(t, K) : "function" == typeof i.loadMidDataAfter && i.loadMidDataAfter(K),
                  $ = "done",
                  K++,
                r.loadMore && (z = t.loadMore,
                  setTimeout(function() {
                    i.vm.$broadcast("midDataNoMore", !!z),
                    z || i.scrollOverHandler(),
                      i.$body[0].style.height = "",
                      i.$body.height(i.$body.height());
                    var e = i.vm.loadMoreView || 1;
                    m.default.scrollBar("bottom").view < e && i.loadMore && i.loadMidData(),
                    a && m.default.scrollBar("top", a),
                      _.set(Y, "pageView_" + _.max([_.get(m.default.url(r.url), "params.currentView") || 1, Z]), i.$body.height())
                  }, 0)),
                o && i.loadMidData({
                  url: o,
                  loadMore: !1
                })
              },
              error: function(e) {
                $ = "done"
              }
            }))
        }
      }, {
        key: "getLoadMoreUrl",
        value: function() {
          return z
        }
      }, {
        key: "setLoadMoreUrl",
        value: function(e) {
          z = e
        }
      }, {
        key: "_isLoginPath",
        value: function(e, t) {
          return e = e.replace("/", ""),
          "index.html" !== e && t.some(function(t) {
            return !!~t.indexOf(e)
          })
        }
      }, {
        key: "_overHandler",
        value: function() {
          var e = this;
          H = !0,
            P.default.tgWebOver(),
            e._brownShare(),
          m.default.device.weixin && e._initWcShare()
        }
      }, {
        key: "_initCheckWebp",
        value: function() {
          var e = this
            , t = e.getCookie("webp");
          if (!t) {
            var o = new Image;
            o.onload = function() {
              2 !== o.height ? e.setCookie("webp", "false", "365d") : e.setCookie("webp", "true", "365d")
            }
              ,
              o.onerror = function() {
                e.setCookie("webp", "false", "365d")
              }
              ,
              o.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
          }
        }
      }, {
        key: "_initUrlInCookie",
        value: function() {
          var e = this
            , t = e.getCookie("initUrl");
          t || e.setCookie("initUrl", location.href)
        }
      }, {
        key: "_scrollLoadMore",
        value: function() {
          var e = this;
          (0,
            d.default)(document).on("scroll", function(t) {
            m.default.scrollBar("bottom").view < 1 && e.loadMore && e.loadMidData()
          })
        }
      }, {
        key: "changePage",
        value: function() {
          for (var e = this, t = arguments.length, o = Array(t), i = 0; i < t; i++)
            o[i] = arguments[i];
          if (_.isObject(o[0])) {
            var r = o[0]
              , n = r.href
              , a = r.data
              , s = r.isNeedRefresh
              , c = r.path
              , u = r.query;
            n = e.addParams(n, a) + "#/" + e.addParams(c, u),
              this._assignPage("change", n, {}, s)
          } else {
            var p = [].concat(o)
              , d = p[0]
              , l = p[1]
              , m = p[2]
              , y = void 0 !== m && m;
            this._assignPage("change", d, l, y)
          }
        }
      }, {
        key: "replacePage",
        value: function() {
          for (var e = this, t = arguments.length, o = Array(t), i = 0; i < t; i++)
            o[i] = arguments[i];
          if (_.isObject(o[0])) {
            var r = o[0]
              , n = r.href
              , a = r.data
              , s = r.isNeedRefresh
              , c = r.path
              , u = r.query;
            n = e.addParams(n, a) + "#/" + e.addParams(c, u),
              this._assignPage("replace", n, {}, s)
          } else {
            var p = [].concat(o)
              , d = p[0]
              , l = p[1]
              , m = p[2]
              , y = void 0 !== m && m;
            this._assignPage("replace", d, l, y)
          }
        }
      }, {
        key: "_assignPage",
        value: function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
            , o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
            , i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
            , r = m.default.url(t).protocol;
          if (!_.includes(["http", "https"], r))
            return (0,
              w.request)({
              url: function() {
                var e;
                return e = "online" === h.default.env ? "//" + r + ".51tiangou.com" : "//" + r + "." + h.default.env + ".66buy.com.cn",
                  e += m.default.url(t).path.replace(/^\/+/, "/")
              }(),
              data: _.mapValues(m.default.url(t).params, function(e) {
                return decodeURIComponent(e)
              }),
              success: function() {
                "coupon" == r && m.default.alert("领取成功")
              }
            }),
              !1;
          var n = m.default.scrollBar("top").px;
          _.isEmpty(Y) ? 1 : ((_.findKey(Y, function(e, t) {
            return e > n
          }) || "").toString().match(/\d+/) || [1])[0];
          "8080" === location.port && (t = m.default._.parseURL(t).relative);
          for (var a, s = this, c = location.href, u = "", p = "", d = "", l = 0, y = h.default.urlExpectedCode, f = y.length; l < f; l++)
            a = new RegExp("(\\?" + y[l] + "=|&" + y[l] + "=)"),
            (y[l]in o || a.test(t)) && alert(y[l] + "为url保留字段，禁止使用,发现请立即修改");
          if (this.params && this.params.min && (o.min = this.params.min),
          this.params && this.params.air && (o.air = this.params.air),
          this.params && this.params.isWeixin && (o.isWeixin = this.params.isWeixin),
            t = s.addParams(t, o),
          s.hybrid && (u = s.toAbsUrl(t),
          "change" === e && P.default.addTgHistory(c, String(!!i || s.needRefresh)),
            p = location.origin,
            d = R.default[u.replace(p, "").replace(/\?.*/, "")],
          d && P.default.tgChangePage(d, u)),
          "change" === e) {
            try {
              P.default.addTgHistory(c, String(!!i || s.needRefresh))
            } catch (e) {}
            !!i && !s.needRefresh && this._initNeedRefresh(),
            i || this._pageBackSetScrollBar(),
              location.assign(t)
          } else
            !!i && !s.needRefresh && this._initNeedRefresh(),
            i || this._pageBackSetScrollBar(),
              location.replace(t)
        }
      }, {
        key: "_initNeedRefresh",
        value: function() {
          window.onpagehide = function() {
            window.onpageshow = function() {
              location.reload()
            }
          }
        }
      }, {
        key: "_pageBackSetScrollBar",
        value: function() {
          var e = this;
          window.onpageshow = function() {
            e._setScrollBar()
          }
        }
      }, {
        key: "_setScrollBar",
        value: function() {
          var e, t, o = _.get(m.default.url(), "params.currentPosition");
          o && (/\d+_\d+/.test(o) && (e = o.split("_")[0],
            t = o.split("_")[1]),
            m.default.url().replace("currentPosition"),
          t && m.default.scrollBar("top", t))
        }
      }, {
        key: "_initDefaultSetting",
        value: function() {
          this.needRefresh = !!this.needRefresh,
            this.goToTop = this.goToTop || !0,
            this.autoAnalyse = void 0 === this.autoAnalyse || this.autoAnalyse,
            this.useWcShare = void 0 === this.useWcShare || this.useWcShare,
            this.useGoTop = void 0 === this.useGoTop || this.useGoTop,
            this.isWcAutoLogin = void 0 === this.isWcAutoLogin || this.isWcAutoLogin,
            this.isWcShare = !!this.isWcShare,
            this.loadMore = !!this.loadMore || !0
        }
      }, {
        key: "_initGlobal",
        value: function() {
          var e = this
            , t = e.getCookie("global");
          t ? e.global = t : (t = navigator.userAgent.indexOf("AlipayClient") > 0 ? "AlipayClient" : m.default.device.weixin ? "wechat" : "webapp",
            e.setCookie("global", t))
        }
      }, {
        key: "_initUrl",
        value: function() {
          var e = location.pathname + location.search;
          this.scrollTop && (e = this.removeParams(e, "scrollTop")),
          m.default.device.weixin || this.replaceState(null, "", e)
        }
      }, {
        key: "_initParams",
        value: function() {
          this.pageInitTime = (new Date).getTime(),
            this.setCookie("pageInitTime", this.pageInitTime),
            this.params = this.getUrlParams(),
            this.scrollTop = Number(this.params.scrollTop && this.params.scrollTop.replace(/^\D*(\d*).*$/, "$1")) || 0,
            this.isBack = !!this.scrollTop,
            this.backOver = !1,
            this.cityId = this.getCookie("cityId") && Number(this.getCookie("cityId")),
            this.cityName = this.getCookie("cityName"),
            this.global = this.getCookie("global") || void 0,
            this.hybrid = "true" === this.getCookie("hybrid"),
            this.isAndroid = this.hybrid && "android" === this.global,
            this.isIos = this.hybrid && "ios" === this.global,
            this.isAirMall = "airMall" === this.getCookie("global"),
            this.$body = (0,
              d.default)("body"),
          this.params.source_type && this.setCookie("source_type", this.params.source_type),
          this.params.source_weixin_id && this.setCookie("source_weixin_id", this.params.source_weixin_id),
          this.params.shopid && this.setCookie("shopid", this.params.shopid),
          (this.params.jr || this.params.JR) && this.setCookie("JR", this.params.jr || this.params.JR)
        }
      }, {
        key: "_initAppPage",
        value: function() {
          var e = this
            , t = document.body.classList;
          this.hybrid && (t.add("hybrid"),
            t.add(e.getCookie("global")))
        }
      }, {
        key: "_initLinksEvent",
        value: function() {
          var e = this;
          e.$body.on("click", "a", function(t) {
            var o = (0,
              d.default)(this)
              , i = o.attr("href")
              , r = (e.toAbsUrl(i),
              (0,
                d.default)(this).data("scp"))
              , n = r ? e.page + "." + r + "." + Math.random().toString(34).slice(2, 7) : void 0
              , a = "true" === String(o.data("reload") || !1);
            if (o[0] && i && !/^#/.test(i) && !/java/.test(i))
              return /tel/.test(i) ? (location.href = i,
                t.preventDefault()) : (i = e.removeParams.apply(e, [i].concat(q.default)),
                i = e.addParams(i, {
                  scp: n
                }),
                e.changePage(i, {}, a),
                t.preventDefault()),
                !1
          }).on("click", "[data-scp]", function() {
            var t = (0,
              d.default)(this).data("traceId")
              , o = (0,
              d.default)(this).data("scp")
              , i = (0,
              d.default)(this).data("bk");
            o = (e.page || "*.*") + "." + o + "." + Math.random().toString(34).slice(2, 7),
            o && C.default.trackSCP(o, i, t)
          })
        }
      }, {
        key: "_initScrollUp",
        value: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            , t = this
            , o = _.defaults({
            scrollName: "scrollToTop",
            topDistance: "300",
            topSpeed: 300,
            animationInSpeed: 200,
            animationOutSpeed: 200,
            scrollText: "Scroll to top",
            goToTop: !0
          }, e)
            , i = "#" + o.scrollName
            , r = o.animationOutSpeed
            , n = o.animationInSpeed
            , a = o.topDistance
            , s = o.topSpeed;
          t.useGoTop && (t.$goToTopDOM = (0,
            d.default)('<a href="#top" id="' + o.scrollName + '" style="z-index:999;"><img src="//image1.51tiangou.com/tgou2/img2/index/scrollToTop.png" width="40"/></a>').appendTo("body")),
          o.goToTop && (0,
            d.default)(window).scroll(function() {
            (0,
              d.default)(window).scrollTop() > a ? (0,
              d.default)(i).fadeIn(n) : (0,
              d.default)(i).fadeOut(r)
          }),
            (0,
              d.default)(i).click(function() {
              return (0,
                d.default)("html, body").animate({
                scrollTop: 0
              }, s),
                C.default.trackSCP(t.page + ".gtop.00." + Math.random().toString(34).slice(2, 7)),
                !1
            })
        }
      }, {
        key: "_brownShare",
        value: function() {
          var e = this
            , t = e.removeParams(location.href, "cityId", "shareSource", "scp")
            , o = {
            link: e.addParams(t, {
              cityId: e.cityId,
              shareSource: "browser"
            })
          }
            , i = void 0;
          if (o = d.default.extend({}, e.getWcParam(), e.dynamicWcShare || {}, o),
            i = o.friendTitle || "【天狗网】不一样的逛街方式",
            document.title = e.pageTitle || i,
          !e.hybrid && !e.isAirMall && m.default.device.weixin)
            var r = (0,
              d.default)('<iframe width="0" height="0" src="//image1.51tiangou.com/tgou2/img2/favicon.ico"></iframe>').on("load", function() {
              setTimeout(function() {
                r.off("load").remove()
              }, 0)
            }).appendTo(e.$body);
          (0,
            d.default)(document.getElementsByTagName("meta")["apple-mobile-web-app-title"]).attr("content", i),
            (0,
              d.default)('link[rel="apple-touch-icon"]').attr("href", o.imgUrl)
        }
      }, {
        key: "_initWcShare",
        value: function() {
          var e = this;
          b.weixin.sign({
            data: {
              url: location.href
            },
            success: function(t) {
              t.jsApiList.push("chooseImage"),
                t.jsApiList.push("scanQRCode"),
                t.jsApiList.push("uploadImage"),
                t.jsApiList.push("downloadImage"),
                t.jsApiList.push("startRecord"),
                t.jsApiList.push("stopRecord"),
                t.jsApiList.push("onVoiceRecordEnd"),
                t.jsApiList.push("playVoice"),
                t.jsApiList.push("pauseVoice"),
                t.jsApiList.push("stopVoice"),
                t.jsApiList.push("onVoicePlayEnd"),
                t.jsApiList.push("uploadVoice"),
                t.jsApiList.push("downloadVoice"),
                t.jsApiList.push("translateVoice"),
                t.jsApiList.push("getLocation"),
                g.default.sign(t, function(t) {
                  try {
                    if (e.useWcShare) {
                      var o = e.removeParams(location.href, "scrollTop", "cityId", "shareSource", "first", "scp")
                        , i = d.default.extend({}, e.getWcParam(), e.dynamicWcShare || {});
                      i.link = i.link || e.addParams(o, {
                        cityId: e.cityId,
                        shareSource: "wc"
                      }),
                        g.default.setShare(i)
                    } else
                      g.default.hideMenu()
                  } catch (e) {} finally {}
                })
            }
          })
        }
      }, {
        key: "getWcParam",
        value: function() {
          return {
            title: "【天狗网】不一样的逛街方式",
            subTitle: "m.51tiangou.com",
            friendTitle: "【天狗网】不一样的逛街方式"
          }
        }
      }, {
        key: "getBusPage",
        value: function(e) {
          var t, o = "/" === location.pathname ? "/index.html" : location.pathname, i = D.default[o] || {}, r = (i.key || []).join(".") || void 0, n = i.bk, a = (i.bkParam || "").split(","), s = i.bkVar, c = this.params || {};
          if (t = s && this[s],
            !t) {
            for (var u = 0; u < a.length; u++)
              if (c[a[u]]) {
                t = c[a[u]];
                break
              }
            t = t || c.id
          }
          return n && (e || t) ? (r = r || "*.*",
            {
              pagebk: r + "." + n + "-" + (e || t),
              page: r
            }) : {
            pagebk: r,
            page: r
          }
        }
      }, {
        key: "_initAutoAnalyse",
        value: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            , t = this
            , o = this.getBusPage();
          if (t.pagebk = _.get(o, "pagebk", "*.*"),
            t.page = _.get(o, "page", "*.*"),
            !t.autoAnalyse)
            return !1;
          if (this.hybrid)
            P.default.constructor.tgTrackPage = function() {
              try {
                _tgs.trackPage(_.defaults(e, {
                  page: t.pagebk,
                  cityId: t.cityId,
                  storeId: t.storeId
                }))
              } catch (e) {}
            }
            ;
          else
            try {
              C.default.trackPage(_.defaults(e, {
                page: t.pagebk
              }))
            } catch (e) {}
        }
      }, {
        key: "_initAutoBaoguang",
        value: function() {
          var e = this;
          (0,
            d.default)(window).on("scrollstop", function() {
            e.startBaoguang()
          })
        }
      }, {
        key: "_autoRunApp",
        value: function() {
          var e, t, o, i, r = this, n = location.search, a = location.pathname, s = _.defaults({}, {
            hasUrl: !0,
            hasCode: !0
          }, r.appConfig || {});
          return !(r.hybrid || r.isAirMall || m.default.device.weixin || r.getCookie("goApp")) && (t = R.default[a],
            o = "tgou://m.51tiangou.com",
            i = {},
          s.hasUrl && (i.url = s.url || a + n),
          s.hasCode && t && (i.code = s.code || t + n),
            o = this.addParams(o, i),
            r.setCookie("goApp", !0),
            e = document.createElement("iframe"),
            e.style.cssText = "display:none;width:0px;height:0px;",
            e.src = o,
            void document.body.appendChild(e))
        }
      }, {
        key: "runBusinessCode",
        value: function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}
            , o = this;
          d.default.when(te, ee, ie).done(function(i) {
            var r = s(i, 2)
              , n = r[0]
              , c = r[1];
            o.setCookie("cityId", n, "365d"),
              o.setCookie("cityName", c, "365d"),
              o.setCookie("validate", 1, "365d"),
              a(),
              e.call(o),
              t(),
              F.default.openIdLog(!!m.default.cookie("openid")),
              o.pageInitOver = !0
          }).fail(function() {
            o.setCookie("validate", 1, "365d"),
              a(),
              e.call(o),
              t(),
              o.pageInitOver = !0
          }),
            (0,
              O.positionRun)(te),
            (0,
              j.checkLoginRun)(ee, o.isWcAutoLogin),
            (0,
              I.loadAppInterface)(ie)
        }
      }]),
        e
    }();
    _.defaults(re.prototype, x);
    var ne = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        , t = e.init
        , o = void 0 === t ? function() {}
        : t
        , i = e.initPage
        , r = void 0 === i ? function() {}
        : i
        , n = new re(o);
      for (var a in e)
        n[a] = e[a];
      n.pageCodeJson = D.default,
        m.default.pageIns = d.default.that = n,
        n._initPage(r)
    };
    t.$ = d.default,
      t.maple = m.default,
      t.domain = h.default,
      t.api = b,
      t.tgs = C.default,
      t.app = P.default,
      t.request = w.request,
      t.factory = ne
  }
  , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o, i, r = location.hostname, n = "", a = "", s = "", c = "", u = "", p = "", d = ["custom", "uuid", "source_type", "source_weixin_id", "state", "bd_source_light", "bd_wd"];
    "m.51tiangou.com" === r || r.indexOf("51tiangou") > 0 ? (s = "online",
      n = "51tiangou.com",
      c = "//m.51tiangou.com",
      i = "//midway.51tiangou.com",
      u = "wx1c18f2760c5ff068",
      p = "wx4f113b1e6b172f5e",
      o = !1) : r.indexOf("pre.66buy.com.cn") > 0 ? (s = "pre",
      n = "pre.66buy.com.cn",
      c = "//m.pre.66buy.com.cn",
      i = "//midway.pre.66buy.com.cn",
      u = "wxd13f25106e193648",
      p = "wxff6dd0fa2c5c8028",
      o = !1) : r.indexOf("test.66buy.com.cn") > 0 ? (s = "test",
      n = "test.66buy.com.cn",
      c = "//m.test.66buy.com.cn",
      i = "//midway.test.66buy.com.cn",
      u = "wx3bc8b36ed3f965bd",
      p = "wxff6dd0fa2c5c8028",
      o = !0) : r.indexOf("dev.66buy.com.cn") > 0 ? (s = "dev",
      n = "dev.66buy.com.cn",
      c = "//m.dev.66buy.com.cn",
      i = "//midway.dev.66buy.com.cn",
      u = "wx3bc8b36ed3f965bd",
      o = !0) : (s = "online",
      n = "51tiangou.com",
      c = "//m.51tiangou.com",
      i = "//midway.51tiangou.com",
      u = "wx1c18f2760c5ff068",
      p = "wx4f113b1e6b172f5e",
      o = !1),
      t.default = {
        mock: !1,
        mockId: 1060,
        baseMidService: i,
        urlExpectedCode: d,
        env: s,
        tgDomain: n,
        baseService: c,
        test: !("online" === s || "pre" === s),
        ctx: a,
        openAppId: p,
        appId: u,
        getImageUrl: function(e, t) {
          t = t || "y";
          var i = ""
            , r = o ? "//test.img.tg-img.com/" : "//image1.51tiangou.com/"
            , n = o ? {
            e: "",
            s: "",
            v: "",
            m: "",
            y: "",
            "640x260": "",
            "580x220": ""
          } : {}
            , a = {
            e: "!e",
            s: "!s",
            v: "!y",
            m: "!m",
            y: "!y",
            "640x260": "!640x260",
            "580x220": "!580x220"
          };
          return e && (i = 0 === e.indexOf("http://") || 0 === e.indexOf("https://") ? e + (a[t] || "") : 0 === e.indexOf("//") && /\!.$/.test(e) ? e : r + (n[t] || "") + e + (a[t] || "")),
            i
        },
        getLinkHref: function(e) {
          var t = "";
          return e && (t = 0 === e.indexOf("http://") || 0 === e.indexOf("https://") ? e : 1 === e.indexOf("http://") || 1 === e.indexOf("https://") ? e.slice(1) : a + e),
            t
        }
      }
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      if (e && e.__esModule)
        return e;
      var t = {};
      if (null != e)
        for (var o in e)
          Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
      return t.default = e,
        t
    }
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = o(3)
      , a = (r(n),
      o(113))
      , s = r(a)
      , c = o(111)
      , u = r(c)
      , p = o(114)
      , d = o(115)
      , l = i(d)
      , m = o(9)
      , y = r(m)
      , h = function() {};
    h.prototype.getLocalOpenid = function(e) {
      return (0,
        p.getCookie)((e ? e + "_" : "") + "openid")
    }
      ,
      h.prototype.setLocalOpenid = function(e, t) {
        return (0,
          p.setCookie)((t ? t + "_" : "") + "openid", e, "365d")
      }
      ,
      h.prototype.getLocalOpenCypher = function(e) {
        return (0,
          p.getCookie)((e ? e + "_" : "") + "openid_cypher")
      }
      ,
      h.prototype.setLocalOpenCypher = function(e, t) {
        return (0,
          p.setCookie)((t ? t + "_" : "") + "openid_cypher", e, "365d")
      }
      ,
      h.prototype.setUnionId = function(e) {
        return e && (0,
          p.setCookie)("unionId", e, "365d")
      }
      ,
      h.prototype.getUnionId = function() {
        return (0,
          p.getCookie)("unionId")
      }
      ,
      h.prototype.getOpenidUtil = function(e) {
        var t = this
          , o = s.default.getUrlParams()
          , i = o.code
          , r = e.appId || u.default.appId
          , n = e.success || function() {}
          , a = e.fail || function() {}
          , c = e.always || function() {}
          , p = t.getLocalOpenid(r)
          , d = t.getUnionId()
          , m = t.getLocalOpenCypher(r);
        if (Array.isArray(i) && (i = i[i.length - 1]),
        p && m && d)
          n(p, m, d),
            c(p, m, d);
        else if (!i || p && m && d || !(i.length > 26) || "_static_openid_flag_" !== o.state)
          if (i || p && m && d)
            a();
          else {
            var y = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + (r || u.default.appId);
            y += "&redirect_uri=" + encodeURIComponent(window.location.origin + window.location.pathname + window.location.search + window.location.hash),
              y += "&response_type=code&scope=snsapi_base&state=_static_openid_flag_#wechat_redirect",
              location.replace(y)
          }
        else
          l.weixin.getOpenid({
            data: {
              code: i,
              appId: r
            },
            success: function(e) {
              t.setLocalOpenid(e.openid),
                t.setLocalOpenCypher(e.openid_cypher),
                t.setUnionId(e.unionid),
                c(e),
                n(e.openid, e.openid_cypher)
            },
            error: function(e) {
              a(e),
                c(e)
            },
            tgError: function(e) {
              a(e),
                c(e)
            }
          })
      }
      ,
      h.prototype.sign = function(e, t) {
        wx.config(e),
          wx.ready(t)
      }
      ,
      h.prototype.setShare = function(e) {
        function t(e) {
          return e && e.indexOf(u.default.baseService) < 0 ? "https:" + u.default.baseService + "/qr.html?id=redirect_" + encodeURIComponent(e) : e
        }
        return !!wx && (e = e || {},
          e.imgUrl = e.imgUrl || "//image1.51tiangou.com/tgou2/img2/tgou_logo3.png!s",
          e.imageUrl = e.imageUrl || e.imgUrl,
          wx.showMenuItems({
            menuList: ["menuItem:share:appMessage", "menuItem:share:timeline", "menuItem:share:qq", "menuItem:share:weiboApp", "menuItem:favorite", "menuItem:share:facebook", "menuItem:share:QZone"]
          }),
          e.link = t(e.link),
          wx.onMenuShareAppMessage({
            title: e.title || "【天狗网】不一样的逛街方式",
            desc: e.subTitle || location && location.href || "m.51tiangou.com",
            link: e.link || location.href,
            imgUrl: e.imageUrl.replace(/^\/\//, "http://"),
            success: e.success,
            cancel: e.cancel
          }),
          void wx.onMenuShareTimeline({
            title: e.friendTitle || "【天狗网】不一样的逛街方式",
            link: e.link,
            imgUrl: e.imageUrl.replace(/^\/\//, "http://"),
            success: e.success,
            cancel: e.cancel
          }))
      }
      ,
      h.prototype.hideMenu = function() {
        wx.hideMenuItems({
          menuList: ["menuItem:share:appMessage", "menuItem:share:timeline", "menuItem:share:qq", "menuItem:share:weiboApp", "menuItem:favorite", "menuItem:share:facebook", "menuItem:share:QZone"]
        })
      }
      ,
      h.prototype.setOpenidByAppid = function(e) {
        var t = e.appId || e.appid || u.default.appId
          , o = e.openId || e.openid
          , i = e.openid_cypher
          , r = e.expire || 365;
        t === u.default.appId ? (o && (0,
          p.setCookie)("openid", o, r),
        i && (0,
          p.setCookie)("openid_cypher", i, r)) : (o && (0,
          p.setCookie)("openid_" + t, o, r),
        i && (0,
          p.setCookie)("openid_cypher_" + t, i, r))
      }
      ,
      h.prototype.getUserInfoUtil = function(e) {
        function t(e) {
          return "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + e + "&redirect_uri=" + encodeURIComponent(window.location.origin + window.location.pathname + window.location.search + window.location.hash) + "&response_type=code&scope=snsapi_userinfo&state=" + a + "#wechat_redirect"
        }
        var o = e.appId || e.appid || u.default.appId
          , i = o === u.default.appId
          , r = e.callback || function() {}
          , n = s.default.getUrlParams(!0, !0)
          , a = "wechat_util"
          , c = 7
          , d = this.getLocalOpenid(o)
          , m = i ? (0,
          p.getCookie)("userInfo") : (0,
          p.getCookie)("userInfo_" + o)
          , h = i ? (0,
          p.getCookie)("access_token") : (0,
          p.getCookie)("access_token_" + o)
          , f = y.default.isArray(n.code) ? n.code[n.code.length - 1] : n.code
          , g = y.default.isArray(n.state) ? n.state[n.state.length - 1] : n.state;
        m ? r(JSON.parse(m)) : h && d ? l.weixin.getUserInfoByAccessToken({
          data: {
            access_token: h,
            openid: d
          },
          success: function(e) {
            i ? (0,
              p.setCookie)("userInfo", JSON.stringify(e), c) : (0,
              p.setCookie)("userInfo_" + o, JSON.stringify(e), c),
              this.setOpenidByAppid({
                appId: o,
                openId: e.openid,
                openid_cypher: e.openid_cypher
              }),
              r(e)
          }
            .bind(this),
          tgError: function(e) {
            503 == e.code && (i ? (0,
              p.setCookie)("access_token", "") : (0,
              p.setCookie)("access_token_" + o, ""),
              i ? (0,
                p.removeCookie)("access_token", "") : (0,
                p.removeCookie)("access_token_" + o, ""),
              location.replace(t(o)))
          }
            .bind(this)
        }) : f && g === a ? l.weixin.getInfoByCode({
          data: {
            code: f,
            appid: o
          },
          success: function(e) {
            var t = e.access_token
              , n = new Date
              , a = n.getTime() + 72e5;
            i ? (0,
              p.setCookie)("access_token", t, new Date(a)) : (0,
              p.setCookie)("access_token_" + o, t, new Date(a));
            try {
              i ? (0,
                p.setCookie)("userInfo", JSON.stringify(e && e.userInfo), c) : (0,
                p.setCookie)("userInfo_" + o, JSON.stringify(e && e.userInfo), c)
            } catch (e) {
              alert(e.message)
            }
            this.setOpenidByAppid({
              appId: o,
              openId: e.userInfo && (e.userInfo.openid || e.userInfo.openId),
              openid_cypher: e.openid_cypher
            }),
              r(e.userInfo)
          }
            .bind(this)
        }) : location.replace(t(o))
      }
      ,
      t.default = new h
  }
  , function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = function(e) {
      if ("[object Object]" === Object.prototype.toString.call(e))
        return e;
      var t = /^\s*(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/
        , o = t.exec(e || "") || [];
      return {
        href: o[0] || "",
        hrefNoHash: o[1] || "",
        hrefNoSearch: o[2] || "",
        domain: o[3] || "",
        protocol: o[4] || "",
        doubleSlash: o[5] || "",
        authority: o[6] || "",
        username: o[8] || "",
        password: o[9] || "",
        host: o[10] || "",
        hostname: o[11] || "",
        port: o[12] || "",
        pathname: o[13] || "",
        directory: o[14] || "",
        filename: o[15] || "",
        search: o[16] || "",
        hash: o[17] || ""
      }
    }
      , i = function() {};
    i.prototype.addParams = function(e, t, o) {
      if (!e || !t || $.isEmptyObject(t))
        return e;
      var i = e.match(/#.*$/)
        , r = i && i.length && i[0]
        , n = e.replace(/#.*$/, "").match(/\?.*$/)
        , a = n && n.length && n[0]
        , s = e.split("#")[0].split("?")[0]
        , c = $.extend({}, this._getUrlData(a, !0), t);
      for (var u in c)
        void 0 !== c[u] && null !== c[u] && (s = /\?/.test(s) ? s + "&" + encodeURIComponent(u) + "=" + encodeURIComponent(c[u]) : s + "?" + encodeURIComponent(u) + "=" + encodeURIComponent(c[u]));
      return s + (r ? r : "")
    }
      ,
      i.prototype.removeParams = function(e) {
        if (!e || !/\?/.test(e))
          return e;
        for (var t, o = e.split("#"), i = o[0], r = i.split("?")[0], n = i.split("?")[1] ? i.split("?")[1].split("&") : [], a = arguments.length, s = 1; s < a; s++)
          for (t = 0; t < n.length; t++)
            0 === n[t].indexOf(arguments[s] + "=") && (n.splice(t, 1),
              t -= 1);
        return r + (n.length ? "?" + n.join("&") : "") + (o[1] ? "#" + o[1] : "")
      }
      ,
      i.prototype._getUrlData = function(e, t, o) {
        var i, r, n, a, s = {}, c = "&";
        return e ? (e.replace(/^\?/, "").split(c).forEach(function(e, c) {
          if (i = e.split("="),
            n = i.length,
            /^json/.test(i[0]))
            s[decodeURIComponent(i[0])] = JSON.parse(decodeURIComponent(i[1]));
          else {
            var u = i[0];
            t || (u = u.replace(/^cache_/, "")),
              u = decodeURIComponent(u),
              r = decodeURIComponent(i[1]),
            "null" !== r && "undefined" !== r && (o && u in s ? (a = s[u],
              Array.isArray(a) ? s[u].push(decodeURIComponent(i[1])) : s[u] = [a, decodeURIComponent(i[1])]) : s[u] = decodeURIComponent(i[1])),
            s[u] && "string" == typeof s[u] && (s[u] = s[u].replace(/\?10000skip(=true)?/, ""))
          }
        }),
          s) : {}
      }
      ,
      i.prototype.updateParams = function(e, t) {
        t = t || {};
        var i = this.getUrlParams(!0)
          , r = $.extend({}, i, t)
          , n = o(e).hrefNoSearch;
        return this.addParams(n, r)
      }
      ,
      i.prototype.getUrlParams = function(e, t) {
        var o = window.location.search;
        return o ? this._getUrlData(o.slice(1, o.length), e, t) : {}
      }
      ,
      t.default = new i
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.removeCookie = t.getCookie = t.setCookie = void 0;
    var r = o(6)
      , n = i(r)
      , a = o(111)
      , s = i(a)
      , c = function(e, t, o) {
      var i = {
        path: "/",
        domain: s.default.tgDomain
      };
      return o && (i.expires = o),
        n.default.cookie(e, t, i)
    }
      , u = function(e) {
      return n.default.cookie(e)
    }
      , p = function(e) {
      var t = {
        path: "/",
        domain: s.default.tgDomain
      };
      return n.default.cookie.remove(e, t)
    };
    t.setCookie = c,
      t.getCookie = u,
      t.removeCookie = p
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.searchweb = t.amazon = t.recommendService = t.unionPay = t.pushserv = t.interact = t.search = t.aiTalk = t.point = t.pay = t.park = t.discover = t.img = t.item = t.imSer = t.show = t.saleafter = t.order = t.coupon = t.member = t.weixin = t.base = void 0;
    var r = o(116)
      , n = i(r)
      , a = o(123)
      , s = i(a)
      , c = o(124)
      , u = i(c)
      , p = o(125)
      , d = i(p)
      , l = o(126)
      , m = i(l)
      , y = o(127)
      , h = i(y)
      , f = o(128)
      , g = i(f)
      , v = o(129)
      , b = i(v)
      , k = o(130)
      , C = i(k)
      , _ = o(131)
      , S = i(_)
      , P = o(132)
      , w = i(P)
      , A = o(133)
      , x = i(A)
      , O = o(134)
      , j = i(O)
      , T = o(135)
      , I = i(T)
      , M = o(136)
      , q = i(M)
      , B = o(137)
      , D = i(B)
      , L = o(138)
      , R = i(L)
      , N = o(139)
      , E = i(N)
      , U = o(140)
      , G = i(U)
      , W = o(141)
      , F = i(W)
      , J = o(142)
      , V = i(J)
      , H = o(143)
      , Q = i(H);
    t.base = n.default,
      t.weixin = s.default,
      t.member = u.default,
      t.coupon = d.default,
      t.order = m.default,
      t.saleafter = h.default,
      t.show = g.default,
      t.imSer = b.default,
      t.item = C.default,
      t.img = S.default,
      t.discover = w.default,
      t.park = x.default,
      t.pay = j.default,
      t.point = I.default,
      t.aiTalk = q.default,
      t.search = D.default,
      t.interact = R.default,
      t.pushserv = E.default,
      t.unionPay = G.default,
      t.recommendService = F.default,
      t.amazon = V.default,
      t.searchweb = Q.default
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      }
      : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }
      , n = o(3)
      , a = i(n)
      , s = o(6)
      , c = i(s)
      , u = o(117)
      , p = o(111)
      , d = i(p)
      , l = o(121)
      , m = i(l)
      , y = o(122)
      , h = i(y)
      , f = function() {
      "online" === d.default.env ? this.domain = "//base.51tiangou.com" : this.domain = "//base." + d.default.env + ".66buy.com.cn"
    };
    f.prototype.cityList = function(e) {
      var t = this;
      e.type = "GET",
        t._serviceAjaxCom("/publics/city/list", e)
    }
      ,
      f.prototype.isHaveHomepage = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/store/isHaveHomepage", e)
      }
      ,
      f.prototype.getMemberAddress = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/store/getMemberAddress", e)
      }
      ,
      f.prototype.storeCreditCard = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/storeCreditCard/queryByCateIds", e)
      }
      ,
      f.prototype.storeLocation = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/notice/query/storeLocation", e)
      }
      ,
      f.prototype.cityLocate = function(e) {
        var t = this;
        e.type = "GET",
          t._serviceAjaxCom("/publics/city/locate", e)
      }
      ,
      f.prototype.hotCity = function(e) {
        var t = this;
        e.type = "GET",
          t._serviceAjaxCom("/publics/city/hot/list", e)
      }
      ,
      f.prototype.queryProByStoreId = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/storeAddress/queryProByStoreId", e)
      }
      ,
      f.prototype.queryPickUpSiteByStoreId = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/pickupsite/queryPickUpSiteByStoreId", e)
      }
      ,
      f.prototype.storeInfo = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/store/info", e)
      }
      ,
      f.prototype.judgeStoreByCity = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/store/judgeStoreByCity", e)
      }
      ,
      f.prototype._serviceAjaxCom = function(e, t) {
        return t.url = this.domain + e,
          (0,
            u.request)(t)
      }
      ,
      f.prototype._getGpsShop = function(e, t) {
        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
          , i = this
          , n = void 0;
        return e && t ? n = {
          latitude: e,
          longitude: t,
          type: o
        } : "object" === ("undefined" == typeof e ? "undefined" : r(e)) ? n = e : (e = c.default.cookie("lat"),
          t = c.default.cookie("lon"),
          n = {
            latitude: e,
            longitude: t,
            type: o
          }),
          n.type = "POST",
          i._serviceAjaxCom("/publics/store/nearby/store", n)
      }
      ,
      f.prototype.rad = function(e) {
        return e * Math.PI / 180
      }
      ,
      f.prototype._getDistance = function(e, t, o, i) {
        var r = 6378.137;
        if ("" == e || "" == t || "" == o || "" == i)
          return 0;
        var n = this.rad(e)
          , a = this.rad(o)
          , s = n - a
          , c = this.rad(t) - this.rad(i)
          , u = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(s / 2), 2) + Math.cos(n) * Math.cos(a) * Math.pow(Math.sin(c / 2), 2)));
        return u *= r,
          u = Math.round(1e4 * u) / 1e4
      }
      ,
      f.prototype.getUsualShop = function(e, t) {
        var o, i = this, e = c.default.cookie("cityId"), r = c.default.cookie("lat"), n = c.default.cookie("lon"), s = JSON.parse(c.default.cookie("usualShop") || "[]"), u = a.default.Deferred();
        return t && (s = s.filter(function(e) {
          return e.source == t
        })),
        s.length && (o = s[0].id),
          o ? u.resolve(o) : r && n ? i._getGpsShop().then(function(o) {
            var a, p, d, l;
            o.success ? (a = o.data,
            a && a.id && (p = a.storeAddress.fkCityId,
              d = i._getDistance(r, n, a.storeAddress.dimension, a.storeAddress.longitude)),
              a && d <= 5 && p == e ? l = a.id : (s = 1 === t ? m.default.filter(function(t) {
                return t.cityId == e
              }) : h.default.filter(function(t) {
                return t.cityId == e
              }),
              s.length && (l = s[0].id))) : o && o.message && "undefined" !== o.message ? c.default.notice(o.message) : c.default.notice("网络好像不给力喔，请检查一下您的网络设置"),
              u.resolve(l)
          }) : (s = 1 === t ? m.default.filter(function(t) {
            return t.cityId == e
          }) : h.default.filter(function(t) {
            return t.cityId == e
          }),
          s.length && (o = s[0].id),
            u.resolve(o)),
          u.promise()
      }
      ,
      f.prototype.allCityStore = function(e) {
        this._serviceAjaxCom("/publics/city/hot/store", e)
      }
      ,
      f.prototype.queryStoreInfoById = function(e) {
        this._serviceAjaxCom("/publics/store/queryStoreInfoById", e)
      }
      ,
      f.prototype.brandQueryAll = function(e) {
        this._serviceAjaxCom("/publics/brand/queryAll", e)
      }
      ,
      f.prototype.queryOnlineShopping = function(e) {
        this._serviceAjaxCom("/publics/store/queryOnlineShopping", e)
      }
      ,
      f.prototype.queryShoppingBycity = function(e) {
        this._serviceAjaxCom("/publics/store/city/shopping", e)
      }
      ,
      f.prototype.queryMarketShopping = function(e) {
        this._serviceAjaxCom("/publics/store/queryMarketShopping", e)
      }
      ,
      f.prototype.storeAndMarketShopping = function(e) {
        this._serviceAjaxCom("/publics/store/storeAndMarketShopping", e)
      }
      ,
      f.prototype.haveStoreCity = function(e) {
        return this._serviceAjaxCom("/publics/city/hot/haveStore", e)
      }
      ,
      f.prototype.pickedMarket = function(e) {
        return this._serviceAjaxCom("/publics/store/queryPickedMarket", e)
      }
      ,
      f.prototype.marketByCity = function(e) {
        return this._serviceAjaxCom("/publics/store/market/cityId", e)
      }
      ,
      f.prototype.queryLicenceByStoreId = function(e) {
        return this._serviceAjaxCom("/publics/businessLicenceInfo/queryByStoreId", e)
      }
      ,
      t.default = new f
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      if (e && e.__esModule)
        return e;
      var t = {};
      if (null != e)
        for (var o in e)
          Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
      return t.default = e,
        t
    }
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function n(e, t) {
      var o = new Date
        , i = o.getFullYear()
        , r = o.getMonth()
        , n = o.getDate();
      (0,
        h.setCookie)("tgVersion", "web/" + i + r + n);
      var a = u.default.defaults(e, t);
      if ("get" !== a.type && "GET" !== a.type || (a.cache = !1),
        a.url)
        switch (v[a.url]) {
          case void 0:
            return v[a.url] = !1,
              s.default.ajax(a);
          case !0:
            return v[a.url] = !1,
              s.default.ajax(a);
          case !1:
            return;
          default:
            return
        }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.request = void 0;
    var a = o(3)
      , s = r(a)
      , c = o(9)
      , u = r(c)
      , p = o(6)
      , d = r(p)
      , l = o(115)
      , m = i(l)
      , y = o(118)
      , h = o(114)
      , f = o(119)
      , g = r(f)
      , v = {};
    t.request = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        , t = (arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          type: "GET",
          dataType: "json",
          async: !0,
          timeout: 1e4,
          xhrFields: {
            withCredentials: !0
          }
        })
        , o = e.success || function() {}
        , i = e.needSecKey || !1
        , r = !1
        , a = e.tgError
        , s = e.tgError
        , c = e.netError
        , u = e.isCheckLogin;
      return e.success = function(t) {
        var i = t.secKey
          , r = t.timestamp;
        i && r && ((0,
          y.setSec)(i),
          (0,
            y.setTimestamp)(r)),
        e.url && (v[e.url] = !0),
          t.success ? o(t.data, t.timestamp, t.code, t) : 888 !== t.code || !u && "undefined" != typeof u ? 889 === t.code ? (0,
            g.default)(location.pathname) && !localStorage.getItem("ssoConfirmed") ? d.default.alert({
            content: "您的账号已在其他终端登录，请重新登录",
            okFn: function() {
              localStorage.setItem("ssoConfirmed", !0),
              d.default.pageIns && d.default.pageIns.changePage("/login/login.html", {
                loginBack: d.default.url(location.href).replace({
                  _rt: Date.now()
                }).pack()
              })
            }
          }) : s && s(t) : 100 === t.code ? (d.default.confirm({
            content: t.message,
            cancelText: "算了",
            cancelFn: function() {},
            okText: "去下载",
            okFn: function() {
              d.default.pageIns.changePage("/index/loadAndroid.html")
            }
          }),
          s && s(t)) : s ? s(t) : t && t.message && "undefined" !== t.message ? d.default.notice(t.message) : d.default.notice("网络好像不给力喔，请检查一下您的网络设置") : d.default.pageIns && d.default.pageIns.changePage("/login/login.html")
      }
        ,
        e.error = function(t, o, i) {
          c && "function" == typeof c ? (v[e.url] = void 0,
            c(t, o, i)) : a && "function" == typeof a ? a(t, o, i) : "error" === o && 0 === t.status || d.default.notice("网络好像不给力喔，请检查一下您的网络设置")
        }
        ,
        e.data = e.data || {},
        i ? null != (0,
          y.getSec)() && void 0 != (0,
          y.getSec)() ? (0,
          y.getSec)() !== -1 || "true" != d.default.cookie("isLogin") || r ? (e.data.secKey = (0,
          y.getSec)(),
          e.data.timestamp = (0,
            y.getTimestamp)(),
          e.data.secValue = (0,
            y.cheatBreaker)(),
          n(e, t)) : (r = !0,
          m.member.secKey({
            success: function(o, i, r, a) {
              return (0,
                y.setSec)(a.secKey),
                (0,
                  y.setTimestamp)(a.timestamp),
                e.data.secKey = (0,
                  y.getSec)(),
                e.data.timestamp = (0,
                  y.getTimestamp)(),
                e.data.secValue = (0,
                  y.cheatBreaker)(),
                n(e, t)
            }
          })) : m.member.secKey({
          success: function(o, i, r, a) {
            return (0,
              y.setSec)(a.secKey),
              (0,
                y.setTimestamp)(a.timestamp),
              e.data.secKey = (0,
                y.getSec)(),
              e.data.timestamp = (0,
                y.getTimestamp)(),
              e.data.secValue = (0,
                y.cheatBreaker)(),
              n(e, t)
          }
        }) : n(e, t)
    }
  }
  , function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o, i, r = function() {
      return o
    }, n = function(e) {
      o = e
    }, a = function(e) {
      return i
    }, s = function(e) {
      i = e
    }, c = function(e, t) {
      var o = r() || e || void 0
        , i = a() || t
        , n = (o || "") + "";
      return null == o || o == -1 ? o : [8 * (o + 8), o + i % 1e6, 2e3 + o, o + 821029, +n[n.length - 1], o % 10 * +n[n.length - 1] - o, i + o, 777, 987648, 3 + o][o % 10]
    };
    t.getSec = r,
      t.setSec = n,
      t.getTimestamp = a,
      t.setTimestamp = s,
      t.cheatBreaker = c
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = function(e) {
        return e = e.replace("/", ""),
          n.default.some(function(t) {
            var o = new RegExp("^" + e + "$")
              , i = t.replace("./tpl/", "");
            return o.test(i)
          })
      }
    ;
    var r = o(120)
      , n = i(r)
  }
  , function(e, t) {
    e.exports = ["./tpl/cards/index.html", "./tpl/cards/memberCenter.html", "./tpl/cards/quanyishuoming.html", "./tpl/cards/sign.html", "./tpl/cards/unbindCard.html", "./tpl/cards/unbindCard.html", "./tpl/counter/myConcern.html", "./tpl/coupon/index.html", "./tpl/discover/myDiscovery.html", "./tpl/fittingShow/userblog.html", "./tpl/giftCard/myGiftCard.html", "./tpl/mine/message/index.html", "./tpl/order/customerList.html", "./tpl/order/pin.html", "./tpl/parking/addCar.html", "./tpl/parking/carManagement.html", "./tpl/parking/confirmOrder.html", "./tpl/parking/index.html", "./tpl/parking/orderFin.html", "./tpl/parking/parkingHelp.html", "./tpl/parking/paymentDetails.html", "./tpl/parking/paymentRecord.html", "./tpl/parking/problemFeedback.html", "./tpl/purse/balance.html", "./tpl/purse/myWallet.html", "./tpl/tempPage/mayLIke.html", "brand/myBrand.html", "cards/bindcardselect.html", "cards/cardbindShop.html", "cards/creditsExchange.html", "cards/dogFoodForCoupon.html", "cards/index.html", "cards/kaikashenqing.html", "cards/memberRights.html", "cards/myCards.html", "cards/repReminder.html", "cards/tradecode.html", "coupon/detail.html", "coupon/index.html", "delivery/rationAddressChange.html", "delivery/rationMine.html", "delivery/rationStore.html", "delivery/rationSuccess.html", "fittingShow/fabushiyixiu.html", "fittingShow/tipOff.html", "mine/address/add.html", "mine/address/edit.html", "mine/address/index.html", "mine/address/select.html", "mine/bank/add.html", "mine/bank/detail.html", "mine/bank/myBank.html", "mine/dashang/add.html", "mine/dashang/complete.html", "mine/dashang/detail.html", "mine/dashang/index.html", "mine/dashang/result.html", "mine/game.html", "mine/idCode.html", "mine/nickname.html", "mine/security/checkSecurityPhone.html", "mine/security/checkSecurityPhone.html", "mine/security/editPwd.html", "mine/security/payPwd.html", "mine/security/phoneSafe.html", "mine/security/setSecurityQuestion.html", "mine/ticketlist.html", "order/detail.html", "order/index.html", "order/verification.html", "purchase/index.html", "purchase/orderConfirm.html", "purchase/orderFin.html", "purchase/payOrder.html", "purchase/preorder.html", "purchase/selectCard.html", "purchase/zhifubaoPay.html", "store/scavengingPurchaseList.html", "wxActivities/winterSell/wodekanjiatuan.html", "./tpl/huodong/selfServiceStore.html", "./tpl/cloudFlashPay/payCode.html"]
  }
  , function(e, t) {
    e.exports = [{
      cityId: 2554,
      id: 137,
      name: "新玛特-大连总店"
    }, {
      cityId: 2480,
      id: 161,
      name: "新玛特-佳木斯店"
    }, {
      cityId: 2703,
      id: 155,
      name: "新玛特-富锦店"
    }, {
      cityId: 2484,
      id: 163,
      name: "新玛特-双鸭山总店"
    }, {
      cityId: 2486,
      id: 165,
      name: "百货大楼-伊春百货大楼"
    }, {
      cityId: 2425,
      id: 249,
      name: "桂林微笑堂商厦"
    }, {
      cityId: 2556,
      id: 14,
      name: "百货大楼-抚顺百货大楼"
    }, {
      cityId: 2555,
      id: 325,
      name: "新玛特-丹东店"
    }, {
      cityId: 2552,
      id: 207,
      name: "本溪商业大厦"
    }, {
      cityId: 2701,
      id: 51,
      name: "新玛特-开原店"
    }, {
      cityId: 2563,
      id: 53,
      name: "新玛特-铁岭店"
    }, {
      cityId: 2462,
      id: 319,
      name: "新玛特-漯河店"
    }, {
      cityId: 2473,
      id: 175,
      name: "新玛特-驻马店总店"
    }, {
      cityId: 2471,
      id: 12,
      name: "新玛特-郑州国贸总店"
    }, {
      cityId: 2468,
      id: 329,
      name: "新玛特-新乡店"
    }, {
      cityId: 2469,
      id: 407,
      name: "新玛特-信阳店"
    }, {
      cityId: 2460,
      id: 55,
      name: "新玛特-开封总店"
    }, {
      cityId: 2470,
      id: 85,
      name: "新玛特-许昌总店"
    }, {
      cityId: 2461,
      id: 503,
      name: "新玛特-洛阳总店"
    }, {
      cityId: 2467,
      id: 93,
      name: "新玛特-商丘店"
    }, {
      cityId: 2481,
      id: 457,
      name: "新玛特-牡丹江店"
    }, {
      cityId: 2479,
      id: 259,
      name: "新玛特-鸡西中心街店"
    }, {
      cityId: 2482,
      id: 235,
      name: "新玛特-七台河店"
    }, {
      cityId: 2755,
      id: 303,
      name: "千盛百货-延吉店"
    }, {
      cityId: 2476,
      id: 273,
      name: "哈尔滨新一百"
    }, {
      cityId: 2571,
      id: 1399,
      name: "海拉尔友谊大厦"
    }, {
      cityId: 2562,
      id: 183,
      name: "新玛特-沈阳中街店"
    }, {
      cityId: 2551,
      id: 205,
      name: "新玛特-鞍山总店"
    }, {
      cityId: 2521,
      id: 203,
      name: "新玛特-吉林店"
    }, {
      cityId: 2600,
      id: 1199,
      name: "麦凯乐-青岛总店"
    }, {
      cityId: 2474,
      id: 3,
      name: "新玛特-大庆店"
    }, {
      cityId: 2483,
      id: 59,
      name: "新玛特-齐齐哈尔店"
    }, {
      cityId: 2524,
      id: 6,
      name: "新玛特-松原店"
    }, {
      cityId: 2557,
      id: 237,
      name: "新玛特-阜新店"
    }, {
      cityId: 2559,
      id: 243,
      name: "百货大楼-锦州百货大楼"
    }, {
      cityId: 2561,
      id: 375,
      name: "麦凯乐-盘锦店"
    }, {
      cityId: 2564,
      id: 449,
      name: "新玛特-营口店"
    }, {
      cityId: 2607,
      id: 1428,
      name: "淄博商厦"
    }, {
      cityId: 2571,
      id: 1399,
      name: "海拉尔友谊大厦"
    }, {
      cityId: 2649,
      id: 1233,
      name: "千盛百货-自贡店"
    }, {
      cityId: 2591,
      id: 1344,
      name: "新玛特-邹平店"
    }]
  }
  , function(e, t) {
    e.exports = [{
      cityId: 2474,
      id: 1157,
      name: "乘风新玛特"
    }, {
      cityId: 2524,
      id: 193,
      name: "松原新玛特"
    }, {
      cityId: 2483,
      id: 1329,
      name: "齐齐哈尔新玛特"
    }, {
      cityId: 2556,
      id: 18,
      name: "新华店"
    }, {
      cityId: 2562,
      id: 181,
      name: "沈阳中街新玛特"
    }, {
      cityId: 2551,
      id: 1077,
      name: "大商超市-鞍山总店"
    }, {
      cityId: 2481,
      id: 979,
      name: "牡丹江新玛特"
    }, {
      cityId: 2476,
      id: 1089,
      name: "哈尔滨新一百"
    }, {
      cityId: 2554,
      id: 20,
      name: "青泥店"
    }, {
      cityId: 2471,
      id: 149,
      name: "建设路店-大商千盛广场"
    }, {
      cityId: 2473,
      id: 57,
      name: "新玛特驻马店总店"
    }, {
      cityId: 2462,
      id: 1029,
      name: "大商超市-漯河新玛特店"
    }, {
      cityId: 2561,
      id: 1113,
      name: "大商超市-步行街总店"
    }, {
      cityId: 2559,
      id: 1073,
      name: "千盛超市-锦州店"
    }, {
      cityId: 2480,
      id: 171,
      name: "大商超市-佳木斯新玛特店"
    }, {
      cityId: 2707,
      id: 1037,
      name: "千盛超市-东港店"
    }]
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = o(117)
      , n = o(111)
      , a = i(n)
      , s = function() {
      "online" === a.default.env ? this.domain = "//wechat.51tiangou.com" : this.domain = "//wechat." + a.default.env + ".66buy.com.cn"
    };
    s.prototype.login = function(e) {
      var t = this;
      e.tgError = e.tgError || function() {}
        ,
        e.data.openid && e.data.openid_cypher ? t._serviceAjaxCom("/publics/bind/login", e) : e.tgError()
    }
      ,
      s.prototype.getOpenid = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        e.type = "GET",
          e.tgError = e.tgError || function() {}
          ,
          e && e.data && e.data.code ? t._serviceAjaxCom("/publics/wechat/getOpenid", e) : e.tgError()
      }
      ,
      s.prototype.sign = function(e) {
        var t = this;
        e.tgError = e.tgError || function() {}
          ,
          e.type = "GET",
          t._serviceAjaxCom("/publics/wechat/sign", e)
      }
      ,
      s.prototype.getImageUrlByServerId = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/wechat/getTempFile", e)
      }
      ,
      s.prototype.getImageUrlByServerIdDebug = function(e) {
        e.type = "POST",
          e.success("wexin/jsadkldjhsakldjlsajdsaljjjksladjlsa")
      }
      ,
      s.prototype._serviceAjaxCom = function(e, t) {
        t.url = this.domain + e,
          (0,
            r.request)(t)
      }
      ,
      s.prototype.getInfoByCode = function(e) {
        var t = this;
        e.data.code && e.data.appid ? t._serviceAjaxCom("/publics/wechat/getUserInfoByAppId", e) : e.tgError({
          success: !1,
          code: 502,
          message: "参数缺失"
        })
      }
      ,
      s.prototype.getUserInfoByAccessToken = function(e) {
        var t = this;
        t._serviceAjaxCom("/publics/wechat/getUserInfoByAccessToken", e)
      }
      ,
      s.prototype.trialVerify = function(e) {
        var t = this;
        t._serviceAjaxCom("/publics/activity/trial/verify", e)
      }
      ,
      s.prototype.trialApply = function(e) {
        var t = this;
        t._serviceAjaxCom("/publics/activity/trial/apply", e)
      }
      ,
      s.prototype.giftCardDecrypt = function(e) {
        var t = this;
        t._serviceAjaxCom("/publics/wechat/giftCard/code/decrypt", e)
      }
      ,
      s.prototype.unionBind = function(e) {
        this._serviceAjaxCom("/publics/wechat/union/bind", e)
      }
      ,
      s.prototype.quickBind = function(e) {
        var t = this
          , o = e || {};
        o.type = "POST",
          t._serviceAjaxCom("/publics/wechat/union/quickBind", o)
      }
      ,
      t.default = new s
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = o(117)
      , n = o(111)
      , a = i(n)
      , s = function() {
      "online" === a.default.env ? this.domain = "//mserv.51tiangou.com" : this.domain = "//mserv." + a.default.env + ".66buy.com.cn"
    };
    s.prototype.memberInfo = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        , t = this;
      return e.type = "GET",
        t._serviceAjaxCom("/publics/member/info", e)
    }
      ,
      s.prototype.cardCreateAble = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        e.type = "GET",
          t._serviceAjaxCom("/publics/memberCard/store/cardCreateAble", e)
      }
      ,
      s.prototype.createCard = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        e.type = "GET",
          t._serviceAjaxCom("/publics/memberCard/createCard", e)
      }
      ,
      s.prototype.updatePhone = function(e) {
        e.type = "POST",
          this._serviceAjaxCom("/publics/member/update/photo", e)
      }
      ,
      s.prototype.memberNickname = function(e) {
        e.type = "POST",
          this._serviceAjaxCom("/publics/member/update/nickname", e)
      }
      ,
      s.prototype.memberSignature = function(e) {
        e.type = "POST",
          this._serviceAjaxCom("/publics/member/update/signature", e)
      }
      ,
      s.prototype.socialProfile = function(e) {
        e.type = "GET",
          this._serviceAjaxCom("/publics/member/socialProfile", e)
      }
      ,
      s.prototype.mineInfo = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        return e.type = "GET",
          t._serviceAjaxCom("/publics/mine/info", e)
      }
      ,
      s.prototype.baseInfo = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e.type = "GET",
          this._serviceAjaxCom("/publics/mine/baseInfo", e)
      }
      ,
      s.prototype.attention = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        return e.type = "GET",
          t._serviceAjaxCom("/publics/member/counter/attention", e)
      }
      ,
      s.prototype.storeAttention = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        return e.type = "GET",
          t._serviceAjaxCom("/publics/member/store/subscribed", e)
      }
      ,
      s.prototype.openState = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        e.type = "GET",
          t._serviceAjaxCom("/publics/member/openState", e)
      }
      ,
      s.prototype.close = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        e.type = "POST",
          this._serviceAjaxCom("/publics/member/close", e)
      }
      ,
      s.prototype.storeToCard = function(e) {
        e.type = "POST",
          this._serviceAjaxCom("/publics/memberCard/storeToCard", e)
      }
      ,
      s.prototype.validateMemberCard = function(e) {
        e.type = "POST",
          this._serviceAjaxCom("/publics/memberIdentity/validate", e)
      }
      ,
      s.prototype.specialAddOrUpdate = function(e) {
        e.type = "POST",
          this._serviceAjaxCom("/publics/memberIdentity/special/addOrUpdate", e)
      }
      ,
      s.prototype.specialQueryByMemberId = function(e) {
        e.type = "POST",
          this._serviceAjaxCom("/publics/memberIdentity/special/queryByMemberId", e)
      }
      ,
      s.prototype.secKey = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/app/secKey", e)
      }
      ,
      s.prototype.scoreLimit = function(e) {
        this._serviceAjaxCom("/publics/store/conf/score/limit", e)
      }
      ,
      s.prototype.memberAddressList = function(e) {
        this._serviceAjaxCom("/publics/memberAddress/list", e)
      }
      ,
      s.prototype.getAddressById = function(e) {
        this._serviceAjaxCom("/publics/memberAddress/getById", e)
      }
      ,
      s.prototype.getDefaultAddress = function(e) {
        this._serviceAjaxCom("/publics/memberAddress/queryDefault", e)
      }
      ,
      s.prototype._serviceAjaxCom = function(e, t) {
        return t.url = this.domain + e,
          (0,
            r.request)(t)
      }
      ,
      s.prototype.unbind = function(e) {
        return e.data.cid ? void this._serviceAjaxCom("/publics/memberCard/unbind", e) : (e.success([]),
          !1)
      }
      ,
      s.prototype.noValidate = function(e) {
        e.type = "POST",
          this._serviceAjaxCom("/publics/memberCard/bind/noValidate", e)
      }
      ,
      s.prototype.cidBind = function(e) {
        e.type = "POST",
          this._serviceAjaxCom("/publics/memberCard/cidBind", e)
      }
      ,
      s.prototype.identityList = function(e) {
        this._serviceAjaxCom("/publics/memberIdentity/getMemberIdentityList", e)
      }
      ,
      s.prototype.identityGetById = function(e) {
        this._serviceAjaxCom("/publics/memberIdentity/getById", e)
      }
      ,
      s.prototype.identityGetByName = function(e) {
        this._serviceAjaxCom("/publics/memberIdentity/getByName", e)
      }
      ,
      s.prototype.identityAdd = function(e) {
        e.type = "POST",
          this._serviceAjaxCom("/publics/memberIdentity/add", e)
      }
      ,
      s.prototype.identityUpdate = function(e) {
        e.type = "POST",
          this._serviceAjaxCom("/publics/memberIdentity/update", e)
      }
      ,
      s.prototype.identityDelete = function(e) {
        this._serviceAjaxCom("/publics/memberIdentity/delete", e)
      }
      ,
      s.prototype.fastRegister = function(e) {
        e.type = "POST",
          this._serviceAjaxCom("/publics/register/fastRegister", e)
      }
      ,
      s.prototype.authCode = function(e) {
        e.type = "POST",
          this._serviceAjaxCom("/publics/authCode/send", e)
      }
      ,
      s.prototype.weChatLogin = function(e) {
        e.type = "POST",
          this._serviceAjaxCom("/publics/login/wechatLogin", e)
      }
      ,
      s.prototype.subscribed = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        return e.type = "GET",
          t._serviceAjaxCom("/publics/member/store/subscribed", e)
      }
      ,
      s.prototype.memberCodePage = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this._serviceAjaxCom("/publics/member/memberCode/page/get", e)
      }
      ,
      s.prototype.sendMemberVerificationCode = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/sms/sendMemberVerificationCode", e)
      }
      ,
      s.prototype.validateOldCellphone = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/member/validateOldCellphone", e)
      }
      ,
      s.prototype.sendVerificationCodeForWeb = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/sms/sendVerificationCodeForWeb", e)
      }
      ,
      s.prototype.updateCellphone = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/member/update/cellphone", e)
      }
      ,
      s.prototype.getRecognitionState = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/member/facial/getState", e)
      }
      ,
      s.prototype.recognitionClose = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/member/facial/off", e)
      }
      ,
      s.prototype.recognitionOpen = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/member/facial/on", e)
      }
      ,
      s.prototype.flagStoreSubscribed = function(e) {
        e.type = "POST",
          this._serviceAjaxCom("/publics/member/brand/subscribed", e)
      }
      ,
      s.prototype.memberSubscribed = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/publics/member/brand/queryMemberSubscribed", e)
      }
      ,
      s.prototype.memberCollect = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/publics/collect", e)
      }
      ,
      s.prototype.validate = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/publics/code/validate", e)
      }
      ,
      s.prototype.setDefaultAddress = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/publics/memberAddress/new/default", e)
      }
      ,
      s.prototype.unbindWechat = function(e) {
        return this._serviceAjaxCom("/publics/member/unbindWechat", e)
      }
      ,
      s.prototype.manualProcessing = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/publics/member/cancel/cancelProcessing", e)
      }
      ,
      s.prototype.recordReason = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/publics/member/cancel/recordReason", e)
      }
      ,
      s.prototype.agree = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/publics/member/cancel/agree", e)
      }
      ,
      s.prototype.destroyValidate = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/publics/member/cancel/validate", e)
      }
      ,
      s.prototype.destroyStart = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/publics/member/cancel/start", e)
      }
      ,
      s.prototype.updDefault = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/publics/memberIdentity/updDefault", e)
      }
      ,
      s.prototype.consent = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/publics/member/cancel/consent", e)
      }
      ,
      t.default = new s
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = o(117)
      , n = o(111)
      , a = i(n)
      , s = function() {
      "online" === a.default.env ? this.domain = "//coupon.51tiangou.com" : this.domain = "//coupon." + a.default.env + ".66buy.com.cn"
    };
    s.prototype.activityQcList = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        , t = this;
      e.type = "POST",
        t._serviceAjaxCom("/publics/activity/qc/list", e)
    }
      ,
      s.prototype.activityRuleGet = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/activity/rule/get", e)
      }
      ,
      s.prototype._serviceAjaxCom = function(e, t) {
        return t.url = this.domain + e,
          (0,
            r.request)(t)
      }
      ,
      s.prototype.giftCardInformation = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        return e.type = "POST",
          t._serviceAjaxCom("/publics/weBankGiftCard/information", e)
      }
      ,
      s.prototype.queryReturnApply = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        return e.type = "POST",
          t._serviceAjaxCom("/publics/weBankGiftCard/queryReturnApply", e)
      }
      ,
      s.prototype.returnApply = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        return e.type = "POST",
          t._serviceAjaxCom("/publics/weBankGiftCard/returnApply", e)
      }
      ,
      s.prototype.couponCodeAdd = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        return e.type = "POST",
          e.needSecKey = !0,
          t._serviceAjaxCom("/publics/couponCode/add", e)
      }
      ,
      s.prototype.addShareCouponCode = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        return e.type = "POST",
          t._serviceAjaxCom("/publics/addShareCouponCode", e)
      }
      ,
      s.prototype.webankCouponAdd = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        return e.type = "GET",
          e.url = "//coupon.51tiangou.com/publics/weBank/activity/coupon",
          t._serviceAjaxCom("/publics/weBank/activity/coupon", e)
      }
      ,
      s.prototype.couponCodeAddTest = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        e.type = "POST",
          e.needSecKey = !0,
          e.url = "//coupon.51tiangou.com/publics/couponCode/add",
          (0,
            r.request)(e)
      }
      ,
      s.prototype.increaseGroupCount = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/activity/increaseGroupCount", e)
      }
      ,
      s.prototype.addAndGetPayReturnCoupon = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/addAndGetPayReturnCoupon", e)
      }
      ,
      s.prototype.hasCouponByItemId = function(e) {
        var t = this;
        e.type = "GET",
          t._serviceAjaxCom("/publics/isHaveDeliveryGetValidCoupon", e)
      }
      ,
      s.prototype.addByPoint = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/couponCode/addByPoint", e)
      }
      ,
      s.prototype.getBrandNames = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/activity/getBrandNames", e)
      }
      ,
      s.prototype.getGroupOrderDetail = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/group/orderDetail", e)
      }
      ,
      s.prototype.getCounterGroupDetail = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/activity/getCounterGroupDetail", e)
      }
      ,
      s.prototype.getProductCoupon = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/getCouponListForDetailsPage", e)
      }
      ,
      s.prototype.getProductCouponList = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/coupon/activity/promotion/isHave", e)
      }
      ,
      s.prototype.worldCupPlatformForecast = function(e) {
        e.type = "POST",
          this._serviceAjaxCom("/publics/activity/queryPlatformForecast", e)
      }
      ,
      s.prototype.worldCupForecast = function(e) {
        e.type = "POST",
          this._serviceAjaxCom("/publics/activity/forecastWorldCup", e)
      }
      ,
      s.prototype.worldCupForecastQuery = function(e) {
        e.type = "POST",
          this._serviceAjaxCom("/publics/activity/queryForecast", e)
      }
      ,
      s.prototype.activityDetail = function(e) {
        this._serviceAjaxCom("/publics/activity/detail", e)
      }
      ,
      s.prototype.couponDetail = function(e) {
        this._serviceAjaxCom("/publics/coupon/detail", e)
      }
      ,
      s.prototype.couponStoreList = function(e) {
        this._serviceAjaxCom("/publics/coupon/queryStoreList", e)
      }
      ,
      s.prototype.advModule = function(e) {
        this._serviceAjaxCom("/publics/tgAd/advModule", e)
      }
      ,
      s.prototype.queryActivityRuleInfo = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/publics/activity/queryActivityRuleInfo", e)
      }
      ,
      s.prototype.saveLotteryAddr = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/publics/lottery/mallLottery/saveLotteryAddr", e)
      }
      ,
      s.prototype.queryBrands = function(e) {
        this._serviceAjaxCom("/publics/couponCode/queryBrands", e)
      }
      ,
      s.prototype.queryByCounter = function(e) {
        this._serviceAjaxCom("/publics/coupon/scQuery", e)
      }
      ,
      s.prototype.addAmazonCoupon = function(e) {
        e.type = "POST",
          this._serviceAjaxCom("/publics/coupon/r/add", e)
      }
      ,
      s.prototype.getShareInfoByOrderId = function(e) {
        e.type = "POST",
          this._serviceAjaxCom("/publics/activity/groupPurchase/getShareInfoByOrderId", e)
      }
      ,
      s.prototype.conflictVerify = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/publics/conflictVerify", e)
      }
      ,
      t.default = new s
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = o(117)
      , n = o(111)
      , a = i(n)
      , s = function() {
      "online" === a.default.env ? this.domain = "//orderserver.51tiangou.com" : this.domain = "//oserv." + a.default.env + ".66buy.com.cn"
    };
    s.prototype.newPreOrder = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        , t = this;
      e.type = "POST",
        t._serviceAjaxCom("/publics/tgouOrder/newPreOrder", e)
    }
      ,
      s.prototype.preOrder = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/tgouOrder/preOrder", e)
      }
      ,
      s.prototype.validate = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/tgouOrder/validate", e)
      }
      ,
      s.prototype.promotions = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/tgouOrder/promotions", e)
      }
      ,
      s.prototype.calculate = function(e) {
        var t = this;
        t._serviceAjaxCom("/publics/shippingFee/calculate", e)
      }
      ,
      s.prototype.validateSpeedDelivery = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/tgouOrder/validateSpeedDelivery", e)
      }
      ,
      s.prototype.add = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/tgouOrder/add", e)
      }
      ,
      s.prototype.addOrder = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/tgouOrder/addOrder", e)
      }
      ,
      s.prototype.addShopCart = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/shopCart/add", e)
      }
      ,
      s.prototype.cartServeOrder = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/shopCart/cartServeOrder", e)
      }
      ,
      s.prototype.shopCartLimitQty = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/shopCart/shopCartLimitQty", e)
      }
      ,
      s.prototype.payDetail = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/tgouOrder/payOrderInfo", e)
      }
      ,
      s.prototype.pay = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/tgouOrder/pay", e)
      }
      ,
      s.prototype.getUsableCouponItems = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/tgouOrder/getUsableCouponItems", e)
      }
      ,
      s.prototype.queryDeliveryList = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/tgouOrder/queryDeliveryList", e)
      }
      ,
      s.prototype.cartList = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/shopCart/cartList", e)
      }
      ,
      s.prototype.delete = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/shopCart/delete", e)
      }
      ,
      s.prototype.updateQty = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/shopCart/updateQty", e)
      }
      ,
      s.prototype.getActivity = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/shopCart/getActivity", e)
      }
      ,
      s.prototype.end = function(e) {
        var t = this;
        t._serviceAjaxCom("/publics/tgouOrder/end", e)
      }
      ,
      s.prototype.buyAgain = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/tgouOrder/buyAgain", e)
      }
      ,
      s.prototype.getReturnReason = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/returnRequest/returnReason", e)
      }
      ,
      s.prototype.giftProductStock = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/shopCart/giftProductStock", e)
      }
      ,
      s.prototype.cancelReturn = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/returnRequest/cancelReturn", e)
      }
      ,
      s.prototype.addReturnInfo = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/tgouOrder/addReturnInfo", e)
      }
      ,
      s.prototype.returnRequestLogs = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/returnRequest/returnRequestLogs", e)
      }
      ,
      s.prototype.detail = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/tgouOrder/detail", e)
      }
      ,
      s.prototype.addShopCartList = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/shopCart/addList", e)
      }
      ,
      s.prototype.giftcardDetail = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/giftcard/detail", e)
      }
      ,
      s.prototype.verifyGiveCoupon = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/tgouOrder/verifyGiveCoupon", e)
      }
      ,
      s.prototype.preApplyReturn = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/tgouOrder/preApplyReturn", e)
      }
      ,
      s.prototype.getBenefit = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/tgouOrder/allBenefit", e)
      }
      ,
      s.prototype.getALLBenefit = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/tgouOrder/getAllBenefit", e)
      }
      ,
      s.prototype.detail = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/tgouOrder/detail", e)
      }
      ,
      s.prototype._serviceAjaxCom = function(e, t) {
        t.url = this.domain + e,
          (0,
            r.request)(t)
      }
      ,
      s.prototype.getTopOrderInfo = function(e) {
        this._serviceAjaxCom("/publics/tgouOrder/getTopOrderInfo", e)
      }
      ,
      s.prototype.getShopcartList = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/scshop/shopcart/list", e)
      }
      ,
      s.prototype.shopcartAdd = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/scshop/shopcart/add", e)
      }
      ,
      s.prototype.shopcartReduce = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/scshop/shopcart/reduce", e)
      }
      ,
      s.prototype.shopcartDelete = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/scshop/shopcart/delete", e)
      }
      ,
      s.prototype.addShoppingBag = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/scshop/shopcart/addShoppingBag", e)
      }
      ,
      s.prototype.queryMarketShopping = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/store/queryMarketShopping", e)
      }
      ,
      s.prototype.tgGiftCoupon = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/tgouOrder/tgGiftCoupon", e)
      }
      ,
      s.prototype.productTax = function(e) {
        e.type = "POST",
          this._serviceAjaxCom("/publics/tgouOrder/webProductTax", e)
      }
      ,
      t.default = new s
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = o(117)
      , n = o(111)
      , a = i(n)
      , s = function() {
      "online" === a.default.env ? this.domain = "//saleafter.51tiangou.com" : this.domain = "//saleafter." + a.default.env + ".66buy.com.cn"
    };
    s.prototype.repealCancel = function(e) {
      var t = this;
      e.type = "POST",
        t._serviceAjaxCom("/publics/tgouOrder/repealCancel", e)
    }
      ,
      s.prototype.returnRequestDetail = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/returnRequest/detail", e)
      }
      ,
      s.prototype.applyComplain = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/tgouOrder/return/complain", e)
      }
      ,
      s.prototype.tgouOrdeReturn = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/tgouOrder/return", e)
      }
      ,
      s.prototype.returnCheckPoint = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/tgouOrder/return/checkPoint", e)
      }
      ,
      s.prototype.arbitralCheckPoint = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/tgouOrder/return/checkPointByRRId", e)
      }
      ,
      s.prototype.queryAmt = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/returnRequest/queryAmt", e)
      }
      ,
      s.prototype._serviceAjaxCom = function(e, t) {
        t.url = this.domain + e,
          (0,
            r.request)(t)
      }
      ,
      t.default = new s
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = o(117)
      , n = o(111)
      , a = i(n)
      , s = function() {
      "online" === a.default.env ? this.domain = "//show.51tiangou.com" : this.domain = "//show." + a.default.env + ".66buy.com.cn"
    };
    s.prototype.crowdAdd = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        , t = this;
      e.type = "POST",
        t._serviceAjaxCom("/crowd/item/add", e)
    }
      ,
      s.prototype.friendRelationAdd = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        e.type = "POST",
          t._serviceAjaxCom("/friendRelation/add", e)
      }
      ,
      s.prototype.friendRelationRemove = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        e.type = "POST",
          t._serviceAjaxCom("/friendRelation/remove", e)
      }
      ,
      s.prototype.buyerShowClose = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        e.type = "POST",
          t._serviceAjaxCom("/buyerShow/close", e)
      }
      ,
      s.prototype.addFlower = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        e.needSecKey = !0,
          e.type = "POST",
          t._serviceAjaxCom("/buyerShow/addFlower", e)
      }
      ,
      s.prototype.crowdDelete = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        e.type = "POST",
          t._serviceAjaxCom("/crowd/item/delete", e)
      }
      ,
      s.prototype.crowdCancel = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        e.type = "POST",
          t._serviceAjaxCom("/crowd/item/cancel", e)
      }
      ,
      s.prototype.showSubjectQueryTop = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        e.type = "POST",
          t._serviceAjaxCom("/showSubject/queryTop", e)
      }
      ,
      s.prototype.followAdd = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        e.type = "POST",
          t._serviceAjaxCom("/label/follow/add", e)
      }
      ,
      s.prototype.followCancel = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        e.type = "POST",
          t._serviceAjaxCom("/label/follow/cancel", e)
      }
      ,
      s.prototype._serviceAjaxCom = function(e, t) {
        t.url = this.domain + e,
          (0,
            r.request)(t)
      }
      ,
      s.prototype.labelFlower = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        e.type = "POST",
          t._serviceAjaxCom("/labelFlower/add", e)
      }
      ,
      t.default = new s
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = o(117)
      , n = o(111)
      , a = i(n)
      , s = function() {
      "online" === a.default.env ? this.domain = "//imserv.51tiangou.com/publics" : this.domain = "//imserv." + a.default.env + ".66buy.com.cn/publics"
    };
    s.prototype.getByMemberId = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        , t = this;
      e.type = "POST",
        t._serviceAjaxCom("/tgou/easemob/getByMemberId", e)
    }
      ,
      s.prototype.getAccount = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        e.type = "POST",
          t._serviceAjaxCom("/tgou/easemob/getAccount", e)
      }
      ,
      s.prototype.getServiceNo = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        e.type = "POST",
          t._serviceAjaxCom("/tgou/easemob/kefu/serverNo", e)
      }
      ,
      s.prototype.getSkillGroup = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        e.type = "POST",
          t._serviceAjaxCom("/tgou/easemob/getSkillGroup", e)
      }
      ,
      s.prototype._serviceAjaxCom = function(e, t) {
        t.url = this.domain + e,
          (0,
            r.request)(t)
      }
      ,
      s.prototype.getServiceList = function(e) {
        return this._serviceAjaxCom("/tgou/getUserList", e)
      }
      ,
      t.default = new s
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = o(117)
      , n = o(111)
      , a = i(n)
      , s = o(114)
      , c = function() {
      "online" === a.default.env ? this.domain = "//item.51tiangou.com" : this.domain = "//item." + a.default.env + ".66buy.com.cn"
    };
    c.prototype.sugProduct = function(e) {
      var t = this;
      e.type = "POST",
        e.data = e.data || {},
        e.data.uuid = (0,
          s.getCookie)("tgs_uuid"),
        t._serviceAjaxCom("/mallProduct/recommend/byMember", e)
    }
      ,
      c.prototype.recommendDailySignByMember = function(e) {
        var t = this;
        e.type = "POST",
          e.data = e.data || {},
          e.data.uuid = (0,
            s.getCookie)("tgs_uuid"),
          t._serviceAjaxCom("/recommend/dailySign/byMember", e)
      }
      ,
      c.prototype.recommendCartByMember = function(e) {
        var t = this;
        e.type = "POST",
          e.data = e.data || {},
          e.data.uuid = (0,
            s.getCookie)("tgs_uuid"),
          t._serviceAjaxCom("/recommend/cart/byMember", e)
      }
      ,
      c.prototype.orderDetailRecItems = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/recommend/order/detail/recItems", e)
      }
      ,
      c.prototype.sugProductInOrderFin = function(e) {
        var t = this;
        e.type = "POST",
          e.data.uuid = (0,
            s.getCookie)("tgs_uuid"),
          e.data.cellPhone = (0,
            s.getCookie)("cellPhone"),
          e.data.memberId = (0,
            s.getCookie)("memberId"),
        e.data.id && t._serviceAjaxCom("/front/listing/search/order/sug", e)
      }
      ,
      c.prototype.addShoppingCart = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/front/market/addShoppingCart", e)
      }
      ,
      c.prototype.category = function(e) {
        var t = this;
        e.type = "GET",
          t._serviceAjaxCom("/search/aggregation/market/category", e)
      }
      ,
      c.prototype.notEvaluatedRecItems = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/recommend/order/notEvaluated/recItems", e)
      }
      ,
      c.prototype.orderAllRecItems = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/recommend/order/all/recItems", e)
      }
      ,
      c.prototype.pendingPaymentRecItems = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/recommend/order/pendingPayment/recItems", e)
      }
      ,
      c.prototype.pendingDeliveryRecItems = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/recommend/order/pendingDelivery/recItems", e)
      }
      ,
      c.prototype.orderArrivingRecItems = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/recommend/order/arriving/recItems", e)
      }
      ,
      c.prototype.marketCategory = function(e) {
        var t = this;
        e.type = "GET",
          t._serviceAjaxCom("/search/aggregation/category", e)
      }
      ,
      c.prototype.queryDetail = function(e) {
        var t = this;
        e.type = "GET",
          t._serviceAjaxCom("/front/listing/query/detail", e)
      }
      ,
      c.prototype.search = function(e) {
        var t = this;
        e.type = "GET",
          t._serviceAjaxCom("/front/listing/search", e)
      }
      ,
      c.prototype.productFaq = function(e) {
        var t = this;
        e.type = "GET",
          t._serviceAjaxCom("/front/listing/productFaq", e)
      }
      ,
      c.prototype._serviceAjaxCom = function(e, t) {
        return t.url = this.domain + e,
          (0,
            r.request)(t)
      }
      ,
      c.prototype.updDelItemCollection = function(e) {
        var t = this;
        t._serviceAjaxCom("/mallActivityProductToFitting/updDelItemCollection", e)
      }
      ,
      c.prototype.aggregationFilter = function(e) {
        e.type = "POST",
          this._serviceAjaxCom("/search/aggregation/filter", e)
      }
      ,
      c.prototype.aggregationPlatformFilter = function(e) {
        e.type = "POST",
          this._serviceAjaxCom("/search/aggregation/platform/filter", e)
      }
      ,
      c.prototype.suggestProduct = function(e) {
        e.type = "POST",
          this._serviceAjaxCom("/search/suggest/oversea/items", e)
      }
      ,
      c.prototype.similar = function(e) {
        e.type = "POST",
          this._serviceAjaxCom("/recommend/shopping/similar", e)
      }
      ,
      c.prototype.queryBrandByTopBizId = function(e) {
        e.type = "POST",
          this._serviceAjaxCom("/frontBizCategory/queryBrandByTopBizId", e)
      }
      ,
      c.prototype.itemDetailInfo = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/front/listing/itemDetailInfo", e)
      }
      ,
      c.prototype.queryOverseasCompleteWords = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/search/oversea/queryCompleteWords", e)
      }
      ,
      c.prototype.queryPlatformCompleteWords = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/search/platform/queryCompleteWords", e)
      }
      ,
      c.prototype.queryMallCompleteWords = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/search/mall/queryCompleteWords", e)
      }
      ,
      c.prototype.queryMarketCompleteWords = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/search/market/queryCompleteWords", e)
      }
      ,
      c.prototype.getPlatformSug = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/search/suggest/platform/items", e)
      }
      ,
      t.default = new c
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = o(117)
      , n = o(111)
      , a = i(n)
      , s = function() {
      "online" === a.default.env ? this.domain = "//img.51tiangou.com" : this.domain = "//img." + a.default.env + ".66buy.com.cn"
    };
    s.prototype._serviceAjaxCom = function(e, t) {
      t.url = this.domain + e,
        (0,
          r.request)(t)
    }
      ,
      s.prototype.syncImg = function(e) {
        e.type = "POST",
          e.processData = !1,
          e.contentType = !1,
          this._serviceAjaxCom("/fileUploader/syncImg", e)
      }
      ,
      t.default = new s
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = o(117)
      , n = o(111)
      , a = i(n)
      , s = function() {
      "online" === a.default.env ? this.domain = "//discover.51tiangou.com" : this.domain = "//discover." + a.default.env + ".66buy.com.cn"
    };
    s.prototype._serviceAjaxCom = function(e, t) {
      return t.url = this.domain + e,
        (0,
          r.request)(t)
    }
      ,
      s.prototype.delDiscover = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/front/discover/delete", e)
      }
      ,
      s.prototype.getCommentNum = function(e) {
        return e.type = "GET",
          this._serviceAjaxCom("/front/evaluation/member/num", e)
      }
      ,
      s.prototype.hideEvaluation = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/front/evaluation/hidden", e)
      }
      ,
      s.prototype.delReply = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/front/comment/delete", e)
      }
      ,
      s.prototype.addReply = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/front/comment/add", e)
      }
      ,
      s.prototype.like = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/front/liked/selected", e)
      }
      ,
      s.prototype.likeCancel = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/front/liked/canceled", e)
      }
      ,
      s.prototype.report = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/front/report/add", e)
      }
      ,
      s.prototype.concern = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/front/fans/concern", e)
      }
      ,
      s.prototype.unconcern = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/front/fans/unconcern", e)
      }
      ,
      s.prototype.isOfficeV = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e.type = "POST",
          this._serviceAjaxCom("/front/userRole/isOfficeV", e)
      }
      ,
      s.prototype.hasEvaluated = function(e) {
        return this._serviceAjaxCom("/front/evaluation/check/evaluated", e)
      }
      ,
      s.prototype.releaseEvaluate = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/front/evaluation/release", e)
      }
      ,
      s.prototype.evaluateByCounter = function(e) {
        return this._serviceAjaxCom("/front/evaluation/counter/statistic", e)
      }
      ,
      t.default = new s
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = o(117)
      , n = o(111)
      , a = i(n)
      , s = function() {
      "online" === a.default.env ? this.domain = "//park.51tiangou.com" : this.domain = "//park." + a.default.env + ".66buy.com.cn"
    };
    s.prototype.queryPayDetails = function(e) {
      var t = this;
      e.type = "POST",
        t._serviceAjaxCom("/publics/parkPay/queryPayDetails", e)
    }
      ,
      s.prototype.queryPayDetail = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/parkPay/queryPayDetail", e)
      }
      ,
      s.prototype.addCar = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/parkCar/addCar", e)
      }
      ,
      s.prototype.deleteCar = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/parkCar/deleteCar", e)
      }
      ,
      s.prototype.submitParkQuestion = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/parkCar/submitParkQuestion", e)
      }
      ,
      s.prototype.queryQA = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/parkCar/queryQA", e)
      }
      ,
      s.prototype.queryPayDetail = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/parkPay/queryPayDetail", e)
      }
      ,
      s.prototype.feedBackQuestions = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/parkCar/feedBackQuestions", e)
      }
      ,
      s.prototype.payOptions = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/parkPay/payOptions", e)
      }
      ,
      s.prototype.commit = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/parkPay/payOptions/commit", e)
      }
      ,
      s.prototype._serviceAjaxCom = function(e, t) {
        t.url = this.domain + e,
          (0,
            r.request)(t)
      }
      ,
      t.default = new s
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = o(117)
      , n = o(111)
      , a = i(n)
      , s = function() {
      "online" === a.default.env ? this.domain = "//pay.51tiangou.com" : this.domain = "//pay." + a.default.env + ".66buy.com.cn"
    };
    s.prototype.successNotify = function(e) {
      e.error = function() {}
        ,
        e.tgError = function() {}
        ,
        this._serviceAjaxCom("/callback/payQueryStatus", e)
    }
      ,
      s.prototype._serviceAjaxCom = function(e, t) {
        t.url = this.domain + e,
          (0,
            r.request)(t)
      }
      ,
      s.prototype.personOpen = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/webank/open", e)
      }
      ,
      s.prototype.bindBankCard = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/webank/bindBankCard", e)
      }
      ,
      s.prototype.unBindBankCard = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/webank/unBindBankCard", e)
      }
      ,
      s.prototype.queryBindBankCards = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/webank/queryBindBankCards", e)
      }
      ,
      s.prototype.changePhoneNumber = function(e) {
        var t = this;
        return e.type = "POST",
          t._serviceAjaxCom("/webank/modifyPhoneNo", e)
      }
      ,
      s.prototype.pwdChange = function(e) {
        var t = this;
        return e.type = "POST",
          t._serviceAjaxCom("/webank/pwdChange", e)
      }
      ,
      s.prototype.pwdReset = function(e) {
        var t = this;
        return e.type = "POST",
          t._serviceAjaxCom("/webank/pwdReset", e)
      }
      ,
      s.prototype.queryPersonPhoneNo = function(e) {
        var t = this;
        return e.type = "POST",
          t._serviceAjaxCom("/webank/queryPersonPhoneNo", e)
      }
      ,
      s.prototype.modifyPhoneNo = function(e) {
        var t = this;
        return e.type = "POST",
          t._serviceAjaxCom("/webank/modifyPhoneNo", e)
      }
      ,
      s.prototype.queryBalance = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        return e.type = "POST",
          t._serviceAjaxCom("/webank/queryBalance", e)
      }
      ,
      s.prototype.personOpen = function(e) {
        var t = this;
        return e.type = "POST",
          t._serviceAjaxCom("/webank/open", e)
      }
      ,
      s.prototype.queryBindBankCards = function(e) {
        var t = this;
        return e.type = "POST",
          t._serviceAjaxCom("/webank/queryBindBankCards", e)
      }
      ,
      s.prototype.recharge = function(e) {
        var t = this;
        return e.type = "POST",
          t._serviceAjaxCom("/webank/recharge", e)
      }
      ,
      s.prototype.bindBankCard = function(e) {
        var t = this;
        return e.type = "POST",
          t._serviceAjaxCom("/webank/bindBankCard", e)
      }
      ,
      s.prototype.getSign = function(e) {
        var t = this;
        return e.type = "get",
          t._serviceAjaxCom("/publics/selfStore/sign", e)
      }
      ,
      t.default = new s
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = o(117)
      , n = o(111)
      , a = i(n)
      , s = function() {
      "online" === a.default.env ? this.domain = "//points.51tiangou.com" : this.domain = "//points." + a.default.env + ".66buy.com.cn"
    };
    s.prototype._serviceAjaxCom = function(e, t) {
      return t.url = this.domain + e,
        (0,
          r.request)(t)
    }
      ,
      s.prototype.sign = function(e) {
        e.type = "POST",
          e.error = function() {}
          ,
          e.tgError = function() {}
          ,
          this._serviceAjaxCom("/publics/member/sign", e)
      }
      ,
      s.prototype.shareSign = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/publics/member/share", e)
      }
      ,
      t.default = new s
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = o(3)
      , n = (i(r),
      o(6))
      , a = (i(n),
      o(117))
      , s = o(111)
      , c = i(s)
      , u = o(121)
      , p = (i(u),
      o(122))
      , d = (i(p),
        function() {
          "online" === c.default.env ? this.domain = "//aitalk.51tiangou.com" : this.domain = "//aitalk." + c.default.env + ".66buy.com.cn"
        }
    );
    d.prototype.welcome = function(e) {
      e.type = "GET",
        this._serviceAjaxCom("/intent/welcome", e)
    }
      ,
      d.prototype.ask = function(e) {
        e.type = "GET",
          this._serviceAjaxCom("/intent/ask", e)
      }
      ,
      d.prototype._serviceAjaxCom = function(e, t) {
        return t.url = this.domain + e,
          (0,
            a.request)(t)
      }
      ,
      t.default = new d
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = o(117)
      , n = o(111)
      , a = i(n)
      , s = (o(114),
        function() {
          "online" === a.default.env ? this.domain = "//search.51tiangou.com" : this.domain = "//search." + a.default.env + ".66buy.com.cn"
        }
    );
    s.prototype._serviceAjaxCom = function(e, t) {
      return t.url = this.domain + e,
        (0,
          r.request)(t)
    }
      ,
      s.prototype.getHotWord = function(e) {
        var t = this;
        e.type = "POST",
          t._serviceAjaxCom("/front/searchWord/hotWordList", e)
      }
      ,
      t.default = new s
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = o(117)
      , n = o(111)
      , a = i(n)
      , s = function() {
      "online" === a.default.env ? this.domain = "//interact.51tiangou.com" : this.domain = "//interact." + a.default.env + ".66buy.com.cn"
    };
    s.prototype.scratchticketDraw = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        , t = this;
      e.type = "GET",
        t._serviceAjaxCom("/publics/scratchticket/draw", e)
    }
      ,
      s.prototype.queryScratchticket = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = this;
        e.type = "GET",
          t._serviceAjaxCom("/publics/scratchticket/checkDraw", e)
      }
      ,
      s.prototype.panoramaPreview = function(e) {
        return this._serviceAjaxCom("/pano/scene/preview", e)
      }
      ,
      s.prototype.panoramaByCounterId = function(e) {
        return this._serviceAjaxCom("/pano/scene/query", e)
      }
      ,
      s.prototype.checkPanorama = function(e) {
        return this._serviceAjaxCom("/pano/scene/check", e)
      }
      ,
      s.prototype._serviceAjaxCom = function(e, t) {
        return t.url = this.domain + e,
          (0,
            r.request)(t)
      }
      ,
      t.default = new s
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = o(3)
      , n = (i(r),
      o(6))
      , a = (i(n),
      o(117))
      , s = o(111)
      , c = i(s)
      , u = function() {
      "online" === c.default.env ? this.domain = "//pushserv.51tiangou.com" : this.domain = "//pushserv." + c.default.env + ".66buy.com.cn"
    };
    u.prototype.query = function(e) {
      e.type = "POST",
        this._serviceAjaxCom("/publics/cycle/query", e)
    }
      ,
      u.prototype._serviceAjaxCom = function(e, t) {
        t.url = this.domain + e,
          (0,
            a.request)(t)
      }
      ,
      t.default = new u
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = o(117)
      , n = o(111)
      , a = i(n)
      , s = function() {
      "online" === a.default.env ? this.domain = "//pay.51tiangou.com" : this.domain = "//pay." + a.default.env + ".66buy.com.cn"
    };
    s.prototype._serviceAjaxCom = function(e, t) {
      t.url = this.domain + e,
        (0,
          r.request)(t)
    }
      ,
      s.prototype.setPassword = function(e) {
        var t = this;
        return e.type = "POST",
          t._serviceAjaxCom("/publics/ysf/password/set", e)
      }
      ,
      s.prototype.verifyPassword = function(e) {
        var t = this;
        return e.type = "POST",
          t._serviceAjaxCom("/publics/ysf/password/verify", e)
      }
      ,
      s.prototype.bindUnionCard = function(e) {
        var t = this;
        return e.type = "POST",
          t._serviceAjaxCom("/publics/ysf/card/bind", e)
      }
      ,
      s.prototype.deleteUnionCard = function(e) {
        var t = this;
        return e.type = "POST",
          t._serviceAjaxCom("/publics/ysf/card/binding/cancel", e)
      }
      ,
      s.prototype.queryUnionCardList = function(e) {
        var t = this;
        return e.type = "GET",
          t._serviceAjaxCom("/publics/ysf/card/binding/query", e)
      }
      ,
      s.prototype.queryUnionSupportCard = function(e) {
        var t = this;
        return e.type = "GET",
          t._serviceAjaxCom("/publics/ysf/banks/query", e)
      }
      ,
      s.prototype.createQrCode = function(e) {
        var t = this;
        return e.type = "POST",
          t._serviceAjaxCom("/publics/ysf/qrCode/create", e)
      }
      ,
      s.prototype.manageQrCode = function(e) {
        var t = this;
        return e.type = "POST",
          t._serviceAjaxCom("/publics/ysf/qrCode/manage", e)
      }
      ,
      s.prototype.queryQrCodeStatus = function(e) {
        var t = this;
        return e.type = "get",
          t._serviceAjaxCom("/publics/ysf/qrCode/status/query", e)
      }
      ,
      s.prototype.queryResult = function(e) {
        var t = this;
        return e.type = "GET",
          t._serviceAjaxCom("/publics/ysf/qrCode/result/query", e)
      }
      ,
      s.prototype.queryRecords = function(e) {
        var t = this;
        return e.type = "GET",
          t._serviceAjaxCom("/publics/ysf/records/query", e)
      }
      ,
      s.prototype.queryInstructions = function(e) {
        var t = this;
        return e.type = "GET",
          t._serviceAjaxCom("/publics/ysf/instructions/query", e)
      }
      ,
      s.prototype.queryCardBindResult = function(e) {
        var t = this;
        return e.type = "GET",
          t._serviceAjaxCom("/publics/ysf/card/bindResult/query", e)
      }
      ,
      s.prototype.setPasswordSafe = function(e) {
        var t = this;
        return e.type = "POST",
          t._serviceAjaxCom("/publics/ysf/safe/password/set", e)
      }
      ,
      s.prototype.verifyPasswordSafe = function(e) {
        var t = this;
        return e.type = "POST",
          t._serviceAjaxCom("/publics/ysf/safe/password/verify", e)
      }
      ,
      s.prototype.bindUnionCardSafe = function(e) {
        var t = this;
        return e.type = "POST",
          t._serviceAjaxCom("/publics/ysf/safe/card/bind", e)
      }
      ,
      s.prototype.deleteUnionCardSafe = function(e) {
        var t = this;
        return e.type = "POST",
          t._serviceAjaxCom("/publics/ysf/safe/card/binding/cancel", e)
      }
      ,
      s.prototype.createQrCodeSafe = function(e) {
        var t = this;
        return e.type = "POST",
          t._serviceAjaxCom("/publics/ysf/safe/qrCode/create", e)
      }
      ,
      s.prototype.manageQrCodeSafe = function(e) {
        var t = this;
        return e.type = "POST",
          t._serviceAjaxCom("/publics/ysf/safe/qrCode/manage", e)
      }
      ,
      s.prototype.queryTimestamp = function(e) {
        var t = this;
        return e.type = "get",
        e.data || (e.data = {}),
          e.data.randomNum = Math.random(),
          t._serviceAjaxCom("/publics/ysf/timestamp/query", e)
      }
      ,
      t.default = new s
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = o(3)
      , n = (i(r),
      o(6))
      , a = (i(n),
      o(117))
      , s = o(111)
      , c = i(s)
      , u = o(121)
      , p = (i(u),
      o(122))
      , d = (i(p),
        function() {
          "online" === c.default.env ? this.domain = "//recommend.51tiangou.com" : this.domain = "//recommend." + c.default.env + ".66buy.com.cn"
        }
    );
    d.prototype.queryRecOpen = function(e) {
      e.type = "POST",
        this._serviceAjaxCom("/publics/config/queryRecOpen", e)
    }
      ,
      d.prototype.updateRecOpen = function(e) {
        e.type = "POST",
          this._serviceAjaxCom("/publics/config/updateRecOpen", e)
      }
      ,
      d.prototype._serviceAjaxCom = function(e, t) {
        return t.url = this.domain + e,
          (0,
            a.request)(t)
      }
      ,
      t.default = new d
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = o(117)
      , n = o(111)
      , a = i(n)
      , s = function() {
      "online" === a.default.env ? this.domain = "//aws-test.51tiangou.com" : this.domain = "//dres3pub60.execute-api.cn-north-1.amazonaws.com.cn"
    };
    s.prototype.amazonCouponList = function(e) {
      var t = this;
      e.type = "POST",
        e.headers = {
          "x-api-key": "sKoORrwA3S41zSw630Mvh2lnGupgE13CaPylI2No"
        },
        e.xhrFields = {
          withCredentials: !1
        },
        t._serviceAjaxCom("/beta/getcoupons", e)
    }
      ,
      s.prototype._serviceAjaxCom = function(e, t) {
        t.url = this.domain + e,
          (0,
            r.request)(t)
      }
      ,
      t.default = new s
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = o(117)
      , n = o(111)
      , a = i(n)
      , s = (o(114),
        function() {
          "online" === a.default.env ? this.domain = "//searchweb.51tiangou.com" : this.domain = "//searchweb." + a.default.env + ".66buy.com.cn"
        }
    );
    s.prototype._serviceAjaxCom = function(e, t) {
      return t.url = this.domain + e,
        (0,
          r.request)(t)
    }
      ,
      s.prototype.category = function(e) {
        return e.type = "GET",
          this._serviceAjaxCom("/search/aggregation/market/category", e)
      }
      ,
      s.prototype.queryOverseasCompleteWords = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/search/oversea/queryCompleteWords", e)
      }
      ,
      s.prototype.queryMarketCompleteWords = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/search/market/queryCompleteWords", e)
      }
      ,
      s.prototype.queryMallCompleteWords = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/search/mall/queryCompleteWords", e)
      }
      ,
      s.prototype.queryPlatformCompleteWords = function(e) {
        return e.type = "POST",
          this._serviceAjaxCom("/search/platform/queryCompleteWords", e)
      }
      ,
      s.prototype.aggregationFilter = function(e) {
        e.type = "POST",
          this._serviceAjaxCom("/search/aggregation/filter", e)
      }
      ,
      s.prototype.aggregationPlatformFilter = function(e) {
        e.type = "POST",
          this._serviceAjaxCom("/search/aggregation/platform/filter", e)
      }
      ,
      t.default = new s
  }
  , function(e, t, o) {
    var i, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      }
      : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }
    ;
    !function(r) {
      i = function() {
        return r()
      }
        .call(t, o, t, e),
        !(void 0 !== i && (e.exports = i))
    }(function() {
      function e(e, t, o) {
        var i = this;
        if (!i.config.disabled) {
          var e = e || {}
            , r = (i.config,
            i.data)
            , n = i.toQueryString(t)
            , a = e.url || e.event || r.url
            , s = /\?/.test(a) ? "&" : "?"
            , c = n ? s + n : ""
            , u = i.rq("cityId") || i.getCookie("cityId") || e.cityId
            , p = i.rq("storeId") || i.getCookie("storeId") || e.storeId
            , d = e.counterId || ""
            , l = i.rq("scp")
            , m = {
            uu: r.uuid,
            ur: encodeURIComponent(a + c),
            or: encodeURIComponent(window.location.href),
            gl: i.getCookie("global") || "webapp",
            re: encodeURIComponent(e.referrer || r.referrer),
            mi: i.getCookie("memberId"),
            ci: u,
            si: p,
            cc: i.rq("counterId") || d.toString(),
            dn: document.domain,
            lat: i.getCookie("lat"),
            lon: i.getCookie("lon"),
            so: r.source,
            rs: r.results,
            ws: r.whereabouts,
            pt: i.getPlatform(),
            scp: l,
            position: _.get(r, "position"),
            style: _.get(r, "style"),
            paging: _.get(r, "paging"),
            page: e.page || "*.*.*.*"
          };
          i.get(o, m)
        }
      }
      function t() {
        function t() {}
        return t.prototype.get = function(e, t) {
          var o = this
            , i = o.toQueryString(t)
            , r = document.createElement("img");
          r.src = e + "?t=" + +new Date + (i ? "&" + i : "");
          var n = document.getElementsByTagName("body")[0];
          r.style.display = "none",
            n.parentNode.insertBefore(r, n)
        }
          ,
          t.prototype.baoguang = function(e, t, o) {
            var i = this;
            if (!i.config.disabled && e) {
              var r = i.data
                , n = {
                uu: r.uuid,
                gl: i.getCookie("global") || "webapp",
                scp: e,
                bk: t,
                mi: i.getCookie("memberId"),
                traceId: o
              }
                , a = this.host() + "/ep.gif";
              i.get(a, n)
            }
          }
          ,
          t.prototype.trackSCP = function(e, t, o) {
            var i = this;
            if (!i.config.disabled && e) {
              var r = i.data
                , n = {
                uu: r.uuid,
                gl: i.getCookie("global") || "webapp",
                scp: e,
                bk: t,
                mi: i.getCookie("memberId"),
                traceId: o
              }
                , a = this.host() + "/scp.gif";
              i.get(a, n)
            }
          }
          ,
          t.prototype.trackPage = function(t) {
            t = t || {},
              t.type = 1,
              e.call(this, t, t.data || {}, this.host() + "/tgs.gif")
          }
          ,
          t.prototype.trackSearch = function(t, o) {
            if (t) {
              var i = this
                , r = {};
              i.data = i.data || {},
                _.each(o, function(e, t) {
                  i.data[t] = e
                }),
                r.url = t,
                e.call(this, r, {}, this.host() + "/sr.gif")
            }
          }
          ,
          t.prototype.setCookie = function(e, t, o) {
            var i = this;
            new Date;
            if (o = o || {},
              o.domain = o.domain || i.config.domain,
            "number" == typeof o.expires) {
              var r = o.expires
                , n = o.expires = new Date;
              n.setTime(+n + 1e3 * r)
            }
            null == t && (o.expires = new Date),
              document.cookie = [e, "=", t, o.expires ? "; expires=" + o.expires.toGMTString() : "", o.domain ? "; domain=" + o.domain : "", o.secure ? "; secure" : "", "; path=/"].join("")
          }
          ,
          t.prototype.getCookie = function(e) {
            return (e = RegExp("(^| )" + e + "=([^;]*)(;|$)").exec(document.cookie)) ? e[2] : null
          }
          ,
          t.prototype.toQueryString = function(e) {
            var t = this
              , o = [];
            switch (t.type(e)) {
              case "array":
                t.each(e, function(e, i) {
                  var r = t.toQueryString(i);
                  r && 0 !== r && o.push(r)
                });
                break;
              case "object":
                t.each(e, function(e, i) {
                  switch (t.type(i)) {
                    case "array":
                      t.each(i, function(t, i) {
                        (null != i || "" !== i) && o.push(e + "=" + i)
                      });
                      break;
                    case "object":
                      t.each(i, function(e, t) {
                        (null != t || "" !== t) && o.push(e + "=" + t)
                      });
                      break;
                    case "function":
                    case "undefined":
                    case "error":
                    case "regexp":
                      break;
                    default:
                      (null != i || "" !== i) && o.push(e + "=" + i)
                  }
                });
                break;
              case "function":
              case "undefined":
              case "error":
              case "regexp":
                return "";
              default:
                return e
            }
            return o.join("&")
          }
          ,
          t.prototype.getPlatform = function() {
            return "c"
          }
          ,
          t.prototype.each = function(e, t) {
            for (var o in e) {
              var i = e[o];
              e.hasOwnProperty(o) && null != i && t(o, i)
            }
          }
          ,
          t.prototype.type = function(e) {
            var t = "undefined" == typeof e ? "undefined" : r(e);
            return "object" != t ? t : null != e.concat ? "array" : null != e.compile ? "regexp" : null == e ? "undefined" : "Error" == e.name ? error : t
          }
          ,
          t.prototype.rq = function(e) {
            var t = new RegExp("(\\?|&)" + e + "=([^&(/#)]*)","gm")
              , o = window.location.href.substr(0).match(t);
            if (null != o) {
              var i = [];
              return o.forEach(function(t, o) {
                t = t.replace(new RegExp("(\\?|&)" + e + "="), ""),
                t && i.push(t)
              }),
                1 == i.length ? i[0] : 0 == i.length ? null : i
            }
            return null
          }
          ,
          t.prototype.host = function() {
            return this.config.host
          }
          ,
          t.prototype.makeurl = function(e) {
            if (!e || 0 !== e.indexOf("/"))
              return null;
            var t = window.location.protocol
              , o = location.port && ":" + location.port;
            location.pathname;
            return t + "//" + document.domain + o + e
          }
          ,
          t.prototype.getUUID = function() {
            var e, t = this, o = t.config.uuidKey, i = "", r = "", n = t.getCookie(o), a = t.uuid;
            try {
              i = sessionStorage.getItem(o),
                r = localStorage.getItem(o)
            } catch (e) {}
            e = n || r || i || a;
            try {
              e != r && localStorage.setItem(o, e),
              e != i && sessionStorage.setItem(o, e)
            } catch (e) {}
            return a != e && (t.uuid = e),
            e != n && t.setCookie(t.config.uuidKey, e, {
              expires: 31536e5
            }),
              e
          }
          ,
          t
      }
      var o = t()
        , i = window._tgs = new o;
      return i.config = {},
        i.config.disabled = !1,
        /51tiangou\.com/.test(document.domain) ? (i.config.domain = "51tiangou.com",
          i.config.host = "//log.51tiangou.com") : /test\.66buy\.com\.cn/.test(document.domain) ? (i.config.domain = "test.66buy.com.cn",
          i.config.host = "//log.test.66buy.com.cn") : /pre\.66buy\.com\.cn/.test(document.domain) ? (i.config.domain = "pre.66buy.com.cn",
          i.config.host = "//log.pre.66buy.com.cn") : /dev\.66buy\.com\.cn/.test(document.domain) ? (i.config.domain = "dev.66buy.com.cn",
          i.config.host = "//log.dev.66buy.com.cn") : i.config.disabled = !0,
        i.config.uuidKey = "tgs_uuid",
        i.config.entryKey = "tgs_entry",
        i.config.firstTimeKey = "first_time",
        i.config.sessionKey = "tgs_session",
        i.data = {
          uuid: i.getUUID(),
          referrer: document.referrer,
          url: location.pathname.substring(1),
          domain: document.domain,
          session: i.getCookie(i.config.sessionKey),
          firstTime: i.getCookie(i.config.firstTimeKey)
        },
        window.onbeforeunload = function() {
          var e = i.data.session;
          null != e && i.setCookie(i.config.sessionKey, e, {
            expires: 600
          });
          var t = i.data.firstTime;
          null != t && i.setCookie(i.config.firstTimeKey, t, {
            expires: 31536e5
          }),
            i.getUUID()
        }
        ,
        _tgs
    })
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = o(146)
      , n = i(r);
    t.default = n.default
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = o(113)
      , n = i(r)
      , a = o(147);
    a.App.updateUrlParams = function(e) {
      try {
        "string" == typeof e && (e = JSON.parse(e));
        var t = n.default.updateParams(location.href, e);
        history.replaceState(null, "app", t)
      } catch (e) {}
    }
      ,
      a.App.headerMenuEvent = function() {}
      ,
      a.App.headStoreEvent = function() {}
      ,
      a.App.changeState = function() {}
      ,
      a.App.hideHeaderMenu = function() {
        try {
          for (var e = document.querySelectorAll("#moreHeaderMenus"), t = 0; t < e.length; t++)
            e[t].style.display = "none"
        } catch (e) {}
      }
      ,
      a.App.showMsgRedPoint = function() {
        var e = document.getElementById("messageRedInfo");
        e && (e.style.display = "block")
      }
      ,
      a.App.hideMsgRedPoint = function() {
        var e = document.getElementById("messageRedInfo");
        e && (e.style.display = "none")
      }
      ,
      a.App.searchEvent = function() {}
      ,
      a.App.tokenCallback = function() {}
      ,
      a.App.gotoFittingShowWatch = function() {}
      ,
      a.App.tgBackEvent = function() {}
      ,
      a.App.tgTrackPage = function() {}
      ,
      a.App.leftFling = function() {}
      ,
      a.App.rightFling = function() {}
      ,
      a.App.nativeCallback = function(e) {
        try {
          var t = JSON.parse(e);
          a.App.prototype.nativeCallbackCache[t.methodName] = t.params;
          var o = a.App.prototype.eventList[t.methodName];
          if (o && o.length)
            for (var i = 0, r = o.length; i < r; i++)
              o[i](t.params)
        } catch (e) {}
      }
      ,
      a.App.on = function(e, t) {
        e in a.App.prototype.eventList || (a.App.prototype.eventList[e] = []),
          a.App.prototype.eventList[e].push(t)
      }
      ,
      a.App.paySuccess = function() {}
      ,
      a.App.wheelShareSuccess = function() {}
      ,
      t.default = new a.App
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function r(e) {
      return maple.cookie(e)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.App = void 0;
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      }
      : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }
      , a = o(146)
      , s = (i(a),
        window.App = window.App || function() {
          this.target = null;
          var e = Date.now()
            , t = this
            , o = function o() {
            var i = null
              , r = Date.now();
            try {
              i = window.webkit.messageHandlers.app
            } catch (e) {}
            "function" == typeof i || "object" === ("undefined" == typeof i ? "undefined" : n(i)) ? (t.target = i,
              t.getTgAppVersion()) : r - e > 2e3 || setTimeout(o, 50)
          };
          o()
        }
    );
    s.prototype.nativeCallbackCache = {},
      s.prototype.eventList = {},
      s.prototype.isSupportIosPay = function() {
        try {
          return this.target ? this.postMessage("isSupportIosPay") : "true" === window.app.isSupportIosPay()
        } catch (e) {
          return !1
        }
      }
      ,
      s.prototype.isSupportPhonePay = function() {
        try {
          return this.target ? this.postMessage("isSupportPhonePay") : "true" === window.app.isSupportPhonePay()
        } catch (e) {
          return !1
        }
      }
      ,
      s.prototype.iosPay = function(e) {
        try {
          return this.target ? this.postMessage("iosPay", [e]) : window.app.iosPay(e)
        } catch (e) {}
      }
      ,
      s.prototype.insertCookie = function(e) {
        try {
          this.target ? this.postMessage("insertCookie", [JSON.stringify(e)]) : window.app.insertCookie(JSON.stringify(e))
        } catch (e) {
          return "false"
        }
      }
      ,
      s.prototype.getMessageMaxId = function(e, t) {
        try {
          return this.target ? this.postMessage("getMessageMaxId", [e, t]) : window.app.getMessageMaxId(e, t)
        } catch (e) {}
      }
      ,
      s.prototype.notice = function(e, t) {
        var o = this;
        try {
          setTimeout(function() {
            o.target ? o.postMessage("showNoticeDialog", [e, t]) : window.app && window.app.showNoticeDialog && window.app.showNoticeDialog(e, t)
          }, 50)
        } catch (e) {}
      }
      ,
      s.prototype.mask = function(e) {
        var t = this;
        e = e || "加载中...";
        try {
          setTimeout(function() {
            t.target ? t.postMessage("showMaskDialog", [e]) : window.app && window.app.showMaskDialog(e)
          }, 50)
        } catch (e) {}
      }
      ,
      s.prototype.unmask = function() {
        var e = this;
        try {
          setTimeout(function() {
            e.target ? e.postMessage("cancelMaskDialog") : window.app && window.app.cancelMaskDialog()
          }, 50)
        } catch (e) {}
      }
      ,
      s.prototype.scrollTo = function(e) {
        e = e || 0;
        try {
          this.target ? this.postMessage("scrollTo", [e]) : window.app.scrollTo(e)
        } catch (e) {}
      }
      ,
      s.prototype.showDateDialog = function(e) {
        e = e || function() {}
          ,
          window.tgOkCallback = function(t) {
            e(t)
          }
        ;
        try {
          this.target ? this.postMessage("showDateDialog", ["tgOkCallback"]) : window.app.showDateDialog("tgOkCallback")
        } catch (e) {}
      }
      ,
      s.prototype.saveDB = function(e, t, o) {
        try {
          this.target ? this.postMessage("saveDB", [e, t, o]) : window.app.saveDB(e, t, o)
        } catch (e) {}
      }
      ,
      s.prototype.findDB = function(e) {
        try {
          return this.target ? this.postMessage("findDB", [e]) : window.app.findDB(e)
        } catch (e) {}
      }
      ,
      s.prototype.codeScan = function() {
        try {
          this.target ? this.postMessage("codeScan") : window.app.codeScan()
        } catch (e) {}
      }
      ,
      s.prototype.getBaseInfo = function() {
        try {
          if (!this.target)
            return window.app.getBaseInfo();
          this.postMessage("getBaseInfo")
        } catch (e) {}
      }
      ,
      s.prototype.isOverlay = function(e) {
        try {
          e ? $(".tg_page").css("position", "fixed") : $(".tg_page").css("position", ""),
            this.target ? this.postMessage("isOverlay", [e]) : window.app.isOverlay(e)
        } catch (e) {}
      }
      ,
      s.prototype.showAlertDialog = function(e) {
        try {
          this.target ? this.postMessage("showAlertDialog", [e]) : window.app.showAlertDialog(e)
        } catch (e) {}
      }
      ,
      s.prototype.showConfirmDialog = function(e) {
        try {
          this.target ? this.postMessage("showConfirmDialog", [e]) : window.app.showConfirmDialog(e)
        } catch (e) {}
      }
      ,
      s.prototype.showListDialog = function(e) {
        try {
          this.target ? this.postMessage("showListDialog", [e]) : window.app.showListDialog(e)
        } catch (e) {}
      }
      ,
      s.prototype.exit = function() {
        try {
          this.target ? this.postMessage("exit") : window.app.exit()
        } catch (e) {}
      }
      ,
      s.prototype.tgBackEvent = function(e) {
        try {
          this.target ? (this.postMessage("getTgAppVersion") < 3 && "android" === r("global") && (e = e.split(":")[1]),
            this.postMessage("tgBackEvent", [e])) : (this.getTgAppVersion() < 3 && "android" === r("global") && (e = e.split(":")[1]),
            window.app.tgBackEvent(e))
        } catch (e) {}
      }
      ,
      s.prototype.tgWebOver = function() {
        var e = !0;
        try {
          $("script").each(function() {
            var t = $(this).attr("src");
            /114\.247\.28\.96/.test(t) && (e = !1)
          }),
            this.target ? e && this.postMessage("tgWebOver") : e && window.app.tgWebOver()
        } catch (e) {}
      }
      ,
      s.prototype.setTgTitle = function(e) {
        try {
          this.target ? this.postMessage("setAppHeaderTitle", [JSON.stringify({
            title: e
          })]) : this.getTgAppVersion() >= 7 ? window.app.setAppHeaderTitle(JSON.stringify({
            title: e
          })) : window.app.setTgTitle(e)
        } catch (e) {}
      }
      ,
      s.prototype.addTgHistory = function(e, t) {
        t = t || "false";
        try {
          this.target ? this.postMessage("addTgHistory", [e, t]) : window.app.addTgHistory(e, t)
        } catch (e) {}
      }
      ,
      s.prototype.tgChangePage = function(e, t, o) {
        try {
          this.target ? this.postMessage("tgChangePage", [e, t, o]) : window.app.tgChangePage(e, t, o)
        } catch (e) {}
      }
      ,
      s.prototype.tgShowWindow = function() {
        try {
          this.target ? this.postMessage("tgWebOver") : window.app.tgWebOver()
        } catch (e) {}
      }
      ,
      s.prototype.tgUpdatePassword = function(e) {
        if (!e)
          return !1;
        try {
          this.target ? this.postMessage("tgUpdatePassword", [e]) : window.app.tgUpdatePassword(e)
        } catch (e) {}
      }
      ,
      s.prototype.tgPageBack = function() {
        try {
          this.target ? this.postMessage("tgPageBack") : window.app.tgPageBack()
        } catch (e) {}
      }
      ,
      s.prototype.tgLogout = function() {
        try {
          this.target ? this.postMessage("tgLogout") : window.app.tgLogout()
        } catch (e) {}
      }
      ,
      s.prototype.cancelStore = function(e, t) {
        try {
          this.target ? this.postMessage("cancelStore", [e, t]) : window.app.cancelStore(e, t)
        } catch (e) {}
      }
      ,
      s.prototype.hideAppMenus = function() {
        try {
          this.target ? this.postMessage("hideAppMenus") : window.app.hideAppMenus()
        } catch (e) {}
      }
      ,
      s.prototype.showAppMenus = function() {
        try {
          this.target ? this.postMessage("showAppMenus") : window.app.showAppMenus()
        } catch (e) {}
      }
      ,
      s.prototype.getTgAppVersion = function() {
        try {
          return this.target ? Number(this.postMessage("getTgAppVersion").toString().match(/\d+/)[0]) : Number(window.app.getTgAppVersion().toString().match(/\d+/)[0])
        } catch (e) {
          return Number(r("hybridVersion")) || 0
        }
      }
      ,
      s.prototype.setUserHeaderImg = function() {
        try {
          this.target ? this.postMessage("setUserHeaderImg") : window.app.setUserHeaderImg()
        } catch (e) {
          return !1
        }
      }
      ,
      s.prototype.customShare = function() {
        try {
          this.target ? this.postMessage("customShare", [JSON.stringify(arguments[0])]) : this.getTgAppVersion() < 3 ? window.app.customShare(arguments[0], arguments[1], arguments[2]) : window.app.customShare(JSON.stringify(arguments[0]))
        } catch (e) {}
      }
      ,
      s.prototype.showWifi = function(e) {
        e = e || "抱歉，没有检测到免费Wi-Fi热点";
        try {
          this.target ? this.postMessage("showWifi", [e]) : window.app.showWifi(e)
        } catch (e) {}
      }
      ,
      s.prototype.updateUsername = function(e) {
        try {
          this.target ? this.postMessage("updateUsername", [e]) : window.app.updateUsername(e)
        } catch (e) {}
      }
      ,
      s.prototype.setCurStoreName = function(e) {
        var t = this;
        try {
          this.target ? this.postMessage("setAppHeaderTitle", [JSON.stringify({
            title: e,
            theme: 1
          })]) : this.getTgAppVersion() >= 9 ? window.app.setAppHeaderTitle(JSON.stringify({
            title: e,
            theme: 1
          })) : window.app.setCurStoreName(e)
        } catch (o) {
          setTimeout(function() {
            t.setCurStoreName(e)
          }, 50)
        }
      }
      ,
      s.prototype.startChatWith = function(e) {
        try {
          this.target ? this.postMessage("startChatWith", [JSON.stringify(e)]) : this.getTgAppVersion() >= 5 && window.app.startChatWith(JSON.stringify(e))
        } catch (e) {}
      }
      ,
      s.prototype.startChatWithService = function(e) {
        try {
          this.target ? this.postMessage("startChatWithService", [JSON.stringify(e)]) : this.getTgAppVersion() >= 5 && ("startChatWithService"in window.app ? window.app.startChatWithService(JSON.stringify(e)) : window.app.startChatWith(JSON.stringify(e)))
        } catch (e) {}
      }
      ,
      s.prototype.setHeaderArrowDirection = function(e) {
        try {
          this.target ? this.postMessage("setHeaderArrowDirection", [e]) : window.app.setHeaderArrowDirection(e)
        } catch (e) {}
      }
      ,
      s.prototype.setAppStateText = function(e) {
        try {
          this.target ? this.postMessage("setAppStateText", [e]) : window.app.setAppStateText(e)
        } catch (e) {}
      }
      ,
      s.prototype.setShareEnable = function() {
        try {
          this.target ? this.postMessage("setShareEnable") : window.app.setShareEnable()
        } catch (e) {}
      }
      ,
      s.prototype.toggleDropList = function() {}
      ,
      s.prototype.setAppArrowDirection = function(e) {
        try {
          this.target ? this.postMessage("setAppArrowDirection", [e]) : window.app.setAppArrowDirection(e)
        } catch (e) {}
      }
      ,
      s.prototype.setAppHeaderTitle = function(e) {
        try {
          this.target ? this.postMessage("setAppHeaderTitle", [JSON.stringify(e)]) : this.getTgAppVersion() >= 7 ? window.app.setAppHeaderTitle(JSON.stringify(e)) : window.app.setTgTitle(e.title)
        } catch (e) {}
      }
      ,
      s.prototype.selectTopic = function(e) {
        try {
          this.target ? this.postMessage("selectTopic", [e]) : window.app.selectTopic(e)
        } catch (e) {}
      }
      ,
      s.prototype.alipay = function(e) {
        try {
          this.target ? this.postMessage("alipay", [e]) : window.app.alipay(e)
        } catch (e) {}
      }
      ,
      s.prototype.pay = function(e, t, o) {
        try {
          this.target ? this.postMessage("pay", [e, t, o]) : window.app.pay(e, t, o)
        } catch (e) {}
      }
      ,
      s.prototype.allPay = function(e, t) {
        try {
          this.target ? this.postMessage("allPay", [e, t]) : window.app.allPay(e, t)
        } catch (e) {}
      }
      ,
      s.prototype.contactCenter = function(e) {
        try {
          this.target ? this.postMessage("contactCenter", [e]) : window.app.contactCenter(e)
        } catch (e) {}
      }
      ,
      s.prototype.setShakeGuestureJSCallback = function(e) {
        try {
          this.target ? this.postMessage("setShakeGuestureJSCallback", [e]) : window.app.setShakeGuestureJSCallback(e)
        } catch (e) {}
      }
      ,
      s.prototype.publishDiscover = function(e) {
        try {
          this.target ? e ? this.postMessage("publishDiscover", [JSON.stringify(e)]) : this.postMessage("publishDiscover") : window.app.publishDiscover(JSON.stringify(e))
        } catch (e) {}
      }
      ,
      s.prototype.playVideo = function(e) {
        e = e || {};
        try {
          this.target ? this.postMessage("playVideo", [JSON.stringify(e)]) : window.app.playVideo(JSON.stringify(e))
        } catch (e) {}
      }
      ,
      s.prototype.changeCover = function(e) {
        e = e || {};
        try {
          this.target ? this.postMessage("changeCover", [JSON.stringify(e)]) : window.app.changeCover(JSON.stringify(e))
        } catch (e) {}
      }
      ,
      s.prototype.shareCrowd = function(e) {
        e = e || {};
        try {
          this.target ? this.postMessage("shareCrowd", [JSON.stringify(e)]) : window.app.shareCrowd(JSON.stringify(e))
        } catch (e) {}
      }
      ,
      s.prototype.share = function(e) {
        e = e || {},
          e.imgUrl = e.imageUrl;
        try {
          this.target ? this.postMessage("share", [JSON.stringify(e)]) : this.getTgAppVersion() < 3 ? window.app.share(e.friendTitle, e.subTitle, e.imageUrl, e.url) : window.app.share(JSON.stringify(e))
        } catch (e) {}
      }
      ,
      s.prototype.popupHttpPoster = function(e) {
        try {
          this.target ? this.postMessage("popupHttpPoster", [JSON.stringify(e)]) : window.app.popupHttpPoster(JSON.stringify(e))
        } catch (e) {}
      }
      ,
      s.prototype.postMessage = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (this.target)
          try {
            return e in this.nativeCallbackCache ? this.nativeCallbackCache[e] : this.target.postMessage(JSON.stringify({
              methodName: e,
              params: t
            }))
          } catch (e) {}
      }
      ,
      s.prototype.makeQrImage = function(e) {
        if (this.getTgAppVersion() > 20171218)
          try {
            this.target ? this.postMessage("makeQrImage", [JSON.stringify(e)]) : window.app.makeQrImage(JSON.stringify(e))
          } catch (e) {}
      }
      ,
      s.prototype.openSearchMiddlePage = function(e) {
        try {
          this.target ? this.postMessage("openSearchMiddlePage", [JSON.stringify(e)]) : window.app.openSearchMiddlePage(JSON.stringify(e))
        } catch (e) {
          console.log(e)
        }
      }
      ,
      s.prototype.disableRefresh = function(e) {
        try {
          this.target ? this.postMessage("disableRefresh", [JSON.stringify(e)]) : window.app.disableRefresh(JSON.stringify(e))
        } catch (e) {}
      }
      ,
      s.prototype.getLastUrlFromNativePage = function(e) {
        try {
          return this.target ? this.postMessage("getLastUrlFromNativePage") : window.app.getLastUrlFromNativePage()
        } catch (e) {}
      }
      ,
      s.prototype.refreshProductListing = function(e) {
        try {
          return this.target ? this.postMessage("refreshProductListing") : window.app.refreshProductListing()
        } catch (e) {}
      }
      ,
      s.prototype.goBindWeixin = function() {
        try {
          this.target ? this.postMessage("goBindWeixin") : this.getTgAppVersion() >= 20170830 && window.app.goBindWeixin()
        } catch (e) {}
      }
      ,
      s.prototype.zhuxiaoSuccessed = function(e) {
        try {
          return this.target ? this.postMessage("zhuxiaoSuccessed") : window.app.zhuxiaoSuccessed()
        } catch (e) {}
      }
      ,
      s.prototype.bindWeixinSuccess = function(e) {
        try {
          return this.target ? this.postMessage("zhuxiaoSuccessed") : window.app.zhuxiaoSuccessed()
        } catch (e) {}
      }
      ,
      t.App = s
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      if (e && e.__esModule)
        return e;
      var t = {};
      if (null != e)
        for (var o in e)
          Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
      return t.default = e,
        t
    }
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.replaceState = t.findClosestLink = t.getDefaultImageUrl = t.removeCookie = t.getCookie = t.setCookie = t.toAbsUrl = t.getUrlParams = t.removeParams = t.addParams = void 0;
    var n = o(6)
      , a = r(n)
      , s = o(111)
      , c = (r(s),
      o(113))
      , u = r(c)
      , p = o(114)
      , d = i(p);
    t.addParams = function(e, t) {
      return u.default.addParams(e, t)
    }
      ,
      t.removeParams = function() {
        return u.default.removeParams.apply(u.default, arguments)
      }
      ,
      t.getUrlParams = function() {
        return u.default.getUrlParams()
      }
      ,
      t.toAbsUrl = function(e) {
        if (!e)
          return !1;
        var t = document.createElement("a");
        return t.href = e,
          t.href
      }
      ,
      t.setCookie = function(e, t, o) {
        return d.setCookie(e, t, o)
      }
      ,
      t.getCookie = function(e) {
        return d.getCookie(e)
      }
      ,
      t.removeCookie = function(e) {
        return d.removeCookie(e)
      }
      ,
      t.getDefaultImageUrl = function() {
        return "//image1.51tiangou.com/tgou2/img2/tgou_logo3.png"
      }
      ,
      t.findClosestLink = function(e) {
        for (; e && ("string" != typeof e.nodeName || "a" !== e.nodeName.toLowerCase()); )
          e = e.parentNode;
        return e
      }
      ,
      t.replaceState = function(e, t, o) {
        t = t || document.title;
        a.default.support.replaceState && history.replaceState(e, t, o)
      }
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      if (e && e.__esModule)
        return e;
      var t = {};
      if (null != e)
        for (var o in e)
          Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
      return t.default = e,
        t
    }
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.positionRun = void 0;
    var n = o(113)
      , a = r(n)
      , s = o(6)
      , c = r(s)
      , u = o(111)
      , p = (r(u),
      o(115))
      , d = i(p)
      , l = o(114)
      , m = function(e) {
      var t = a.default.getUrlParams()
        , o = (0,
        l.getCookie)();
      t.cityId || t.cityid ? d.base.cityList({
        data: {
          id: t.cityId || t.cityid
        },
        tgError: function() {
          e.resolve(2554, "大连")
        },
        error: function() {
          e.resolve(2554, "大连")
        },
        success: function(t) {
          var o = void 0
            , i = void 0;
          t.length ? (o = t[0].id,
            i = t[0].name) : (o = 2554,
            i = "大连"),
            y(),
            e.resolve(o, i)
        }
      }) : o.cityId && o.cityName ? (y(),
        e.resolve(o.cityId, o.cityName)) : (y(),
        e.resolve(2554, "大连"))
    }
      , y = function() {
      var e, t = location.pathname;
      if (!(0,
        l.getCookie)("isGPS") && ("/" === t || "/index.html" === t || "/discover/index.html" === t)) {
        console.log("进入定位");
        try {
          e = {
            timeout: 2e3,
            enableHighAccuracy: !0,
            maximumAge: 5e3
          },
            setTimeout(function() {
              c.default.device("weixin") ? wx.ready(function() {
                wx.getLocation({
                  success: function(e) {
                    var t = e.latitude
                      , o = e.longitude;
                    h(t, o)
                  },
                  fail: function() {
                    (0,
                      l.setCookie)("isGPS", !0)
                  }
                })
              }) : navigator.geolocation.getCurrentPosition(function(e) {
                var t = e.coords
                  , o = void 0 === t ? {} : t
                  , i = o.latitude
                  , r = o.longitude;
                h(i, r)
              }, function(e) {
                (0,
                  l.setCookie)("isGPS", !0)
              }, e)
            }, 100)
        } catch (e) {
          (0,
            l.setCookie)("isGPS", !0)
        }
      }
    }
      , h = function(e, t) {
      try {
        isNaN(e) || isNaN(e) ? (0,
          l.setCookie)("isGPS", !0) : ((0,
          l.setCookie)("isGPS", !0, "1d"),
          f(e, t))
      } catch (e) {
        (0,
          l.setCookie)("isGPS", !0)
      }
    }
      , f = function(e, t) {
      d.base.judgeStoreByCity({
        data: {
          longitude: t,
          latitude: e
        },
        success: function(o) {
          o && d.base.cityLocate({
            data: {
              latitude: e,
              longitude: t
            },
            success: function(o) {
              var i, r;
              try {
                i = o.id,
                  r = o.name,
                i != c.default.cookie("cityId") && null != i && (0,
                  l.getCookie)("cityName") && c.default.confirm({
                  title: "提示信息",
                  content: "您当前选择的城市为" + (0,
                    l.getCookie)("cityName") + "，是否切换至" + r + "？",
                  okFn: function() {
                    (0,
                      l.setCookie)("cityId", i, "365d"),
                      (0,
                        l.setCookie)("cityName", r, "365d"),
                      (0,
                        l.removeCookie)("storeId"),
                      (0,
                        l.setCookie)("lat", e, "1d"),
                      (0,
                        l.setCookie)("lon", t, "1d"),
                      c.default.url().replace("cityId"),
                      c.default.url().replace("storeId"),
                      c.default.url().replace("source"),
                      location.reload()
                  }
                })
              } catch (e) {}
              (0,
                l.setCookie)("lat", e, "1d"),
                (0,
                  l.setCookie)("lon", t, "1d")
            }
          })
        },
        tgError: function() {
          d.base.cityLocate({
            data: {
              latitude: e,
              longitude: t
            },
            success: function(o) {
              var i, r;
              try {
                i = o.id,
                  r = o.name,
                i != c.default.cookie("cityId") && null != i && (0,
                  l.getCookie)("cityName") && c.default.confirm({
                  title: "提示信息",
                  content: "您当前选择的城市为" + (0,
                    l.getCookie)("cityName") + "，是否切换至" + r + "？",
                  okFn: function() {
                    (0,
                      l.setCookie)("cityId", i, "365d"),
                      (0,
                        l.setCookie)("cityName", r, "365d"),
                      (0,
                        l.removeCookie)("storeId"),
                      (0,
                        l.setCookie)("lat", e, "1d"),
                      (0,
                        l.setCookie)("lon", t, "1d"),
                      c.default.url().replace("cityId"),
                      c.default.url().replace("storeId"),
                      c.default.url().replace("source"),
                      location.reload()
                  }
                })
              } catch (e) {}
              (0,
                l.setCookie)("lat", e, "1d"),
                (0,
                  l.setCookie)("lon", t, "1d")
            }
          })
        }
      })
    };
    t.positionRun = m
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      if (e && e.__esModule)
        return e;
      var t = {};
      if (null != e)
        for (var o in e)
          Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
      return t.default = e,
        t
    }
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.checkLoginRun = void 0;
    var n = o(113)
      , a = (r(n),
      o(6))
      , s = r(a)
      , c = o(111)
      , u = (r(c),
      o(115))
      , p = i(u)
      , d = o(114)
      , l = o(112)
      , m = r(l)
      , y = function(e, t) {
      s.default.device.weixin && t && "true" !== f("autoLogin") && "true" !== sessionStorage.getItem("wxLogout") && "true" !== (0,
        d.getCookie)("isLogin") ? h(e) : b(e)
    }
      , h = function(e) {
      m.default.getOpenidUtil({
        success: function(t, o) {
          g(t, o, e),
            f("autoLogin", "true")
        },
        fail: function() {
          b(e),
            f("autoLogin", "true")
        },
        always: function() {}
      })
    }
      , f = function() {
      var e = s.default.cookie
        , t = "ios" === e("global") || "android" === e("global")
        , o = t ? e.bind(s.default) : sessionStorage.setItem.bind(sessionStorage)
        , i = t ? e.bind(s.default) : sessionStorage.getItem.bind(sessionStorage);
      return arguments.length >= 2 ? o(arguments[0], arguments[1]) : i(arguments[0])
    }
      , g = function(e, t, o) {
      p.member.weChatLogin({
        type: "POST",
        data: {
          unionId: m.default.getUnionId()
        },
        success: function(e) {
          (0,
            d.setCookie)("token", e.token, "7d"),
            localStorage.removeItem("ssoConfirmed"),
            v(o, e.token)
        },
        tgError: function(e) {
          e = e || {},
            503 === e.code ? location.reload() : v(o)
        },
        error: function() {
          v(o)
        }
      })
    }
      , v = function(e, t) {
      "true" === f("isCheck") ? e.resolve() : p.member.memberInfo({
        type: "GET",
        data: {
          token: t
        },
        isCheckLogin: !1,
        tgError: function(t) {
          888 === t.code && ((0,
            d.removeCookie)("token"),
            (0,
              d.removeCookie)("isLogin"),
            (0,
              d.removeCookie)("validate"),
            (0,
              d.removeCookie)("memberId"),
            (0,
              d.removeCookie)("cellPhone"),
            (0,
              d.removeCookie)("username"),
            (0,
              d.removeCookie)("nickName"),
            f("isCheck", !0)),
            e.resolve()
        },
        error: function() {
          (0,
            d.removeCookie)("token"),
            (0,
              d.removeCookie)("isLogin"),
            (0,
              d.removeCookie)("validate"),
            (0,
              d.removeCookie)("memberId"),
            (0,
              d.removeCookie)("cellPhone"),
            (0,
              d.removeCookie)("username"),
            (0,
              d.removeCookie)("nickName"),
            f("isCheck", !0),
            e.resolve()
        },
        success: function(t) {
          var o = t.id
            , i = t.nickName
            , r = t.cellPhone
            , n = i || r
            , a = t.validate || 0;
          (0,
            d.setCookie)("memberId", o, "7d"),
            (0,
              d.setCookie)("cellPhone", r, "7d"),
            (0,
              d.setCookie)("username", n, "7d"),
            (0,
              d.setCookie)("isLogin", !0, "7d"),
            (0,
              d.setCookie)("validate", a, "7d"),
            (0,
              d.setCookie)("nickName", i, "7d"),
            f("isCheck", !0),
            e.resolve()
        }
      })
    }
      , b = function(e) {
      "true" === f("isCheck") ? e.resolve() : p.member.memberInfo({
        type: "GET",
        isCheckLogin: !1,
        tgError: function(t) {
          888 === t.code && ((0,
            d.removeCookie)("token"),
            (0,
              d.removeCookie)("isLogin"),
            (0,
              d.removeCookie)("validate"),
            (0,
              d.removeCookie)("memberId"),
            (0,
              d.removeCookie)("cellPhone"),
            (0,
              d.removeCookie)("username"),
            (0,
              d.removeCookie)("nickName"),
            (0,
              d.setCookie)("isLogin", !1),
            f("isCheck", !0)),
            e.resolve()
        },
        error: function() {
          (0,
            d.removeCookie)("token"),
            (0,
              d.removeCookie)("isLogin"),
            (0,
              d.removeCookie)("validate"),
            (0,
              d.removeCookie)("memberId"),
            (0,
              d.removeCookie)("cellPhone"),
            (0,
              d.removeCookie)("username"),
            (0,
              d.removeCookie)("nickName"),
            (0,
              d.setCookie)("isLogin", !1),
            f("isCheck", !0),
            e.resolve()
        },
        success: function(t) {
          var o = t.id
            , i = t.nickName
            , r = t.cellPhone
            , n = i || r;
          t.validate || 0;
          (0,
            d.setCookie)("memberId", o, "7d"),
            (0,
              d.setCookie)("cellPhone", r, "7d"),
            (0,
              d.setCookie)("username", n, "7d"),
            (0,
              d.setCookie)("isLogin", !0, "7d"),
            (0,
              d.setCookie)("validate", 1, "7d"),
            (0,
              d.setCookie)("nickName", i, "7d"),
            f("isCheck", !0),
            e.resolve()
        }
      })
    };
    t.checkLoginRun = y
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.loadWcSdk = void 0;
    var r = o(152)
      , n = i(r)
      , a = o(6)
      , s = i(a);
    t.loadWcSdk = function(e) {
      s.default.device.weixin ? ((0,
        n.default)(["//res.wx.qq.com/open/js/jweixin-1.0.0.js"], "bundle"),
        n.default.ready("bundle", function() {
          e.resolve()
        })) : e.resolve()
    }
  }
  , function(e, t, o) {
    var i, r;
    !function(n, a) {
      "undefined" != typeof e && e.exports ? e.exports = a() : (i = a,
        r = "function" == typeof i ? i.call(t, o, t, e) : i,
        !(void 0 !== r && (e.exports = r)))
    }("$script", function() {
      function e(e, t) {
        for (var o = 0, i = e.length; o < i; ++o)
          if (!t(e[o]))
            return c;
        return 1
      }
      function t(t, o) {
        e(t, function(e) {
          return o(e),
            1
        })
      }
      function o(n, a, s) {
        function c(e) {
          return e.call ? e() : l[e]
        }
        function p() {
          if (!--v) {
            l[g] = 1,
            f && f();
            for (var o in y)
              e(o.split("|"), c) && !t(y[o], c) && (y[o] = [])
          }
        }
        n = n[u] ? n : [n];
        var d = a && a.call
          , f = d ? a : s
          , g = d ? n.join("") : a
          , v = n.length;
        return setTimeout(function() {
          t(n, function e(t, o) {
            return null === t ? p() : (!o && !/^https?:\/\//.test(t) && r && (t = t.indexOf(".js") === -1 ? r + t + ".js" : r + t),
              h[t] ? (g && (m[g] = 1),
                2 == h[t] ? p() : setTimeout(function() {
                  e(t, !0)
                }, 0)) : (h[t] = 1,
              g && (m[g] = 1),
                i(t, p),
                void 0))
          })
        }, 0),
          o
      }
      function i(e, t) {
        var o, i = a.createElement("script");
        i.onload = i.onerror = i[d] = function() {
          i[p] && !/^c|loade/.test(i[p]) || o || (i.onload = i[d] = null,
            o = 1,
            h[e] = 2,
            t())
        }
          ,
          i.async = 1,
          i.src = n ? e + (e.indexOf("?") === -1 ? "?" : "&") + n : e,
          s.insertBefore(i, s.lastChild)
      }
      var r, n, a = document, s = a.getElementsByTagName("head")[0], c = !1, u = "push", p = "readyState", d = "onreadystatechange", l = {}, m = {}, y = {}, h = {};
      return o.get = i,
        o.order = function(e, t, i) {
          !function r(n) {
            n = e.shift(),
              e.length ? o(n, r) : o(n, t, i)
          }()
        }
        ,
        o.path = function(e) {
          r = e
        }
        ,
        o.urlArgs = function(e) {
          n = e
        }
        ,
        o.ready = function(i, r, n) {
          i = i[u] ? i : [i];
          var a = [];
          return !t(i, function(e) {
            l[e] || a[u](e)
          }) && e(i, function(e) {
            return l[e]
          }) ? r() : !function(e) {
            y[e] = y[e] || [],
              y[e][u](r),
            n && n(a)
          }(i.join("|")),
            o
        }
        ,
        o.done = function(e) {
          o([null], e)
        }
        ,
        o
    })
  }
  , function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      }
      : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }
      , i = Date.now();
    t.loadAppInterface = function(e) {
      if (/hybrid=true/.test(document.cookie) && !/global=airmall/.test(document.cookie))
        var t = setInterval(function() {
          var r, n = Date.now();
          try {
            r = window.webkit.messageHandlers.app
          } catch (e) {
            r = window.app
          }
          ("function" == typeof r || "object" === ("undefined" == typeof r ? "undefined" : o(r)) || n - i > 2e3) && (clearInterval(t),
            e.resolve())
        }, 50);
      else
        e.resolve()
    }
  }
  , function(e, t) {
    e.exports = ["tgRedirect", "redirect", "scp", "source_type", "source_weixin_id", "shopid", "JR"]
  }
  , function(e, t) {
    e.exports = {
      "/alonePage/airGuideActivityList1.html": {
        key: ["12", "13"],
        bkParam: "id",
        bk: "special"
      },
      "/brand/categoryList.html": {
        bkParam: "",
        bk: "",
        key: ["07", "class"]
      },
      "/brand/detail.html": {
        bkParam: "id",
        bk: "brand",
        key: ["07", "brand"]
      },
      "/cards/allianceDetail.html": {
        bkParam: "id",
        bk: "ipc",
        key: []
      },
      "/cards/bindcardinfo.html": {
        key: ["05", "bcard"]
      },
      "/cards/cardbindShop.html": {
        key: ["05", "cardd"]
      },
      "/cards/couponDetail.html": {
        key: ["04", "2"],
        bk: "coupon",
        bkParam: "id"
      },
      "/cards/index.html": {
        key: ["05", "mbrct"]
      },
      "/cards/kaikashenqing.html": {
        key: ["05", "activate"]
      },
      "/cards/memberActivity.html": {
        bk: "activity",
        bkParam: "id",
        key: ["05", "mbract"]
      },
      "/cards/memberCenter.html": {
        key: ["05", "center"]
      },
      "/cards/memberEnjoy.html": {
        bkVar: "advertiseId",
        bk: "advertise",
        key: []
      },
      "/cards/memberPointChange.html": {
        key: ["05", "exchange"]
      },
      "/cards/memberPointDetails.html": {
        key: ["05", "detail"]
      },
      "/cards/memberRights.html": {
        key: ["05", "mbrship"]
      },
      "/cards/memberRightsInfo.html": {
        key: ["05", "rights"]
      },
      "/cards/memberSignIn.html": {
        key: ["05", "sign"]
      },
      "/cards/memberSignInExplain.html": {
        key: ["05", "instr"]
      },
      "/cards/myCoupons.html": {
        key: ["05", "mcara"]
      },
      "/cards/quanyishuoming.html": {
        key: ["05", "explain"]
      },
      "/cards/registerMember.html": {
        key: ["05", "mbrupgrad"]
      },
      "/cards/unbindCard.html": {
        key: ["05", "unbcard"]
      },
      "/cards/upgradeMember.html": {
        key: ["05", "mbrupgrad"]
      },
      "/cards/xiaofeimingxi.html": {
        key: ["05", "cdetail"]
      },
      "/cards/xiaofeixiangqing.html": {
        key: ["05", "xdetail"]
      },
      "/chengshihui/huodongrili.html": {
        bkParam: "",
        bk: "",
        key: ["01", "nat"]
      },
      "/chengshihui/index.html": {
        bkParam: "",
        bk: "",
        key: ["01", "ct"]
      },
      "/counter/counterCategory.html": {
        key: ["02", "classl"]
      },
      "/counter/counterGuide.html": {
        key: ["02", "csign"]
      },
      "/counter/counterNews.html": {
        key: ["02", "guide"]
      },
      "/counter/dianZhangTuiJian.html": {
        key: ["02", "collo"]
      },
      "/counter/index.html": {
        key: ["02", "sd"],
        bkParam: "id",
        bk: "counter"
      },
      "/counter/myConcern.html": {
        key: ["05", "mfollow"]
      },
      "/counter/productNew.html": {
        key: ["02", "ctrnew"]
      },
      "/counter/zuiXinShangJia.html": {
        key: ["02", "shelve"]
      },
      "/coupon/cashCouponDetail.html": {
        bk: "coupon",
        bkParam: "id",
        key: ["04", "3"]
      },
      "/coupon/getCouponByQcode.html": {
        bk: "coupon",
        bkParam: "couponId",
        key: ["04", "4"]
      },
      "/coupon/index.html": {
        key: ["05", "mdis"]
      },
      "/coupon/list.html": {
        key: ["04", "dis"]
      },
      "/coupon/searchResultList.html": {
        key: ["04", "1"]
      },
      "/coupon/shopDiscount.html": {
        key: ["04", "1"]
      },
      "/coupon/upcomingCoupon.html": {
        key: ["05", "expired"]
      },
      "/coupon/usedCoupon.html": {
        key: ["05", "check"]
      },
      "/discover/dianzanList.html": {
        key: ["01", "like"]
      },
      "/discover/discoverDetails.html": {
        key: ["01", "place"],
        bkParam: "id",
        bk: "find"
      },
      "/discover/hisDiscovery.html": {
        key: ["01", "hisfind"]
      },
      "/discover/index.html": {
        key: ["01", "fx"]
      },
      "/discover/myDiscovery.html": {
        key: ["01", "myfind"]
      },
      "/discover/chooseAShop": {
        key: ["01", "choicecity"]
      },
      "/farm/index.html": {
        key: ["09", "oa"]
      },
      "/farm/qiang.html": {
        bkParam: "id",
        bk: "activity",
        key: ["12", "4"]
      },
      "/farm/search.html": {
        bkParam: "",
        bk: "",
        key: ["07", "search"]
      },
      "/fitting/myRoom.html": {
        key: ["03", "tc"]
      },
      "/fitting/roomDetail.html": {
        key: ["03", "tdt"]
      },
      "/fitting/saomashibai.html": {
        key: ["03", "sq"]
      },
      "/fitting/shoucangjian.html": {
        key: ["03", "newtc"]
      },
      "/fittingShow/chuandajiaocheng.html": {
        key: ["0301", "course"],
        bkParam: "id",
        bk: "cdjc"
      },
      "/fittingShow/coverDetail.html": {
        key: ["0301", "album"],
        bkParam: "id",
        bk: "cdtl"
      },
      "/fittingShow/coverList.html": {
        key: ["0301", "topic"]
      },
      "/fittingShow/fabushiyixiu": {
        key: ["0301", "rfs"]
      },
      "/fittingShow/fabushiyixiu.html": {
        bkParam: "",
        bk: "",
        key: ["0301", "rfs"]
      },
      "/fittingShow/huodongguize.html": {
        key: ["0301", "rule"]
      },
      "/fittingShow/index.html": {
        key: ["0301", "fs"]
      },
      "/fittingShow/message.html": {
        bkParam: "",
        bk: "",
        key: ["05", "nmsg05"]
      },
      "/fittingShow/publicSuccess.html": {
        key: ["0301", "rs"]
      },
      "/fittingShow/sajiaoxiangqing.html": {
        key: ["0301", "play"]
      },
      "/fittingShow/shiyixiangqing.html": {
        bkParam: "buyerShowId",
        bk: "show",
        key: ["0301", "fd"]
      },
      "/fittingShow/shiyixiu.html": {
        bkParam: "",
        bk: "",
        key: ["0301", "fs"]
      },
      "/fittingShow/suoyoupinlun.html": {
        key: ["0301", "allment"]
      },
      "/fittingShow/tipOff.html": {
        key: ["0301", "report"]
      },
      "/fittingShow/topicIndex.html": {
        bk: "showsubject",
        bkParam: "id",
        key: ["0301", "topic2"]
      },
      "/fittingShow/topicList.html": {
        bkParam: "",
        bk: "",
        key: ["0301", "topic"]
      },
      "/fittingShow/topicSearch.html": {
        bkParam: "",
        bk: "",
        key: ["0301", "sh"]
      },
      "/fittingShow/topicSearchResult.html": {
        key: ["0301", "searchre"]
      },
      "/fittingShow/userblog.html": {
        bkParam: "",
        bk: "",
        key: ["0301", "fact"]
      },
      "/fittingShow/userInfo.html": {
        key: ["0301", "otherpage"]
      },
      "/fittingShow/wodefensi.html": {
        key: ["0301", "fans"]
      },
      "/fittingShow/woganxingqu.html": {
        key: ["0301", "concern"]
      },
      "/friendly/index.html": {
        key: ["02", "friend"]
      },
      "/index.html": {
        key: ["14", "sp"]
      },
      "/index/chengshixuanze.html": {
        bkParam: "",
        bk: "",
        key: ["01", "city"]
      },
      "/index/datangremai.html": {
        bkParam: "",
        bk: "",
        key: ["02", "hot"]
      },
      "/index/loadAndroid.html": {
        bkParam: "",
        bk: "",
        key: ["01", "STAR"]
      },
      "/index/mendianxuanze.html": {
        bkParam: "",
        bk: "",
        key: ["01", "store"]
      },
      "/index/selectCity.html": {
        key: ["01", "sc"]
      },
      "/index/selectShop.html": {
        key: ["02", "s"]
      },
      "/index/selectStore.html": {
        key: ["01", "store"]
      },
      "/index/shopMap.html": {
        key: ["01", "storef"]
      },
      "/login/findPassword.html": {
        key: ["01", "getpw"]
      },
      "/login/login.html": {
        key: ["01", "log"]
      },
      "/login/register.html": {
        key: ["01", "reg"]
      },
      "/login/terms.html": {
        key: ["01", "term"]
      },
      "/login/protectionProtocol.html": {
        key: ["05", "protocol"]
      },
      "/mall/activityList.html": {
        key: ["acti", "acti"]
      },
      "/mall/mallIndex.html": {
        key: ["02", "dd"]
      },
      "/mall/productList.html": {
        key: ["02", "class"],
        bkParam: "code",
        bk: "cate"
      },
      "/mall/searchResult.html": {
        key: ["07", "asrlt"]
      },
      "/mall/specialDetail.html": {
        bkParam: "id",
        bk: "advertise",
        key: []
      },
      "/mine/about.html": {
        key: ["05", "about"]
      },
      "/mine/address/add.html": {
        key: ["05", "newadd"]
      },
      "/mine/address/edit.html": {
        key: ["05", "editadd"]
      },
      "/mine/address/index.html": {
        key: ["05", "mandd"]
      },
      "/mine/myAddress.html": {
        key: ["05", "mandd"]
      },
      "/mine/address/select.html": {
        key: ["05", "chadd"]
      },
      "/mine/bank/add.html": {
        key: ["05", "addbank"]
      },
      "/mine/bank/detail.html": {
        key: ["05", "bankde"]
      },
      "/mine/bank/myBank.html": {
        key: ["05", "mbank"]
      },
      "/mine/bank/quickPayProtocol.html": {
        key: ["05", "protocol"]
      },
      "/mine/faqDetail.html": {
        key: ["05", "question"]
      },
      "/mine/helpCenter.html": {
        key: ["05", "help"]
      },
      "/mine/idCardList.html": {
        key: ["05", "4"]
      },
      "/mine/index.html": {
        key: ["05", "1"]
      },
      "/mine/indexNew.html": {
        key: ["05", "1"]
      },
      "/mine/message/activity.html": {
        key: ["05", "nmsg02"]
      },
      "/mine/message/coupon.html": {
        key: ["05", "nmsg03"]
      },
      "/mine/message/discountNotice.html": {
        key: ["05", "nmsg01"]
      },
      "/mine/message/index.html": {
        key: ["05", "noti"]
      },
      "/mine/message/notificationMessage.html": {
        key: ["05", "nmsg06"]
      },
      "/mine/myAccount.html": {
        key: ["05", "account"]
      },
      "/mine/nickname.html": {
        key: ["05", "nickname"]
      },
      "/mine/onlineService.html": {
        key: ["05", "instant"]
      },
      "/mine/security/checkSecurityPhone.html": {
        key: ["05", "getpd"]
      },
      "/mine/security/editPwd.html": {
        key: ["05", "alter"]
      },
      "/mine/security/payPwd.html": {
        key: ["05", "payword"]
      },
      "/mine/security/payPwdManage.html": {
        key: ["05", "alterpay"]
      },
      "/mine/security/phoneSafe.html": {
        key: ["05", "sephone"]
      },
      "/mine/security/setSecurityQuestion.html": {
        key: ["05", "seqt"]
      },
      "/mine/uploadIdCard.html": {
        key: ["05", "3"]
      },
      "/mine/myTransactionBenefits.html": {
        key: ["05", "myWelfare"]
      },
      "/mine/transactionBenefits.html": {
        key: ["05", "welfareDetails"]
      },
      "/order/cancelReason.html": {
        bkParam: "id",
        bk: "order",
        key: ["10", "calloff"]
      },
      "/order/detail.html": {
        bkParam: "orderId",
        bk: "order",
        key: ["05", "orderdetail"]
      },
      "/order/index.html": {
        key: ["05", "order"]
      },
      "/order/returnApply.html": {
        bkParam: "orderId",
        bk: "order",
        key: ["10", "canord"]
      },
      "/order/returnApplyCashCoupon.html": {
        bkParam: "orderId",
        bk: "order",
        key: []
      },
      "/order/returnDetail.html": {
        bkParam: "orderId",
        bk: "order",
        key: ["10", "return"]
      },
      "/order/transportInfo.html": {
        bkParam: "orderId",
        bk: "order",
        key: ["10", "follow"]
      },
      "/order/refundmentExplain.html": {
        key: ["10", "refunds"]
      },
      "/overseas/index.html": {
        key: ["06", "seaamoy"]
      },
      "/overseas/list.html": {
        key: ["06", "prushop"]
      },
      "/overseas/overseasIntro.html": {
        key: ["06", "seaimport"]
      },
      "/overseas/overseasTop100.html": {
        key: ["12", "top"]
      },
      "/overseas/productList.html": {
        key: ["06", "allpru"]
      },
      "/overseas/qiang.html": {
        bkParam: "id",
        bk: "activity",
        key: ["12", "4"]
      },
      "/overseas/search.html": {
        bkParam: "",
        bk: "",
        key: ["07", "search"]
      },
      "/overseas/recommendedBrand.html": {
        key: ["06", "bdrcmd"]
      },
      "/overseas/superBrand.html": {
        key: ["06", "bdsuper"]
      },
      "/overseas/selectedActivities.html": {
        key: ["06", "atselect"]
      },
      "/overseas/newArrivals.html": {
        key: ["06", "pdnew"]
      },
      "/parking/carManagement.html": {
        key: ["05", "carma"]
      },
      "/parking/confirmOrder.html": {
        key: ["05", "qrorder"],
        bkParam: "id",
        bk: "pay"
      },
      "/parking/index.html": {
        key: ["05", "park"]
      },
      "/parking/orderFin.html": {
        key: ["05", "payjg"],
        bkParam: "id",
        bk: "pay"
      },
      "/parking/parkingHelp.html": {
        key: ["05", "parkaid"]
      },
      "/parking/paymentDetails.html": {
        key: ["05", "charge"],
        bkParam: "id",
        bk: "pay"
      },
      "/parking/paymentRecord.html": {
        key: ["05", "record"]
      },
      "/parking/problemFeedback.html": {
        key: ["05", "quback"]
      },
      "/product/activityDetail.html": {
        bkParam: "id",
        bk: "activity",
        key: ["12", "1"]
      },
      "/product/detail.html": {
        key: ["10", "imgxt"]
      },
      "/product/listing.html": {
        bk: "item",
        bkParam: "id",
        key: ["10", "pd"]
      },
      "/product/orderCancel.html": {
        bkParam: "orderId",
        bk: "order",
        key: ["10", "cancel"]
      },
      "/product/qiangIndex.html": {
        bkParam: "id",
        bk: "activity",
        key: ["12", "6"]
      },
      "/product/searchResult.html": {
        bkParam: "",
        bk: "",
        key: ["07", "dsrlt"]
      },
      "/product/yunhuojia.html": {
        key: ["11", "cslf"]
      },
      "/product/specialCounterSale.html": {
        key: ["12", "zgsalesDetails"]
      },
      "/purchase/haoyoudashang.html": {
        key: ["0301", "tip"]
      },
      "/purchase/index.html": {
        key: ["10", "shopcar"]
      },
      "/purchase/orderConfirm.html": {
        key: ["10", "conmorder"]
      },
      "/order/pin.html": {
        key: ["12", "myptActivity"]
      },
      "/purchase/orderFin.html": {
        bk: "order",
        bkParam: "orderId",
        key: ["10", "payresult"]
      },
      "/purchase/orderOverTime.html": {
        bkParam: "orderId",
        bk: "order",
        key: []
      },
      "/purchase/payOrder.html": {
        bk: "order",
        bkParam: "orderId,ids",
        key: ["10", "payment"]
      },
      "/purchase/preorder.html": {
        key: ["10", "conmorder"]
      },
      "/supermarket/bloodySale.html": {
        key: ["12", "5"],
        bk: "activity",
        bkParam: "id"
      },
      "/supermarket/discountList.html": {
        bkParam: "",
        bk: "",
        key: ["08", "agio"]
      },
      "/supermarket/index.html": {
        key: ["08", "smc"]
      },
      "/supermarket/productClass.html": {
        bkParam: "",
        bk: "",
        key: ["08", "classl"]
      },
      "/supermarket/productList.html": {
        bkParam: "code",
        bk: "cate",
        key: ["08", "class"]
      },
      "/supermarket/superIndex.html": {
        key: ["02", "sd"]
      },
      "/supermarket/topicDetail.html": {
        bk: "advertise",
        bkParam: "id",
        key: []
      },
      "/tempActivity/2015/10/fittingScan.html": {
        key: ["01", "code"]
      },
      "/tempActivity/drawPlate.html": {
        key: ["12", "2"],
        bkParam: "id",
        bk: "activity"
      },
      "/tempPage/mayLIke.html": {
        key: ["13", "wcp"]
      },
      "/tempPage/activeProduct.html": {
        key: ["12", "actpro"]
      },
      "/order/applyCustomer.html": {
        key: ["10", "aftsale"]
      },
      "/order/applyRefund.html": {
        key: ["10", "refund"]
      },
      "/order/refundProcess.html": {
        key: ["10", "refdprcs"]
      },
      "/order/customerDetail.html": {
        key: ["10", "aftsaledtls"]
      },
      "/order/customerList.html": {
        key: ["10", "refdaftsale"]
      },
      "/order/arbitration.html": {
        key: ["10", "aplyfarb"]
      },
      "/order/returnTicket.html": {
        key: ["10", "cprefund"]
      },
      "/tempPage/hundredPeopleActivities.html": {
        key: ["12", "8"]
      },
      "/toSearch.html": {
        key: ["07", "searchsp"]
      },
      "/storeSearch.html": {
        key: ["07", "searchstore"]
      },
      "/overseas/toSearch.html": {
        key: ["07", "searchovse"]
      },
      "/store/wifi.html": {
        key: ["02", "wifi"]
      },
      "/store/counterActivities.html": {
        key: ["02", "sdact"]
      },
      "/store/quickBuy.html": {
        key: ["02", "qukprh"]
      },
      "/store.html": {
        key: ["02", "dd"]
      },
      "/product/brandLimitedTimeGrab.html": {
        key: ["12", "7"]
      },
      "/counter/commodityClassification.html": {
        key: ["14", "bdctgy"]
      },
      "/counter/flagshipProduct.html": {
        key: ["14", "bdctgyrslt"]
      },
      "/counter/flagshipStore.html": {
        key: ["14", "bdflagship"],
        bkParam: "brandId",
        bk: "brand"
      },
      "/counter/flagshipStoreAbout.html": {
        key: ["14", "bdIntr"]
      },
      "/counter/directSupplyOfBrand.html": {
        key: ["14", "bddirect"]
      },
      "/counter/allBrands.html": {
        key: ["14", "bdlist"]
      },
      "/cards/sign.html": {
        key: ["05", "tgsign"]
      },
      "/cards/repReminder.html": {
        key: ["12", "cyclePurchaseLanding"]
      },
      "/cards/dogFoodForCoupon.html": {
        key: ["05", "forcpn"]
      },
      "/salesmanless/index.html": {
        key: ["05", "faceswip"]
      },
      "/mine/aiTalk.html": {
        key: ["15", "ushop"]
      },
      "/mine/aiSkill.html": {
        key: ["15", "skill"]
      },
      "/product/search.html": {
        key: ["07", "ddsearch"]
      },
      "/storeNew.html": {
        key: ["08", "SMC"]
      },
      "/store2018.html": {
        key: ["08", "smcfine"]
      },
      "/mine/idCode.html": {
        key: ["05", "code"]
      },
      "/huodong/component.html": {
        key: ["12", "9"]
      },
      "/store/scavengingPurchase.html": {
        key: ["08", "smgWeb"]
      },
      "/store/scavengingPurchaseList.html": {
        key: ["08", "smgshopcarWeb"]
      },
      "/overseas/overseasSearch.html": {
        key: ["07", "searchovse"]
      },
      "/counterGroup/counterQualityDetail.html": {
        key: ["12", "zgtDetails"]
      },
      "/counterGroup/counterQualityGroup.html": {
        key: ["12", "zgtActivity"]
      },
      "/counterGroup/detailsOfGroupPurchase.html": {
        key: ["12", "zgtGroupBuyingDetails"]
      },
      "/product/thesimilar.html": {
        key: ["10", "similarity"]
      },
      "/product/overseasSecKill.html": {
        key: ["12", "11"],
        bk: "scarebuying",
        bkParam: "advertiseId"
      },
      "/store/storeClass.html": {
        key: ["08", "allCategories"]
      },
      "/store/popularity.html": {
        key: ["08", "popularity"]
      },
      "/store/newArrivals.html": {
        key: ["08", "newproduct"]
      },
      "/store/storeList.html": {
        key: ["08", "categoryDetails"]
      },
      "/tempPage/smartCar.html": {
        key: ["05", "scancoupons"]
      },
      "/huodong/selfServiceStore.html": {
        key: ["08", "uscollect"]
      },
      "/mine/detailedAddress.html": {
        key: ["05", "detailedAddress"]
      },
      "/index/timeLimit.html": {
        key: ["12", "10"],
        bk: "id",
        bkParam: "id"
      },
      "/index/findSimilarity.html": {
        key: ["14", "findSimilarity"]
      },
      "/index/popularity.html": {
        key: ["14", "popularity"]
      },
      "/product/samestyle.html": {
        key: ["14", "sameParagraph"]
      },
      "/index/chooseShop.html": {
        key: ["08", "chooseShop"]
      },
      "/discover/chooseAShop.html": {
        key: ["01", "city"]
      },
      "/cloudFlashPay/payCode.html": {
        key: ["05", "paymentCode"]
      },
      "/cloudFlashPay/bankSupport.html": {
        key: ["05", "supportBank"]
      },
      "/cloudFlashPay/setPassWord.html": {
        key: ["05", "setPaymentPassword"]
      },
      "/cloudFlashPay/cardManage.html": {
        key: ["05", "bankCardmanagement"]
      },
      "/cloudFlashPay/deleteCard.html": {
        key: ["05", "bankCardDetails"]
      },
      "/cloudFlashPay/record.html": {
        key: ["05", "records"]
      },
      "/cloudFlashPay/transactionDetail.html": {
        key: ["05", "transactionDetails"]
      },
      "/cloudFlashPay/about.html": {
        key: ["05", "instructions"]
      },
      "/mine/securityManage.html": {
        key: ["05", "paymentManagement"]
      },
      "/cloudFlashPay/verifyPassWord.html": {
        key: ["05", "unbundlingCards"]
      },
      "/cloudFlashPay/forgetPassWord.html": {
        key: ["05", "forgetPaymentPassword"]
      },
      "/cloudFlashPay/refindPassWord.html": {
        key: ["05", "retrievePaymentPassword"]
      },
      "/cloudFlashPay/unionPaySuccess.html": {
        key: ["10", "ysfpayresult"]
      },
      "/order/notEvaluatedProduct.html": {
        key: ["10", "evaluationList"]
      },
      "/product/evaluate.html": {
        key: ["10", "publishEvaluation"]
      },
      "/counter/storeDetail.html": {
        key: ["02", "zgDetails"]
      },
      "/counter/businessLicense.html": {
        key: ["02", "licence"]
      },
      "/counter/panorama.html": {
        key: ["12", "zgvr"]
      },
      "/tempPage/maiBiSheng.html": {
        key: ["12", "maibisheng"]
      }
    }
  }
  , function(e, t) {
    e.exports = {
      "/index.html": "shouYe",
      "/index/selectCity.html": "xuanZeChengShi",
      "/login/login.html": "dengLu",
      "/login/register.html": "zhuCe",
      "/login/findPassword.html": "zhaoHuiMiMa",
      "/index/selectShop.html": "menDianLieBiao",
      "/fitting/myRoom.html": "shiYiLieBiao",
      "/fitting/index.html": "shiYiJian",
      "/coupon/list.html": "youHui",
      "/mine/index.html": "woDe",
      "/mine/message/index.html": "xiaoXi",
      "/mine/discountNotice.html": "jiangJiaTongZhi",
      "/mine/more.html ": "gengDuo",
      "/overseas/index.html": "kuangJingShouYe",
      "/fittingShow/shiYiPaiZhao.html": "shiYiPaiZhao"
    }
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var r = o(6)
      , n = i(r);
    "m.51tiangou.com" == n.default.url().host && (window.alert = function() {
        console.warn(arguments)
      }
    )
  }
  , function(e, t, o) {
    "use strict";
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = function() {
      function e(e, t) {
        for (var o = 0; o < t.length; o++) {
          var i = t[o];
          i.enumerable = i.enumerable || !1,
            i.configurable = !0,
          "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
      }
      return function(t, o, i) {
        return o && e(t.prototype, o),
        i && e(t, i),
          t
      }
    }()
      , a = o(6)
      , s = i(a)
      , c = o(111)
      , u = i(c)
      , p = {};
    window.localStorage ? p = window.localStorage : (p = {
      getItem: function(e) {
        return e && this.hasOwnProperty(e) ? unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)" + escape(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"), "$1")) : null
      },
      key: function(e) {
        return unescape(document.cookie.replace(/\s*\=(?:.(?!;))*$/, "").split(/\s*\=(?:[^;](?!;))*[^;]?;\s*/)[e])
      },
      setItem: function(e, t) {
        e && (document.cookie = escape(e) + "=" + escape(t) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/",
          this.length = document.cookie.match(/\=/g).length)
      },
      length: 0,
      removeItem: function(e) {
        e && this.hasOwnProperty(e) && (document.cookie = escape(e) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/",
          this.length--)
      },
      hasOwnProperty: function(e) {
        return new RegExp("(?:^|;\\s*)" + escape(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie)
      }
    },
      p.length = (document.cookie.match(/\=/g) || p).length);
    var d = function() {
      function e() {
        r(this, e),
          this.isWeixin = s.default.device("weixin"),
        "online" === u.default.env,
          this.domain = "//nodelog.51tiangou.com"
      }
      return n(e, [{
        key: "_commonReq",
        value: function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            , o = [];
          if ("undefined" == typeof e)
            return !1;
          try {
            for (var i in t)
              t.hasOwnProperty(i) && o.push(i + "=" + t[i]);
            o.push("t=" + Date.now());
            var r = document.createElement("img")
              , n = document.getElementsByTagName("body")[0];
            return r.src = "" + this.domain + e + "?" + o.join("&"),
              r.style.display = "none",
              n.parentNode.insertBefore(r, n),
              !0
          } catch (e) {
            return !1
          }
        }
      }, {
        key: "tag",
        value: function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          return "undefined" != typeof e && this._commonReq("/log/custom/add", {
            key: e,
            message: t
          })
        }
      }, {
        key: "openIdLog",
        value: function() {
          var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
            , t = "hasOpenId"
            , o = s.default.cookie("tgs_uuid")
            , i = o + "_" + t;
          this.isWeixin && !p.getItem(i) && this.tag(t, e) && p.setItem(i, !0)
        }
      }, {
        key: "wcAutoLoginFailLog",
        value: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "api_tg_error"
            , t = "wcAutoLoginFail"
            , o = s.default.cookie("tgs_uuid")
            , i = o + "_" + t;
          this.isWeixin && !sessionStorage.getItem(i) && this.tag(t, e) && sessionStorage.setItem(i, !0)
        }
      }]),
        e
    }();
    t.default = new d
  }
  , function(e, t) {
    "use strict";
    function o(e) {
      var t = e.tagName.toLowerCase();
      e.id && (t += "#" + e.id),
      e.classList.length && (t += "." + [].join.call(e.classList, "."));
      var i = e.parentElement;
      return "BODY" !== i.tagName && (t = o(i) + ">" + t),
        t
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = [];
    t.default = _.debounce(function() {
      if (/66buy\.com\.cn/.test(location.href) && /scpcheck/.test(location.href)) {
        var e = $("a");
        _.each(e, function(e) {
          var t = o(e)
            , r = !_.get(e, "dataset.scp") && _.findIndex(i, function(e) {
            return e.path == t
          }) == -1 && /[a-zA-z]+:\/\/[^\s]+/.test(e.href) && "a#scrollToTop" !== t;
          r && ($(e).css({
            display: "block",
            border: "2px solid black"
          }),
            i.push({
              path: t,
              item: e
            }))
        }),
        i.length && console.log(i)
      }
    }, 500)
  }
]);


input {
  border:1px solid #B3D6EF;
  background:#ffffff;
}
input {
  star : expression(
    onmouseover=function(){this.style.backgroundColor="#D5E9F6"},
    onmouseout=function(){this.style.backgroundColor="#ffffff"})
}