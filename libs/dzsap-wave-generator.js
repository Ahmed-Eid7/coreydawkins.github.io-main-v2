(() => {
    "use strict";
    var __webpack_modules__ = {
            567: (e, t, a) => {
                a.d(t, {
                    OF: () => n,
                    w0: () => s
                });
                const n = {
                        PLAYLIST_TRANSITION_DURATION: 300,
                        DEBUG_STYLE_1: "background-color: #aaa022; color: #222222;",
                        DEBUG_STYLE_2: "background-color: #7c3b8e; color: #ffffff;",
                        DEBUG_STYLE_3: "background-color: #3a696b; color: #eeeeee;",
                        DEBUG_STYLE_ERROR: "background-color: #3a696b; color: #eeeeee;",
                        URL_WAVESURFER_HELPER_BACKUP: "https://zoomthe.me/assets/dzsap-wave-generate.js",
                        WAVESURFER_MAX_TIMEOUT: 2e4,
                        URL_JQUERY: "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js",
                        DEBUG_STYLE_PLAY_FUNCTIONS: "background-color: #daffda; color: #222222;",
                        ERRORED_OUT_CLASS: "errored-out",
                        ERRORED_OUT_MAX_ATTEMPTS: 5
                    },
                    s = "#dzsap-keyboard-controls"
            },
            401: (e, t, a) => {
                function n(e) {
                    return (e = e.replace("feed-dzsap", "")).replace("feed-dzsap--extra-html", "")
                }
                a.d(t, {
                    zO: () => n,
                    JY: () => s
                });
                const s = function(e) {
                    return void 0 !== e && "" != e
                }
            },
            586: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, {
                    convertPluginOptionsToFinalOptions: () => convertPluginOptionsToFinalOptions,
                    generateFakeArrayForPcm: () => generateFakeArrayForPcm
                });
                var _js_common_dzs_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401),
                    _dzsap_svgs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(560),
                    _player_player_keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(603),
                    _configs_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(567);

                function formatTime(e) {
                    var t = Math.round(e),
                        a = 0,
                        n = 0;
                    if (t > 0) {
                        for (; t > 3599 && t < 3e6 && isFinite(t);) n++, t -= 3600;
                        for (; t > 59 && t < 3e6 && isFinite(t);) a++, t -= 60;
                        return String(n ? (n < 10 ? "0" : "") + n + ":" + String((a < 10 ? "0" : "") + a + ":" + (t < 10 ? "0" : "") + t) : (a < 10 ? "0" : "") + a + ":" + (t < 10 ? "0" : "") + t)
                    }
                    return "00:00"
                }

                function can_history_api() {
                    return !(!window.history || !history.pushState)
                }

                function dzs_clean_string(e) {
                    return e ? e = (e = e.replace(/[^A-Za-z0-9\-]/g, "")).replace(/\./g, "") : ""
                }

                function get_query_arg(e, t) {
                    if (e && String(e).indexOf(t + "=") > -1) {
                        var a = new RegExp("[?&]" + t + "=.+").exec(e);
                        if (null != a) {
                            var n = a[0];
                            if (n.indexOf("&") > -1) {
                                var s = n.split("&");
                                n = s[1]
                            }
                            return n.split("=")[1]
                        }
                    }
                }

                function add_query_arg(e, t, a) {
                    e || (e = "");
                    var n = e,
                        s = (t = encodeURIComponent(t)) + "=" + (a = encodeURIComponent(a)),
                        r = new RegExp("(&|\\?)" + t + "=[^&]*");
                    if ((n = n.replace(r, "$1" + s)).indexOf(t + "=") > -1 || (n.indexOf("?") > -1 ? n += "&" + s : n += "?" + s), "NaN" === a) {
                        var i = new RegExp("[?|&]" + t + "=" + a); - 1 === (n = n.replace(i, "")).indexOf("?") && n.indexOf("&") > -1 && (n = n.replace("&", "?"))
                    }
                    return n
                }

                function dzsap_is_mobile() {
                    return is_ios() || is_android_good()
                }

                function is_ie() {
                    return !!window.MSInputMethodContext && !!document.documentMode
                }

                function is_ios() {
                    return -1 !== navigator.platform.indexOf("iPhone") || -1 !== navigator.platform.indexOf("iPod") || -1 !== navigator.platform.indexOf("iPad")
                }

                function can_canvas() {
                    return !!document.createElement("canvas").getContext("2d")
                }

                function is_safari() {
                    return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0
                }

                function is_android() {
                    return is_android_good()
                }

                function select_all(e) {
                    if (void 0 !== window.getSelection && void 0 !== document.createRange) {
                        var t = document.createRange();
                        t.selectNodeContents(e);
                        var a = window.getSelection();
                        a.removeAllRanges(), a.addRange(t)
                    } else if (void 0 !== document.selection && void 0 !== document.body.createTextRange) {
                        var n = document.body.createTextRange();
                        n.moveToElementText(e), n.select()
                    }
                }

                function is_android_good() {
                    return navigator.userAgent.toLowerCase().indexOf("android") > -1
                }

                function htmlEncode(e) {
                    return jQuery("<div/>").text(e).html()
                }

                function dzsap_generate_keyboard_tooltip(e, t) {
                    var a = '<span class="dzstooltip color-dark-light talign-start transition-slidein arrow-bottom style-default" style="width: auto;  white-space:nowrap;"><span class="dzstooltip--inner">Shortcut: ' + e[t] + "</span></span>";
                    return (a = a.replace("32", "space")).replace("27", "escape")
                }

                function hexToRgb(e, t = null) {
                    var a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e),
                        n = "";
                    if (a) {
                        var s = 1;
                        null !== t && (s = t), n = "rgba(" + (a = {
                            r: parseInt(a[1], 16),
                            g: parseInt(a[2], 16),
                            b: parseInt(a[3], 16)
                        }).r + "," + a.g + "," + a.b + "," + s + ")"
                    }
                    return n
                }

                function assignHelperFunctionsToJquery(e) {
                    Math.easeIn = function(e, t, a, n) {
                        return -a * (e /= n) * (e - 2) + t
                    };
                    const t = (e, t) => {
                        if (!e) {
                            var a = new RegExp('class="(.*?)"').exec(t);
                            a && a[1] && (e = "." + a[1])
                        }
                        return e
                    };
                    e.fn.prependOnce = function(a, n) {
                        var s = e(this);
                        return n = t(n, a), s.children(n).length < 1 && (s.prepend(a), !0)
                    }, e.fn.appendOnce = function(a, n) {
                        var s = e(this);
                        return n = t(n, a), s.children(n).length < 1 && (s.append(a), !0)
                    }
                }

                function registerTextWidth(e) {
                    e.fn.textWidth = function() {
                        var e = jQuery(this),
                            t = e.html();
                        "INPUT" === e[0].nodeName && (t = e.val());
                        var a = '<span class="forcalc">' + t + "</span>";
                        jQuery("body").append(a);
                        var n = jQuery("span.forcalc").last();
                        n.css({
                            "font-size": e.css("font-size"),
                            "font-family": e.css("font-family")
                        });
                        var s = n.width();
                        return n.remove(), s
                    }
                }

                function player_checkIfWeShouldShowAComment(e, t, a) {
                    var n = jQuery,
                        s = Math.round(t / a * 100) / 100;
                    "fake" === e.audioType && (s = Math.round(e.timeCurrent / e.timeTotal * 100) / 100), e._commentsHolder && e._commentsHolder.children().each((function() {
                        var t = n(this);
                        if (t.hasClass("dzstooltip-con")) {
                            var a = t.offset().left - e._commentsHolder.offset().left,
                                r = Math.round(parseFloat(a) / e._commentsHolder.outerWidth() * 100) / 100;
                            r && (Math.abs(r - s) < .02 ? (e._commentsHolder.find(".dzstooltip").removeClass("active"), t.find(".dzstooltip").addClass("active")) : t.find(".dzstooltip").removeClass("active"))
                        }
                    }))
                }

                function sanitizeObjectForChangeMediaArgs(e) {
                    var t = {},
                        a = e,
                        n = "";
                    return e.data("original-settings") ? e.data("original-settings") : (t.source = null, a.attr("data-source") ? t.source = a.attr("data-source") : a.attr("href") && (t.source = a.attr("href")), a.attr("data-pcm") && (t.pcm = a.attr("data-pcm")), n = "thumb", a.attr("data-" + n) && (t[n] = e.attr("data-" + n)), n = "playerid", a.attr("data-" + n) && (t[n] = e.attr("data-" + n)), n = "type", a.attr("data-" + n) && (t[n] = e.attr("data-" + n)), a.attr("data-thumb_link") && (t.thumb_link = e.attr("data-thumb_link")), (e.find(".meta-artist").length > 0 || e.find(".meta-artist-con").length > 0) && (t.artist = e.find(".the-artist").eq(0).html(), t.song_name = e.find(".the-name").eq(0).html()), e.attr("data-thumb_for_parent") && (t.thumb = e.attr("data-thumb_for_parent")), (e.find(".feed-song-name").length > 0 || e.find(".feed-artist-name").length > 0) && (t.artist = e.find(".feed-artist-name").eq(0).html(), t.song_name = e.find(".feed-song-name").eq(0).html()), t)
                }

                function utils_sanitizeToColor(e) {
                    return -1 === e.indexOf("#") && -1 === e.indexOf("rgb") && -1 === e.indexOf("hsl") ? "#" + e : e
                }

                function dzsapInitjQueryRegisters() {}

                function player_radio_isNameUpdatable(e, t, a) {
                    return !!(e._metaArtistCon.find(a).length && e._metaArtistCon.find(a).eq(0).text().length > 0 && e._metaArtistCon.find(a).eq(0).html().indexOf("{{update}}") > -1)
                }

                function playerRegisterWindowFunctions() {
                    window.dzsap_functions = {}, window.dzsap_functions.send_total_time = function(e, t) {
                        if (e && e !== 1 / 0) {
                            const a = {
                                action: "dzsap_send_total_time_for_track",
                                id_track: t.attr("data-playerid"),
                                postdata: Math.ceil(e)
                            };
                            jQuery.post(window.dzsap_ajaxurl, a, (function(e) {}))
                        }
                    }, window.dzs_open_social_link = function(e, t) {
                        var a, n, s = "status=no,height=500,width=500,resizable=yes,left=" + (a = window.screen.width / 2 - 260) + ",top=" + (n = window.screen.height / 2 - 300) + ",screenX=" + a + ",screenY=" + n + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
                        e = e.replace("{{replacewithcurrurl}}", encodeURIComponent(window.location.href)), t && t.attr && (e = e.replace(/{{replacewithdataurl}}/g, t.attr("data-url")));
                        const r = window.location.href.split("?");
                        let i = "",
                            o = "";
                        if (t || window.dzsap_currplayer_from_share && (t = window.dzsap_currplayer_from_share), t) {
                            const e = jQuery;
                            e(t).hasClass("audioplayer") ? (i = e(t).parent().children().index(t), o = e(t).parent().parent().parent().attr("id")) : (jQuery(t).parent().parent().attr("data-menu-index") && (i = jQuery(t).parent().parent().attr("data-menu-index")), jQuery(t).parent().parent().attr("data-gallery-id") && (o = jQuery(t).parent().parent().attr("data-gallery-id")))
                        }
                        var d = encodeURIComponent(r[0] + "?fromsharer=on&audiogallery_startitem_" + o + "=" + i);
                        e = e.replace("{{shareurl}}", d), window.open(e, "sharer", s)
                    }, window.dzsap_wp_send_contor_60_secs = function(e, t) {
                        var a = {
                                video_title: t,
                                video_analytics_id: e.attr("data-playerid"),
                                curr_user: window.dzsap_curr_user
                            },
                            n = "index.php?action=ajax_dzsap_submit_contor_60_secs";
                        window.dzsap_settings.dzsap_site_url && (n = dzsap_settings.dzsap_site_url + n), jQuery.ajax({
                            type: "POST",
                            url: n,
                            data: a,
                            success: function(e) {},
                            error: function(e) {}
                        })
                    }, window.dzsap_init_multisharer = function() {}, window.dzsap_submit_like = function(e, t) {
                        var a = {
                                action: "dzsap_submit_like",
                                playerid: e
                            },
                            n = null;
                        t && (n = jQuery(t.currentTarget)), window.dzsap_settings && window.dzsap_settings.ajax_url && jQuery.ajax({
                            type: "POST",
                            url: window.dzsap_settings.ajax_url,
                            data: a,
                            success: function(e) {
                                if (n) {
                                    var t = n.html();
                                    n.html(t.replace("fa-heart-o", "fa-heart"))
                                }
                            },
                            error: function(e) {}
                        })
                    }, window.dzsap_retract_like = function(e, t) {
                        var a = {
                                action: "dzsap_retract_like",
                                playerid: e
                            },
                            n = null;
                        t && (n = jQuery(t.currentTarget)), window.dzsap_settings && window.dzsap_settings.ajax_url && jQuery.ajax({
                            type: "POST",
                            url: window.dzsap_settings.ajax_url,
                            data: a,
                            success: function(e) {
                                if (n) {
                                    var t = n.html();
                                    n.html(t.replace("fa-heart", "fa-heart-o"))
                                }
                            },
                            error: function(e) {}
                        })
                    }
                }

                function string_jsonConvertToArray(e) {
                    let t = [];
                    if ("object" == typeof e) t = e;
                    else try {
                        t = JSON.parse(e)
                    } catch (e) {}
                    return t
                }

                function dzsap_singleton_ready_calls() {
                    window.dzsap_singleton_ready_calls_is_called = !0;
                    let e = null;
                    const t = document.querySelectorAll(".dzsap-main-settings");
                    t.length && (e = t[t.length - 1]), e && (window.dzsap_settings = JSON.parse(e.innerHTML), window.ajaxurl = window.dzsap_settings.ajax_url, window.dzsap_curr_user = window.dzsap_settings.dzsap_curr_user), jQuery("body").append('<style class="dzsap--style"></style>'), window.dzsap__style = jQuery(".dzsap--style"), jQuery("audio.zoomsounds-from-audio").each((function() {
                        var e = jQuery(this);
                        e.after('<div class="audioplayer-tobe auto-init skin-silver" data-source="' + e.attr("src") + '"></div>'), e.remove()
                    })), jQuery(document).on("focus.dzsap", "input", (function() {
                        window.dzsap_currplayer_focused = null
                    })), registerTextWidth(jQuery), (0, _player_player_keyboard__WEBPACK_IMPORTED_MODULE_0__.z2)()
                }

                function jQueryAuxBindings(e) {
                    e(document).off("click.dzsap_metas"), e(document).on("click.dzsap_metas", ".audioplayer-song-changer, .dzsap-wishlist-but", (function(t) {
                        var a = e(this);
                        if (t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), a.hasClass("audioplayer-song-changer")) {
                            var n = e(a.attr("data-fakeplayer")).eq(0);
                            return n && n.get(0) && n.get(0).api_change_media && n.get(0).api_change_media(a, {
                                feeder_type: "button",
                                call_from: "changed audioplayer-song-changer"
                            }), !1
                        }
                        if (a.hasClass("dzsap-wishlist-but")) {
                            var s = {
                                action: "dzsap_add_to_wishlist",
                                playerid: a.attr("data-post_id"),
                                wishlist_action: "add"
                            };
                            return a.find(".svg-icon").hasClass("fa-star") && (s.wishlist_action = "remove"), window.dzsap_lasto.settings_php_handler && e.ajax({
                                type: "POST",
                                url: window.dzsap_lasto.settings_php_handler,
                                data: s,
                                success: function(e) {
                                    a.find(".svg-icon").hasClass("fa-star-o") ? a.find(".svg-icon").eq(0).attr("class", "svg-icon fa fa-star") : a.find(".svg-icon").eq(0).attr("class", "svg-icon fa fa-star-o")
                                },
                                error: function(e) {}
                            }), !1
                        }
                    })), e(document).on("click", ".dzsap-like-but", (function(t) {
                        var a = e(this),
                            n = a.attr("data-post_id");
                        return n && "0" != n || a.parent().parent().parent().parent().parent().hasClass("audioplayer") && (n = a.parent().parent().parent().parent().parent().attr("data-feed-playerid")), window.dzsap_submit_like(n, t), a.removeClass("dzsap-like-but").addClass("dzsap-retract-like-but"), !1
                    })), e(document).on("click", ".dzsap-retract-like-but", (function(t) {
                        var a = e(this),
                            n = a.attr("data-post_id");
                        return n && "0" != n || a.parent().parent().parent().parent().parent().hasClass("audioplayer") && (n = a.parent().parent().parent().parent().parent().attr("data-feed-playerid")), window.dzsap_retract_like(n, t), a.addClass("dzsap-like-but").removeClass("dzsap-retract-like-but"), !1
                    }))
                }

                function selectText(e) {
                    if (document.selection)(t = document.body.createTextRange()).moveToElementText(e), t.select();
                    else if (window.getSelection) {
                        var t;
                        (t = document.createRange()).selectNode(e), window.getSelection().removeAllRanges(), window.getSelection().addRange(t)
                    }
                }

                function view_player_playMiscEffects(e) {
                    e.$conPlayPause.addClass("playing"), e.cthis.parent().hasClass("zoomsounds-wrapper-bg-center") && e.cthis.parent().addClass("is-playing")
                }

                function view_player_globalDetermineSyncPlayersIndex(e) {
                    null === e._sourcePlayer && window.dzsap_syncList_players && window.dzsap_syncList_players.forEach(((t, a) => {
                        e.cthis.attr("data-playerid") == t.attr("data-playerid") && (window.dzsap_syncList_index = a)
                    }))
                }

                function player_view_addMetaLoaded(e) {
                    e.cthis.addClass("meta-loaded"), e.cthis.removeClass("meta-fake"), e._sourcePlayer && (e._sourcePlayer.addClass("meta-loaded"), e._sourcePlayer.removeClass("meta-fake")), e.$totalTime && (e.timeModel.refreshTimes(), e.$totalTime.html(formatTime(e.timeModel.getVisualTotalTime()))), e._sourcePlayer && e._sourcePlayer.addClass("meta-loaded")
                }

                function player_determineActualPlayer(e) {
                    var t = jQuery,
                        a = t(e.cthis.attr("data-fakeplayer"));
                    0 === a.length && (a = t(String(e.cthis.attr("data-fakeplayer")).replace("#", "."))).length && (e._actualPlayer = t(String(e.cthis.attr("data-fakeplayer")).replace("#", ".")), e.cthis.attr("data-fakeplayer", String(e.cthis.attr("data-fakeplayer")).replace("#", "."))), 0 === a.length ? e.cthis.attr("data-fakeplayer", "") : (e.cthis.addClass("player-is-feeding is-source-player-for-actual-player"), e.cthis.attr("data-type") && (e._actualPlayer = t(e.cthis.attr("data-fakeplayer")).eq(0), e._actualPlayer.addClass("player-is-feeded"), e.actualDataTypeOfMedia = e.cthis.attr("data-type"), e.cthis.attr("data-original-type", e.actualDataTypeOfMedia)))
                }

                function htmlEntities(e) {
                    return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                }

                function waitForScriptToBeAvailableThenExecute(e, t) {
                    new Promise(((t, a) => {
                        var n = 0;

                        function s() {
                            e && (clearInterval(n), t("var exists"))
                        }
                        s(), n = setInterval(s, 300), setTimeout((() => {
                            a("timeout")
                        }), 5e3)
                    })).then((e => {
                        t(e)
                    })).catch((e => {}))
                }

                function configureAudioPlayerOptionsInitial(e, t, a) {
                    a.cthis.addClass("preload-method-" + t.preload_method), t.wavesurfer_pcm_length = Number(t.wavesurfer_pcm_length), t.settings_trigger_resize = parseInt(t.settings_trigger_resize, 10), !1 === isNaN(parseInt(t.design_thumbh, 10)) && (t.design_thumbh = parseInt(t.design_thumbh, 10)), "on" === t.skinwave_enableSpectrum && (t.skinwave_wave_mode = "canvas"), "" === t.skinwave_wave_mode && (t.skinwave_wave_mode = "canvas"), "" === t.skinwave_wave_mode_canvas_normalize && (t.skinwave_wave_mode_canvas_normalize = "on"), ("" === t.skinwave_wave_mode_canvas_waves_number || isNaN(Number(t.skinwave_wave_mode_canvas_waves_number))) && (t.skinwave_wave_mode_canvas_waves_number = 3), "on" === t.autoplay && "on" === t.cue && (t.preload_method = "auto"), e.addClass(t.extra_classes_player), "" === t.design_skin && (t.design_skin = "skin-default"), a.cthis.find(".feed-dzsap--embed-code").length ? a.feedEmbedCode = a.cthis.find(".feed-dzsap--embed-code").eq(0).html() : "" !== t.embed_code && (a.feedEmbedCode = t.embed_code), is_ios() && "on" === a.initOptions.skinwave_enableSpectrum && (a.initOptions.skinwave_enableSpectrum = "off"), / skin-/g.test(e.attr("class")) || e.addClass(t.design_skin), e.hasClass("skin-default") && (t.design_skin = "skin-default"), e.hasClass("skin-wave") && (t.design_skin = "skin-wave"), e.hasClass("skin-justthumbandbutton") && (t.design_skin = "skin-justthumbandbutton"), e.hasClass("skin-pro") && (t.design_skin = "skin-pro"), e.hasClass("skin-aria") && (t.design_skin = "skin-aria"), e.hasClass("skin-silver") && (t.design_skin = "skin-silver"), e.hasClass("skin-redlights") && (t.design_skin = "skin-redlights"), e.hasClass("skin-steel") && (t.design_skin = "skin-steel"), e.hasClass("skin-customcontrols") && (t.design_skin = "skin-customcontrols"), "skin-wave" === t.design_skin && "auto" === t.scrubbar_type && (t.scrubbar_type = "wave"), "auto" === t.scrubbar_type && (t.scrubbar_type = "bar"), "wpdefault" === t.settings_php_handler && (t.settings_php_handler = window.ajaxurl), "wpdefault" === t.action_received_time_total && (t.action_received_time_total = window.dzsap_send_total_time), "wpdefault" === t.action_video_contor_60secs && (t.action_video_contor_60secs = window.action_video_contor_60secs), (is_ios() || is_android()) && (t.autoplay = "off", t.disable_volume = "on", "off" === t.cueMedia && (t.cueMedia = "on"), t.cueMedia = "on"), "on" === e.attr("data-viewsubmitted") && (a.ajax_view_submitted = "on"), e.attr("data-userstarrating") && (a.starrating_alreadyrated = Number(e.attr("data-userstarrating"))), "on" === e.attr("data-loop") && (a.initOptions.loop = "on"), e.hasClass("skin-minimal") && (t.design_skin = "skin-minimal", "default" === t.disable_volume && (t.disable_volume = "on"), "default" === t.disable_scrub && (t.disable_scrub = "on"), t.disable_timer = "on"), e.hasClass("skin-minion") && (t.design_skin = "skin-minion", "default" === t.disable_volume && (t.disable_volume = "on"), "default" === t.disable_scrub && (t.disable_scrub = "on"), t.disable_timer = "on"), t.design_color_bg && (t.design_wave_color_bg = t.design_color_bg), t.design_color_highlight && (t.design_wave_color_progress = t.design_color_highlight), "skin-justthumbandbutton" === t.design_skin && ("default" === t.design_thumbh && (t.design_thumbh = ""), t.disable_timer = "on", t.disable_volume = "on", "default" === t.design_animateplaypause && (t.design_animateplaypause = "on")), "skin-redlights" === t.design_skin && (t.disable_timer = "on", t.disable_volume = "off", "default" === t.design_animateplaypause && (t.design_animateplaypause = "on")), "skin-steel" === t.design_skin && ("default" === t.disable_timer && (t.disable_timer = "off"), t.disable_volume = "on", "default" === t.design_animateplaypause && (t.design_animateplaypause = "on"), "default" === t.disable_scrub && (t.disable_scrub = "on")), "skin-customcontrols" === t.design_skin && ("default" === t.disable_timer && (t.disable_timer = "on"), t.disable_volume = "on", "default" === t.design_animateplaypause && (t.design_animateplaypause = "on"), "default" === t.disable_scrub && (t.disable_scrub = "on")), "reflecto" === t.skinwave_wave_mode_canvas_mode && (t.skinwave_wave_mode_canvas_reflection_size = .5), "reflecto" === t.skinwave_wave_mode_canvas_mode && (t.skinwave_wave_mode_canvas_reflection_size = .5), "" === t.embed_code && e.find("div.feed-embed-code").length > 0 && (t.embed_code = e.find("div.feed-embed-code").eq(0).html()), "default" === t.design_animateplaypause && (t.design_animateplaypause = "off"), "on" === t.design_animateplaypause && e.addClass("design-animateplaypause"), window.dzsap_settings && window.dzsap_settings.ajax_url && (t.settings_php_handler || (t.settings_php_handler = window.dzsap_settings.ajax_url)), t.settings_php_handler ? a.urlToAjaxHandler = t.settings_php_handler : window.dzsap_settings && window.dzsap_settings.php_handler && (a.urlToAjaxHandler = window.dzsap_settings.php_handler), player_reinit_findIfPcmNeedsGenerating(a)
                }

                function player_reinit_findIfPcmNeedsGenerating(e) {
                    const t = e.initOptions;
                    e.cthis.attr("data-pcm") && (e.hasInitialPcmData = !0), e.hasInitialPcmData || "canvas" !== t.skinwave_wave_mode || "skin-wave" !== t.design_skin && !e.cthis.attr("data-fakeplayer") || (e.isPcmRequiredToGenerate = !0), "wave" === t.scrubbar_type && (t.is_inited_from_playlist && e.cthis.addClass("scrubbar-type-wave--has-reveal-animation"), "on" === t.scrubbar_type_wave__has_reveal_animation && e.cthis.addClass("scrubbar-type-wave--has-reveal-animation"), e.isPcmRequiredToGenerate && e.cthis.addClass("scrubbar-type-wave--has-reveal-animation"))
                }

                function playerFunctions(e, t) {
                    var a = e.initOptions;
                    "detectIds" === t && ("" === a.skinwave_comments_playerid && void 0 !== e.cthis.attr("id") && (e.the_player_id = e.cthis.attr("id")), "" == e.the_player_id && (e.cthis.attr("data-computed-playerid") && (e.the_player_id = e.cthis.attr("data-computed-playerid")), e.cthis.attr("data-real-playerid") && (e.the_player_id = e.cthis.attr("data-real-playerid"))), e.uniqueId = e.the_player_id, "string" == typeof e.uniqueId && (e.uniqueId = e.uniqueId.replace("ap", "")), e.identifier_pcm = e.uniqueId, "" === e.uniqueId && (a.skinwave_comments_enable = "off"))
                }

                function player_delete(e) {
                    var t = null;
                    return e.cthis.parent().parent().hasClass("dzsap-sticktobottom") && (t = e.cthis.parent().parent()), t && (t.prev().hasClass("dzsap-sticktobottom-placeholder") && t.prev().remove(), t.remove()), e.cthis.remove(), !1
                }

                function player_viewApplySkinWaveModes(e) {
                    var t = e.initOptions;
                    e.cthis.removeClass("skin-wave-mode-normal"), "skin-wave" === t.design_skin && (e.cthis.addClass("skin-wave-mode-" + e.skinwave_mode), e.cthis.addClass("skin-wave-wave-mode-" + t.skinwave_wave_mode), "on" === t.skinwave_enableSpectrum && e.cthis.addClass("skin-wave-is-spectrum"), e.cthis.addClass("skin-wave-wave-mode-canvas-mode-" + t.skinwave_wave_mode_canvas_mode))
                }

                function sanitizeToHexColor(e) {
                    return -1 === e.indexOf("#") && (e = "#" + e), e
                }

                function player_identifySource(e) {
                    e.data_source = e.cthis.attr("data-source") || ""
                }

                function player_identifyTypes(e) {
                    var t = e.initOptions;
                    const a = e.cthis;
                    "youtube" === a.attr("data-type") && (t.type = "youtube", e.audioType = "youtube"), "soundcloud" === a.attr("data-type") && (t.type = "soundcloud", e.audioType = "soundcloud", t.skinwave_enableSpectrum = "off", a.removeClass("skin-wave-is-spectrum")), "mediafile" === a.attr("data-type") && (t.type = "audio", e.audioType = "audio"), "shoutcast" === a.attr("data-type") && (t.type = "shoutcast", e.audioType = "audio", t.disable_timer = "on", t.skinwave_enableSpectrum = "off", a.attr("data-streamtype") || (e.audioTypeSelfHosted_streamType = "shoutcast"), "skin-default" === t.design_skin && (t.disable_scrub = "on")), "audio" !== e.audioType && "normal" !== e.audioType && "" !== e.audioType || (e.audioType = "selfHosted"), String(e.data_source).indexOf("https://soundcloud.com/") > -1 && (e.audioType = "soundcloud")
                }

                function player_adjustIdentifiers(e) {
                    e.identifier_pcm = e.the_player_id;
                    var t = null;
                    t = e.$feed_fakeButton ? e.$feed_fakeButton : e._sourcePlayer ? e._sourcePlayer : null, "dzs_footer" === e.identifier_pcm && (e.identifier_pcm = dzs_clean_string(e.cthis.attr("data-source"))), t && (t.attr("data-playerid") ? e.identifier_pcm = t.attr("data-playerid") : t.attr("data-source") && (e.identifier_pcm = t.attr("data-source"))), "string" == typeof e.identifier_pcm && (e.identifier_pcm = e.identifier_pcm.replace("ap", ""))
                }

                function player_getPlayFromTime(e) {
                    e.playFrom = e.initOptions.playfrom, (0, _js_common_dzs_helpers__WEBPACK_IMPORTED_MODULE_2__.JY)(e.cthis.attr("data-playfrom")) && (e.playFrom = e.cthis.attr("data-playfrom")), !1 === isNaN(parseInt(e.playFrom, 10)) && (e.playFrom = parseInt(e.playFrom, 10)), "off" !== e.playFrom && "" !== e.playFrom || get_query_arg(window.location.href, "audio_time") && (e.playFrom = sanitizeToIntFromPointTime(get_query_arg(window.location.href, "audio_time"))), e.timeModel.sampleTimeStart && (e.playFrom < e.timeModel.sampleTimeStart && (e.playFrom = e.timeModel.sampleTimeStart), "string" == typeof e.playFrom && (e.playFrom = e.timeModel.sampleTimeStart))
                }

                function sanitizeToIntFromPointTime(e) {
                    if (e = String(e).replace("%3A", ":"), (e = String(e).replace("#", "")) && String(e).indexOf(":") > -1) {
                        var t = /(\d.*):(\d.*)/g.exec(e);
                        return 60 * parseInt(t[1], 10) + parseInt(t[2], 10)
                    }
                    return Number(e)
                }

                function player_determineStickToBottomContainer(e) {
                    e.cthis.parent().hasClass("dzsap-sticktobottom") && (e.$stickToBottomContainer = e.cthis.parent(), e.isStickyPlayer = !0), e.cthis.parent().parent().hasClass("dzsap-sticktobottom") && (e.$stickToBottomContainer = e.cthis.parent().parent(), e.isStickyPlayer = !0)
                }

                function player_stickToBottomContainerDetermineClasses(e) {
                    e.$stickToBottomContainer && (e.cthis.hasClass("theme-dark") && e.$stickToBottomContainer.addClass("theme-dark"), setTimeout((function() {
                        e.$stickToBottomContainer.addClass("inited")
                    }), 500))
                }

                function player_service_getSourceProtection(e) {
                    return new Promise(((t, a) => {
                        jQuery.ajax({
                            type: "POST",
                            url: e.data_source,
                            data: {},
                            success: function(e) {
                                t(e)
                            },
                            error: function(e) {
                                a(e)
                            }
                        })
                    }))
                }

                function player_isGoingToSetupMediaNow(e) {
                    return "icecast" !== e.audioTypeSelfHosted_streamType && "youtube" !== e.audioType
                }

                function player_determineHtmlAreas(e) {
                    var t = e.initOptions;
                    let a = "",
                        n = "",
                        s = "";
                    for (var r in e.cthis.children(".feed-dzsap--extra-html").length > 0 && "" === t.settings_extrahtml ? (e.cthis.children(".feed-dzsap--extra-html").each((function() {
                            console.log(this);
                            let e = (0, _js_common_dzs_helpers__WEBPACK_IMPORTED_MODULE_2__.zO)(this.className);
                            a += `<section class="dzsap-extra-html--section-bottom ${e}">${this.innerHTML}</section>`
                        })), e.cthis.children(".feed-dzsap--extra-html").remove()) : t.settings_extrahtml && (a = t.settings_extrahtml), e.cthis.children(".feed-dzsap--extra-html-in-controls-left").length > 0 && (n = e.cthis.children(".feed-dzsap--extra-html-in-controls-left").eq(0).html()), e.cthis.children(".feed-dzsap--extra-html-in-controls-right").length > 0 && (s = e.cthis.children(".feed-dzsap--extra-html-in-controls-right").eq(0).html()), e.cthis.children(".feed-dzsap--extra-html-bottom").length > 0 && (a = e.cthis.children(".feed-dzsap--extra-html-bottom").eq(0).html()), e.extraHtmlAreas.controlsLeft = n, e.extraHtmlAreas.controlsRight = s, e.extraHtmlAreas.bottom = a, e.extraHtmlAreas.controlsRight && (e.extraHtmlAreas.controlsRight = String(e.extraHtmlAreas.controlsRight).replace(/{{svg_share_icon}}/g, _dzsap_svgs__WEBPACK_IMPORTED_MODULE_3__.a$)), e.extraHtmlAreas) e.extraHtmlAreas[r] = String(e.extraHtmlAreas[r]).replace("{{heart_svg}}", "\t&hearts;"), e.extraHtmlAreas[r] = String(e.extraHtmlAreas[r]).replace("{{embed_code}}", e.feedEmbedCode)
                }

                function player_stopOtherPlayers(e, t) {
                    let a = 0;
                    for (a = 0; a < e.length; a++) e[a].get(0) && e[a].get(0).api_pause_media && e[a].get(0) != t.cthis.get(0) && (e[a].data("type_audio_stop_buffer_on_unfocus") && "on" === e[a].data("type_audio_stop_buffer_on_unfocus") ? e[a].get(0).api_destroy_for_rebuffer() : e[a].get(0).api_pause_media({
                        audioapi_setlasttime: !1
                    }))
                }

                function player_syncPlayers_gotoItem(e, t) {
                    if (window.dzsap_settings.syncPlayers_autoplayEnabled)
                        for (let a in window.dzsap_syncList_players) {
                            let n = e.cthis;
                            if (e._sourcePlayer && (n = e._sourcePlayer), window.dzsap_syncList_players[a].get(0) === n.get(0)) {
                                a = parseInt(a, 10);
                                let e = window.dzsap_syncList_index + t;
                                if (e >= 0 && e < window.dzsap_syncList_players.length) {
                                    const t = window.dzsap_syncList_players[e].get(0);
                                    t && t.api_play_media && setTimeout((function() {
                                        t.api_play_media({
                                            called_from: "api_sync_players_prev"
                                        })
                                    }), 200)
                                }
                            }
                        }
                }

                function player_syncPlayers_buildList() {
                    window.syncPlayers_isDzsapListBuilt || (window.dzsap_syncList_players = [], window.syncPlayers_isDzsapListBuilt = !0, jQuery(".audioplayer.is-single-player,.audioplayer-tobe.is-single-player").each((function() {
                        var e = jQuery(this);
                        e.hasClass("dzsap_footer") || "on" !== e.attr("data-do-not-include-in-list") && window.dzsap_syncList_players.push(e)
                    })), clearTimeout(window.syncPlayers_buildTimeout), window.syncPlayers_buildTimeout = setTimeout((function() {
                        window.syncPlayers_isDzsapListBuilt = !1
                    }), 500))
                }

                function player_detect_skinwave_mode() {
                    var e = this;
                    e.skinwave_mode = e.initOptions.skinwave_mode, e.cthis.hasClass("skin-wave-mode-small") && (e.skinwave_mode = "small"), e.cthis.hasClass("skin-wave-mode-alternate") && (e.skinwave_mode = "alternate"), e.cthis.hasClass("skin-wave-mode-bigwavo") && (e.skinwave_mode = "bigwavo")
                }

                function convertPluginOptionsToFinalOptions(elThis, defaultOptions, argOptions = null, searchedAttr = "data-options", $es) {
                    var finalOptions = null,
                        tempOptions = {},
                        isSetFromJson = !1;
                    void 0 === $es && ($es = jQuery);
                    var $elThis = $es(elThis);
                    const isArgOptionsDefinedViaJs = Boolean(argOptions && "object" == typeof argOptions && Object.keys(argOptions).length);
                    if (isArgOptionsDefinedViaJs) tempOptions = argOptions;
                    else {
                        if ($elThis.attr(searchedAttr)) try {
                            tempOptions = JSON.parse($elThis.attr(searchedAttr)), isSetFromJson = !0
                        } catch (e) {}
                        if (!isSetFromJson && void 0 !== $elThis.attr(searchedAttr) && "" != $elThis.attr("data-options")) {
                            var aux = $elThis.attr(searchedAttr);
                            aux = "var aux_opts = " + aux, eval(aux), tempOptions = Object.assign({}, argOptions)
                        }
                    }
                    return finalOptions = Object.assign(defaultOptions, tempOptions), finalOptions
                }

                function generateFakeArrayForPcm() {
                    for (var e = [], t = 0; t < 256; t++) e[t] = 100 * Math.random();
                    return e
                }

                function scrubbar_modeWave_clearObsoleteCanvas(e) {
                    e._scrubbar && e._scrubbar.find(".scrubbar-type-wave--canvas.transitioning-out").remove()
                }

                function scrubbar_modeWave_setupCanvas_context(e) {
                    var t = e.get(0).getContext("2d");
                    t.imageSmoothingEnabled = !1, t.imageSmoothing = !1, t.imageSmoothingQuality = "high", t.webkitImageSmoothing = !1
                }

                function scrubbar_modeWave_setupCanvas(e, t) {
                    var a = {
                        prepare_for_transition_in: !1
                    };
                    e && (a = Object.assign(a, e));
                    var n = t.initOptions;
                    t._scrubbar.find(".scrub-bg").eq(0).append('<canvas class="scrubbar-type-wave--canvas scrub-bg-img" ></canvas>'), t._scrubbar.find(".scrub-prog").eq(0).append('<canvas class="scrubbar-type-wave--canvas scrub-prog-img" ></canvas>'), t._scrubbarbg_canvas = t._scrubbar.find(".scrub-bg-img").last(), t._scrubbarprog_canvas = t._scrubbar.find(".scrub-prog-img").last(), "on" === n.skinwave_enableSpectrum && t._scrubbarprog_canvas.hide(), scrubbar_modeWave_setupCanvas_context(t._scrubbarbg_canvas), scrubbar_modeWave_setupCanvas_context(t._scrubbarprog_canvas), a.prepare_for_transition_in && (t._scrubbarbg_canvas.addClass("preparing-transitioning-in"), t._scrubbarprog_canvas.addClass("preparing-transitioning-in"), setTimeout((function() {
                        t._scrubbarbg_canvas.addClass("transitioning-in"), t._scrubbarprog_canvas.addClass("transitioning-in")
                    }), 20))
                }
            },
            560: (e, t, a) => {
                a.d(t, {
                    a$: () => n
                });
                const n = '<svg class="svg-icon" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 511.626 511.627" style="enable-background:new 0 0 511.626 511.627;" xml:space="preserve"> <g> <path d="M506.206,179.012L360.025,32.834c-3.617-3.617-7.898-5.426-12.847-5.426s-9.233,1.809-12.847,5.426 c-3.617,3.619-5.428,7.902-5.428,12.85v73.089h-63.953c-135.716,0-218.984,38.354-249.823,115.06C5.042,259.335,0,291.03,0,328.907 c0,31.594,12.087,74.514,36.259,128.762c0.57,1.335,1.566,3.614,2.996,6.849c1.429,3.233,2.712,6.088,3.854,8.565 c1.146,2.471,2.384,4.565,3.715,6.276c2.282,3.237,4.948,4.859,7.994,4.859c2.855,0,5.092-0.951,6.711-2.854 c1.615-1.902,2.424-4.284,2.424-7.132c0-1.718-0.238-4.236-0.715-7.569c-0.476-3.333-0.715-5.564-0.715-6.708 c-0.953-12.938-1.429-24.653-1.429-35.114c0-19.223,1.668-36.449,4.996-51.675c3.333-15.229,7.948-28.407,13.85-39.543 c5.901-11.14,13.512-20.745,22.841-28.835c9.325-8.09,19.364-14.702,30.118-19.842c10.756-5.141,23.413-9.186,37.974-12.135 c14.56-2.95,29.215-4.997,43.968-6.14s31.455-1.711,50.109-1.711h63.953v73.091c0,4.948,1.807,9.232,5.421,12.847 c3.62,3.613,7.901,5.424,12.847,5.424c4.948,0,9.232-1.811,12.854-5.424l146.178-146.183c3.617-3.617,5.424-7.898,5.424-12.847 C511.626,186.92,509.82,182.636,506.206,179.012z" fill="#696969"/> </g></svg> '
            },
            603: (e, t, a) => {
                a.d(t, {
                    z2: () => r
                });
                var n = a(567);

                function s(e) {
                    if (window.dzsap_isTextFieldFocused) return;

                    function t(t) {
                        let a = !1;
                        return t.indexOf("ctrl+") > -1 ? e.ctrlKey && (t = t.replace("ctrl+", ""), e.keyCode === Number(t) && (a = !0)) : e.keyCode === Number(t) && (a = !0), a
                    }
                    var a = jQuery;
                    const s = a.extend({}, function() {
                        let e = {
                            play_trigger_step_back: "off",
                            step_back_amount: "5",
                            step_back: "37",
                            step_forward: "39",
                            sync_players_goto_next: "",
                            sync_players_goto_prev: "",
                            pause_play: "32",
                            show_tooltips: "off"
                        };
                        const t = jQuery(n.w0);
                        return t.length && (window.dzsap_keyboard_controls = JSON.parse(t.html())), window.dzsap_keyboard_controls && (e = jQuery.extend(e, window.dzsap_keyboard_controls)), e.step_back_amount = Number(e.step_back_amount), e
                    }());
                    if (dzsap_currplayer_focused && dzsap_currplayer_focused.api_pause_media) {
                        if (t(s.pause_play) && !a(dzsap_currplayer_focused).hasClass("comments-writer-active") && (a(dzsap_currplayer_focused).hasClass("is-playing") ? dzsap_currplayer_focused.api_pause_media() : dzsap_currplayer_focused.api_play_media(), window.dzsap_mouseover)) return e.preventDefault(), !1;
                        t(s.step_back) && dzsap_currplayer_focused.api_step_back(s.step_back_amount), t(s.step_forward) && dzsap_currplayer_focused.api_step_forward(s.step_back_amount), t(s.sync_players_goto_next) && dzsap_currplayer_focused.api_sync_players_goto_next(), t(s.sync_players_goto_prev) && dzsap_currplayer_focused.api_sync_players_goto_prev()
                    }
                }
                const r = () => {
                    let e = jQuery;
                    window.dzsap_isTextFieldFocused = !1, e(document).off("keydown.dzsapkeyup"), e(document).on("keydown.dzsapkeyup", s), e(document).on("focus blur", "textarea,input", (function(e) {
                        "focusin" != e.type && "focus" != e.type || (window.dzsap_isTextFieldFocused = !0), "focusout" != e.type && "blur" != e.type || (window.dzsap_isTextFieldFocused = !1)
                    })), e(document).on("keydown blur", ".zoomsounds-search-field", (function(t) {
                        const a = e(t.currentTarget);
                        setTimeout((function() {
                            if (a) {
                                let t = e(".audiogallery").eq(0);
                                a.attr("data-target") && (t = e(a.attr("data-target"))), t.get(0) && t.get(0).api_filter && t.get(0).api_filter("title", a.val())
                            }
                        }), 100)
                    }))
                }
            }
        },
        __webpack_module_cache__ = {};

    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var a = __webpack_module_cache__[e] = {
            exports: {}
        };
        return __webpack_modules__[e](a, a.exports, __webpack_require__), a.exports
    }
    __webpack_require__.d = (e, t) => {
        for (var a in t) __webpack_require__.o(t, a) && !__webpack_require__.o(e, a) && Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a]
        })
    }, __webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
    var __webpack_exports__ = {};
    (() => {
        var e = __webpack_require__(586);
        let t = class {
            constructor(e) {
                "string" == typeof e ? (this.$el = document.querySelector(e), this.$els = document.querySelectorAll(e)) : (this.$el = e, a(e) && (this.$el = e[0]), this.$els = [], a(e) ? e.forEach((e => {
                    this.$els.push(e)
                })) : this.$els.push(this.$el))
            }
            hide() {
                this.$els.forEach((function(e) {
                    e.style.display = "none"
                }))
            }
            clone() {
                const e = this.$el.cloneNode(!0);
                return this.$el.parentNode.appendChild(e), e
            }
            show() {
                this.$els.forEach((function(e) {
                    e.style.display = ""
                }))
            }
            trigger(e) {
                this.$els.forEach((function(t) {
                    const a = new Event(e);
                    t.dispatchEvent(a)
                }))
            }
            addClass(e) {
                return this.$els.forEach((function(t) {
                    t.classList.add(e)
                })), this
            }
            removeClass(e) {
                return this.$els.forEach((function(t) {
                    t.classList.remove(e)
                })), this
            }
            prepend(e) {
                if ("string" == typeof e) {
                    const t = document.createElement("div");
                    this.$els.forEach((function(a) {
                        try {
                            a.appendChild(t), a.insertBefore(t, a.firstChild), t.outerHTML = e
                        } catch (e) {}
                    }))
                }
            }
            get(e) {
                if (0 === e) return this.$el
            }
            each(e) {
                this.$els.forEach((t => {
                    e(n(t))
                }))
            }
            text() {
                return 0 === arguments.length ? this.$el.textContent : (this.$el.textContent = arguments[0], this)
            }
            val() {
                return 0 === arguments.length ? this.$el.value : (this.$el.value = arguments[0], this)
            }
            find(e) {
                return new t(this.$el.querySelectorAll(e))
            }
            append(e) {
                if ("string" == typeof e) {
                    const t = document.createElement("div");
                    t.innerHTML = e, this.$els.forEach((function(e) {
                        try {
                            e.appendChild(t)
                        } catch (e) {}
                    }))
                }
            }
            on(e, t, a) {
                return this.$el.addEventListener(e, (function(e) {
                    for (var n = e.target; n && n !== this;) n.matches(t) && a.call(n, e), n = n.parentNode
                })), this
            }
            hasClass(e) {
                return this.$el.classList.contains(e)
            }
            html() {
                const e = arguments;
                return 0 == e.length ? this.$el.innerHTML : 1 == e.length ? (this.$el.innerHTML = e[0], this) : void 0
            }
            getLast() {
                return this.$els.length ? n(this.$els[this.$els.length - 1]) : null
            }
            attr() {
                const e = arguments;
                return 1 == e.length ? this.$el.getAttribute(e[0]) : (2 == e.length && this.$els.forEach((function(t) {
                    t.setAttribute(e[0], e[1])
                })), this)
            }
            remove() {
                this.$el.remove()
            }
            parent() {
                return n(this.$el.parentNode)
            }
            getEl() {
                return this.$el
            }
            children() {
                return n(this.$el.childNodes)
            }
            serialize() {
                var e, t = this.$el,
                    a = "";
                if ("object" == typeof t && "FORM" == t.nodeName)
                    for (var n = 0; n <= t.elements.length - 1; n++)
                        if ((e = t.elements[n]).name && "file" != e.type && "reset" != e.type)
                            if ("select-multiple" == e.type)
                                for (var s = 0; s <= t.elements[n].options.length - 1; s++) e.options[s].selected && (a += "&" + e.name + "=" + encodeURIComponent(e.options[s].value).replace(/%20/g, "+"));
                            else "submit" != e.type && "button" != e.type && ("checkbox" != e.type && "radio" != e.type || e.checked) && (a += "&" + e.name + "=" + encodeURIComponent(e.value).replace(/%20/g, "+"));
                return a.substr(1)
            }
        };

        function a(e) {
            var t = Object.prototype.toString.call(e);
            return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(t) && "number" == typeof e.length && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
        }
        const n = e => new t(e);
        window.es_document_ready = function(e) {
            new Promise(((e, t) => {
                "interactive" !== document.readyState && "complete" !== document.readyState || e("interactive"), document.addEventListener("DOMContentLoaded", (() => {
                    e("DOMContentLoaded")
                }), !1), setTimeout((() => {
                    e("timeout")
                }), 5e3)
            })).then((t => {
                e(t)
            })).catch((t => {
                e(t)
            }))
        }, window.es_ajax = function(e) {
            var t = {
                type: "GET",
                url: "/",
                data: {},
                success: null
            };
            e && (t = Object.assign(t, e));
            let a = new XMLHttpRequest;
            a.open(t.type, t.url);
            var n = new FormData;
            for (var s in t.data) n.append(s, t.data[s]);
            a.send(n), a.addEventListener("load", (function(e) {
                200 != a.status || t.success && t.success(e, this)
            }))
        }, window.get_query_arg = function(e, t) {
            if (e.indexOf(t + "=") > -1) {
                var a = new RegExp("[?&]" + t + "(.+?)(?=&|$)").exec(e);
                if (null != a) return a[1] ? a[1].replace(/=/g, "") : ""
            }
        }, window.add_query_arg = function(e, t, a) {
            var n = e,
                s = (t = encodeURIComponent(t)) + "=" + (a = encodeURIComponent(a)),
                r = new RegExp("(&|\\?)" + t + "=[^&]*"),
                i = "";
            if ((n = n.replace(r, "$1" + s)).indexOf(t + "=") > -1 || (i = n.indexOf("?") > -1 ? "&" + s : "?" + s, n += i), "NaN" == a) {
                var o = new RegExp("[?|&]" + t + "=" + a);
                n = n.replace(o, "")
            }
            return n
        };
        const s = n;
        var r = __webpack_require__(567);
        class i {
            constructor(e) {
                this.initOptions = {}, this.dataSource = "", this.$waveGenerator_ = e, this.$waveGenerator = s(e), this.$wavedataField = null, this.$status = null, this.init()
            }
            init() {
                var t, a = Object.assign({
                    source: "",
                    selectorWaveData: ""
                }, {});
                t = e.convertPluginOptionsToFinalOptions(this.$waveGenerator_, a, null, "data-options", s);
                var n = this;
                n.initOptions = t, n.$status = n.$waveGenerator.find(".dzsap-wave-generator--status"), n.initOptions.source && (n.dataSource = n.initOptions.source), n.initOptions.selectorWaveData && (n.$wavedataField = s(n.initOptions.selectorWaveData)), n.$status.html("generating waveforms"), n.dataSource && o(n.$waveGenerator.find(".dzsap-wave-generator--wave").get(0), n.dataSource).then((e => {
                    n.$status.html("");
                    try {
                        e.pcm_data && n.$wavedataField && (n.$wavedataField.val(e.pcm_data), "on" === dzsap_settings.dzsap_wave_generate_auto && "on" === function(e, t) {
                            if (e.indexOf(t + "=") > -1) {
                                var a = new RegExp("[?&]" + t + "=.+").exec(e);
                                if (null != a) {
                                    var n = a[0];
                                    if (n.indexOf("&") > -1) {
                                        var s = n.split("&");
                                        n = s[1]
                                    }
                                    return n.split("=")[1]
                                }
                            }
                        }(window.location.href, "dzsap_wave_generate_auto") && window.dzsap_admin_waveforms_submitPcmData(document.querySelector(".track-waveform-meta")))
                    } catch (e) {
                        console.log(e)
                    }
                }))
            }
        }
        window.es_document_ready((() => {
            s(".dzsap-wave-generator.auto-init").each((e => {
                new i(e.get(0))
            }))
        })), window.dzsap_generating_pcm = !1;
        const o = async function(t, a, n) {
            var i = Object.assign({
                called_from: "default",
                preferBackendPeaks: !0,
                wavesurfer_pcm_length: 200
            }, n);
            return new Promise(((n, o) => {
                (async function() {
                    function n(o, d) {
                        if (window.dzsap_generating_pcm) return setTimeout((function() {
                            n(o, d)
                        }), 1e3), !1;
                        window.dzsap_generating_pcm = !0;
                        var l = "wavesurfer_" + Math.ceil(1e4 * Math.random());
                        t || (t = document.body), s(t).append(`<div id="${l}"></div>`);
                        var c = document.createElement("canvas").getContext("2d").createLinearGradient(0, 64, 0, 200);
                        c.addColorStop(.5, "rgb(107,95,95)"), c.addColorStop(.5, "rgb(119,115,115)");
                        var _ = WaveSurfer.create({
                            container: "#" + l,
                            normalize: !0,
                            pixelRatio: 1,
                            waveColor: '#000',
                            progressColor: "#000",
                            cursorColor: "#fff",
                            barWidth: 2
                        });
                        _.on("loading", (function(e) {
                            t.parentNode.querySelector(".dzsap-wave-generator--status").innerHTML = e + "%"
                        }));
                        try {
                            _.load(a)
                        } catch (e) {
                            console.log("[wavesurfer] WAVE SURFER NO LOAD")
                        }
                        _.on("ready", (function() {
                            console.log("[dzsap] [wavesurfer] generating wave data for ", a);
                            var t = [],
                                n = "";
                            if (_ && _.exportPCM) {
                                !0 !== i.preferBackendPeaks && (t = _.exportPCM(i.wavesurfer_pcm_length, 100, !0));
                                let e = !1;
                                try {
                                    t = JSON.parse(n);
                                    for (let a in t)
                                        if (null !== t[a] && 0 !== t[a] && "0" !== t[a]) {
                                            e = !0;
                                            break
                                        }
                                } catch (t) {
                                    e = !1
                                }
                                e || (t = _.backend.getPeaks(i.wavesurfer_pcm_length, 0, i.wavesurfer_pcm_length));
                                for (let e in t) null !== t[e] && 0 !== t[e] && "0" !== t[e] && (t[e] = Math.abs(Number(Number(t[e]).toFixed(2))))
                            } else t = e.generateFakeArrayForPcm();
                            n = JSON.stringify(t), o({
                                resolve_type: "success",
                                pcm_data: n
                            })
                        })), _.on("error", (function(e, t) {
                            d({
                                error_type: "wavesurfer_error",
                                error_message: e
                            })
                        })), setTimeout((() => {
                            d({
                                error_type: "wavesurfer_timeout",
                                error_message: "timeout"
                            })
                        }), r.OF.WAVESURFER_MAX_TIMEOUT)
                    }
                    return new Promise(((e, t) => {
                        n(e, t)
                    }))
                })().then((e => {
                    console.log("%c [dzsap] [wave] success while generating pcm - ", r.OF.DEBUG_STYLE_PLAY_FUNCTIONS, e), n(e)
                })).catch((e => {
                    for (var t = [], a = 0; a < 200; a++) t[a] = Math.abs(Number(Math.random()).toFixed(2));
                    t = JSON.stringify(t), console.log("%c [dzsap] [wave] error while generating pcm - ", r.OF.DEBUG_STYLE_PLAY_FUNCTIONS, e, e.error_message), n(t)
                }))
            }))
        }
    })()
})();
//# sourceMappingURL=dzsap-wave-generator.js.map