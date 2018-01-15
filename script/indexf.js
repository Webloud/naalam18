window.__NEXT_REGISTER_PAGE('/', function() {
    var comp = module.exports = webpackJsonp([1], {
        134: function(e, t, n) {
            var r = n(220),
                a = r.Symbol;
            e.exports = a
        },
        220: function(e, t, n) {
            var r = n(221),
                a = "object" == typeof self && self && self.Object === Object && self,
                o = r || a || Function("return this")();
            e.exports = o
        },
        221: function(e, t, n) {
            (function(t) {
                var n = "object" == typeof t && t && t.Object === Object && t;
                e.exports = n
            }).call(t, n(34))
        },
        222: function(e, t) {
            function n(e) {
                return r.test(e)
            }
            var r = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
            e.exports = n
        },
        223: function(e, t) {
            function n(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= r
            }
            var r = 9007199254740991;
            e.exports = n
        },
        224: function(e, t, n) {
            function r(e) {
                return null != e && o(e.length) && !a(e)
            }
            var a = n(507),
                o = n(223);
            e.exports = r
        },
        453: function(e, t, n) {
            e.exports = n(454)
        },
        454: function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(19),
                o = r(a),
                i = n(23),
                l = r(i),
                u = n(4),
                s = r(u),
                f = n(1),
                c = r(f),
                d = n(2),
                p = r(d),
                h = n(5),
                m = r(h),
                g = n(6),
                y = r(g),
                v = n(7),
                b = (r(v), n(0)),
                x = r(b),
                _ = n(65),
                w = r(_),
                E = n(11),
                k = r(E),
                S = n(455),
                P = r(S),
                C = n(64),
                j = r(C),
                I = n(209),
                O = r(I),
                T = n(27),
                A = r(T),
                z = n(63),
                N = r(z),
                V = n(456),
                M = r(V),
                D = n(458),
                F = r(D),
                R = n(459),
                L = r(R),
                H = n(460),
                B = r(H),
                U = n(462),
                Y = r(U),
                W = n(463),
                G = r(W),
                Q = n(516),
                $ = r(Q),
                q = n(48),
                J = r(q),
                X = 100,
                Z = k.default.div.withConfig({
                    displayName: "pages__SlideContainerWrapper",
                    componentId: "s1fc0wz9-0"
                })(["height:", "px;"], function(e) {
                    return e.height
                }),
                K = k.default.div.withConfig({
                    displayName: "pages__IndexContainer",
                    componentId: "s1fc0wz9-1"
                })(["h2{font-size:48px;font-family:Teko;font-weight:100;line-height:54px;color:white;text-transform:uppercase;}"]),
                ee = k.default.div.withConfig({
                    displayName: "pages__SlideContainer",
                    componentId: "s1fc0wz9-2"
                })(["position:fixed;top:0;right:0;left:0;height:100%;background-color:", ";h2{color:black;}"], function(e) {
                    return "color" in e ? e.color : "#fff"
                }),
                te = k.default.img.withConfig({
                    displayName: "pages__MountainCloud",
                    componentId: "s1fc0wz9-3"
                })(["position:fixed;will-change:transform,opacity;"]),
                ne = k.default.figure.withConfig({
                    displayName: "pages__VideoImageContainer",
                    componentId: "s1fc0wz9-4"
                })(["display:flex;align-items:center;position:relative;height:", "px;margin-top:-", "px;@media (min-width:800px){height:", "px;padding:60px;}"], function(e) {
                    return e.height
                }, function(e) {
                    return e.height
                }, function(e) {
                    return e.height - 120
                }),
                re = k.default.figure.withConfig({
                    displayName: "pages__VideoSlideImageContainer",
                    componentId: "s1fc0wz9-5"
                })(["height:100%;@media (min-width:800px){height:calc(100% - ", "px);width:calc(100% - ", "px);margin:", "px;}background-color:#fff;overflow:hidden;will-change:height,width,margin;position:relative;"], function(e) {
                    return 2 * e.margin
                }, function(e) {
                    return 2 * e.margin
                }, function(e) {
                    return e.margin
                }),
                ae = "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))",
                oe = k.default.div.withConfig({
                    displayName: "pages__VideoImage",
                    componentId: "s1fc0wz9-6"
                })(["height:100%;width:100%;", ";background-image:", ",url(", ");background-position:right;background-size:cover;@media (min-width:1000px){background-image:", ",url(", ");background-position:center;}@media (min-width:2000px){background-image:", ",url(", ");}position:relative;will-change:opacity;"], function(e) {
                    return e.opacity ? "opacity: " + e.opacity : ""
                }, ae, function(e) {
                    return e.image.small
                }, ae, function(e) {
                    return e.image.medium
                }, ae, function(e) {
                    return e.image.large
                }),
                ie = k.default.div.withConfig({
                    displayName: "pages__VideoText",
                    componentId: "s1fc0wz9-7"
                })(["display:flex;align-items:center;position:", ";top:0;bottom:0;left:5%;width:300px;z-index:10;color:#ffffff;font-family:Teko;text-transform:uppercase;font-size:50px;line-height:50px;@media (min-width:800px){left:15%;width:380px;font-size:64px;line-height:64px;}"], function(e) {
                    return e.absolute ? "absolute" : "fixed"
                }),
                le = k.default.h2.withConfig({
                    displayName: "pages__CfpHeader",
                    componentId: "s1fc0wz9-8"
                })(["font-family:Teko;font-size:36px;font-weight:100;line-height:51px;text-transform:uppercase;"]),
                ue = k.default.h2.withConfig({
                    displayName: "pages__CfpHeaderClosed",
                    componentId: "s1fc0wz9-9"
                })(["font-family:Teko;font-size:18px;line-height:50px;white-space:nowrap;text-transform:uppercase;text-align:center;"]),
                se = k.default.div.withConfig({
                    displayName: "pages__CfpDeadline",
                    componentId: "s1fc0wz9-10"
                })(["color:#d9d9d9;"]),
                fe = k.default.a.withConfig({
                    displayName: "pages__CfpSubmit",
                    componentId: "s1fc0wz9-11"
                })(["margin-top:30px;color:#ffffff;text-transform:uppercase;font-size:12px;line-height:26px;text-decoration:none;> span:first-child{margin-right:15px;text-decoration:underline;}> span:last-child{font-size:10px;}"]),
                ce = function(e) {
                    function t() {
                        return (0, c.default)(this, t), (0, m.default)(this, (t.__proto__ || (0, s.default)(t)).apply(this, arguments))
                    }
                    return (0, y.default)(t, e), (0, p.default)(t, [{
                        key: "render",
                        value: function() {
                            return x.default.createElement(te, {
                                src: this.props.image,
                                style: {
                                    top: this.props.top + "px",
                                    left: this.props.left + "px",
                                    transform: "scale(" + (1 + this.props.animationProgress / 50) + ")",
                                    opacity: 1 - this.props.animationProgress / 100
                                }
                            })
                        }
                    }]), t
                }(x.default.Component),
                de = function(e) {
                    function t() {
                        var e, n, r, a;
                        (0, c.default)(this, t);
                        for (var o = arguments.length, i = Array(o), l = 0; l < o; l++) i[l] = arguments[l];
                        return n = r = (0, m.default)(this, (e = t.__proto__ || (0, s.default)(t)).call.apply(e, [this].concat(i))), r.slideCount = 4, r.progressStep = X / r.slideCount, a = n, (0, m.default)(r, a)
                    }
                    return (0, y.default)(t, e), (0, p.default)(t, [{
                        key: "render",
                        value: function() {
                            var e = null;
                            return this.props.animationProgress > 3 * this.progressStep || (e = this.props.animationProgress > 2 * this.progressStep ? x.default.createElement(L.default, {
                                animationProgress: this.props.animationProgress,
                                progressStep: this.progressStep
                            }, x.default.createElement("h2", null, "SKY ABOVE ME - EARTH BELOW ME - FIRE WITHIN ME")) : this.props.animationProgress > this.progressStep ? x.default.createElement(L.default, {
                                animationProgress: this.props.animationProgress,
                                progressStep: this.progressStep
                            }, x.default.createElement("h3", null, "FEBRUARY 2018"), x.default.createElement("h2", null, "FEB 9-11 | 3.5 Lakh + prize | 25+ events")) : x.default.createElement(L.default, {
                                animationProgress: this.props.animationProgress,
                                progressStep: this.progressStep,
                                fadeIn: !1
                            }, x.default.createElement("h3", null, "NUALS Kochi PROUDLY PRESENTS"), x.default.createElement("h1", null, "NAALAM 2018"))), x.default.createElement(ee, null, x.default.createElement(F.default, {
                                animationProgress: this.props.animationProgress,
                                animationSplit: 90,
                                startOpacity: .4,
                                topOpacity: .7,
                                image: this.props.image
                            }), x.default.createElement(ce, {
                                animationProgress: this.props.animationProgress,
                                image: "static/cloud1.png",
                                top: -366,
                                left: -65
                            }), x.default.createElement(ce, {
                                animationProgress: this.props.animationProgress,
                                image: "static/cloud2.png",
                                top: 299
                            }), x.default.createElement(ce, {
                                animationProgress: this.props.animationProgress,
                                image: "static/cloud3.png",
                                left: -284
                            }), e)
                        }
                    }]), t
                }(x.default.PureComponent),
                pe = function(e) {
                    function t() {
                        var e, n, r, a;
                        (0, c.default)(this, t);
                        for (var o = arguments.length, i = Array(o), l = 0; l < o; l++) i[l] = arguments[l];
                        return n = r = (0, m.default)(this, (e = t.__proto__ || (0, s.default)(t)).call.apply(e, [this].concat(i))), r.maxProgress = 100, r.slideCount = 3, r.progressStep = r.maxProgress / r.slideCount, a = n, (0, m.default)(r, a)
                    }
                    return (0, y.default)(t, e), (0, p.default)(t, [{
                        key: "render",
                        value: function() {
                            var e = null;
                            return this.props.animationProgress > 2 * this.progressStep || this.props.animationProgress > this.progressStep && (e = x.default.createElement(L.default, {
                                animationProgress: this.props.animationProgress,
                                progressStep: this.progressStep
                            }, x.default.createElement("h2", null, "National University of Advanced Legal Studies"))), x.default.createElement(ee, null, x.default.createElement(F.default, {
                                animationProgress: this.props.animationProgress,
                                animationSplit: 50,
                                startOpacity: 0,
                                topOpacity: .5,
                                image: this.props.image
                            }), e)
                        }
                    }]), t
                }(x.default.PureComponent),
                he = function(e) {
                    function t() {
                        return (0, c.default)(this, t), (0, m.default)(this, (t.__proto__ || (0, s.default)(t)).apply(this, arguments))
                    }
                    return (0, y.default)(t, e), (0, p.default)(t, [{
                        key: "render",
                        value: function() {
                            var e = (this.props.animationProgress + 1) / 50;
                            return x.default.createElement(ee, {
                                color: "transparent"
                            }, x.default.createElement(re, {
                                margin: 60 * (this.props.animationProgress - 50) / 50
                            }, x.default.createElement(ie, {
                                absolute: !1
                            }, this.props.videoHeadline), x.default.createElement($.default, {
                                absolute: !1,
                                handleClick: this.props.startVideo,
                                opacity: e
                            }), x.default.createElement(oe, {
                                image: this.props.image,
                                opacity: e
                            })))
                        }
                    }]), t
                }(x.default.PureComponent),
                me = function(e) {
                    function t() {
                        var e, n, r, a;
                        (0, c.default)(this, t);
                        for (var o = arguments.length, i = Array(o), l = 0; l < o; l++) i[l] = arguments[l];
                        return n = r = (0, m.default)(this, (e = t.__proto__ || (0, s.default)(t)).call.apply(e, [this].concat(i))), r.state = {
                            windowHeight: 0,
                            scrollY: 0,
                            showVideoPlayer: !1
                        }, r.mountainSlideScrollDividend = 50, r.citySlideScrollDividend = 30, r.videoSlideScrollDividend = 10, r.renderEyecatcher = function(e) {
                            if (e) {
                                var t = new Date(r.props.cfpDeadline);
                                return x.default.createElement("div", null, x.default.createElement(le, null, "Call for Papers"), x.default.createElement(se, null, "Deadline: ", t.toDateString(), ", 23:59:59 CEST"), x.default.createElement(fe, {
                                    href: "https://www.papercall.io/agent-conf-2018"
                                }, x.default.createElement("span", null, "Submit Here"), x.default.createElement(A.default, {
                                    name: "forward"
                                })))
                            }
                            return x.default.createElement(ue, null, "Call for Papers")
                        }, r.updateWindowHeight = function() {
                            r.setState({
                                windowHeight: window.innerHeight
                            })
                        }, r.updateScrollY = function() {
                            r.setState({
                                scrollY: window.scrollY * r.props.scrollSpeed
                            })
                        }, r.toggleVideoPlayer = function() {
                            r.setState({
                                showVideoPlayer: !r.state.showVideoPlayer
                            })
                        }, a = n, (0, m.default)(r, a)
                    }
                    return (0, y.default)(t, e), (0, p.default)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.updateWindowHeight(), this.updateScrollY(), window.addEventListener("resize", this.updateWindowHeight), window.addEventListener("scroll", this.updateScrollY)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.updateWindowHeight), window.removeEventListener("scroll", this.updateScrollY)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = X * this.mountainSlideScrollDividend,
                                t = X * this.citySlideScrollDividend,
                                n = X * this.videoSlideScrollDividend,
                                r = null,
                                a = null,
                                o = null,
                                i = null;
                            return this.state.scrollY < e ? r = x.default.createElement(de, {
                                animationProgress: this.state.scrollY / this.mountainSlideScrollDividend,
                                image: this.props.animationBackground1
                            }) : this.state.scrollY < e + t ? a = x.default.createElement(pe, {
                                animationProgress: (this.state.scrollY - e) / this.citySlideScrollDividend,
                                image: this.props.animationBackground2
                            }) : this.state.scrollY < e + t + n ? o = x.default.createElement(he, {
                                animationProgress: (this.state.scrollY - e - t) / this.videoSlideScrollDividend,
                                image: this.props.videoTeaserImage,
                                videoHeadline: this.props.videoHeadline,
                                startVideo: this.toggleVideoPlayer
                            }) : i = x.default.createElement(ne, {
                                height: this.state.windowHeight
                            }, x.default.createElement($.default, {
                                absolute: !0,
                                handleClick: this.toggleVideoPlayer
                            }), x.default.createElement(ie, {
                                absolute: !0
                            }, this.props.videoHeadline), x.default.createElement(oe, {
                                image: this.props.videoTeaserImage
                            })), x.default.createElement(K, null, x.default.createElement(O.default, this.props.seo), x.default.createElement(N.default, {
                                hideHeader: this.state.showVideoPlayer,
                                showScrollInfo: this.state.scrollY < 500
                            }, x.default.createElement(Z, {
                                height: e / this.props.scrollSpeed
                            }, r), x.default.createElement(Z, {
                                height: t / this.props.scrollSpeed
                            }, a), x.default.createElement(Z, {
                                height: n / this.props.scrollSpeed + this.state.windowHeight
                            }, o), i, this.props.speakers && x.default.createElement(B.default, {
                                speakers: this.props.speakers
                            }), x.default.createElement(Y.default, this.props), x.default.createElement(M.default, {
                                mainSponsor: {
                                    logo: this.props.mainSponsorLogo,
                                    website: this.props.mainSponsorWebsite
                                },
                                sponsors: this.props.sponsors,
                                partners: this.props.partners
                            }), x.default.createElement(j.default, null), x.default.createElement(G.default, {
                                visible: this.state.showVideoPlayer,
                                youtubeId: this.props.videoYoutubeId,
                                handleClose: this.toggleVideoPlayer
                            }), new Date(this.props.cfpDeadline).getTime() > (new Date).getTime() && x.default.createElement(P.default, null, this.renderEyecatcher)))
                        }
                    }], [{
                        key: "getInitialProps",
                        value: function() {
                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            var t = (0, l.default)(o.default.mark(function e(t) {
                                var n, r, a, i;
                                return o.default.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = t.req, r = n ? n.headers["user-agent"] : navigator.userAgent, e.next = 4, (0, w.default)(J.default.baseUrl + "/.json");
                                        case 4:
                                            return a = e.sent, e.next = 7, a.json();
                                        case 7:
                                            return i = e.sent, i.scrollSpeed = 1, r && r.toLowerCase().match(/(ipad|iphone|ipod|android)/g) && (i.scrollSpeed = 1.5), e.abrupt("return", i);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return e
                        }()
                    }]), t
                }(x.default.PureComponent);
            t.default = me
        },
        455: function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(4),
                o = r(a),
                i = n(1),
                l = r(i),
                u = n(2),
                s = r(u),
                f = n(5),
                c = r(f),
                d = n(6),
                p = r(d),
                h = n(0),
                m = r(h),
                g = n(11),
                y = r(g),
                v = n(7),
                b = (r(v), n(27)),
                x = r(b),
                _ = y.default.div.withConfig({
                    displayName: "EyeCatcher__EyeCatcherContainer",
                    componentId: "wybomt-0"
                })(["position:fixed;z-index:2;top:50vh;right:0;box-sizing:border-box;background-color:#000000;color:#ffffff;font-size:16px;line-height:30px;", " @media(max-width:800px){display:none;}"], function(e) {
                    return e.height ? "" : "opacity: 0;"
                }),
                w = (0, y.default)(_).withConfig({
                    displayName: "EyeCatcher__OpenEyeCatcherContainer",
                    componentId: "wybomt-1"
                })(["padding:25px 40px;margin-top:-", "px;border-radius:10px 0 0 10px;"], function(e) {
                    return e.height / 2
                }),
                E = (0, y.default)(_).withConfig({
                    displayName: "EyeCatcher__ClosedEyeCatcherContainer",
                    componentId: "wybomt-2"
                })(["height:", "px;width:", "px;transform:rotate(-90deg) translateX(", "px);transform-origin:bottom right;margin-top:-", "px;border-radius:10px 10px 0 0;"], 50, function(e) {
                    return e.height
                }, function(e) {
                    return e.height / 2
                }, 50),
                k = (0, y.default)(x.default).withConfig({
                    displayName: "EyeCatcher__TogglerIcon",
                    componentId: "wybomt-3"
                })(["font-size:12px;float:", ";transform:rotate(", "deg) translate(", ");"], function(e) {
                    return e.isOpen ? "right" : "left"
                }, function(e) {
                    return e.isOpen ? 0 : -90
                }, function(e) {
                    return e.isOpen ? 0 : "-18px, 12px"
                }),
                S = function(e) {
                    function t() {
                        var e, n, r, a;
                        (0, l.default)(this, t);
                        for (var i = arguments.length, u = Array(i), s = 0; s < i; s++) u[s] = arguments[s];
                        return n = r = (0, c.default)(this, (e = t.__proto__ || (0, o.default)(t)).call.apply(e, [this].concat(u))), r.state = {
                            containerHeight: 0,
                            isOpen: !0
                        }, r.setContainerHeight = function(e) {
                            e && r.setState({
                                containerHeight: e.offsetHeight
                            })
                        }, r.handleToggle = function() {
                            r.setState({
                                isOpen: !r.state.isOpen
                            })
                        }, r.hide = function() {
                            window.requestAnimationFrame(function() {
                                r.setState({
                                    isOpen: !1
                                })
                            })
                        }, a = n, (0, c.default)(r, a)
                    }
                    return (0, p.default)(t, e), (0, s.default)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            window && window.addEventListener("scroll", this.hide)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            window && window.removeEventListener("scroll", this.hide)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.isOpen ? m.default.createElement(w, {
                                innerRef: this.setContainerHeight,
                                height: this.state.containerHeight
                            }, m.default.createElement(k, {
                                isOpen: this.state.isOpen,
                                name: "forward",
                                onClick: this.handleToggle
                            }), this.props.children(this.state.isOpen)) : m.default.createElement(E, {
                                height: this.state.containerHeight
                            }, m.default.createElement(k, {
                                isOpen: this.state.isOpen,
                                name: "forward",
                                onClick: this.handleToggle
                            }), this.props.children(this.state.isOpen))
                        }
                    }]), t
                }(m.default.PureComponent);
            t.default = S
        },
        456: function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(4),
                o = r(a),
                i = n(1),
                l = r(i),
                u = n(2),
                s = r(u),
                f = n(5),
                c = r(f),
                d = n(6),
                p = r(d),
                h = n(0),
                m = r(h),
                g = n(7),
                y = (r(g), n(11)),
                v = r(y),
                b = n(457),
                x = r(b),
                _ = v.default.div.withConfig({
                    displayName: "Sponsors__SponsorContainer",
                    componentId: "s1ioelbo-0"
                })(["margin:0 160px 0 130px;@media (max-width:600px){margin:0 20px 0 20px;}color:#fff;display:flex;flex-direction:column;h2{order:1;}@media (min-width:900px){flex-direction:row;h2{width:170px;margin-left:40px;order:3;}}h3{font-family:Teko;font-weight:100;font-size:28px;line-height:40px;text-transform:uppercase;text-align:center;margin:40px 0 0 0;}hr{background-color:rgba(224,224,224,0.2);border:0;height:1px;margin:0 70px 0;clear:both;}"]),
                w = v.default.div.withConfig({
                    displayName: "Sponsors__SponsorBox",
                    componentId: "s1ioelbo-1"
                })(["background-color:#282828;flex-grow:1;order:2;"]),
                E = v.default.div.withConfig({
                    displayName: "Sponsors__SponsorsContainer",
                    componentId: "s1ioelbo-2"
                })(["display:flex;flex-wrap:wrap;justify-content:center;width:100%;"]),
                k = function(e) {
                    function t() {
                        return (0, l.default)(this, t), (0, c.default)(this, (t.__proto__ || (0, o.default)(t)).apply(this, arguments))
                    }
                    return (0, p.default)(t, e), (0, s.default)(t, [{
                        key: "render",
                        value: function() {
                            return m.default.createElement(_, null, m.default.createElement("h2", null, "The partners making it all possible"), m.default.createElement(w, null, m.default.createElement("h3", null, "Main Sponsor"), m.default.createElement(E, null, m.default.createElement(x.default, {
                                website: this.props.mainSponsor.website,
                                logo: this.props.mainSponsor.logo,
                                main: !0
                            })), m.default.createElement("hr", null), m.default.createElement("h3", null, "Sponsors"), m.default.createElement(E, null, this.props.sponsors.map(function(e, t) {
                                return m.default.createElement(x.default, {
                                    key: t,
                                    website: e.website,
                                    logo: e.logo
                                })
                            })), m.default.createElement("hr", null), m.default.createElement("h3", null, "Partners"), m.default.createElement(E, null, this.props.partners.map(function(e, t) {
                                return m.default.createElement(x.default, {
                                    key: t,
                                    website: e.website,
                                    logo: e.logo
                                })
                            }))))
                        }
                    }]), t
                }(m.default.PureComponent);
            t.default = k
        },
        457: function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(4),
                o = r(a),
                i = n(1),
                l = r(i),
                u = n(2),
                s = r(u),
                f = n(5),
                c = r(f),
                d = n(6),
                p = r(d),
                h = n(0),
                m = r(h),
                g = n(7),
                y = (r(g), n(11)),
                v = r(y),
                b = v.default.span.withConfig({
                    displayName: "Sponsor__SponsorContainer",
                    componentId: "s1089wpe-0"
                })(["display:flex;align-items:center;justify-content:center;text-align:center;float:left;width:25%;height:120px;opacity:0.6;img{max-width:", "px;max-height:", "px;}@media (max-width:600px){width:100%;}"], function(e) {
                    return e.main ? 260 : 130
                }, function(e) {
                    return e.main ? 120 : 60
                }),
                x = function(e) {
                    function t() {
                        return (0, l.default)(this, t), (0, c.default)(this, (t.__proto__ || (0, o.default)(t)).apply(this, arguments))
                    }
                    return (0, p.default)(t, e), (0, s.default)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.main,
                                n = e.logo,
                                r = e.website;
                            return m.default.createElement(b, {
                                main: t
                            }, m.default.createElement("a", {
                                href: r
                            }, m.default.createElement("img", {
                                src: n
                            })))
                        }
                    }]), t
                }(m.default.Component);
            t.default = x
        },
        458: function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(4),
                o = r(a),
                i = n(1),
                l = r(i),
                u = n(2),
                s = r(u),
                f = n(5),
                c = r(f),
                d = n(6),
                p = r(d),
                h = n(0),
                m = r(h),
                g = n(7),
                y = (r(g), n(11)),
                v = r(y),
                b = 100,
                x = v.default.div.withConfig({
                    displayName: "SlideBackground__StyledSlideBackground",
                    componentId: "gawonw-0"
                })(["position:fixed;top:0;right:0;bottom:0;left:0;background-image:url(", ");background-size:cover;will-change:transform,filter;@media (max-width:1000px){background-image:url(", ");}@media (max-width:2000px){background-image:url(", ");}"], function(e) {
                    return e.image.large
                }, function(e) {
                    return e.image.small
                }, function(e) {
                    return e.image.medium
                }),
                _ = function(e) {
                    function t() {
                        var e, n, r, a;
                        (0, l.default)(this, t);
                        for (var i = arguments.length, u = Array(i), s = 0; s < i; s++) u[s] = arguments[s];
                        return n = r = (0, c.default)(this, (e = t.__proto__ || (0, o.default)(t)).call.apply(e, [this].concat(u))), r.getBackgroundOpacity = function() {
                            var e = r.props.topOpacity - r.props.startOpacity;
                            return r.props.animationProgress <= r.props.animationSplit ? r.props.startOpacity + e * r.props.animationProgress / r.props.animationSplit : r.props.topOpacity - r.props.topOpacity * ((r.props.animationProgress - r.props.animationSplit) / (b - r.props.animationSplit))
                        }, a = n, (0, c.default)(r, a)
                    }
                    return (0, p.default)(t, e), (0, s.default)(t, [{
                        key: "render",
                        value: function() {
                            return m.default.createElement(x, {
                                image: this.props.image,
                                style: {
                                    transform: "scale(" + (1 + this.props.animationProgress / 500) + ")",
                                    opacity: this.getBackgroundOpacity()
                                }
                            })
                        }
                    }]), t
                }(m.default.Component);
            t.default = _
        },
        459: function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(4),
                o = r(a),
                i = n(1),
                l = r(i),
                u = n(2),
                s = r(u),
                f = n(5),
                c = r(f),
                d = n(6),
                p = r(d),
                h = n(0),
                m = r(h),
                g = n(7),
                y = (r(g), n(11)),
                v = r(y),
                b = v.default.header.withConfig({
                    displayName: "SlideTitle__StyledSlideTitle",
                    componentId: "s1ms0nu3-0"
                })(["color:#231f20;font-family:Teko;text-align:center;text-transform:uppercase;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:80%;> h1,> h2{font-size:35px;line-height:35px;@media (min-width:600px){font-size:48px;line-height:48px;}@media (min-width:1000px){font-size:64px;line-height:64px;}font-weight:100;}> h3{font-size:28px;font-weight:100;line-height:28px;}"]),
                x = function(e) {
                    function t() {
                        var e, n, r, a;
                        (0, l.default)(this, t);
                        for (var i = arguments.length, u = Array(i), s = 0; s < i; s++) u[s] = arguments[s];
                        return n = r = (0, c.default)(this, (e = t.__proto__ || (0, o.default)(t)).call.apply(e, [this].concat(u))), r.getOpacity = function(e, t) {
                            var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                                r = t / 2;
                            return e < r && !n ? 1 : 1 - Math.abs(e % t - r) / r
                        }, a = n, (0, c.default)(r, a)
                    }
                    return (0, p.default)(t, e), (0, s.default)(t, [{
                        key: "render",
                        value: function() {
                            return m.default.createElement(b, {
                                style: {
                                    opacity: this.getOpacity(this.props.animationProgress, this.props.progressStep, this.props.fadeIn)
                                }
                            }, this.props.children)
                        }
                    }]), t
                }(m.default.Component);
            x.defaultProps = {
                fadeIn: !0
            }, t.default = x
        },
        460: function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(4),
                o = r(a),
                i = n(1),
                l = r(i),
                u = n(2),
                s = r(u),
                f = n(5),
                c = r(f),
                d = n(6),
                p = r(d),
                h = n(7),
                m = r(h),
                g = n(0),
                y = r(g),
                v = n(216),
                b = r(v),
                x = n(27),
                _ = r(x),
                w = n(461),
                E = r(w),
                k = n(11),
                S = r(k),
                P = S.default.div.withConfig({
                    displayName: "SpeakerSlider__Container",
                    componentId: "s1m54tf2-0"
                })(["margin-bottom:40px;"]),
                C = S.default.h2.withConfig({
                    displayName: "SpeakerSlider__Headline",
                    componentId: "s1m54tf2-1"
                })(["margin-top:30px;margin-bottom:20px;margin-left:30px;@media (min-width:800px){margin-left:15%;width:250px;}"]),
                j = S.default.div.withConfig({
                    displayName: "SpeakerSlider__SliderContainer",
                    componentId: "s1m54tf2-2"
                })(["background-color:#343434;background-size:cover;background-position:bottom;background-image:url('static/mountains.jpg');padding:88px 0 212px 0;"]),
                I = (m.default.string, m.default.object, m.default.func, function(e) {
                    var t = e.className,
                        n = e.style,
                        r = e.onClick;
                    return y.default.createElement("div", {
                        className: t,
                        style: n,
                        onClick: r
                    }, y.default.createElement(_.default, {
                        name: "iconRight"
                    }))
                }),
                O = function(e) {
                    var t = e.className,
                        n = e.style,
                        r = e.onClick;
                    return y.default.createElement("div", {
                        className: t,
                        style: n,
                        onClick: r
                    }, y.default.createElement(_.default, {
                        name: "iconLeft"
                    }))
                },
                T = function(e) {
                    function t() {
                        var e, n, r, a;
                        (0, l.default)(this, t);
                        for (var i = arguments.length, u = Array(i), s = 0; s < i; s++) u[s] = arguments[s];
                        return n = r = (0, c.default)(this, (e = t.__proto__ || (0, o.default)(t)).call.apply(e, [this].concat(u))), r.state = {
                            currentSlide: 0
                        }, r._sliderSettings = function() {
                            return {
                                dots: !1,
                                infinite: !1,
                                speed: 300,
                                slidesToShow: 1,
                                centerMode: !0,
                                centerPadding: 0,
                                variableWidth: !0,
                                nextArrow: y.default.createElement(I, null),
                                prevArrow: y.default.createElement(O, null),
                                afterChange: function(e) {
                                    r.setState({
                                        currentSlide: e
                                    })
                                }
                            }
                        }, a = n, (0, c.default)(r, a)
                    }
                    return (0, p.default)(t, e), (0, s.default)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.state.currentSlide,
                                t = this.props.speakers,
                                n = t.map(function(t, n) {
                                    return y.default.createElement("div", {
                                        key: n,
                                        style: {
                                            display: "block"
                                        }
                                    }, y.default.createElement(E.default, {
                                        speaker: t,
                                        active: e === n
                                    }))
                                });
                            return y.default.createElement(P, null, y.default.createElement(C, null, "NAALAM 2018 FEATURED EVENTS"), y.default.createElement(j, null, y.default.createElement(b.default, this._sliderSettings(), n)))
                        }
                    }]), t
                }(y.default.PureComponent);
            t.default = T
        },
        461: function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(0),
                o = r(a),
                i = n(7),
                l = (r(i), n(11)),
                u = r(l),
                s = n(27),
                f = r(s),
                c = u.default.div.withConfig({
                    displayName: "SpeakerSlide__SlideContent",
                    componentId: "s1o4rn9a-0"
                })(["display:block;width:280px;height:280px;background:white;margin-left:15px;margin-right:15px;position:relative;overflow:visible;@media (min-width:800px){width:360px;height:360px;}img{max-width:100%;}"]),
                d = u.default.div.withConfig({
                    displayName: "SpeakerSlide__SlideInfo",
                    componentId: "s1o4rn9a-1"
                })(["position:absolute;left:40px;top:90px;z-index:110;width:200px;color:white;transition:opacity 0.5;@media (min-width:500px){width:240px;}@media (min-width:800px){left:270px;}"]),
                p = u.default.div.withConfig({
                    displayName: "SpeakerSlide__SlideFilter",
                    componentId: "s1o4rn9a-2"
                })(["position:absolute;left:0;right:0;bottom:0;top:0;background:", ";a,a:hover{font-size:35px;color:white;text-decoration:none;cursor:pointer;}"], function(e) {
                    return e.active ? "linear-gradient(153.43deg, rgba(0,0,0,0) 0%, #000000 100%)" : "rgba(0,0,0,0.8)"
                }),
                h = u.default.h3.withConfig({
                    displayName: "SpeakerSlide__SlideHeadline",
                    componentId: "s1o4rn9a-3"
                })(["font-family:Teko;font-size:28px;line-height:30px;font-weight:100;text-transform:uppercase;@media (min-width:800px){line-height:51px;font-size:36px;}"]),
                m = u.default.h4.withConfig({
                    displayName: "SpeakerSlide__SlideSubHeadline",
                    componentId: "s1o4rn9a-4"
                })(["font-family:Teko;font-size:14px;font-weight:500;text-transform:uppercase;letter-spacing:2px;line-height:14px;margin-bottom:15px;@media (min-width:800px){margin-bottom:30px;}"]),
                g = u.default.div.withConfig({
                    displayName: "SpeakerSlide__SlideTeaser",
                    componentId: "s1o4rn9a-5"
                })(["p{font-family:'Open Sans';margin-bottom:15px;font-size:13px;line-height:22px;@media (min-width:800px){font-size:16px;line-height:30px;}}"]),
                y = u.default.img.withConfig({
                    displayName: "SpeakerSlide__Image",
                    componentId: "s1o4rn9a-6"
                })(["max-width:360px;"]),
                v = u.default.a.withConfig({
                    displayName: "SpeakerSlide__A",
                    componentId: "s1o4rn9a-7"
                })(["margin-right:30px;"]),
                b = function(e) {
                    var t = e.speaker,
                        n = e.active;
                    return o.default.createElement(c, null, o.default.createElement(y, {
                        src: t.imageUrls.small
                    }), o.default.createElement(p, {
                        active: n
                    }, o.default.createElement(d, {
                        active: n,
                        style: {
                            opacity: n ? 1 : 0
                        }
                    }, o.default.createElement(h, null, t.name), o.default.createElement(m, null, "— ", t.title), o.default.createElement(g, {
                        dangerouslySetInnerHTML: {
                            __html: t.teaser
                        }
                    }), t.github && o.default.createElement(v, {
                        href: "https://github.com/" + t.github,
                        target: "_blank"
                    }, o.default.createElement(f.default, {
                        name: "github"
                    })), t.twitter && o.default.createElement(v, {
                        href: "https://twitter.com/" + t.twitter,
                        target: "_blank"
                    }, o.default.createElement(f.default, {
                        name: "twitter"
                    })))))
                };
            t.default = b
        },
        462: function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(4),
                o = r(a),
                i = n(1),
                l = r(i),
                u = n(2),
                s = r(u),
                f = n(5),
                c = r(f),
                d = n(6),
                p = r(d),
                h = n(0),
                m = r(h),
                g = n(7),
                y = (r(g), n(11)),
                v = r(y),
                b = "events/",
                x = v.default.div.withConfig({
                    displayName: "Tickets__TicketWrapper",
                    componentId: "s99mtv8-0"
                })(["position:relative;display:none;overflow:auto;z-index:2;width:1090px;max-width:100%;left:0;right:0;margin:0 auto;margin-bottom:50px;padding-left:15px;padding-right:15px;box-sizing:border-box;"]),
                _ = v.default.h2.withConfig({
                    displayName: "Tickets__Title",
                    componentId: "s99mtv8-1"
                })(["margin-bottom:50px;margin-top:80px;margin-left:20px;margin-right:20px;@media (min-width:800px){width:150px;float:right;margin-right:0;}"]),
                w = v.default.div.withConfig({
                    displayName: "Tickets__TicketBox",
                    componentId: "s99mtv8-2"
                })(["height:500px;text-align:center;padding:30px 20px;box-sizing:border-box;background:#282828;color:white;width:500px;max-width:90%;margin:0 auto;margin-bottom:100px;display:block;@media (min-width:900px){float:left;width:30%;}@media (min-width:1090px){float:left;width:338px;}hr{display:block;height:1px;border:0;border-top:1px solid #757575;margin:1em 0;padding:0;}"]),
                E = (0, v.default)(w).withConfig({
                    displayName: "Tickets__ActiveTicketbox",
                    componentId: "s99mtv8-3"
                })(["margin-top:-24px;padding-top:54px;height:548px;color:black;background:white;border:none;width:550px;max-width:95%;@media (min-width:900px){float:left;width:40%;}@media (min-width:1060px){width:380px;}"]),
                k = v.default.div.withConfig({
                    displayName: "Tickets__Line",
                    componentId: "s99mtv8-4"
                })(["box-sizing:border-box;height:0;border:1px solid #bdbdbd;margin:15px 10px;"]),
                S = v.default.div.withConfig({
                    displayName: "Tickets__Headline",
                    componentId: "s99mtv8-5"
                })(["font-size:28px;line-height:40px;text-transform:uppercase;font-family:Teko;"]),
                P = v.default.div.withConfig({
                    displayName: "Tickets__Price",
                    componentId: "s99mtv8-6"
                })(["font-size:24px;line-height:30px;font-weight:600;"]),
                C = v.default.div.withConfig({
                    displayName: "Tickets__Description",
                    componentId: "s99mtv8-7"
                })(["padding-top:50px;padding-bottom:70px;height:250px;font-size:16px;line-height:40px;font-weight:600;"]),
                j = {
                    past: "#757575",
                    now: "#231F20",
                    addon: "#FFFFFF"
                },
                I = {
                    past: "#231F20",
                    now: "#FFFFFF",
                    addon: "#231F20"
                },
                O = v.default.a.withConfig({
                    displayName: "Tickets__ButtonLink",
                    componentId: "s99mtv8-8"
                })(["display:block;height:40px;border-radius:100px;background-color:", ";color:", ";text-align:center;width:80%;font-family:Teko;padding-top:4px;font-size:20px;font-weight:500;letter-spacing:2px;line-height:38px;text-align:center;text-transform:uppercase;margin:0 auto;text-decoration:none;@media (min-size:1060px){width:280px;}"], function(e) {
                    return j[e.type]
                }, function(e) {
                    return I[e.type]
                }),
                T = function(e) {
                    function t() {
                        return (0, l.default)(this, t), (0, c.default)(this, (t.__proto__ || (0, o.default)(t)).apply(this, arguments))
                    }
                    return (0, p.default)(t, e), (0, s.default)(t, [{
                        key: "render",
                        value: function() {
                            return m.default.createElement(x, null, m.default.createElement(_, null, "Tickets and dd"), m.default.createElement("div", {
                                style: {
                                    clear: "both"
                                }
                            }, m.default.createElement(w, null, m.default.createElement(S, null, this.props.ticket1Headline), m.default.createElement(k, null), m.default.createElement(P, null, this.props.ticket1Price, " €"), m.default.createElement(k, null), m.default.createElement(C, {
                                dangerouslySetInnerHTML: {
                                    __html: this.props.ticket1Description
                                }
                            }), m.default.createElement(O, {
                                type: "addon",
                                href: b,
                                target: "_blank"
                            }, this.props.ticket1ButtonText)), m.default.createElement(E, null, m.default.createElement(S, null, this.props.ticket2Headline), m.default.createElement(k, null), m.default.createElement(P, null, this.props.ticket2Price, " €"), m.default.createElement(k, null), m.default.createElement(C, {
                                dangerouslySetInnerHTML: {
                                    __html: this.props.ticket2Description
                                }
                            }), m.default.createElement(O, {
                                type: "now",
                                href: b,
                                target: "_blank"
                            }, this.props.ticket2ButtonText)), m.default.createElement(w, null, m.default.createElement(S, null, this.props.ticket3Headline), m.default.createElement(k, null), m.default.createElement(P, null, this.props.ticket3Price, " €"), m.default.createElement(k, null), m.default.createElement(C, {
                                dangerouslySetInnerHTML: {
                                    __html: this.props.ticket3Description
                                }
                            }), m.default.createElement(O, {
                                type: "addon",
                                href: b,
                                target: "_blank"
                            }, this.props.ticket3ButtonText))))
                        }
                    }]), t
                }(m.default.PureComponent);
            t.default = T
        },
        463: function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(4),
                o = r(a),
                i = n(1),
                l = r(i),
                u = n(2),
                s = r(u),
                f = n(5),
                c = r(f),
                d = n(6),
                p = r(d),
                h = n(11),
                m = r(h),
                g = n(0),
                y = r(g),
                v = n(7),
                b = (r(v), n(464)),
                x = r(b),
                _ = n(27),
                w = r(_),
                E = m.default.div.withConfig({
                    displayName: "VideoPlayer__Container",
                    componentId: "s1efhuq9-0"
                })(["position:fixed;top:-100%;width:100%;height:100%;background:#282828;z-index:10;display:flex;align-items:center;justify-content:center;top:", ";opacity:", ";transition:all 1s;will-change:top,opacity;iframe{max-width:100%;}"], function(e) {
                    return e.visible ? 0 : "-100%"
                }, function(e) {
                    return e.visible ? 1 : 0
                }),
                k = m.default.div.withConfig({
                    displayName: "VideoPlayer__CloseVideo",
                    componentId: "s1efhuq9-1"
                })(["position:fixed;right:30px;top:30px;z-index:20;color:white;font-size:2em;cursor:pointer;"]),
                S = function(e) {
                    function t() {
                        return (0, l.default)(this, t), (0, c.default)(this, (t.__proto__ || (0, o.default)(t)).apply(this, arguments))
                    }
                    return (0, p.default)(t, e), (0, s.default)(t, [{
                        key: "render",
                        value: function() {
                            var e = {
                                    playerVars: {
                                        autoplay: !0 === this.props.visible ? 1 : 0,
                                        showInfo: 0,
                                        controls: 1,
                                        fs: 1
                                    }
                                },
                                t = this.props.visible;
                            return y.default.createElement(E, {
                                visible: this.props.visible
                            }, !0 === t && y.default.createElement(x.default, {
                                videoId: this.props.youtubeId,
                                opts: e
                            }), y.default.createElement(k, {
                                onClick: this.props.handleClose
                            }, y.default.createElement(w.default, {
                                name: "close"
                            })))
                        }
                    }]), t
                }(y.default.PureComponent);
            t.default = S
        },
        464: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function o(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            function i(e, t) {
                if (e.videoId !== t.videoId) return !0;
                var n = e.opts.playerVars || {},
                    r = t.opts.playerVars || {};
                return n.start !== r.start || n.end !== r.end
            }

            function l(e) {
                return b({}, e, {
                    playerVars: b({}, e.playerVars, {
                        autoplay: 0,
                        start: 0,
                        end: 0
                    })
                })
            }

            function u(e, t) {
                return !m()(l(e.opts), l(t.opts))
            }

            function s(e, t) {
                return e.id === t.id || e.className === t.className
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var f = n(7),
                c = n.n(f),
                d = n(0),
                p = n.n(d),
                h = n(465),
                m = n.n(h),
                g = n(466),
                y = n.n(g),
                v = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                b = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                x = function(e) {
                    function t(e) {
                        r(this, t);
                        var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                        return n.onPlayerReady = function(e) {
                            return n.props.onReady(e)
                        }, n.onPlayerError = function(e) {
                            return n.props.onError(e)
                        }, n.onPlayerStateChange = function(e) {
                            switch (n.props.onStateChange(e), e.data) {
                                case t.PlayerState.ENDED:
                                    n.props.onEnd(e);
                                    break;
                                case t.PlayerState.PLAYING:
                                    n.props.onPlay(e);
                                    break;
                                case t.PlayerState.PAUSED:
                                    n.props.onPause(e);
                                    break;
                                default:
                                    return
                            }
                        }, n.onPlayerPlaybackRateChange = function(e) {
                            return n.props.onPlaybackRateChange(e)
                        }, n.onPlayerPlaybackQualityChange = function(e) {
                            return n.props.onPlaybackQualityChange(e)
                        }, n.createPlayer = function() {
                            if ("undefined" != typeof document) {
                                var e = b({}, n.props.opts, {
                                    videoId: n.props.videoId
                                });
                                n.internalPlayer = y()(n.container, e), n.internalPlayer.on("ready", n.onPlayerReady), n.internalPlayer.on("error", n.onPlayerError), n.internalPlayer.on("stateChange", n.onPlayerStateChange), n.internalPlayer.on("playbackRateChange", n.onPlayerPlaybackRateChange), n.internalPlayer.on("playbackQualityChange", n.onPlayerPlaybackQualityChange)
                            }
                        }, n.resetPlayer = function() {
                            return n.internalPlayer.destroy().then(n.createPlayer)
                        }, n.updatePlayer = function() {
                            n.internalPlayer.getIframe().then(function(e) {
                                e.setAttribute("id", n.props.id), e.setAttribute("class", n.props.className)
                            })
                        }, n.updateVideo = function() {
                            if (void 0 === n.props.videoId || null === n.props.videoId) return void n.internalPlayer.stopVideo();
                            var e = !1,
                                t = {
                                    videoId: n.props.videoId
                                };
                            if ("playerVars" in n.props.opts && (e = 1 === n.props.opts.playerVars.autoplay, "start" in n.props.opts.playerVars && (t.startSeconds = n.props.opts.playerVars.start), "end" in n.props.opts.playerVars && (t.endSeconds = n.props.opts.playerVars.end)), e) return void n.internalPlayer.loadVideoById(t);
                            n.internalPlayer.cueVideoById(t)
                        }, n.refContainer = function(e) {
                            n.container = e
                        }, n.container = null, n.internalPlayer = null, n
                    }
                    return o(t, e), v(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.createPlayer()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            s(e, this.props) && this.updatePlayer(), u(e, this.props) && this.resetPlayer(), i(e, this.props) && this.updateVideo()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.internalPlayer.destroy()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return p.a.createElement("span", null, p.a.createElement("div", {
                                id: this.props.id,
                                className: this.props.className,
                                ref: this.refContainer
                            }))
                        }
                    }]), t
                }(p.a.Component);
            x.propTypes = {
                videoId: c.a.string,
                id: c.a.string,
                className: c.a.string,
                opts: c.a.object,
                onReady: c.a.func,
                onError: c.a.func,
                onPlay: c.a.func,
                onPause: c.a.func,
                onEnd: c.a.func,
                onStateChange: c.a.func,
                onPlaybackRateChange: c.a.func,
                onPlaybackQualityChange: c.a.func
            }, x.defaultProps = {
                opts: {},
                onReady: function() {},
                onError: function() {},
                onPlay: function() {},
                onPause: function() {},
                onEnd: function() {},
                onStateChange: function() {},
                onPlaybackRateChange: function() {},
                onPlaybackQualityChange: function() {}
            }, x.PlayerState = {
                UNSTARTED: -1,
                ENDED: 0,
                PLAYING: 1,
                PAUSED: 2,
                BUFFERING: 3,
                CUED: 5
            }, t.default = x
        },
        465: function(e, t, n) {
            (function(e, n) {
                function r(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length, a = 0, o = []; ++n < r;) {
                        var i = e[n];
                        t(i, n, e) && (o[a++] = i)
                    }
                    return o
                }

                function a(e, t) {
                    for (var n = -1, r = t.length, a = e.length; ++n < r;) e[a + n] = t[n];
                    return e
                }

                function o(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
                        if (t(e[n], n, e)) return !0;
                    return !1
                }

                function i(e, t) {
                    for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                    return r
                }

                function l(e, t) {
                    return e.has(t)
                }

                function u(e, t) {
                    return null == e ? void 0 : e[t]
                }

                function s(e) {
                    var t = -1,
                        n = Array(e.size);
                    return e.forEach(function(e, r) {
                        n[++t] = [r, e]
                    }), n
                }

                function f(e) {
                    var t = -1,
                        n = Array(e.size);
                    return e.forEach(function(e) {
                        n[++t] = e
                    }), n
                }

                function c(e) {
                    var t = -1,
                        n = null == e ? 0 : e.length;
                    for (this.clear(); ++t < n;) {
                        var r = e[t];
                        this.set(r[0], r[1])
                    }
                }

                function d() {
                    this.__data__ = kt ? kt(null) : {}, this.size = 0
                }

                function p(e) {
                    var t = this.has(e) && delete this.__data__[e];
                    return this.size -= t ? 1 : 0, t
                }

                function h(e) {
                    var t = this.__data__;
                    if (kt) {
                        var n = t[e];
                        return n === ve ? void 0 : n
                    }
                    return it.call(t, e) ? t[e] : void 0
                }

                function m(e) {
                    var t = this.__data__;
                    return kt ? void 0 !== t[e] : it.call(t, e)
                }

                function g(e, t) {
                    var n = this.__data__;
                    return this.size += this.has(e) ? 0 : 1, n[e] = kt && void 0 === t ? ve : t, this
                }

                function y(e) {
                    var t = -1,
                        n = null == e ? 0 : e.length;
                    for (this.clear(); ++t < n;) {
                        var r = e[t];
                        this.set(r[0], r[1])
                    }
                }

                function v() {
                    this.__data__ = [], this.size = 0
                }

                function b(e) {
                    var t = this.__data__,
                        n = R(t, e);
                    return !(n < 0) && (n == t.length - 1 ? t.pop() : ht.call(t, n, 1), --this.size, !0)
                }

                function x(e) {
                    var t = this.__data__,
                        n = R(t, e);
                    return n < 0 ? void 0 : t[n][1]
                }

                function _(e) {
                    return R(this.__data__, e) > -1
                }

                function w(e, t) {
                    var n = this.__data__,
                        r = R(n, e);
                    return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
                }

                function E(e) {
                    var t = -1,
                        n = null == e ? 0 : e.length;
                    for (this.clear(); ++t < n;) {
                        var r = e[t];
                        this.set(r[0], r[1])
                    }
                }

                function k() {
                    this.size = 0, this.__data__ = {
                        hash: new c,
                        map: new(xt || y),
                        string: new c
                    }
                }

                function S(e) {
                    var t = Z(this, e).delete(e);
                    return this.size -= t ? 1 : 0, t
                }

                function P(e) {
                    return Z(this, e).get(e)
                }

                function C(e) {
                    return Z(this, e).has(e)
                }

                function j(e, t) {
                    var n = Z(this, e),
                        r = n.size;
                    return n.set(e, t), this.size += n.size == r ? 0 : 1, this
                }

                function I(e) {
                    var t = -1,
                        n = null == e ? 0 : e.length;
                    for (this.__data__ = new E; ++t < n;) this.add(e[t])
                }

                function O(e) {
                    return this.__data__.set(e, ve), this
                }

                function T(e) {
                    return this.__data__.has(e)
                }

                function A(e) {
                    var t = this.__data__ = new y(e);
                    this.size = t.size
                }

                function z() {
                    this.__data__ = new y, this.size = 0
                }

                function N(e) {
                    var t = this.__data__,
                        n = t.delete(e);
                    return this.size = t.size, n
                }

                function V(e) {
                    return this.__data__.get(e)
                }

                function M(e) {
                    return this.__data__.has(e)
                }

                function D(e, t) {
                    var n = this.__data__;
                    if (n instanceof y) {
                        var r = n.__data__;
                        if (!xt || r.length < ye - 1) return r.push([e, t]), this.size = ++n.size, this;
                        n = this.__data__ = new E(r)
                    }
                    return n.set(e, t), this.size = n.size, this
                }

                function F(e, t) {
                    var n = Vt(e),
                        r = !n && Nt(e),
                        a = !n && !r && Mt(e),
                        o = !n && !r && !a && Dt(e),
                        l = n || r || a || o,
                        u = l ? i(e.length, String) : [],
                        s = u.length;
                    for (var f in e) !t && !it.call(e, f) || l && ("length" == f || a && ("offset" == f || "parent" == f) || o && ("buffer" == f || "byteLength" == f || "byteOffset" == f) || te(f, s)) || u.push(f);
                    return u
                }

                function R(e, t) {
                    for (var n = e.length; n--;)
                        if (le(e[n][0], t)) return n;
                    return -1
                }

                function L(e, t, n) {
                    var r = t(e);
                    return Vt(e) ? r : a(r, n(e))
                }

                function H(e) {
                    return null == e ? void 0 === e ? Re : Ae : mt && mt in Object(e) ? ee(e) : oe(e)
                }

                function B(e) {
                    return pe(e) && H(e) == we
                }

                function U(e, t, n, r, a) {
                    return e === t || (null == e || null == t || !pe(e) && !pe(t) ? e !== e && t !== t : Y(e, t, n, r, U, a))
                }

                function Y(e, t, n, r, a, o) {
                    var i = Vt(e),
                        l = Vt(t),
                        u = i ? Ee : zt(e),
                        s = l ? Ee : zt(t);
                    u = u == we ? ze : u, s = s == we ? ze : s;
                    var f = u == ze,
                        c = s == ze,
                        d = u == s;
                    if (d && Mt(e)) {
                        if (!Mt(t)) return !1;
                        i = !0, f = !1
                    }
                    if (d && !f) return o || (o = new A), i || Dt(e) ? $(e, t, n, r, a, o) : q(e, t, u, n, r, a, o);
                    if (!(n & be)) {
                        var p = f && it.call(e, "__wrapped__"),
                            h = c && it.call(t, "__wrapped__");
                        if (p || h) {
                            var m = p ? e.value() : e,
                                g = h ? t.value() : t;
                            return o || (o = new A), a(m, g, n, r, o)
                        }
                    }
                    return !!d && (o || (o = new A), J(e, t, n, r, a, o))
                }

                function W(e) {
                    return !(!de(e) || re(e)) && (fe(e) ? st : Ue).test(ie(e))
                }

                function G(e) {
                    return pe(e) && ce(e.length) && !!We[H(e)]
                }

                function Q(e) {
                    if (!ae(e)) return vt(e);
                    var t = [];
                    for (var n in Object(e)) it.call(e, n) && "constructor" != n && t.push(n);
                    return t
                }

                function $(e, t, n, r, a, i) {
                    var u = n & be,
                        s = e.length,
                        f = t.length;
                    if (s != f && !(u && f > s)) return !1;
                    var c = i.get(e);
                    if (c && i.get(t)) return c == t;
                    var d = -1,
                        p = !0,
                        h = n & xe ? new I : void 0;
                    for (i.set(e, t), i.set(t, e); ++d < s;) {
                        var m = e[d],
                            g = t[d];
                        if (r) var y = u ? r(g, m, d, t, e, i) : r(m, g, d, e, t, i);
                        if (void 0 !== y) {
                            if (y) continue;
                            p = !1;
                            break
                        }
                        if (h) {
                            if (!o(t, function(e, t) {
                                    if (!l(h, t) && (m === e || a(m, e, n, r, i))) return h.push(t)
                                })) {
                                p = !1;
                                break
                            }
                        } else if (m !== g && !a(m, g, n, r, i)) {
                            p = !1;
                            break
                        }
                    }
                    return i.delete(e), i.delete(t), p
                }

                function q(e, t, n, r, a, o, i) {
                    switch (n) {
                        case He:
                            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                            e = e.buffer, t = t.buffer;
                        case Le:
                            return !(e.byteLength != t.byteLength || !o(new dt(e), new dt(t)));
                        case Se:
                        case Pe:
                        case Te:
                            return le(+e, +t);
                        case Ce:
                            return e.name == t.name && e.message == t.message;
                        case Ve:
                        case De:
                            return e == t + "";
                        case Oe:
                            var l = s;
                        case Me:
                            var u = r & be;
                            if (l || (l = f), e.size != t.size && !u) return !1;
                            var c = i.get(e);
                            if (c) return c == t;
                            r |= xe, i.set(e, t);
                            var d = $(l(e), l(t), r, a, o, i);
                            return i.delete(e), d;
                        case Fe:
                            if (Tt) return Tt.call(e) == Tt.call(t)
                    }
                    return !1
                }

                function J(e, t, n, r, a, o) {
                    var i = n & be,
                        l = X(e),
                        u = l.length;
                    if (u != X(t).length && !i) return !1;
                    for (var s = u; s--;) {
                        var f = l[s];
                        if (!(i ? f in t : it.call(t, f))) return !1
                    }
                    var c = o.get(e);
                    if (c && o.get(t)) return c == t;
                    var d = !0;
                    o.set(e, t), o.set(t, e);
                    for (var p = i; ++s < u;) {
                        f = l[s];
                        var h = e[f],
                            m = t[f];
                        if (r) var g = i ? r(m, h, f, t, e, o) : r(h, m, f, e, t, o);
                        if (!(void 0 === g ? h === m || a(h, m, n, r, o) : g)) {
                            d = !1;
                            break
                        }
                        p || (p = "constructor" == f)
                    }
                    if (d && !p) {
                        var y = e.constructor,
                            v = t.constructor;
                        y != v && "constructor" in e && "constructor" in t && !("function" == typeof y && y instanceof y && "function" == typeof v && v instanceof v) && (d = !1)
                    }
                    return o.delete(e), o.delete(t), d
                }

                function X(e) {
                    return L(e, he, At)
                }

                function Z(e, t) {
                    var n = e.__data__;
                    return ne(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
                }

                function K(e, t) {
                    var n = u(e, t);
                    return W(n) ? n : void 0
                }

                function ee(e) {
                    var t = it.call(e, mt),
                        n = e[mt];
                    try {
                        e[mt] = void 0;
                        var r = !0
                    } catch (e) {}
                    var a = ut.call(e);
                    return r && (t ? e[mt] = n : delete e[mt]), a
                }

                function te(e, t) {
                    return !!(t = null == t ? _e : t) && ("number" == typeof e || Ye.test(e)) && e > -1 && e % 1 == 0 && e < t
                }

                function ne(e) {
                    var t = typeof e;
                    return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
                }

                function re(e) {
                    return !!lt && lt in e
                }

                function ae(e) {
                    var t = e && e.constructor;
                    return e === ("function" == typeof t && t.prototype || rt)
                }

                function oe(e) {
                    return ut.call(e)
                }

                function ie(e) {
                    if (null != e) {
                        try {
                            return ot.call(e)
                        } catch (e) {}
                        try {
                            return e + ""
                        } catch (e) {}
                    }
                    return ""
                }

                function le(e, t) {
                    return e === t || e !== e && t !== t
                }

                function ue(e) {
                    return null != e && ce(e.length) && !fe(e)
                }

                function se(e, t) {
                    return U(e, t)
                }

                function fe(e) {
                    if (!de(e)) return !1;
                    var t = H(e);
                    return t == je || t == Ie || t == ke || t == Ne
                }

                function ce(e) {
                    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= _e
                }

                function de(e) {
                    var t = typeof e;
                    return null != e && ("object" == t || "function" == t)
                }

                function pe(e) {
                    return null != e && "object" == typeof e
                }

                function he(e) {
                    return ue(e) ? F(e) : Q(e)
                }

                function me() {
                    return []
                }

                function ge() {
                    return !1
                }
                var ye = 200,
                    ve = "__lodash_hash_undefined__",
                    be = 1,
                    xe = 2,
                    _e = 9007199254740991,
                    we = "[object Arguments]",
                    Ee = "[object Array]",
                    ke = "[object AsyncFunction]",
                    Se = "[object Boolean]",
                    Pe = "[object Date]",
                    Ce = "[object Error]",
                    je = "[object Function]",
                    Ie = "[object GeneratorFunction]",
                    Oe = "[object Map]",
                    Te = "[object Number]",
                    Ae = "[object Null]",
                    ze = "[object Object]",
                    Ne = "[object Proxy]",
                    Ve = "[object RegExp]",
                    Me = "[object Set]",
                    De = "[object String]",
                    Fe = "[object Symbol]",
                    Re = "[object Undefined]",
                    Le = "[object ArrayBuffer]",
                    He = "[object DataView]",
                    Be = /[\\^$.*+?()[\]{}|]/g,
                    Ue = /^\[object .+?Constructor\]$/,
                    Ye = /^(?:0|[1-9]\d*)$/,
                    We = {};
                We["[object Float32Array]"] = We["[object Float64Array]"] = We["[object Int8Array]"] = We["[object Int16Array]"] = We["[object Int32Array]"] = We["[object Uint8Array]"] = We["[object Uint8ClampedArray]"] = We["[object Uint16Array]"] = We["[object Uint32Array]"] = !0, We[we] = We[Ee] = We[Le] = We[Se] = We[He] = We[Pe] = We[Ce] = We[je] = We[Oe] = We[Te] = We[ze] = We[Ve] = We[Me] = We[De] = We["[object WeakMap]"] = !1;
                var Ge = "object" == typeof e && e && e.Object === Object && e,
                    Qe = "object" == typeof self && self && self.Object === Object && self,
                    $e = Ge || Qe || Function("return this")(),
                    qe = "object" == typeof t && t && !t.nodeType && t,
                    Je = qe && "object" == typeof n && n && !n.nodeType && n,
                    Xe = Je && Je.exports === qe,
                    Ze = Xe && Ge.process,
                    Ke = function() {
                        try {
                            return Ze && Ze.binding && Ze.binding("util")
                        } catch (e) {}
                    }(),
                    et = Ke && Ke.isTypedArray,
                    tt = Array.prototype,
                    nt = Function.prototype,
                    rt = Object.prototype,
                    at = $e["__core-js_shared__"],
                    ot = nt.toString,
                    it = rt.hasOwnProperty,
                    lt = function() {
                        var e = /[^.]+$/.exec(at && at.keys && at.keys.IE_PROTO || "");
                        return e ? "Symbol(src)_1." + e : ""
                    }(),
                    ut = rt.toString,
                    st = RegExp("^" + ot.call(it).replace(Be, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    ft = Xe ? $e.Buffer : void 0,
                    ct = $e.Symbol,
                    dt = $e.Uint8Array,
                    pt = rt.propertyIsEnumerable,
                    ht = tt.splice,
                    mt = ct ? ct.toStringTag : void 0,
                    gt = Object.getOwnPropertySymbols,
                    yt = ft ? ft.isBuffer : void 0,
                    vt = function(e, t) {
                        return function(n) {
                            return e(t(n))
                        }
                    }(Object.keys, Object),
                    bt = K($e, "DataView"),
                    xt = K($e, "Map"),
                    _t = K($e, "Promise"),
                    wt = K($e, "Set"),
                    Et = K($e, "WeakMap"),
                    kt = K(Object, "create"),
                    St = ie(bt),
                    Pt = ie(xt),
                    Ct = ie(_t),
                    jt = ie(wt),
                    It = ie(Et),
                    Ot = ct ? ct.prototype : void 0,
                    Tt = Ot ? Ot.valueOf : void 0;
                c.prototype.clear = d, c.prototype.delete = p, c.prototype.get = h, c.prototype.has = m, c.prototype.set = g, y.prototype.clear = v, y.prototype.delete = b, y.prototype.get = x, y.prototype.has = _, y.prototype.set = w, E.prototype.clear = k, E.prototype.delete = S, E.prototype.get = P, E.prototype.has = C, E.prototype.set = j, I.prototype.add = I.prototype.push = O, I.prototype.has = T, A.prototype.clear = z, A.prototype.delete = N, A.prototype.get = V, A.prototype.has = M, A.prototype.set = D;
                var At = gt ? function(e) {
                        return null == e ? [] : (e = Object(e), r(gt(e), function(t) {
                            return pt.call(e, t)
                        }))
                    } : me,
                    zt = H;
                (bt && zt(new bt(new ArrayBuffer(1))) != He || xt && zt(new xt) != Oe || _t && "[object Promise]" != zt(_t.resolve()) || wt && zt(new wt) != Me || Et && "[object WeakMap]" != zt(new Et)) && (zt = function(e) {
                    var t = H(e),
                        n = t == ze ? e.constructor : void 0,
                        r = n ? ie(n) : "";
                    if (r) switch (r) {
                        case St:
                            return He;
                        case Pt:
                            return Oe;
                        case Ct:
                            return "[object Promise]";
                        case jt:
                            return Me;
                        case It:
                            return "[object WeakMap]"
                    }
                    return t
                });
                var Nt = B(function() {
                        return arguments
                    }()) ? B : function(e) {
                        return pe(e) && it.call(e, "callee") && !pt.call(e, "callee")
                    },
                    Vt = Array.isArray,
                    Mt = yt || ge,
                    Dt = et ? function(e) {
                        return function(t) {
                            return e(t)
                        }
                    }(et) : G;
                n.exports = se
            }).call(t, n(34), n(61)(e))
        },
        466: function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(19),
                o = r(a),
                i = n(23),
                l = r(i),
                u = n(32),
                s = r(u),
                f = n(467),
                c = r(f),
                d = n(470),
                p = r(d),
                h = n(471),
                m = r(h),
                g = n(473),
                y = r(g),
                v = void 0;
            t.default = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = (0, p.default)();
                if (v || (v = (0, m.default)()), t.events) throw new Error("Event handlers cannot be overwritten.");
                if ((0, c.default)(e) && !document.getElementById(e)) throw new Error('Element "' + e + '" does not exist.');
                t.events = y.default.proxyEvents(r);
                var a = new s.default(function() {
                        var n = (0, l.default)(o.default.mark(function n(a) {
                            var i, l;
                            return o.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (i = void 0, !(e instanceof Object && e.playVideo instanceof Function)) {
                                            n.next = 6;
                                            break
                                        }
                                        i = e, a(i), n.next = 11;
                                        break;
                                    case 6:
                                        return n.next = 8, v;
                                    case 8:
                                        l = n.sent, i = new l.Player(e, t), r.on("ready", function() {
                                            a(i)
                                        });
                                    case 11:
                                    case "end":
                                        return n.stop()
                                }
                            }, n, void 0)
                        }));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }()),
                    i = y.default.promisifyPlayer(a, n);
                return i.on = r.on, i.off = r.off, i
            }, e.exports = t.default
        },
        467: function(e, t, n) {
            function r(e) {
                return "string" == typeof e || !o(e) && i(e) && a(e) == l
            }
            var a = n(66),
                o = n(90),
                i = n(67),
                l = "[object String]";
            e.exports = r
        },
        468: function(e, t, n) {
            function r(e) {
                var t = i.call(e, u),
                    n = e[u];
                try {
                    e[u] = void 0;
                    var r = !0
                } catch (e) {}
                var a = l.call(e);
                return r && (t ? e[u] = n : delete e[u]), a
            }
            var a = n(134),
                o = Object.prototype,
                i = o.hasOwnProperty,
                l = o.toString,
                u = a ? a.toStringTag : void 0;
            e.exports = r
        },
        469: function(e, t) {
            function n(e) {
                return a.call(e)
            }
            var r = Object.prototype,
                a = r.toString;
            e.exports = n
        },
        470: function(e, t, n) {
            (function(t) {
                /**
                 * @link https://github.com/gajus/sister for the canonical source repository
                 * @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
                 */
                function n() {
                    var e = {},
                        t = {};
                    return e.on = function(e, n) {
                        var r = {
                            name: e,
                            handler: n
                        };
                        return t[e] = t[e] || [], t[e].unshift(r), r
                    }, e.off = function(e) {
                        var n = t[e.name].indexOf(e); - 1 != n && t[e.name].splice(n, 1)
                    }, e.trigger = function(e, n) {
                        var r, a = t[e];
                        if (a)
                            for (r = a.length; r--;) a[r].handler(n)
                    }, e
                }
                t.gajus = t.gajus || {}, t.gajus.Sister = n, e.exports = n
            }).call(t, n(34))
        },
        471: function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(32),
                o = r(a),
                i = n(472),
                l = r(i);
            t.default = function() {
                var e = new o.default(function(e) {
                        if (window.YT && window.YT.Player && window.YT.Player instanceof Function) return void e(window.YT);
                        var t = window.onYouTubeIframeAPIReady;
                        window.onYouTubeIframeAPIReady = function() {
                            t && t(), e(window.YT)
                        }
                    }),
                    t = "http:" === window.location.protocol ? "http:" : "https:";
                return (0, l.default)(t + "//www.youtube.com/iframe_api"), e
            }, e.exports = t.default
        },
        472: function(e, t) {
            function n(e, t) {
                for (var n in t) e.setAttribute(n, t[n])
            }

            function r(e, t) {
                e.onload = function() {
                    this.onerror = this.onload = null, t(null, e)
                }, e.onerror = function() {
                    this.onerror = this.onload = null, t(new Error("Failed to load " + this.src), e)
                }
            }

            function a(e, t) {
                e.onreadystatechange = function() {
                    "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null, t(null, e))
                }
            }
            e.exports = function(e, t, o) {
                var i = document.head || document.getElementsByTagName("head")[0],
                    l = document.createElement("script");
                "function" == typeof t && (o = t, t = {}), t = t || {}, o = o || function() {}, l.type = t.type || "text/javascript", l.charset = t.charset || "utf8", l.async = !("async" in t) || !!t.async, l.src = e, t.attrs && n(l, t.attrs), t.text && (l.text = "" + t.text), ("onload" in l ? r : a)(l, o), l.onload || r(l, o), i.appendChild(l)
            }
        },
        473: function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(19),
                o = r(a),
                i = n(32),
                l = r(i),
                u = n(23),
                s = r(u),
                f = n(474),
                c = r(f),
                d = n(485),
                p = r(d),
                h = n(512),
                m = r(h),
                g = n(513),
                y = r(g),
                v = n(514),
                b = r(v),
                x = {};
            x.proxyEvents = function(e) {
                var t = {};
                return (0, p.default)(y.default, function(n) {
                    var r = "on" + (0, c.default)(n);
                    t[r] = function(t) {
                        e.trigger(n, t)
                    }
                }), t
            }, x.promisifyPlayer = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = {};
                return (0, p.default)(m.default, function(r) {
                    t && b.default[r] instanceof Object ? n[r] = (0, s.default)(o.default.mark(function t() {
                        for (var n = arguments.length, a = Array(n), i = 0; i < n; i++) a[i] = arguments[i];
                        var u, s, f, c;
                        return o.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return u = b.default[r], t.next = 3, e;
                                case 3:
                                    if (s = t.sent, f = s.getPlayerState(), c = s[r].apply(s, a), !(u.stateChangeRequired || u.acceptableStates instanceof Array && -1 === u.acceptableStates.indexOf(f))) {
                                        t.next = 9;
                                        break
                                    }
                                    return t.next = 9, new l.default(function(e) {
                                        var t = function t() {
                                            var n = s.getPlayerState(),
                                                r = void 0;
                                            "number" == typeof u.timeout && (r = setTimeout(function() {
                                                s.removeEventListener("onStateChange", t), e()
                                            }, u.timeout)), u.acceptableStates instanceof Array && -1 !== u.acceptableStates.indexOf(n) && (s.removeEventListener("onStateChange", t), clearTimeout(r), e())
                                        };
                                        s.addEventListener("onStateChange", t)
                                    });
                                case 9:
                                    return t.abrupt("return", c);
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }, t, void 0)
                    })) : n[r] = (0, s.default)(o.default.mark(function t() {
                        for (var n = arguments.length, a = Array(n), i = 0; i < n; i++) a[i] = arguments[i];
                        var l;
                        return o.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e;
                                case 2:
                                    return l = t.sent, t.abrupt("return", l[r].apply(l, a));
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }, t, void 0)
                    }))
                }), n
            }, t.default = x, e.exports = t.default
        },
        474: function(e, t, n) {
            var r = n(475),
                a = r("toUpperCase");
            e.exports = a
        },
        475: function(e, t, n) {
            function r(e) {
                return function(t) {
                    t = l(t);
                    var n = o(t) ? i(t) : void 0,
                        r = n ? n[0] : t.charAt(0),
                        u = n ? a(n, 1).join("") : t.slice(1);
                    return r[e]() + u
                }
            }
            var a = n(476),
                o = n(222),
                i = n(478),
                l = n(481);
            e.exports = r
        },
        476: function(e, t, n) {
            function r(e, t, n) {
                var r = e.length;
                return n = void 0 === n ? r : n, !t && n >= r ? e : a(e, t, n)
            }
            var a = n(477);
            e.exports = r
        },
        477: function(e, t) {
            function n(e, t, n) {
                var r = -1,
                    a = e.length;
                t < 0 && (t = -t > a ? 0 : a + t), n = n > a ? a : n, n < 0 && (n += a), a = t > n ? 0 : n - t >>> 0, t >>>= 0;
                for (var o = Array(a); ++r < a;) o[r] = e[r + t];
                return o
            }
            e.exports = n
        },
        478: function(e, t, n) {
            function r(e) {
                return o(e) ? i(e) : a(e)
            }
            var a = n(479),
                o = n(222),
                i = n(480);
            e.exports = r
        },
        479: function(e, t) {
            function n(e) {
                return e.split("")
            }
            e.exports = n
        },
        480: function(e, t) {
            function n(e) {
                return e.match(c) || []
            }
            var r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                a = "\\ud83c[\\udffb-\\udfff]",
                o = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                i = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                l = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
                u = "(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", o, i].join("|") + ")[\\ufe0e\\ufe0f]?" + l + ")*",
                s = "[\\ufe0e\\ufe0f]?" + l + u,
                f = "(?:" + ["[^\\ud800-\\udfff]" + r + "?", r, o, i, "[\\ud800-\\udfff]"].join("|") + ")",
                c = RegExp(a + "(?=" + a + ")|" + f + s, "g");
            e.exports = n
        },
        481: function(e, t, n) {
            function r(e) {
                return null == e ? "" : a(e)
            }
            var a = n(482);
            e.exports = r
        },
        482: function(e, t, n) {
            function r(e) {
                if ("string" == typeof e) return e;
                if (i(e)) return o(e, r) + "";
                if (l(e)) return f ? f.call(e) : "";
                var t = e + "";
                return "0" == t && 1 / e == -u ? "-0" : t
            }
            var a = n(134),
                o = n(483),
                i = n(90),
                l = n(484),
                u = 1 / 0,
                s = a ? a.prototype : void 0,
                f = s ? s.toString : void 0;
            e.exports = r
        },
        483: function(e, t) {
            function n(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length, a = Array(r); ++n < r;) a[n] = t(e[n], n, e);
                return a
            }
            e.exports = n
        },
        484: function(e, t, n) {
            function r(e) {
                return "symbol" == typeof e || o(e) && a(e) == i
            }
            var a = n(66),
                o = n(67),
                i = "[object Symbol]";
            e.exports = r
        },
        485: function(e, t, n) {
            function r(e, t) {
                return (l(e) ? a : o)(e, i(t))
            }
            var a = n(486),
                o = n(487),
                i = n(510),
                l = n(90);
            e.exports = r
        },
        486: function(e, t) {
            function n(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e););
                return e
            }
            e.exports = n
        },
        487: function(e, t, n) {
            var r = n(488),
                a = n(509),
                o = a(r);
            e.exports = o
        },
        488: function(e, t, n) {
            function r(e, t) {
                return e && a(e, t, o)
            }
            var a = n(489),
                o = n(491);
            e.exports = r
        },
        489: function(e, t, n) {
            var r = n(490),
                a = r();
            e.exports = a
        },
        490: function(e, t) {
            function n(e) {
                return function(t, n, r) {
                    for (var a = -1, o = Object(t), i = r(t), l = i.length; l--;) {
                        var u = i[e ? l : ++a];
                        if (!1 === n(o[u], u, o)) break
                    }
                    return t
                }
            }
            e.exports = n
        },
        491: function(e, t, n) {
            function r(e) {
                return i(e) ? a(e) : o(e)
            }
            var a = n(492),
                o = n(503),
                i = n(224);
            e.exports = r
        },
        492: function(e, t, n) {
            function r(e, t) {
                var n = i(e),
                    r = !n && o(e),
                    f = !n && !r && l(e),
                    d = !n && !r && !f && s(e),
                    p = n || r || f || d,
                    h = p ? a(e.length, String) : [],
                    m = h.length;
                for (var g in e) !t && !c.call(e, g) || p && ("length" == g || f && ("offset" == g || "parent" == g) || d && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || u(g, m)) || h.push(g);
                return h
            }
            var a = n(493),
                o = n(494),
                i = n(90),
                l = n(496),
                u = n(498),
                s = n(499),
                f = Object.prototype,
                c = f.hasOwnProperty;
            e.exports = r
        },
        493: function(e, t) {
            function n(e, t) {
                for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                return r
            }
            e.exports = n
        },
        494: function(e, t, n) {
            var r = n(495),
                a = n(67),
                o = Object.prototype,
                i = o.hasOwnProperty,
                l = o.propertyIsEnumerable,
                u = r(function() {
                    return arguments
                }()) ? r : function(e) {
                    return a(e) && i.call(e, "callee") && !l.call(e, "callee")
                };
            e.exports = u
        },
        495: function(e, t, n) {
            function r(e) {
                return o(e) && a(e) == i
            }
            var a = n(66),
                o = n(67),
                i = "[object Arguments]";
            e.exports = r
        },
        496: function(e, t, n) {
            (function(e) {
                var r = n(220),
                    a = n(497),
                    o = "object" == typeof t && t && !t.nodeType && t,
                    i = o && "object" == typeof e && e && !e.nodeType && e,
                    l = i && i.exports === o,
                    u = l ? r.Buffer : void 0,
                    s = u ? u.isBuffer : void 0,
                    f = s || a;
                e.exports = f
            }).call(t, n(61)(e))
        },
        497: function(e, t) {
            function n() {
                return !1
            }
            e.exports = n
        },
        498: function(e, t) {
            function n(e, t) {
                return !!(t = null == t ? r : t) && ("number" == typeof e || a.test(e)) && e > -1 && e % 1 == 0 && e < t
            }
            var r = 9007199254740991,
                a = /^(?:0|[1-9]\d*)$/;
            e.exports = n
        },
        499: function(e, t, n) {
            var r = n(500),
                a = n(501),
                o = n(502),
                i = o && o.isTypedArray,
                l = i ? a(i) : r;
            e.exports = l
        },
        500: function(e, t, n) {
            function r(e) {
                return i(e) && o(e.length) && !!l[a(e)]
            }
            var a = n(66),
                o = n(223),
                i = n(67),
                l = {};
            l["[object Float32Array]"] = l["[object Float64Array]"] = l["[object Int8Array]"] = l["[object Int16Array]"] = l["[object Int32Array]"] = l["[object Uint8Array]"] = l["[object Uint8ClampedArray]"] = l["[object Uint16Array]"] = l["[object Uint32Array]"] = !0, l["[object Arguments]"] = l["[object Array]"] = l["[object ArrayBuffer]"] = l["[object Boolean]"] = l["[object DataView]"] = l["[object Date]"] = l["[object Error]"] = l["[object Function]"] = l["[object Map]"] = l["[object Number]"] = l["[object Object]"] = l["[object RegExp]"] = l["[object Set]"] = l["[object String]"] = l["[object WeakMap]"] = !1, e.exports = r
        },
        501: function(e, t) {
            function n(e) {
                return function(t) {
                    return e(t)
                }
            }
            e.exports = n
        },
        502: function(e, t, n) {
            (function(e) {
                var r = n(221),
                    a = "object" == typeof t && t && !t.nodeType && t,
                    o = a && "object" == typeof e && e && !e.nodeType && e,
                    i = o && o.exports === a,
                    l = i && r.process,
                    u = function() {
                        try {
                            return l && l.binding && l.binding("util")
                        } catch (e) {}
                    }();
                e.exports = u
            }).call(t, n(61)(e))
        },
        503: function(e, t, n) {
            function r(e) {
                if (!a(e)) return o(e);
                var t = [];
                for (var n in Object(e)) l.call(e, n) && "constructor" != n && t.push(n);
                return t
            }
            var a = n(504),
                o = n(505),
                i = Object.prototype,
                l = i.hasOwnProperty;
            e.exports = r
        },
        504: function(e, t) {
            function n(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || r)
            }
            var r = Object.prototype;
            e.exports = n
        },
        505: function(e, t, n) {
            var r = n(506),
                a = r(Object.keys, Object);
            e.exports = a
        },
        506: function(e, t) {
            function n(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }
            e.exports = n
        },
        507: function(e, t, n) {
            function r(e) {
                if (!o(e)) return !1;
                var t = a(e);
                return t == l || t == u || t == i || t == s
            }
            var a = n(66),
                o = n(508),
                i = "[object AsyncFunction]",
                l = "[object Function]",
                u = "[object GeneratorFunction]",
                s = "[object Proxy]";
            e.exports = r
        },
        508: function(e, t) {
            function n(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }
            e.exports = n
        },
        509: function(e, t, n) {
            function r(e, t) {
                return function(n, r) {
                    if (null == n) return n;
                    if (!a(n)) return e(n, r);
                    for (var o = n.length, i = t ? o : -1, l = Object(n);
                        (t ? i-- : ++i < o) && !1 !== r(l[i], i, l););
                    return n
                }
            }
            var a = n(224);
            e.exports = r
        },
        510: function(e, t, n) {
            function r(e) {
                return "function" == typeof e ? e : a
            }
            var a = n(511);
            e.exports = r
        },
        511: function(e, t) {
            function n(e) {
                return e
            }
            e.exports = n
        },
        512: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = ["cueVideoById", "loadVideoById", "cueVideoByUrl", "loadVideoByUrl", "playVideo", "pauseVideo", "stopVideo", "clearVideo", "getVideoBytesLoaded", "getVideoBytesTotal", "getVideoLoadedFraction", "getVideoStartBytes", "cuePlaylist", "loadPlaylist", "nextVideo", "previousVideo", "playVideoAt", "setShuffle", "setLoop", "getPlaylist", "getPlaylistIndex", "getPlaylistId", "loadModule", "unloadModule", "setOption", "mute", "unMute", "isMuted", "setVolume", "getVolume", "seekTo", "getPlayerState", "getPlaybackRate", "setPlaybackRate", "getAvailablePlaybackRates", "getPlaybackQuality", "setPlaybackQuality", "getAvailableQualityLevels", "getCurrentTime", "getDuration", "removeEventListener", "getVideoUrl", "getDebugText", "getVideoData", "addCueRange", "removeCueRange", "getApiInterface", "showVideoInfo", "hideVideoInfo", "G", "C", "R", "aa", "$", "Z", "getVideoEmbedCode", "getOptions", "getOption", "Y", "X", "addEventListener", "destroy", "A", "P", "J", "setSize", "getIframe"], e.exports = t.default
        },
        513: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = ["ready", "stateChange", "playbackQualityChange", "playbackRateChange", "error", "apiChange"], e.exports = t.default
        },
        514: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(515),
                a = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(r);
            t.default = {
                pauseVideo: {
                    acceptableStates: [a.default.ENDED, a.default.PAUSED],
                    stateChangeRequired: !1
                },
                playVideo: {
                    acceptableStates: [a.default.ENDED, a.default.PLAYING],
                    stateChangeRequired: !1
                },
                seekTo: {
                    acceptableStates: [a.default.ENDED, a.default.PLAYING, a.default.PAUSED],
                    stateChangeRequired: !0,
                    timeout: 3e3
                }
            }, e.exports = t.default
        },
        515: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = {
                BUFFERING: 3,
                ENDED: 0,
                PAUSED: 2,
                PLAYING: 1,
                UNSTARTED: -1,
                VIDEO_CUED: 5
            }, e.exports = t.default
        },
        516: function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(4),
                o = r(a),
                i = n(1),
                l = r(i),
                u = n(2),
                s = r(u),
                f = n(5),
                c = r(f),
                d = n(6),
                p = r(d),
                h = n(11),
                m = r(h),
                g = n(0),
                y = r(g),
                v = n(7),
                b = (r(v), m.default.div.withConfig({
                    displayName: "VideoTrigger__IconContainer",
                    componentId: "s15727fs-0"
                })(["height:50px;width:50px;background:white;border-radius:50%;position:relative;display:block;"])),
                x = m.default.span.withConfig({
                    displayName: "VideoTrigger__Icon",
                    componentId: "s15727fs-1"
                })(["font-family:'icomoon' !important;speak:none;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:50px;text-align:center;position:absolute;left:0;right:0;top:0;bottom:0;color:black;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;&:before{content:'\\e90c';}"]),
                _ = m.default.div.withConfig({
                    displayName: "VideoTrigger__Container",
                    componentId: "s15727fs-2"
                })(["display:flex;align-items:center;position:", ";opacity:", ";bottom:15%;right:5%;@media (min-width:800px){right:25%;top:0;bottom:0;}width:250;z-index:10;color:white;padding:30px 0;display:flex;align-items:center;cursor:pointer;"], function(e) {
                    return e.absolute ? "absolute" : "fixed"
                }, function(e) {
                    return "opacity" in e ? e.opacity : 1
                }),
                w = m.default.span.withConfig({
                    displayName: "VideoTrigger__Text",
                    componentId: "s15727fs-3"
                })(["font-family:Teko;text-decoration:underline;text-transform:uppercase;font-size:18px;line-height:26px;text-align:right;margin-right:15px;"]),
                E = function(e) {
                    function t() {
                        var e, n, r, a;
                        (0, l.default)(this, t);
                        for (var i = arguments.length, u = Array(i), s = 0; s < i; s++) u[s] = arguments[s];
                        return n = r = (0, c.default)(this, (e = t.__proto__ || (0, o.default)(t)).call.apply(e, [this].concat(u))), r.state = {
                            width: null
                        }, a = n, (0, c.default)(r, a)
                    }
                    return (0, p.default)(t, e), (0, s.default)(t, [{
                        key: "render",
                        value: function() {
                            return y.default.createElement(_, {
                                absolute: this.props.absolute,
                                onClick: this.props.handleClick,
                                opacity: this.props.opacity
                            }, y.default.createElement(w, null, "play video"), y.default.createElement(b, null, y.default.createElement(x, {
                                name: "play"
                            })))
                        }
                    }]), t
                }(y.default.PureComponent);
            t.default = E
        },
        66: function(e, t, n) {
            function r(e) {
                return null == e ? void 0 === e ? u : l : s && s in Object(e) ? o(e) : i(e)
            }
            var a = n(134),
                o = n(468),
                i = n(469),
                l = "[object Null]",
                u = "[object Undefined]",
                s = a ? a.toStringTag : void 0;
            e.exports = r
        },
        67: function(e, t) {
            function n(e) {
                return null != e && "object" == typeof e
            }
            e.exports = n
        },
        90: function(e, t) {
            var n = Array.isArray;
            e.exports = n
        }
    }, [453]);
    return {
        page: comp.default
    }
})