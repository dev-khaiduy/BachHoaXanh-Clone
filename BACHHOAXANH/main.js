/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
function validateEmail(n) { return /^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]|[.]){2,63})+$/.test(n) }

function validateNameAddress(n) { return /^([^\\x00-\\x7F]|[_a-zA-Z0-9]|[\s])([_a-zA-Z0-9]|[\s]|[^\\x00-\\x7F]|[,.:;%+"'!-=@|?*\\\/\)\(])+$/.test(n) }

function validateName(n) { return /^([^\\x00-\\x7F]|[_a-zA-Z0-9]|[\s])([_a-zA-Z0-9]|[\s]|[^\\x00-\\x7F])+$/.test(n) }

function validatePhone(n) { return /^((01(\d){9})|(0[35789](\d){8}))$/.test(n) }

function isEmptyOrSpaces(n) { return n === null || n.match(/^ *$/) !== null }

function validateDate(n) { return /^(?=\d)(?:(?:31(?!.(?:0?[2469]|11))|(?:30|29)(?!.0?2)|29(?=.0?2.(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(?:\x20|$))|(?:2[0-8]|1\d|0?[1-9]))([-.\/])(?:1[012]|0?[1-9])\1(?:1[6-9]|[2-9]\d)?\d\d(?:(?=\x20\d)\x20|$))?(((0?[1-9]|1[012])(:[0-5]\d){0,2}(\x20[AP]M))|([01]\d|2[0-3])(:[0-5]\d){1,2})?$/.test(n) }

function inputIntTypeOnly(n) { n.on("keydown", function(n) { var r = n || window.event,
            t = r.keyCode || r.which,
            i = [8, 9, 46].concat([48, 49, 50, 51, 52, 53, 54, 55, 56, 57], [96, 97, 98, 99, 100, 101, 102, 103, 104, 105], [17, 67, 86]),
            u; if (u = i.indexOf() !== "undefined" ? i.indexOf(t) : $.inArray(t, i), u == -1) return !1;
        (t == 67 || t == 86) && n.stopPropagation() }).on("paste", function(n) { var t = $(this),
            r = t.val(),
            i = n.originalEvent.clipboardData.getData("Text"); return i.replace(/\D+/g, "") == "" ? (t.val(r), !1) : (t.val(i.replace(/\D+/g, "")), !1) }) }

function fixPassiveEvent() { var i = function() { var t = !1,
                n; try { n = Object.defineProperty({}, "passive", { get: function() { t = !0 } });
                window.addEventListener("test", null, n);
                window.removeEventListener("test", null, n) } catch (r) {} return t },
        n = { passive: !0, capture: !1 },
        r = ["scroll"],
        u = function(t, i) { return t !== undefined ? t : r.indexOf(i) === -1 ? !1 : n.passive },
        f = options = function(n) {
            function t() { return n.apply(this, arguments) } return t.toString = function() { return n.toString() }, t }(function() { var n = Object.getOwnPropertyDescriptor(options, "passive"); return n && n.writable !== !0 && n.set === undefined ? Object.assign({}, options) : options }),
        e = function(t) { EventTarget.prototype.addEventListener = function(i, r, e) { var o = (typeof e == "undefined" ? "undefined" : _typeof(e)) === "object" && e !== null,
                    s = o ? e.capture : e;
                e = o ? f(e) : {};
                e.passive = u(e.passive, i);
                e.capture = s === undefined ? n.capture : s;
                t.call(this, i, r, e) };
            EventTarget.prototype.addEventListener._original = t },
        o = i(),
        t;
    o && (t = EventTarget.prototype.addEventListener, e(t)) }

function trackingSearch(n) { var t = { keyword: encodeURI(n) };
    doTracking("SEARCH_KEYWORD_ONSITE", t) }

function trackingAddToCart(n) { var t = { productid: n };
    doTracking("ORDER_ADD_TO_CART_PRODUCTS", t) }

function trackingRemoveFromCart(n) { var t = { productid: n };
    doTracking("ORDER_DELETED_ADD_TO_CART_PRODUCT", t) }

function trackingCancelOrder(n) { var t = { orderid: n };
    doTracking("ORDER_CANCEL_ORDER", t) }

function trackingProductView(n, t) { var i = { productid: n, productname: t };
    doTracking("VIEWED_PRODUCTS", i) }

function trackingProductViewTime(n, t, i) { var r = { productid: n, productname: t, time: i };
    doTracking("VIEWED_PRODUCTS", r) }

function trackingOrderSuccess() { return !1 }

function doTracking(n, t) { var i = Cookies.get("chat.username"),
        r, u;
    i != undefined && i != "" && (r = "https://rtm.thegioididong.com/memtracking?cmd=" + n + "&username=" + i + "&data=" + encodeURI(JSON.stringify(t)) + "&type=5&siteid=11&createddate=" + getCurrentDate(), u = "<img src='" + r + "' style='height:0px;width:0px;'>", $("body").append($(u))) }

function getCurrentDate() { var n = new Date; return n.getFullYear() + "-" + ("0" + n.getMonth() + 1).slice(-2) + "-" + ("0" + n.getDate()).slice(-2) + "T" + n.getHours() + ":" + n.getMinutes() + ":00" }

function reorder(n) { return loading ? !1 : ($.ajax({ url: "/gio-hang/Order/CancelPayOrder", type: "GET", data: { cancelSO: n }, beforeSend: function() { loading = !0 }, success: function(n) { loading = !1;
            n.Code === 302 ? (redirectUrl = n.Msg, alertify.alert("Đơn hàng của bạn đã được thanh toán thành công nên không thể hủy").set({ transition: "fade", onok: function() { window.location = redirectUrl }, closableByDimmer: !0 })) : n.Code === 200 ? window.location = "/gio-hang" : alert("Có lỗi xảy ra vui lòng thử lại sau") }, error: function() { loading = !1 } }), !1) }

function initFillButtonBuy() { var n = prefixCartUrl + "Order/FillButtonBuy";
    $.ajax({ url: n, type: "GET", data: {}, beforeSend: function() {}, success: function(n) { if (!$("body").hasClass("coronapage") && !$("body").hasClass("supplierpage") && n.ProvinceId !== undefined && n.DistrictId !== undefined && n.WardId !== undefined && n.StoreId !== undefined) { $("header").data("isexitscookies", !0); var t = $("header").data("provid"),
                    i = $("header").data("district"),
                    r = $("header").data("ward"),
                    u = $("header").data("store");
                (n.ProvinceId != t || n.DistrictId != i || n.WardId != r || n.StoreId != u) && locationHeader._setCookiesLocation(n.ProvinceId, n.DistrictId, n.WardId, n.StoreId, n.IsOneDis > 0 ? !0 : !1) }
            n.ProInCart !== "null" && $.each(n.ProInCart, function(n, t) { var i = $(".product:not(.productpreorder)[data-product=" + n + "]"),
                    u, f, r;
                typeof i != "undefined" && i.length > 0 && (t > 0 ? (i.addClass("selected"), i.find(".updown").removeClass("hide")) : i.removeClass("selected"), i.find(".updown").find(".number").val(t), i.find(".buy").hasClass("nobuy") && i.removeClass("selected"));
                i = $(".feature[data-product=" + n + "]");
                typeof i != "undefined" && i.length > 0 && (t > 0 ? (i.addClass("selected"), i.find(".updown").removeClass("hide")) : i.removeClass("selected"), i.find(".updown").find(".number").val(t), i.find(".buy").hasClass("nobuy") && i.removeClass("selected"));
                u = $(".infosell:not(.infosell-preorder):not(.infosell-expired)[data-product=" + n + "]");
                typeof u != "undefined" && u.length > 0 && (f = u.find(".choosebuy"), typeof f != "undefined" && f.length > 0 && (t > 0 ? (f.addClass("hide"), u.find(".updown").removeClass("hide")) : (f.addClass("hide"), u.find(".updown").removeClass("hide")), $("#hdfCartQuantity").val(t), u.find(".updown").find(".number").val(t), initboxPromoution(t)));
                r = $(".boxCombo-box [data-product=" + n + "]");
                typeof r != "undefined" && r.length > 0 && (t > 0 ? (r.find(".choosebuy").addClass("hide"), r.find(".updown").removeClass("hide")) : (r.find(".choosebuy").addClass("hide"), r.find(".updown").removeClass("hide")), r.find(".updown").find(".number").val(t)) });
            n.ProInCart_Exp !== "null" && $.each(n.ProInCart_Exp, function(n, t) { var r = $(".expired[data-product=" + n + "]"),
                    i, f, u;
                typeof r != "undefined" && r.length > 0 && (t > 0 ? (r.addClass("selected"), r.find(".updown").removeClass("hide")) : r.removeClass("selected"), r.find(".updown").find(".number").val(t), r.find(".buy").hasClass("nobuy") && r.removeClass("selected"));
                i = $(".infosell[data-product=" + n + "]");
                typeof i != "undefined" && i.length > 0 && (f = $(i).find(".nearly-expired-buy"), typeof f != "undefined" && f.length > 0 ? (t > 0 ? (i.find(".expired-buy").addClass("hide"), i.find(".updown").removeClass("hide")) : (i.find(".expired-buy").addClass("hide"), i.find(".updown").removeClass("hide")), i.find(".updown").find(".number").val(t), initboxPromoution(t)) : i.hasClass("infosell-expired") && (u = $(i).find(".choosebuy"), typeof u != "undefined" && u.length > 0 && (t > 0 ? (u.addClass("hide"), $(i).find(".updown").removeClass("hide")) : (u.addClass("hide"), $(i).find(".updown").removeClass("hide")), $("#hdfCartQuantity").val(t), $(i).find(".updown").find(".number").val(t), initboxPromoution(t)))) });
            n.ProInCart_Pre !== "null" && $.each(n.ProInCart_Pre, function(n, t) { var i = $(".product.productpreorder[data-product=" + n + "]"),
                    r, u;
                typeof i != "undefined" && i.length > 0 && (t > 0 ? (i.addClass("selected"), i.find(".updown").removeClass("hide")) : i.removeClass("selected"), i.find(".updown").find(".number").val(t), i.find(".buy").hasClass("nobuy") && i.removeClass("selected"));
                r = $(".infosell.infosell-preorder[data-product=" + n + "]");
                typeof r != "undefined" && r.length > 0 && (u = r.find(".choosebuy"), typeof u != "undefined" && u.length > 0 && (t > 0 ? (u.addClass("hide"), r.find(".updown").removeClass("hide")) : (u.addClass("hide"), r.find(".updown").removeClass("hide")), $("#hdfCartQuantity").val(t), r.find(".updown").find(".number").val(t), initboxPromoution(t))) });
            $(".hiscart .temcart .card").text("GIỎ HÀNG");
            n.TotalStr != "0đ" ? ($(".hiscart .temcart").prop("href", "/gio-hang"), $(".hiscart .temcart").addClass("no"), $(".hiscart .temcart i.bhx-cart").css("margin-bottom", "0"), $(".hiscart .temcart .card").text("THANH TOÁN"), $(".hiscart .temcart span").html(n.Item).removeClass("hidden"), $(".hiscart .temcart b.sumorder").html(n.TotalStr).removeClass("hidden"), isHaveItemCart = !0, $(".stickycart .temcart").prop("href", "/gio-hang"), $(".stickycart .temcart").addClass("no"), $(".stickycart .temcart span").html(n.Item).removeClass("hidden"), window.matchMedia("(min-width: 1280px)").matches && isHaveItemCart && ($(window).scrollTop() > 50 ? $(".stickycart").css("display", "block") : $(".stickycart").css("display", "none"))) : ($(".hiscart .temcart").prop("href", "#"), $(".hiscart .temcart").removeClass("no"), $(".hiscart .temcart i.bhx-cart").css("margin-bottom", "6px"), $(".hiscart .temcart .card").text("GIỎ HÀNG"), $(".hiscart .temcart span").html(n.Item).addClass("hidden"), $(".hiscart .temcart b.sumorder").html(n.TotalStr).addClass("hidden"), isHaveItemCart = !1, $(".stickycart .temcart").prop("href", "#"), $(".stickycart .temcart").removeClass("no"), $(".stickycart .temcart span").html(n.Item).addClass("hidden"), $(".stickycart").css("display", "none"), n.Item > 0 && ($(".hiscart .temcart span").css("top", "12px"), $(".hiscart .temcart span").html(n.Item).removeClass("hidden")));
            n.CrmOrderIdEdit && n.CrmOrderIdEdit != "false" && ($(".hiscart .temcart .card").text("Sửa đơn hàng"), $(".hiscart .temcart b.sumorder").html("#" + n.CrmOrderIdEdit).removeClass("hidden"));
            n.isOriginateStoreID && (maxQuantity = 999) }, error: function() { initboxPromoution(0) } }) }

function initBuy() { $(document).on("click", ".nearly-expired a", function(n) { n.preventDefault();
        $(".p-npromotion-tip").remove(); var t = $(this).data("id"),
            i = $(this).data("store"),
            r = $(this).data("pageexpired");
        r ? addToCart(t, 1, "", !0, $(this).closest(".expired"), !0) : buyNearlyExpired(t, i) });
    $(document).on("click", ".nearly-expired-buy a", function(n) { n.preventDefault();
        $(".p-npromotion-tip").remove(); var t = $(this).data("id"),
            i = $(this).data("store"),
            r = $(this).data("pageexpired");
        r ? addToCart(t, 1, "", !0, $(this).closest(".expired"), !0) : buyNearlyExpired(t, i) });
    $(document).on("click", ".product .buy-preorder", function(n) { var t, i, r;
        (n.preventDefault(), lstProductId = [], t = $(this), t.hasClass("nobuy") || loading) || (i = t.parents(".product"), r = i.data("product"), addToCart(r, 1, "", !0, t, !0)) });
    $(document).on("click", ".product .buy", function(n) { var f, t, u; if (n.preventDefault(), $(".p-npromotion-tip").remove(), f = $("header").data("store"), f == 0) { var t = $(this),
                i = t.parents(".product"),
                r = i.data("product");
            order.popupRemindLocation(r) } else { if (lstProductId = [], t = $(this), t.hasClass("nobuy") || loading) return; var i = t.parents(".product"),
                r = i.data("product"),
                o = i.data("store"),
                e = !t.hasClass("up") && !t.hasClass("down");
            e ? (popupIsShow = !1, showPopupBeforeAddToCart(r, $(this))) : i.hasClass("productpreorder") ? (u = i.data("prestore"), typeof u == "undefined" && (u = i.data("store")), typeof t.data("qty") != "undefined" ? addToCart(r, parseInt(t.data("qty")), "", !0, t, !0, u) : addToCart(r, 1, "", !0, t, !0, u)) : typeof t.data("qty") != "undefined" ? addToCart(r, parseInt(t.data("qty")), "", !0, t, !0) : addToCart(r, 1, "", !0, t, !0) } });
    $(document).on("click", ".product .updown .up", function(n) { var e, i;
        n.preventDefault();
        $(".p-npromotion-tip").remove(); var t = $(this).closest(".product"),
            u = t.data("product"),
            r = t.data("maxqtyonbill"),
            f = parseInt(t.find(".number").val()) + 1;
        r > 0 && f > r && f === r + 1 ? (e = t.data("priceonbill"), p_npromotion_tip(u, r, e, !1, 0)) : (i = 0, t.hasClass("productpreorder") && (i = t.data("prestore"), (typeof i == "undefined" || i == 0) && (i = t.data("store"))), typeof $(this).parent().data("qty") != "undefined" ? addToCart(u, parseInt($(this).parent().data("qty")), "", !0, $(this).parent(), !1, i) : addToCart(u, 1, "", !0, $(this).parent(), !1, i)) });
    $(document).on("click", ".product .updown .down", function(n) { n.preventDefault();
        $(".p-npromotion-tip").remove(); var i = $(this).closest(".product"),
            r = i.data("product"),
            t = 0;
        i.hasClass("productpreorder") && (t = i.data("prestore"), (typeof t == "undefined" || t == 0) && (t = i.data("store")));
        typeof $(this).parent().data("qty") != "undefined" ? addToCart(r, parseInt($(this).parent().data("qty")), "", !1, $(this).parent(), !1, t) : addToCart(r, 1, "", !1, $(this).parent(), !1, t) });
    $(document).on("blur", ".product .updown .number", function(n) { var f, o, e, t;
        n.preventDefault();
        $(".p-npromotion-tip").remove(); var i = $(this).closest(".product"),
            u = i.data("product"),
            r = parseInt($(this).val()); if (r <= 0) { initFillButtonBuy(); return }
        f = i.data("maxqtyonbill");
        f > 0 && r > f && r === f + 1 ? (o = i.data("priceonbill"), p_npromotion_tip(u, f, o, !1, 0)) : (e = -999, t = 0, i.hasClass("productpreorder") && (t = i.data("prestore"), (typeof t == "undefined" || t == 0) && (t = i.data("store"))), typeof $(this).parent().data("qty") != "undefined" ? isNaN(r) ? addToCart(u, e, "", !1, $(this).parent(), !1, t, !0) : addToCart(u, parseInt($(this).parent().data("qty")), "", !1, $(this).parent(), !1, t, !0) : isNaN(r) ? addToCart(u, e, "", !0, $(this).parent(), !1, t, !0) : addToCart(u, r, "", !0, $(this).parent(), !1, t, !0)) });
    $(document).on("keyup", ".product .updown .number", function(n) { n.keyCode == 13 && $(this).blur() });
    $(document).on("click", ".feature .buy", function(n) { var t; if (n.preventDefault(), $(".p-npromotion-tip").remove(), lstProductId = [], t = $(this), !t.hasClass("nobuy") && !loading) { var r = t.parents(".feature"),
                i = r.data("product"),
                u = !t.hasClass("up") && !t.hasClass("down");
            u ? (popupIsShow = !1, showPopupBeforeAddToCart(i, $(this))) : typeof t.data("qty") != "undefined" ? addToCart(i, parseInt(t.data("qty")), "", !0, t, !0) : addToCart(i, 1, "", !0, t, !0) } });
    $(document).on("click", ".feature .updown .up", function(n) { var u;
        n.preventDefault();
        $(".p-npromotion-tip").remove(); var i = $(this).closest(".feature").data("product"),
            t = $(this).closest(".feature").data("maxqtyonbill"),
            r = parseInt($(this).closest(".feature").find(".number").val()) + 1;
        t > 0 && r > t && r === t + 1 ? (u = $(this).closest(".feature").data("priceonbill"), p_npromotion_tip(i, t, u, !1, 0)) : typeof $(this).parent().data("qty") != "undefined" ? addToCart(i, parseInt($(this).parent().data("qty")), "", !0, $(this).parent(), !1) : addToCart(i, 1, "", !0, $(this).parent(), !1) });
    $(document).on("click", ".feature .updown .down", function(n) { n.preventDefault();
        $(".p-npromotion-tip").remove(); var t = $(this).closest(".product").data("product");
        typeof $(this).parent().data("qty") != "undefined" ? addToCart(t, parseInt($(this).parent().data("qty")), "", !1, $(this).parent(), !1) : addToCart(t, 1, "", !1, $(this).parent(), !1) });
    $(document).on("blur", ".feature .updown .number", function(n) { var r, t, i, u; if (n.preventDefault(), $(".p-npromotion-tip").remove(), r = $(this).closest(".feature").data("product"), $(this).val() !== "") { if (t = parseInt($(this).val()), t <= 0) { initFillButtonBuy(); return }
            i = $(this).closest(".product").data("maxqtyonbill");
            i > 0 && t > i && t === i + 1 ? (u = $(this).closest(".product").data("priceonbill"), p_npromotion_tip(r, i, u, !1, 0)) : typeof $(this).parent().data("qty") != "undefined" ? addToCart(r, parseInt($(this).parent().data("qty")), "", !1, $(this).parent(), !1, 0, !0) : addToCart(r, t, "", !1, $(this).parent(), !1, 0, !0) } });
    $(document).on("click", ".expired .buy", function(n) { var t; if (n.preventDefault(), $(".p-npromotion-tip").remove(), lstProductId = [], t = $(this), !t.hasClass("nobuy") && !loading) { var i = t.parents(".expired"),
                r = i.data("product"),
                u = i.data("store"),
                f = i.hasClass("prefreshprod");
            f ? showPopupBeforeAddToCart(r, $(this), !1) : typeof t.data("qty") != "undefined" ? addToCart(r, parseInt(t.data("qty")), "", !0, t, !0, u) : addToCart(r, 1, "", !0, t, !0, u) } });
    $(document).on("click", ".expired .updown .up", function(n) { var f;
        n.preventDefault();
        $(".p-npromotion-tip").remove(); var i = $(this).closest(".expired").data("product"),
            r = $(this).closest(".expired").data("store"),
            t = $(this).closest(".expired").data("maxqtyonbill"),
            u = parseInt($(this).closest(".expired").find(".number").val()) + 1;
        t > 0 && u > t && u === t + 1 ? (f = $(this).closest(".expired").data("priceonbill"), p_npromotion_tip(i, t, f, !1, r)) : typeof $(this).parent().data("qty") != "undefined" ? addToCart(i, parseInt($(this).parent().data("qty")), "", !0, $(this).parent(), !1, r) : addToCart(i, 1, "", !0, $(this).parent(), !1, r) });
    $(document).on("click", ".expired .updown .down", function(n) { n.preventDefault();
        $(".p-npromotion-tip").remove(); var t = $(this).closest(".expired").data("product"),
            i = $(this).closest(".expired").data("store");
        typeof $(this).parent().data("qty") != "undefined" ? addToCart(t, parseInt($(this).parent().data("qty")), "", !1, $(this).parent(), !1, i) : addToCart(t, 1, "", !1, $(this).parent(), !1, i) });
    $(document).on("blur", ".expired .updown .number", function(n) { var u, t, i, r, f; if (n.preventDefault(), $(".p-npromotion-tip").remove(), u = $(this).closest(".expired").data("product"), t = $(this).closest(".expired").data("store"), t = typeof t != "undefined" ? parseInt(t) : 0, $(this).val() !== "") { if (i = parseInt($(this).val()), i <= 0) { initFillButtonBuy(); return }
            r = $(this).closest(".product").data("maxqtyonbill");
            r > 0 && i > r && i === r + 1 ? (f = $(this).closest(".product").data("priceonbill"), p_npromotion_tip(u, r, f, !1, 0)) : typeof $(this).parent().data("qty") != "undefined" ? addToCart(u, parseInt($(this).parent().data("qty")), "", !1, $(this).parent(), !1, t, !0) : addToCart(u, i, "", !1, $(this).parent(), !1, t, !0) } });
    $(document).on("keypress keyup blur", ".product .updown .number,.feature .updown .number,.expired .updown .number", function(n) { $(this).val($(this).val().replace(/[^\d].+/, ""));
        (n.which < 48 || n.which > 57) && n.preventDefault() }) }

function buySearch(n) { var t = $(n),
        i; if (!t.hasClass("nobuy") && !loading) { i = t.data("product");
        addToCart(i, 1, "", !0, t, !0); return } }

function buyNearlyExpired(n, t) { addToCart(n, 1, null, null, null, !0, t) }

function addToCart(n, t, i, r, u, f, e, o, s) { var h, c; return loading ? !1 : typeof n != "undefined" && n != "" ? (n = parseInt(n), t === undefined && (t = 1), i === undefined && (i = ""), r === undefined && (r = !0), e === undefined && (e = 0), o === undefined && (o = !1), typeof campaignBeforeAddToCart == "function" && (h = campaignBeforeAddToCart(n, r), !h)) ? !1 : (c = prefixCartUrl + "Order/Add", $.ajax({ url: c, type: "POST", data: { id: n, quantity: t, promoCode: i, increase: r, storeId: e, isQtyText: o, isInCartSite: !1 }, beforeSend: function() { f && ajLoading(!0, "Chọn mua.");
            loading = !0 }, success: function(h) { var c, a, d, l, g, v, y; if (loading = !1, ajLoading(!1), c = JSON.parse(h.Msg), h.Code === 502) order.popupRemindLocation(n);
            else if (h.Code === 400) { var p = JSON.parse(h.Msg),
                    w = "ĐỒNG Ý",
                    b = "ĐÓNG",
                    k = "";
                p.type == 2 && (w = "Xoá Gói và tiếp tục mua hàng", b = "Tiếp tục mua Gói", k = "popup-packed");
                p.type == 1 && (w = "Xoá giỏ hàng và mua Gói", b = "Không mua gói", k = "popup-packed");
                alertify.confirm().set({ labels: { ok: w, cancel: b }, transition: "fade", message: p.error, onok: function() { $(".product .buy").removeClass("hide");
                        $(".product .updown").addClass("hide");
                        $.ajax({ type: "POST", data: { id: n }, url: prefixCartUrl + "Order/ComfirmComboPack", success: function(h) { h.Code == 200 && (alertify.confirm().destroy(), addToCart(n, t, i, r, u, f, e, o, s)) } }) }, onclose: function() { return !1 }, closableByDimmer: !0 }).show(!0, k) } else if (h.Code === 300) a = c.error, a.indexOf("<span class='orange'>Xả kho giá sốc<\/span>") > -1 && window.location.href.indexOf("xa-kho-gia-soc") == -1 ? alertify.confirm().set({ closable: !1, message: a, labels: { ok: "Qua trang xả kho giá sốc", cancel: "Tiếp tục mua hàng" }, onok: function() { setTimeout(function() { window.location = "/khuyen-mai/xa-kho-gia-soc" }, 500) } }).show(!0, "popupCoolProduct") : alertify.alert().set({ closable: !1, message: a, label: "Xác nhận" }).show(!0, "popupCoolProduct");
            else if (h.Code === 200) { var nt = $("header").data("provid"),
                    tt = $("header").data("district"),
                    it = $("header").data("store"); if (c.provinceId !== nt || c.districtId !== tt || c.storeId !== it) return alertify.confirm().destroy(), alertify.alert().setting({ label: "ĐỒNG Ý", message: "Bạn đã thay đổi sang địa chỉ mới, hệ thống sẽ tải lại trang web!.", onok: function() { return location.reload(), !1 } }).show(), !1;
                alertify.confirm().destroy();
                initFillButtonBuy();
                f && typeof c.img != "undefined" && c.img !== "" && showPopupAddToCart(c.img, c.islogin, c.normalproductnumber);
                u !== undefined && (d = parseInt($(u).parent().data("product")), c.quantity > 0 ? n === d && ($(u).parent().find(".buy").addClass("hide"), $(u).parent().find(".updown").removeClass("hide"), $(u).parent().find(".choosebuy").addClass("hide"), $(u).parent().find(".expired-buy").addClass("hide")) : (l = $(".product[data-product=" + n + "]"), typeof l != "undefined" && (l.removeClass("selected"), l.find(".buy").removeClass("hide"), l.find(".updown").find(".number").val(0)), l = $(".feature[data-product=" + n + "]"), typeof l != "undefined" && (l.removeClass("selected"), l.find(".buy").removeClass("hide"), l.find(".updown").find(".number").val(0)), n === d && ($(u).parent().find(".buy").removeClass("hide"), $(u).parent().find(".updown").addClass("hide"), $(u).parent().find(".choosebuy").removeClass("hide"), $(u).parent().find(".expired-buy").removeClass("hide"), $(u).parent().removeClass("selected"))), $(u).parent().find(".updown").val(c.quantity), $("#hdfCartQuantity").val(c.quantity), c.quantity <= 0 && ($(u).parent().find(".updown").addClass("hide"), $(u).parent().find(".choosebuy").removeClass("hide")), c.quantity > 0 && $(u).parent().find(".updown").find(".number").val() == 0 && $(u).parent().find(".buy").removeClass("hide"), c.cartmessage !== undefined && c.cartmessage !== "" && displayMessage(c.cartmessage), initboxPromoution(c.quantity));
                showPopupPromExpired(c.textpromexpired);
                g = [{ name: c.name.toString(), id: c.id.toString(), price: c.price.toString(), brand: c.brand, category: c.gacate, variant: c.code, quantity: Math.abs(c.increased) }];
                c.increased > 0 ? (v = { event: "addToCart", ecommerce: { currencyCode: "VND", add: { products: g } } }, trackingAddToCart(c.id)) : (v = { event: "removeFromCart", ecommerce: { currencyCode: "VND", remove: { products: g } } }, trackingRemoveFromCart(c.id));
                document.gaImpressions != undefined && (y = document.gaImpressions.find(function(n) { return n.id === c.id.toString() }), y != undefined && y != null && (v.ecommerce.list = y.list));
                window.dataLayer.push(v) } else { if (h.Code == 409) return alertify.confirm().destroy(), alertify.alert().setting({ label: "ĐỒNG Ý", message: c.error, onok: function() { return location.reload(), !1 } }).show(), !1; if (c.error === "" || typeof c.error == "undefined") return !1; if (c.ErrorType != undefined && c.ErrorType == 7 && window.dataLayer.push({ category: "Ecommerce", event: "Popup_TamHetHang", action: "Popup_TamHetHang", label: n + "-" + c.productName }), c.ErrorType != undefined && c.ErrorType == 8 && window.dataLayer.push({ category: "Ecommerce", event: "Popup_HetTonSanPham", action: "Popup_HetTonSanPham", label: n + "-" + c.productName }), c.error.indexOf("đơn hàng (trong 7 ngày)") > -1) { if ($("#BeforeAddToCartModel").length > 0) return $("#BeforeAddToCartModel .erromessage").html(c.error), !1;
                    alertify.confirm().destroy();
                    alertify.alert().setting({ label: "ĐỒNG Ý", message: c.error, onok: function() { return initFillButtonBuy(), c.stock > 0 && setTimeout(function() { $(u).parent().find(".updown .number").val(c.stock).trigger("blur");
                                initFillButtonBuy() }, 2e3), this.close(), !1 } }).show() } else if (alertify.closeAll(), activeContactCRM && c.error.indexOf("chỉ cho phép mua tối đa 50") > -1) popupContactCRM(c.error, n);
                else if (activeContactCRM && c.productName !== "" && c.stock > 0 && !c.IsErrorStockPromotion) popupContactCRM(c.error, n, c.productName, 1, c.stock);
                else { if (s) { console.log("auto add fail"); return }
                    alertify.confirm().destroy();
                    alertify.alert().setting({ label: "ĐỒNG Ý", message: c.error, onok: function() { return initFillButtonBuy(), c.stock > 0 && setTimeout(function() { $(u).parent().find(".updown .number").val(c.stock).trigger("blur");
                                initFillButtonBuy() }, 2e3), this.close(), !1 } }).show() } } }, error: function() { ajLoading(!1);
            loading = !1;
            alertify.alert("Thêm sản phẩm không thành công! <br>Vui lòng thử lại sau.");
            $("#BeforeAddToCartModel").remove() } }), !1) : void 0 }

function showPopupBeforeAddToCart(n, t, i, r) { if (typeof n != "undefined" && n != "") { var u = "";
        t != undefined && (u = t.data("type"), (u == undefined || u == "") && (u = t.parents(".expired, .product").data("type")));
        $.ajax({ url: prefixCartUrl + "Order/PopupBeforeAddToCart", type: "POST", data: { id: n, isShowPopup: i, typeProdFresh: u }, cache: !1, beforeSend: function() {}, success: function(u) { var f, a, v; if (u.Code === 400) order.popupRemindLocation(n);
                else if (u.Code == 300) { alertify.confirm().destroy(); var o = JSON.parse(u.Msg),
                        s = "ĐỒNG Ý",
                        h = "ĐÓNG",
                        c = "";
                    o.outtype == 1 && (s = "Xoá Gói và tiếp tục mua hàng", h = "Tiếp tục mua Gói", c = "popup-packed");
                    o.outtype == 2 && (s = "Xoá giỏ hàng và mua Gói", h = "Không mua gói", c = "popup-packed");
                    alertify.confirm().set({ labels: { ok: s, cancel: h }, transition: "fade", message: o.msgcombo, onok: function() { return $(".product .buy").removeClass("hide"), $(".product .updown").addClass("hide"), confirmComboPack(n, t) }, onclose: function() { return !1 }, closableByDimmer: !0 }).show(!0, c);
                    popupIsShow = !0 } else if (u.Code !== 200 || r) f = 1, $("#BeforeAddToCartModel").length > 0 && (f = parseInt($("#BeforeAddToCartModel input[name=hdQuantityAddToCart]").val())), t != null && typeof t.data("qty") != "undefined" && (f = parseInt(t.data("qty"))), f <= maxQuantity ? (a = t != null ? t.parents(".expired") : "undefined", a != "undefined" ? (v = a.data("store"), addToCart(n, f, "", !0, t, !0, v, undefined, r)) : addToCart(n, f, "", !0, t, !0, undefined, undefined, r)) : f > maxQuantity ? $("#BeforeAddToCartModel").length > 0 ? $("#BeforeAddToCartModel .erromessage").html("Bạn không được mua vượt quá " + maxQuantity + " sản phẩm này.") : (alertify.alert("Bạn không được mua vượt quá " + maxQuantity + " sản phẩm này."), alertify.confirm().destroy()) : (alertify.alert("Có lỗi xảy ra vui lòng thử lại sau."), alertify.confirm().destroy()), popupIsShow = !1;
                else { var e = JSON.parse(u.Msg),
                        y = $("#BeforeAddToCartModel").hasClass("beforeaddtocartprefresh"),
                        l = removeExchange(e.html, i);
                    y && (l = e.html);
                    alertify.confirm().isOpen() ? (l !== "" && $("#BeforeAddToCartModel").html(l), initPopupEvent()) : (alertify.confirm().destroy(), e.isPreFreshPopup ? alertify.confirm().set({ message: e.html, transition: "fade", onok: function() { return confirmBeforeAddToCartModel(n, t) }, onclose: function() { return $("#BeforeAddToCartModel").remove(), !1 }, closableByDimmer: !0 }).show(!0, "alertprefresh") : alertify.confirm(e.html).set({ labels: { ok: "CHỌN MUA", cancel: "ĐÓNG" }, transition: "fade", onok: function() { return confirmBeforeAddToCartModel(n, t) }, onclose: function() { return $("#BeforeAddToCartModel").remove(), !1 }, closableByDimmer: !0 }), initPopupEvent(), popupIsShow = !0) } }, error: function() { alertify.alert("Thêm sản phẩm không thành công! <br>Vui lòng thử lại sau.") } }) } }

function confirmComboPack(n, t) { $.ajax({ type: "POST", data: { id: n }, url: prefixCartUrl + "Order/ComfirmComboPack", success: function(i) { i.Code == 200 && (alertify.confirm().destroy(), addToCart(n, 1, "", !0, t, !0, 0, !0, !0)) } }) }

function resizePopup() { $(".ajs-dialog").addClass("dialogcenter").height($("#BeforeAddToCartModel").height() + 70) }

function initPopupEvent() { $(".kmchon .option").click(function() { var n = $(this).data("promo"),
            t = $(this).data("code");
        $(this).hasClass("disable") || ($("#promo_" + n + " .option").removeClass("chon"), $(this).addClass("chon"), $("#promocode_" + n).val(t)) });
    $(".qty span").unbind();
    $(".qty span").click(function() { var u = $("#BeforeAddToCartModel .chonloai a.chon").data("id"),
            i = $(this).parent().find("input"),
            n = parseInt(i.val()),
            f = $("#BeforeAddToCartModel .info h3").html(),
            e, t, r;
        $(this).hasClass("down") ? (n > 1 && (i.val(n - 1), showPromotionChoose(n - 1)), $("#BeforeAddToCartModel .erromessage").empty()) : (e = maxQuantity, t = "", $("#BeforeAddToCartModel .chonloai .chon").length > 0 && (t = $("#BeforeAddToCartModel .chonloai .chon").data("unit"), t == "thùng" && (t = "")), n < maxQuantity ? (i.val(n + 1), showPromotionChoose(n + 1), n == maxQuantity - 1 ? $("#BeforeAddToCartModel .erromessage").html("Bạn không được mua vượt quá " + maxQuantity + " sản phẩm này.") : $("#BeforeAddToCartModel .erromessage").empty()) : activeContactCRM ? ($("#BeforeAddToCartModel").parents(".alertify").addClass("ajs-hidden", "ajs-out"), r = maxQuantity + " " + t, popupContactCRM(r, u, f)) : $("#BeforeAddToCartModel .erromessage").html("Bạn không được mua vượt quá " + maxQuantity + " sản phẩm này.")) });
    $(".BeforeAddToCartModel .chonloai a").click(function() { if (!$(this).hasClass("chon")) { var n = $(this).data("id");
            showPopupBeforeAddToCart(n, $(this), !0);
            setTimeout(function() { showPromotionChoose(1) }, 500) } });
    $("#hdQuantityAddToCart").blur(function() { var n = $(this).val();
        initboxPromoution(n) });
    initboxPromoution($("#hdQuantityAddToCart").val());
    $("#BeforeAddToCartModel .preorderpopup-action .preorderpopup-submit").on("click", function() { $(".alertprefresh .ajs-footer .ajs-ok").trigger("click") });
    $("#BeforeAddToCartModel .preorderpopup-action .preorderpopup-close").on("click", function() { $(".alertprefresh .ajs-footer .ajs-cancel").trigger("click") }) }

function showPromotionChoose(n) { var i; if ($(".infokm.kmchon").length > 0) { for (i = 0; i < $(".infokm.kmchon").length; i++) { var t = $(".infokm.kmchon:eq(" + i + ")"),
                r = $(t).data("promoid"),
                u = $(t).data("select"),
                f = parseInt($(t).data("quantity"));
            u === "True" && (n < f ? ($(t).find(".option").removeClass("chon").addClass("disable"), $("#promocode_" + r).val("")) : $(t).find(".option").removeClass("disable")) }
        $(".erromessage").html("") } }

function getPromotionByQuantity() { var t = [],
        u, n; if ($(".infokm.kmchon").length > 0)
        for (u = parseInt($("#hdQuantityAddToCart").val()), n = 0; n < $(".infokm.kmchon").length; n++) { var i = $(".infokm.kmchon:eq(" + n + ")"),
                r = $(i).data("promoid"),
                f = $(i).data("select"),
                e = parseInt($(i).data("quantity"));
            u >= e && $("#promocode_" + r).val() !== "" && f === "True" && (t[t.length] = { PromoId: r, PromoCode: $("#promocode_" + r).val() }) }
    return JSON.stringify(t) }

function checkPromotionChoose() { for (var r, i = !1, u = parseInt($("#hdQuantityAddToCart").val()), n = 0; n < $(".infokm.kmchon").length; n++) { var t = $(".infokm.kmchon:eq(" + n + ")"),
            o = $(t).data("promoid"),
            f = $(t).data("select"),
            e = parseInt($(t).data("quantity")); if (u >= e && f === "True") { i = !0; break } } return r = getPromotionByQuantity(), i && r === "[]" }

function confirmBeforeAddToCartModel(n, t) { var h, c, s, f, u; if (checkPromotionChoose()) return $(".erromessage").html("Vui lòng chọn sản phẩm khuyến mãi"), !1; var e = $("#ProductIdAddToCart").val(),
        i = $("#BeforeAddToCartModel"),
        r = getPromotionByQuantity(),
        o = i.find(".atc-quantity input").val(),
        l = i.find(".chonloai a.chon").data("unit"),
        a = i.find(".info h3").html(),
        v = maxQuantity; return r === "" && i.find(".selectsize").length > 0 ? (h = i.find(".selectsize").data("package"), h ? $(".erromessage").html("Quý khách vui lòng chọn túi") : $(".erromessage").html("Quý khách vui lòng chọn màu và size sản phẩm"), $(".erromessage").addClass("show"), !1) : r === "" && i.find(".selectcolor").length > 0 ? ($(".erromessage").html("Quý khách vui lòng chọn màu sản phẩm"), $(".erromessage").addClass("show"), !1) : o <= 0 ? ($(".erromessage").html("Số lượng sản phẩm phải lớn hơn 0"), $(".erromessage").addClass("show"), !1) : (c = !1, $("#BeforeAddToCartModel .erromessage").html().indexOf("không được mua vượt quá") > -1 && (c = !0), $(".erromessage").removeClass("show"), $(".erromessage").html(""), s = t.parents(".expired"), s != "undefined" && s.length > 0 ? (u = s.data("store"), addToCart(e, o, r, !0, t, !0, u)) : (f = $("#BeforeAddToCartModel .chonloai .chon").data("type"), u = $("#BeforeAddToCartModel .chonloai .chon").data("store"), f != "" && f == "expired" ? buyNearlyExpired(e, u) : f != "" && f == "preorder" ? addToCart(e, o, r, !0, t, !0, u) : addToCart(e, o, r, !0, t, !0)), !1) }

function showPopupAddToCart(n, t, i) { var u, f, r, e;
    $(".popup-color").hide();
    $(".popup-overlay").show();
    $(".popup-addtocart").find("img").attr("src", n);
    $(".popup-addtocart").show();
    u = !1;
    f = !1;
    $("header").data("isuserhadorder") !== undefined && $("header").data("isuserhadorder") !== null && $("header").data("isuserhadorder") == "True" && (f = !0);
    i != 1 || t && (!t || f) || (u = !0);
    r = getUser();
    r !== undefined && r !== null && (e = $(".popup-addtocart a.gotocart").html(), $(".popup-addtocart a.gotocart").html(e.replace("Bạn", r.Gender == 0 ? "Chị" : r.Gender == 1 ? "Anh" : "Bạn")));
    u ? setTimeout("addToCartAnimation()", 1500) : setTimeout("addToCartAnimation()", 400);
    location.href.indexOf("/gio-hang") > 0 && setTimeout(function() { location.reload(); return }, 500) }

function addToCartAnimation() { var n = $(".popup-addtocart"),
        t;
    n.fadeOut(450);
    $(".popup-overlay").fadeOut(450);
    t = $(window).innerHeight() - n.position().top - $(".popup-addtocart .box-img").innerHeight();
    flyToElement(n.find("img"), t, $(".hiscart .bhx-cart")) }

function flyToElement(n, t, i) { var r = $('<div id="flyimg">');
    r.append(n.clone());
    r.css({ top: t });
    console.log(t);
    r.appendTo("body"); var u = i.offset(),
        f = i.width() / 2,
        e = $(window).scrollTop() < 100,
        o = e ? u.left + f : u.left;
    r.animate({ opacity: .4, width: 24, height: 24, left: o, top: 15 }, 500, function() { i.fadeOut("fast", function() { i.fadeIn("fast", function() { r.fadeOut("fast", function() { r.remove() }) }) }) }) }

function initboxPromoution(n) { $.each($("div.infokm.kmchon"), function(t, i) { var f = $(i).data("quantity"),
            r = $(i).find(".promodetail"),
            u;
        r !== undefined && (n >= f - 1 ? $(r).children().removeClass("disable") : ($(r).children().addClass("disable"), $(r).children().removeClass("chon"), u = $(i).data("promoid"), $("#promocode_" + u).val(""))) }) }

function removeExchange(n, t) { var i, r; return (t && t !== undefined || (lstProductId = []), i = $(n).find(".chonloai a"), i !== undefined && i !== "") ? lstProductId.length === 0 ? ($.each(i, function(n, t) { lstProductId.push($(t).data("id")) }), "") : (r = "", $.each(i, function(n, t) { var u = $(t).data("id");
        u !== undefined && i !== "" && $.inArray(u, lstProductId) > -1 && (r += t.outerHTML) }), i = $(n).html().replace($(n).find(".chonloai").html(), r)) : "" }

function displayMessage(n) { n !== undefined && n.trim() !== "" && ($(".popuppro-bhx p").html(n), $("header .popuppro-bhx").removeClass("hidden"), setTimeout(function() { $("header .popuppro-bhx").addClass("hidden") }, 5e3)) }

function popupContactCRM(n, t, i, r, u) { var o = "",
        f = getUser(),
        e = "50 sản phẩm",
        s, h;
    n === undefined && (n = "");
    n.indexOf("chỉ cho phép mua tối đa 50") > -1 || n.indexOf("chỉ cho phép mua tối đa 20") > -1 ? e = n.slice(n.lastIndexOf("chỉ cho phép mua tối đa ") + 24, n.length) : n !== "" && (e = n);
    e.indexOf("thùng") && (e = e.replace("thùng", ""));
    i === undefined && (i = "");
    console.log("uniyt:" + e);
    initPopupContactCRM();
    f != null && f.Phone !== null && f.Phone !== undefined ? (s = f.Gender === 0 ? "Chị" : "Anh", h = f.Name !== null && f.Name !== undefined ? f.Name : "", o += r == 1 ? "<div class='message-content'>                            <div class='row'>{pName} <b style='color:red'>chỉ còn {number}<\/b> sản phẩm, {sgender} {sname} có muốn mua nhiều hơn?<\/div>                            <div class='row inline'><label>SL muốn mua:<\/label><input type='number' class='inputborder totalcare' placeholder='Nhập số lượng' /><\/div>                            <div class='row small'>Tổng đài: <b>028.3622.9900<\/b> sẽ gọi ngay hỗ trợ {sgender}<\/div>                            <div class='row message-error'><\/div>                        <\/div>".replace(/{sgender}/g, s).replace("{sname}", h).replace("{pName}", i).replace("{number}", u) : "<div class='message-content'>                <div class='row'>{sgender} {sname} muốn mua <b>nhiều hơn {sunit}<\/b> {pName}?<\/div>                <div class='row inline'><label>SL muốn mua:<\/label><input type='number' class='inputborder totalcare' placeholder='Nhập số lượng' /><\/div>                <div class='row small'>Tổng đài: <b>028.3622.9900<\/b> sẽ gọi ngay hỗ trợ {sgender}<\/div>                <div class='row message-error'><\/div><br/>            <\/div>".replace(/{sgender}/g, s).replace("{sname}", h).replace("{sunit}", e).replace("{pName}", i)) : o += r == 1 ? "<div class='message-content'>                    <div class='row'>{pName} <b style='color:red'>chỉ còn {number}<\/b> sản phẩm, bạn có muốn mua nhiều hơn?<\/div>                    <div class='row'>Vui lòng nhập thông tin, Tổng đài sẽ liên hệ hỗ trợ ngay cho bạn.<\/div>                    <div class='row'>                        <label class='genderlabel' data-gender='1' onclick='chooseGender(1)' > <i class='icon-radio'><\/i> Anh<\/label>                        <label class='genderlabel' data-gender='2' onclick='chooseGender(2)'><i class='icon-radio'><\/i> Chị<\/label>                    <\/div>                    <div class='row'><input type='text' class='inputborder fullName' placeholder='Họ và tên (bắt buộc)' /><\/div>                    <div class='row' > <input type='text' class='inputborder phoneNumber' placeholder='Nhập số điện thoại (bắt buộc)' /><\/div >                    <div class='row inline'><label>SL muốn mua:<\/label><input type='number' class='inputborder totalcare' placeholder='Nhập số lượng' /><\/div>                    <div class='message-error'><\/div><\/div>".replace("{pName}", i).replace("{pName}", i).replace("{number}", u) : "<div class='message-content'>                   <div class='row'>Bạn muốn mua <b>nhiều hơn {sunit}<\/b> {pName}?<\/div>                    <div class='row'>Vui lòng nhập thông tin, Tổng đài sẽ liên hệ hỗ trợ ngay cho bạn.<\/div>                    <div class='row'>                        <label class='genderlabel' data-gender='1' onclick='chooseGender(1)' > <i class='icon-radio'><\/i> Anh<\/label>                        <label class='genderlabel' data-gender='2' onclick='chooseGender(2)'><i class='icon-radio'><\/i> Chị<\/label>                    <\/div>                    <div class='row'><input type='text' class='inputborder fullName' placeholder='Họ và tên (bắt buộc)' /><\/div>                    <div class='row' > <input type='text' class='inputborder phoneNumber' placeholder='Nhập số điện thoại (bắt buộc)' /><\/div >                    <div class='row inline'><label>SL muốn mua:<\/label><input type='number' class='inputborder totalcare' placeholder='Nhập số lượng' /><\/div>                    <div class='row message-error'><\/div>                <\/div>".replace("{sunit}", e).replace("{pName}", i);
    o += "  <div class='row'>            <a class='btnOKRequest' onclick='ContactCRM({id})'>Đồng ý<\/a>            <a class='btnCancel' onclick='fnCancel()'>Không<\/a>            <\/div>".replace("{id}", t);
    (f == null || f.Phone === null || f.Phone === undefined) && (o += "<div class='row'>                Hoặc gọi: <b>028.3622.9900<\/b> để được hỗ trợ.            <\/div>");
    alertify.alert().set({ startMaximized: !1, basic: !0, closable: !0, message: o, onclose: function() { alertify.alert().set({ startMaximized: !1, basic: !1 });
            alertify.confirm().destroy();
            initFillButtonBuy() } }).show(!0, "popupContactCRM") }

function chooseGender(n) { $(".genderlabel").removeClass("checked");
    $(".genderlabel[data-gender='" + n + "']").addClass("checked") }

function fnCancel() { $(".popupContactCRM .ajs-close").trigger("click");
    $("#BeforeAddToCartModel").parents(".alertify").removeClass("ajs-hidden", "ajs-out") }

function ContactCRM(n) { var t = $(".genderlabel.checked").data("gender"),
        i = $(".fullName").val(),
        r = $(".phoneNumber").val(),
        u = $(".totalcare").val();
    alertify.confirm().destroy();
    $.ajax({ type: "POST", data: { productId: n, gender: t, fullName: i, phone: r, totalcare: u }, url: "/aj/Shared/ContactCRM", success: function(n) { var i, r, u;
            n.Code !== 200 ? $(".message-error").text(n.Msg) : ($(".message-content").hide(), i = Cookies.getJSON("bhx_vcrif"), r = "", r = i != null && i.Id != 0 && i.Gender != -1 ? i.Gender === 0 ? "chị" : "anh" : t === 2 ? "chị" : "anh", u = "Bachhoaxanh.com sẽ liên hệ hỗ trợ {sgender} trong thời gian sớm nhất".replace("{sgender}", r), $(".message-error").text(""), $(".btnOKRequest").hide(), $(".btnCancel").hide(), fnCancel(), initFillButtonBuy()) } }) }

function initPopupContactCRM() { $(".message-content").show();
    $(".btnOKRequest").show();
    $(".btnCancel").show();
    $(".message-error").text("") }

function updatePaymentOrder(n, t, i, r, u, f, e) { if (loading || $(r).find("i.icon-ordersuccess:not(.hidden)").length == 1 || $(r).hasClass("disabled")) return !1;
    loading = !0;
    (f === undefined || f === null) && (f = "order"); var o = i == "Cà thẻ khi nhận hàng";
    showLoading(!0);
    $.ajax({ type: "POST", data: { orderId: n, paymentType: t, note: i, page: f, isCardMachine: o, sc: e }, url: "/gio-hang/Order/UpdatePaymentOrder", success: function(t) { var r, f;
            loading = !1;
            showLoading(!1);
            r = JSON.parse(t.Msg);
            t.Code == 409 && alertify.alert().setting({ transition: "fade", message: r.Message, onok: function() { window.location = "/lich-su-mua-hang" } }).show(!0);
            t.Code !== 200 ? alertify.alert(r.Message).set({ transition: "fade", closableByDimmer: !0 }) : r.RedirectUrl !== "" && r.RedirectUrl !== undefined ? typeof r.Redirect != "undefined" && r.Redirect !== 12 ? window.location = r.RedirectUrl : (f = r.PaymentId, zaloPayProccess(n, u, f)) : (showInfoOrderPayCOD(), showInfoOrderPayHistory(n), i.indexOf("Cà thẻ khi nhận hàng") >= 0 ? ($(".box-orderresult .message-info-payment .pay-cart").removeClass("hidden"), $("#paymentresult_" + n + " .pay-cart").removeClass("hidden"), $("#transactiontype_" + n + " span").html(i), $(".box-orderresult .message-info-payment .pay-cash").addClass("hidden"), $(".payment-method .payment-showhidenbhx .icon-ordersuccess.cash").addClass("hidden"), $(".payment-method .payment-showhidenbhx .icon-ordersuccess.card").removeClass("hidden"), $("#iconcash_" + n).addClass("hidden"), $("#iconcard_" + n).removeClass("hidden"), $("#paycash_" + n).addClass("hidden"), $("#paycard_" + n).removeClass("hidden")) : ($(".box-orderresult .message-info-payment .pay-cart").addClass("hidden"), $("#paymentresult_" + n + " .pay-cash").removeClass("hidden"), $("#transactiontype_" + n + " span").html(i), $(".box-orderresult .message-info-payment .pay-cash").removeClass("hidden"), $(".payment-method .payment-showhidenbhx .icon-ordersuccess.card").addClass("hidden"), $(".payment-method .payment-showhidenbhx .icon-ordersuccess.cash").removeClass("hidden"), $("#iconcash_" + n).removeClass("hidden"), $("#iconcard_" + n).addClass("hidden"), $("#paycash_" + n).removeClass("hidden"), $("#paycard_" + n).addClass("hidden"))) } }) }

function updatePaymentOrderEVoucher(n, t, i, r) { if (loading) return !1;
    loading = !0;
    showLoading(!0);
    $.ajax({ type: "POST", url: "/gio-hang/Order/UpdatePaymentOrderEvoucher", data: { orderId: n, paymentType: t, page: i, sc: r }, success: function(n) { var t, i;
            loading = !1;
            showLoading(!1);
            t = JSON.parse(n.Msg);
            n.Code !== 200 ? alertify.alert(t.Message).set({ transition: "fade", closableByDimmer: !0, onok: function() { window.location = t.Url } }) : t.RedirectUrl !== "" && t.RedirectUrl !== undefined && (i = 5, alertify.alert().destroy(), alertify.alert().setting({ label: "Chuyển ngay", closableByDimmer: !1, message: "<div class='popupOnePay'>Bạn đang được chuyển sang trang <span class='icon-onepay'><\/span><br/> để thanh toán trong vòng <span class='timer'>5<\/span> giây nữa ...<\/div>", onok: function() { window.location = t.RedirectUrl } }).show(!0, "popupOnePay"), setInterval(function() { $(".timer").html(i);
                i <= 0 ? $(".popupOnePay .ajs-close").trigger("click") : i-- }, 1e3)) } }) }

function showLoading(n, t) { t = typeof t != "undefined" ? t : "Đang xử lý...";
    n ? ($(".ajaxLoading .text").html(t), $(".ajaxLoading").show(), $(".ajloading").show()) : ($(".ajaxLoading").hide(), $(".ajloading").hide()) }

function zaloPayProccess(n, t, i) { $("#isstop").val(!1);
    showLoading(!0);
    $.ajax({ url: "/cong-thanh-toan/zp/" + n + "?paymentId=" + i, type: "GET", success: function(r) { if (showLoading(!1), r.code === 1) { $(".z-left > img").attr("src", r.mess); var u = document.querySelector("#z-time");
                countDown(300, u);
                $("#zalopay").show();
                $("#zorderId").val(n);
                $("#zpaymentId").val(i);
                $("#zphone").val(t);
                setTimeout(function() { getStatusZalo(n, i) }, 1500);
                setTimeout(function() { var i = $("#isstop").val(),
                        n, t;
                    i === "false" && ($("#zalopay").hide(), n = $("#zorderId").val(), t = $("#zpaymentId").val(), n > 0 && $.ajax({ url: "/cong-thanh-toan/zalopay/status/", type: "GET", data: { id: n, paymentId: t }, success: function(t) { var i = t.hash;
                            t.isprocessing ? location.href = "/gio-hang/thanh-toan-dang-duoc-xu-ly/" + n + "?sc=" + i : t.returncode === 1 ? location.href = "/gio-hang/thanh-toan-thanh-cong/" + n + "?sc=" + i : ($("#zorderId").val("0"), $("#zpaymentId").val(""), $("#isstop").val(!0), alertify.alert("Vui lòng chọn phương thức thanh toán khác.")) } }), $("#isstop").val(!0), alertify.alert("Vui lòng chọn phương thức thanh toán khác.")) }, 300015) } else alertify.alert(r.mess + "<br> Vui lòng chọn phương thức thanh toán khác.");
            console.log(r) }, error: function(n) { showLoading(!1);
            console.log(n) } }) }

function getStatusZalo(n, t) { n > 0 && $.ajax({ url: "/cong-thanh-toan/zalopay/status/", type: "GET", data: { id: n, paymentId: t }, success: function(i) { var r = i.hash,
                u;
            i.returncode === 1 ? location.href = "/gio-hang/thanh-toan-thanh-cong/" + n + "?sc=" + r : i.returncode === -49 || i.returncode === -117 || i.isprocessing ? (u = $("#isstop").val(), u === "false" && setTimeout(function() { getStatusZalo(n, t) }, 1500)) : location.href = "/gio-hang/thanh-toan-loi/" + n + "?code=1&transtype=12&sc=" + r } }) }

function closeZaloPay() { var n = $("#zphone").val();
    alertify.confirm("Bạn chắc chắn muốn hủy thanh toán?", function() { $("#zalopay").hide(); var n = $("#zorderId").val();
        $("#isstop").val(!0) }).set("labels", { ok: "ĐỒNG Ý", cancel: "KHÔNG" }) }

function cancleOrder(n, t) { console.log("Cancel Order ", n, t);
    showLoading(!0);
    $.post("/gio-hang/Order/CancelOrder", { orderid: n, phone: t }, function(n) { showLoading(!1);
        n.Code === 200 && ($("#zorderId").val("0"), $("#isstop").val(!0)) }) }

function countDown(n, t) { var u = n,
        i, r;
    clearInterval(myVar);
    t.textContent = "05:00";
    myVar = setInterval(function() { u > -1 && (i = parseInt(u / 60, 10), r = parseInt(u % 60, 10), i = i < 10 ? "0" + i : i, r = r < 10 ? "0" + r : r, t.textContent = i + ":" + r, --u < 0 && (u = -1, clearInterval(myVar))) }, 1e3) }

function showInfoOrderPayCOD() { $(".group-info-order").show();
    $(".box-orderresult .line:eq(1)").show();
    $(".box-orderresult .wrapbtn.mrg10px").show();
    $(".box-orderresult .message-info-payment").removeClass("hidden");
    $(".box-orderresult .message-info-payment-cart").addClass("hidden") }

function showInfoOrderPayHistory(n) { $("#paymentresult_" + n).removeClass("hidden");
    $("#paymentresult_" + n + " .message-info-payment").removeClass("hidden") }

function showInfoOrderPayCart() { $(".group-info-order").hide();
    $(".box-orderresult .line:eq(1)").hide();
    $(".box-orderresult .wrapbtn.mrg10px").hide() }

function p_npromotion_tip(n, t, i, r, u) { var f = '<div class="p-npromotion-tip">';
    f += '<div class="closetip"><\/div>';
    f += "<b>Giá giảm<\/b> chỉ áp dụng khi mua sản phẩm thứ " + t + ", từ sản phẩm " + (t + 1) + " trở lên sẽ tính giá <b>" + i + " <\/b>";
    f += '<div class="btnnpro">';
    f += '<button class="ag">ĐỒNG Ý MUA<\/button>';
    f += '<button class="uag">MUA SAU<\/button>';
    f += "<\/div>";
    f += "<\/div>";
    r ? $("<div class='d-npromotion'>" + f + "<\/div>").insertAfter(".infosell .updown") : $(".product[data-product='" + n + "'], .expired[data-product='" + n + "']").append(f);
    $(".p-npromotion-tip .ag").click(function(t) { t.preventDefault();
        addToCart(n, 1, "", !0, $(this).parent().parent(), !1, u);
        setTimeout(function() { $(".p-npromotion-tip").remove() }, 1e3) });
    $(".p-npromotion-tip .uag, .p-npromotion-tip .closetip").click(function() { $(".p-npromotion-tip").remove() }) }

function showPopupPromExpired(n) { n !== undefined && n !== "" && ($(".popup-promexpired .popuppromexpired-bhx .popuppromexpired-content").html(n), $(".popup-promexpired .popuppromexpired-bhx").removeClass("hidden"), setTimeout(function() { $(".popup-promexpired .popuppromexpired-bhx").addClass("hidden") }, 15e3), $(".popup-promexpired .popuppromexpired-bhx").click(function() { $(".popup-promexpired .popuppromexpired-bhx").addClass("hidden") })) }

function eventToolTip() { var n = '<div id="tip-apartment">';
    n += '<div class="button">';
    n += '<span><\/span><div class="bhx-apartment-close" onclick="closeApartment()"><\/div> <\/div>';
    n += 'Dù bạn ở văn phòng hay chung cư cao tầng, thậm chí không có thang máy, <a title="Bách Hóa Xanh" href="https://bachhoaxanh.com">BachhoaXANH.com<\/a> đảm bảo giao hàng tận cửa, bạn không cần dừng công việc để xuống lấy hàng';
    n += "<\/div>";
    $(".bhx-qstapartment").on("click", function() { $("#tip-apartment").remove(); var t = $(this).parent();
        $(t).append(n).fadeIn(400);
        initEventApartment(this) }) }

function initEventApartment(n) { var t = setTimeout(function() { $(n).parent().find("#tip-apartment").remove() }, 5e3);
    timeout.push(t) }

function closeApartment() { $("#tip-apartment").remove();
    $.each(timeout, function(n, t) { clearTimeout(t) });
    timeout = [] }

function initEventApartment(n) { var t = setTimeout(function() { $(n).parent().find("#tip-shipfree").remove() }, 4e3);
    timeoutship.push(t) }

function eventToolTipShip() { $(".shipfee .icon-qstshipfree").on("click", function() { var t = $(this),
            n = $(t).parents(".shipfee");
        typeof n != "undefined" && $(n).length > 0 && $('.shipfee[data-block="' + $(n).data("block") + '"] #tip-shipfree').toggleClass("hidden") }) }

function closeShip(n) { var t = $(n).parents("#tip-shipfree");
    typeof t != "undefined" && $(t).length > 0 && $(t).toggleClass("hidden") }

function initEventUnhappy() { var n = getUser(),
        t = n.Gender === 0 ? "chị" : n.Gender === 1 ? "anh" : "bạn";
    $(".unhappy textarea").attr("placeholder", "Nhập nội dung góp ý của " + t);
    $(".unhappy [data-us='gendername']").text(t) }

function openUnhappy(n, t, i) { if (n === undefined || t === undefined || i === undefined) return !1; var r = getUser(),
        u = r.NameWithGender ? r.NameWithGender : "bạn";
    $(".lstorder[data-id='" + n + "'] .item").addClass("hidden");
    $(".lstorder[data-id='" + n + "'] .nohappyLSDH").removeClass("hidden");
    $(".cmt-dh[data-id='" + n + "'] span").html(u);
    $(".js-float-label-wrapper").FloatLabel();
    $("#back-top").hide() }

function sendUnhappyHome(n) { var i = $(n),
        r = i.data("id"),
        u = i.parent().find("textarea").val(),
        f = $("#IsCallCC").is(":checked") === !0 ? 1 : 2,
        t = "";
    $(".unhappy-menu-item input").each(function() { $this = $(this);
        $this.is(":checked") && ($label = $('.unhappy-menu-item label[for="' + $this.attr("id") + '"]'), $label.length > 0 && ($this.hasClass("lv1") && t !== "" && (t = t.trim().replace(/,+$/g, "") + "\n"), t += $label.text() + ", ")) });
    t = t.trim().replace(/,+$/g, "");
    t.trim() !== "" && (t += "\n");
    t += u;
    $.ajax({ url: "/aj/History/VoteOrder", type: "POST", data: { orderId: r, ordererp: "", rate: 2, type: 1, note: t, contactType: f }, cache: !1, beforeSend: function() {}, success: function(n) { if (n.Code === 100) { $(".orderrating .ctn-top").addClass("hidden");
                $(".orderrating .nohappyLSDH").addClass("hidden");
                $(".orderrating .ctn-feedback").removeClass("hidden");
                setTimeout(function() { $(".orderrating").hide() }, 5e3); var t = $("#back-top");
                typeof t == undefined && $("#back-top").show() } else alertify.alert(n.Msg) }, error: function() { loading = !1;
            alertify.alert("Có lỗi xảy ra vui lòng thử lại sau") } }) }

function sendUnhapy() { var n = "",
        u = getUser(),
        e = u.NameWithGender ? u.NameWithGender.toProperCase() : "bạn",
        t = "",
        f = "/aj/History/VoteOrder",
        s = location.pathname === "/lich-su-mua-hang"; if ($("ul.main-unhappy input").each(function() { $this = $(this);
            $this.is(":checked") && ($label = $('ul.main-unhappy label[for="' + $this.attr("id") + '"]'), $label.length > 0 && ($this.hasClass("lv1") && n !== "" && (n = n.trim().replace(/,+$/g, "") + "\n"), n += $label.text() + ", ")) }), n = n.trim().replace(/,+$/g, ""), n.trim() !== "" && (n += "\n"), n += $(".unhappy .content textarea").val(), n.trim() === "") return $(".unhappy .error-unhappy").length == 0 && $(".unhappy .content").append('<span class="error-unhappy">Vui lòng chọn góp ý.<\/span>'), !1; var i = $("#un_orderid").val(),
        r = $("#un_typeid").val(),
        o = $("#un_rateid").val();
    $(".hidenNotLogin").length > 0 && _cusphome.length > 5 && (t = _cusphome, f = "/aj/Shared/VoteOrder");
    $.ajax({ url: f, type: "POST", data: { orderId: i, ordererp: "", rate: o, type: r, note: n, phone: t, contactType: 2 }, success: function(n) { var u, f;
            n.Code == 200 ? r == "11" ? (u = n.Msg, t !== "" && (u = $(".wrapbtn .hidenNotLogin").val()), location.pathname === "/lich-su-mua-hang" ? (alertify.alert(u), setTimeout(function() { location.reload() }, 3e3)) : location.pathname.indexOf("/don-hang") >= 0 ? (setTimeout(function() { location.reload() }, 3e3), alertify.alert(u)) : alertify.alert(u, function() { window.location = "/" }).set("labels", { ok: "Về trang chủ" })) : (f = '<p class="rateorder kq rated"><span>Đánh giá dịch vụ: <i class="icon-cry-s"><\/i> Không hài lòng dịch vụ<\/span><\/p>', $(".sso[data-id='" + i + "']").find(".raterow.dt").remove(), $(".sso[data-id='" + i + "']").find(".raterow").html(f), $("#dt-status").html(f), $("#dt-status").find(".rateorder").addClass("raterow"), alertify.alert().set({ message: n.Msg, onshow: function() { setTimeout(function() { $(".default-popupunhappy .ajs-close").trigger("click") }, 5e3) } }).show(!0, "default-popupunhappy")) : n.Code == 100 ? alertify.alert("Cảm ơn " + e + " đã dành thời gian góp ý để BHX cải thiện dịch vụ tốt hơn.", function() { window.location = n.Msg }).set("labels", { ok: "OK" }) : alertify.alert().set({ message: n.Msg, onshow: function() { setTimeout(function() { $(".default-popupunhappy .ajs-close").trigger("click") }, 5e3) }, onclose: function() { r == "11" && location.pathname === "/lich-su-mua-hang" && location.reload() } }).show(!0, "default-popupunhappy") }, error: function() {} });
    $(".unhappy").hide();
    $(".orderrating").hide();
    $("body").css("overflow", "unset") }

function closePopUnhappy() { var n, t, i; return $(".unhappy").hide(), n = $("#back-top"), typeof n == undefined && $("#back-top").show(), $("body").css("overflow", "unset"), t = $("#un_typeid").val(), t == "11" && (i = location.pathname === "/lich-su-mua-hang", i || location.pathname.indexOf("/don-hang/") >= 0 ? location.reload() : window.location = "/"), !0 }

function checkButton(n) { var t = $(n.target).val().length;
    t <= 0 ? $(".btn-sendLSDH").prop("disabled", !0) : $(".btn-sendLSDH").prop("disabled", !1) }

function checkPMHExistsInOrder(n, t, i, r, u, f, e, o, s) { $.ajax({ url: "/aj/Shared/CheckPMHExistsInOrder", type: "GET", data: { orderId: n, phone: t, nameWithGender: i, ishome: r, transactionTypeId: u, hasBtnEditCart: f, hasBtnChangeTimeShip: e, isMobile: o, sc: s }, success: function(h) { h.show ? (alertify.alert().destroy(), alertify.confirm().set({ message: "<div class='content'>Nếu Huỷ đơn hàng, các Phiếu mua hàng trong Đơn hàng hiện tại trong vòng 24h mới có thể sử dụng lại.<\/div>", onok: function() { popupCancelOrder(n, t, i, r, u, f, e, o, s) }, onclose: function() { alertify.alert().set({ basic: !1 }) }, labels: { ok: "TIẾP TỤC", cancel: "QUAY LẠI" }, transition: "fade" }).show(!0, "popupRefundVoucher")) : popupCancelOrder(n, t, i, r, u, f, e, o, s) }, error: function() {} }) }

function popupCancelOrder(n, t, i, r, u, f, e, o, s) { var c, h, l; if (sorderId = n, t && ("" + t)[0] != "0" && (t = "0" + t), o = !1, c = location.href, window.dataLayer = window.dataLayer || [], window.dataLayer.push({ category: "HuyDonHang", event: "cancel-order", action: "ClickHuyDonHang", label: sorderId + "-" + c }), location.href.indexOf("/don-hang/") != -1 && bhxusername == "Bạn") { location.href = "/dang-nhap?callback=%2Flich-su-mua-hang"; return }
    location.href.indexOf("/dat-hang-thanh-cong/") != -1 ? (h = $(".editcart"), h.length > 0 && (f = !0)) : (h = $(".order.sso[data-id='" + sorderId + "'] .act"), h[0] != undefined && (f = !0), l = $(".order.sso[data-id='" + sorderId + "'] .change-timedelivery"), l[0] != undefined && (e = !0));
    $.ajax({ url: "/aj/Shared/PopupCancelOrder", type: "GET", data: { orderId: n, phone: t, nameWithGender: i, ishome: r, transactionTypeId: u, hasBtnEditCart: f, hasBtnChangeTimeShip: e, isMobile: o, sc: s }, success: function(n) { initPopupCancelOrder();
            n != null && n !== undefined && (n.Code !== 200 && (n.Msg = '<div class="frm-CancelOrder"><div>' + n.Msg + '<\/div><div class="div-btn"><button class="close" onclick="cancelOrderClose(1)">ĐÓNG<\/button><\/div ><\/div>'), alertify.alert().set({ closable: !0, message: n.Msg, transition: "fade", onclose: function() { canceled && cancelOrderClose(2) } }).show(!0, "popupCancelOrder")) }, error: function() {} }) }

function clickChangeTimeInPopupCancel() { $(".popupCancelOrder .ajs-close").trigger("click"); var n = $(".order.sso[data-id='" + sorderId + "'] .change-timedelivery").attr("data-erpsaleorderid");
    n != 0 && n != undefined && orderList.changeDeliveryTime(sorderId, n) }

function clickEditCardInPopup() { $(".order.sso[data-id='" + sorderId + "'] .act a.e").click();
    $(".editcart").click() }

function cancelOrderOK(n) { var i, t, r;
    loadingOrderCancel || (loadingOrderCancel = !0, window.dataLayer = window.dataLayer || [], window.dataLayer.push({ category: "HuyDonHang", event: "cancel-order", action: "XacNhanHuy", label: sorderId }), i = $(".popupCancelOrder li [type='checkbox'].checked"), t = $(".popupCancelOrder .reason").val(), t != undefined && t != null && (t = t.trim()), i.length != 0 || t ? grecaptchaExecute(function(r) { for (var o, e, u = "", f = 0; f < i.length; f++) o = i.eq(f).parent().find("label").html(), u += o + ", ";
        u += t;
        e = { orderID: $(".popupCancelOrder .bodyPopupCancelOrder").data("order-id"), sc: $(".popupCancelOrder .bodyPopupCancelOrder").data("sc"), note: u, phone: $(".popupCancelOrder .bodyPopupCancelOrder").data("phone"), captchaCode: $(".popupCancelOrder .captcha-main input").val(), g_recaptcha_response: r, hasCaptchaCustom: $(".popupCancelOrder .captcha-main input").length == 1 };
        $.ajax({ url: "/gio-hang/Order/CanceOrderNew", type: "POST", data: e, success: function(t) { var s; if (loadingOrderCancel = !1, t.Code == 200) { if (updateStatusOrderInLSMH(), $(".popupCancelOrder li [type='checkbox'].checked#checkbox_1").length > 0) { var i = "",
                            u = 0,
                            r = "",
                            o = 0,
                            f = 0;
                        $(".edit-info").length > 0 ? (i = $(".edit-info .huy .rebuy").data("order"), u = $(".edit-info .huy .rebuy").data("provinceid"), r = $(".edit-info .huy .rebuy").data("token"), o = $(".edit-info .huy .rebuy").data("curentprov"), f = $(".edit-info .huy .rebuy").data("curentstoreid")) : (i = $(".box-orderresult .nobuy").data("order"), u = $(".box-orderresult .nobuy").data("provinceid"), r = $(".box-orderresult .nobuy").data("token"), o = $(".box-orderresult .nobuy").data("curentprov"), f = $(".box-orderresult .nobuy").data("curentstoreid"));
                        s = $(".bodyPopupCancelOrder").data("transactiontypeid") || 0;
                        u != o ? s > 0 ? (callbackClose = function() { ValidateCartRating(i, r, u, f) }, unhappy.showThankYou(n == 1 ? 3 : 2)) : ValidateCartRating(i, r, u, f) : s > 0 ? (callbackClose = function() { RebuyProduct(i, r, !0) }, unhappy.showThankYou(n == 1 ? 3 : 2)) : RebuyProduct(i, r, !0) } else unhappy.showThankYou();
                    $(".paymentarea_" + sorderId).remove();
                    $("div.itotal[data-id='" + e.orderID + "']").find(".btnvoucher").hide() } else t.Code == 301 ? $(".popupCancelOrder .captcha-main input").length == 0 ? ($(".popupCancelOrder .messageError:eq(0)").text(t.Msg), $(".popupCancelOrder .messageError").removeClass("hidden"), captchaNew.initCaptcha($(".popupCancelOrder .captcha-main"), !0)) : ($(".popupCancelOrder .messageError:eq(0)").text(t.Msg), $(".popupCancelOrder .messageError").removeClass("hidden")) : setTimeout(function() { $(".alertify").removeClass("popupCancelOrder");
                    alertify.alert(t.Msg) }, 300) }, error: function() { loadingOrderCancel = !1;
                alertify.alert("Xảy ra lỗi") } }) }) : (r = r || $(".popupCancelOrder .messageError:eq(0)").text(), $(".popupCancelOrder .messageError:eq(0)").text(r), $(".popupCancelOrder .messageError").removeClass("hidden"), loadingOrderCancel = !1)) }

function cancelOrderClose(n) { window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ category: "HuyDonHang", event: "cancel-order", action: "DongPopupHuy", label: sorderId });
    n == 1 ? $(".popupCancelOrder .ajs-close").trigger("click") : n == 2 ? location.href.indexOf("/don-hang/") != -1 ? location.href = "/" : location.href.indexOf("/lich-su-mua-hang") !== -1 || location.href.indexOf("/don-hang-cua-ban") !== -1 ? (updateStatusOrderInLSMH(), $(".popupCancelOrder .ajs-close").trigger("click"), typeof callbackClose == "function" && callbackClose()) : ($(".editcart").hide(), $(".nobuy").hide(), typeof callbackClose == "function" ? callbackClose() : location.href = "/lich-su-mua-hang") : n == 3 && (location.href = "/") }

function initPopupCancelOrder() { canceled = !1;
    $(".popupCancelOrder .frm-CancelOrder .messageError").addClass("hidden") }

function chooseCheckboxReason(n) { $(n).toggleClass("checked") }

function goLogin() { var n = Cookies.get("orderReview");
    n != undefined ? $.get("/aj/shared/OrderReview", {}, function() { var t = JSON.parse(n);
        idreview = t.orderReviewCrmOrderId; var i = t.orderReviewCrmOrderId,
            r = t.orderReviewCrmUser,
            u = t.orderReviewCrmChecksum,
            f = "don-hang%2F" + i + "%3Fu=" + r + "%26h=" + u + "%26clickEditCart=true";
        location.href = "/dang-nhap?callback=%2F" + f }) : location.href = "/dang-nhap?callback=%2Flich-su-mua-hang" }

function onCancelCart(n, t, i, r) { n != null && t != null && i != null && $.ajax({ url: "/gio-hang/Order/CheckExitsSession", dataType: "json", method: "POST", data: { orderId: n, phone: t, sc: r }, success: function(u) { $("#dlding").hide();
            u.Code === 200 ? (console.log("ok"), popupCancelOrder(n, t, i, !0, "0", !1, !1, !1, r)) : location.href = "/";
            ajLoading(!1) }, beforeSend: function() { ajLoading(!0) }, error: function() { alertify.alert("Cập nhật giỏ hàng thất bại");
            ajLoading(!1) } }) }

function updateStatusOrderInLSMH() { var n; if ($(".order.sso[data-id='" + sorderId + "'] div.huy").hide(), $(".order.sso[data-id='" + sorderId + "'] .act").hide(), $(".order.sso[data-id='" + sorderId + "'] div.rebuy").removeClass("hidden"), $(".order.sso[data-id='" + sorderId + "'] .orderstatus label.statusdelivery").removeClass("complete"), $(".order.sso[data-id='" + sorderId + "'] .orderstatus label.statusdelivery").addClass("cancel"), $(".order.sso[data-id='" + sorderId + "'] .orderstatus label.statusdelivery").html('<i class="tpl-status4"><\/i> Huỷ giao hàng'), $(".order.sso[data-id='" + sorderId + "'] .list-status").html('<div class="status"><div class="active"><i class="tpl-status1"><\/i><span>Đã xác nhận<\/span><\/div><div class="active"><i class="tpl-status8"><\/i><span>Đã xuất hàng<\/span><\/div><div class="active"><i class="tpl-status6"><\/i><span>Đang giao hàng<\/span><\/div><div class="actived"><i class="tpl-status4"><\/i><span>Huỷ giao hàng<\/span><\/div><\/div>'), $(".order.sso[data-id='" + sorderId + "'] .info .change-receiver").addClass("hidden"), $(".order.sso[data-id='" + sorderId + "'] .info .notifyChangeReceiver").addClass("hidden"), $(".order.sso[data-id='" + sorderId + "'] .change-timedelivery").remove(), $(".order.sso[data-id='" + sorderId + "'] .message-delivery").remove(), $(".order.sso[data-id='" + sorderId + "'] .happy-gift").remove(), n = $(".bodyPopupCancelOrder").data("transactiontypeid") || 0, $(".order.sso[data-id='" + sorderId + "'] .message-refund").length == 0 && n > 0) { var t = $(".bodyPopupCancelOrder").data("name-with-gender"),
            i = $(".bodyPopupCancelOrder").data("refunddate"),
            r = $(".bodyPopupCancelOrder").data("nametypetransaction"),
            u = "<div class='message-refund'><i><\/i>Số tiền của {nameWithGender} <b>sẽ được hoàn trả<\/b> vào {nameTypeTransaction} <b>từ {dateRefund} <\/div>".replace("{nameWithGender}", t).replace("{nameTypeTransaction}", r).replace("{dateRefund}", i);
        $(".order.sso[data-id='" + sorderId + "'] .infoOther").append(u) } }

function cancelOrderNoReason(n, t, i) { var r = "/gio-hang/Order/";
    i = i.charAt(0).toUpperCase() + i.slice(1);
    alertify.confirm(i + " thực sự muốn hủy đơn hàng này?").set({ labels: { ok: "Đồng ý hủy", cancel: "Đóng" }, transition: "fade", onok: function() { $.post(r + "CancelOrder", { orderid: n, phone: t }, function(n) { showLoading(!1);
                n.Code === 200 && alertify.alert("Hủy đơn hàng thành công, " + i + " sẽ được chuyển về trang chủ").set({ transition: "fade", onok: function() { window.location = "/" }, closableByDimmer: !0 }) }) }, closableByDimmer: !0 }) }

function ValidateCartRating(n, t, i, r) { $.ajax({ url: "/gio-hang/Order/ValidateHistory", method: "GET", data: { cartid: t, cartProvinceId: i, cartStoreId: r }, beforeSend: function() { ajLoading(!0) }, success: function(i) { ajLoading(!1);
            i.Code === 100 ? RebuyProduct(n, t, !0) : i.Code === 200 && (alertify.alert().destroy(), alertify.confirm().set({ message: "<div class='p-location-mess'>" + i.Msg + "<\/div>", onok: function() { RebuyProduct(n, t, !0) }, onclose: function() { location.reload() }, labels: { ok: "Đồng ý", cancel: "Không" }, transition: "fade" }).show(!0, "popup-location-mess")) }, error: function() { console.log("Lỗi kỹ thuật!") } }) }

function RebuyProduct(n, t, i) { $.ajax({ url: "/gio-hang/Order/ReBuy", dataType: "json", method: "POST", data: { orderId: n, cartId: t, isMergeOrder: i }, success: function(t) { t.Code === 200 ? (window.dataLayer.push({ category: "Ecommerce", event: "mua-lai-don-hang", action: "MuaLaiDonHang", label: n }), window.location = "/gio-hang") : t.Code === 100 ? location.href = "/" : setTimeout(function() { $(".alertify").removeClass("popupCancelOrder");
                alertify.alert(t.Msg) }, 300);
            ajLoading(!1) }, beforeSend: function() { ajLoading(!0) }, error: function() { alertify.alert("Cập nhật giỏ hàng thất bại");
            ajLoading(!1) } }) }

function grecaptchaExecute(n) { grecaptcha.ready(function() { var t = $(".public-keycapcha-v3").data("key");
        grecaptcha.execute(t, { action: "submit" }).then(function(t) { typeof n == "function" && n(t) }) }) }

function autoAddProductForUrl() { setTimeout(function() { if (location.href.indexOf("productIdAutoAdd=") != -1) { var n = location.href.split("productIdAutoAdd=")[1],
                t = $("[data-product={productIdAutoAdd}] .buy".replace("{productIdAutoAdd}", n));
            showPopupBeforeAddToCart(n, t, !1, !0);
            console.log("auto add sp - " + n);
            removeParam("productIdAutoAdd") } }, 1e3) }

function buyRecentlyOrder(n) { return window.dataLayer.push({ category: "click", event: "MuaDonHangGanNhat", action: "MuaDonHangGanNhat", label: n + "-Desktop" }), window.location = "/lich-su-mua-hang", !1 }

function initSticky() { var n = 10; if ($(".colmenu").length > 0) { $(".colmenu").stick_in_parent({ recalc_every: 1, offset_top: n });
        $(".colmenu").on("sticky_kit:bottom", function() { $(this).parent().css("position", "static");
            $(this).css({ position: "fixed", top: n, bottom: "38px" }) }).on("sticky_kit:unbottom", function() { $(this).parent().css("position", "relative") }) } if ($(".colrecom").length > 0) { $(".colrecom").stick_in_parent({ recalc_every: 1, offset_top: n });
        $(".colrecom").on("sticky_kit:bottom", function() { $(this).parent().css("position", "static");
            $(this).css({ position: "fixed", top: n }) }).on("sticky_kit:unbottom", function() { $(this).parent().css("position", "relative") }) } }

function getOffsetRect(n) { var i = n,
        r = i[0],
        t = r.getBoundingClientRect(); return { top: Math.round(t.top), left: Math.round(t.left), bottom: Math.round(t.bottom), right: Math.round(t.right) } }

function ajLoading(n) { n ? $(".ajloading").show() : $(".ajloading").hide();
    loading = n }

function lazy(n, t, i) { n = typeof n == "string" ? n : n.selector ? n.selector : "";
    n = n.replace(/:visible/g, ':not([style*="display:none"])'); var r = { elements_selector: n, threshold: 100 }; return typeof t == "object" && (r.container = t), typeof i == "object" && $.extend(r, i), new LazyLoad(r).update() }

function getUser() { var n = Cookies.getJSON("bhx_vcrif"),
        t, i; return typeof n == "undefined" || n === null || n === {} || n.me === undefined ? ($.get("/aj/shared/ufn", function(n) { n.NameWithGender === null && (n.NameWithGender = "");
        Cookies.set("bhx_vcrif", JSON.stringify(n), { expires: 7 });
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "get-user", user: n });
        getUser() }), {}) : (n.NameWithGender === undefined && (n.NameWithGender = "Bạn"), bhxusername = n.NameWithGender, $("body").hasClass("new2019") ? $(".new2019 .hiscart .histories").html("Đơn hàng<br/>" + (n.Gender === 0 || n.Gender === 1 ? n.NameWithGender : "của bạn")) : ($(".hiscart .histories").html("Đơn hàng<br/>" + (n.Gender === 0 || n.Gender === 1 ? n.NameWithGender : "của bạn")), $(".coronacart .histories").html("Đơn hàng<br/>" + (n.Gender === 0 || n.Gender === 1 ? n.NameWithGender : "của bạn"))), t = $(".mainsearch input").attr("placeholder"), (t == undefined || t == "" || n.NameWithGender != "Bạn") && (t = n.NameWithGender.toProperCase() + " tìm gì?"), i = location.href.indexOf("kinh-nghiem-hay") !== -1, i && (t = n.NameWithGender.toProperCase() + " tìm gì?"), $(".mainsearch input").attr("placeholder", t), $(".searchfooter input").attr("placeholder", n.NameWithGender.toProperCase() + " mua gì..."), $("#frmCommentRating textarea[name='txtContent']").attr("placeholder", "Mời " + n.NameWithGender + " đánh giá về sản phẩm..."), $("#frmCommentRating > span.s").text("Chọn đánh giá của " + (n.Gender === 0 ? "chị" : n.Gender === 1 ? "anh" : "bạn") + ":"), $("#frmAddComment textarea[name='txtContent']").attr("placeholder", "Mời " + n.NameWithGender + " bình luận hoặc đặt câu hỏi"), $("label[data-rder='gender'][data-gender='" + n.Gender + "']").addClass("chon"), $("input[data-rder='name']").val(n.Name), $("input[data-rder='email']").val(n.Email), $("input[data-rder='phone']").val(n.Phone), $("input[data-rder='gender']").val(n.Gender !== null ? n.Gender : "-1"), $("[data-rder='namegtxt']").text(n.NameWithGender.toProperCase()), n) }

function scrollFunction() { if (window.matchMedia("(min-width: 1280px)").matches) { var n = document.getElementsByClassName("stikycart"); if (n === null) return;
        document.getElementsByClassName("stikycart").style.display = (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) && isHaveItemCart ? "block" : "none" } }

function guid() {
    function n() { return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1) } return n() + n() + n() + n() + n() + n() + n() + n() }

function checkGender(n) { $(".gendercomment label").removeClass("chon");
    $(".gendercomment [data-gender='" + n + "']").addClass("chon");
    $("#frmContact input[type='hidden'][name='txtSex']").val(n) }

function SubmitContact() { if (flagSubmitContact || !validateContact()) return !1;
    flagSubmitContact = !0;
    ajLoading(!0, "Tải dữ liệu."); var n = new FormData,
        i = $("#frmContact").serializeArray(),
        t = $("#frmContact").data("newyearbreaktime"); return $.each(i, function(t, i) { n.append(i.name, i.value) }), $.ajax({ type: "POST", cache: !1, contentType: !1, processData: !1, data: n, url: "/aj/Static/SubmitContact", success: function(n) { var r, i, u; if (ajLoading(!1), flagSubmitContact = !1, n.status == -1) return $(".message-error").show(), $(".message-error").text(n.error), !1;
            r = $(".popup-contact .gendercomment label.chon").text();
            i = "Gửi thành công. Cảm ơn " + r.toLowerCase() + " đã đóng góp ý kiến";
            t != null && t == "True" && (i += ". Thông tin của " + r.toLowerCase() + " sẽ được xử lý chậm nhất 12h ngày 19/02.");
            $(".popupContact.alertify .ajs-dialog").length > 0 && !$(".popupContact.alertify .ajs-dialog").hasClass("resize-h120") && $(".popupContact.alertify .ajs-dialog").addClass("resize-h120");
            u = location.href.indexOf("lien-he") !== -1;
            u ? alertify.alert(i, function() { window.location.reload() }) : ($(".popup-contact .pcontact").hide(), $(".popup-contact .pAlert").show(), $(".popup-contact .pAlert .message-success").html(i)) }, error: function() { return ajLoading(!1), !1 } }), !1 }

function validateContact() { var u, f, n, i, t, r; if ($(".sperror").hide(), $(".message-error").hide(), u = $("#frmContact").find("textarea[name='txtContent']").val().trim(), u === "") return $(".message-error").show().text("Vui lòng nhập nội dung"), !1; if (f = $(".gendercomment label.chon").length > 0, !f) return $(".message-error").show().text("Vui lòng chọn giới tính"), !1; if (n = $("#frmContact").find("input[name='txtFullName']").val().trim(), n === "") return $(".message-error").show().text("Vui lòng nhập họ và tên"), !1; if (n === "" || validateNameAddress(n)) { if (n !== "" && n.length > 50) return $(".message-error").show().text("Họ và tên quá dài tối đa 50 ký tự"), !1 } else return $(".message-error").show().text("Họ và tên không hợp lệ"), !1; return (t = /^((01(\d){9})|(0[35789](\d){8}))$/, i = $("#frmContact").find("input[name='txtPhoneNumber']").val().trim(), i !== undefined && i !== "" && !t.test(i)) ? ($(".message-error").show().text("Số điện thoại không hợp lệ"), !1) : (t = /^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]|[.]){2,63})+$/, r = $("#frmContact").find("input[name='txtEmail']").val().trim(), r !== "" && !t.test(r)) ? ($(".message-error").show().text("Email không hợp lệ"), !1) : !0 }

function closePopupupContact() { $(".popupContact .ajs-close").trigger("click") }

function initPopupContact() { $(".popup-contact [name='txtContent']").val("");
    $(".popup-contact [data-rder='gender']").removeClass("chon");
    $(".popup-contact [name='txtFullName']").val("");
    $(".popup-contact [name='txtPhoneNumber']").val("");
    $(".popup-contact [name='txtEmail']").val("");
    $(".popup-contact .message-error").text("");
    $(".popup-contact .pcontact").show();
    $(".popup-contact .pAlert").hide(); var n = Cookies.getJSON("bhx_vcrif");
    n !== null && n.Id !== 0 && ($("#frmContact input[name='txtFullName']").val(n.Name), $("#frmContact input[name='txtPhoneNumber']").val(n.Phone), $("#frmContact input[name='txtEmail']").val(n.Mail), $(".popup-contact [data-gender='" + n.Gender + "']").addClass("chon")) }

function getKeySearch() { $.ajax({ type: "get", url: "/aj/Shared/GetKeySearch", beforeSend: function() { ajLoading(!0, "Tải dữ liệu.") }, success: function(n) { var i; if ((ajLoading(!1), n.Code !== 200) || n.Msg === undefined || n.Msg === "") return $(".mainsearch .easy-autocomplete-container ul").removeClass("active"), $(".mainsearch .easy-autocomplete-container").removeClass("searchhistory"), !1; var r = JSON.parse(n.Msg),
                t = ""; return r.forEach(function(n) { t += '<li class="item-key"><div class="eac-item keysearch"><div class="more-cate"><span>' + n + "<\/span><\/div><\/div><\/li>" }), $(".mainsearch .easy-autocomplete-container p.title").remove(), $(".mainsearch .easy-autocomplete-container ul li").remove(), $(".mainsearch .easy-autocomplete-container ul").hasClass("active") || $(".mainsearch .easy-autocomplete-container ul").addClass("active"), $(".mainsearch .easy-autocomplete-container").addClass("searchhistory"), i = document.getElementById("eac-container-text-search"), i.insertAdjacentHTML("afterbegin", '<p class="title">Lịch sử tìm kiếm<\/p>'), $(".mainsearch .easy-autocomplete-container ul").attr("id", "hardpoint"), $(".mainsearch .easy-autocomplete-container ul").append(t), setTimeout(function() { $(".mainsearch .easy-autocomplete-container .keysearch span").on("mousedown", function() { var n = $(this).text(); if (n === undefined || n === "") return !1;
                    showSearchAutocomplete(n) }) }, 500), enableHis = !0, setTimeout(function() { eventSearchHistory() }, 1e3), setTimeout(function() { var n = new ListNav;
                n.init({ control: "text-search", hardpoint: "hardpoint", selector: "item-key", choose: function() { if ($("#text-search").val() === "") showSearchAutocomplete(arguments[0].innerText);
                        else { var n = fixKeywords($("#text-search").val()); if (n !== "") return window.location.href = "/tim-kiem?key=" + n, !1 } } });
                n.run() }, 1e3), !0 }, error: function() { return ajLoading(!1), !1 } }) }

function eventSearchHistory() { var i = function(n, t) { if (typeof t != "function") throw new Error("No function supplied to bind function"); var i = Array.prototype.slice.call(arguments).slice(2); return t.bind ? t.bind.apply(t, [n].concat(i)) : function() { return t.apply(n || window, i.concat(Array.prototype.slice.call(arguments))) } },
        r = function(n) { var t = Array.prototype.slice.call(n.childNodes); return t.filter(function(t) { return t.tagName && t.nodeType && t.nodeType === 1 && t !== n }) },
        u = function(n, t) { return (" " + n.className + " ").indexOf(" " + t + " ") > -1 },
        t = function(n, t, i) { var r = u(n, t);
            i && !r ? n.className = n.className.trim() + " " + t : r && !i && (n.className = n.className.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), " ")) },
        f = function(n, t) { for (var r = -1, i = 0; i < n.length; i++)
                if (n[i] === t) { r = i; break }
            return r },
        n = function() {};
    n.prototype.init = function(n) { enableHis && (this.control = document.getElementById(n.control), this.hardpoint = document.getElementById(n.hardpoint), this.display = r(this.hardpoint), this.focus = -1, this.choose = n.choose, this.selector = n.selector) };
    n.prototype.run = function() { if (enableHis) { var n = this,
                t = this.selector;
            ["focus", "blur", "keydown", "input"].forEach(function(t) { n.control.addEventListener(t, i(n, n.handleEvent), !1) });
            ["mouseover", "mouseout", "mousedown"].forEach(function(t) { n.hardpoint.addEventListener(t, i(n, n.onmouse), !0) }) } };
    n.prototype.changeFocus = function(n) { if (enableHis) { var i = Math.min(Math.max(-1, this.focus + n), this.display.length - 1); return this.focus >= 0 && this.focus < this.display.length && t(this.display[this.focus], "hisselected", !1), this.focus = i, this.drawFocus(), !0 } };
    n.prototype.drawFocus = function() { if (enableHis) { var n = this.display[this.focus];
            n && t(n, "hisselected", !0) } };
    n.prototype.onmouse = function(n) { if (enableHis) { var t = n.target,
                i = n.type;
            u(t, this.selector) && (i === "mousedown" ? this.choose(t) : i === "mouseover" ? (this.focus = f(this.display, t), this.drawFocus()) : i === "mouseout" && this.changeFocus(Number.NEGATIVE_INFINITY)) } };
    n.prototype.handleEvent = function(n) { if (enableHis) { var i = n.type;
            i === "blur" ? (this.focused = !1, this.hide()) : (t(this.hardpoint, "hidden", !1), this.update(n)) } };
    n.prototype.hide = function() { enableHis && (this.changeFocus(Number.NEGATIVE_INFINITY), this.display = [], t(this.hardpoint, "hidden", !0)) };
    n.prototype.submit = function() { var n = $("#text-search").val(); return enableHis && (n.length > 2 || $("#hardpoint").find("li").hasClass("hisselected")) && (this.focus >= 0 && this.display[this.focus] ? this.choose(this.display[this.focus]) : this.display.length && (this.changeFocus(1), this.choose(this.display[this.focus]))), !1 };
    n.prototype.update = function(n) { if (enableHis) { console.log("upadte");
            this.display = r(this.hardpoint);
            n.type === "focus" && (this.focused = !0); var t = n.which; if (t && n.type == "keydown") switch (t) {
                case 38:
                    this.display.length && this.changeFocus(-1) && n.stopPropagation(); break;
                case 40:
                    this.display.length && this.changeFocus(1) && n.stopPropagation(); break;
                case 13:
                    this.display.length && (this.submit(), this.hide(), n.stopPropagation()); break;
                case 27:
                    this.display.length && (this.hide(), n.stopPropagation()); break;
                case 9:
                    return } } };
    window.ListNav = n }

function showSearchAutocomplete(n) { return $("#text-search").val(n), $(".mainsearch").submit(), !0 }

function fixKeywords(n) { return n === null || n === "" ? "" : n.trim().toLowerCase().replace(/\s+/g, "+").replace(/&+/g, "-and-").replace(/\\+/g, "") }

function reverseKeywords(n) { return n === null || n === "" ? "" : n.trim().toLowerCase().replace(/-and-/g, "&") }

function socketIO() { if (typeof io != "undefined") { bhxSocket = io("https://rtm.thegioididong.com", { path: "/socket.io" });
        bhxSocket.on("connect", function() { console.log("BHX Socket: connected");
            bhxSocket.emit("joingame", { room: "flashsales", siteid: 8 }) });
        bhxSocket.on("gamenotify", function(n) { if (n !== undefined && n !== null) { console.log("BHX socket: " + JSON.stringify(n)); switch (n.room) {
                    case "flashsales":
                        typeof updateFlashSalesUI == "function" && n.payload !== undefined && updateFlashSalesUI(n.payload) } } }) } }

function productClick(n, t, i) { var r, u; if (document.gaImpressions === undefined || document.gaImpressions === null || document.gaImpressions.length === 0 || (r = document.gaImpressions.find(function(n) { return n.id === t }), r === undefined)) return !0;
    u = window.dataLayer.find(function(n) { return n.event !== undefined && n.event === "gtm.dom" });
    u !== undefined && n.preventDefault();
    window.dataLayer.push({ event: "productClick", ecommerce: { click: { actionField: { list: r.list }, products: [r] } }, eventCallback: function() { document.location = i } }) }

function showPopupShortLink() { $("header").data("shortlink") !== undefined && $("header").data("shortlink") !== "" && $.ajax({ type: "POST", url: "/gio-hang/Order/ShowPopupShortLink", data: {}, success: function(n) { if (n.Code === 200) { $(".popup-shortlink .popupshortlink-bhx .popupshortlink-content").html(n.Msg);
                $(".popup-shortlink .popupshortlink-bhx").removeClass("hidden");
                $(".popup-shortlink .popupshortlink-bhx .bhx-close").on("click", function() { $(".popup-shortlink .popupshortlink-bhx").addClass("hidden") }); return } if (n.Code == 403) { alertify.alert(n.Msg); return } }, error: function() {} }) }

function removeParam(n) { var t = document.location.href,
        u = t.split("?"),
        r; if (u.length >= 2) { var f = u.shift(),
            e = u.join("?"),
            o = encodeURIComponent(n) + "=",
            i = e.split(/[&;]/g); for (r = i.length; r-- > 0;) i[r].lastIndexOf(o, 0) !== -1 && i.splice(r, 1);
        t = f + "?" + i.join("&");
        window.history.pushState("", document.title, t) } return t }

function remindLocation() { var n = $(".shiptoHere").text();
    n != "Chọn tỉnh thành, quận huyện để xem chính xác tồn kho" ? $(".location-remind").addClass("hidden") : $.ajax({ url: "/aj/Shared/ShowLocationRemind", method: "GET", beforeSend: function() {}, success: function(n) { n == !0 ? ($(".location-remind").removeClass("hidden"), initLocationRemind()) : $(".location-remind").addClass("hidden") }, error: function() {} }) }

function initLocationRemind() { $(".location-choose").on("click", function() { $("header .locationContainer .location").toggleClass("hidden");
        $("body").toggleClass("disable-scroll");
        $(".popup-overlays").toggle();
        $(".location-remind").addClass("hidden") });
    $(".location-remind a.close").on("click", function() { $.ajax({ url: "/aj/Shared/SetSSLocatioRemind", method: "GET", beforeSend: function() {}, success: function() { $(".location-remind").addClass("hidden") }, error: function() {} }) }) }

function LoadFreshStream(n, t) { $.ajax({ url: "/aj/Shared/IframeCameraStreamFresh", type: "GET", data: { streamChannel: t }, beforeSend: function() { ajLoading(!0) }, success: function(n) { if (ajLoading(!1), n.Code == 200) { alertify.alert().setting({ resizable: !0, message: n.Msg, transition: "zoom", onclose: function() { alertify.alert().set({ resizable: !1 }) } }).show(!0, "bhx-freshstream");
                $(".alertify.bhx-freshstream .close").on("click", function() { $(".alertify.bhx-freshstream .ajs-close").trigger("click") }) } }, error: function() { ajLoading(!1) } }) }

function InitEventClickProduct() { $(".cate ").on("click", ".product a[href]", function(n) { var i = $(this),
            r = i.parent().data("product").toString(),
            t = $(this).find(".streamfresh"); if (typeof t != "undefined" && $(t).length > 0 && (t.is(n.target) || t.has(n.target).length > 0)) { n.stopPropagation();
            n.preventDefault(); return }
        productClick(n, r, i.attr("href")) }) }

function initbhxchat() { var n = new Date,
        t = n.getHours() + ":" + n.getMinutes();
    $("#OnOffChatFBMessenger").val() === "true" && t >= "08:00" && t <= "19:45" && setTimeout(function() { var n = new FacebookRepoint;
        n.fastConfig();
        $("#back-top").css("bottom", "90px") }, 3e3) }

function grecaptchaExecute(n) { grecaptcha.ready(function() { var t = $("#public-keycapcha-v3").val();
        grecaptcha.execute(t, { action: "submit" }).then(function(t) { typeof n == "function" && n(t) }) }) }

function sliderCoronaHeader() { typeof $(".box-onlybuycorona .slider-title") != "undefined" && $(".box-onlybuycorona .slider-title").owlCarousel({ loop: !0, autoplay: !0, items: 1, animateOut: "slideOutUp", animateIn: "slideInUp", autoplayTimeout: 6e3, autoplaySpeed: 5e3, mouseDrag: !1, touchDrag: !1, nav: !1, dots: !1, onInitialized: function() {} }) }

function redirectPageCombo() { var n = $("header").data("store"),
        t = $("header").data("storecombo"),
        i = [],
        r;
    typeof t != "undefined" && typeof n != "undefined" && (i = t.toString().split(","), r = location.href.indexOf("/gio-hang") > 0 || location.href.indexOf("/combo-mua-dich") > 0 || location.href.indexOf("/lich-su-mua-hang") > 0 || location.href.indexOf("/don-hang") > 0 || location.href.indexOf("/dang-nhap") > 0 || location.href.indexOf("/kinh-nghiem-hay") > 0 || location.href.indexOf("/chinh-sach-giao-hang") > 0 || location.href.indexOf("/lien-he") > 0 || location.href.indexOf("/huong-dan-mua-hang") > 0 || location.href.indexOf("/quy-che-hoat-dong") > 0 || location.href.indexOf("/he-thong-sieu-thi") > 0 || location.href.indexOf("/dat-mua-phieu-mua-hang") > 0 || location.href.indexOf("/thu-mua-san-pham") > 0 || location.href.indexOf("/gioi-thieu") > 0, !r && i.indexOf(n.toString()) > -1 && (window.location.href = "/combo-mua-dich")) }

function initPopupToolLocation() { $(".showPopupLocation").click(function() { $("header .locationContainer .locationUser .location_left").click() });
    $(".closePopupTool").click(function() { $.ajax({ url: "/aj/Shared/ClosePopupLocationTooltip", type: "POST", success: function() { $(".popup-location-container").remove();
                $("header .locationContainer .tooltip").remove() }, error: function() {} }) }) }

function LoadMoreHomeData() { var i = parseInt($(".colcontent #maxPage").val()),
        n, t;
    loadingMoreLine || $(".colcontent #pageIndex").val() >= i || (loadingMoreLine = !0, n = parseInt($(".colcontent #pageIndex").val()), t = parseInt($(".colcontent #pageSize").val()), isNaN(n) && (n = 0), isNaN(t) && (t = 4), $.ajax({ type: "GET", url: "/aj/Home/LoadMoreHomeData", data: { pageIndex: n, pageSize: t }, success: function(t) { var r = JSON.parse(t.Msg),
                u; if (t.Code === 200) { $(".groupfeature").length > 0 ? $(".recomcart").length > 0 && n == 0 ? $(r.html).insertAfter($(".recomcart")) : $(r.html).insertAfter($(".groupfeature").last()) : $(r.html).insertBefore($(".homehews"));
                $(".colcontent #pageIndex").val(n + 1);
                initFillButtonBuy();
                $(".groupfeature .viewmore:not(.viewmore.viewmoreseasion)").on("click", function() { var n = $(this).data("group"),
                        r = $(this).data("categoryids"),
                        u = $(this).data("exclude"),
                        t = $(this).data("groupcategoryid"),
                        f = $("header").data("store"),
                        e = $("#group-" + n),
                        o = e.find(".viewmore").data("loadmore"),
                        i;
                    f == 0 && t == 8686 && o == 1 ? (i = "<div class=locationChooseFresh>Hiện tại các sản phẩm thịt, cá, trứng, rau củ chỉ <b>đang bán thử nghiệm<\/b> tại <b>Thành phố Hồ Chí Minh (trừ Cần giờ) và một số khu vực khác<\/b>, quý khách vui lòng chọn khu vực để Bách Hoá XANH hiển thị sản phẩm chính xác hơn.<\/div>", alertify.alert().set({ closable: !1, message: i, label: "CHỌN KHU VỰC", onok: function() { setTimeout(function() { $("header .locationContainer .locationUser .location_left").click() }, 500) } }).show(!0, "popupChooseLocationFresh"), window.dataLayer.push({ category: "click", event: "LocationRemindFresh", action: "LocationRemindFresh", label: "LocationRemindFresh" })) : (GetMoreSockPriceBox(r, u, n, t), initFillButtonBuy()) });
                $(".colcontent #pageIndex").val() < i && setTimeout(function() { LoadMoreHomeData() }, 4e3);
                performance.navigation.type == 2 && (u = $(r.group).data("cate"), homeback.initcomback(!0, u));
                initFillButtonBuy() } else console.log(r.html);
            loadingMoreLine = !1 }, error: function() {} })) }

function InitowlCarousel() { $slidehome = $(".slide-home");
    $slidehome.owlCarousel({ items: 1, nav: !0, navText: ["", ""], loop: !0, autoplay: !0, autoplayHoverPause: !0, lazyLoad: !0, autoHeight: !1, onInitialized: function() { $slidehome.find("button").addClass("hint") } });
    $slidehome.mouseenter(function() { $slidehome.find("button").removeClass("hint") }).mouseleave(function() { $slidehome.find("button").addClass("hint") });
    $slidehome.on("translate.owl.carousel", function(n) { var t, i;
        idx = n.item.index + 1;
        t = $(".slide-home .owl-item:eq(" + idx + ")").find("img");
        t.hasClass("lazy") && (i = t, i.attr({ src: t.attr("data-src") }).removeAttr("data-src").addClass("loaded")) });
    $(".groupfeature .bannertitle").owlCarousel({ loop: !0, autoplay: !0, items: 1, animateOut: "slideOutUp", animateIn: "slideInUp", autoplayTimeout: 6e3, autoplaySpeed: 2e3, mouseDrag: !1, touchDrag: !1, nav: !1, dots: !1, onInitialized: function() { $(".groupfeature .bannertitle").removeClass("hidden"); var t = $("header .totalProduct").val(),
                n = $(".groupfeature .bannertitle .owl-item:not(.cloned) .totaltitle").text();
            n = n.replace("{total}", t);
            $(".groupfeature .bannertitle .owl-item .totaltitle").html(n) } }); var n = $(".groupfeature.lineSeasion .cate-list");
    n.owlCarousel({ items: 5, nav: !0, navText: ["", ""], loop: !1, autoplay: !1, autoplayHoverPause: !1, lazyLoad: !0, autoHeight: !1 });
    n.on("translate.owl.carousel", function(t) { var i, r;
        idx = t.item.index + 1;
        i = n.find(".owl-item:eq(" + idx + ")").find("img");
        i.hasClass("lazy") && (r = i, r.attr({ src: i.attr("data-src") }).removeAttr("data-src").addClass("loaded")) }) }

function customOwlCarousel(n, t, i) { $newcate = n; var r = $newcate.owlCarousel({ navText: ["", ""], items: i, slideBy: i, nav: !0, dots: !1, loop: !1, lazyLoad: !0, autoplay: !1, autoHeight: !1, onInitialized: function(n) { $newcate.find("button").addClass("hint");
            owlNew[$newcate.attr("id")] = r;
            setTimeout(function() { loadAllNew(n, t) }, 5e3) }, onTranslated: function(n) { var r = n.item.index / i;
            loadAllNew(n, t, r) } });
    $newcate.mouseenter(function() { $newcate.find("button").removeClass("hint") }).mouseleave(function() { $newcate.find("button").addClass("hint") }) }

function loadAllNew(n, t) { if (n.namespace) { n = n.relatedTarget; var r = n.$element.data("categoryids"),
            u = n.$element.data("exclude"),
            i = parseInt(n.$element.attr("data-loadmore")),
            f = parseInt(n.$element.attr("data-total")) / 12;
        i > f || $.get("/aj/Home/" + t, { categoryIds: r, excludes: u, pageIndex: parseInt(i) }, function(t) { var f, o, e, r, u; if (t.Code == 200 && (f = JSON.parse(t.Msg), f.html.trim() != "")) { for (o = $(f.html), e = o.find(".product"), r = 0; r < e.prevObject.length; r++) u = $(e.prevObject[r]), u.hasClass("product") && (u.find("img").removeClass("lazy").addClass("owl-lazy"), n.add(u));
                i++;
                n.$element.removeAttr("data-loadmore");
                n.$element.attr("data-loadmore", i);
                n.refresh() } }) } }

function GetMoreSockPriceBox(n, t, i, r) { if (loading != !0) { var u = $("#group-" + i),
            f = u.find(".viewmore").data("loadmore"),
            e = u.find(".viewmore").data("total"),
            s = u.hasClass("groupfeaturefresh"),
            h = u.hasClass("lineSeasion"),
            o = s ? 8 : 20;
        loading = !0;
        $.ajax({ url: "aj/Home/AjSockPriceBox", type: "GET", data: { categoryIds: n, excludes: t, pageIndex: parseInt(f), groupCategoryId: r }, beforeSend: function() { ajLoading(!0, "Tải dữ liệu.") }, success: function(n) { var t, i, s;
                ajLoading(!1);
                n.Code !== 200 ? alertify.alert(n.Msg) : (t = JSON.parse(n.Msg), u.find("ul").append(t.html), lazy(".cateproduct img.lazy"), u.find(".viewmore").data("loadmore", parseInt(f) + 1), u.find(".viewmore").attr("data-loadmore", parseInt(f) + 1), parseInt(f) == 0 && (totalperiod = t.totalPeriod), i = parseInt(f) + 1, e = r === 9999 || r === 9998 ? e : t.total, i * o <= parseInt(e) ? parseInt(e) - i * o == 0 ? u.find(".viewmore").addClass("hide") : u.find(".viewmore").html("Xem thêm " + (parseInt(e) - i * o + parseInt(totalperiod)) + " sản phẩm khuyến mãi") : u.find(".viewmore").addClass("hide"), f == 0 && $(".groupfeaturefresh .cate-prom").removeClass("hidden"), s = "", u.find(".viewmore.noafter").not("hidden").length > 0 && (s = u.find(".viewmore.noafter")[0].outerHTML), homeback.setProductLocalstore(u.data("cate"), i - 1, t.html, s));
                loading = !1 }, error: function() { ajLoading(!1) } }) } }

function LoadMoreLinePersonalize(n, t, i) { if (!personalizeLoading) $.ajax({ url: "/aj/Home/LinePersonalizeLoadMore", type: "GET", cache: !1, data: { listProducts: n, pageIndex: t, pageSize: i }, beforeSend: function() { ajLoading(!0, "Xem giỏ hàng gợi ý...");
            personalizeLoading = !0 }, success: function(n) { var r, i;
            ajLoading(!1);
            personalizeLoading = !1;
            r = JSON.parse(n.Msg);
            n.Code === 200 && ($(".recomcart .flex ul").append(r.results), lazy("img.lazy"), $(".recomcart .viewmorerecommend").data("page", parseInt(t) + 1), i = parseInt($(".recomcart .viewmorerecommend").data("totalmore")), i = i - r.totalLoad, $(".recomcart .viewmorerecommend").data("totalmore", i), i > 0 ? $(".recomcart .viewmorerecommend").html("Xem thêm " + i + " sản phẩm") : $(".recomcart .viewmorerecommend").hide(), initFillButtonBuy()) }, error: function() { ajLoading(!1) } }) }

function orderReview() { var n = Cookies.get("orderReview");
    n != undefined && $.get("/aj/shared/OrderReview", {}, function(t) { var i = JSON.parse(n),
            r;
        idreview = i.orderReviewCrmOrderId;
        r = "/don-hang/" + i.orderReviewCrmOrderId + "?u=" + i.orderReviewCrmUser + "&h=" + i.orderReviewCrmChecksum;
        t = t.replace("${total}", i.orderReviewTotal).replace("${time}", i.orderReviewTime).replace("${url}", r);
        $("body").append(t);
        $("#back-top").css("bottom", "75px");
        Cookies.remove("orderReview");
        $(".orderReview .close").click(function() { $(".boxOrderReview").remove();
            $("#back-top").css("bottom", "35px") });
        $(".orderReview .left").click(function(n) { n.preventDefault();
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ category: "Ecommerce", event: "xem-lai-don-hang", action: "XemLaiDonHang", label: idreview }); var t = $(".orderReview .left a").data("userid");
            t > 0 ? location.pathname = "/lich-su-mua-hang" : window.open(r) }) }) }

function getlistcateparent(n) { $.ajax({ url: "aj/Home/AjGetCateParent", type: "GET", data: { listCategoryIds: n }, beforeSend: function() { ajLoading(!0, "Tải dữ liệu.") }, success: function(n) { if (ajLoading(!1), n.Code !== 200) alertify.alert(n.Msg);
            else { var i = JSON.parse(n.Msg),
                    t = JSON.parse(i.sjsonparent);
                $(".groupfeaturefresh").find(".cate-prom").html("");
                typeof t != "undefined" && t.length > 0 && $(t).each(function(n, t) { $(".groupfeaturefresh").find(".cate-prom").append("<a href='" + t.Url + "' title='" + t.Name + "' data-count='" + t.Quantity + "'> <span>" + t.Name + "<\/span><\/a>") }) }
            loading = !1 }, error: function() { ajLoading(!1) } }) }

function GetProductFresh(n, t, i, r, u) { var f, o, e;
    loading != !0 && (f = $("#group-" + $(".groupfeature.groupfeaturefresh").data("group")), o = "aj/Home/AjGetFreshProducts", loading = !0, r == undefined && (r = 0), e = 4, $.ajax({ url: o, type: "GET", data: { cateId: n, listCategoryId: t, listCategoryIds: i, pageIndex: r, exclude: u }, beforeSend: function() { ajLoading(!0, "Tải dữ liệu.") }, success: function(t) { var u, o, h, s; if (ajLoading(!1), t.Code === 200) { $(".groupfeature.groupfeaturefresh .cate-list .cate-item").removeClass("active");
                $(".groupfeature.groupfeaturefresh .cate-list .cate-item[data-groupcateid='" + n + "']").addClass("active");
                u = JSON.parse(t.Msg);
                o = JSON.parse(u.sjsonchild);
                $(".groupfeaturefresh").find(".cate-prom").html("");
                o !== null && typeof o != "undefined" && o.length > 0 ? $(o).each(function(n, t) { $(".groupfeaturefresh").find(".cate-prom").append("<a href='" + t.Url + "' title='" + t.Name + "' data-count='" + t.Quantity + "'> <span>" + t.Name + "<\/span><\/a>") }) : (h = JSON.parse(u.sjsonparent), $(h).each(function(n, t) { $(".groupfeaturefresh").find(".cate-prom").append("<a href='" + t.Url + "' title='" + t.Name + "' data-count='" + t.Quantity + "'> <span>" + t.Name + "<\/span><\/a>") }));
                r == 0 ? (f.find("ul.cateproduct").addClass("hidden"), f.find(".viewmore").addClass("hidden"), $(u.html).insertAfter(".groupfeaturefresh .cate-list")) : (f.find("ul.cateproduct:not('.hidden')").append(u.html), f.find("ul.cateproduct:not('.hidden')").find("script").each(function() { eval($(this).text());
                    $(this).remove() }), f.find(".viewmore:not('.hidden')").data("loadmore", parseInt(r) + 1), parseInt(r) == 0 && (totalperiod = u.totalPeriod), s = parseInt(r), s * e <= parseInt(u.total) ? parseInt(u.total) - s * e == 0 ? f.find(".viewmore:not('.hidden')").addClass("hide") : (f.find(".viewmore:not('.hidden')").html("Xem thêm " + (parseInt(u.total) - s * e + parseInt(totalperiod)) + " sản phẩm"), f.find(".viewmore:not('.hidden')").data("page", s + 1)) : f.find(".viewmore:not('.hidden')").addClass("hide"));
                u.total > 0 && $(".groupfeaturefresh .cate-prom").removeClass("hidden");
                lazy(".cateproduct img.lazy");
                $(".groupfeature.groupfeaturefresh .viewmore").on("click", function() { var r = $(this).data("groupcategoryid"),
                        u = $(this).data("cateid"),
                        f = $(this).data("exclude"),
                        n = $(this).data("page"),
                        e = $("header").data("store"),
                        t;
                    e == 0 && n == 2 ? (t = "<div class=locationChooseFresh>Hiện tại các sản phẩm thịt, cá, trứng, rau củ chỉ <b>đang bán thử nghiệm<\/b> tại <b>Thành phố Hồ Chí Minh (trừ Cần giờ) và một số khu vực khác<\/b>, quý khách vui lòng chọn khu vực để Bách Hoá XANH hiển thị sản phẩm chính xác hơn.<\/div>", alertify.alert().set({ closable: !1, message: t, label: "CHỌN KHU VỰC", onok: function() { setTimeout(function() { $("header .locationContainer .locationUser .location_left").click() }, 500) } }).show(!0, "popupChooseLocationFresh"), window.dataLayer.push({ category: "click", event: "LocationRemindFresh", action: "LocationRemindFresh", label: "LocationRemindFresh" })) : GetProductFresh(r, u, i, n, f) });
                InitEventClickProduct() }
            loading = !1 }, error: function() { ajLoading(!1) } })) }

function GetProductSeasion(n, t, i, r, u) { var f, o, e;
    loading != !0 && (f = $("#group-" + $(".groupfeature.lineSeasion").data("group")), o = "aj/Home/AjGetSeasionProducts", loading = !0, r == undefined && (r = 0), e = 8, $.ajax({ url: o, type: "GET", data: { cateId: n, listCategoryId: t, listCategoryIds: i, pageIndex: r, exclude: u }, beforeSend: function() { ajLoading(!0, "Tải dữ liệu.") }, success: function(t) { var i, u;
            ajLoading(!1);
            t.Code !== 200 || ($(".groupfeature.lineSeasion .cate-list .cate-item").removeClass("active"), $(".groupfeature.lineSeasion .cate-list .cate-item[data-groupcateid='" + n + "']").addClass("active"), i = JSON.parse(t.Msg), r == 0 ? (f.find("ul.cateproduct").addClass("hidden"), f.find(".viewmore").addClass("hidden"), $(i.html).insertAfter(".lineSeasion .title")) : (f.find("ul.cateproduct:not('.hidden')").append(i.html), f.find("ul.cateproduct:not('.hidden')").find("script").each(function() { eval($(this).text());
                $(this).remove() }), f.find(".viewmore:not('.hidden')").data("loadmore", parseInt(r) + 1), parseInt(r) == 0 && (totalperiod = i.totalPeriod), u = parseInt(r), u * e <= parseInt(i.total) ? parseInt(i.total) - u * e == 0 ? f.find(".viewmore:not('.hidden')").addClass("hide") : (f.find(".viewmore:not('.hidden')").html("Xem thêm " + (parseInt(i.total) - u * e + parseInt(totalperiod)) + " sản phẩm"), f.find(".viewmore:not('.hidden')").data("page", u + 1)) : f.find(".viewmore:not('.hidden')").addClass("hide")), lazy(".cateproduct img.lazy"), InitEventClickProduct());
            loading = !1 }, error: function() { ajLoading(!1) } })) }

function updateFlashSalesUI(n) { var t, i, r, u, f; if (console.log(n), n != null && n.length > 0 && n.changeStatus !== undefined && n.changeStatus) flashsale.refresh();
    else if (n != null && n.length > 0)
        for (t = 0; t < n.length; t++) typeof $("#countbar-" + n[t].productCode) != "undefined" && (i = $("#countbar-" + n[t].productCode), r = i.data("sum"), r !== undefined && parseInt(r) > 0 && (u = i.find("b").html(), u != undefined && parseInt(u) > n[t].newCount ? n[t].newCount > 0 ? (i.find("b").html(n[t].newCount), f = Math.round(n[t].newCount / r * 100), i.find(".barbg").css("width", f + "%")) : $(".box-countbuy[data-code=" + n[t].productCode + "]").html('<div class="btnfl overtime">Hết suất<\/div>') : $(".box-countbuy[data-code=" + n[t].productCode + "]").html('<div class="btnfl overtime">Hết suất<\/div>'))) }

function ShowPopupOffStore() { var n = typeof Cookies.get("bhx_CovidOffStore") != "undefined" && Cookies.get("bhx_CovidOffStore") == "true"; if (!n) { var t = typeof $("header").data("provid") != "undefined" ? parseInt($("header").data("provid")) : 0,
            i = typeof $("header").data("district") != "undefined" ? parseInt($("header").data("district")) : 0,
            r = typeof $("header").data("ward") != "undefined" ? parseInt($("header").data("ward")) : 0;
        $.ajax({ url: "aj/Shared/ShowPopupOffStore", type: "GET", data: { provID: t, distID: i, wardID: r }, beforeSend: function() { ajLoading(!0, "Tải dữ liệu.") }, success: function(n) { ajLoading(!1);
                n.Code === 204 && alertify.alert().set({ message: "<div class='p-location-mess'>" + n.Msg + "<\/div>", onok: function() { Cookies.set("bhx_CovidOffStore", !0, { expires: 2 }) }, label: "XÁC NHẬN", transition: "fade" }).show(!0, "popup-location-mess");
                loading = !1 }, error: function() { ajLoading(!1) } }) } }
var _extends, _typeof, myVar, preOrder, afterVoucher, timeout, timeoutship, mainSearch, mainNav, bhxusername, flagSubmitContact, bhxSocket, showMsgOffStore, locationHeader, user18plus, provincesearch, personalizeLoading, flashsale, samePromotion, captcha, homeback, boxComboCorona, cash_voucher;
! function(n, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function(n) { if (!n.document) throw new Error("jQuery requires a window with a document"); return t(n) } : t(n) }("undefined" != typeof window ? window : this, function(n, t) { "use strict";

    function br(n, t, i) { var r, e, u = (i = i || f).createElement("script"); if (u.text = n, t)
            for (r in oe)(e = t[r] || t.getAttribute && t.getAttribute(r)) && u.setAttribute(r, e);
        i.head.appendChild(u).parentNode.removeChild(u) }

    function ut(n) { return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? ri[pr.call(n)] || "object" : typeof n }

    function pi(n) { var t = !!n && "length" in n && n.length,
            i = ut(n); return !u(n) && !rt(n) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in n) }

    function c(n, t) { return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase() }

    function bi(n, t, r) { return u(t) ? i.grep(n, function(n, i) { return !!t.call(n, i, n) !== r }) : t.nodeType ? i.grep(n, function(n) { return n === t !== r }) : "string" != typeof t ? i.grep(n, function(n) { return -1 < ii.call(t, n) !== r }) : i.filter(t, n, r) }

    function uu(n, t) { while ((n = n[t]) && 1 !== n.nodeType); return n }

    function et(n) { return n }

    function fi(n) { throw n; }

    function fu(n, t, i, r) { var f; try { n && u(f = n.promise) ? f.call(n).done(t).fail(i) : n && u(f = n.then) ? f.call(n, t, i) : t.apply(void 0, [n].slice(r)) } catch (n) { i.apply(void 0, [n]) } }

    function oi() { f.removeEventListener("DOMContentLoaded", oi);
        n.removeEventListener("load", oi);
        i.ready() }

    function ce(n, t) { return t.toUpperCase() }

    function y(n) { return n.replace(se, "ms-").replace(he, ce) }

    function bt() { this.expando = i.expando + bt.uid++ }

    function ou(n, t, i) { var u, r; if (void 0 === i && 1 === n.nodeType)
            if (u = "data-" + t.replace(ae, "-$&").toLowerCase(), "string" == typeof(i = n.getAttribute(u))) { try { i = "true" === (r = i) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : le.test(r) ? JSON.parse(r) : r) } catch (n) {}
                o.set(n, t, i) } else i = void 0;
        return i }

    function hu(n, t, r, u) { var s, h, c = 20,
            l = u ? function() { return u.cur() } : function() { return i.css(n, t, "") },
            o = l(),
            e = r && r[3] || (i.cssNumber[t] ? "" : "px"),
            f = n.nodeType && (i.cssNumber[t] || "px" !== e && +o) && kt.exec(i.css(n, t)); if (f && f[3] !== e) { for (o /= 2, e = e || f[3], f = +o || 1; c--;) i.style(n, t, f + e), (1 - h) * (1 - (h = l() / o || .5)) <= 0 && (c = 0), f /= h;
            f *= 2;
            i.style(n, t, f + e);
            r = r || [] } return r && (f = +f || +o || 0, s = r[1] ? f + (r[1] + 1) * r[2] : +r[2], u && (u.unit = e, u.start = f, u.end = s)), s }

    function ht(n, t) { for (var h, f, a, s, c, l, e, o = [], u = 0, v = n.length; u < v; u++)(f = n[u]).style && (h = f.style.display, t ? ("none" === h && (o[u] = r.get(f, "display") || null, o[u] || (f.style.display = "")), "" === f.style.display && dt(f) && (o[u] = (e = c = s = void 0, c = (a = f).ownerDocument, l = a.nodeName, (e = ki[l]) || (s = c.body.appendChild(c.createElement(l)), e = i.css(s, "display"), s.parentNode.removeChild(s), "none" === e && (e = "block"), ki[l] = e)))) : "none" !== h && (o[u] = "none", r.set(f, "display", h))); for (u = 0; u < v; u++) null != o[u] && (n[u].style.display = o[u]); return n }

    function s(n, t) { var r; return r = "undefined" != typeof n.getElementsByTagName ? n.getElementsByTagName(t || "*") : "undefined" != typeof n.querySelectorAll ? n.querySelectorAll(t || "*") : [], void 0 === t || t && c(n, t) ? i.merge([n], r) : r }

    function di(n, t) { for (var i = 0, u = n.length; i < u; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval")) }

    function vu(n, t, r, u, f) { for (var e, o, p, a, w, v, c = t.createDocumentFragment(), y = [], l = 0, b = n.length; l < b; l++)
            if ((e = n[l]) || 0 === e)
                if ("object" === ut(e)) i.merge(y, e.nodeType ? [e] : e);
                else if (au.test(e)) { for (o = o || c.appendChild(t.createElement("div")), p = (cu.exec(e) || ["", ""])[1].toLowerCase(), a = h[p] || h._default, o.innerHTML = a[1] + i.htmlPrefilter(e) + a[2], v = a[0]; v--;) o = o.lastChild;
            i.merge(y, o.childNodes);
            (o = c.firstChild).textContent = "" } else y.push(t.createTextNode(e)); for (c.textContent = "", l = 0; e = y[l++];)
            if (u && -1 < i.inArray(e, u)) f && f.push(e);
            else if (w = st(e), o = s(c.appendChild(e), "script"), w && di(o), r)
            for (v = 0; e = o[v++];) lu.test(e.type || "") && r.push(e); return c }

    function ct() { return !0 }

    function lt() { return !1 }

    function we(n, t) { return n === function() { try { return f.activeElement } catch (n) {} }() == ("focus" === t) }

    function gi(n, t, r, u, f, e) { var o, s; if ("object" == typeof t) { for (s in "string" != typeof r && (u = u || r, r = void 0), t) gi(n, s, r, u, t[s], e); return n } if (null == u && null == f ? (f = r, u = r = void 0) : null == f && ("string" == typeof r ? (f = u, u = void 0) : (f = u, u = r, r = void 0)), !1 === f) f = lt;
        else if (!f) return n; return 1 === e && (o = f, (f = function(n) { return i().off(n), o.apply(this, arguments) }).guid = o.guid || (o.guid = i.guid++)), n.each(function() { i.event.add(this, t, f, u, r) }) }

    function hi(n, t, u) { u ? (r.set(n, t, !1), i.event.add(n, t, { namespace: !1, handler: function(n) { var o, e, f = r.get(this, t); if (1 & n.isTrigger && this[t]) { if (f.length)(i.event.special[t] || {}).delegateType && n.stopPropagation();
                    else if (f = k.call(arguments), r.set(this, t, f), o = u(this, t), this[t](), f !== (e = r.get(this, t)) || o ? r.set(this, t, !1) : e = {}, f !== e) return n.stopImmediatePropagation(), n.preventDefault(), e.value } else f.length && (r.set(this, t, { value: i.event.trigger(i.extend(f[0], i.Event.prototype), f.slice(1), this) }), n.stopImmediatePropagation()) } })) : void 0 === r.get(n, t) && i.event.add(n, t, ct) }

    function pu(n, t) { return c(n, "table") && c(11 !== t.nodeType ? t : t.firstChild, "tr") && i(n).children("tbody")[0] || n }

    function ge(n) { return n.type = (null !== n.getAttribute("type")) + "/" + n.type, n }

    function no(n) { return "true/" === (n.type || "").slice(0, 5) ? n.type = n.type.slice(5) : n.removeAttribute("type"), n }

    function wu(n, t) { var u, s, f, h, c, e; if (1 === t.nodeType) { if (r.hasData(n) && (e = r.get(n).events))
                for (f in r.remove(t, "handle events"), e)
                    for (u = 0, s = e[f].length; u < s; u++) i.event.add(t, f, e[f][u]);
            o.hasData(n) && (h = o.access(n), c = i.extend({}, h), o.set(t, c)) } }

    function at(n, t, f, o) { t = yr(t); var a, b, l, v, h, y, c = 0,
            p = n.length,
            d = p - 1,
            w = t[0],
            k = u(w); if (k || 1 < p && "string" == typeof w && !e.checkClone && ke.test(w)) return n.each(function(i) { var r = n.eq(i);
            k && (t[0] = w.call(this, i, r.html()));
            at(r, t, f, o) }); if (p && (b = (a = vu(t, n[0].ownerDocument, !1, n, o)).firstChild, 1 === a.childNodes.length && (a = b), b || o)) { for (v = (l = i.map(s(a, "script"), ge)).length; c < p; c++) h = a, c !== d && (h = i.clone(h, !0, !0), v && i.merge(l, s(h, "script"))), f.call(n[c], h, c); if (v)
                for (y = l[l.length - 1].ownerDocument, i.map(l, no), c = 0; c < v; c++) h = l[c], lu.test(h.type || "") && !r.access(h, "globalEval") && i.contains(y, h) && (h.src && "module" !== (h.type || "").toLowerCase() ? i._evalUrl && !h.noModule && i._evalUrl(h.src, { nonce: h.nonce || h.getAttribute("nonce") }, y) : br(h.textContent.replace(de, ""), h, y)) } return n }

    function bu(n, t, r) { for (var u, e = t ? i.filter(t, n) : n, f = 0; null != (u = e[f]); f++) r || 1 !== u.nodeType || i.cleanData(s(u)), u.parentNode && (r && st(u) && di(s(u, "script")), u.parentNode.removeChild(u)); return n }

    function ni(n, t, r) { var o, s, h, f, u = n.style; return (r = r || ci(n)) && ("" !== (f = r.getPropertyValue(t) || r[t]) || st(n) || (f = i.style(n, t)), !e.pixelBoxStyles() && nr.test(f) && to.test(t) && (o = u.width, s = u.minWidth, h = u.maxWidth, u.minWidth = u.maxWidth = u.width = f, f = r.width, u.width = o, u.minWidth = s, u.maxWidth = h)), void 0 !== f ? f + "" : f }

    function du(n, t) { return { get: function() { if (!n()) return (this.get = t).apply(this, arguments);
                delete this.get } } }

    function tr(n) { var t = i.cssProps[n] || tf[n]; return t || (n in nf ? n : tf[n] = function(n) { for (var i = n[0].toUpperCase() + n.slice(1), t = gu.length; t--;)
                if ((n = gu[t] + i) in nf) return n }(n) || n) }

    function ff(n, t, i) { var r = kt.exec(t); return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t }

    function ir(n, t, r, u, f, e) { var o = "width" === t ? 1 : 0,
            h = 0,
            s = 0; if (r === (u ? "border" : "content")) return 0; for (; o < 4; o += 2) "margin" === r && (s += i.css(n, r + b[o], !0, f)), u ? ("content" === r && (s -= i.css(n, "padding" + b[o], !0, f)), "margin" !== r && (s -= i.css(n, "border" + b[o] + "Width", !0, f))) : (s += i.css(n, "padding" + b[o], !0, f), "padding" !== r ? s += i.css(n, "border" + b[o] + "Width", !0, f) : h += i.css(n, "border" + b[o] + "Width", !0, f)); return !u && 0 <= e && (s += Math.max(0, Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - e - s - h - .5)) || 0), s }

    function ef(n, t, r) { var f = ci(n),
            o = (!e.boxSizingReliable() || r) && "border-box" === i.css(n, "boxSizing", !1, f),
            s = o,
            u = ni(n, t, f),
            h = "offset" + t[0].toUpperCase() + t.slice(1); if (nr.test(u)) { if (!r) return u;
            u = "auto" } return (!e.boxSizingReliable() && o || !e.reliableTrDimensions() && c(n, "tr") || "auto" === u || !parseFloat(u) && "inline" === i.css(n, "display", !1, f)) && n.getClientRects().length && (o = "border-box" === i.css(n, "boxSizing", !1, f), (s = h in n) && (u = n[h])), (u = parseFloat(u) || 0) + ir(n, t, r || (o ? "border" : "content"), s, f, u) + "px" }

    function a(n, t, i, r, u) { return new a.prototype.init(n, t, i, r, u) }

    function rr() { li && (!1 === f.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(rr) : n.setTimeout(rr, i.fx.interval), i.fx.tick()) }

    function cf() { return n.setTimeout(function() { vt = void 0 }), vt = Date.now() }

    function ai(n, t) { var u, r = 0,
            i = { height: n }; for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (u = b[r])] = i["padding" + u] = n; return t && (i.opacity = i.width = n), i }

    function lf(n, t, i) { for (var u, f = (v.tweeners[t] || []).concat(v.tweeners["*"]), r = 0, e = f.length; r < e; r++)
            if (u = f[r].call(i, t, n)) return u }

    function v(n, t, r) { var o, s, h = 0,
            a = v.prefilters.length,
            e = i.Deferred().always(function() { delete l.elem }),
            l = function() { if (s) return !1; for (var o = vt || cf(), t = Math.max(0, f.startTime + f.duration - o), i = 1 - (t / f.duration || 0), r = 0, u = f.tweens.length; r < u; r++) f.tweens[r].run(i); return e.notifyWith(n, [f, i, t]), i < 1 && u ? t : (u || e.notifyWith(n, [f, 1, 0]), e.resolveWith(n, [f]), !1) },
            f = e.promise({ elem: n, props: i.extend({}, t), opts: i.extend(!0, { specialEasing: {}, easing: i.easing._default }, r), originalProperties: t, originalOptions: r, startTime: vt || cf(), duration: r.duration, tweens: [], createTween: function(t, r) { var u = i.Tween(n, f.opts, t, r, f.opts.specialEasing[t] || f.opts.easing); return f.tweens.push(u), u }, stop: function(t) { var i = 0,
                        r = t ? f.tweens.length : 0; if (s) return this; for (s = !0; i < r; i++) f.tweens[i].run(1); return t ? (e.notifyWith(n, [f, 1, 0]), e.resolveWith(n, [f, t])) : e.rejectWith(n, [f, t]), this } }),
            c = f.props; for (! function(n, t) { var r, f, e, u, o; for (r in n)
                    if (e = t[f = y(r)], u = n[r], Array.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), (o = i.cssHooks[f]) && "expand" in o)
                        for (r in u = o.expand(u), delete n[f], u) r in n || (n[r] = u[r], t[r] = e);
                    else t[f] = e }(c, f.opts.specialEasing); h < a; h++)
            if (o = v.prefilters[h].call(f, n, c, f.opts)) return u(o.stop) && (i._queueHooks(f.elem, f.opts.queue).stop = o.stop.bind(o)), o;
        return i.map(c, lf, f), u(f.opts.start) && f.opts.start.call(n, f), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always), i.fx.timer(i.extend(l, { elem: n, anim: f, queue: f.opts.queue })), f }

    function tt(n) { return (n.match(l) || []).join(" ") }

    function it(n) { return n.getAttribute && n.getAttribute("class") || "" }

    function ur(n) { return Array.isArray(n) ? n : "string" == typeof n && n.match(l) || [] }

    function sr(n, t, r, u) { var f; if (Array.isArray(t)) i.each(t, function(t, i) { r || uo.test(n) ? u(n, i) : sr(n + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, r, u) });
        else if (r || "object" !== ut(t)) u(n, t);
        else
            for (f in t) sr(n + "[" + f + "]", t[f], r, u) }

    function gf(n) { return function(t, i) { "string" != typeof t && (i = t, t = "*"); var r, f = 0,
                e = t.toLowerCase().match(l) || []; if (u(i))
                while (r = e[f++]) "+" === r[0] ? (r = r.slice(1) || "*", (n[r] = n[r] || []).unshift(i)) : (n[r] = n[r] || []).push(i) } }

    function ne(n, t, r, u) {
        function e(s) { var h; return f[s] = !0, i.each(n[s] || [], function(n, i) { var s = i(t, r, u); return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s), e(s), !1) }), h } var f = {},
            o = n === hr; return e(t.dataTypes[0]) || !f["*"] && e("*") }

    function lr(n, t) { var r, u, f = i.ajaxSettings.flatOptions || {}; for (r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]); return u && i.extend(!0, n, u), n } var p = [],
        vr = Object.getPrototypeOf,
        k = p.slice,
        yr = p.flat ? function(n) { return p.flat.call(n) } : function(n) { return p.concat.apply([], n) },
        yi = p.push,
        ii = p.indexOf,
        ri = {},
        pr = ri.toString,
        ui = ri.hasOwnProperty,
        wr = ui.toString,
        ee = wr.call(Object),
        e = {},
        u = function(n) { return "function" == typeof n && "number" != typeof n.nodeType },
        rt = function(n) { return null != n && n === n.window },
        f = n.document,
        oe = { type: !0, src: !0, nonce: !0, noModule: !0 },
        kr = "3.5.1",
        i = function(n, t) { return new i.fn.init(n, t) },
        d, wi, nu, tu, iu, ru, l, eu, ei, ot, dt, ki, h, au, vt, li, yt, of, sf, hf, af, pt, vf, yf, pf, fr, er, te, wt, ie, ar, vi, re, ue, fe;
    i.fn = i.prototype = { jquery: kr, constructor: i, length: 0, toArray: function() { return k.call(this) }, get: function(n) { return null == n ? k.call(this) : n < 0 ? this[n + this.length] : this[n] }, pushStack: function(n) { var t = i.merge(this.constructor(), n); return t.prevObject = this, t }, each: function(n) { return i.each(this, n) }, map: function(n) { return this.pushStack(i.map(this, function(t, i) { return n.call(t, i, t) })) }, slice: function() { return this.pushStack(k.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, even: function() { return this.pushStack(i.grep(this, function(n, t) { return (t + 1) % 2 })) }, odd: function() { return this.pushStack(i.grep(this, function(n, t) { return t % 2 })) }, eq: function(n) { var i = this.length,
                t = +n + (n < 0 ? i : 0); return this.pushStack(0 <= t && t < i ? [this[t]] : []) }, end: function() { return this.prevObject || this.constructor() }, push: yi, sort: p.sort, splice: p.splice };
    i.extend = i.fn.extend = function() { var s, f, e, t, o, c, n = arguments[0] || {},
            r = 1,
            l = arguments.length,
            h = !1; for ("boolean" == typeof n && (h = n, n = arguments[r] || {}, r++), "object" == typeof n || u(n) || (n = {}), r === l && (n = this, r--); r < l; r++)
            if (null != (s = arguments[r]))
                for (f in s) t = s[f], "__proto__" !== f && n !== t && (h && t && (i.isPlainObject(t) || (o = Array.isArray(t))) ? (e = n[f], c = o && !Array.isArray(e) ? [] : o || i.isPlainObject(e) ? e : {}, o = !1, n[f] = i.extend(h, c, t)) : void 0 !== t && (n[f] = t));
        return n };
    i.extend({ expando: "jQuery" + (kr + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(n) { throw new Error(n); }, noop: function() {}, isPlainObject: function(n) { var t, i; return !(!n || "[object Object]" !== pr.call(n)) && (!(t = vr(n)) || "function" == typeof(i = ui.call(t, "constructor") && t.constructor) && wr.call(i) === ee) }, isEmptyObject: function(n) { for (var t in n) return !1; return !0 }, globalEval: function(n, t, i) { br(n, { nonce: t && t.nonce }, i) }, each: function(n, t) { var r, i = 0; if (pi(n)) { for (r = n.length; i < r; i++)
                    if (!1 === t.call(n[i], i, n[i])) break } else
                for (i in n)
                    if (!1 === t.call(n[i], i, n[i])) break; return n }, makeArray: function(n, t) { var r = t || []; return null != n && (pi(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : yi.call(r, n)), r }, inArray: function(n, t, i) { return null == t ? -1 : ii.call(t, n, i) }, merge: function(n, t) { for (var u = +t.length, i = 0, r = n.length; i < u; i++) n[r++] = t[i]; return n.length = r, n }, grep: function(n, t, i) { for (var u = [], r = 0, f = n.length, e = !i; r < f; r++) !t(n[r], r) !== e && u.push(n[r]); return u }, map: function(n, t, i) { var e, u, r = 0,
                f = []; if (pi(n))
                for (e = n.length; r < e; r++) null != (u = t(n[r], r, i)) && f.push(u);
            else
                for (r in n) null != (u = t(n[r], r, i)) && f.push(u); return yr(f) }, guid: 1, support: e }); "function" == typeof Symbol && (i.fn[Symbol.iterator] = p[Symbol.iterator]);
    i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, t) { ri["[object " + t + "]"] = t.toLowerCase() });
    d = function(n) {
        function u(n, t, r, u) { var s, y, c, l, p, w, d, v = t && t.ownerDocument,
                a = t ? t.nodeType : 9; if (r = r || [], "string" != typeof n || !n || 1 !== a && 9 !== a && 11 !== a) return r; if (!u && (b(t), t = t || i, h)) { if (11 !== a && (p = ar.exec(n)))
                    if (s = p[1]) { if (9 === a) { if (!(c = t.getElementById(s))) return r; if (c.id === s) return r.push(c), r } else if (v && (c = v.getElementById(s)) && et(t, c) && c.id === s) return r.push(c), r } else { if (p[2]) return k.apply(r, t.getElementsByTagName(n)), r; if ((s = p[3]) && f.getElementsByClassName && t.getElementsByClassName) return k.apply(r, t.getElementsByClassName(s)), r }
                if (f.qsa && !lt[n + " "] && (!o || !o.test(n)) && (1 !== a || "object" !== t.nodeName.toLowerCase())) { if (d = n, v = t, 1 === a && (er.test(n) || yi.test(n))) { for ((v = ti.test(n) && ri(t.parentNode) || t) === t && f.scope || ((l = t.getAttribute("id")) ? l = l.replace(pi, wi) : t.setAttribute("id", l = e)), y = (w = ft(n)).length; y--;) w[y] = (l ? "#" + l : ":scope") + " " + pt(w[y]);
                        d = w.join(",") } try { return k.apply(r, v.querySelectorAll(d)), r } catch (t) { lt(n, !0) } finally { l === e && t.removeAttribute("id") } } } return si(n.replace(at, "$1"), t, r, u) }

        function yt() { var n = []; return function i(r, u) { return n.push(r + " ") > t.cacheLength && delete i[n.shift()], i[r + " "] = u } }

        function l(n) { return n[e] = !0, n }

        function a(n) { var t = i.createElement("fieldset"); try { return !!n(t) } catch (n) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t);
                t = null } }

        function ii(n, i) { for (var r = n.split("|"), u = r.length; u--;) t.attrHandle[r[u]] = i }

        function ki(n, t) { var i = t && n,
                r = i && 1 === n.nodeType && 1 === t.nodeType && n.sourceIndex - t.sourceIndex; if (r) return r; if (i)
                while (i = i.nextSibling)
                    if (i === t) return -1;
            return n ? 1 : -1 }

        function yr(n) { return function(t) { return "input" === t.nodeName.toLowerCase() && t.type === n } }

        function pr(n) { return function(t) { var i = t.nodeName.toLowerCase(); return ("input" === i || "button" === i) && t.type === n } }

        function di(n) { return function(t) { return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === n : t.disabled === n : t.isDisabled === n || t.isDisabled !== !n && vr(t) === n : t.disabled === n : "label" in t && t.disabled === n } }

        function it(n) { return l(function(t) { return t = +t, l(function(i, r) { for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u])) }) }) }

        function ri(n) { return n && "undefined" != typeof n.getElementsByTagName && n }

        function gi() {}

        function pt(n) { for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value; return i }

        function wt(n, t, i) { var r = t.dir,
                u = t.next,
                f = u || r,
                o = i && "parentNode" === f,
                s = nr++; return t.first ? function(t, i, u) { while (t = t[r])
                    if (1 === t.nodeType || o) return n(t, i, u);
                return !1 } : function(t, i, h) { var c, l, a, y = [v, s]; if (h) { while (t = t[r])
                        if ((1 === t.nodeType || o) && n(t, i, h)) return !0 } else
                    while (t = t[r])
                        if (1 === t.nodeType || o)
                            if (l = (a = t[e] || (t[e] = {}))[t.uniqueID] || (a[t.uniqueID] = {}), u && u === t.nodeName.toLowerCase()) t = t[r] || t;
                            else { if ((c = l[f]) && c[0] === v && c[1] === s) return y[2] = c[2]; if ((l[f] = y)[2] = n(t, i, h)) return !0 } return !1 } }

        function ui(n) { return 1 < n.length ? function(t, i, r) { for (var u = n.length; u--;)
                    if (!n[u](t, i, r)) return !1;
                return !0 } : n[0] }

        function bt(n, t, i, r, u) { for (var e, o = [], f = 0, s = n.length, h = null != t; f < s; f++)(e = n[f]) && (i && !i(e, r, u) || (o.push(e), h && t.push(f))); return o }

        function fi(n, t, i, r, f, o) { return r && !r[e] && (r = fi(r)), f && !f[e] && (f = fi(f, o)), l(function(e, o, s, h) { var a, l, v, w = [],
                    p = [],
                    b = o.length,
                    d = e || function(n, t, i) { for (var r = 0, f = t.length; r < f; r++) u(n, t[r], i); return i }(t || "*", s.nodeType ? [s] : s, []),
                    y = !n || !e && t ? d : bt(d, w, n, s, h),
                    c = i ? f || (e ? n : b || r) ? [] : o : y; if (i && i(y, c, s, h), r)
                    for (a = bt(c, p), r(a, [], s, h), l = a.length; l--;)(v = a[l]) && (c[p[l]] = !(y[p[l]] = v)); if (e) { if (f || n) { if (f) { for (a = [], l = c.length; l--;)(v = c[l]) && a.push(y[l] = v);
                            f(null, c = [], a, h) } for (l = c.length; l--;)(v = c[l]) && -1 < (a = f ? nt(e, v) : w[l]) && (e[a] = !(o[a] = v)) } } else c = bt(c === o ? c.splice(b, c.length) : c), f ? f(null, o, c, h) : k.apply(o, c) }) }

        function ei(n) { for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = wt(function(n) { return n === o }, c, !0), a = wt(function(n) { return -1 < nt(o, n) }, c, !0), f = [function(n, t, i) { var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i)); return o = null, r }]; i < s; i++)
                if (u = t.relative[n[i].type]) f = [wt(ui(f), u)];
                else { if ((u = t.filter[n[i].type].apply(null, n[i].matches))[e]) { for (r = ++i; r < s; r++)
                            if (t.relative[n[r].type]) break;
                        return fi(1 < i && ui(f), 1 < i && pt(n.slice(0, i - 1).concat({ value: " " === n[i - 2].type ? "*" : "" })).replace(at, "$1"), u, i < r && ei(n.slice(i, r)), r < s && ei(n = n.slice(r)), r < s && pt(n)) }
                    f.push(u) }
            return ui(f) } var rt, f, t, st, oi, ft, kt, si, ht, w, ut, b, i, s, h, o, d, ct, et, e = "sizzle" + 1 * new Date,
            c = n.document,
            v = 0,
            nr = 0,
            hi = yt(),
            ci = yt(),
            li = yt(),
            lt = yt(),
            dt = function(n, t) { return n === t && (ut = !0), 0 },
            tr = {}.hasOwnProperty,
            g = [],
            ir = g.pop,
            rr = g.push,
            k = g.push,
            ai = g.slice,
            nt = function(n, t) { for (var i = 0, r = n.length; i < r; i++)
                    if (n[i] === t) return i;
                return -1 },
            gt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            r = "[\\x20\\t\\r\\n\\f]",
            tt = "(?:\\\\[\\da-fA-F]{1,6}" + r + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            vi = "\\[" + r + "*(" + tt + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + r + "*\\]",
            ni = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + vi + ")*)|.*)\\)|)",
            ur = new RegExp(r + "+", "g"),
            at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
            fr = new RegExp("^" + r + "*," + r + "*"),
            yi = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
            er = new RegExp(r + "|>"),
            or = new RegExp(ni),
            sr = new RegExp("^" + tt + "$"),
            vt = { ID: new RegExp("^#(" + tt + ")"), CLASS: new RegExp("^\\.(" + tt + ")"), TAG: new RegExp("^(" + tt + "|[*])"), ATTR: new RegExp("^" + vi), PSEUDO: new RegExp("^" + ni), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)", "i"), bool: new RegExp("^(?:" + gt + ")$", "i"), needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)", "i") },
            hr = /HTML$/i,
            cr = /^(?:input|select|textarea|button)$/i,
            lr = /^h\d$/i,
            ot = /^[^{]+\{\s*\[native \w/,
            ar = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ti = /[+~]/,
            y = new RegExp("\\\\[\\da-fA-F]{1,6}" + r + "?|\\\\([^\\r\\n\\f])", "g"),
            p = function(n, t) { var i = "0x" + n.slice(1) - 65536; return t || (i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)) },
            pi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            wi = function(n, t) { return t ? "\0" === n ? "�" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n },
            bi = function() { b() },
            vr = wt(function(n) { return !0 === n.disabled && "fieldset" === n.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" }); try { k.apply(g = ai.call(c.childNodes), c.childNodes);
            g[c.childNodes.length].nodeType } catch (rt) { k = { apply: g.length ? function(n, t) { rr.apply(n, ai.call(t)) } : function(n, t) { for (var i = n.length, r = 0; n[i++] = t[r++];);
                    n.length = i - 1 } } } for (rt in f = u.support = {}, oi = u.isXML = function(n) { var i = n.namespaceURI,
                    t = (n.ownerDocument || n).documentElement; return !hr.test(i || t && t.nodeName || "HTML") }, b = u.setDocument = function(n) { var v, u, l = n ? n.ownerDocument || n : c; return l != i && 9 === l.nodeType && l.documentElement && (s = (i = l).documentElement, h = !oi(i), c != i && (u = i.defaultView) && u.top !== u && (u.addEventListener ? u.addEventListener("unload", bi, !1) : u.attachEvent && u.attachEvent("onunload", bi)), f.scope = a(function(n) { return s.appendChild(n).appendChild(i.createElement("div")), "undefined" != typeof n.querySelectorAll && !n.querySelectorAll(":scope fieldset div").length }), f.attributes = a(function(n) { return n.className = "i", !n.getAttribute("className") }), f.getElementsByTagName = a(function(n) { return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length }), f.getElementsByClassName = ot.test(i.getElementsByClassName), f.getById = a(function(n) { return s.appendChild(n).id = e, !i.getElementsByName || !i.getElementsByName(e).length }), f.getById ? (t.filter.ID = function(n) { var t = n.replace(y, p); return function(n) { return n.getAttribute("id") === t } }, t.find.ID = function(n, t) { if ("undefined" != typeof t.getElementById && h) { var i = t.getElementById(n); return i ? [i] : [] } }) : (t.filter.ID = function(n) { var t = n.replace(y, p); return function(n) { var i = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id"); return i && i.value === t } }, t.find.ID = function(n, t) { if ("undefined" != typeof t.getElementById && h) { var r, u, f, i = t.getElementById(n); if (i) { if ((r = i.getAttributeNode("id")) && r.value === n) return [i]; for (f = t.getElementsByName(n), u = 0; i = f[u++];)
                                if ((r = i.getAttributeNode("id")) && r.value === n) return [i] } return [] } }), t.find.TAG = f.getElementsByTagName ? function(n, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(n) : f.qsa ? t.querySelectorAll(n) : void 0 } : function(n, t) { var i, r = [],
                        f = 0,
                        u = t.getElementsByTagName(n); if ("*" === n) { while (i = u[f++]) 1 === i.nodeType && r.push(i); return r } return u }, t.find.CLASS = f.getElementsByClassName && function(n, t) { if ("undefined" != typeof t.getElementsByClassName && h) return t.getElementsByClassName(n) }, d = [], o = [], (f.qsa = ot.test(i.querySelectorAll)) && (a(function(n) { var t;
                    s.appendChild(n).innerHTML = "<a id='" + e + "'><\/a><select id='" + e + "-\r\\' msallowcapture=''><option selected=''><\/option><\/select>";
                    n.querySelectorAll("[msallowcapture^='']").length && o.push("[*^$]=" + r + "*(?:''|\"\")");
                    n.querySelectorAll("[selected]").length || o.push("\\[" + r + "*(?:value|" + gt + ")");
                    n.querySelectorAll("[id~=" + e + "-]").length || o.push("~=");
                    (t = i.createElement("input")).setAttribute("name", "");
                    n.appendChild(t);
                    n.querySelectorAll("[name='']").length || o.push("\\[" + r + "*name" + r + "*=" + r + "*(?:''|\"\")");
                    n.querySelectorAll(":checked").length || o.push(":checked");
                    n.querySelectorAll("a#" + e + "+*").length || o.push(".#.+[+~]");
                    n.querySelectorAll("\\\f");
                    o.push("[\\r\\n\\f]") }), a(function(n) { n.innerHTML = "<a href='' disabled='disabled'><\/a><select disabled='disabled'><option/><\/select>"; var t = i.createElement("input");
                    t.setAttribute("type", "hidden");
                    n.appendChild(t).setAttribute("name", "D");
                    n.querySelectorAll("[name=d]").length && o.push("name" + r + "*[*^$|!~]?=");
                    2 !== n.querySelectorAll(":enabled").length && o.push(":enabled", ":disabled");
                    s.appendChild(n).disabled = !0;
                    2 !== n.querySelectorAll(":disabled").length && o.push(":enabled", ":disabled");
                    n.querySelectorAll("*,:x");
                    o.push(",.*:") })), (f.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && a(function(n) { f.disconnectedMatch = ct.call(n, "*");
                    ct.call(n, "[s!='']:x");
                    d.push("!=", ni) }), o = o.length && new RegExp(o.join("|")), d = d.length && new RegExp(d.join("|")), v = ot.test(s.compareDocumentPosition), et = v || ot.test(s.contains) ? function(n, t) { var r = 9 === n.nodeType ? n.documentElement : n,
                        i = t && t.parentNode; return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i))) } : function(n, t) { if (t)
                        while (t = t.parentNode)
                            if (t === n) return !0;
                    return !1 }, dt = v ? function(n, t) { if (n === t) return ut = !0, 0; var r = !n.compareDocumentPosition - !t.compareDocumentPosition; return r || (1 & (r = (n.ownerDocument || n) == (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(n) === r ? n == i || n.ownerDocument == c && et(c, n) ? -1 : t == i || t.ownerDocument == c && et(c, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : 4 & r ? -1 : 1) } : function(n, t) { if (n === t) return ut = !0, 0; var r, u = 0,
                        o = n.parentNode,
                        s = t.parentNode,
                        f = [n],
                        e = [t]; if (!o || !s) return n == i ? -1 : t == i ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0; if (o === s) return ki(n, t); for (r = n; r = r.parentNode;) f.unshift(r); for (r = t; r = r.parentNode;) e.unshift(r); while (f[u] === e[u]) u++; return u ? ki(f[u], e[u]) : f[u] == c ? -1 : e[u] == c ? 1 : 0 }), i }, u.matches = function(n, t) { return u(n, null, null, t) }, u.matchesSelector = function(n, t) { if (b(n), f.matchesSelector && h && !lt[t + " "] && (!d || !d.test(t)) && (!o || !o.test(t))) try { var r = ct.call(n, t); if (r || f.disconnectedMatch || n.document && 11 !== n.document.nodeType) return r } catch (n) { lt(t, !0) }
                return 0 < u(t, i, null, [n]).length }, u.contains = function(n, t) { return (n.ownerDocument || n) != i && b(n), et(n, t) }, u.attr = function(n, r) {
                (n.ownerDocument || n) != i && b(n); var e = t.attrHandle[r.toLowerCase()],
                    u = e && tr.call(t.attrHandle, r.toLowerCase()) ? e(n, r, !h) : void 0; return void 0 !== u ? u : f.attributes || !h ? n.getAttribute(r) : (u = n.getAttributeNode(r)) && u.specified ? u.value : null }, u.escape = function(n) { return (n + "").replace(pi, wi) }, u.error = function(n) { throw new Error("Syntax error, unrecognized expression: " + n); }, u.uniqueSort = function(n) { var r, u = [],
                    t = 0,
                    i = 0; if (ut = !f.detectDuplicates, w = !f.sortStable && n.slice(0), n.sort(dt), ut) { while (r = n[i++]) r === n[i] && (t = u.push(i)); while (t--) n.splice(u[t], 1) } return w = null, n }, st = u.getText = function(n) { var r, i = "",
                    u = 0,
                    t = n.nodeType; if (t) { if (1 === t || 9 === t || 11 === t) { if ("string" == typeof n.textContent) return n.textContent; for (n = n.firstChild; n; n = n.nextSibling) i += st(n) } else if (3 === t || 4 === t) return n.nodeValue } else
                    while (r = n[u++]) i += st(r); return i }, (t = u.selectors = { cacheLength: 50, createPseudo: l, match: vt, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(n) { return n[1] = n[1].replace(y, p), n[3] = (n[3] || n[4] || n[5] || "").replace(y, p), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4) }, CHILD: function(n) { return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]), n }, PSEUDO: function(n) { var i, t = !n[6] && n[2]; return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && or.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3)) } }, filter: { TAG: function(n) { var t = n.replace(y, p).toLowerCase(); return "*" === n ? function() { return !0 } : function(n) { return n.nodeName && n.nodeName.toLowerCase() === t } }, CLASS: function(n) { var t = hi[n + " "]; return t || (t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) && hi(n, function(n) { return t.test("string" == typeof n.className && n.className || "undefined" != typeof n.getAttribute && n.getAttribute("class") || "") }) }, ATTR: function(n, t, i) { return function(r) { var f = u.attr(r, n); return null == f ? "!=" === t : !t || (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && -1 < f.indexOf(i) : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? -1 < (" " + f.replace(ur, " ") + " ").indexOf(i) : "|=" === t && (f === i || f.slice(0, i.length + 1) === i + "-")) } }, CHILD: function(n, t, i, r, u) { var s = "nth" !== n.slice(0, 3),
                            o = "last" !== n.slice(-4),
                            f = "of-type" === t; return 1 === r && 0 === u ? function(n) { return !!n.parentNode } : function(t, i, h) { var p, d, y, c, a, w, b = s !== o ? "nextSibling" : "previousSibling",
                                k = t.parentNode,
                                nt = f && t.nodeName.toLowerCase(),
                                g = !h && !f,
                                l = !1; if (k) { if (s) { while (b) { for (c = t; c = c[b];)
                                            if (f ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) return !1;
                                        w = b = "only" === n && !w && "nextSibling" } return !0 } if (w = [o ? k.firstChild : k.lastChild], o && g) { for (l = (a = (p = (d = (y = (c = k)[e] || (c[e] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]) && p[2], c = a && k.childNodes[a]; c = ++a && c && c[b] || (l = a = 0) || w.pop();)
                                        if (1 === c.nodeType && ++l && c === t) { d[n] = [v, a, l]; break } } else if (g && (l = a = (p = (d = (y = (c = t)[e] || (c[e] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]), !1 === l)
                                    while (c = ++a && c && c[b] || (l = a = 0) || w.pop())
                                        if ((f ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) && ++l && (g && ((d = (y = c[e] || (c[e] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] = [v, l]), c === t)) break;
                                return (l -= u) === r || l % r == 0 && 0 <= l / r } } }, PSEUDO: function(n, i) { var f, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n); return r[e] ? r(i) : 1 < r.length ? (f = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, t) { for (var e, u = r(n, i), f = u.length; f--;) n[e = nt(n, u[f])] = !(t[e] = u[f]) }) : function(n) { return r(n, 0, f) }) : r } }, pseudos: { not: l(function(n) { var t = [],
                            r = [],
                            i = kt(n.replace(at, "$1")); return i[e] ? l(function(n, t, r, u) { for (var e, o = i(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(t[f] = e)) }) : function(n, u, f) { return t[0] = n, i(t, null, f, r), t[0] = null, !r.pop() } }), has: l(function(n) { return function(t) { return 0 < u(n, t).length } }), contains: l(function(n) { return n = n.replace(y, p),
                            function(t) { return -1 < (t.textContent || st(t)).indexOf(n) } }), lang: l(function(n) { return sr.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(y, p).toLowerCase(),
                            function(t) { var i;
                                do
                                    if (i = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === n || 0 === i.indexOf(n + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1 } }), target: function(t) { var i = n.location && n.location.hash; return i && i.slice(1) === t.id }, root: function(n) { return n === s }, focus: function(n) { return n === i.activeElement && (!i.hasFocus || i.hasFocus()) && !!(n.type || n.href || ~n.tabIndex) }, enabled: di(!1), disabled: di(!0), checked: function(n) { var t = n.nodeName.toLowerCase(); return "input" === t && !!n.checked || "option" === t && !!n.selected }, selected: function(n) { return n.parentNode && n.parentNode.selectedIndex, !0 === n.selected }, empty: function(n) { for (n = n.firstChild; n; n = n.nextSibling)
                            if (n.nodeType < 6) return !1;
                        return !0 }, parent: function(n) { return !t.pseudos.empty(n) }, header: function(n) { return lr.test(n.nodeName) }, input: function(n) { return cr.test(n.nodeName) }, button: function(n) { var t = n.nodeName.toLowerCase(); return "input" === t && "button" === n.type || "button" === t }, text: function(n) { var t; return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase()) }, first: it(function() { return [0] }), last: it(function(n, t) { return [t - 1] }), eq: it(function(n, t, i) { return [i < 0 ? i + t : i] }), even: it(function(n, t) { for (var i = 0; i < t; i += 2) n.push(i); return n }), odd: it(function(n, t) { for (var i = 1; i < t; i += 2) n.push(i); return n }), lt: it(function(n, t, i) { for (var r = i < 0 ? i + t : t < i ? t : i; 0 <= --r;) n.push(r); return n }), gt: it(function(n, t, i) { for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r); return n }) } }).pseudos.nth = t.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) t.pseudos[rt] = yr(rt); for (rt in { submit: !0, reset: !0 }) t.pseudos[rt] = pr(rt); return gi.prototype = t.filters = t.pseudos, t.setFilters = new gi, ft = u.tokenize = function(n, i) { var e, f, s, o, r, h, c, l = ci[n + " "]; if (l) return i ? 0 : l.slice(0); for (r = n, h = [], c = t.preFilter; r;) { for (o in e && !(f = fr.exec(r)) || (f && (r = r.slice(f[0].length) || r), h.push(s = [])), e = !1, (f = yi.exec(r)) && (e = f.shift(), s.push({ value: e, type: f[0].replace(at, " ") }), r = r.slice(e.length)), t.filter)(f = vt[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({ value: e, type: o, matches: f }), r = r.slice(e.length)); if (!e) break } return i ? r.length : r ? u.error(n) : ci(n, h).slice(0) }, kt = u.compile = function(n, r) { var s, c, a, o, y, p, w = [],
                d = [],
                f = li[n + " "]; if (!f) { for (r || (r = ft(n)), s = r.length; s--;)(f = ei(r[s]))[e] ? w.push(f) : d.push(f);
                (f = li(n, (c = d, o = 0 < (a = w).length, y = 0 < c.length, p = function(n, r, f, e, s) { var l, nt, d, g = 0,
                        p = "0",
                        tt = n && [],
                        w = [],
                        it = ht,
                        rt = n || y && t.find.TAG("*", s),
                        ut = v += null == it ? 1 : Math.random() || .1,
                        ft = rt.length; for (s && (ht = r == i || r || s); p !== ft && null != (l = rt[p]); p++) { if (y && l) { for (nt = 0, r || l.ownerDocument == i || (b(l), f = !h); d = c[nt++];)
                                if (d(l, r || i, f)) { e.push(l); break }
                            s && (v = ut) }
                        o && ((l = !d && l) && g--, n && tt.push(l)) } if (g += p, o && p !== g) { for (nt = 0; d = a[nt++];) d(tt, w, r, f); if (n) { if (0 < g)
                                while (p--) tt[p] || w[p] || (w[p] = ir.call(e));
                            w = bt(w) }
                        k.apply(e, w);
                        s && !n && 0 < w.length && 1 < g + a.length && u.uniqueSort(e) } return s && (v = ut, ht = it), tt }, o ? l(p) : p))).selector = n } return f }, si = u.select = function(n, i, r, u) { var o, f, e, l, a, c = "function" == typeof n && n,
                s = !u && ft(n = c.selector || n); if (r = r || [], 1 === s.length) { if (2 < (f = s[0] = s[0].slice(0)).length && "ID" === (e = f[0]).type && 9 === i.nodeType && h && t.relative[f[1].type]) { if (!(i = (t.find.ID(e.matches[0].replace(y, p), i) || [])[0])) return r;
                    c && (i = i.parentNode);
                    n = n.slice(f.shift().value.length) } for (o = vt.needsContext.test(n) ? 0 : f.length; o--;) { if (e = f[o], t.relative[l = e.type]) break; if ((a = t.find[l]) && (u = a(e.matches[0].replace(y, p), ti.test(f[0].type) && ri(i.parentNode) || i))) { if (f.splice(o, 1), !(n = u.length && pt(f))) return k.apply(r, u), r; break } } } return (c || kt(n, s))(u, i, !h, r, !i || ti.test(n) && ri(i.parentNode) || i), r }, f.sortStable = e.split("").sort(dt).join("") === e, f.detectDuplicates = !!ut, b(), f.sortDetached = a(function(n) { return 1 & n.compareDocumentPosition(i.createElement("fieldset")) }), a(function(n) { return n.innerHTML = "<a href='#'><\/a>", "#" === n.firstChild.getAttribute("href") }) || ii("type|href|height|width", function(n, t, i) { if (!i) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), f.attributes && a(function(n) { return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value") }) || ii("value", function(n, t, i) { if (!i && "input" === n.nodeName.toLowerCase()) return n.defaultValue }), a(function(n) { return null == n.getAttribute("disabled") }) || ii(gt, function(n, t, i) { var r; if (!i) return !0 === n[t] ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null }), u }(n);
    i.find = d;
    i.expr = d.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.uniqueSort = i.unique = d.uniqueSort;
    i.text = d.getText;
    i.isXMLDoc = d.isXML;
    i.contains = d.contains;
    i.escapeSelector = d.escape; var ft = function(n, t, r) { for (var u = [], f = void 0 !== r;
                (n = n[t]) && 9 !== n.nodeType;)
                if (1 === n.nodeType) { if (f && i(n).is(r)) break;
                    u.push(n) }
            return u },
        dr = function(n, t) { for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n); return i },
        gr = i.expr.match.needsContext;
    wi = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    i.filter = function(n, t, r) { var u = t[0]; return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) { return 1 === n.nodeType })) };
    i.fn.extend({ find: function(n) { var t, r, u = this.length,
                f = this; if ("string" != typeof n) return this.pushStack(i(n).filter(function() { for (t = 0; t < u; t++)
                    if (i.contains(f[t], this)) return !0 })); for (r = this.pushStack([]), t = 0; t < u; t++) i.find(n, f[t], r); return 1 < u ? i.uniqueSort(r) : r }, filter: function(n) { return this.pushStack(bi(this, n || [], !1)) }, not: function(n) { return this.pushStack(bi(this, n || [], !0)) }, is: function(n) { return !!bi(this, "string" == typeof n && gr.test(n) ? i(n) : n || [], !1).length } });
    tu = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (i.fn.init = function(n, t, r) { var e, o; if (!n) return this; if (r = r || nu, "string" == typeof n) { if (!(e = "<" === n[0] && ">" === n[n.length - 1] && 3 <= n.length ? [null, n, null] : tu.exec(n)) || !e[1] && t) return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n); if (e[1]) { if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(e[1], t && t.nodeType ? t.ownerDocument || t : f, !0)), wi.test(e[1]) && i.isPlainObject(t))
                    for (e in t) u(this[e]) ? this[e](t[e]) : this.attr(e, t[e]); return this } return (o = f.getElementById(e[2])) && (this[0] = o, this.length = 1), this } return n.nodeType ? (this[0] = n, this.length = 1, this) : u(n) ? void 0 !== r.ready ? r.ready(n) : n(i) : i.makeArray(n, this) }).prototype = i.fn;
    nu = i(f);
    iu = /^(?:parents|prev(?:Until|All))/;
    ru = { children: !0, contents: !0, next: !0, prev: !0 };
    i.fn.extend({ has: function(n) { var t = i(n, this),
                r = t.length; return this.filter(function() { for (var n = 0; n < r; n++)
                    if (i.contains(this, t[n])) return !0 }) }, closest: function(n, t) { var r, f = 0,
                o = this.length,
                u = [],
                e = "string" != typeof n && i(n); if (!gr.test(n))
                for (; f < o; f++)
                    for (r = this[f]; r && r !== t; r = r.parentNode)
                        if (r.nodeType < 11 && (e ? -1 < e.index(r) : 1 === r.nodeType && i.find.matchesSelector(r, n))) { u.push(r); break }
            return this.pushStack(1 < u.length ? i.uniqueSort(u) : u) }, index: function(n) { return n ? "string" == typeof n ? ii.call(i(n), this[0]) : ii.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(n, t) { return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t)))) }, addBack: function(n) { return this.add(null == n ? this.prevObject : this.prevObject.filter(n)) } });
    i.each({ parent: function(n) { var t = n.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(n) { return ft(n, "parentNode") }, parentsUntil: function(n, t, i) { return ft(n, "parentNode", i) }, next: function(n) { return uu(n, "nextSibling") }, prev: function(n) { return uu(n, "previousSibling") }, nextAll: function(n) { return ft(n, "nextSibling") }, prevAll: function(n) { return ft(n, "previousSibling") }, nextUntil: function(n, t, i) { return ft(n, "nextSibling", i) }, prevUntil: function(n, t, i) { return ft(n, "previousSibling", i) }, siblings: function(n) { return dr((n.parentNode || {}).firstChild, n) }, children: function(n) { return dr(n.firstChild) }, contents: function(n) { return null != n.contentDocument && vr(n.contentDocument) ? n.contentDocument : (c(n, "template") && (n = n.content || n), i.merge([], n.childNodes)) } }, function(n, t) { i.fn[n] = function(r, u) { var f = i.map(this, t, r); return "Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), 1 < this.length && (ru[n] || i.uniqueSort(f), iu.test(n) && f.reverse()), this.pushStack(f) } });
    l = /[^\x20\t\r\n\f]+/g;
    i.Callbacks = function(n) { var a, h;
        n = "string" == typeof n ? (a = n, h = {}, i.each(a.match(l) || [], function(n, t) { h[t] = !0 }), h) : i.extend({}, n); var o, r, v, f, t = [],
            s = [],
            e = -1,
            y = function() { for (f = f || n.once, v = o = !0; s.length; e = -1)
                    for (r = s.shift(); ++e < t.length;) !1 === t[e].apply(r[0], r[1]) && n.stopOnFalse && (e = t.length, r = !1);
                n.memory || (r = !1);
                o = !1;
                f && (t = r ? [] : "") },
            c = { add: function() { return t && (r && !o && (e = t.length - 1, s.push(r)), function f(r) { i.each(r, function(i, r) { u(r) ? n.unique && c.has(r) || t.push(r) : r && r.length && "string" !== ut(r) && f(r) }) }(arguments), r && !o && y()), this }, remove: function() { return i.each(arguments, function(n, r) { for (var u; - 1 < (u = i.inArray(r, t, u));) t.splice(u, 1), u <= e && e-- }), this }, has: function(n) { return n ? -1 < i.inArray(n, t) : 0 < t.length }, empty: function() { return t && (t = []), this }, disable: function() { return f = s = [], t = r = "", this }, disabled: function() { return !t }, lock: function() { return f = s = [], r || o || (t = r = ""), this }, locked: function() { return !!f }, fireWith: function(n, t) { return f || (t = [n, (t = t || []).slice ? t.slice() : t], s.push(t), o || y()), this }, fire: function() { return c.fireWith(this, arguments), this }, fired: function() { return !!v } }; return c };
    i.extend({ Deferred: function(t) { var f = [
                    ["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2],
                    ["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"]
                ],
                o = "pending",
                e = { state: function() { return o }, always: function() { return r.done(arguments).fail(arguments), this }, "catch": function(n) { return e.then(null, n) }, pipe: function() { var n = arguments; return i.Deferred(function(t) { i.each(f, function(i, f) { var e = u(n[f[4]]) && n[f[4]];
                                r[f[1]](function() { var n = e && e.apply(this, arguments);
                                    n && u(n.promise) ? n.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[f[0] + "With"](this, e ? [n] : arguments) }) });
                            n = null }).promise() }, then: function(t, r, e) {
                        function s(t, r, f, e) { return function() { var h = this,
                                    c = arguments,
                                    l = function() { var n, i; if (!(t < o)) { if ((n = f.apply(h, c)) === r.promise()) throw new TypeError("Thenable self-resolution");
                                            i = n && ("object" == typeof n || "function" == typeof n) && n.then;
                                            u(i) ? e ? i.call(n, s(o, r, et, e), s(o, r, fi, e)) : (o++, i.call(n, s(o, r, et, e), s(o, r, fi, e), s(o, r, et, r.notifyWith))) : (f !== et && (h = void 0, c = [n]), (e || r.resolveWith)(h, c)) } },
                                    a = e ? l : function() { try { l() } catch (l) { i.Deferred.exceptionHook && i.Deferred.exceptionHook(l, a.stackTrace);
                                            o <= t + 1 && (f !== fi && (h = void 0, c = [l]), r.rejectWith(h, c)) } };
                                t ? a() : (i.Deferred.getStackHook && (a.stackTrace = i.Deferred.getStackHook()), n.setTimeout(a)) } } var o = 0; return i.Deferred(function(n) { f[0][3].add(s(0, n, u(e) ? e : et, n.notifyWith));
                            f[1][3].add(s(0, n, u(t) ? t : et));
                            f[2][3].add(s(0, n, u(r) ? r : fi)) }).promise() }, promise: function(n) { return null != n ? i.extend(n, e) : e } },
                r = {}; return i.each(f, function(n, t) { var i = t[2],
                    u = t[5];
                e[t[1]] = i.add;
                u && i.add(function() { o = u }, f[3 - n][2].disable, f[3 - n][3].disable, f[0][2].lock, f[0][3].lock);
                i.add(t[3].fire);
                r[t[0]] = function() { return r[t[0] + "With"](this === r ? void 0 : this, arguments), this };
                r[t[0] + "With"] = i.fireWith }), e.promise(r), t && t.call(r, r), r }, when: function(n) { var e = arguments.length,
                t = e,
                o = Array(t),
                f = k.call(arguments),
                r = i.Deferred(),
                s = function(n) { return function(t) { o[n] = this;
                        f[n] = 1 < arguments.length ? k.call(arguments) : t;--e || r.resolveWith(o, f) } }; if (e <= 1 && (fu(n, r.done(s(t)).resolve, r.reject, !e), "pending" === r.state() || u(f[t] && f[t].then))) return r.then(); while (t--) fu(f[t], s(t), r.reject); return r.promise() } });
    eu = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    i.Deferred.exceptionHook = function(t, i) { n.console && n.console.warn && t && eu.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i) };
    i.readyException = function(t) { n.setTimeout(function() { throw t; }) };
    ei = i.Deferred();
    i.fn.ready = function(n) { return ei.then(n)["catch"](function(n) { i.readyException(n) }), this };
    i.extend({ isReady: !1, readyWait: 1, ready: function(n) {
            (!0 === n ? --i.readyWait : i.isReady) || (i.isReady = !0) !== n && 0 < --i.readyWait || ei.resolveWith(f, [i]) } });
    i.ready.then = ei.then; "complete" === f.readyState || "loading" !== f.readyState && !f.documentElement.doScroll ? n.setTimeout(i.ready) : (f.addEventListener("DOMContentLoaded", oi), n.addEventListener("load", oi)); var w = function(n, t, r, f, e, o, s) { var h = 0,
                l = n.length,
                c = null == r; if ("object" === ut(r))
                for (h in e = !0, r) w(n, t, h, r[h], !0, o, s);
            else if (void 0 !== f && (e = !0, u(f) || (s = !0), c && (s ? (t.call(n, f), t = null) : (c = t, t = function(n, t, r) { return c.call(i(n), r) })), t))
                for (; h < l; h++) t(n[h], r, s ? f : f.call(n[h], h, t(n[h], r))); return e ? n : c ? t.call(n) : l ? t(n[0], r) : o },
        se = /^-ms-/,
        he = /-([a-z])/g;
    ot = function(n) { return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType };
    bt.uid = 1;
    bt.prototype = { cache: function(n) { var t = n[this.expando]; return t || (t = {}, ot(n) && (n.nodeType ? n[this.expando] = t : Object.defineProperty(n, this.expando, { value: t, configurable: !0 }))), t }, set: function(n, t, i) { var r, u = this.cache(n); if ("string" == typeof t) u[y(t)] = i;
            else
                for (r in t) u[y(r)] = t[r]; return u }, get: function(n, t) { return void 0 === t ? this.cache(n) : n[this.expando] && n[this.expando][y(t)] }, access: function(n, t, i) { return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(n, t) : (this.set(n, t, i), void 0 !== i ? i : t) }, remove: function(n, t) { var u, r = n[this.expando]; if (void 0 !== r) { if (void 0 !== t)
                    for (u = (t = Array.isArray(t) ? t.map(y) : (t = y(t)) in r ? [t] : t.match(l) || []).length; u--;) delete r[t[u]];
                (void 0 === t || i.isEmptyObject(r)) && (n.nodeType ? n[this.expando] = void 0 : delete n[this.expando]) } }, hasData: function(n) { var t = n[this.expando]; return void 0 !== t && !i.isEmptyObject(t) } }; var r = new bt,
        o = new bt,
        le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ae = /[A-Z]/g;
    i.extend({ hasData: function(n) { return o.hasData(n) || r.hasData(n) }, data: function(n, t, i) { return o.access(n, t, i) }, removeData: function(n, t) { o.remove(n, t) }, _data: function(n, t, i) { return r.access(n, t, i) }, _removeData: function(n, t) { r.remove(n, t) } });
    i.fn.extend({ data: function(n, t) { var f, u, e, i = this[0],
                s = i && i.attributes; if (void 0 === n) { if (this.length && (e = o.get(i), 1 === i.nodeType && !r.get(i, "hasDataAttrs"))) { for (f = s.length; f--;) s[f] && 0 === (u = s[f].name).indexOf("data-") && (u = y(u.slice(5)), ou(i, u, e[u]));
                    r.set(i, "hasDataAttrs", !0) } return e } return "object" == typeof n ? this.each(function() { o.set(this, n) }) : w(this, function(t) { var r; if (i && void 0 === t) return void 0 !== (r = o.get(i, n)) ? r : void 0 !== (r = ou(i, n)) ? r : void 0;
                this.each(function() { o.set(this, n, t) }) }, null, t, 1 < arguments.length, null, !0) }, removeData: function(n) { return this.each(function() { o.remove(this, n) }) } });
    i.extend({ queue: function(n, t, u) { var f; if (n) return t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || Array.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || [] }, dequeue: function(n, t) { t = t || "fx"; var r = i.queue(n, t),
                e = r.length,
                u = r.shift(),
                f = i._queueHooks(n, t); "inprogress" === u && (u = r.shift(), e--);
            u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, function() { i.dequeue(n, t) }, f));!e && f && f.empty.fire() }, _queueHooks: function(n, t) { var u = t + "queueHooks"; return r.get(n, u) || r.access(n, u, { empty: i.Callbacks("once memory").add(function() { r.remove(n, [t + "queue", u]) }) }) } });
    i.fn.extend({ queue: function(n, t) { var r = 2; return "string" != typeof n && (t = n, n = "fx", r--), arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function() { var r = i.queue(this, n, t);
                i._queueHooks(this, n); "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n) }) }, dequeue: function(n) { return this.each(function() { i.dequeue(this, n) }) }, clearQueue: function(n) { return this.queue(n || "fx", []) }, promise: function(n, t) { var u, e = 1,
                o = i.Deferred(),
                f = this,
                s = this.length,
                h = function() {--e || o.resolveWith(f, [f]) }; for ("string" != typeof n && (t = n, n = void 0), n = n || "fx"; s--;)(u = r.get(f[s], n + "queueHooks")) && u.empty && (e++, u.empty.add(h)); return h(), o.promise(t) } }); var su = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        kt = new RegExp("^(?:([+-])=|)(" + su + ")([a-z%]*)$", "i"),
        b = ["Top", "Right", "Bottom", "Left"],
        g = f.documentElement,
        st = function(n) { return i.contains(n.ownerDocument, n) },
        ve = { composed: !0 };
    g.getRootNode && (st = function(n) { return i.contains(n.ownerDocument, n) || n.getRootNode(ve) === n.ownerDocument });
    dt = function(n, t) { return "none" === (n = t || n).style.display || "" === n.style.display && st(n) && "none" === i.css(n, "display") };
    ki = {};
    i.fn.extend({ show: function() { return ht(this, !0) }, hide: function() { return ht(this) }, toggle: function(n) { return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() { dt(this) ? i(this).show() : i(this).hide() }) } }); var nt, si, gt = /^(?:checkbox|radio)$/i,
        cu = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        lu = /^$|^module$|\/(?:java|ecma)script/i;
    nt = f.createDocumentFragment().appendChild(f.createElement("div"));
    (si = f.createElement("input")).setAttribute("type", "radio");
    si.setAttribute("checked", "checked");
    si.setAttribute("name", "t");
    nt.appendChild(si);
    e.checkClone = nt.cloneNode(!0).cloneNode(!0).lastChild.checked;
    nt.innerHTML = "<textarea>x<\/textarea>";
    e.noCloneChecked = !!nt.cloneNode(!0).lastChild.defaultValue;
    nt.innerHTML = "<option><\/option>";
    e.option = !!nt.lastChild;
    h = { thead: [1, "<table>", "<\/table>"], col: [2, "<table><colgroup>", "<\/colgroup><\/table>"], tr: [2, "<table><tbody>", "<\/tbody><\/table>"], td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"], _default: [0, "", ""] };
    h.tbody = h.tfoot = h.colgroup = h.caption = h.thead;
    h.th = h.td;
    e.option || (h.optgroup = h.option = [1, "<select multiple='multiple'>", "<\/select>"]);
    au = /<|&#?\w+;/; var ye = /^key/,
        pe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        yu = /^([^.]*)(?:\.(.+)|)/;
    i.event = { global: {}, add: function(n, t, u, f, e) { var p, a, k, v, w, h, s, c, o, b, d, y = r.get(n); if (ot(n))
                for (u.handler && (u = (p = u).handler, e = p.selector), e && i.find.matchesSelector(g, e), u.guid || (u.guid = i.guid++), (v = y.events) || (v = y.events = Object.create(null)), (a = y.handle) || (a = y.handle = function(t) { if ("undefined" != typeof i && i.event.triggered !== t.type) return i.event.dispatch.apply(n, arguments) }), w = (t = (t || "").match(l) || [""]).length; w--;) o = d = (k = yu.exec(t[w]) || [])[1], b = (k[2] || "").split(".").sort(), o && (s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, h = i.extend({ type: o, origType: d, data: f, handler: u, guid: u.guid, selector: e, needsContext: e && i.expr.match.needsContext.test(e), namespace: b.join(".") }, p), (c = v[o]) || ((c = v[o] = []).delegateCount = 0, s.setup && !1 !== s.setup.call(n, f, b, a) || n.addEventListener && n.addEventListener(o, a)), s.add && (s.add.call(n, h), h.handler.guid || (h.handler.guid = u.guid)), e ? c.splice(c.delegateCount++, 0, h) : c.push(h), i.event.global[o] = !0) }, remove: function(n, t, u, f, e) { var y, k, c, v, p, s, h, a, o, b, d, w = r.hasData(n) && r.get(n); if (w && (v = w.events)) { for (p = (t = (t || "").match(l) || [""]).length; p--;)
                    if (o = d = (c = yu.exec(t[p]) || [])[1], b = (c[2] || "").split(".").sort(), o) { for (h = i.event.special[o] || {}, a = v[o = (f ? h.delegateType : h.bindType) || o] || [], c = c[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = y = a.length; y--;) s = a[y], !e && d !== s.origType || u && u.guid !== s.guid || c && !c.test(s.namespace) || f && f !== s.selector && ("**" !== f || !s.selector) || (a.splice(y, 1), s.selector && a.delegateCount--, h.remove && h.remove.call(n, s));
                        k && !a.length && (h.teardown && !1 !== h.teardown.call(n, b, w.handle) || i.removeEvent(n, o, w.handle), delete v[o]) } else
                        for (o in v) i.event.remove(n, o + t[p], u, f, !0);
                i.isEmptyObject(v) && r.remove(n, "handle events") } }, dispatch: function(n) { var u, h, c, e, f, l, s = new Array(arguments.length),
                t = i.event.fix(n),
                a = (r.get(this, "events") || Object.create(null))[t.type] || [],
                o = i.event.special[t.type] || {}; for (s[0] = t, u = 1; u < arguments.length; u++) s[u] = arguments[u]; if (t.delegateTarget = this, !o.preDispatch || !1 !== o.preDispatch.call(this, t)) { for (l = i.event.handlers.call(this, t, a), u = 0;
                    (e = l[u++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = e.elem, h = 0;
                        (f = e.handlers[h++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !1 !== f.namespace && !t.rnamespace.test(f.namespace) || (t.handleObj = f, t.data = f.data, void 0 !== (c = ((i.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, s)) && !1 === (t.result = c) && (t.preventDefault(), t.stopPropagation())); return o.postDispatch && o.postDispatch.call(this, t), t.result } }, handlers: function(n, t) { var f, h, u, e, o, c = [],
                s = t.delegateCount,
                r = n.target; if (s && r.nodeType && !("click" === n.type && 1 <= n.button))
                for (; r !== this; r = r.parentNode || this)
                    if (1 === r.nodeType && ("click" !== n.type || !0 !== r.disabled)) { for (e = [], o = {}, f = 0; f < s; f++) void 0 === o[u = (h = t[f]).selector + " "] && (o[u] = h.needsContext ? -1 < i(u, this).index(r) : i.find(u, this, null, [r]).length), o[u] && e.push(h);
                        e.length && c.push({ elem: r, handlers: e }) }
            return r = this, s < t.length && c.push({ elem: r, handlers: t.slice(s) }), c }, addProp: function(n, t) { Object.defineProperty(i.Event.prototype, n, { enumerable: !0, configurable: !0, get: u(t) ? function() { if (this.originalEvent) return t(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[n] }, set: function(t) { Object.defineProperty(this, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) } }) }, fix: function(n) { return n[i.expando] ? n : new i.Event(n) }, special: { load: { noBubble: !0 }, click: { setup: function(n) { var t = this || n; return gt.test(t.type) && t.click && c(t, "input") && hi(t, "click", ct), !1 }, trigger: function(n) { var t = this || n; return gt.test(t.type) && t.click && c(t, "input") && hi(t, "click"), !0 }, _default: function(n) { var t = n.target; return gt.test(t.type) && t.click && c(t, "input") && r.get(t, "click") || c(t, "a") } }, beforeunload: { postDispatch: function(n) { void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result) } } } };
    i.removeEvent = function(n, t, i) { n.removeEventListener && n.removeEventListener(t, i) };
    i.Event = function(n, t) { if (!(this instanceof i.Event)) return new i.Event(n, t);
        n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && !1 === n.returnValue ? ct : lt, this.target = n.target && 3 === n.target.nodeType ? n.target.parentNode : n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget) : this.type = n;
        t && i.extend(this, t);
        this.timeStamp = n && n.timeStamp || Date.now();
        this[i.expando] = !0 };
    i.Event.prototype = { constructor: i.Event, isDefaultPrevented: lt, isPropagationStopped: lt, isImmediatePropagationStopped: lt, isSimulated: !1, preventDefault: function() { var n = this.originalEvent;
            this.isDefaultPrevented = ct;
            n && !this.isSimulated && n.preventDefault() }, stopPropagation: function() { var n = this.originalEvent;
            this.isPropagationStopped = ct;
            n && !this.isSimulated && n.stopPropagation() }, stopImmediatePropagation: function() { var n = this.originalEvent;
            this.isImmediatePropagationStopped = ct;
            n && !this.isSimulated && n.stopImmediatePropagation();
            this.stopPropagation() } };
    i.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(n) { var t = n.button; return null == n.which && ye.test(n.type) ? null != n.charCode ? n.charCode : n.keyCode : !n.which && void 0 !== t && pe.test(n.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : n.which } }, i.event.addProp);
    i.each({ focus: "focusin", blur: "focusout" }, function(n, t) { i.event.special[n] = { setup: function() { return hi(this, n, we), !1 }, trigger: function() { return hi(this, n), !0 }, delegateType: t } });
    i.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(n, t) { i.event.special[n] = { delegateType: t, bindType: t, handle: function(n) { var u, r = n.relatedTarget,
                    f = n.handleObj; return r && (r === this || i.contains(this, r)) || (n.type = f.origType, u = f.handler.apply(this, arguments), n.type = t), u } } });
    i.fn.extend({ on: function(n, t, i, r) { return gi(this, n, t, i, r) }, one: function(n, t, i, r) { return gi(this, n, t, i, r, 1) }, off: function(n, t, r) { var u, f; if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this; if ("object" == typeof n) { for (f in n) this.off(f, t, n[f]); return this } return !1 !== t && "function" != typeof t || (r = t, t = void 0), !1 === r && (r = lt), this.each(function() { i.event.remove(this, n, r, t) }) } }); var be = /<script|<style|<link/i,
        ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
        de = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    i.extend({ htmlPrefilter: function(n) { return n }, clone: function(n, t, r) { var u, c, o, f, l, a, v, h = n.cloneNode(!0),
                y = st(n); if (!(e.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                for (f = s(h), u = 0, c = (o = s(n)).length; u < c; u++) l = o[u], a = f[u], void 0, "input" === (v = a.nodeName.toLowerCase()) && gt.test(l.type) ? a.checked = l.checked : "input" !== v && "textarea" !== v || (a.defaultValue = l.defaultValue); if (t)
                if (r)
                    for (o = o || s(n), f = f || s(h), u = 0, c = o.length; u < c; u++) wu(o[u], f[u]);
                else wu(n, h);
            return 0 < (f = s(h, "script")).length && di(f, !y && s(n, "script")), h }, cleanData: function(n) { for (var u, t, f, s = i.event.special, e = 0; void 0 !== (t = n[e]); e++)
                if (ot(t)) { if (u = t[r.expando]) { if (u.events)
                            for (f in u.events) s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
                        t[r.expando] = void 0 }
                    t[o.expando] && (t[o.expando] = void 0) } } });
    i.fn.extend({ detach: function(n) { return bu(this, n, !0) }, remove: function(n) { return bu(this, n) }, text: function(n) { return w(this, function(n) { return void 0 === n ? i.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = n) }) }, null, n, arguments.length) }, append: function() { return at(this, arguments, function(n) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || pu(this, n).appendChild(n) }) }, prepend: function() { return at(this, arguments, function(n) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = pu(this, n);
                    t.insertBefore(n, t.firstChild) } }) }, before: function() { return at(this, arguments, function(n) { this.parentNode && this.parentNode.insertBefore(n, this) }) }, after: function() { return at(this, arguments, function(n) { this.parentNode && this.parentNode.insertBefore(n, this.nextSibling) }) }, empty: function() { for (var n, t = 0; null != (n = this[t]); t++) 1 === n.nodeType && (i.cleanData(s(n, !1)), n.textContent = ""); return this }, clone: function(n, t) { return n = null != n && n, t = null == t ? n : t, this.map(function() { return i.clone(this, n, t) }) }, html: function(n) { return w(this, function(n) { var t = this[0] || {},
                    r = 0,
                    u = this.length; if (void 0 === n && 1 === t.nodeType) return t.innerHTML; if ("string" == typeof n && !be.test(n) && !h[(cu.exec(n) || ["", ""])[1].toLowerCase()]) { n = i.htmlPrefilter(n); try { for (; r < u; r++) 1 === (t = this[r] || {}).nodeType && (i.cleanData(s(t, !1)), t.innerHTML = n);
                        t = 0 } catch (n) {} }
                t && this.empty().append(n) }, null, n, arguments.length) }, replaceWith: function() { var n = []; return at(this, arguments, function(t) { var r = this.parentNode;
                i.inArray(this, n) < 0 && (i.cleanData(s(this)), r && r.replaceChild(t, this)) }, n) } });
    i.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(n, t) { i.fn[n] = function(n) { for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), yi.apply(f, u.get()); return this.pushStack(f) } }); var nr = new RegExp("^(" + su + ")(?!px)[a-z%]+$", "i"),
        ci = function(t) { var i = t.ownerDocument.defaultView; return i && i.opener || (i = n), i.getComputedStyle(t) },
        ku = function(n, t, i) { var u, r, f = {}; for (r in t) f[r] = n.style[r], n.style[r] = t[r]; for (r in u = i.call(n), t) n.style[r] = f[r]; return u },
        to = new RegExp(b.join("|"), "i");! function() {
        function r() { if (t) { s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
                t.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
                g.appendChild(s).appendChild(t); var i = n.getComputedStyle(t);
                h = "1%" !== i.top;
                v = 12 === u(i.marginLeft);
                t.style.right = "60%";
                a = 36 === u(i.right);
                c = 36 === u(i.width);
                t.style.position = "absolute";
                l = 12 === u(t.offsetWidth / 3);
                g.removeChild(s);
                t = null } }

        function u(n) { return Math.round(parseFloat(n)) } var h, c, l, a, o, v, s = f.createElement("div"),
            t = f.createElement("div");
        t.style && (t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === t.style.backgroundClip, i.extend(e, { boxSizingReliable: function() { return r(), c }, pixelBoxStyles: function() { return r(), a }, pixelPosition: function() { return r(), h }, reliableMarginLeft: function() { return r(), v }, scrollboxSize: function() { return r(), l }, reliableTrDimensions: function() { var t, i, r, u; return null == o && (t = f.createElement("table"), i = f.createElement("tr"), r = f.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", i.style.height = "1px", r.style.height = "9px", g.appendChild(t).appendChild(i).appendChild(r), u = n.getComputedStyle(i), o = 3 < parseInt(u.height), g.removeChild(t)), o } })) }(); var gu = ["Webkit", "Moz", "ms"],
        nf = f.createElement("div").style,
        tf = {}; var io = /^(none|table(?!-c[ea]).+)/,
        rf = /^--/,
        ro = { position: "absolute", visibility: "hidden", display: "block" },
        uf = { letterSpacing: "0", fontWeight: "400" };
    i.extend({ cssHooks: { opacity: { get: function(n, t) { if (t) { var i = ni(n, "opacity"); return "" === i ? "1" : i } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function(n, t, r, u) { if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) { var f, h, o, c = y(t),
                    l = rf.test(t),
                    s = n.style; if (l || (t = tr(c)), o = i.cssHooks[t] || i.cssHooks[c], void 0 === r) return o && "get" in o && void 0 !== (f = o.get(n, !1, u)) ? f : s[t]; "string" == (h = typeof r) && (f = kt.exec(r)) && f[1] && (r = hu(n, t, f), h = "number");
                null != r && r == r && ("number" !== h || l || (r += f && f[3] || (i.cssNumber[c] ? "" : "px")), e.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (s[t] = "inherit"), o && "set" in o && void 0 === (r = o.set(n, r, u)) || (l ? s.setProperty(t, r) : s[t] = r)) } }, css: function(n, t, r, u) { var f, e, o, s = y(t); return rf.test(t) || (t = tr(s)), (o = i.cssHooks[t] || i.cssHooks[s]) && "get" in o && (f = o.get(n, !0, r)), void 0 === f && (f = ni(n, t, u)), "normal" === f && t in uf && (f = uf[t]), "" === r || r ? (e = parseFloat(f), !0 === r || isFinite(e) ? e || 0 : f) : f } });
    i.each(["height", "width"], function(n, t) { i.cssHooks[t] = { get: function(n, r, u) { if (r) return !io.test(i.css(n, "display")) || n.getClientRects().length && n.getBoundingClientRect().width ? ef(n, t, u) : ku(n, ro, function() { return ef(n, t, u) }) }, set: function(n, r, u) { var s, f = ci(n),
                    h = !e.scrollboxSize() && "absolute" === f.position,
                    c = (h || u) && "border-box" === i.css(n, "boxSizing", !1, f),
                    o = u ? ir(n, t, u, c, f) : 0; return c && h && (o -= Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(f[t]) - ir(n, t, "border", !1, f) - .5)), o && (s = kt.exec(r)) && "px" !== (s[3] || "px") && (n.style[t] = r, r = i.css(n, t)), ff(0, r, o) } } });
    i.cssHooks.marginLeft = du(e.reliableMarginLeft, function(n, t) { if (t) return (parseFloat(ni(n, "marginLeft")) || n.getBoundingClientRect().left - ku(n, { marginLeft: 0 }, function() { return n.getBoundingClientRect().left })) + "px" });
    i.each({ margin: "", padding: "", border: "Width" }, function(n, t) { i.cssHooks[n + t] = { expand: function(i) { for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; r < 4; r++) f[n + b[r] + t] = u[r] || u[r - 2] || u[0]; return f } }; "margin" !== n && (i.cssHooks[n + t].set = ff) });
    i.fn.extend({ css: function(n, t) { return w(this, function(n, t, r) { var f, e, o = {},
                    u = 0; if (Array.isArray(t)) { for (f = ci(n), e = t.length; u < e; u++) o[t[u]] = i.css(n, t[u], !1, f); return o } return void 0 !== r ? i.style(n, t, r) : i.css(n, t) }, n, t, 1 < arguments.length) } });
    ((i.Tween = a).prototype = { constructor: a, init: function(n, t, r, u, f, e) { this.elem = n;
            this.prop = r;
            this.easing = f || i.easing._default;
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px") }, cur: function() { var n = a.propHooks[this.prop]; return n && n.get ? n.get(this) : a.propHooks._default.get(this) }, run: function(n) { var t, r = a.propHooks[this.prop]; return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : a.propHooks._default.set(this), this } }).init.prototype = a.prototype;
    (a.propHooks = { _default: { get: function(n) { var t; return 1 !== n.elem.nodeType || null != n.elem[n.prop] && null == n.elem.style[n.prop] ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, "")) && "auto" !== t ? t : 0 }, set: function(n) { i.fx.step[n.prop] ? i.fx.step[n.prop](n) : 1 !== n.elem.nodeType || !i.cssHooks[n.prop] && null == n.elem.style[tr(n.prop)] ? n.elem[n.prop] = n.now : i.style(n.elem, n.prop, n.now + n.unit) } } }).scrollTop = a.propHooks.scrollLeft = { set: function(n) { n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now) } };
    i.easing = { linear: function(n) { return n }, swing: function(n) { return .5 - Math.cos(n * Math.PI) / 2 }, _default: "swing" };
    i.fx = a.prototype.init;
    i.fx.step = {};
    sf = /^(?:toggle|show|hide)$/;
    hf = /queueHooks$/;
    i.Animation = i.extend(v, { tweeners: { "*": [function(n, t) { var i = this.createTween(n, t); return hu(i.elem, n, kt.exec(t), i), i }] }, tweener: function(n, t) { u(n) ? (t = n, n = ["*"]) : n = n.match(l); for (var i, r = 0, f = n.length; r < f; r++) i = n[r], v.tweeners[i] = v.tweeners[i] || [], v.tweeners[i].unshift(t) }, prefilters: [function(n, t, u) { var f, y, w, c, b, h, o, l, k = "width" in t || "height" in t,
                v = this,
                p = {},
                s = n.style,
                a = n.nodeType && dt(n),
                e = r.get(n, "fxshow"); for (f in u.queue || (null == (c = i._queueHooks(n, "fx")).unqueued && (c.unqueued = 0, b = c.empty.fire, c.empty.fire = function() { c.unqueued || b() }), c.unqueued++, v.always(function() { v.always(function() { c.unqueued--;
                        i.queue(n, "fx").length || c.empty.fire() }) })), t)
                if (y = t[f], sf.test(y)) { if (delete t[f], w = w || "toggle" === y, y === (a ? "hide" : "show")) { if ("show" !== y || !e || void 0 === e[f]) continue;
                        a = !0 }
                    p[f] = e && e[f] || i.style(n, f) }
            if ((h = !i.isEmptyObject(t)) || !i.isEmptyObject(p))
                for (f in k && 1 === n.nodeType && (u.overflow = [s.overflow, s.overflowX, s.overflowY], null == (o = e && e.display) && (o = r.get(n, "display")), "none" === (l = i.css(n, "display")) && (o ? l = o : (ht([n], !0), o = n.style.display || o, l = i.css(n, "display"), ht([n]))), ("inline" === l || "inline-block" === l && null != o) && "none" === i.css(n, "float") && (h || (v.done(function() { s.display = o }), null == o && (l = s.display, o = "none" === l ? "" : l)), s.display = "inline-block")), u.overflow && (s.overflow = "hidden", v.always(function() { s.overflow = u.overflow[0];
                        s.overflowX = u.overflow[1];
                        s.overflowY = u.overflow[2] })), h = !1, p) h || (e ? "hidden" in e && (a = e.hidden) : e = r.access(n, "fxshow", { display: o }), w && (e.hidden = !a), a && ht([n], !0), v.done(function() { for (f in a || ht([n]), r.remove(n, "fxshow"), p) i.style(n, f, p[f]) })), h = lf(a ? e[f] : 0, f, v), f in e || (e[f] = h.start, a && (h.end = h.start, h.start = 0)) }], prefilter: function(n, t) { t ? v.prefilters.unshift(n) : v.prefilters.push(n) } });
    i.speed = function(n, t, r) { var f = n && "object" == typeof n ? i.extend({}, n) : { complete: r || !r && t || u(n) && n, duration: n, easing: r && t || t && !u(t) && t }; return i.fx.off ? f.duration = 0 : "number" != typeof f.duration && (f.duration = f.duration in i.fx.speeds ? i.fx.speeds[f.duration] : i.fx.speeds._default), null != f.queue && !0 !== f.queue || (f.queue = "fx"), f.old = f.complete, f.complete = function() { u(f.old) && f.old.call(this);
            f.queue && i.dequeue(this, f.queue) }, f };
    i.fn.extend({ fadeTo: function(n, t, i, r) { return this.filter(dt).css("opacity", 0).show().end().animate({ opacity: t }, n, i, r) }, animate: function(n, t, u, f) { var s = i.isEmptyObject(n),
                o = i.speed(t, u, f),
                e = function() { var t = v(this, i.extend({}, n), o);
                    (s || r.get(this, "finish")) && t.stop(!0) }; return e.finish = e, s || !1 === o.queue ? this.each(e) : this.queue(o.queue, e) }, stop: function(n, t, u) { var f = function(n) { var t = n.stop;
                delete n.stop;
                t(u) }; return "string" != typeof n && (u = t, t = n, n = void 0), t && this.queue(n || "fx", []), this.each(function() { var s = !0,
                    t = null != n && n + "queueHooks",
                    o = i.timers,
                    e = r.get(this); if (t) e[t] && e[t].stop && f(e[t]);
                else
                    for (t in e) e[t] && e[t].stop && hf.test(t) && f(e[t]); for (t = o.length; t--;) o[t].elem !== this || null != n && o[t].queue !== n || (o[t].anim.stop(u), s = !1, o.splice(t, 1));!s && u || i.dequeue(this, n) }) }, finish: function(n) { return !1 !== n && (n = n || "fx"), this.each(function() { var t, e = r.get(this),
                    u = e[n + "queue"],
                    o = e[n + "queueHooks"],
                    f = i.timers,
                    s = u ? u.length : 0; for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--;) f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1)); for (t = 0; t < s; t++) u[t] && u[t].finish && u[t].finish.call(this);
                delete e.finish }) } });
    i.each(["toggle", "show", "hide"], function(n, t) { var r = i.fn[t];
        i.fn[t] = function(n, i, u) { return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(ai(t, !0), n, i, u) } });
    i.each({ slideDown: ai("show"), slideUp: ai("hide"), slideToggle: ai("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(n, t) { i.fn[n] = function(n, i, r) { return this.animate(t, n, i, r) } });
    i.timers = [];
    i.fx.tick = function() { var r, n = 0,
            t = i.timers; for (vt = Date.now(); n < t.length; n++)(r = t[n])() || t[n] !== r || t.splice(n--, 1);
        t.length || i.fx.stop();
        vt = void 0 };
    i.fx.timer = function(n) { i.timers.push(n);
        i.fx.start() };
    i.fx.interval = 13;
    i.fx.start = function() { li || (li = !0, rr()) };
    i.fx.stop = function() { li = null };
    i.fx.speeds = { slow: 600, fast: 200, _default: 400 };
    i.fn.delay = function(t, r) { return t = i.fx && i.fx.speeds[t] || t, r = r || "fx", this.queue(r, function(i, r) { var u = n.setTimeout(i, t);
            r.stop = function() { n.clearTimeout(u) } }) };
    yt = f.createElement("input");
    of = f.createElement("select").appendChild(f.createElement("option"));
    yt.type = "checkbox";
    e.checkOn = "" !== yt.value;
    e.optSelected = of.selected;
    (yt = f.createElement("input")).value = "t";
    yt.type = "radio";
    e.radioValue = "t" === yt.value;
    pt = i.expr.attrHandle;
    i.fn.extend({ attr: function(n, t) { return w(this, i.attr, n, t, 1 < arguments.length) }, removeAttr: function(n) { return this.each(function() { i.removeAttr(this, n) }) } });
    i.extend({ attr: function(n, t, r) { var f, u, e = n.nodeType; if (3 !== e && 8 !== e && 2 !== e) return "undefined" == typeof n.getAttribute ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (u = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? af : void 0)), void 0 !== r ? null === r ? void i.removeAttr(n, t) : u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : (n.setAttribute(t, r + ""), r) : u && "get" in u && null !== (f = u.get(n, t)) ? f : null == (f = i.find.attr(n, t)) ? void 0 : f) }, attrHooks: { type: { set: function(n, t) { if (!e.radioValue && "radio" === t && c(n, "input")) { var i = n.value; return n.setAttribute("type", t), i && (n.value = i), t } } } }, removeAttr: function(n, t) { var i, u = 0,
                r = t && t.match(l); if (r && 1 === n.nodeType)
                while (i = r[u++]) n.removeAttribute(i) } });
    af = { set: function(n, t, r) { return !1 === t ? i.removeAttr(n, r) : n.setAttribute(r, r), r } };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) { var r = pt[t] || i.find.attr;
        pt[t] = function(n, t, i) { var f, e, u = t.toLowerCase(); return i || (e = pt[u], pt[u] = f, f = null != r(n, t, i) ? u : null, pt[u] = e), f } });
    vf = /^(?:input|select|textarea|button)$/i;
    yf = /^(?:a|area)$/i;
    i.fn.extend({ prop: function(n, t) { return w(this, i.prop, n, t, 1 < arguments.length) }, removeProp: function(n) { return this.each(function() { delete this[i.propFix[n] || n] }) } });
    i.extend({ prop: function(n, t, r) { var f, u, e = n.nodeType; if (3 !== e && 8 !== e && 2 !== e) return 1 === e && i.isXMLDoc(n) || (t = i.propFix[t] || t, u = i.propHooks[t]), void 0 !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get" in u && null !== (f = u.get(n, t)) ? f : n[t] }, propHooks: { tabIndex: { get: function(n) { var t = i.find.attr(n, "tabindex"); return t ? parseInt(t, 10) : vf.test(n.nodeName) || yf.test(n.nodeName) && n.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } });
    e.optSelected || (i.propHooks.selected = { get: function(n) { var t = n.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null }, set: function(n) { var t = n.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { i.propFix[this.toLowerCase()] = this });
    i.fn.extend({ addClass: function(n) { var o, t, r, f, e, s, h, c = 0; if (u(n)) return this.each(function(t) { i(this).addClass(n.call(this, t, it(this))) }); if ((o = ur(n)).length)
                while (t = this[c++])
                    if (f = it(t), r = 1 === t.nodeType && " " + tt(f) + " ") { for (s = 0; e = o[s++];) r.indexOf(" " + e + " ") < 0 && (r += e + " ");
                        f !== (h = tt(r)) && t.setAttribute("class", h) }
            return this }, removeClass: function(n) { var o, r, t, f, e, s, h, c = 0; if (u(n)) return this.each(function(t) { i(this).removeClass(n.call(this, t, it(this))) }); if (!arguments.length) return this.attr("class", ""); if ((o = ur(n)).length)
                while (r = this[c++])
                    if (f = it(r), t = 1 === r.nodeType && " " + tt(f) + " ") { for (s = 0; e = o[s++];)
                            while (-1 < t.indexOf(" " + e + " ")) t = t.replace(" " + e + " ", " ");
                        f !== (h = tt(t)) && r.setAttribute("class", h) }
            return this }, toggleClass: function(n, t) { var f = typeof n,
                e = "string" === f || Array.isArray(n); return "boolean" == typeof t && e ? t ? this.addClass(n) : this.removeClass(n) : u(n) ? this.each(function(r) { i(this).toggleClass(n.call(this, r, it(this), t), t) }) : this.each(function() { var t, o, u, s; if (e)
                    for (o = 0, u = i(this), s = ur(n); t = s[o++];) u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
                else void 0 !== n && "boolean" !== f || ((t = it(this)) && r.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === n ? "" : r.get(this, "__className__") || "")) }) }, hasClass: function(n) { for (var t, r = 0, i = " " + n + " "; t = this[r++];)
                if (1 === t.nodeType && -1 < (" " + tt(it(t)) + " ").indexOf(i)) return !0;
            return !1 } });
    pf = /\r/g;
    i.fn.extend({ val: function(n) { var t, r, e, f = this[0]; return arguments.length ? (e = u(n), this.each(function(r) { var u;
                1 === this.nodeType && (null == (u = e ? n.call(this, r, i(this).val()) : n) ? u = "" : "number" == typeof u ? u += "" : Array.isArray(u) && (u = i.map(u, function(n) { return null == n ? "" : n + "" })), (t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, u, "value") || (this.value = u)) })) : f ? (t = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()]) && "get" in t && void 0 !== (r = t.get(f, "value")) ? r : "string" == typeof(r = f.value) ? r.replace(pf, "") : null == r ? "" : r : void 0 } });
    i.extend({ valHooks: { option: { get: function(n) { var t = i.find.attr(n, "value"); return null != t ? t : tt(i.text(n)) } }, select: { get: function(n) { for (var e, t, o = n.options, u = n.selectedIndex, f = "select-one" === n.type, s = f ? null : [], h = f ? u + 1 : o.length, r = u < 0 ? h : f ? u : 0; r < h; r++)
                        if (((t = o[r]).selected || r === u) && !t.disabled && (!t.parentNode.disabled || !c(t.parentNode, "optgroup"))) { if (e = i(t).val(), f) return e;
                            s.push(e) }
                    return s }, set: function(n, t) { for (var r, u, f = n.options, e = i.makeArray(t), o = f.length; o--;)((u = f[o]).selected = -1 < i.inArray(i.valHooks.option.get(u), e)) && (r = !0); return r || (n.selectedIndex = -1), e } } } });
    i.each(["radio", "checkbox"], function() { i.valHooks[this] = { set: function(n, t) { if (Array.isArray(t)) return n.checked = -1 < i.inArray(i(n).val(), t) } };
        e.checkOn || (i.valHooks[this].get = function(n) { return null === n.getAttribute("value") ? "on" : n.value }) });
    e.focusin = "onfocusin" in n;
    fr = /^(?:focusinfocus|focusoutblur)$/;
    er = function(n) { n.stopPropagation() };
    i.extend(i.event, { trigger: function(t, e, o, s) { var k, c, l, d, v, y, a, p, w = [o || f],
                h = ui.call(t, "type") ? t.type : t,
                b = ui.call(t, "namespace") ? t.namespace.split(".") : []; if (c = p = l = o = o || f, 3 !== o.nodeType && 8 !== o.nodeType && !fr.test(h + i.event.triggered) && (-1 < h.indexOf(".") && (h = (b = h.split(".")).shift(), b.sort()), v = h.indexOf(":") < 0 && "on" + h, (t = t[i.expando] ? t : new i.Event(h, "object" == typeof t && t)).isTrigger = s ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), e = null == e ? [t] : i.makeArray(e, [t]), a = i.event.special[h] || {}, s || !a.trigger || !1 !== a.trigger.apply(o, e))) { if (!s && !a.noBubble && !rt(o)) { for (d = a.delegateType || h, fr.test(d + h) || (c = c.parentNode); c; c = c.parentNode) w.push(c), l = c;
                    l === (o.ownerDocument || f) && w.push(l.defaultView || l.parentWindow || n) } for (k = 0;
                    (c = w[k++]) && !t.isPropagationStopped();) p = c, t.type = 1 < k ? d : a.bindType || h, (y = (r.get(c, "events") || Object.create(null))[t.type] && r.get(c, "handle")) && y.apply(c, e), (y = v && c[v]) && y.apply && ot(c) && (t.result = y.apply(c, e), !1 === t.result && t.preventDefault()); return t.type = h, s || t.isDefaultPrevented() || a._default && !1 !== a._default.apply(w.pop(), e) || !ot(o) || v && u(o[h]) && !rt(o) && ((l = o[v]) && (o[v] = null), i.event.triggered = h, t.isPropagationStopped() && p.addEventListener(h, er), o[h](), t.isPropagationStopped() && p.removeEventListener(h, er), i.event.triggered = void 0, l && (o[v] = l)), t.result } }, simulate: function(n, t, r) { var u = i.extend(new i.Event, r, { type: n, isSimulated: !0 });
            i.event.trigger(u, null, t) } });
    i.fn.extend({ trigger: function(n, t) { return this.each(function() { i.event.trigger(n, t, this) }) }, triggerHandler: function(n, t) { var r = this[0]; if (r) return i.event.trigger(n, t, r, !0) } });
    e.focusin || i.each({ focus: "focusin", blur: "focusout" }, function(n, t) { var u = function(n) { i.event.simulate(t, n.target, i.event.fix(n)) };
        i.event.special[t] = { setup: function() { var i = this.ownerDocument || this.document || this,
                    f = r.access(i, t);
                f || i.addEventListener(n, u, !0);
                r.access(i, t, (f || 0) + 1) }, teardown: function() { var i = this.ownerDocument || this.document || this,
                    f = r.access(i, t) - 1;
                f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t)) } } }); var ti = n.location,
        wf = { guid: Date.now() },
        or = /\?/;
    i.parseXML = function(t) { var r; if (!t || "string" != typeof t) return null; try { r = (new n.DOMParser).parseFromString(t, "text/xml") } catch (t) { r = void 0 } return r && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t), r }; var uo = /\[\]$/,
        bf = /\r?\n/g,
        fo = /^(?:submit|button|image|reset|file)$/i,
        eo = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) { var r, f = [],
            e = function(n, t) { var i = u(t) ? t() : t;
                f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(null == i ? "" : i) }; if (null == n) return ""; if (Array.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() { e(this.name, this.value) });
        else
            for (r in n) sr(r, n[r], t, e); return f.join("&") };
    i.fn.extend({ serialize: function() { return i.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var n = i.prop(this, "elements"); return n ? i.makeArray(n) : this }).filter(function() { var n = this.type; return this.name && !i(this).is(":disabled") && eo.test(this.nodeName) && !fo.test(n) && (this.checked || !gt.test(n)) }).map(function(n, t) { var r = i(this).val(); return null == r ? null : Array.isArray(r) ? i.map(r, function(n) { return { name: t.name, value: n.replace(bf, "\r\n") } }) : { name: t.name, value: r.replace(bf, "\r\n") } }).get() } }); var oo = /%20/g,
        so = /#.*$/,
        ho = /([?&])_=[^&]*/,
        co = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        lo = /^(?:GET|HEAD)$/,
        ao = /^\/\//,
        kf = {},
        hr = {},
        df = "*/".concat("*"),
        cr = f.createElement("a"); return cr.href = ti.href, i.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: ti.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ti.protocol), global: !0, processData: !0, "async": !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": df, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": i.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(n, t) { return t ? lr(lr(n, i.ajaxSettings), t) : lr(i.ajaxSettings, n) }, ajaxPrefilter: gf(kf), ajaxTransport: gf(hr), ajax: function(t, r) {
            function b(t, r, f, c) { var v, rt, b, p, g, l = r;
                s || (s = !0, d && n.clearTimeout(d), a = void 0, k = c || "", e.readyState = 0 < t ? 4 : 0, v = 200 <= t && t < 300 || 304 === t, f && (p = function(n, t, i) { for (var e, u, f, o, s = n.contents, r = n.dataTypes;
                        "*" === r[0];) r.shift(), void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type")); if (e)
                        for (u in s)
                            if (s[u] && s[u].test(e)) { r.unshift(u); break }
                    if (r[0] in i) f = r[0];
                    else { for (u in i) { if (!r[0] || n.converters[u + " " + r[0]]) { f = u; break }
                            o || (o = u) }
                        f = f || o } if (f) return f !== r[0] && r.unshift(f), i[f] }(u, e, f)), !v && -1 < i.inArray("script", u.dataTypes) && (u.converters["text script"] = function() {}), p = function(n, t, i, r) { var h, u, f, s, e, o = {},
                        c = n.dataTypes.slice(); if (c[1])
                        for (f in n.converters) o[f.toLowerCase()] = n.converters[f]; for (u = c.shift(); u;)
                        if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift())
                            if ("*" === u) u = e;
                            else if ("*" !== e && e !== u) { if (!(f = o[e + " " + u] || o["* " + u]))
                            for (h in o)
                                if ((s = h.split(" "))[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {!0 === f ? f = o[h] : !0 !== o[h] && (u = s[0], c.unshift(s[1])); break }
                        if (!0 !== f)
                            if (f && n.throws) t = f(t);
                            else try { t = f(t) } catch (n) { return { state: "parsererror", error: f ? n : "No conversion from " + e + " to " + u } } } return { state: "success", data: t } }(u, p, e, v), v ? (u.ifModified && ((g = e.getResponseHeader("Last-Modified")) && (i.lastModified[o] = g), (g = e.getResponseHeader("etag")) && (i.etag[o] = g)), 204 === t || "HEAD" === u.type ? l = "nocontent" : 304 === t ? l = "notmodified" : (l = p.state, rt = p.data, v = !(b = p.error))) : (b = l, !t && l || (l = "error", t < 0 && (t = 0))), e.status = t, e.statusText = (r || l) + "", v ? tt.resolveWith(h, [rt, l, e]) : tt.rejectWith(h, [e, l, b]), e.statusCode(w), w = void 0, y && nt.trigger(v ? "ajaxSuccess" : "ajaxError", [e, u, v ? rt : b]), it.fireWith(h, [e, l]), y && (nt.trigger("ajaxComplete", [e, u]), --i.active || i.event.trigger("ajaxStop"))) } "object" == typeof t && (r = t, t = void 0);
            r = r || {}; var a, o, k, v, d, c, s, y, g, p, u = i.ajaxSetup({}, r),
                h = u.context || u,
                nt = u.context && (h.nodeType || h.jquery) ? i(h) : i.event,
                tt = i.Deferred(),
                it = i.Callbacks("once memory"),
                w = u.statusCode || {},
                rt = {},
                ut = {},
                ft = "canceled",
                e = { readyState: 0, getResponseHeader: function(n) { var t; if (s) { if (!v)
                                for (v = {}; t = co.exec(k);) v[t[1].toLowerCase() + " "] = (v[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = v[n.toLowerCase() + " "] } return null == t ? null : t.join(", ") }, getAllResponseHeaders: function() { return s ? k : null }, setRequestHeader: function(n, t) { return null == s && (n = ut[n.toLowerCase()] = ut[n.toLowerCase()] || n, rt[n] = t), this }, overrideMimeType: function(n) { return null == s && (u.mimeType = n), this }, statusCode: function(n) { var t; if (n)
                            if (s) e.always(n[e.status]);
                            else
                                for (t in n) w[t] = [w[t], n[t]];
                        return this }, abort: function(n) { var t = n || ft; return a && a.abort(t), b(0, t), this } }; if (tt.promise(e), u.url = ((t || u.url || ti.href) + "").replace(ao, ti.protocol + "//"), u.type = r.method || r.type || u.method || u.type, u.dataTypes = (u.dataType || "*").toLowerCase().match(l) || [""], null == u.crossDomain) { c = f.createElement("a"); try { c.href = u.url;
                    c.href = c.href;
                    u.crossDomain = cr.protocol + "//" + cr.host != c.protocol + "//" + c.host } catch (t) { u.crossDomain = !0 } } if (u.data && u.processData && "string" != typeof u.data && (u.data = i.param(u.data, u.traditional)), ne(kf, u, r, e), s) return e; for (g in (y = i.event && u.global) && 0 == i.active++ && i.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !lo.test(u.type), o = u.url.replace(so, ""), u.hasContent ? u.data && u.processData && 0 === (u.contentType || "").indexOf("application/x-www-form-urlencoded") && (u.data = u.data.replace(oo, "+")) : (p = u.url.slice(o.length), u.data && (u.processData || "string" == typeof u.data) && (o += (or.test(o) ? "&" : "?") + u.data, delete u.data), !1 === u.cache && (o = o.replace(ho, "$1"), p = (or.test(o) ? "&" : "?") + "_=" + wf.guid++ + p), u.url = o + p), u.ifModified && (i.lastModified[o] && e.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o])), (u.data && u.hasContent && !1 !== u.contentType || r.contentType) && e.setRequestHeader("Content-Type", u.contentType), e.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + df + "; q=0.01" : "") : u.accepts["*"]), u.headers) e.setRequestHeader(g, u.headers[g]); if (u.beforeSend && (!1 === u.beforeSend.call(h, e, u) || s)) return e.abort(); if (ft = "abort", it.add(u.complete), e.done(u.success), e.fail(u.error), a = ne(hr, u, r, e)) { if (e.readyState = 1, y && nt.trigger("ajaxSend", [e, u]), s) return e;
                u.async && 0 < u.timeout && (d = n.setTimeout(function() { e.abort("timeout") }, u.timeout)); try { s = !1;
                    a.send(rt, b) } catch (t) { if (s) throw t;
                    b(-1, t) } } else b(-1, "No Transport"); return e }, getJSON: function(n, t, r) { return i.get(n, t, r, "json") }, getScript: function(n, t) { return i.get(n, void 0, t, "script") } }), i.each(["get", "post"], function(n, t) { i[t] = function(n, r, f, e) { return u(r) && (e = e || f, f = r, r = void 0), i.ajax(i.extend({ url: n, type: t, dataType: e, data: r, success: f }, i.isPlainObject(n) && n)) } }), i.ajaxPrefilter(function(n) { for (var t in n.headers) "content-type" === t.toLowerCase() && (n.contentType = n.headers[t] || "") }), i._evalUrl = function(n, t, r) { return i.ajax({ url: n, type: "GET", dataType: "script", cache: !0, "async": !1, global: !1, converters: { "text script": function() {} }, dataFilter: function(n) { i.globalEval(n, t, r) } }) }, i.fn.extend({ wrapAll: function(n) { var t; return this[0] && (u(n) && (n = n.call(this[0])), t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var n = this; n.firstElementChild;) n = n.firstElementChild; return n }).append(this)), this }, wrapInner: function(n) { return u(n) ? this.each(function(t) { i(this).wrapInner(n.call(this, t)) }) : this.each(function() { var t = i(this),
                    r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n) }) }, wrap: function(n) { var t = u(n); return this.each(function(r) { i(this).wrapAll(t ? n.call(this, r) : n) }) }, unwrap: function(n) { return this.parent(n).not("body").each(function() { i(this).replaceWith(this.childNodes) }), this } }), i.expr.pseudos.hidden = function(n) { return !i.expr.pseudos.visible(n) }, i.expr.pseudos.visible = function(n) { return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length) }, i.ajaxSettings.xhr = function() { try { return new n.XMLHttpRequest } catch (t) {} }, te = { 0: 200, 1223: 204 }, wt = i.ajaxSettings.xhr(), e.cors = !!wt && "withCredentials" in wt, e.ajax = wt = !!wt, i.ajaxTransport(function(t) { var i, r; if (e.cors || wt && !t.crossDomain) return { send: function(u, f) { var o, e = t.xhr(); if (e.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (o in t.xhrFields) e[o] = t.xhrFields[o]; for (o in t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType), t.crossDomain || u["X-Requested-With"] || (u["X-Requested-With"] = "XMLHttpRequest"), u) e.setRequestHeader(o, u[o]);
                i = function(n) { return function() { i && (i = r = e.onload = e.onerror = e.onabort = e.ontimeout = e.onreadystatechange = null, "abort" === n ? e.abort() : "error" === n ? "number" != typeof e.status ? f(0, "error") : f(e.status, e.statusText) : f(te[e.status] || e.status, e.statusText, "text" !== (e.responseType || "text") || "string" != typeof e.responseText ? { binary: e.response } : { text: e.responseText }, e.getAllResponseHeaders())) } };
                e.onload = i();
                r = e.onerror = e.ontimeout = i("error");
                void 0 !== e.onabort ? e.onabort = r : e.onreadystatechange = function() { 4 === e.readyState && n.setTimeout(function() { i && r() }) };
                i = i("abort"); try { e.send(t.hasContent && t.data || null) } catch (u) { if (i) throw u; } }, abort: function() { i && i() } } }), i.ajaxPrefilter(function(n) { n.crossDomain && (n.contents.script = !1) }), i.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(n) { return i.globalEval(n), n } } }), i.ajaxPrefilter("script", function(n) { void 0 === n.cache && (n.cache = !1);
        n.crossDomain && (n.type = "GET") }), i.ajaxTransport("script", function(n) { var r, t; if (n.crossDomain || n.scriptAttrs) return { send: function(u, e) { r = i("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", t = function(n) { r.remove();
                    t = null;
                    n && e("error" === n.type ? 404 : 200, n.type) });
                f.head.appendChild(r[0]) }, abort: function() { t && t() } } }), ar = [], vi = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var n = ar.pop() || i.expando + "_" + wf.guid++; return this[n] = !0, n } }), i.ajaxPrefilter("json jsonp", function(t, r, f) { var e, o, s, h = !1 !== t.jsonp && (vi.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && vi.test(t.data) && "data"); if (h || "jsonp" === t.dataTypes[0]) return e = t.jsonpCallback = u(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, h ? t[h] = t[h].replace(vi, "$1" + e) : !1 !== t.jsonp && (t.url += (or.test(t.url) ? "&" : "?") + t.jsonp + "=" + e), t.converters["script json"] = function() { return s || i.error(e + " was not called"), s[0] }, t.dataTypes[0] = "json", o = n[e], n[e] = function() { s = arguments }, f.always(function() { void 0 === o ? i(n).removeProp(e) : n[e] = o;
            t[e] && (t.jsonpCallback = r.jsonpCallback, ar.push(e));
            s && u(o) && o(s[0]);
            s = o = void 0 }), "script" }), e.createHTMLDocument = ((ie = f.implementation.createHTMLDocument("").body).innerHTML = "<form><\/form><form><\/form>", 2 === ie.childNodes.length), i.parseHTML = function(n, t, r) { return "string" != typeof n ? [] : ("boolean" == typeof t && (r = t, t = !1), t || (e.createHTMLDocument ? ((s = (t = f.implementation.createHTMLDocument("")).createElement("base")).href = f.location.href, t.head.appendChild(s)) : t = f), u = !r && [], (o = wi.exec(n)) ? [t.createElement(o[1])] : (o = vu([n], t, u), u && u.length && i(u).remove(), i.merge([], o.childNodes))); var s, o, u }, i.fn.load = function(n, t, r) { var f, s, h, e = this,
            o = n.indexOf(" "); return -1 < o && (f = tt(n.slice(o)), n = n.slice(0, o)), u(t) ? (r = t, t = void 0) : t && "object" == typeof t && (s = "POST"), 0 < e.length && i.ajax({ url: n, type: s || "GET", dataType: "html", data: t }).done(function(n) { h = arguments;
            e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n) }).always(r && function(n, t) { e.each(function() { r.apply(this, h || [n.responseText, t, n]) }) }), this }, i.expr.pseudos.animated = function(n) { return i.grep(i.timers, function(t) { return n === t.elem }).length }, i.offset = { setOffset: function(n, t, r) { var v, o, s, h, e, c, l = i.css(n, "position"),
                a = i(n),
                f = {}; "static" === l && (n.style.position = "relative");
            e = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            ("absolute" === l || "fixed" === l) && -1 < (s + c).indexOf("auto") ? (h = (v = a.position()).top, o = v.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
            u(t) && (t = t.call(n, r, i.extend({}, e)));
            null != t.top && (f.top = t.top - e.top + h);
            null != t.left && (f.left = t.left - e.left + o); "using" in t ? t.using.call(n, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), a.css(f)) } }, i.fn.extend({ offset: function(n) { if (arguments.length) return void 0 === n ? this : this.each(function(t) { i.offset.setOffset(this, n, t) }); var r, u, t = this[0]; if (t) return t.getClientRects().length ? (r = t.getBoundingClientRect(), u = t.ownerDocument.defaultView, { top: r.top + u.pageYOffset, left: r.left + u.pageXOffset }) : { top: 0, left: 0 } }, position: function() { if (this[0]) { var n, r, u, t = this[0],
                    f = { top: 0, left: 0 }; if ("fixed" === i.css(t, "position")) r = t.getBoundingClientRect();
                else { for (r = this.offset(), u = t.ownerDocument, n = t.offsetParent || u.documentElement; n && (n === u.body || n === u.documentElement) && "static" === i.css(n, "position");) n = n.parentNode;
                    n && n !== t && 1 === n.nodeType && ((f = i(n).offset()).top += i.css(n, "borderTopWidth", !0), f.left += i.css(n, "borderLeftWidth", !0)) } return { top: r.top - f.top - i.css(t, "marginTop", !0), left: r.left - f.left - i.css(t, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { for (var n = this.offsetParent; n && "static" === i.css(n, "position");) n = n.offsetParent; return n || g }) } }), i.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(n, t) { var r = "pageYOffset" === t;
        i.fn[n] = function(i) { return w(this, function(n, i, u) { var f; if (rt(n) ? f = n : 9 === n.nodeType && (f = n.defaultView), void 0 === u) return f ? f[t] : n[i];
                f ? f.scrollTo(r ? f.pageXOffset : u, r ? u : f.pageYOffset) : n[i] = u }, n, i, arguments.length) } }), i.each(["top", "left"], function(n, t) { i.cssHooks[t] = du(e.pixelPosition, function(n, r) { if (r) return r = ni(n, t), nr.test(r) ? i(n).position()[t] + "px" : r }) }), i.each({ Height: "height", Width: "width" }, function(n, t) { i.each({ padding: "inner" + n, content: t, "": "outer" + n }, function(r, u) { i.fn[u] = function(f, e) { var o = arguments.length && (r || "boolean" != typeof f),
                    s = r || (!0 === f || !0 === e ? "margin" : "border"); return w(this, function(t, r, f) { var e; return rt(t) ? 0 === u.indexOf("outer") ? t["inner" + n] : t.document.documentElement["client" + n] : 9 === t.nodeType ? (e = t.documentElement, Math.max(t.body["scroll" + n], e["scroll" + n], t.body["offset" + n], e["offset" + n], e["client" + n])) : void 0 === f ? i.css(t, r, s) : i.style(t, r, f, s) }, t, o ? f : void 0, o) } }) }), i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) { i.fn[t] = function(n) { return this.on(t, n) } }), i.fn.extend({ bind: function(n, t, i) { return this.on(n, null, t, i) }, unbind: function(n, t) { return this.off(n, null, t) }, delegate: function(n, t, i, r) { return this.on(t, n, i, r) }, undelegate: function(n, t, i) { return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i) }, hover: function(n, t) { return this.mouseenter(n).mouseleave(t || n) } }), i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(n, t) { i.fn[t] = function(n, i) { return 0 < arguments.length ? this.on(t, null, n, i) : this.trigger(t) } }), re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, i.proxy = function(n, t) { var r, f, e; if ("string" == typeof t && (r = n[t], t = n, n = r), u(n)) return f = k.call(arguments, 2), (e = function() { return n.apply(t || this, f.concat(k.call(arguments))) }).guid = n.guid = n.guid || i.guid++, e }, i.holdReady = function(n) { n ? i.readyWait++ : i.ready(!0) }, i.isArray = Array.isArray, i.parseJSON = JSON.parse, i.nodeName = c, i.isFunction = u, i.isWindow = rt, i.camelCase = y, i.type = ut, i.now = Date.now, i.isNumeric = function(n) { var t = i.type(n); return ("number" === t || "string" === t) && !isNaN(n - parseFloat(n)) }, i.trim = function(n) { return null == n ? "" : (n + "").replace(re, "") }, "function" == typeof define && define.amd && define("jquery", [], function() { return i }), ue = n.jQuery, fe = n.$, i.noConflict = function(t) { return n.$ === i && (n.$ = fe), t && n.jQuery === i && (n.jQuery = ue), i }, "undefined" == typeof t && (n.jQuery = n.$ = i), i });
_extends = Object.assign || function(n) { for (var i, r, t = 1; t < arguments.length; t++) { i = arguments[t]; for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r]) } return n };
_typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) { return typeof n } : function(n) { return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n },
    function(n, t) {
        (typeof exports == "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module != "undefined" ? module.exports = t() : typeof define == "function" && define.amd ? define(t) : n.LazyLoad = t() }(this, function() { "use strict";

        function at(n, t, i) { return !st(n, t, i) && !ct(n, t, i) && !ht(n, t, i) && !lt(n, t, i) }

        function vt(n, t) { if (t)
                if (t.length)
                    for (var i = 0, r; r = t[i]; i += 1) p(n, r);
                else p(n, t) }

        function fi(n, t, i) { var r = t._settings;
            (i || !y(n)) && (f(r.callback_enter, n), ui.indexOf(n.tagName) > -1 && (ri(n, t), o(n, r.class_loading)), ti(n, t), ft(n), f(r.callback_set, n)) } var rt = function() { return { elements_selector: "img", container: window, threshold: 300, throttle: 150, data_src: "src", data_srcset: "srcset", data_sizes: "sizes", data_bg: "bg", class_loading: "loading", class_loaded: "loaded", class_error: "error", class_initial: "initial", skip_invisible: !0, callback_load: null, callback_error: null, callback_set: null, callback_enter: null, callback_finish: null, to_webp: !1 } },
            l = "data-",
            a = "was-processed",
            v = "true",
            n = function(n, t) { return n.getAttribute(l + t) },
            ut = function(n, t, i) { var r = l + t; if (i === null) { n.removeAttribute(r); return }
                n.setAttribute(r, i) },
            ft = function(n) { return ut(n, a, v) },
            y = function(t) { return n(t, a) === v },
            et = function(n) { return n.filter(function(n) { return !y(n) }) },
            ot = function(n, t) { return n.filter(function(n) { return n !== t }) },
            i = function(n) { return n.getBoundingClientRect().top + window.pageYOffset - n.ownerDocument.documentElement.clientTop },
            st = function(n, t, r) { var u = t === window ? window.innerHeight + window.pageYOffset : i(t) + t.offsetHeight; return u <= i(n) - r },
            r = function(n) { return n.getBoundingClientRect().left + window.pageXOffset - n.ownerDocument.documentElement.clientLeft },
            ht = function(n, t, i) { var u = window.innerWidth,
                    f = t === window ? u + window.pageXOffset : r(t) + u; return f <= r(n) - i },
            ct = function(n, t, r) { var u = t === window ? window.pageYOffset : i(t); return u >= i(n) + r + n.offsetHeight },
            lt = function(n, t, i) { var u = t === window ? window.pageXOffset : r(t); return u >= r(n) + i + n.offsetWidth },
            p = function(n, t) { var i, r = "LazyLoad::Initialized",
                    u = new n(t); try { i = new CustomEvent(r, { detail: { instance: u } }) } catch (f) { i = document.createEvent("CustomEvent");
                    i.initCustomEvent(r, !1, !1, { instance: u }) }
                window.dispatchEvent(i) },
            e = function(n, t) { return t ? n.replace(/\.(jpe?g|png)/gi, ".webp") : n },
            yt = function() { var t = "image/webp",
                    n = document.createElement("canvas"); return n.getContext && n.getContext("2d") ? n.toDataURL(t).indexOf("data:" + t) === 0 : !1 },
            u = typeof window != "undefined",
            pt = u && !("onscroll" in window) || /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
            w = u && "classList" in document.createElement("p"),
            b = u && yt(),
            o = function(n, t) { if (w) { n.classList.add(t); return }
                n.className += (n.className ? " " : "") + t },
            wt = function(n, t) { if (w) { n.classList.remove(t); return }
                n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "") },
            k = function(i, r, u, f) { for (var e, s, o = 0; e = i.children[o]; o += 1) e.tagName === "SOURCE" && (s = n(e, u), t(e, r, s, f)) },
            t = function(n, t, i, r) { i && n.setAttribute(t, e(i, r)) },
            bt = function(i, r) { var u = b && r.to_webp,
                    e = r.data_srcset,
                    f = i.parentNode,
                    o, s, h;
                f && f.tagName === "PICTURE" && k(f, "srcset", e, u);
                o = n(i, r.data_sizes);
                t(i, "sizes", o);
                s = n(i, e);
                t(i, "srcset", s, u);
                h = n(i, r.data_src);
                t(i, "src", h, u) },
            kt = function(i, r) { var u = n(i, r.data_src);
                t(i, "src", u) },
            dt = function(i, r) { var u = r.data_src,
                    f = n(i, u);
                k(i, "src", u);
                t(i, "src", f);
                i.load() },
            gt = function(t, i) { var r = b && i.to_webp,
                    u = n(t, i.data_src),
                    f = n(t, i.data_bg),
                    o, s;
                u && (o = e(u, r), t.style.backgroundImage = 'url("' + o + '")');
                f && (s = e(f, r), t.style.backgroundImage = s) },
            ni = { IMG: bt, IFRAME: kt, VIDEO: dt },
            ti = function(n, t) { var i = t._settings,
                    u = n.tagName,
                    r = ni[u]; if (r) { r(n, i);
                    t._updateLoadingCount(1);
                    t._elements = ot(t._elements, n); return }
                gt(n, i) },
            f = function(n, t) { n && n(t) },
            d = "load",
            g = "loadeddata",
            nt = "error",
            s = function(n, t, i) { n.addEventListener(t, i) },
            h = function(n, t, i) { n.removeEventListener(t, i) },
            ii = function(n, t, i) { s(n, d, t);
                s(n, g, t);
                s(n, nt, i) },
            tt = function(n, t, i) { h(n, d, t);
                h(n, g, t);
                h(n, nt, i) },
            it = function(n, t, i) { var r = i._settings,
                    e = t ? r.class_loaded : r.class_error,
                    s = t ? r.callback_load : r.callback_error,
                    u = n.target;
                wt(u, r.class_loading);
                o(u, e);
                f(s, u);
                i._updateLoadingCount(-1) },
            ri = function(n, t) { var i = function i(u) { it(u, !0, t);
                        tt(n, i, r) },
                    r = function r(u) { it(u, !1, t);
                        tt(n, i, r) };
                ii(n, i, r) },
            ui = ["IMG", "IFRAME", "VIDEO"],
            ei = function(n, t) { while (t.length) n.splice(t.pop(), 1) },
            c = function(n) { this._settings = _extends({}, rt(), n);
                this._loadingCount = 0;
                this._queryOriginNode = this._settings.container === window ? document : this._settings.container;
                this._previousLoopTime = 0;
                this._loopTimeout = null;
                this._boundHandleScroll = this.handleScroll.bind(this);
                this._isFirstLoop = !0;
                window.addEventListener("resize", this._boundHandleScroll);
                this.update() }; return c.prototype = { _loopThroughElements: function(n) { var r = this._settings,
                    u = this._elements,
                    f = u ? u.length : 0,
                    t = void 0,
                    e = [],
                    s = this._isFirstLoop,
                    i; if (s && (this._isFirstLoop = !1), f === 0) { this._stopScrollHandler(); return } for (t = 0; t < f; t++)(i = u[t], r.skip_invisible && i.offsetParent === null) || (n || at(i, r.container, r.threshold)) && (s && o(i, r.class_initial), this.load(i), e.push(t));
                ei(u, e) }, _startScrollHandler: function() { this._isHandlingScroll || (this._isHandlingScroll = !0, this._settings.container.addEventListener("scroll", this._boundHandleScroll)) }, _stopScrollHandler: function() { this._isHandlingScroll && (this._isHandlingScroll = !1, this._settings.container.removeEventListener("scroll", this._boundHandleScroll)) }, _updateLoadingCount: function(n) { this._loadingCount += n;
                this._elements.length === 0 && this._loadingCount === 0 && f(this._settings.callback_finish) }, handleScroll: function() { var t = this._settings.throttle,
                    i, n;
                t !== 0 ? (i = Date.now(), n = t - (i - this._previousLoopTime), n <= 0 || n > t ? (this._loopTimeout && (clearTimeout(this._loopTimeout), this._loopTimeout = null), this._previousLoopTime = i, this._loopThroughElements()) : this._loopTimeout || (this._loopTimeout = setTimeout(function() { this._previousLoopTime = Date.now();
                    this._loopTimeout = null;
                    this._loopThroughElements() }.bind(this), n))) : this._loopThroughElements() }, loadAll: function() { this._loopThroughElements(!0) }, update: function(n) { var t = this._settings,
                    i; if (typeof element != "undefined" || t.elements_selector != null && t.elements_selector != "") { if (i = n || this._queryOriginNode.querySelectorAll(t.elements_selector), this._elements = et(Array.prototype.slice.call(i)), pt) { this.loadAll(); return }
                    this._loopThroughElements();
                    this._startScrollHandler() } }, destroy: function() { window.removeEventListener("resize", this._boundHandleScroll);
                this._loopTimeout && (clearTimeout(this._loopTimeout), this._loopTimeout = null);
                this._stopScrollHandler();
                this._elements = null;
                this._queryOriginNode = null;
                this._settings = null }, load: function(n, t) { fi(n, this, t) } }, u && vt(c, window.lazyLoadOptions), c }),
    function(n) { "use strict";

        function t(n, t) { n.className += " " + t }

        function r(n, t) { for (var u, i = n.className.split(" "), f = t.split(" "), r = 0; r < f.length; r += 1) u = i.indexOf(f[r]), u > -1 && i.splice(u, 1);
            n.className = i.join(" ") }

        function w() { return n.getComputedStyle(document.body).direction === "rtl" }

        function y() { return document.documentElement && document.documentElement.scrollTop || document.body.scrollTop }

        function p() { return document.documentElement && document.documentElement.scrollLeft || document.body.scrollLeft }

        function l(n) { while (n.lastChild) n.removeChild(n.lastChild) }

        function v(n) { var t, i, r; if (null === n) return n; if (Array.isArray(n)) { for (t = [], i = 0; i < n.length; i += 1) t.push(v(n[i])); return t } if (n instanceof Date) return new Date(n.getTime()); if (n instanceof RegExp) return t = new RegExp(n.source), t.global = n.global, t.ignoreCase = n.ignoreCase, t.multiline = n.multiline, t.lastIndex = n.lastIndex, t; if (typeof n == "object") { t = {}; for (r in n) n.hasOwnProperty(r) && (t[r] = v(n[r])); return t } return n }

        function b(n, t) { var i = n.elements.root;
            i.parentNode.removeChild(i);
            delete n.elements;
            n.settings = v(n.__settings);
            n.__init = t;
            delete n.__internal }

        function h(n, t) { return function() { var i, r; if (arguments.length > 0) { for (i = [], r = 0; r < arguments.length; r += 1) i.push(arguments[r]); return i.push(n), t.apply(n, i) } return t.apply(n, [null, n]) } }

        function k(n, t) { return { index: n, button: t, cancel: !1 } }

        function o(n, t) { if (typeof t.get(n) == "function") return t.get(n).call(t) }

        function nt() {
            function t(n, t) { for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]); return n }

            function i(t) { var i = n[t].dialog; return i && typeof i.__init == "function" && i.__init(i), i }

            function r(i, r, u, f) { var e = { dialog: null, factory: r }; return f !== undefined && (e.factory = function() { return t(new n[f].factory, new r) }), u || (e.dialog = t(new e.factory, d)), n[i] = e } var n = {}; return { defaults: g, dialog: function(n, u, f, e) { if (typeof u != "function") return i(n); if (this.hasOwnProperty(n)) throw new Error("alertify.dialog: name already exists"); var o = r(n, u, f, e);
                    this[n] = f ? function() { if (arguments.length === 0) return o.dialog; var n = t(new o.factory, d); return n && typeof n.__init == "function" && n.__init(n), n.main.apply(n, arguments), n.show.apply(n) } : function() { if (o.dialog && typeof o.dialog.__init == "function" && o.dialog.__init(o.dialog), arguments.length === 0) return o.dialog; var n = o.dialog; return n.main.apply(o.dialog, arguments), n.show.apply(o.dialog) } }, closeAll: function(n) { for (var i, r = f.slice(0), t = 0; t < r.length; t += 1) i = r[t], (n === undefined || n !== i) && i.close() }, setting: function(n, t, r) { if (n === "notifier") return c.setting(t, r); var u = i(n); if (u) return u.setting(t, r) }, set: function(n, t, i) { return this.setting(n, t, i) }, get: function(n, t) { return this.setting(n, t) }, notify: function(n, t, i, r) { return c.create(t, r).push(n, i) }, message: function(n, t, i) { return c.create(null, i).push(n, t) }, success: function(n, t, i) { return c.create("success", i).push(n, t) }, error: function(n, t, i) { return c.create("error", i).push(n, t) }, warning: function(n, t, i) { return c.create("warning", i).push(n, t) }, dismissAll: function() { c.dismissAll() } } } var s = { ENTER: 13, ESC: 27, F1: 112, F12: 123, LEFT: 37, RIGHT: 39 },
            g = { autoReset: !0, basic: !1, closable: !0, closableByDimmer: !0, frameless: !1, maintainFocus: !0, maximizable: !0, modal: !0, movable: !0, moveBounded: !1, overflow: !0, padding: !0, pinnable: !0, pinned: !0, preventBodyShift: !1, resizable: !0, startMaximized: !1, transition: "pulse", notifier: { delay: 5, position: "bottom-right", closeButton: !1 }, glossary: { title: "AlertifyJS", ok: "ĐỒNG Ý", cancel: "Cancel", acccpt: "Accept", deny: "Deny", confirm: "Confirm", decline: "Decline", close: "Close", maximize: "Maximize", restore: "Restore" }, theme: { input: "ajs-input", ok: "ajs-ok", cancel: "ajs-cancel" } },
            f = [],
            u = function() { return document.addEventListener ? function(n, t, i, r) { n.addEventListener(t, i, r === !0) } : document.attachEvent ? function(n, t, i) { n.attachEvent("on" + t, i) } : void 0 }(),
            e = function() { return document.removeEventListener ? function(n, t, i, r) { n.removeEventListener(t, i, r === !0) } : document.detachEvent ? function(n, t, i) { n.detachEvent("on" + t, i) } : void 0 }(),
            a = function() { var n, t, i = !1,
                    r = { animation: "animationend", OAnimation: "oAnimationEnd oanimationend", msAnimation: "MSAnimationEnd", MozAnimation: "animationend", WebkitAnimation: "webkitAnimationEnd" }; for (n in r)
                    if (document.documentElement.style[n] !== undefined) { t = r[n];
                        i = !0; break }
                return { type: t, supported: i } }(),
            d = function() {
                function st(n) { var f, w, l, a, b, y, e, r, p, u, s, o; if (!n.__internal) { if (delete n.__init, n.__settings || (n.__settings = v(n.settings)), typeof n.setup == "function" ? (f = n.setup(), f.options = f.options || {}, f.focus = f.focus || {}) : f = { buttons: [], focus: { element: null, select: !1 }, options: {} }, typeof n.hooks != "object" && (n.hooks = {}), w = [], Array.isArray(f.buttons))
                            for (l = 0; l < f.buttons.length; l += 1) { a = f.buttons[l];
                                b = {}; for (y in a) a.hasOwnProperty(y) && (b[y] = a[y]);
                                w.push(b) }
                        for (e = n.__internal = { isOpen: !1, activeElement: document.body, timerIn: undefined, timerOut: undefined, buttons: w, focus: f.focus, options: { title: undefined, modal: undefined, basic: undefined, frameless: undefined, pinned: undefined, movable: undefined, moveBounded: undefined, resizable: undefined, autoReset: undefined, closable: undefined, closableByDimmer: undefined, maximizable: undefined, startMaximized: undefined, pinnable: undefined, transition: undefined, padding: undefined, overflow: undefined, onshow: undefined, onclosing: undefined, onclose: undefined, onfocus: undefined, onmove: undefined, onmoved: undefined, onresize: undefined, onresized: undefined, onmaximize: undefined, onmaximized: undefined, onrestore: undefined, onrestored: undefined }, resetHandler: undefined, beginMoveHandler: undefined, beginResizeHandler: undefined, bringToFrontHandler: undefined, modalClickHandler: undefined, buttonsClickHandler: undefined, commandsClickHandler: undefined, transitionInHandler: undefined, transitionOutHandler: undefined, destroy: undefined }, r = {}, r.root = document.createElement("div"), r.root.className = c.base + " " + c.hidden + " ", r.root.innerHTML = d.dimmer + d.modal, r.dimmer = r.root.firstChild, r.modal = r.root.lastChild, r.modal.innerHTML = d.dialog, r.dialog = r.modal.firstChild, r.dialog.innerHTML = d.reset + d.commands + d.header + d.body + d.footer + d.resizeHandle + d.reset, r.reset = [], r.reset.push(r.dialog.firstChild), r.reset.push(r.dialog.lastChild), r.commands = {}, r.commands.container = r.reset[0].nextSibling, r.commands.pin = r.commands.container.firstChild, r.commands.maximize = r.commands.pin.nextSibling, r.commands.close = r.commands.maximize.nextSibling, r.header = r.commands.container.nextSibling, r.body = r.header.nextSibling, r.body.innerHTML = d.content, r.content = r.body.firstChild, r.footer = r.body.nextSibling, r.footer.innerHTML = d.buttons.auxiliary + d.buttons.primary, r.resizeHandle = r.footer.nextSibling, r.buttons = {}, r.buttons.auxiliary = r.footer.firstChild, r.buttons.primary = r.buttons.auxiliary.nextSibling, r.buttons.primary.innerHTML = d.button, r.buttonTemplate = r.buttons.primary.firstChild, r.buttons.primary.removeChild(r.buttonTemplate), p = 0; p < n.__internal.buttons.length; p += 1) { u = n.__internal.buttons[p];
                            ot.indexOf(u.key) < 0 && ot.push(u.key);
                            u.element = r.buttonTemplate.cloneNode();
                            u.element.innerHTML = u.text;
                            typeof u.className == "string" && u.className !== "" && t(u.element, u.className); for (s in u.attrs) s !== "className" && u.attrs.hasOwnProperty(s) && u.element.setAttribute(s, u.attrs[s]);
                            u.scope === "auxiliary" ? r.buttons.auxiliary.appendChild(u.element) : r.buttons.primary.appendChild(u.element) }
                        n.elements = r;
                        e.resetHandler = h(n, fi);
                        e.beginMoveHandler = h(n, su);
                        e.beginResizeHandler = h(n, lu);
                        e.bringToFrontHandler = h(n, bi);
                        e.modalClickHandler = h(n, iu);
                        e.buttonsClickHandler = h(n, ru);
                        e.commandsClickHandler = h(n, kr);
                        e.transitionInHandler = h(n, uu);
                        e.transitionOutHandler = h(n, fu); for (o in e.options) f.options[o] !== undefined ? n.set(o, f.options[o]) : i.defaults.hasOwnProperty(o) ? n.set(o, i.defaults[o]) : o === "title" && n.set(o, i.defaults.glossary[o]);
                        typeof n.build == "function" && n.build() }
                    document.body.appendChild(n.elements.root) }

                function ar() { ai = p();
                    ut = y() }

                function vi() { n.scrollTo(ai, ut) }

                function it() { for (var u, n = 0, i = 0; i < f.length; i += 1) u = f[i], (u.isModal() || u.isMaximized()) && (n += 1);
                    n === 0 && document.body.className.indexOf(c.noOverflow) >= 0 ? (r(document.body, c.noOverflow), wi(!1)) : n > 0 && document.body.className.indexOf(c.noOverflow) < 0 && (wi(!0), t(document.body, c.noOverflow)) }

                function wi(u) { i.defaults.preventBodyShift && document.documentElement.scrollHeight > document.documentElement.clientHeight && (u ? (pi = ut, yi = n.getComputedStyle(document.body).top, t(document.body, c.fixed), document.body.style.top = -ut + "px") : (ut = pi, document.body.style.top = yi, r(document.body, c.fixed), vi())) }

                function vr(n, i, u) { typeof u == "string" && r(n.elements.root, c.prefix + u);
                    t(n.elements.root, c.prefix + i);
                    gt = n.elements.root.offsetWidth }

                function yr(n) { n.get("modal") ? (r(n.elements.root, c.modeless), n.isOpen() && (er(n), ii(n), it())) : (t(n.elements.root, c.modeless), n.isOpen() && (fr(n), ii(n), it())) }

                function pr(n) { n.get("basic") ? t(n.elements.root, c.basic) : r(n.elements.root, c.basic) }

                function wr(n) { n.get("frameless") ? t(n.elements.root, c.frameless) : r(n.elements.root, c.frameless) }

                function bi(n, t) { for (var r = f.indexOf(t), i = r + 1; i < f.length; i += 1)
                        if (f[i].isModal()) return;
                    return document.body.lastChild !== t.elements.root && (document.body.appendChild(t.elements.root), f.splice(f.indexOf(t), 1), f.push(t), ui(t)), !1 }

                function br(n, i, u, f) { switch (i) {
                        case "title":
                            n.setHeader(f); break;
                        case "modal":
                            yr(n); break;
                        case "basic":
                            pr(n); break;
                        case "frameless":
                            wr(n); break;
                        case "pinned":
                            gr(n); break;
                        case "closable":
                            tu(n); break;
                        case "maximizable":
                            nu(n); break;
                        case "pinnable":
                            dr(n); break;
                        case "movable":
                            hu(n); break;
                        case "resizable":
                            au(n); break;
                        case "padding":
                            f ? r(n.elements.root, c.noPadding) : n.elements.root.className.indexOf(c.noPadding) < 0 && t(n.elements.root, c.noPadding); break;
                        case "overflow":
                            f ? r(n.elements.root, c.noOverflow) : n.elements.root.className.indexOf(c.noOverflow) < 0 && t(n.elements.root, c.noOverflow); break;
                        case "transition":
                            vr(n, f, u) }
                    typeof n.hooks.onupdate == "function" && n.hooks.onupdate.call(n, i, u, f) }

                function ni(n, t, i, r, u) { var e = { op: undefined, items: [] },
                        s, o, f; if (typeof u == "undefined" && typeof r == "string") e.op = "get", t.hasOwnProperty(r) ? (e.found = !0, e.value = t[r]) : (e.found = !1, e.value = undefined);
                    else if (e.op = "set", typeof r == "object") { o = r; for (f in o) t.hasOwnProperty(f) ? (t[f] !== o[f] && (s = t[f], t[f] = o[f], i.call(n, f, s, o[f])), e.items.push({ key: f, value: o[f], found: !0 })) : e.items.push({ key: f, value: o[f], found: !1 }) } else if (typeof r == "string") t.hasOwnProperty(r) ? (t[r] !== u && (s = t[r], t[r] = u, i.call(n, r, s, u)), e.items.push({ key: r, value: u, found: !0 })) : e.items.push({ key: r, value: u, found: !1 });
                    else throw new Error("args must be a string or object"); return e }

                function ti(n) { var t;
                    ct(n, function(n) { return t = n.invokeOnClose === !0 });!t && n.isOpen() && n.close() }

                function kr(n, t) { var i = n.srcElement || n.target; switch (i) {
                        case t.elements.commands.pin:
                            t.isPinned() ? di(t) : ki(t); break;
                        case t.elements.commands.maximize:
                            t.isMaximized() ? ht(t) : gi(t); break;
                        case t.elements.commands.close:
                            ti(t) } return !1 }

                function ki(n) { n.set("pinned", !0) }

                function di(n) { n.set("pinned", !1) }

                function gi(n) { o("onmaximize", n);
                    t(n.elements.root, c.maximized);
                    n.isOpen() && it();
                    o("onmaximized", n) }

                function ht(n) { o("onrestore", n);
                    r(n.elements.root, c.maximized);
                    n.isOpen() && it();
                    o("onrestored", n) }

                function dr(n) { n.get("pinnable") ? t(n.elements.root, c.pinnable) : r(n.elements.root, c.pinnable) }

                function nr(n) { var t = p();
                    n.elements.modal.style.marginTop = y() + "px";
                    n.elements.modal.style.marginLeft = t + "px";
                    n.elements.modal.style.marginRight = -t + "px" }

                function tr(n) { var r = parseInt(n.elements.modal.style.marginTop, 10),
                        u = parseInt(n.elements.modal.style.marginLeft, 10),
                        t, i;
                    n.elements.modal.style.marginTop = "";
                    n.elements.modal.style.marginLeft = "";
                    n.elements.modal.style.marginRight = "";
                    n.isOpen() && (t = 0, i = 0, n.elements.dialog.style.top !== "" && (t = parseInt(n.elements.dialog.style.top, 10)), n.elements.dialog.style.top = t + (r - y()) + "px", n.elements.dialog.style.left !== "" && (i = parseInt(n.elements.dialog.style.left, 10)), n.elements.dialog.style.left = i + (u - p()) + "px") }

                function ii(n) { n.get("modal") || n.get("pinned") ? tr(n) : nr(n) }

                function gr(n) { n.get("pinned") ? (r(n.elements.root, c.unpinned), n.isOpen() && tr(n)) : (t(n.elements.root, c.unpinned), n.isOpen() && !n.isModal() && nr(n)) }

                function nu(n) { n.get("maximizable") ? t(n.elements.root, c.maximizable) : r(n.elements.root, c.maximizable) }

                function tu(n) { n.get("closable") ? (t(n.elements.root, c.closable), pu(n)) : (r(n.elements.root, c.closable), wu(n)) }

                function iu(n, t) { var i = n.srcElement || n.target; return ri || i !== t.elements.modal || t.get("closableByDimmer") !== !0 || ti(t), ri = !1, !1 }

                function ct(n, t) { for (var r, u, i = 0; i < n.__internal.buttons.length; i += 1)
                        if (r = n.__internal.buttons[i], !r.element.disabled && t(r)) { u = k(i, r);
                            typeof n.callback == "function" && n.callback.apply(n, [u]);
                            u.cancel === !1 && n.close(); break } }

                function ru(n, t) { var i = n.srcElement || n.target;
                    ct(t, function(n) { return n.element === i && (ft = !0) }) }

                function ir(n) { if (ft) { ft = !1; return } var t = f[f.length - 1],
                        i = n.keyCode; return t.__internal.buttons.length === 0 && i === s.ESC && t.get("closable") === !0 ? (ti(t), !1) : ot.indexOf(i) > -1 ? (ct(t, function(n) { return n.key === i }), !1) : void 0 }

                function rr(n) { var u = f[f.length - 1],
                        t = n.keyCode,
                        i, r; if (t === s.LEFT || t === s.RIGHT) { for (i = u.__internal.buttons, r = 0; r < i.length; r += 1)
                            if (document.activeElement === i[r].element) switch (t) {
                                case s.LEFT:
                                    i[(r || i.length) - 1].element.focus(); return;
                                case s.RIGHT:
                                    i[(r + 1) % i.length].element.focus(); return } } else if (t < s.F12 + 1 && t > s.F1 - 1 && ot.indexOf(t) > -1) return n.preventDefault(), n.stopPropagation(), ct(u, function(n) { return n.key === t }), !1 }

                function ui(n, t) { if (t) t.focus();
                    else { var r = n.__internal.focus,
                            i = r.element; switch (typeof r.element) {
                            case "number":
                                n.__internal.buttons.length > r.element && (i = n.get("basic") === !0 ? n.elements.reset[0] : n.__internal.buttons[r.element].element); break;
                            case "string":
                                i = n.elements.body.querySelector(r.element); break;
                            case "function":
                                i = r.element.call(n) }(typeof i == "undefined" || i === null) && n.__internal.buttons.length === 0 && (i = n.elements.reset[0]);
                        i && i.focus && (i.focus(), r.select && i.select && i.select()) } }

                function fi(n, t) { var r, i, u, e; if (!t)
                        for (r = f.length - 1; r > -1; r -= 1)
                            if (f[r].isModal()) { t = f[r]; break }
                    t && t.isModal() && (u = n.srcElement || n.target, e = u === t.elements.reset[1] || t.__internal.buttons.length === 0 && u === document.body, e && (t.get("maximizable") ? i = t.elements.commands.maximize : t.get("closable") && (i = t.elements.commands.close)), i === undefined && (typeof t.__internal.focus.element == "number" ? u === t.elements.reset[0] ? i = t.elements.buttons.auxiliary.firstChild || t.elements.buttons.primary.firstChild : e && (i = t.elements.reset[0]) : u === t.elements.reset[0] && (i = t.elements.buttons.primary.lastChild || t.elements.buttons.auxiliary.lastChild)), ui(t, i)) }

                function uu(n, t) { clearTimeout(t.__internal.timerIn);
                    ui(t);
                    vi();
                    ft = !1;
                    o("onfocus", t);
                    e(t.elements.dialog, a.type, t.__internal.transitionInHandler);
                    r(t.elements.root, c.animationIn) }

                function fu(n, t) { clearTimeout(t.__internal.timerOut);
                    e(t.elements.dialog, a.type, t.__internal.transitionOutHandler);
                    pt(t);
                    dt(t);
                    t.isMaximized() && !t.get("startMaximized") && ht(t);
                    i.defaults.maintainFocus && t.__internal.activeElement && (t.__internal.activeElement.focus(), t.__internal.activeElement = null);
                    typeof t.__internal.destroy == "function" && t.__internal.destroy.apply(t) }

                function eu(n, t) { var r = n[lt] - ei,
                        i = n[at] - et;
                    vt && (i -= document.body.scrollTop);
                    t.style.left = r + "px";
                    t.style.top = i + "px" }

                function ou(n, t) { var r = n[lt] - ei,
                        i = n[at] - et;
                    vt && (i -= document.body.scrollTop);
                    t.style.left = Math.min(nt.maxLeft, Math.max(nt.minLeft, r)) + "px";
                    t.style.top = vt ? Math.min(nt.maxTop, Math.max(nt.minTop, i)) + "px" : Math.max(nt.minTop, i) + "px" }

                function su(n, i) { var u, f, e, r; if (g === null && !i.isMaximized() && i.get("movable") && (f = 0, e = 0, n.type === "touchstart" ? (n.preventDefault(), u = n.targetTouches[0], lt = "clientX", at = "clientY") : n.button === 0 && (u = n), u)) { if (r = i.elements.dialog, t(r, c.capture), r.style.left && (f = parseInt(r.style.left, 10)), r.style.top && (e = parseInt(r.style.top, 10)), ei = u[lt] - f, et = u[at] - e, i.isModal() ? et += i.elements.modal.scrollTop : i.isPinned() && (et -= document.body.scrollTop), i.get("moveBounded")) { var s = r,
                                h = -f,
                                l = -e;
                            do h += s.offsetLeft, l += s.offsetTop; while (s = s.offsetParent);
                            nt = { maxLeft: h, minLeft: -h, maxTop: document.documentElement.clientHeight - r.clientHeight - l, minTop: -l };
                            yt = ou } else nt = null, yt = eu; return o("onmove", i), vt = !i.isModal() && i.isPinned(), tt = i, yt(u, r), t(document.body, c.noSelection), !1 } }

                function oi(n) { if (tt) { var t;
                        n.type === "touchmove" ? (n.preventDefault(), t = n.targetTouches[0]) : n.button === 0 && (t = n);
                        t && yt(t, tt.elements.dialog) } }

                function si() { if (tt) { var n = tt;
                        tt = nt = null;
                        r(document.body, c.noSelection);
                        r(n.elements.dialog, c.capture);
                        o("onmoved", n) } }

                function pt(n) { tt = null; var t = n.elements.dialog;
                    t.style.left = t.style.top = "" }

                function hu(n) { n.get("movable") ? (t(n.elements.root, c.movable), n.isOpen() && or(n)) : (pt(n), r(n.elements.root, c.movable), n.isOpen() && sr(n)) }

                function cu(n, t, i) { var u = t,
                        f = 0,
                        h = 0,
                        r, o, s, e;
                    do f += u.offsetLeft, h += u.offsetTop; while (u = u.offsetParent);
                    i === !0 ? (r = n.pageX, o = n.pageY) : (r = n.clientX, o = n.clientY);
                    s = w();
                    s && (r = document.body.offsetWidth - r, isNaN(rt) || (f = document.body.offsetWidth - f - t.offsetWidth));
                    t.style.height = o - h + kt + "px";
                    t.style.width = r - f + kt + "px";
                    isNaN(rt) || (e = Math.abs(t.offsetWidth - wt) * .5, s && (e *= -1), t.offsetWidth > wt ? t.style.left = rt + e + "px" : t.offsetWidth >= bt && (t.style.left = rt - e + "px")) }

                function lu(n, i) { var u, r; if (!i.isMaximized() && (n.type === "touchstart" ? (n.preventDefault(), u = n.targetTouches[0]) : n.button === 0 && (u = n), u)) return o("onresize", i), g = i, kt = i.elements.resizeHandle.offsetHeight / 2, r = i.elements.dialog, t(r, c.capture), rt = parseInt(r.style.left, 10), r.style.height = r.offsetHeight + "px", r.style.minHeight = i.elements.header.offsetHeight + i.elements.footer.offsetHeight + "px", r.style.width = (wt = r.offsetWidth) + "px", r.style.maxWidth !== "none" && (r.style.minWidth = (bt = r.offsetWidth) + "px"), r.style.maxWidth = "none", t(document.body, c.noSelection), !1 }

                function hi(n) { if (g) { var t;
                        n.type === "touchmove" ? (n.preventDefault(), t = n.targetTouches[0]) : n.button === 0 && (t = n);
                        t && cu(t, g.elements.dialog, !g.get("modal") && !g.get("pinned")) } }

                function ci() { if (g) { var n = g;
                        g = null;
                        r(document.body, c.noSelection);
                        r(n.elements.dialog, c.capture);
                        ri = !0;
                        o("onresized", n) } }

                function dt(n) { g = null; var t = n.elements.dialog;
                    t.style.maxWidth === "none" && (t.style.maxWidth = t.style.minWidth = t.style.width = t.style.height = t.style.minHeight = t.style.left = "", rt = Number.Nan, wt = bt = kt = 0) }

                function au(n) { n.get("resizable") ? (t(n.elements.root, c.resizable), n.isOpen() && hr(n)) : (dt(n), r(n.elements.root, c.resizable), n.isOpen() && cr(n)) }

                function ur() { for (var t, n = 0; n < f.length; n += 1) t = f[n], t.get("autoReset") && (pt(t), dt(t)) }

                function vu(t) { f.length === 1 && (u(n, "resize", ur), u(document.body, "keyup", ir), u(document.body, "keydown", rr), u(document.body, "focus", fi), u(document.documentElement, "mousemove", oi), u(document.documentElement, "touchmove", oi), u(document.documentElement, "mouseup", si), u(document.documentElement, "touchend", si), u(document.documentElement, "mousemove", hi), u(document.documentElement, "touchmove", hi), u(document.documentElement, "mouseup", ci), u(document.documentElement, "touchend", ci));
                    u(t.elements.commands.container, "click", t.__internal.commandsClickHandler);
                    u(t.elements.footer, "click", t.__internal.buttonsClickHandler);
                    u(t.elements.reset[0], "focus", t.__internal.resetHandler);
                    u(t.elements.reset[1], "focus", t.__internal.resetHandler);
                    ft = !0;
                    u(t.elements.dialog, a.type, t.__internal.transitionInHandler);
                    t.get("modal") || fr(t);
                    t.get("resizable") && hr(t);
                    t.get("movable") && or(t) }

                function yu(t) { f.length === 1 && (e(n, "resize", ur), e(document.body, "keyup", ir), e(document.body, "keydown", rr), e(document.body, "focus", fi), e(document.documentElement, "mousemove", oi), e(document.documentElement, "mouseup", si), e(document.documentElement, "mousemove", hi), e(document.documentElement, "mouseup", ci));
                    e(t.elements.commands.container, "click", t.__internal.commandsClickHandler);
                    e(t.elements.footer, "click", t.__internal.buttonsClickHandler);
                    e(t.elements.reset[0], "focus", t.__internal.resetHandler);
                    e(t.elements.reset[1], "focus", t.__internal.resetHandler);
                    u(t.elements.dialog, a.type, t.__internal.transitionOutHandler);
                    t.get("modal") || er(t);
                    t.get("movable") && sr(t);
                    t.get("resizable") && cr(t) }

                function fr(n) { u(n.elements.dialog, "focus", n.__internal.bringToFrontHandler, !0) }

                function er(n) { e(n.elements.dialog, "focus", n.__internal.bringToFrontHandler, !0) }

                function or(n) { u(n.elements.header, "mousedown", n.__internal.beginMoveHandler);
                    u(n.elements.header, "touchstart", n.__internal.beginMoveHandler) }

                function sr(n) { e(n.elements.header, "mousedown", n.__internal.beginMoveHandler);
                    e(n.elements.header, "touchstart", n.__internal.beginMoveHandler) }

                function hr(n) { u(n.elements.resizeHandle, "mousedown", n.__internal.beginResizeHandler);
                    u(n.elements.resizeHandle, "touchstart", n.__internal.beginResizeHandler) }

                function cr(n) { e(n.elements.resizeHandle, "mousedown", n.__internal.beginResizeHandler);
                    e(n.elements.resizeHandle, "touchstart", n.__internal.beginResizeHandler) }

                function pu(n) { u(n.elements.modal, "click", n.__internal.modalClickHandler) }

                function wu(n) { e(n.elements.modal, "click", n.__internal.modalClickHandler) } var ot = [],
                    gt = null,
                    li = !1,
                    lr = n.navigator.userAgent.indexOf("Safari") > -1 && n.navigator.userAgent.indexOf("Chrome") < 0,
                    d = { dimmer: '<div class="ajs-dimmer"><\/div>', modal: '<div class="ajs-modal" tabindex="0"><\/div>', dialog: '<div class="ajs-dialog" tabindex="0"><\/div>', reset: '<button class="ajs-reset"><\/button>', commands: '<div class="ajs-commands"><button class="ajs-pin"><\/button><button class="ajs-maximize"><\/button><button class="ajs-close"><\/button><\/div>', header: '<div class="ajs-header"><\/div>', body: '<div class="ajs-body"><\/div>', content: '<div class="ajs-content"><\/div>', footer: '<div class="ajs-footer"><\/div>', buttons: { primary: '<div class="ajs-primary ajs-buttons"><\/div>', auxiliary: '<div class="ajs-auxiliary ajs-buttons"><\/div>' }, button: '<button class="ajs-button"><\/button>', resizeHandle: '<div class="ajs-handle"><\/div>' },
                    c = { animationIn: "ajs-in", animationOut: "ajs-out", base: "alertify", basic: "ajs-basic", capture: "ajs-capture", closable: "ajs-closable", fixed: "ajs-fixed", frameless: "ajs-frameless", hidden: "ajs-hidden", maximize: "ajs-maximize", maximized: "ajs-maximized", maximizable: "ajs-maximizable", modeless: "ajs-modeless", movable: "ajs-movable", noSelection: "ajs-no-selection", noOverflow: "ajs-no-overflow", noPadding: "ajs-no-padding", pin: "ajs-pin", pinnable: "ajs-pinnable", prefix: "ajs-", resizable: "ajs-resizable", restore: "ajs-restore", shake: "ajs-shake", unpinned: "ajs-unpinned" },
                    ai, ut, yi = "",
                    pi = 0,
                    ri = !1,
                    ft = !1,
                    tt = null,
                    ei = 0,
                    et = 0,
                    lt = "pageX",
                    at = "pageY",
                    nt = null,
                    vt = !1,
                    yt = null,
                    g = null,
                    rt = Number.Nan,
                    wt = 0,
                    bt = 0,
                    kt = 0; return { __init: st, isOpen: function() { return this.__internal.isOpen }, isModal: function() { return this.elements.root.className.indexOf(c.modeless) < 0 }, isMaximized: function() { return this.elements.root.className.indexOf(c.maximized) > -1 }, isPinned: function() { return this.elements.root.className.indexOf(c.unpinned) < 0 }, maximize: function() { return this.isMaximized() || gi(this), this }, restore: function() { return this.isMaximized() && ht(this), this }, pin: function() { return this.isPinned() || ki(this), this }, unpin: function() { return this.isPinned() && di(this), this }, bringToFront: function() { return bi(null, this), this }, moveTo: function(n, t) { var e, s; if (!isNaN(n) && !isNaN(t)) { o("onmove", this); var i = this.elements.dialog,
                                r = i,
                                u = 0,
                                f = 0;
                            i.style.left && (u -= parseInt(i.style.left, 10));
                            i.style.top && (f -= parseInt(i.style.top, 10));
                            do u += r.offsetLeft, f += r.offsetTop; while (r = r.offsetParent);
                            e = n - u;
                            s = t - f;
                            w() && (e *= -1);
                            i.style.left = e + "px";
                            i.style.top = s + "px";
                            o("onmoved", this) } return this }, resizeTo: function(n, t) { var r = parseFloat(n),
                            u = parseFloat(t),
                            f = /(\d*\.\d+|\d+)%/,
                            i; return isNaN(r) || isNaN(u) || this.get("resizable") !== !0 || (o("onresize", this), ("" + n).match(f) && (r = r / 100 * document.documentElement.clientWidth), ("" + t).match(f) && (u = u / 100 * document.documentElement.clientHeight), i = this.elements.dialog, i.style.maxWidth !== "none" && (i.style.minWidth = (bt = i.offsetWidth) + "px"), i.style.maxWidth = "none", i.style.minHeight = this.elements.header.offsetHeight + this.elements.footer.offsetHeight + "px", i.style.width = r + "px", i.style.height = u + "px", o("onresized", this)), this }, setting: function(n, t) { var e = this,
                            i = ni(this, this.__internal.options, function(n, t, i) { br(e, n, t, i) }, n, t),
                            f, r, u; if (i.op === "get") return i.found ? i.value : typeof this.settings != "undefined" ? ni(this, this.settings, this.settingUpdated || function() {}, n, t).value : undefined; if (i.op === "set") { if (i.items.length > 0)
                                for (f = this.settingUpdated || function() {}, r = 0; r < i.items.length; r += 1) u = i.items[r], u.found || typeof this.settings == "undefined" || ni(this, this.settings, f, u.key, u.value); return this } }, set: function(n, t) { return this.setting(n, t), this }, get: function(n) { return this.setting(n) }, setHeader: function(t) { return typeof t == "string" ? (l(this.elements.header), this.elements.header.innerHTML = t) : t instanceof n.HTMLElement && this.elements.header.firstChild !== t && (l(this.elements.header), this.elements.header.appendChild(t)), this }, setContent: function(t) { return typeof t == "string" ? (l(this.elements.content), this.elements.content.innerHTML = t) : t instanceof n.HTMLElement && this.elements.content.firstChild !== t && (l(this.elements.content), this.elements.content.appendChild(t)), this }, showModal: function(n) { return this.show(!0, n) }, show: function(n, u) { var e, s; return st(this), this.__internal.isOpen ? (pt(this), dt(this), t(this.elements.dialog, c.shake), s = this, setTimeout(function() { r(s.elements.dialog, c.shake) }, 200)) : (this.__internal.isOpen = !0, f.push(this), i.defaults.maintainFocus && (this.__internal.activeElement = document.activeElement), document.body.hasAttribute("tabindex") || document.body.setAttribute("tabindex", li = "0"), typeof this.prepare == "function" && this.prepare(), vu(this), n !== undefined && this.set("modal", n), ar(), it(), typeof u == "string" && u !== "" && (this.__internal.className = u, t(this.elements.root, u)), this.get("startMaximized") ? this.maximize() : this.isMaximized() && ht(this), ii(this), r(this.elements.root, c.animationOut), t(this.elements.root, c.animationIn), clearTimeout(this.__internal.timerIn), this.__internal.timerIn = setTimeout(this.__internal.transitionInHandler, a.supported ? 1e3 : 100), lr && (e = this.elements.root, e.style.display = "none", setTimeout(function() { e.style.display = "block" }, 0)), gt = this.elements.root.offsetWidth, r(this.elements.root, c.hidden), typeof this.hooks.onshow == "function" && this.hooks.onshow.call(this), o("onshow", this)), this }, close: function() { return this.__internal.isOpen && o("onclosing", this) !== !1 && (yu(this), r(this.elements.root, c.animationIn), t(this.elements.root, c.animationOut), clearTimeout(this.__internal.timerOut), this.__internal.timerOut = setTimeout(this.__internal.transitionOutHandler, a.supported ? 1e3 : 100), t(this.elements.root, c.hidden), gt = this.elements.modal.offsetWidth, typeof this.__internal.className != "undefined" && this.__internal.className !== "" && r(this.elements.root, this.__internal.className), typeof this.hooks.onclose == "function" && this.hooks.onclose.call(this), o("onclose", this), f.splice(f.indexOf(this), 1), this.__internal.isOpen = !1, it()), f.length || li !== "0" || document.body.removeAttribute("tabindex"), this }, closeOthers: function() { return i.closeAll(this), this }, destroy: function() { return this.__internal.isOpen ? (this.__internal.destroy = function() { b(this, st) }, this.close()) : b(this, st), this } } }(),
            c = function() {
                function v(n) { n.__internal || (n.__internal = { position: i.defaults.notifier.position, delay: i.defaults.notifier.delay }, o = document.createElement("DIV"), y(n));
                    o.parentNode !== document.body && document.body.appendChild(o) }

                function w(n) { n.__internal.pushed = !0;
                    s.push(n) }

                function b(n) { s.splice(s.indexOf(n), 1);
                    n.__internal.pushed = !1 }

                function y(n) { o.className = f.base; switch (n.__internal.position) {
                        case "top-right":
                            t(o, f.top + " " + f.right); break;
                        case "top-left":
                            t(o, f.top + " " + f.left); break;
                        case "top-center":
                            t(o, f.top + " " + f.center); break;
                        case "bottom-left":
                            t(o, f.bottom + " " + f.left); break;
                        case "bottom-center":
                            t(o, f.bottom + " " + f.center); break;
                        default:
                        case "bottom-right":
                            t(o, f.bottom + " " + f.right) } }

                function k(s, v) {
                    function d(n, t) { t.__internal.closeButton && n.target.getAttribute("data-close") !== "true" || t.dismiss(!0) }

                    function k(n, t) { e(t.element, a.type, k);
                        o.removeChild(t.element) }

                    function g(n) { return n.__internal || (n.__internal = { pushed: !1, delay: undefined, timer: undefined, clickHandler: undefined, transitionEndHandler: undefined, transitionTimeout: undefined }, n.__internal.clickHandler = h(n, d), n.__internal.transitionEndHandler = h(n, k)), n }

                    function y(n) { clearTimeout(n.__internal.timer);
                        clearTimeout(n.__internal.transitionTimeout) } return g({ element: s, push: function(n, r) { if (!this.__internal.pushed) { w(this);
                                y(this); var s, e; switch (arguments.length) {
                                    case 0:
                                        e = this.__internal.delay; break;
                                    case 1:
                                        typeof n == "number" ? e = n : (s = n, e = this.__internal.delay); break;
                                    case 2:
                                        s = n;
                                        e = r } return this.__internal.closeButton = i.defaults.notifier.closeButton, typeof s != "undefined" && this.setContent(s), c.__internal.position.indexOf("top") < 0 ? o.appendChild(this.element) : o.insertBefore(this.element, o.firstChild), p = this.element.offsetWidth, t(this.element, f.visible), u(this.element, "click", this.__internal.clickHandler), this.delay(e) } return this }, ondismiss: function() {}, callback: v, dismiss: function(n) { return this.__internal.pushed && (y(this), typeof this.ondismiss == "function" && this.ondismiss.call(this) === !1 || (e(this.element, "click", this.__internal.clickHandler), typeof this.element != "undefined" && this.element.parentNode === o && (this.__internal.transitionTimeout = setTimeout(this.__internal.transitionEndHandler, a.supported ? 1e3 : 100), r(this.element, f.visible), typeof this.callback == "function" && this.callback.call(this, n)), b(this))), this }, delay: function(n) { if (y(this), this.__internal.delay = typeof n != "undefined" && !isNaN(+n) ? +n : c.__internal.delay, this.__internal.delay > 0) { var t = this;
                                this.__internal.timer = setTimeout(function() { t.dismiss() }, this.__internal.delay * 1e3) } return this }, setContent: function(i) { if (typeof i == "string" ? (l(this.element), this.element.innerHTML = i) : i instanceof n.HTMLElement && this.element.firstChild !== i && (l(this.element), this.element.appendChild(i)), this.__internal.closeButton) { var r = document.createElement("span");
                                t(r, f.close);
                                r.setAttribute("data-close", !0);
                                this.element.appendChild(r) } return this }, dismissOthers: function() { return c.dismissAll(this), this } }) } var p, o, s = [],
                    f = { base: "alertify-notifier", message: "ajs-message", top: "ajs-top", right: "ajs-right", bottom: "ajs-bottom", left: "ajs-left", center: "ajs-center", visible: "ajs-visible", hidden: "ajs-hidden", close: "ajs-close" }; return { setting: function(n, t) { if (v(this), typeof t == "undefined") return this.__internal[n]; switch (n) {
                            case "position":
                                this.__internal.position = t;
                                y(this); break;
                            case "delay":
                                this.__internal.delay = t } return this }, set: function(n, t) { return this.setting(n, t), this }, get: function(n) { return this.setting(n) }, create: function(n, t) { v(this); var i = document.createElement("div"); return i.className = f.message + (typeof n == "string" && n !== "" ? " ajs-" + n : ""), k(i, t) }, dismissAll: function(n) { for (var i, r = s.slice(0), t = 0; t < r.length; t += 1) i = r[t], (n === undefined || n !== i) && i.dismiss() } } }(),
            i = new nt;
        i.dialog("alert", function() { return { main: function(n, t, i) { var u, r, f; switch (arguments.length) {
                        case 1:
                            r = n; break;
                        case 2:
                            typeof t == "function" ? (r = n, f = t) : (u = n, r = t); break;
                        case 3:
                            u = n;
                            r = t;
                            f = i } return this.set("title", u), this.set("message", r), this.set("onok", f), this }, setup: function() { return { buttons: [{ text: i.defaults.glossary.ok, key: s.ESC, invokeOnClose: !0, className: i.defaults.theme.ok }], focus: { element: 0, select: !1 }, options: { maximizable: !1, resizable: !1 } } }, build: function() {}, prepare: function() {}, setMessage: function(n) { this.setContent(n) }, settings: { message: undefined, onok: undefined, label: undefined }, settingUpdated: function(n, t, i) { switch (n) {
                        case "message":
                            this.setMessage(i); break;
                        case "label":
                            this.__internal.buttons[0].element && (this.__internal.buttons[0].element.innerHTML = i) } }, callback: function(n) { if (typeof this.get("onok") == "function") { var t = this.get("onok").call(this, n);
                        typeof t != "undefined" && (n.cancel = !t) } } } });
        i.dialog("confirm", function() {
            function t(t) { n.timer !== null && (clearInterval(n.timer), n.timer = null, t.__internal.buttons[n.index].element.innerHTML = n.text) }

            function r(i, r, u) { t(i);
                n.duration = u;
                n.index = r;
                n.text = i.__internal.buttons[r].element.innerHTML;
                n.timer = setInterval(h(i, n.task), 1e3);
                n.task(null, i) } var n = { timer: null, index: null, text: null, duration: null, task: function(i, r) { if (r.isOpen()) { if (r.__internal.buttons[n.index].element.innerHTML = n.text + " (&#8207;" + n.duration + "&#8207;) ", n.duration -= 1, n.duration === -1) { t(r); var f = r.__internal.buttons[n.index],
                                u = k(n.index, f);
                            typeof r.callback == "function" && r.callback.apply(r, [u]);
                            u.close !== !1 && r.close() } } else t(r) } }; return { main: function(n, t, i, r) { var o, u, f, e; switch (arguments.length) {
                        case 1:
                            u = n; break;
                        case 2:
                            u = n;
                            f = t; break;
                        case 3:
                            u = n;
                            f = t;
                            e = i; break;
                        case 4:
                            o = n;
                            u = t;
                            f = i;
                            e = r } return this.set("title", o), this.set("message", u), this.set("onok", f), this.set("oncancel", e), this }, setup: function() { return { buttons: [{ text: i.defaults.glossary.ok, key: s.ENTER, className: i.defaults.theme.ok }, { text: i.defaults.glossary.cancel, key: s.ESC, invokeOnClose: !0, className: i.defaults.theme.cancel }], focus: { element: 0, select: !1 }, options: { maximizable: !1, resizable: !1 } } }, build: function() {}, prepare: function() {}, setMessage: function(n) { this.setContent(n) }, settings: { message: null, labels: null, onok: null, oncancel: null, defaultFocus: null, reverseButtons: null }, settingUpdated: function(n, t, i) { switch (n) {
                        case "message":
                            this.setMessage(i); break;
                        case "labels":
                            "ok" in i && this.__internal.buttons[0].element && (this.__internal.buttons[0].text = i.ok, this.__internal.buttons[0].element.innerHTML = i.ok); "cancel" in i && this.__internal.buttons[1].element && (this.__internal.buttons[1].text = i.cancel, this.__internal.buttons[1].element.innerHTML = i.cancel); break;
                        case "reverseButtons":
                            i === !0 ? this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element) : this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element); break;
                        case "defaultFocus":
                            this.__internal.focus.element = i === "ok" ? 0 : 1 } }, callback: function(n) { t(this); var i; switch (n.index) {
                        case 0:
                            typeof this.get("onok") == "function" && (i = this.get("onok").call(this, n), typeof i != "undefined" && (n.cancel = !i)); break;
                        case 1:
                            typeof this.get("oncancel") == "function" && (i = this.get("oncancel").call(this, n), typeof i != "undefined" && (n.cancel = !i)) } }, autoOk: function(n) { return r(this, 0, n), this }, autoCancel: function(n) { return r(this, 1, n), this } } });
        i.dialog("prompt", function() { var t = document.createElement("INPUT"),
                r = document.createElement("P"); return { main: function(n, t, i, r, u) { var h, f, e, o, s; switch (arguments.length) {
                        case 1:
                            f = n; break;
                        case 2:
                            f = n;
                            e = t; break;
                        case 3:
                            f = n;
                            e = t;
                            o = i; break;
                        case 4:
                            f = n;
                            e = t;
                            o = i;
                            s = r; break;
                        case 5:
                            h = n;
                            f = t;
                            e = i;
                            o = r;
                            s = u } return this.set("title", h), this.set("message", f), this.set("value", e), this.set("onok", o), this.set("oncancel", s), this }, setup: function() { return { buttons: [{ text: i.defaults.glossary.ok, key: s.ENTER, className: i.defaults.theme.ok }, { text: i.defaults.glossary.cancel, key: s.ESC, invokeOnClose: !0, className: i.defaults.theme.cancel }], focus: { element: t, select: !0 }, options: { maximizable: !1, resizable: !1 } } }, build: function() { t.className = i.defaults.theme.input;
                    t.setAttribute("type", "text");
                    t.value = this.get("value");
                    this.elements.content.appendChild(r);
                    this.elements.content.appendChild(t) }, prepare: function() {}, setMessage: function(t) { typeof t == "string" ? (l(r), r.innerHTML = t) : t instanceof n.HTMLElement && r.firstChild !== t && (l(r), r.appendChild(t)) }, settings: { message: undefined, labels: undefined, onok: undefined, oncancel: undefined, value: "", type: "text", reverseButtons: undefined }, settingUpdated: function(n, i, r) { switch (n) {
                        case "message":
                            this.setMessage(r); break;
                        case "value":
                            t.value = r; break;
                        case "type":
                            switch (r) {
                                case "text":
                                case "color":
                                case "date":
                                case "datetime-local":
                                case "email":
                                case "month":
                                case "number":
                                case "password":
                                case "search":
                                case "tel":
                                case "time":
                                case "week":
                                    t.type = r; break;
                                default:
                                    t.type = "text" } break;
                        case "labels":
                            r.ok && this.__internal.buttons[0].element && (this.__internal.buttons[0].element.innerHTML = r.ok);
                            r.cancel && this.__internal.buttons[1].element && (this.__internal.buttons[1].element.innerHTML = r.cancel); break;
                        case "reverseButtons":
                            r === !0 ? this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element) : this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element) } }, callback: function(n) { var i; switch (n.index) {
                        case 0:
                            this.settings.value = t.value;
                            typeof this.get("onok") == "function" && (i = this.get("onok").call(this, n, this.settings.value), typeof i != "undefined" && (n.cancel = !i)); break;
                        case 1:
                            typeof this.get("oncancel") == "function" && (i = this.get("oncancel").call(this, n), typeof i != "undefined" && (n.cancel = !i));
                            n.cancel || (t.value = this.settings.value) } } } });
        typeof module == "object" && typeof module.exports == "object" ? module.exports = i : typeof define == "function" && define.amd ? define([], function() { return i }) : n.alertify || (n.alertify = i) }(typeof window != "undefined" ? window : this);
/*! js-cookie v2.2.0 | MIT */
! function(n) { var t = !1,
        r, i;
    ("function" == typeof define && define.amd && (define(n), t = !0), "object" == typeof exports && (module.exports = n(), t = !0), t) || (r = window.Cookies, i = window.Cookies = n(), i.noConflict = function() { return window.Cookies = r, i }) }(function() {
    function n() { for (var i, r, n = 0, t = {}; n < arguments.length; n++) { i = arguments[n]; for (r in i) t[r] = i[r] } return t }

    function t(i) {
        function r(t, u, f) { var o, c, l, s, v, e, h; if ("undefined" != typeof document) { if (arguments.length > 1) { "number" == typeof(f = n({ path: "/" }, r.defaults, f)).expires && (c = new Date, c.setMilliseconds(c.getMilliseconds() + 864e5 * f.expires), f.expires = c);
                    f.expires = f.expires ? f.expires.toUTCString() : ""; try { o = JSON.stringify(u); /^[\{\[]/.test(o) && (u = o) } catch (n) {}
                    u = i.write ? i.write(u, t) : encodeURIComponent(u + "").replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
                    t = (t = (t = encodeURIComponent(t + "")).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                    l = ""; for (s in f) f[s] && (l += "; " + s, !0 !== f[s] && (l += "=" + f[s])); return document.cookie = t + "=" + u + l }
                t || (o = {}); for (var y = document.cookie ? document.cookie.split("; ") : [], p = /(%[0-9A-Z]{2})+/g, a = 0; a < y.length; a++) { v = y[a].split("=");
                    e = v.slice(1).join("=");
                    this.json || '"' !== e.charAt(0) || (e = e.slice(1, -1)); try { if (h = v[0].replace(p, decodeURIComponent), e = i.read ? i.read(e, h) : i(e, h) || e.replace(p, decodeURIComponent), this.json) try { e = JSON.parse(e) } catch (n) {}
                        if (t === h) { o = e; break }
                        t || (o[h] = e) } catch (n) {} } return o } } return r.set = r, r.get = function(n) { return r.call(r, n) }, r.getJSON = function() { return r.apply({ json: !0 }, [].slice.call(arguments)) }, r.defaults = {}, r.remove = function(t, i) { r(t, "", n(i, { expires: -1 })) }, r.withConverter = t, r } return t(function() {}) }),
function(n) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], n) : "undefined" != typeof module && module.exports ? module.exports = n(require("jquery")) : n(jQuery) }(function(n) { "use strict";

    function r(t) { return !t.nodeName || -1 !== n.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) }

    function i(t) { return n.isFunction(t) || n.isPlainObject(t) ? t : { top: t, left: t } } var t = n.scrollTo = function(t, i, r) { return n(window).scrollTo(t, i, r) }; return t.defaults = { axis: "xy", duration: 0, limit: !0 }, n.fn.scrollTo = function(u, f, e) { "object" == typeof f && (e = f, f = 0); "function" == typeof e && (e = { onAfter: e }); "max" === u && (u = 9e9);
        e = n.extend({}, t.defaults, e);
        f = f || e.duration; var o = e.queue && 1 < e.axis.length; return o && (f /= 2), e.offset = i(e.offset), e.over = i(e.over), this.each(function() {
            function y(t) { var i = n.extend({}, e, { queue: !0, duration: f, complete: t && function() { t.call(c, s, e) } });
                a.animate(h, i) } var p; if (null !== u) { var l = r(this),
                    c = l ? this.contentWindow || window : this,
                    a = n(c),
                    s = u,
                    h = {},
                    v; switch (typeof s) {
                    case "number":
                    case "string":
                        if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(s)) { s = i(s); break }
                        s = l ? n(s) : n(s, c);
                    case "object":
                        if (s.length === 0) return;
                        (s.is || s.style) && (v = (s = n(s)).offset()) }
                p = n.isFunction(e.offset) && e.offset(c, s) || e.offset;
                n.each(e.axis.split(""), function(n, i) { var u = "x" === i ? "Left" : "Top",
                        f = u.toLowerCase(),
                        r = "scroll" + u,
                        w = a[r](),
                        b = t.max(c, i);
                    v ? (h[r] = v[f] + (l ? 0 : w - a.offset()[f]), e.margin && (h[r] -= parseInt(s.css("margin" + u), 10) || 0, h[r] -= parseInt(s.css("border" + u + "Width"), 10) || 0), h[r] += p[f] || 0, e.over[f] && (h[r] += s["x" === i ? "width" : "height"]() * e.over[f])) : (u = s[f], h[r] = u.slice && "%" === u.slice(-1) ? parseFloat(u) / 100 * b : u);
                    e.limit && /^\d+$/.test(h[r]) && (h[r] = 0 >= h[r] ? 0 : Math.min(h[r], b));!n && 1 < e.axis.length && (w === h[r] ? h = {} : o && (y(e.onAfterFirst), h = {})) });
                y(e.onAfter) } }) }, t.max = function(t, i) { var u = "x" === i ? "Width" : "Height",
            e = "scroll" + u; if (!r(t)) return t[e] - n(t)[u.toLowerCase()](); var u = "client" + u,
            f = t.ownerDocument || t.document,
            o = f.documentElement,
            f = f.body; return Math.max(o[e], f[e]) - Math.min(o[u], f[u]) }, n.Tween.propHooks.scrollLeft = n.Tween.propHooks.scrollTop = { get: function(t) { return n(t.elem)[t.prop]() }, set: function(t) { var r = this.get(t),
                i; if (t.options.interrupt && t._last && t._last !== r) return n(t.elem).stop();
            i = Math.round(t.now);
            r !== i && (n(t.elem)[t.prop](i), t._last = this.get(t)) } }, t });
var EasyAutocomplete = function(n) { return n.Configuration = function(n) {
            function u() { var f, i, e, r, u; if (n.dataType === "xml" && (n.getValue || (n.getValue = function(n) { return $(n).text() }), n.list || (n.list = {}), n.list.sort || (n.list.sort = {}), n.list.sort.method = function(t, i) { return (t = n.getValue(t), i = n.getValue(i), t < i) ? -1 : t > i ? 1 : 0 }, n.list.match || (n.list.match = {}), n.list.match.method = function(n, t) { return n.search(t) > -1 ? !0 : !1 }), n.categories !== undefined && n.categories instanceof Array) { for (f = [], i = 0, e = n.categories.length; i < e; i += 1) { r = n.categories[i]; for (u in t.categories[0]) r[u] === undefined && (r[u] = t.categories[0][u]);
                        f.push(r) }
                    n.categories = f } }

            function f() {
                function i(n, t) { var u = n || {}; for (var r in n) t[r] !== undefined && t[r] !== null && (typeof t[r] != "object" || t[r] instanceof Array ? u[r] = t[r] : i(n[r], t[r])); return t.data !== undefined && t.data !== null && typeof t.data == "object" && (u.data = t.data), u }
                t = i(t, n) }

            function e() { var i, r, u;
                t.url !== "list-required" && typeof t.url != "function" && (i = t.url, t.url = function() { return i });
                t.ajaxSettings.url !== undefined && typeof t.ajaxSettings.url != "function" && (i = t.ajaxSettings.url, t.ajaxSettings.url = function() { return i });
                typeof t.listLocation == "string" && (r = t.listLocation, t.listLocation = t.dataType.toUpperCase() === "XML" ? function(n) { return $(n).find(r) } : function(n) { return n[r] });
                typeof t.getValue == "string" && (u = t.getValue, t.getValue = function(n) { return n[u] });
                n.categories !== undefined && (t.categoriesAssigned = !0) }

            function o() { t.ajaxSettings = n.ajaxSettings !== undefined && typeof n.ajaxSettings == "object" ? n.ajaxSettings : {} }

            function s(n) { return t[n] !== undefined && t[n] !== null ? !0 : !1 }

            function i(n, i) {
                function u(t, i) { for (var f in i) t[f] === undefined && n.log("Property '" + f + "' does not exist in EasyAutocomplete options API."), typeof t[f] == "object" && $.inArray(f, r) === -1 && u(t[f], i[f]) }
                u(t, i) } var t = { data: "list-required", url: "list-required", dataType: "json", listLocation: function(n) { return n }, xmlElementName: "", getValue: function(n) { return n }, autocompleteOff: !0, placeholder: !1, ajaxCallback: function() {}, matchResponseProperty: !1, list: { sort: { enabled: !1, method: function(n, i) { return (n = t.getValue(n), i = t.getValue(i), n < i) ? -1 : n > i ? 1 : 0 } }, maxNumberOfElements: 6, hideOnEmptyPhrase: !0, match: { enabled: !1, caseSensitive: !1, method: function(n, t) { return n.search(t) > -1 ? !0 : !1 } }, showAnimation: { type: "normal", time: 400, callback: function() {} }, hideAnimation: { type: "normal", time: 400, callback: function() {} }, onClickEvent: function() {}, onSelectItemEvent: function() {}, onLoadEvent: function() {}, onChooseEvent: function() {}, onKeyEnterEvent: function() {}, onMouseOverEvent: function() {}, onMouseOutEvent: function() {}, onShowListEvent: function() {}, onHideListEvent: function() {} }, highlightPhrase: !0, theme: "", cssClasses: "", minCharNumber: 0, requestDelay: 0, adjustWidth: !0, ajaxSettings: {}, preparePostData: function(n) { return n }, loggerEnabled: !0, template: "", categoriesAssigned: !1, categories: [{ maxNumberOfElements: 4 }], disableAutoReplaceInput: !1 },
                r = ["ajaxSettings", "template"];
            this.get = function(n) { return t[n] };
            this.equals = function(n, i) { return s(n) && t[n] === i ? !0 : !1 };
            this.checkDataUrlProperties = function() { return t.url === "list-required" && t.data === "list-required" ? !1 : !0 };
            this.checkRequiredProperties = function() { for (var n in t)
                    if (t[n] === "required") return logger.error("Option " + n + " must be defined"), !1;
                return !0 };
            this.printPropertiesThatDoesntExist = function(n, t) { i(n, t) };
            u();
            f();
            t.loggerEnabled === !0 && i(console, n);
            o();
            e() }, n }(EasyAutocomplete || {}),
    EasyAutocomplete = function(n) { return n.Logger = function() { this.error = function(n) { console.log("ERROR: " + n) };
            this.warning = function(n) { console.log("WARNING: " + n) } }, n }(EasyAutocomplete || {}),
    EasyAutocomplete = function(n) { return n.Constans = function() { var n = { CONTAINER_CLASS: "easy-autocomplete-container", CONTAINER_ID: "eac-container-", WRAPPER_CSS_CLASS: "easy-autocomplete" };
            this.getValue = function(t) { return n[t] } }, n }(EasyAutocomplete || {}),
    EasyAutocomplete = function(n) { return n.ListBuilderService = function(n, t) {
            function i(t, i) {
                function f() { var u = {},
                        r; return t.xmlElementName !== undefined && (u.xmlElementName = t.xmlElementName), t.listLocation !== undefined ? r = t.listLocation : n.get("listLocation") !== undefined && (r = n.get("listLocation")), r !== undefined ? typeof r == "string" ? u.data = $(i).find(r) : typeof r == "function" && (u.data = r(i)) : u.data = i, u }

                function e() { var n = {}; return t.listLocation !== undefined ? typeof t.listLocation == "string" ? n.data = i[t.listLocation] : typeof t.listLocation == "function" && (n.data = t.listLocation(i)) : n.data = i, n } var r = {},
                    u; return r = n.get("dataType").toUpperCase() === "XML" ? f() : e(), t.header !== undefined && (r.header = t.header), t.maxNumberOfElements !== undefined && (r.maxNumberOfElements = t.maxNumberOfElements), n.get("list").maxNumberOfElements !== undefined && (r.maxListSize = n.get("list").maxNumberOfElements), t.getValue !== undefined ? typeof t.getValue == "string" ? (u = t.getValue, r.getValue = function(n) { return n[u] }) : typeof t.getValue == "function" && (r.getValue = t.getValue) : r.getValue = n.get("getValue"), r }

            function r(t) { var i = []; return t.xmlElementName === undefined && (t.xmlElementName = n.get("xmlElementName")), $(t.data).find(t.xmlElementName).each(function() { i.push(this) }), i }
            this.init = function(t) { var r = [],
                    i = {}; return i.data = n.get("listLocation")(t), i.getValue = n.get("getValue"), i.maxListSize = n.get("list").maxNumberOfElements, r.push(i), r };
            this.updateCategories = function(t, r) { var u, f; if (n.get("categoriesAssigned"))
                    for (t = [], u = 0; u < n.get("categories").length; u += 1) f = i(n.get("categories")[u], r), t.push(f); return t };
            this.convertXml = function(t) { if (n.get("dataType").toUpperCase() === "XML")
                    for (var i = 0; i < t.length; i += 1) t[i].data = r(t[i]); return t };
            this.processData = function(i, r) { for (var u = 0, f = i.length; u < f; u += 1) i[u].data = t(n, i[u], r); return i };
            this.checkIfDataExists = function(n) { for (var t = 0, i = n.length; t < i; t += 1)
                    if (n[t].data !== undefined && n[t].data instanceof Array && n[t].data.length > 0) return !0;
                return !1 } }, n }(EasyAutocomplete || {}),
    EasyAutocomplete = function(n) { return n.proccess = function(t, i, r) {
            function o(n, i) { var u = [],
                    e = "",
                    r, o; if (t.get("list").match.enabled)
                    for (r = 0, o = n.length; r < o; r += 1) e = t.get("getValue")(n[r]), f(e, i) && u.push(n[r]);
                else u = n; return u }

            function f(n, i) { return t.get("list").match.caseSensitive || (typeof n == "string" && (n = n.toLowerCase()), i = i.toLowerCase()), t.get("list").match.method(n, i) ? !0 : !1 }

            function s(n) { return i.maxNumberOfElements !== undefined && n.length > i.maxNumberOfElements && (n = n.slice(0, i.maxNumberOfElements)), n }

            function h(n) { return t.get("list").sort.enabled && n.sort(t.get("list").sort.method), n }
            n.proccess.match = f; var u = i.data,
                e = r; return u = o(u, e), u = s(u), h(u) }, n }(EasyAutocomplete || {}),
    EasyAutocomplete = function(n) { return n.Template = function(n) { var t = { basic: { type: "basic", method: function(n) { return n }, cssClass: "" }, description: { type: "description", fields: { description: "description" }, method: function(n) { return n + " - description" }, cssClass: "eac-description" }, iconLeft: { type: "iconLeft", fields: { icon: "" }, method: function(n) { return n }, cssClass: "eac-icon-left" }, iconRight: { type: "iconRight", fields: { iconSrc: "" }, method: function(n) { return n }, cssClass: "eac-icon-right" }, links: { type: "links", fields: { link: "" }, method: function(n) { return n }, cssClass: "" }, custom: { type: "custom", method: function() {}, cssClass: "" } },
                i = function(n) { var i = n.fields,
                        r; return n.type === "description" ? (r = t.description.method, typeof i.description == "string" ? r = function(n, t) { return n + " - <span>" + t[i.description] + "<\/span>" } : typeof i.description == "function" && (r = function(n, t) { return n + " - <span>" + i.description(t) + "<\/span>" }), r) : n.type === "iconRight" ? (typeof i.iconSrc == "string" ? r = function(n, t) { return n + "<img class='eac-icon' src='" + t[i.iconSrc] + "' />" } : typeof i.iconSrc == "function" && (r = function(n, t) { return n + "<img class='eac-icon' src='" + i.iconSrc(t) + "' />" }), r) : n.type === "iconLeft" ? (typeof i.iconSrc == "string" ? r = function(n, t) { return "<img class='eac-icon' src='" + t[i.iconSrc] + "' />" + n } : typeof i.iconSrc == "function" && (r = function(n, t) { return "<img class='eac-icon' src='" + i.iconSrc(t) + "' />" + n }), r) : n.type === "links" ? (typeof i.link == "string" ? r = function(n, t) { return "<a href='" + t[i.link] + "' >" + n + "<\/a>" } : typeof i.link == "function" && (r = function(n, t) { return "<a href='" + i.link(t) + "' >" + n + "<\/a>" }), r) : n.type === "custom" ? n.method : t.basic.method },
                r = function(n) { return !n || !n.type ? t.basic.method : n.type && t[n.type] ? i(n) : t.basic.method },
                u = function(n) { var i = function() { return "" }; return !n || !n.type ? i : n.type && t[n.type] ? function() { var i = t[n.type].cssClass; return function() { return i } }() : i };
            this.getTemplateClass = u(n);
            this.build = r(n) }, n }(EasyAutocomplete || {}),
    EasyAutocomplete = function(n) { return n.main = function(t, i) {
            function g() { if (u.length === 0) { a.error("Input field doesn't exist."); return } if (!r.checkDataUrlProperties()) { a.error("One of options variables 'data' or 'url' must be defined."); return } if (!r.checkRequiredProperties()) { a.error("Will not work without mentioned properties."); return }
                w();
                nt() }

            function w() {
                function n() { var i = $("<div>"),
                        n = s.getValue("WRAPPER_CSS_CLASS");
                    r.get("theme") && r.get("theme") !== "" && (n += " eac-" + r.get("theme"));
                    r.get("cssClasses") && r.get("cssClasses") !== "" && (n += " " + r.get("cssClasses"));
                    v.getTemplateClass() !== "" && (n += " " + v.getTemplateClass());
                    i.addClass(n);
                    u.wrap(i);
                    r.get("adjustWidth") === !0 && t() }

                function t() { var n = u.outerWidth();
                    u.parent().css("width", n) }

                function i() { u.unwrap() }

                function o() { var n = $("<div>").addClass(s.getValue("CONTAINER_CLASS"));
                    n.attr("id", b()).prepend($("<ul>")),
                        function() { n.on("show.eac", function() { var t, i; switch (r.get("list").showAnimation.type) {
                                    case "slide":
                                        t = r.get("list").showAnimation.time;
                                        i = r.get("list").showAnimation.callback;
                                        n.find("ul").slideDown(t, i); break;
                                    case "fade":
                                        t = r.get("list").showAnimation.time;
                                        i = r.get("list").showAnimation.callback;
                                        n.find("ul").fadeIn(t);
                                        i; break;
                                    default:
                                        n.find("ul").show() }
                                r.get("list").onShowListEvent() }).on("hide.eac", function() { var t, i; switch (r.get("list").hideAnimation.type) {
                                    case "slide":
                                        t = r.get("list").hideAnimation.time;
                                        i = r.get("list").hideAnimation.callback;
                                        n.find("ul").slideUp(t, i); break;
                                    case "fade":
                                        t = r.get("list").hideAnimation.time;
                                        i = r.get("list").hideAnimation.callback;
                                        n.find("ul").fadeOut(t, i); break;
                                    default:
                                        n.find("ul").hide() }
                                r.get("list").onHideListEvent() }).on("selectElement.eac", function() { n.find("ul li").removeClass("selected");
                                n.find("ul li").eq(f).addClass("selected");
                                r.get("list").onSelectItemEvent() }).on("loadElements.eac", function(t, i, o) { var w = "",
                                    y = n.find("ul"),
                                    p, s, b, h, c, k; for (y.empty().detach(), e = [], p = 0, s = 0, b = i.length; s < b; s += 1)
                                    if (h = i[s].data, h.length !== 0)
                                        for (i[s].header !== undefined && i[s].header.length > 0 && y.append("<div class='eac-category' >" + i[s].header + "<\/div>"), c = 0, k = h.length; c < k && p < i[s].maxListSize; c += 1) w = $("<li><div class='eac-item'><\/div><\/li>"),
                                            function() { var t = c,
                                                    n = p,
                                                    e = i[s].getValue(h[t]);
                                                w.find(" > div").on("click", function(t) { if (t != undefined && t != null && $(t.target).hasClass("btnbuy")) { $(".mainsearch .reset").click(); return }
                                                    r.get("disableAutoReplaceInput") || u.val(e).trigger("change");
                                                    f = n;
                                                    l(n);
                                                    r.get("list").onClickEvent(this);
                                                    r.get("list").onChooseEvent() }).mouseover(function() { f = n;
                                                    l(n);
                                                    r.get("list").onMouseOverEvent() }).mouseout(function() { r.get("list").onMouseOutEvent() }).html(v.build(a(e, o), h[t])) }(), y.append(w), e.push(h[c]), p += 1;
                                n.append(y);
                                r.get("list").onLoadEvent() }) }();
                    u.after(n) }

                function c() { u.next("." + s.getValue("CONTAINER_CLASS")).remove() }

                function a(n, t) { return r.get("highlightPhrase") && t !== "" ? p(n, t) : n }

                function y(n) { return n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") }

                function p(n, t) { var i = y(t); return (n + "").replace(new RegExp("(" + i + ")", "gi"), "<b>$1<\/b>") }
                u.parent().hasClass(s.getValue("WRAPPER_CSS_CLASS")) && (c(), i());
                n();
                o();
                h = $("#" + b());
                r.get("placeholder") && u.attr("placeholder", r.get("placeholder")) }

            function b() { var n = u.attr("id"); return s.getValue("CONTAINER_ID") + n }

            function nt() {
                function n() { d("autocompleteOff", !0) && b();
                    t();
                    i();
                    s();
                    h();
                    v();
                    w() }

                function t() { u.focusout(function() { var i = u.val(),
                            t, n, o; for (r.get("list").match.caseSensitive || (i = i.toLowerCase()), n = 0, o = e.length; n < o; n += 1)
                            if (t = r.get("getValue")(e[n]), r.get("list").match.caseSensitive || (t = t.toLowerCase()), t === i) { f = n;
                                l(f); return } }) }

                function i() { u.off("keyup").keyup(function(n) {
                        function i(n) {
                            function e() { var n = {},
                                    t = r.get("ajaxSettings") || {}; for (var i in t) n[i] = t[i]; return n }

                            function s(n, t) { return r.get("matchResponseProperty") !== !1 ? typeof r.get("matchResponseProperty") == "string" ? t[r.get("matchResponseProperty")] === n : typeof r.get("matchResponseProperty") == "function" ? r.get("matchResponseProperty")(t) === n : !0 : !0 } var f, i, t;
                            n.length < r.get("minCharNumber") || (r.get("data") !== "list-required" && (f = r.get("data"), i = o.init(f), i = o.updateCategories(i, f), i = o.processData(i, n), k(i, n), u.parent().find("li").length > 0 ? p() : c()), t = e(), (t.url === undefined || t.url === "") && (t.url = r.get("url")), (t.dataType === undefined || t.dataType === "") && (t.dataType = r.get("dataType")), t.url !== undefined && t.url !== "list-required" && (t.url = t.url(n), t.data = r.get("preparePostData")(t.data, n), $.ajax(t).done(function(t) { var i = o.init(t);
                                i = o.updateCategories(i, t);
                                i = o.convertXml(i);
                                s(n, t) && (i = o.processData(i, n), k(i, n));
                                o.checkIfDataExists(i) && u.parent().find("li").length > 0 ? p() : c();
                                r.get("ajaxCallback")() }).fail(function() { a.warning("Fail to load response data") }).always(function() {}))) } switch (n.keyCode) {
                            case 27:
                                c();
                                tt(); break;
                            case 38:
                                n.preventDefault();
                                e.length > 0 && f > 0 && (f -= 1, r.get("disableAutoReplaceInput") || u.val(r.get("getValue")(e[f])), l(f)); break;
                            case 40:
                                n.preventDefault();
                                e.length > 0 && f < e.length - 1 && (f += 1, r.get("disableAutoReplaceInput") || u.val(r.get("getValue")(e[f])), l(f)); break;
                            default:
                                if (n.keyCode > 40 || n.keyCode === 8) { var t = u.val();
                                    r.get("list").hideOnEmptyPhrase === !0 && n.keyCode === 8 && t === "" ? c() : r.get("requestDelay") > 0 ? (y !== undefined && clearTimeout(y), y = setTimeout(function() { i(t) }, r.get("requestDelay"))) : i(t) } } }) }

                function s() { u.on("keydown", function(n) { n = n || window.event; var t = n.keyCode; if (t === 38) return suppressKeypress = !0, !1 }).keydown(function(n) { n.keyCode === 13 && f > -1 && (r.get("disableAutoReplaceInput") || u.val(r.get("getValue")(e[f])), r.get("list").onKeyEnterEvent(), r.get("list").onChooseEvent(), f = -1, c(), n.preventDefault()) }) }

                function h() { u.off("keypress") }

                function v() { u.focus(function() { u.val() !== "" && e.length > 0 && (f = -1, p()) }) }

                function w() { u.blur(function() { setTimeout(function() { f = -1;
                            c() }, 250) }) }

                function b() { u.attr("autocomplete", "off") }
                n() }

            function p() { h.trigger("show.eac") }

            function c() { h.trigger("hide.eac") }

            function l(n) { h.trigger("selectElement.eac", n) }

            function k(n, t) { h.trigger("loadElements.eac", [n, t]) }

            function tt() { u.trigger("blur") } var s = new n.Constans,
                r = new n.Configuration(i),
                a = new n.Logger,
                v = new n.Template(i.template),
                o = new n.ListBuilderService(r, n.proccess),
                d = r.equals,
                u = t,
                h = "",
                e = [],
                f = -1,
                y;
            n.consts = s;
            this.getConstants = function() { return s };
            this.getConfiguration = function() { return r };
            this.getContainer = function() { return h };
            this.getSelectedItemIndex = function() { return f };
            this.getItems = function() { return e };
            this.getItemData = function(n) { return e.length < n || e[n] === undefined ? -1 : e[n] };
            this.getSelectedItemData = function() { return this.getItemData(f) };
            this.build = function() { w() };
            this.init = function() { g() } }, n.eacHandles = [], n.getHandle = function(t) { return n.eacHandles[t] }, n.inputHasId = function(n) { return $(n).attr("id") !== undefined && $(n).attr("id").length > 0 ? !0 : !1 }, n.assignRandomId = function(t) { var i = "";
            do i = "eac-" + Math.floor(Math.random() * 1e4); while ($("#" + i).length !== 0);
            elementId = n.consts.getValue("CONTAINER_ID") + i;
            $(t).attr("id", i) }, n.setHandle = function(t, i) { n.eacHandles[i] = t }, n }(EasyAutocomplete || {});
(function(n) { n.fn.easyAutocomplete = function(t) { return this.each(function() { var i = n(this),
                r = new EasyAutocomplete.main(i, t);
            EasyAutocomplete.inputHasId(i) || EasyAutocomplete.assignRandomId(i);
            r.init();
            EasyAutocomplete.setHandle(r, i.attr("id")) }) };
    n.fn.getSelectedItemIndex = function() { var t = n(this).attr("id"); return t !== undefined ? EasyAutocomplete.getHandle(t).getSelectedItemIndex() : -1 };
    n.fn.getItems = function() { var t = n(this).attr("id"); return t !== undefined ? EasyAutocomplete.getHandle(t).getItems() : -1 };
    n.fn.getItemData = function(t) { var i = n(this).attr("id"); return i !== undefined && t > -1 ? EasyAutocomplete.getHandle(i).getItemData(t) : -1 };
    n.fn.getSelectedItemData = function() { var t = n(this).attr("id"); return t !== undefined ? EasyAutocomplete.getHandle(t).getSelectedItemData() : -1 } })(jQuery);
/**
 * Owl carousel
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
(function(n, t, i, r) {
    function u(t, i) { this.settings = null;
        this.options = n.extend({}, u.Defaults, i);
        this.$element = n(t);
        this._handlers = {};
        this._plugins = {};
        this._supress = {};
        this._current = null;
        this._speed = null;
        this._coordinates = [];
        this._breakpoint = null;
        this._width = null;
        this._items = [];
        this._clones = [];
        this._mergers = [];
        this._widths = [];
        this._invalidated = {};
        this._pipe = [];
        this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null };
        this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } };
        n.each(["onResize", "onThrottledResize"], n.proxy(function(t, i) { this._handlers[i] = n.proxy(this[i], this) }, this));
        n.each(u.Plugins, n.proxy(function(n, t) { this._plugins[n.charAt(0).toLowerCase() + n.slice(1)] = new t(this) }, this));
        n.each(u.Workers, n.proxy(function(t, i) { this._pipe.push({ filter: i.filter, run: n.proxy(i.run, this) }) }, this));
        this.setup();
        this.initialize() }
    u.Defaults = { items: 3, loop: !1, center: !1, rewind: !1, checkVisibility: !0, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: t, fallbackEasing: "swing", slideTransition: "", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", refreshClass: "owl-refresh", loadedClass: "owl-loaded", loadingClass: "owl-loading", rtlClass: "owl-rtl", responsiveClass: "owl-responsive", dragClass: "owl-drag", itemClass: "owl-item", stageClass: "owl-stage", stageOuterClass: "owl-stage-outer", grabClass: "owl-grab" };
    u.Width = { Default: "default", Inner: "inner", Outer: "outer" };
    u.Type = { Event: "event", State: "state" };
    u.Plugins = {};
    u.Workers = [{ filter: ["width", "settings"], run: function() { this._width = this.$element.width() } }, { filter: ["width", "items", "settings"], run: function(n) { n.current = this._items && this._items[this.relative(this._current)] } }, { filter: ["items", "settings"], run: function() { this.$stage.children(".cloned").remove() } }, { filter: ["width", "items", "settings"], run: function(n) { var t = this.settings.margin || "",
                u = !this.settings.autoWidth,
                i = this.settings.rtl,
                r = { width: "auto", "margin-left": i ? t : "", "margin-right": i ? "" : t };
            u || this.$stage.children().css(r);
            n.css = r } }, { filter: ["width", "items", "settings"], run: function(n) { var r = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                t = null,
                i = this._items.length,
                f = !this.settings.autoWidth,
                u = []; for (n.items = { merge: !1, width: r }; i--;) t = this._mergers[i], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, n.items.merge = t > 1 || n.items.merge, u[i] = f ? r * t : this._items[i].width();
            this._widths = u } }, { filter: ["items", "settings"], run: function() { var t = [],
                i = this._items,
                r = this.settings,
                o = Math.max(r.items * 2, 4),
                s = Math.ceil(i.length / 2) * 2,
                u = r.loop && i.length ? r.rewind ? o : Math.max(o, s) : 0,
                f = "",
                e = ""; for (u /= 2; u > 0;) t.push(this.normalize(t.length / 2, !0)), f = f + i[t[t.length - 1]][0].outerHTML, t.push(this.normalize(i.length - 1 - (t.length - 1) / 2, !0)), e = i[t[t.length - 1]][0].outerHTML + e, u -= 1;
            this._clones = t;
            n(f).addClass("cloned").appendTo(this.$stage);
            n(e).addClass("cloned").prependTo(this.$stage) } }, { filter: ["width", "items", "settings"], run: function() { for (var u = this.settings.rtl ? 1 : -1, f = this._clones.length + this._items.length, n = -1, i = 0, r = 0, t = []; ++n < f;) i = t[n - 1] || 0, r = this._widths[this.relative(n)] + this.settings.margin, t.push(i + r * u);
            this._coordinates = t } }, { filter: ["width", "items", "settings"], run: function() { var n = this.settings.stagePadding,
                t = this._coordinates,
                i = { width: Math.ceil(Math.abs(t[t.length - 1])) + n * 2, "padding-left": n || "", "padding-right": n || "" };
            this.$stage.css(i) } }, { filter: ["width", "items", "settings"], run: function(n) { var t = this._coordinates.length,
                i = !this.settings.autoWidth,
                r = this.$stage.children(); if (i && n.items.merge)
                while (t--) n.css.width = this._widths[this.relative(t)], r.eq(t).css(n.css);
            else i && (n.css.width = n.items.width, r.css(n.css)) } }, { filter: ["items"], run: function() { this._coordinates.length < 1 && this.$stage.removeAttr("style") } }, { filter: ["width", "items", "settings"], run: function(n) { n.current = n.current ? this.$stage.children().index(n.current) : 0;
            n.current = Math.max(this.minimum(), Math.min(this.maximum(), n.current));
            this.reset(n.current) } }, { filter: ["position"], run: function() { this.animate(this.coordinates(this._current)) } }, { filter: ["width", "position", "items", "settings"], run: function() { for (var u = this.settings.rtl ? 1 : -1, f = this.settings.stagePadding * 2, t = this.coordinates(this.current()) + f, e = t + this.width() * u, i, r, o = [], n = 0, s = this._coordinates.length; n < s; n++) i = this._coordinates[n - 1] || 0, r = Math.abs(this._coordinates[n]) + f * u, (this.op(i, "<=", t) && this.op(i, ">", e) || this.op(r, "<", t) && this.op(r, ">", e)) && o.push(n);
            this.$stage.children(".active").removeClass("active");
            this.$stage.children(":eq(" + o.join("), :eq(") + ")").addClass("active");
            this.$stage.children(".center").removeClass("center");
            this.settings.center && this.$stage.children().eq(this.current()).addClass("center") } }];
    u.prototype.initializeStage = function() {
        (this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length) || (this.$element.addClass(this.options.loadingClass), this.$stage = n("<" + this.settings.stageElement + ">", { "class": this.settings.stageClass }).wrap(n("<div/>", { "class": this.settings.stageOuterClass })), this.$element.append(this.$stage.parent())) };
    u.prototype.initializeItems = function() { var t = this.$element.find(".owl-item"); if (t.length) { this._items = t.get().map(function(t) { return n(t) });
            this._mergers = this._items.map(function() { return 1 });
            this.refresh(); return }
        this.replace(this.$element.children().not(this.$stage.parent()));
        this.isVisible() ? this.refresh() : this.invalidate("width");
        this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass) };
    u.prototype.initialize = function() { if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) { var n, t, i;
            n = this.$element.find("img");
            t = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : r;
            i = this.$element.children(t).width();
            n.length && i <= 0 && this.preloadAutoWidthImages(n) }
        this.initializeStage();
        this.initializeItems();
        this.registerEventHandlers();
        this.leave("initializing");
        this.trigger("initialized") };
    u.prototype.isVisible = function() { return this.settings.checkVisibility ? this.$element.is(":visible") : !0 };
    u.prototype.setup = function() { var u = this.viewport(),
            r = this.options.responsive,
            i = -1,
            t = null;
        r ? (n.each(r, function(n) { n <= u && n > i && (i = Number(n)) }), t = n.extend({}, this.options, r[i]), typeof t.stagePadding == "function" && (t.stagePadding = t.stagePadding()), delete t.responsive, t.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : t = n.extend({}, this.options);
        this.trigger("change", { property: { name: "settings", value: t } });
        this._breakpoint = i;
        this.settings = t;
        this.invalidate("settings");
        this.trigger("changed", { property: { name: "settings", value: this.settings } }) };
    u.prototype.optionsLogic = function() { this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) };
    u.prototype.prepare = function(t) { var i = this.trigger("prepare", { content: t }); return i.data || (i.data = n("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", { content: i.data }), i.data };
    u.prototype.update = function() { for (var t = 0, i = this._pipe.length, r = n.proxy(function(n) { return this[n] }, this._invalidated), u = {}; t < i;)(this._invalidated.all || n.grep(this._pipe[t].filter, r).length > 0) && this._pipe[t].run(u), t++;
        this._invalidated = {};
        this.is("valid") || this.enter("valid") };
    u.prototype.width = function(n) { n = n || u.Width.Default; switch (n) {
            case u.Width.Inner:
            case u.Width.Outer:
                return this._width;
            default:
                return this._width - this.settings.stagePadding * 2 + this.settings.margin } };
    u.prototype.refresh = function() { this.enter("refreshing");
        this.trigger("refresh");
        this.setup();
        this.optionsLogic();
        this.$element.addClass(this.options.refreshClass);
        this.update();
        this.$element.removeClass(this.options.refreshClass);
        this.leave("refreshing");
        this.trigger("refreshed") };
    u.prototype.onThrottledResize = function() { t.clearTimeout(this.resizeTimer);
        this.resizeTimer = t.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate) };
    u.prototype.onResize = function() { if (!this._items.length || this._width === this.$element.width() || !this.isVisible()) return !1; if (this.enter("resizing"), this.trigger("resize").isDefaultPrevented()) return this.leave("resizing"), !1;
        this.invalidate("width");
        this.refresh();
        this.leave("resizing");
        this.trigger("resized") };
    u.prototype.registerEventHandlers = function() { if (n.support.transition) this.$stage.on(n.support.transition.end + ".owl.core", n.proxy(this.onTransitionEnd, this)); if (this.settings.responsive !== !1) this.on(t, "resize", this._handlers.onThrottledResize); if (this.settings.mouseDrag) { this.$element.addClass(this.options.dragClass);
            this.$stage.on("mousedown.owl.core", n.proxy(this.onDragStart, this));
            this.$stage.on("dragstart.owl.core selectstart.owl.core", function() { return !1 }) } if (this.settings.touchDrag) { this.$stage.on("touchstart.owl.core", n.proxy(this.onDragStart, this));
            this.$stage.on("touchcancel.owl.core", n.proxy(this.onDragEnd, this)) } };
    u.prototype.onDragStart = function(t) { var r = null; if (t.which !== 3) { n.support.transform ? (r = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), r = { x: r[r.length === 16 ? 12 : 4], y: r[r.length === 16 ? 13 : 5] }) : (r = this.$stage.position(), r = { x: this.settings.rtl ? r.left + this.$stage.width() - this.width() + this.settings.margin : r.left, y: r.top });
            this.is("animating") && (n.support.transform ? this.animate(r.x) : this.$stage.stop(), this.invalidate("position"));
            this.$element.toggleClass(this.options.grabClass, t.type === "mousedown");
            this.speed(0);
            this._drag.time = (new Date).getTime();
            this._drag.target = n(t.target);
            this._drag.stage.start = r;
            this._drag.stage.current = r;
            this._drag.pointer = this.pointer(t);
            n(i).on("mouseup.owl.core touchend.owl.core", n.proxy(this.onDragEnd, this));
            n(i).one("mousemove.owl.core touchmove.owl.core", n.proxy(function(t) { var r = this.difference(this._drag.pointer, this.pointer(t));
                n(i).on("mousemove.owl.core touchmove.owl.core", n.proxy(this.onDragMove, this));
                Math.abs(r.x) < Math.abs(r.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag")) }, this)) } };
    u.prototype.onDragMove = function(n) { var t = null,
            i = null,
            u = null,
            f = this.difference(this._drag.pointer, this.pointer(n)),
            r = this.difference(this._drag.stage.start, f);
        this.is("dragging") && (n.preventDefault(), this.settings.loop ? (t = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - t, r.x = ((r.x - t) % i + i) % i + t) : (t = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), u = this.settings.pullDrag ? f.x / -5 : 0, r.x = Math.max(Math.min(r.x, t + u), i + u)), this._drag.stage.current = r, this.animate(r.x)) };
    u.prototype.onDragEnd = function(t) { var r = this.difference(this._drag.pointer, this.pointer(t)),
            f = this._drag.stage.current,
            u = r.x > 0 ^ this.settings.rtl ? "left" : "right"; if (n(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (r.x !== 0 && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(f.x, r.x !== 0 ? u : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = u, Math.abs(r.x) > 3 || (new Date).getTime() - this._drag.time > 300)) this._drag.target.one("click.owl.core", function() { return !1 });
        this.is("dragging") && (this.leave("dragging"), this.trigger("dragged")) };
    u.prototype.closest = function(t, i) { var u = -1,
            e = 30,
            o = this.width(),
            f = this.coordinates(); return this.settings.freeDrag || n.each(f, n.proxy(function(n, s) { return i === "left" && t > s - e && t < s + e ? u = n : i === "right" && t > s - o - e && t < s - o + e ? u = n + 1 : this.op(t, "<", s) && this.op(t, ">", f[n + 1] !== r ? f[n + 1] : s - o) && (u = i === "left" ? n + 1 : n), u === -1 }, this)), this.settings.loop || (this.op(t, ">", f[this.minimum()]) ? u = t = this.minimum() : this.op(t, "<", f[this.maximum()]) && (u = t = this.maximum())), u };
    u.prototype.animate = function(t) { var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd();
        i && (this.enter("animating"), this.trigger("translate"));
        n.support.transform3d && n.support.transition ? this.$stage.css({ transform: "translate3d(" + t + "px,0px,0px)", transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "") }) : i ? this.$stage.animate({ left: t + "px" }, this.speed(), this.settings.fallbackEasing, n.proxy(this.onTransitionEnd, this)) : this.$stage.css({ left: t + "px" }) };
    u.prototype.is = function(n) { return this._states.current[n] && this._states.current[n] > 0 };
    u.prototype.current = function(n) { if (n === r) return this._current; if (this._items.length === 0) return r; if (n = this.normalize(n), this._current !== n) { var t = this.trigger("change", { property: { name: "position", value: n } });
            t.data !== r && (n = this.normalize(t.data));
            this._current = n;
            this.invalidate("position");
            this.trigger("changed", { property: { name: "position", value: this._current } }) } return this._current };
    u.prototype.invalidate = function(t) { return n.type(t) === "string" && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")), n.map(this._invalidated, function(n, t) { return t }) };
    u.prototype.reset = function(n) {
        (n = this.normalize(n), n !== r) && (this._speed = 0, this._current = n, this.suppress(["translate", "translated"]), this.animate(this.coordinates(n)), this.release(["translate", "translated"])) };
    u.prototype.normalize = function(n, t) { var i = this._items.length,
            u = t ? 0 : this._clones.length; return !this.isNumeric(n) || i < 1 ? n = r : (n < 0 || n >= i + u) && (n = ((n - u / 2) % i + i) % i + u / 2), n };
    u.prototype.relative = function(n) { return n -= this._clones.length / 2, this.normalize(n, !0) };
    u.prototype.maximum = function(n) { var i = this.settings,
            r = this._coordinates.length,
            t, u, f; if (i.loop) r = this._clones.length / 2 + this._items.length - 1;
        else if (i.autoWidth || i.merge) { if (t = this._items.length, t)
                for (u = this._items[--t].width(), f = this.$element.width(); t--;)
                    if (u += this._items[t].width() + this.settings.margin, u > f) break;
            r = t + 1 } else r = i.center ? this._items.length - 1 : this._items.length - i.items; return n && (r -= this._clones.length / 2), Math.max(r, 0) };
    u.prototype.minimum = function(n) { return n ? 0 : this._clones.length / 2 };
    u.prototype.items = function(n) { return n === r ? this._items.slice() : (n = this.normalize(n, !0), this._items[n]) };
    u.prototype.mergers = function(n) { return n === r ? this._mergers.slice() : (n = this.normalize(n, !0), this._mergers[n]) };
    u.prototype.clones = function(t) { var i = this._clones.length / 2,
            f = i + this._items.length,
            u = function(n) { return n % 2 == 0 ? f + n / 2 : i - (n + 1) / 2 }; return t === r ? n.map(this._clones, function(n, t) { return u(t) }) : n.map(this._clones, function(n, i) { return n === t ? u(i) : null }) };
    u.prototype.speed = function(n) { return n !== r && (this._speed = n), this._speed };
    u.prototype.coordinates = function(t) { var f = 1,
            u = t - 1,
            i; return t === r ? n.map(this._coordinates, n.proxy(function(n, t) { return this.coordinates(t) }, this)) : (this.settings.center ? (this.settings.rtl && (f = -1, u = t + 1), i = this._coordinates[t], i += (this.width() - i + (this._coordinates[u] || 0)) / 2 * f) : i = this._coordinates[u] || 0, Math.ceil(i)) };
    u.prototype.duration = function(n, t, i) { return i === 0 ? 0 : Math.min(Math.max(Math.abs(t - n), 1), 6) * Math.abs(i || this.settings.smartSpeed) };
    u.prototype.to = function(n, t) { var f = this.current(),
            r = null,
            i = n - this.relative(f),
            s = (i > 0) - (i < 0),
            e = this._items.length,
            o = this.minimum(),
            u = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(i) > e / 2 && (i += s * -1 * e), n = f + i, r = ((n - o) % e + e) % e + o, r !== n && r - i <= u && r - i > 0 && (f = r - i, n = r, this.reset(f))) : this.settings.rewind ? (u += 1, n = (n % u + u) % u) : n = Math.max(o, Math.min(u, n));
        this.speed(this.duration(f, n, t));
        this.current(n);
        this.isVisible() && this.update() };
    u.prototype.next = function(n) { n = n || !1;
        this.to(this.relative(this.current()) + 1, n) };
    u.prototype.prev = function(n) { n = n || !1;
        this.to(this.relative(this.current()) - 1, n) };
    u.prototype.onTransitionEnd = function(n) { if (n !== r && (n.stopPropagation(), (n.target || n.srcElement || n.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating");
        this.trigger("translated") };
    u.prototype.viewport = function() { var r; return this.options.responsiveBaseElement !== t ? r = n(this.options.responsiveBaseElement).width() : t.innerWidth ? r = t.innerWidth : i.documentElement && i.documentElement.clientWidth ? r = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), r };
    u.prototype.replace = function(t) { this.$stage.empty();
        this._items = [];
        t && (t = t instanceof jQuery ? t : n(t));
        this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector));
        t.filter(function() { return this.nodeType === 1 }).each(n.proxy(function(n, t) { t = this.prepare(t);
            this.$stage.append(t);
            this._items.push(t);
            this._mergers.push(t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") * 1 || 1) }, this));
        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
        this.invalidate("items") };
    u.prototype.add = function(t, i) { var u = this.relative(this._current);
        i = i === r ? this._items.length : this.normalize(i, !0);
        t = t instanceof jQuery ? t : n(t);
        this.trigger("add", { content: t, position: i });
        t = this.prepare(t);
        this._items.length === 0 || i === this._items.length ? (this._items.length === 0 && this.$stage.append(t), this._items.length !== 0 && this._items[i - 1].after(t), this._items.push(t), this._mergers.push(t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") * 1 || 1)) : (this._items[i].before(t), this._items.splice(i, 0, t), this._mergers.splice(i, 0, t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") * 1 || 1));
        this._items[u] && this.reset(this._items[u].index());
        this.invalidate("items");
        this.trigger("added", { content: t, position: i }) };
    u.prototype.remove = function(n) {
        (n = this.normalize(n, !0), n !== r) && (this.trigger("remove", { content: this._items[n], position: n }), this._items[n].remove(), this._items.splice(n, 1), this._mergers.splice(n, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: n })) };
    u.prototype.preloadAutoWidthImages = function(t) { t.each(n.proxy(function(t, i) { this.enter("pre-loading");
            i = n(i);
            n(new Image).one("load", n.proxy(function(n) { i.attr("src", n.target.src);
                i.css("opacity", 1);
                this.leave("pre-loading");
                this.is("pre-loading") || this.is("initializing") || this.refresh() }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina")) }, this)) };
    u.prototype.destroy = function() { this.$element.off(".owl.core");
        this.$stage.off(".owl.core");
        n(i).off(".owl.core");
        this.settings.responsive !== !1 && (t.clearTimeout(this.resizeTimer), this.off(t, "resize", this._handlers.onThrottledResize)); for (var r in this._plugins) this._plugins[r].destroy();
        this.$stage.children(".cloned").remove();
        this.$stage.unwrap();
        this.$stage.children().contents().unwrap();
        this.$stage.children().unwrap();
        this.$stage.remove();
        this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel") };
    u.prototype.op = function(n, t, i) { var r = this.settings.rtl; switch (t) {
            case "<":
                return r ? n > i : n < i;
            case ">":
                return r ? n < i : n > i;
            case ">=":
                return r ? n <= i : n >= i;
            case "<=":
                return r ? n >= i : n <= i } };
    u.prototype.on = function(n, t, i, r) { n.addEventListener ? n.addEventListener(t, i, r) : n.attachEvent && n.attachEvent("on" + t, i) };
    u.prototype.off = function(n, t, i, r) { n.removeEventListener ? n.removeEventListener(t, i, r) : n.detachEvent && n.detachEvent("on" + t, i) };
    u.prototype.trigger = function(t, i, r) { var o = { item: { count: this._items.length, index: this.current() } },
            e = n.camelCase(n.grep(["on", t, r], function(n) { return n }).join("-").toLowerCase()),
            f = n.Event([t, "owl", r || "carousel"].join(".").toLowerCase(), n.extend({ relatedTarget: this }, o, i)); return this._supress[t] || (n.each(this._plugins, function(n, t) { if (t.onTrigger) t.onTrigger(f) }), this.register({ type: u.Type.Event, name: t }), this.$element.trigger(f), this.settings && typeof this.settings[e] == "function" && this.settings[e].call(this, f)), f };
    u.prototype.enter = function(t) { n.each([t].concat(this._states.tags[t] || []), n.proxy(function(n, t) { this._states.current[t] === r && (this._states.current[t] = 0);
            this._states.current[t]++ }, this)) };
    u.prototype.leave = function(t) { n.each([t].concat(this._states.tags[t] || []), n.proxy(function(n, t) { this._states.current[t]-- }, this)) };
    u.prototype.register = function(t) { if (t.type === u.Type.Event) { if (n.event.special[t.name] || (n.event.special[t.name] = {}), !n.event.special[t.name].owl) { var i = n.event.special[t.name]._default;
                n.event.special[t.name]._default = function(n) { return i && i.apply && (!n.namespace || n.namespace.indexOf("owl") === -1) ? i.apply(this, arguments) : n.namespace && n.namespace.indexOf("owl") > -1 };
                n.event.special[t.name].owl = !0 } } else t.type === u.Type.State && (this._states.tags[t.name] = this._states.tags[t.name] ? this._states.tags[t.name].concat(t.tags) : t.tags, this._states.tags[t.name] = n.grep(this._states.tags[t.name], n.proxy(function(i, r) { return n.inArray(i, this._states.tags[t.name]) === r }, this))) };
    u.prototype.suppress = function(t) { n.each(t, n.proxy(function(n, t) { this._supress[t] = !0 }, this)) };
    u.prototype.release = function(t) { n.each(t, n.proxy(function(n, t) { delete this._supress[t] }, this)) };
    u.prototype.pointer = function(n) { var i = { x: null, y: null }; return n = n.originalEvent || n || t.event, n = n.touches && n.touches.length ? n.touches[0] : n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, n.pageX ? (i.x = n.pageX, i.y = n.pageY) : (i.x = n.clientX, i.y = n.clientY), i };
    u.prototype.isNumeric = function(n) { return !isNaN(parseFloat(n)) };
    u.prototype.difference = function(n, t) { return { x: n.x - t.x, y: n.y - t.y } };
    n.fn.owlCarousel = function(t) { var i = Array.prototype.slice.call(arguments, 1); return this.each(function() { var f = n(this),
                r = f.data("owl.carousel");
            r || (r = new u(this, typeof t == "object" && t), f.data("owl.carousel", r), n.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(t, i) { r.register({ type: u.Type.Event, name: i });
                r.$element.on(i + ".owl.carousel.core", n.proxy(function(n) { n.namespace && n.relatedTarget !== this && (this.suppress([i]), r[i].apply(this, [].slice.call(arguments, 1)), this.release([i])) }, r)) }));
            typeof t == "string" && t.charAt(0) !== "_" && r[t].apply(r, i) }) };
    n.fn.owlCarousel.Constructor = u })(window.Zepto || window.jQuery, window, document);
/**
 * AutoRefresh Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function(n, t) { var i = function(t) { this._core = t;
        this._interval = null;
        this._visible = null;
        this._handlers = { "initialized.owl.carousel": n.proxy(function(n) { n.namespace && this._core.settings.autoRefresh && this.watch() }, this) };
        this._core.options = n.extend({}, i.Defaults, this._core.options);
        this._core.$element.on(this._handlers) };
    i.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 };
    i.prototype.watch = function() { this._interval || (this._visible = this._core.isVisible(), this._interval = t.setInterval(n.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)) };
    i.prototype.refresh = function() { this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh()) };
    i.prototype.destroy = function() { var n, i;
        t.clearInterval(this._interval); for (n in this._handlers) this._core.$element.off(n, this._handlers[n]); for (i in Object.getOwnPropertyNames(this)) typeof this[i] != "function" && (this[i] = null) };
    n.fn.owlCarousel.Constructor.Plugins.AutoRefresh = i })(window.Zepto || window.jQuery, window, document);
/**
 * Lazy Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function(n, t, i, r) { var u = function(t) { this._core = t;
        this._loaded = [];
        this._handlers = { "initialized.owl.carousel change.owl.carousel resized.owl.carousel": n.proxy(function(t) { if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && t.property.name == "position" || t.type == "initialized")) { var i = this._core.settings,
                        u = i.center && Math.ceil(i.items / 2) || i.items,
                        e = i.center && u * -1 || 0,
                        f = (t.property && t.property.value !== r ? t.property.value : this._core.current()) + e,
                        o = this._core.clones().length,
                        s = n.proxy(function(n, t) { this.load(t) }, this); for (i.lazyLoadEager > 0 && (u += i.lazyLoadEager, i.loop && (f -= i.lazyLoadEager, u++)); e++ < u;) this.load(o / 2 + this._core.relative(f)), o && n.each(this._core.clones(this._core.relative(f)), s), f++ } }, this) };
        this._core.options = n.extend({}, u.Defaults, this._core.options);
        this._core.$element.on(this._handlers) };
    u.Defaults = { lazyLoad: !1, lazyLoadEager: 0 };
    u.prototype.load = function(i) { var r = this._core.$stage.children().eq(i),
            u = r && r.find(".owl-lazy");!u || n.inArray(r.get(0), this._loaded) > -1 || (u.each(n.proxy(function(i, r) { var u = n(r),
                e, f = t.devicePixelRatio > 1 && u.attr("data-src-retina") || u.attr("data-src") || u.attr("data-srcset");
            this._core.trigger("load", { element: u, url: f }, "lazy");
            u.is("img") ? u.one("load.owl.lazy", n.proxy(function() { u.css("opacity", 1);
                this._core.trigger("loaded", { element: u, url: f }, "lazy") }, this)).attr("src", f) : u.is("source") ? u.one("load.owl.lazy", n.proxy(function() { this._core.trigger("loaded", { element: u, url: f }, "lazy") }, this)).attr("srcset", f) : (e = new Image, e.onload = n.proxy(function() { u.css({ "background-image": 'url("' + f + '")', opacity: "1" });
                this._core.trigger("loaded", { element: u, url: f }, "lazy") }, this), e.src = f) }, this)), this._loaded.push(r.get(0))) };
    u.prototype.destroy = function() { var n, t; for (n in this.handlers) this._core.$element.off(n, this.handlers[n]); for (t in Object.getOwnPropertyNames(this)) typeof this[t] != "function" && (this[t] = null) };
    n.fn.owlCarousel.Constructor.Plugins.Lazy = u })(window.Zepto || window.jQuery, window, document);
/**
 * AutoHeight Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function(n, t) { var i = function(r) { this._core = r;
        this._previousHeight = null;
        this._handlers = { "initialized.owl.carousel refreshed.owl.carousel": n.proxy(function(n) { n.namespace && this._core.settings.autoHeight && this.update() }, this), "changed.owl.carousel": n.proxy(function(n) { n.namespace && this._core.settings.autoHeight && n.property.name === "position" && this.update() }, this), "loaded.owl.lazy": n.proxy(function(n) { n.namespace && this._core.settings.autoHeight && n.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update() }, this) };
        this._core.options = n.extend({}, i.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
        this._intervalId = null; var u = this;
        n(t).on("load", function() { u._core.settings.autoHeight && u.update() });
        n(t).resize(function() { u._core.settings.autoHeight && (u._intervalId != null && clearTimeout(u._intervalId), u._intervalId = setTimeout(function() { u.update() }, 250)) }) };
    i.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" };
    i.prototype.update = function() { var i = this._core._current,
            u = i + this._core.settings.items,
            f = this._core.settings.lazyLoad,
            e = this._core.$stage.children().toArray().slice(i, u),
            r = [],
            t = 0;
        n.each(e, function(t, i) { r.push(n(i).height()) });
        t = Math.max.apply(null, r);
        t <= 1 && f && this._previousHeight && (t = this._previousHeight);
        this._previousHeight = t;
        this._core.$stage.parent().height(t).addClass(this._core.settings.autoHeightClass) };
    i.prototype.destroy = function() { var n, t; for (n in this._handlers) this._core.$element.off(n, this._handlers[n]); for (t in Object.getOwnPropertyNames(this)) typeof this[t] != "function" && (this[t] = null) };
    n.fn.owlCarousel.Constructor.Plugins.AutoHeight = i })(window.Zepto || window.jQuery, window, document);
/**
 * Video Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function(n, t, i) { var r = function(t) { this._core = t;
        this._videos = {};
        this._playing = null;
        this._handlers = { "initialized.owl.carousel": n.proxy(function(n) { n.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] }) }, this), "resize.owl.carousel": n.proxy(function(n) { n.namespace && this._core.settings.video && this.isInFullScreen() && n.preventDefault() }, this), "refreshed.owl.carousel": n.proxy(function(n) { n.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove() }, this), "changed.owl.carousel": n.proxy(function(n) { n.namespace && n.property.name === "position" && this._playing && this.stop() }, this), "prepared.owl.carousel": n.proxy(function(t) { if (t.namespace) { var i = n(t.content).find(".owl-video");
                    i.length && (i.css("display", "none"), this.fetch(i, n(t.content))) } }, this) };
        this._core.options = n.extend({}, r.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
        this._core.$element.on("click.owl.video", ".owl-video-play-icon", n.proxy(function(n) { this.play(n) }, this)) };
    r.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 };
    r.prototype.fetch = function(n, t) { var u = function() { return n.attr("data-vimeo-id") ? "vimeo" : n.attr("data-vzaar-id") ? "vzaar" : "youtube" }(),
            i = n.attr("data-vimeo-id") || n.attr("data-youtube-id") || n.attr("data-vzaar-id"),
            f = n.attr("data-width") || this._core.settings.videoWidth,
            e = n.attr("data-height") || this._core.settings.videoHeight,
            r = n.attr("href"); if (r) { if (i = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), i[3].indexOf("youtu") > -1) u = "youtube";
            else if (i[3].indexOf("vimeo") > -1) u = "vimeo";
            else if (i[3].indexOf("vzaar") > -1) u = "vzaar";
            else throw new Error("Video URL not supported.");
            i = i[6] } else throw new Error("Missing video URL.");
        this._videos[r] = { type: u, id: i, width: f, height: e };
        t.attr("data-video", r);
        this.thumbnail(n, this._videos[r]) };
    r.prototype.thumbnail = function(t, i) { var f, o, r, c = i.width && i.height ? "width:" + i.width + "px;height:" + i.height + "px;" : "",
            e = t.find("img"),
            s = "src",
            h = "",
            l = this._core.settings,
            u = function(i) { o = '<div class="owl-video-play-icon"><\/div>';
                f = l.lazyLoad ? n("<div/>", { "class": "owl-video-tn " + h, srcType: i }) : n("<div/>", { "class": "owl-video-tn", style: "opacity:1;background-image:url(" + i + ")" });
                t.after(f);
                t.after(o) }; if (t.wrap(n("<div/>", { "class": "owl-video-wrapper", style: c })), this._core.settings.lazyLoad && (s = "data-src", h = "owl-lazy"), e.length) return u(e.attr(s)), e.remove(), !1;
        i.type === "youtube" ? (r = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", u(r)) : i.type === "vimeo" ? n.ajax({ type: "GET", url: "//vimeo.com/api/v2/video/" + i.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(n) { r = n[0].thumbnail_large;
                u(r) } }) : i.type === "vzaar" && n.ajax({ type: "GET", url: "//vzaar.com/api/videos/" + i.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(n) { r = n.framegrab_url;
                u(r) } }) };
    r.prototype.stop = function() { this._core.trigger("stop", null, "video");
        this._playing.find(".owl-video-frame").remove();
        this._playing.removeClass("owl-video-playing");
        this._playing = null;
        this._core.leave("playing");
        this._core.trigger("stopped", null, "video") };
    r.prototype.play = function(t) { var f = n(t.target),
            u = f.closest("." + this._core.settings.itemClass),
            i = this._videos[u.attr("data-video")],
            e = i.width || "100%",
            o = i.height || this._core.$stage.height(),
            r, s;
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), u = this._core.items(this._core.relative(u.index())), this._core.reset(u.index()), r = n('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ><\/iframe>'), r.attr("height", o), r.attr("width", e), i.type === "youtube" ? r.attr("src", "//www.youtube.com/embed/" + i.id + "?autoplay=1&rel=0&v=" + i.id) : i.type === "vimeo" ? r.attr("src", "//player.vimeo.com/video/" + i.id + "?autoplay=1") : i.type === "vzaar" && r.attr("src", "//view.vzaar.com/" + i.id + "/player?autoplay=true"), s = n(r).wrap('<div class="owl-video-frame" />').insertAfter(u.find(".owl-video")), this._playing = u.addClass("owl-video-playing")) };
    r.prototype.isInFullScreen = function() { var t = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement; return t && n(t).parent().hasClass("owl-video-frame") };
    r.prototype.destroy = function() { var n, t;
        this._core.$element.off("click.owl.video"); for (n in this._handlers) this._core.$element.off(n, this._handlers[n]); for (t in Object.getOwnPropertyNames(this)) typeof this[t] != "function" && (this[t] = null) };
    n.fn.owlCarousel.Constructor.Plugins.Video = r })(window.Zepto || window.jQuery, window, document);
/**
 * Animate Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function(n, t, i, r) { var u = function(t) { this.core = t;
        this.core.options = n.extend({}, u.Defaults, this.core.options);
        this.swapping = !0;
        this.previous = r;
        this.next = r;
        this.handlers = { "change.owl.carousel": n.proxy(function(n) { n.namespace && n.property.name == "position" && (this.previous = this.core.current(), this.next = n.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": n.proxy(function(n) { n.namespace && (this.swapping = n.type == "translated") }, this), "translate.owl.carousel": n.proxy(function(n) { n.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) };
        this.core.$element.on(this.handlers) };
    u.Defaults = { animateOut: !1, animateIn: !1 };
    u.prototype.swap = function() { if (this.core.settings.items === 1 && n.support.animation && n.support.transition) { this.core.speed(0); var t, i = n.proxy(this.clear, this),
                f = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                r = this.core.settings.animateIn,
                u = this.core.settings.animateOut;
            this.core.current() !== this.previous && (u && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), f.one(n.support.animation.end, i).css({ left: t + "px" }).addClass("animated owl-animated-out").addClass(u)), r && e.one(n.support.animation.end, i).addClass("animated owl-animated-in").addClass(r)) } };
    u.prototype.clear = function(t) { n(t.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
        this.core.onTransitionEnd() };
    u.prototype.destroy = function() { var n, t; for (n in this.handlers) this.core.$element.off(n, this.handlers[n]); for (t in Object.getOwnPropertyNames(this)) typeof this[t] != "function" && (this[t] = null) };
    n.fn.owlCarousel.Constructor.Plugins.Animate = u })(window.Zepto || window.jQuery, window, document);
/**
 * Autoplay Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @author Tom De Caluwé
 * @license The MIT License (MIT)
 */
(function(n, t, i) { var r = function(t) { this._core = t;
        this._call = null;
        this._time = 0;
        this._timeout = 0;
        this._paused = !0;
        this._handlers = { "changed.owl.carousel": n.proxy(function(n) { n.namespace && n.property.name === "settings" ? this._core.settings.autoplay ? this.play() : this.stop() : n.namespace && n.property.name === "position" && this._paused && (this._time = 0) }, this), "initialized.owl.carousel": n.proxy(function(n) { n.namespace && this._core.settings.autoplay && this.play() }, this), "play.owl.autoplay": n.proxy(function(n, t, i) { n.namespace && this.play(t, i) }, this), "stop.owl.autoplay": n.proxy(function(n) { n.namespace && this.stop() }, this), "mouseover.owl.autoplay": n.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "mouseleave.owl.autoplay": n.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play() }, this), "touchstart.owl.core": n.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "touchend.owl.core": n.proxy(function() { this._core.settings.autoplayHoverPause && this.play() }, this) };
        this._core.$element.on(this._handlers);
        this._core.options = n.extend({}, r.Defaults, this._core.options) };
    r.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 };
    r.prototype._next = function(r) {
        (this._call = t.setTimeout(n.proxy(this._next, this, r), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || i.hidden) || this._core.next(r || this._core.settings.autoplaySpeed) };
    r.prototype.read = function() { return (new Date).getTime() - this._time };
    r.prototype.play = function(i, r) { var u;
        this._core.is("rotating") || this._core.enter("rotating");
        i = i || this._core.settings.autoplayTimeout;
        u = Math.min(this._time % (this._timeout || i), i);
        this._paused ? (this._time = this.read(), this._paused = !1) : t.clearTimeout(this._call);
        this._time += this.read() % i - u;
        this._timeout = i;
        this._call = t.setTimeout(n.proxy(this._next, this, r), i - u) };
    r.prototype.stop = function() { this._core.is("rotating") && (this._time = 0, this._paused = !0, t.clearTimeout(this._call), this._core.leave("rotating")) };
    r.prototype.pause = function() { this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, t.clearTimeout(this._call)) };
    r.prototype.destroy = function() { var n, t;
        this.stop(); for (n in this._handlers) this._core.$element.off(n, this._handlers[n]); for (t in Object.getOwnPropertyNames(this)) typeof this[t] != "function" && (this[t] = null) };
    n.fn.owlCarousel.Constructor.Plugins.autoplay = r })(window.Zepto || window.jQuery, window, document);
/**
 * Navigation Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function(n) { "use strict"; var t = function(i) { this._core = i;
        this._initialized = !1;
        this._pages = [];
        this._controls = {};
        this._templates = [];
        this.$element = this._core.$element;
        this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to };
        this._handlers = { "prepared.owl.carousel": n.proxy(function(t) { t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + n(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "<\/div>") }, this), "added.owl.carousel": n.proxy(function(n) { n.namespace && this._core.settings.dotsData && this._templates.splice(n.position, 0, this._templates.pop()) }, this), "remove.owl.carousel": n.proxy(function(n) { n.namespace && this._core.settings.dotsData && this._templates.splice(n.position, 1) }, this), "changed.owl.carousel": n.proxy(function(n) { n.namespace && n.property.name == "position" && this.draw() }, this), "initialized.owl.carousel": n.proxy(function(n) { n.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation")) }, this), "refreshed.owl.carousel": n.proxy(function(n) { n.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")) }, this) };
        this._core.options = n.extend({}, t.Defaults, this._core.options);
        this.$element.on(this._handlers) };
    t.Defaults = { nav: !1, navText: ['<span aria-label="Previous">&#x2039;<\/span>', '<span aria-label="Next">&#x203a;<\/span>'], navSpeed: !1, navElement: 'button type="button" role="presentation" aria-label="nav"', navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotsData: !1, dotsSpeed: !1, dotsContainer: !1 };
    t.prototype.initialize = function() { var i, t = this._core.settings;
        this._controls.$relative = (t.navContainer ? n(t.navContainer) : n("<div>").addClass(t.navContainerClass).appendTo(this.$element)).addClass("disabled");
        this._controls.$previous = n("<" + t.navElement + ">").addClass(t.navClass[0]).html(t.navText[0]).prependTo(this._controls.$relative).on("click", n.proxy(function() { this.prev(t.navSpeed) }, this));
        this._controls.$next = n("<" + t.navElement + ">").addClass(t.navClass[1]).html(t.navText[1]).appendTo(this._controls.$relative).on("click", n.proxy(function() { this.next(t.navSpeed) }, this));
        t.dotsData || (this._templates = [n('<button role="button" aria-label="slide">').addClass(t.dotClass).append(n("<span>")).prop("outerHTML")]);
        this._controls.$absolute = (t.dotsContainer ? n(t.dotsContainer) : n("<div>").addClass(t.dotsClass).appendTo(this.$element)).addClass("disabled");
        this._controls.$absolute.on("click", "button", n.proxy(function(i) { var r = n(i.target).parent().is(this._controls.$absolute) ? n(i.target).index() : n(i.target).parent().index();
            i.preventDefault();
            this.to(r, t.dotsSpeed) }, this)); for (i in this._overrides) this._core[i] = n.proxy(this[i], this) };
    t.prototype.destroy = function() { var t, n, i, r, u = this._core.settings; for (t in this._handlers) this.$element.off(t, this._handlers[t]); for (n in this._controls) n === "$relative" && u.navContainer ? this._controls[n].html("") : this._controls[n].remove(); for (r in this.overides) this._core[r] = this._overrides[r]; for (i in Object.getOwnPropertyNames(this)) typeof this[i] != "function" && (this[i] = null) };
    t.prototype.update = function() { var t, i, f, r = this._core.clones().length / 2,
            o = r + this._core.items().length,
            u = this._core.maximum(!0),
            n = this._core.settings,
            e = n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items; if (n.slideBy !== "page" && (n.slideBy = Math.min(n.slideBy, n.items)), n.dots || n.slideBy == "page")
            for (this._pages = [], t = r, i = 0, f = 0; t < o; t++) { if (i >= e || i === 0) { if (this._pages.push({ start: Math.min(u, t - r), end: t - r + e - 1 }), Math.min(u, t - r) === u) break;
                    i = 0;++f }
                i += this._core.mergers(this._core.relative(t)) } };
    t.prototype.draw = function() { var i, t = this._core.settings,
            r = this._core.items().length <= t.items,
            u = this._core.relative(this._core.current()),
            f = t.loop || t.rewind;
        this._controls.$relative.toggleClass("disabled", !t.nav || r);
        t.nav && (this._controls.$previous.toggleClass("disabled", !f && u <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && u >= this._core.maximum(!0)));
        this._controls.$absolute.toggleClass("disabled", !t.dots || r);
        t.dots && (i = this._pages.length - this._controls.$absolute.children().length, t.dotsData && i !== 0 ? this._controls.$absolute.html(this._templates.join("")) : i > 0 ? this._controls.$absolute.append(new Array(i + 1).join(this._templates[0])) : i < 0 && this._controls.$absolute.children().slice(i).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(n.inArray(this.current(), this._pages)).addClass("active")) };
    t.prototype.onTrigger = function(t) { var i = this._core.settings;
        t.page = { index: n.inArray(this.current(), this._pages), count: this._pages.length, size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items) } };
    t.prototype.current = function() { var t = this._core.relative(this._core.current()); return n.grep(this._pages, n.proxy(function(n) { return n.start <= t && n.end >= t }, this)).pop() };
    t.prototype.getPosition = function(t) { var i, r, u = this._core.settings; return u.slideBy == "page" ? (i = n.inArray(this.current(), this._pages), r = this._pages.length, t ? ++i : --i, i = this._pages[(i % r + r) % r].start) : (i = this._core.relative(this._core.current()), r = this._core.items().length, t ? i += u.slideBy : i -= u.slideBy), i };
    t.prototype.next = function(t) { n.proxy(this._overrides.to, this._core)(this.getPosition(!0), t) };
    t.prototype.prev = function(t) { n.proxy(this._overrides.to, this._core)(this.getPosition(!1), t) };
    t.prototype.to = function(t, i, r) { var u;!r && this._pages.length ? (u = this._pages.length, n.proxy(this._overrides.to, this._core)(this._pages[(t % u + u) % u].start, i)) : n.proxy(this._overrides.to, this._core)(t, i) };
    n.fn.owlCarousel.Constructor.Plugins.Navigation = t })(window.Zepto || window.jQuery, window, document);
/**
 * Hash Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function(n, t, i, r) { "use strict"; var u = function(i) { this._core = i;
        this._hashes = {};
        this.$element = this._core.$element;
        this._handlers = { "initialized.owl.carousel": n.proxy(function(i) { i.namespace && this._core.settings.startPosition === "URLHash" && n(t).trigger("hashchange.owl.navigation") }, this), "prepared.owl.carousel": n.proxy(function(t) { if (t.namespace) { var i = n(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash"); if (!i) return;
                    this._hashes[i] = t.content } }, this), "changed.owl.carousel": n.proxy(function(i) { if (i.namespace && i.property.name === "position") { var u = this._core.items(this._core.relative(this._core.current())),
                        r = n.map(this._hashes, function(n, t) { return n === u ? t : null }).join(); if (!r || t.location.hash.slice(1) === r) return;
                    t.location.hash = r } }, this) };
        this._core.options = n.extend({}, u.Defaults, this._core.options);
        this.$element.on(this._handlers);
        n(t).on("hashchange.owl.navigation", n.proxy(function() { var i = t.location.hash.substring(1),
                u = this._core.$stage.children(),
                n = this._hashes[i] && u.index(this._hashes[i]);
            n !== r && n !== this._core.current() && this._core.to(this._core.relative(n), !1, !0) }, this)) };
    u.Defaults = { URLhashListener: !1 };
    u.prototype.destroy = function() { var i, r;
        n(t).off("hashchange.owl.navigation"); for (i in this._handlers) this._core.$element.off(i, this._handlers[i]); for (r in Object.getOwnPropertyNames(this)) typeof this[r] != "function" && (this[r] = null) };
    n.fn.owlCarousel.Constructor.Plugins.Hash = u })(window.Zepto || window.jQuery, window, document);
/**
 * Support Plugin
 *
 * @version 2.3.4
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
(function(n, t, i, r) {
    function u(t, i) { var u = !1,
            f = t.charAt(0).toUpperCase() + t.slice(1); return n.each((t + " " + h.join(f + " ") + f).split(" "), function(n, t) { if (s[t] !== r) return u = i ? t : !0, !1 }), u }

    function e(n) { return u(n, !0) } var s = n("<support>").get(0).style,
        h = "Webkit Moz O ms".split(" "),
        o = { transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } }, animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } } },
        f = { csstransforms: function() { return !!u("transform") }, csstransforms3d: function() { return !!u("perspective") }, csstransitions: function() { return !!u("transition") }, cssanimations: function() { return !!u("animation") } };
    f.csstransitions() && (n.support.transition = new String(e("transition")), n.support.transition.end = o.transition.end[n.support.transition]);
    f.cssanimations() && (n.support.animation = new String(e("animation")), n.support.animation.end = o.animation.end[n.support.animation]);
    f.csstransforms() && (n.support.transform = new String(e("transform")), n.support.transform3d = f.csstransforms3d()) })(window.Zepto || window.jQuery, window, document),
function(n) {
    function t(t) { var f = n(this),
            r = null,
            u = [],
            e = null,
            o = null,
            i = n.extend({ rowSelector: "> div.navi,> li", submenuSelector: "*", submenuDirection: "right", tolerance: 75, enter: n.noop, exit: n.noop, activate: n.noop, deactivate: n.noop, exitMenu: n.noop }, t),
            c = 3,
            l = 300,
            a = function(n) { u.push({ x: n.pageX, y: n.pageY });
                u.length > c && u.shift() },
            v = function() { o && clearTimeout(o);
                i.exitMenu(this) && (r && i.deactivate(r), r = null) },
            y = function() { o && clearTimeout(o);
                i.enter(this);
                h(this) },
            p = function() { i.exit(this) },
            w = function() { s(this) },
            s = function(n) { n != r && (r && i.deactivate(r), i.activate(n), r = n) },
            h = function(n) { var t = b();
                t ? o = setTimeout(function() { h(n) }, t) : s(n) },
            b = function() {
                function v(n, t) { return (t.y - n.y) / (t.x - n.x) } var h, c; if (!r || !n(r).is(i.submenuSelector)) return 0; var t = f.offset(),
                    y = { x: t.left, y: t.top - i.tolerance },
                    w = { x: t.left + f.outerWidth(), y: y.y },
                    p = { x: t.left, y: t.top + f.outerHeight() + i.tolerance },
                    a = { x: t.left + f.outerWidth(), y: p.y },
                    s = u[u.length - 1],
                    o = u[0]; if (!s || (o || (o = s), o.x < t.left || o.x > a.x || o.y < t.top || o.y > a.y) || e && s.x == e.x && s.y == e.y) return 0;
                h = w;
                c = a;
                i.submenuDirection == "left" ? (h = p, c = y) : i.submenuDirection == "below" ? (h = a, c = p) : i.submenuDirection == "above" && (h = y, c = w); var b = v(s, h),
                    k = v(s, c),
                    d = v(o, h),
                    g = v(o, c); return b < d && k > g ? (e = s, l) : (e = null, 0) };
        f.mouseleave(v).find(i.rowSelector).mouseenter(y).mouseleave(p).click(w);
        n(document).mousemove(a) }
    n.fn.menuAim = function(n) { return this.each(function() { t.call(this, n) }), this } }(jQuery),
function(n) { "use strict";

    function f(n) { n = n || "";
        (n instanceof URLSearchParams || n instanceof f) && (n = n.toString());
        this[r] = h(n) }

    function p(n) { var t = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\x00" }; return encodeURIComponent(n).replace(/[!'\(\)~]|%20|%00/g, function(n) { return t[n] }) }

    function o(n) { return decodeURIComponent(n.replace(/\+/g, " ")) }

    function s(t) { var i = { next: function() { var n = t.shift(); return { done: n === undefined, value: n } } }; return a && (i[n.Symbol.iterator] = function() { return i }), i }

    function h(n) { var i = {},
            r, s, u, t, f; if (typeof n == "object")
            for (r in n) n.hasOwnProperty(r) && e(i, r, n[r]);
        else
            for (n.indexOf("?") === 0 && (n = n.slice(1)), s = n.split("&"), u = 0; u < s.length; u++) t = s[u], f = t.indexOf("="), -1 < f ? e(i, o(t.slice(0, f)), o(t.slice(f + 1))) : t && e(i, o(t), ""); return i }

    function e(n, t, i) { var r = typeof i == "string" ? i : i !== null && i !== undefined && typeof i.toString == "function" ? i.toString() : JSON.stringify(i);
        t in n ? n[t].push(r) : n[t] = [r] } var i = n.URLSearchParams ? n.URLSearchParams : null,
        c = i && new i({ a: 1 }).toString() === "a=1",
        l = i && new i("s=%2B").get("s") === "+",
        r = "__URLSearchParams__",
        w = i ? function() { var n = new i; return n.append("s", " &"), n.toString() === "s=+%26" }() : !0,
        u = f.prototype,
        a = !!(n.Symbol && n.Symbol.iterator),
        v, y, t;
    i && c && l && w || (u.append = function(n, t) { e(this[r], n, t) }, u.delete = function(n) { delete this[r][n] }, u.get = function(n) { var t = this[r]; return n in t ? t[n][0] : null }, u.getAll = function(n) { var t = this[r]; return n in t ? t[n].slice(0) : [] }, u.has = function(n) { return n in this[r] }, u.set = function(n, t) { this[r][n] = ["" + t] }, u.toString = function() { var u = this[r],
            f = [],
            n, t, e, i; for (t in u)
            for (e = p(t), n = 0, i = u[t]; n < i.length; n++) f.push(e + "=" + p(i[n])); return f.join("&") }, v = !l, y = !v && i && !c && n.Proxy, n.URLSearchParams = y ? new Proxy(i, { construct: function(n, t) { return new n(new f(t[0]).toString()) } }) : f, t = n.URLSearchParams.prototype, t.polyfill = !0, t.forEach = t.forEach || function(n, t) { var i = h(this.toString());
        Object.getOwnPropertyNames(i).forEach(function(r) { i[r].forEach(function(i) { n.call(t, i, r, this) }, this) }, this) }, t.sort = t.sort || function() { var f = h(this.toString()),
            t = [],
            e, n, i, r, u; for (e in f) t.push(e); for (t.sort(), n = 0; n < t.length; n++) this.delete(t[n]); for (n = 0; n < t.length; n++)
            for (r = t[n], u = f[r], i = 0; i < u.length; i++) this.append(r, u[i]) }, t.keys = t.keys || function() { var n = []; return this.forEach(function(t, i) { n.push(i) }), s(n) }, t.values = t.values || function() { var n = []; return this.forEach(function(t) { n.push(t) }), s(n) }, t.entries = t.entries || function() { var n = []; return this.forEach(function(t, i) { n.push([i, t]) }), s(n) }, a && (t[n.Symbol.iterator] = t[n.Symbol.iterator] || t.entries)) }(typeof global != "undefined" ? global : typeof window != "undefined" ? window : this);
/*!
 * Socket.IO v2.2.0
 * (c) 2014-2018 Guillermo Rauch
 * Released under the MIT License.
 */
! function(n, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.io = t() : n.io = t() }(this, function() {
    return function(n) {
        function t(r) { if (i[r]) return i[r].exports; var u = i[r] = { exports: {}, id: r, loaded: !1 }; return n[r].call(u.exports, u, u.exports, t), u.loaded = !0, u.exports } var i = {}; return t.m = n, t.c = i, t.p = "", t(0) }([function(n, t, i) { "use strict";

        function u(n, t) { "object" === ("undefined" == typeof n ? "undefined" : o(n)) && (t = n, n = void 0);
            t = t || {}; var c, i = s(n),
                h = i.source,
                u = i.id,
                l = i.path,
                a = r[u] && l in r[u].nsps,
                v = t.forceNew || t["force new connection"] || !1 === t.multiplex || a; return v ? (e("ignoring socket cache for %s", h), c = f(h, t)) : (r[u] || (e("new io instance for %s", h), r[u] = f(h, t)), c = r[u]), i.query && !t.query && (t.query = i.query), c.socket(i.path, t) } var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) { return typeof n } : function(n) { return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n },
            s = i(1),
            h = i(7),
            f = i(12),
            e = i(3)("socket.io-client"),
            r;
        n.exports = t = u;
        r = t.managers = {};
        t.protocol = h.protocol;
        t.connect = u;
        t.Manager = i(12);
        t.Socket = i(36) }, function(n, t, i) { "use strict";

        function u(n, t) { var i = n,
                e, u; return t = t || "undefined" != typeof location && location, null == n && (n = t.protocol + "//" + t.host), "string" == typeof n && ("/" === n.charAt(0) && (n = "/" === n.charAt(1) ? t.protocol + n : t.host + n), /^(https?|wss?):\/\//.test(n) || (r("protocol-less url %s", n), n = "undefined" != typeof t ? t.protocol + "//" + n : "https://" + n), r("parse %s", n), i = f(n)), i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80" : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")), i.path = i.path || "/", e = i.host.indexOf(":") !== -1, u = e ? "[" + i.host + "]" : i.host, i.id = i.protocol + "://" + u + ":" + i.port, i.href = i.protocol + "://" + u + (t && t.port === i.port ? "" : ":" + i.port), i } var f = i(2),
            r = i(3)("socket.io-client:url");
        n.exports = u }, function(n) { var t = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
            i = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        n.exports = function(n) { var o = n,
                u = n.indexOf("["),
                f = n.indexOf("]");
            u != -1 && f != -1 && (n = n.substring(0, u) + n.substring(u, f).replace(/:/g, ";") + n.substring(f, n.length)); for (var s = t.exec(n || ""), r = {}, e = 14; e--;) r[i[e]] = s[e] || ""; return u != -1 && f != -1 && (r.source = o, r.host = r.host.substring(1, r.host.length - 1).replace(/;/g, ":"), r.authority = r.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), r.ipv6uri = !0), r } }, function(n, t, i) {
        (function(r) {
            function f() { return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)) }

            function e(n) { var i = this.useColors,
                    r, u, f;
                (n[0] = (i ? "%c" : "") + this.namespace + (i ? " %c" : " ") + n[0] + (i ? "%c " : " ") + "+" + t.humanize(this.diff), i) && (r = "color: " + this.color, n.splice(1, 0, r, "color: inherit"), u = 0, f = 0, n[0].replace(/%[a-zA-Z%]/g, function(n) { "%%" !== n && (u++, "%c" === n && (f = u)) }), n.splice(f, 0, r)) }

            function o() { return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments) }

            function s(n) { try { null == n ? t.storage.removeItem("debug") : t.storage.debug = n } catch (i) {} }

            function u() { var n; try { n = t.storage.debug } catch (i) {} return !n && "undefined" != typeof r && "env" in r && (n = r.env.DEBUG), n }

            function h() { try { return window.localStorage } catch (n) {} }
            t = n.exports = i(5);
            t.log = o;
            t.formatArgs = e;
            t.save = s;
            t.load = u;
            t.useColors = f;
            t.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : h();
            t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
            t.formatters.j = function(n) { try { return JSON.stringify(n) } catch (t) { return "[UnexpectedJSONParseError]: " + t.message } };
            t.enable(u()) }).call(t, i(4)) }, function(n) {
        function h() { throw new Error("setTimeout has not been defined"); }

        function c() { throw new Error("clearTimeout has not been defined"); }

        function l(n) { if (r === setTimeout) return setTimeout(n, 0); if ((r === h || !r) && setTimeout) return r = setTimeout, setTimeout(n, 0); try { return r(n, 0) } catch (t) { try { return r.call(null, n, 0) } catch (t) { return r.call(this, n, 0) } } }

        function y(n) { if (u === clearTimeout) return clearTimeout(n); if ((u === c || !u) && clearTimeout) return u = clearTimeout, clearTimeout(n); try { return u(n) } catch (t) { try { return u.call(null, n) } catch (t) { return u.call(this, n) } } }

        function p() { o && e && (o = !1, e.length ? f = e.concat(f) : s = -1, f.length && a()) }

        function a() { var t, n; if (!o) { for (t = l(p), o = !0, n = f.length; n;) { for (e = f, f = []; ++s < n;) e && e[s].run();
                    s = -1;
                    n = f.length }
                e = null;
                o = !1;
                y(t) } }

        function v(n, t) { this.fun = n;
            this.array = t }

        function i() {} var r, u, t = n.exports = {};! function() { try { r = "function" == typeof setTimeout ? setTimeout : h } catch (n) { r = h } try { u = "function" == typeof clearTimeout ? clearTimeout : c } catch (n) { u = c } }(); var e, f = [],
            o = !1,
            s = -1;
        t.nextTick = function(n) { var i = new Array(arguments.length - 1),
                t; if (arguments.length > 1)
                for (t = 1; t < arguments.length; t++) i[t - 1] = arguments[t];
            f.push(new v(n, i));
            1 !== f.length || o || l(a) };
        v.prototype.run = function() { this.fun.apply(null, this.array) };
        t.title = "browser";
        t.browser = !0;
        t.env = {};
        t.argv = [];
        t.version = "";
        t.versions = {};
        t.on = i;
        t.addListener = i;
        t.once = i;
        t.off = i;
        t.removeListener = i;
        t.removeAllListeners = i;
        t.emit = i;
        t.prependListener = i;
        t.prependOnceListener = i;
        t.listeners = function() { return [] };
        t.binding = function() { throw new Error("process.binding is not supported"); };
        t.cwd = function() { return "/" };
        t.chdir = function() { throw new Error("process.chdir is not supported"); };
        t.umask = function() { return 0 } }, function(n, t, i) {
        function u(n) { var r, i = 0; for (r in n) i = (i << 5) - i + n.charCodeAt(r), i |= 0; return t.colors[Math.abs(i) % t.colors.length] }

        function r(n) {
            function i() { var n, f, e, s; if (i.enabled) { var u = i,
                        o = +new Date,
                        h = o - (r || o); for (u.diff = h, u.prev = r, u.curr = o, r = o, n = new Array(arguments.length), f = 0; f < n.length; f++) n[f] = arguments[f];
                    n[0] = t.coerce(n[0]); "string" != typeof n[0] && n.unshift("%O");
                    e = 0;
                    n[0] = n[0].replace(/%([a-zA-Z%])/g, function(i, r) { var f, o; return "%%" === i ? i : (e++, f = t.formatters[r], "function" == typeof f && (o = n[e], i = f.call(u, o), n.splice(e, 1), e--), i) });
                    t.formatArgs.call(u, n);
                    s = i.log || t.log || console.log.bind(console);
                    s.apply(u, n) } } var r; return i.namespace = n, i.enabled = t.enabled(n), i.useColors = t.useColors(), i.color = u(n), i.destroy = f, "function" == typeof t.init && t.init(i), t.instances.push(i), i }

        function f() { var n = t.instances.indexOf(this); return n !== -1 && (t.instances.splice(n, 1), !0) }

        function e(n) { var i, r, f, u; for (t.save(n), t.names = [], t.skips = [], r = ("string" == typeof n ? n : "").split(/[\s,]+/), f = r.length, i = 0; i < f; i++) r[i] && (n = r[i].replace(/\*/g, ".*?"), "-" === n[0] ? t.skips.push(new RegExp("^" + n.substr(1) + "$")) : t.names.push(new RegExp("^" + n + "$"))); for (i = 0; i < t.instances.length; i++) u = t.instances[i], u.enabled = t.enabled(u.namespace) }

        function o() { t.enable("") }

        function s(n) { if ("*" === n[n.length - 1]) return !0; for (var i = 0, r = t.skips.length; i < r; i++)
                if (t.skips[i].test(n)) return !1;
            for (i = 0, r = t.names.length; i < r; i++)
                if (t.names[i].test(n)) return !0;
            return !1 }

        function h(n) { return n instanceof Error ? n.stack || n.message : n }
        t = n.exports = r.debug = r["default"] = r;
        t.coerce = h;
        t.disable = o;
        t.enable = e;
        t.enabled = s;
        t.humanize = i(6);
        t.instances = [];
        t.names = [];
        t.skips = [];
        t.formatters = {} }, function(n) {
        function e(n) { var e, f, o; if ((n = String(n), !(n.length > 100)) && (e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(n), e)) { f = parseFloat(e[1]);
                o = (e[2] || "ms").toLowerCase(); switch (o) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return f * h;
                    case "days":
                    case "day":
                    case "d":
                        return f * u;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return f * r;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return f * i;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return f * t;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return f;
                    default:
                        return } } }

        function o(n) { return n >= u ? Math.round(n / u) + "d" : n >= r ? Math.round(n / r) + "h" : n >= i ? Math.round(n / i) + "m" : n >= t ? Math.round(n / t) + "s" : n + "ms" }

        function s(n) { return f(n, u, "day") || f(n, r, "hour") || f(n, i, "minute") || f(n, t, "second") || n + " ms" }

        function f(n, t, i) { if (!(n < t)) return n < 1.5 * t ? Math.floor(n / t) + " " + i : Math.ceil(n / t) + " " + i + "s" } var t = 1e3,
            i = 60 * t,
            r = 60 * i,
            u = 24 * r,
            h = 365.25 * u;
        n.exports = function(n, t) { t = t || {}; var i = typeof n; if ("string" === i && n.length > 0) return e(n); if ("number" === i && isNaN(n) === !1) return t.long ? s(n) : o(n); throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(n)); } }, function(n, t, i) {
        function o() {}

        function s(n) { var i = "" + n.type,
                r; if (t.BINARY_EVENT !== n.type && t.BINARY_ACK !== n.type || (i += n.attachments + "-"), n.nsp && "/" !== n.nsp && (i += n.nsp + ","), null != n.id && (i += n.id), null != n.data) { if (r = l(n.data), r === !1) return c;
                i += r } return f("encoded %j as %s", n, i), i }

        function l(n) { try { return JSON.stringify(n) } catch (t) { return !1 } }

        function a(n, t) {
            function i(n) { var i = e.deconstructPacket(n),
                    u = s(i.packet),
                    r = i.buffers;
                r.unshift(u);
                t(r) }
            e.removeBlobs(n, i) }

        function r() { this.reconstructor = null }

        function v(n) { var i = 0,
                r = { type: Number(n.charAt(0)) },
                e, o, u, s, c; if (null == t.types[r.type]) return h("unknown packet type " + r.type); if (t.BINARY_EVENT === r.type || t.BINARY_ACK === r.type) { for (e = "";
                    "-" !== n.charAt(++i) && (e += n.charAt(i), i != n.length);); if (e != Number(e) || "-" !== n.charAt(i)) throw new Error("Illegal attachments");
                r.attachments = Number(e) } if ("/" === n.charAt(i + 1))
                for (r.nsp = ""; ++i;) { if (u = n.charAt(i), "," === u) break; if (r.nsp += u, i === n.length) break } else r.nsp = "/"; if (o = n.charAt(i + 1), "" !== o && Number(o) == o) { for (r.id = ""; ++i;) { if (u = n.charAt(i), null == u || Number(u) != u) {--i; break } if (r.id += n.charAt(i), i === n.length) break }
                r.id = Number(r.id) } if (n.charAt(++i)) { if (s = y(n.substr(i)), c = s !== !1 && (r.type === t.ERROR || w(s)), !c) return h("invalid payload");
                r.data = s } return f("decoded %s as %j", n, r), r }

        function y(n) { try { return JSON.parse(n) } catch (t) { return !1 } }

        function u(n) { this.reconPack = n;
            this.buffers = [] }

        function h(n) { return { type: t.ERROR, data: "parser error: " + n } } var f = i(3)("socket.io-parser"),
            p = i(8),
            e = i(9),
            w = i(10),
            b = i(11),
            c;
        t.protocol = 4;
        t.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"];
        t.CONNECT = 0;
        t.DISCONNECT = 1;
        t.EVENT = 2;
        t.ACK = 3;
        t.ERROR = 4;
        t.BINARY_EVENT = 5;
        t.BINARY_ACK = 6;
        t.Encoder = o;
        t.Decoder = r;
        c = t.ERROR + '"encode error"';
        o.prototype.encode = function(n, i) { if (f("encoding packet %j", n), t.BINARY_EVENT === n.type || t.BINARY_ACK === n.type) a(n, i);
            else { var r = s(n);
                i([r]) } };
        p(r.prototype);
        r.prototype.add = function(n) { var i; if ("string" == typeof n) i = v(n), t.BINARY_EVENT === i.type || t.BINARY_ACK === i.type ? (this.reconstructor = new u(i), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", i)) : this.emit("decoded", i);
            else { if (!b(n) && !n.base64) throw new Error("Unknown type: " + n); if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                i = this.reconstructor.takeBinaryData(n);
                i && (this.reconstructor = null, this.emit("decoded", i)) } };
        r.prototype.destroy = function() { this.reconstructor && this.reconstructor.finishedReconstruction() };
        u.prototype.takeBinaryData = function(n) { if (this.buffers.push(n), this.buffers.length === this.reconPack.attachments) { var t = e.reconstructPacket(this.reconPack, this.buffers); return this.finishedReconstruction(), t } return null };
        u.prototype.finishedReconstruction = function() { this.reconPack = null;
            this.buffers = [] } }, function(n) {
        function t(n) { if (n) return i(n) }

        function i(n) { for (var i in t.prototype) n[i] = t.prototype[i]; return n }
        n.exports = t;
        t.prototype.on = t.prototype.addEventListener = function(n, t) { return this._callbacks = this._callbacks || {}, (this._callbacks["$" + n] = this._callbacks["$" + n] || []).push(t), this };
        t.prototype.once = function(n, t) {
            function i() { this.off(n, i);
                t.apply(this, arguments) } return i.fn = t, this.on(n, i), this };
        t.prototype.off = t.prototype.removeListener = t.prototype.removeAllListeners = t.prototype.removeEventListener = function(n, t) { var i, u, r; if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this; if (i = this._callbacks["$" + n], !i) return this; if (1 == arguments.length) return delete this._callbacks["$" + n], this; for (r = 0; r < i.length; r++)
                if (u = i[r], u === t || u.fn === t) { i.splice(r, 1); break }
            return this };
        t.prototype.emit = function(n) { var r, t, i, u; if (this._callbacks = this._callbacks || {}, r = [].slice.call(arguments, 1), t = this._callbacks["$" + n], t)
                for (t = t.slice(0), i = 0, u = t.length; i < u; ++i) t[i].apply(this, r); return this };
        t.prototype.listeners = function(n) { return this._callbacks = this._callbacks || {}, this._callbacks["$" + n] || [] };
        t.prototype.hasListeners = function(n) { return !!this.listeners(n).length } }, function(n, t, i) {
        function r(n, t) { var s, u, i, o; if (!n) return n; if (e(n)) return s = { _placeholder: !0, num: t.length }, t.push(n), s; if (f(n)) { for (i = new Array(n.length), u = 0; u < n.length; u++) i[u] = r(n[u], t); return i } if ("object" == typeof n && !(n instanceof Date)) { i = {}; for (o in n) i[o] = r(n[o], t); return i } return n }

        function u(n, t) { var i, r; if (!n) return n; if (n && n._placeholder) return t[n.num]; if (f(n))
                for (i = 0; i < n.length; i++) n[i] = u(n[i], t);
            else if ("object" == typeof n)
                for (r in n) n[r] = u(n[r], t); return n } var f = i(10),
            e = i(11),
            o = Object.prototype.toString,
            s = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === o.call(Blob),
            h = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === o.call(File);
        t.deconstructPacket = function(n) { var t = [],
                u = n.data,
                i = n; return i.data = r(u, t), i.attachments = t.length, { packet: i, buffers: t } };
        t.reconstructPacket = function(n, t) { return n.data = u(n.data, t), n.attachments = void 0, n };
        t.removeBlobs = function(n, t) {
            function r(n, o, c) { var a, l, v; if (!n) return n; if (s && n instanceof Blob || h && n instanceof File) u++, a = new FileReader, a.onload = function() { c ? c[o] = this.result : i = this.result;--u || t(i) }, a.readAsArrayBuffer(n);
                else if (f(n))
                    for (l = 0; l < n.length; l++) r(n[l], l, n);
                else if ("object" == typeof n && !e(n))
                    for (v in n) r(n[v], v, n) } var u = 0,
                i = n;
            r(i);
            u || t(i) } }, function(n) { var t = {}.toString;
        n.exports = Array.isArray || function(n) { return "[object Array]" == t.call(n) } }, function(n) {
        function t(n) { return i && Buffer.isBuffer(n) || r && (n instanceof ArrayBuffer || u(n)) }
        n.exports = t; var i = "function" == typeof Buffer && "function" == typeof Buffer.isBuffer,
            r = "function" == typeof ArrayBuffer,
            u = function(n) { return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(n) : n.buffer instanceof ArrayBuffer } }, function(n, t, i) { "use strict";

        function r(n, t) { if (!(this instanceof r)) return new r(n, t);
            n && "object" === ("undefined" == typeof n ? "undefined" : h(n)) && (t = n, n = void 0);
            t = t || {};
            t.path = t.path || "/socket.io";
            this.nsps = {};
            this.subs = [];
            this.opts = t;
            this.reconnection(t.reconnection !== !1);
            this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0);
            this.reconnectionDelay(t.reconnectionDelay || 1e3);
            this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3);
            this.randomizationFactor(t.randomizationFactor || .5);
            this.backoff = new y({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() });
            this.timeout(null == t.timeout ? 2e4 : t.timeout);
            this.readyState = "closed";
            this.uri = n;
            this.connecting = [];
            this.lastPing = null;
            this.encoding = !1;
            this.packetBuffer = []; var i = t.parser || v;
            this.encoder = new i.Encoder;
            this.decoder = new i.Decoder;
            this.autoConnect = t.autoConnect !== !1;
            this.autoConnect && this.open() } var h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) { return typeof n } : function(n) { return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n },
            c = i(13),
            l = i(36),
            a = i(8),
            v = i(7),
            f = i(38),
            e = i(39),
            u = i(3)("socket.io-client:manager"),
            o = i(35),
            y = i(40),
            s = Object.prototype.hasOwnProperty;
        n.exports = r;
        r.prototype.emitAll = function() { this.emit.apply(this, arguments); for (var n in this.nsps) s.call(this.nsps, n) && this.nsps[n].emit.apply(this.nsps[n], arguments) };
        r.prototype.updateSocketIds = function() { for (var n in this.nsps) s.call(this.nsps, n) && (this.nsps[n].id = this.generateId(n)) };
        r.prototype.generateId = function(n) { return ("/" === n ? "" : n + "#") + this.engine.id };
        a(r.prototype);
        r.prototype.reconnection = function(n) { return arguments.length ? (this._reconnection = !!n, this) : this._reconnection };
        r.prototype.reconnectionAttempts = function(n) { return arguments.length ? (this._reconnectionAttempts = n, this) : this._reconnectionAttempts };
        r.prototype.reconnectionDelay = function(n) { return arguments.length ? (this._reconnectionDelay = n, this.backoff && this.backoff.setMin(n), this) : this._reconnectionDelay };
        r.prototype.randomizationFactor = function(n) { return arguments.length ? (this._randomizationFactor = n, this.backoff && this.backoff.setJitter(n), this) : this._randomizationFactor };
        r.prototype.reconnectionDelayMax = function(n) { return arguments.length ? (this._reconnectionDelayMax = n, this.backoff && this.backoff.setMax(n), this) : this._reconnectionDelayMax };
        r.prototype.timeout = function(n) { return arguments.length ? (this._timeout = n, this) : this._timeout };
        r.prototype.maybeReconnectOnOpen = function() {!this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect() };
        r.prototype.open = r.prototype.connect = function(n) { var i, t, e, o, r, s; return (u("readyState %s", this.readyState), ~this.readyState.indexOf("open")) ? this : (u("opening %s", this.uri), this.engine = c(this.uri, this.opts), i = this.engine, t = this, this.readyState = "opening", this.skipReconnect = !1, e = f(i, "open", function() { t.onopen();
                n && n() }), o = f(i, "error", function(i) { if (u("connect_error"), t.cleanup(), t.readyState = "closed", t.emitAll("connect_error", i), n) { var r = new Error("Connection error");
                    r.data = i;
                    n(r) } else t.maybeReconnectOnOpen() }), !1 !== this._timeout && (r = this._timeout, u("connect attempt will timeout after %d", r), s = setTimeout(function() { u("connect attempt timed out after %d", r);
                e.destroy();
                i.close();
                i.emit("error", "timeout");
                t.emitAll("connect_timeout", r) }, r), this.subs.push({ destroy: function() { clearTimeout(s) } })), this.subs.push(e), this.subs.push(o), this) };
        r.prototype.onopen = function() { u("open");
            this.cleanup();
            this.readyState = "open";
            this.emit("open"); var n = this.engine;
            this.subs.push(f(n, "data", e(this, "ondata")));
            this.subs.push(f(n, "ping", e(this, "onping")));
            this.subs.push(f(n, "pong", e(this, "onpong")));
            this.subs.push(f(n, "error", e(this, "onerror")));
            this.subs.push(f(n, "close", e(this, "onclose")));
            this.subs.push(f(this.decoder, "decoded", e(this, "ondecoded"))) };
        r.prototype.onping = function() { this.lastPing = new Date;
            this.emitAll("ping") };
        r.prototype.onpong = function() { this.emitAll("pong", new Date - this.lastPing) };
        r.prototype.ondata = function(n) { this.decoder.add(n) };
        r.prototype.ondecoded = function(n) { this.emit("packet", n) };
        r.prototype.onerror = function(n) { u("error", n);
            this.emitAll("error", n) };
        r.prototype.socket = function(n, t) {
            function u() {~o(r.connecting, i) || r.connecting.push(i) } var i = this.nsps[n],
                r; return i || (i = new l(this, n, t), this.nsps[n] = i, r = this, i.on("connecting", u), i.on("connect", function() { i.id = r.generateId(n) }), this.autoConnect && u()), i };
        r.prototype.destroy = function(n) { var t = o(this.connecting, n);~t && this.connecting.splice(t, 1);
            this.connecting.length || this.close() };
        r.prototype.packet = function(n) { u("writing packet %j", n); var t = this;
            n.query && 0 === n.type && (n.nsp += "?" + n.query);
            t.encoding ? t.packetBuffer.push(n) : (t.encoding = !0, this.encoder.encode(n, function(i) { for (var r = 0; r < i.length; r++) t.engine.write(i[r], n.options);
                t.encoding = !1;
                t.processPacketQueue() })) };
        r.prototype.processPacketQueue = function() { if (this.packetBuffer.length > 0 && !this.encoding) { var n = this.packetBuffer.shift();
                this.packet(n) } };
        r.prototype.cleanup = function() { var t, n, i; for (u("cleanup"), t = this.subs.length, n = 0; n < t; n++) i = this.subs.shift(), i.destroy();
            this.packetBuffer = [];
            this.encoding = !1;
            this.lastPing = null;
            this.decoder.destroy() };
        r.prototype.close = r.prototype.disconnect = function() { u("disconnect");
            this.skipReconnect = !0;
            this.reconnecting = !1; "opening" === this.readyState && this.cleanup();
            this.backoff.reset();
            this.readyState = "closed";
            this.engine && this.engine.close() };
        r.prototype.onclose = function(n) { u("onclose");
            this.cleanup();
            this.backoff.reset();
            this.readyState = "closed";
            this.emit("close", n);
            this._reconnection && !this.skipReconnect && this.reconnect() };
        r.prototype.reconnect = function() { var n, t, i; if (this.reconnecting || this.skipReconnect) return this;
            n = this;
            this.backoff.attempts >= this._reconnectionAttempts ? (u("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1) : (t = this.backoff.duration(), u("will wait %dms before reconnect attempt", t), this.reconnecting = !0, i = setTimeout(function() { n.skipReconnect || (u("attempting reconnect"), n.emitAll("reconnect_attempt", n.backoff.attempts), n.emitAll("reconnecting", n.backoff.attempts), n.skipReconnect || n.open(function(t) { t ? (u("reconnect attempt error"), n.reconnecting = !1, n.reconnect(), n.emitAll("reconnect_error", t.data)) : (u("reconnect success"), n.onreconnect()) })) }, t), this.subs.push({ destroy: function() { clearTimeout(i) } })) };
        r.prototype.onreconnect = function() { var n = this.backoff.attempts;
            this.reconnecting = !1;
            this.backoff.reset();
            this.updateSocketIds();
            this.emitAll("reconnect", n) } }, function(n, t, i) { n.exports = i(14);
        n.exports.parser = i(21) }, function(n, t, i) {
        function r(n, t) { return this instanceof r ? (t = t || {}, n && "object" == typeof n && (t = n, n = null), n ? (n = e(n), t.hostname = n.host, t.secure = "https" === n.protocol || "wss" === n.protocol, t.port = n.port, n.query && (t.query = n.query)) : t.host && (t.hostname = e(t.host).host), this.secure = null != t.secure ? t.secure : "undefined" != typeof location && "https:" === location.protocol, t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.agent = t.agent || !1, this.hostname = t.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), this.port = t.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? 443 : 80), this.query = t.query || {}, "string" == typeof this.query && (this.query = l.decode(this.query)), this.upgrade = !1 !== t.upgrade, this.path = (t.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!t.forceJSONP, this.jsonp = !1 !== t.jsonp, this.forceBase64 = !!t.forceBase64, this.enablesXDR = !!t.enablesXDR, this.timestampParam = t.timestampParam || "t", this.timestampRequests = t.timestampRequests, this.transports = t.transports || ["polling", "websocket"], this.transportOptions = t.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = t.policyPort || 843, this.rememberUpgrade = t.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = t.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== t.perMessageDeflate && (t.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = t.pfx || null, this.key = t.key || null, this.passphrase = t.passphrase || null, this.cert = t.cert || null, this.ca = t.ca || null, this.ciphers = t.ciphers || null, this.rejectUnauthorized = void 0 === t.rejectUnauthorized || t.rejectUnauthorized, this.forceNode = !!t.forceNode, this.isReactNative = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase(), ("undefined" == typeof self || this.isReactNative) && (t.extraHeaders && Object.keys(t.extraHeaders).length > 0 && (this.extraHeaders = t.extraHeaders), t.localAddress && (this.localAddress = t.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, void this.open()) : new r(n, t) }

        function o(n) { var i = {}; for (var t in n) n.hasOwnProperty(t) && (i[t] = n[t]); return i } var s = i(15),
            h = i(8),
            u = i(3)("engine.io-client:socket"),
            c = i(35),
            f = i(21),
            e = i(2),
            l = i(29);
        n.exports = r;
        r.priorWebsocketSuccess = !1;
        h(r.prototype);
        r.protocol = f.protocol;
        r.Socket = r;
        r.Transport = i(20);
        r.transports = i(15);
        r.parser = i(21);
        r.prototype.createTransport = function(n) { var i, t; return u('creating transport "%s"', n), i = o(this.query), i.EIO = f.protocol, i.transport = n, t = this.transportOptions[n] || {}, this.id && (i.sid = this.id), new s[n]({ query: i, socket: this, agent: t.agent || this.agent, hostname: t.hostname || this.hostname, port: t.port || this.port, secure: t.secure || this.secure, path: t.path || this.path, forceJSONP: t.forceJSONP || this.forceJSONP, jsonp: t.jsonp || this.jsonp, forceBase64: t.forceBase64 || this.forceBase64, enablesXDR: t.enablesXDR || this.enablesXDR, timestampRequests: t.timestampRequests || this.timestampRequests, timestampParam: t.timestampParam || this.timestampParam, policyPort: t.policyPort || this.policyPort, pfx: t.pfx || this.pfx, key: t.key || this.key, passphrase: t.passphrase || this.passphrase, cert: t.cert || this.cert, ca: t.ca || this.ca, ciphers: t.ciphers || this.ciphers, rejectUnauthorized: t.rejectUnauthorized || this.rejectUnauthorized, perMessageDeflate: t.perMessageDeflate || this.perMessageDeflate, extraHeaders: t.extraHeaders || this.extraHeaders, forceNode: t.forceNode || this.forceNode, localAddress: t.localAddress || this.localAddress, requestTimeout: t.requestTimeout || this.requestTimeout, protocols: t.protocols || void 0, isReactNative: this.isReactNative }) };
        r.prototype.open = function() { var n, t; if (this.rememberUpgrade && r.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) n = "websocket";
            else { if (0 === this.transports.length) return t = this, void setTimeout(function() { t.emit("error", "No transports available") }, 0);
                n = this.transports[0] }
            this.readyState = "opening"; try { n = this.createTransport(n) } catch (i) { return this.transports.shift(), void this.open() }
            n.open();
            this.setTransport(n) };
        r.prototype.setTransport = function(n) { u("setting transport %s", n.name); var t = this;
            this.transport && (u("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners());
            this.transport = n;
            n.on("drain", function() { t.onDrain() }).on("packet", function(n) { t.onPacket(n) }).on("error", function(n) { t.onError(n) }).on("close", function() { t.onClose("transport close") }) };
        r.prototype.probe = function(n) {
            function o() { if (i.onlyBinaryUpgrades) { var e = !this.supportsBinary && i.transport.supportsBinary;
                    f = f || e }
                f || (u('probe transport "%s" opened', n), t.send([{ type: "ping", data: "probe" }]), t.once("packet", function(e) { if (!f)
                        if ("pong" === e.type && "probe" === e.data) { if (u('probe transport "%s" pong', n), i.upgrading = !0, i.emit("upgrading", t), !t) return;
                            r.priorWebsocketSuccess = "websocket" === t.name;
                            u('pausing current transport "%s"', i.transport.name);
                            i.transport.pause(function() { f || "closed" !== i.readyState && (u("changing transport and sending upgrade packet"), a(), i.setTransport(t), t.send([{ type: "upgrade" }]), i.emit("upgrade", t), t = null, i.upgrading = !1, i.flush()) }) } else { u('probe transport "%s" failed', n); var o = new Error("probe error");
                            o.transport = t.name;
                            i.emit("upgradeError", o) } })) }

            function s() { f || (f = !0, a(), t.close(), t = null) }

            function e(r) { var f = new Error("probe error: " + r);
                f.transport = t.name;
                s();
                u('probe transport "%s" failed because of error: %s', n, r);
                i.emit("upgradeError", f) }

            function h() { e("transport closed") }

            function c() { e("socket closed") }

            function l(n) { t && n.name !== t.name && (u('"%s" works - aborting "%s"', n.name, t.name), s()) }

            function a() { t.removeListener("open", o);
                t.removeListener("error", e);
                t.removeListener("close", h);
                i.removeListener("close", c);
                i.removeListener("upgrading", l) }
            u('probing transport "%s"', n); var t = this.createTransport(n, { probe: 1 }),
                f = !1,
                i = this;
            r.priorWebsocketSuccess = !1;
            t.once("open", o);
            t.once("error", e);
            t.once("close", h);
            this.once("close", c);
            this.once("upgrading", l);
            t.open() };
        r.prototype.onOpen = function() { if (u("socket open"), this.readyState = "open", r.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) { u("starting upgrade probes"); for (var n = 0, t = this.upgrades.length; n < t; n++) this.probe(this.upgrades[n]) } };
        r.prototype.onPacket = function(n) { if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (u('socket receive: type "%s", data "%s"', n.type, n.data), this.emit("packet", n), this.emit("heartbeat"), n.type) {
                case "open":
                    this.onHandshake(JSON.parse(n.data)); break;
                case "pong":
                    this.setPing();
                    this.emit("pong"); break;
                case "error":
                    var t = new Error("server error");
                    t.code = n.data;
                    this.onError(t); break;
                case "message":
                    this.emit("data", n.data);
                    this.emit("message", n.data) } else u('packet received with socket readyState "%s"', this.readyState) };
        r.prototype.onHandshake = function(n) { this.emit("handshake", n);
            this.id = n.sid;
            this.transport.query.sid = n.sid;
            this.upgrades = this.filterUpgrades(n.upgrades);
            this.pingInterval = n.pingInterval;
            this.pingTimeout = n.pingTimeout;
            this.onOpen(); "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat)) };
        r.prototype.onHeartbeat = function(n) { clearTimeout(this.pingTimeoutTimer); var t = this;
            t.pingTimeoutTimer = setTimeout(function() { "closed" !== t.readyState && t.onClose("ping timeout") }, n || t.pingInterval + t.pingTimeout) };
        r.prototype.setPing = function() { var n = this;
            clearTimeout(n.pingIntervalTimer);
            n.pingIntervalTimer = setTimeout(function() { u("writing ping packet - expecting pong within %sms", n.pingTimeout);
                n.ping();
                n.onHeartbeat(n.pingTimeout) }, n.pingInterval) };
        r.prototype.ping = function() { var n = this;
            this.sendPacket("ping", function() { n.emit("ping") }) };
        r.prototype.onDrain = function() { this.writeBuffer.splice(0, this.prevBufferLen);
            this.prevBufferLen = 0;
            0 === this.writeBuffer.length ? this.emit("drain") : this.flush() };
        r.prototype.flush = function() { "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (u("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush")) };
        r.prototype.write = r.prototype.send = function(n, t, i) { return this.sendPacket("message", n, t, i), this };
        r.prototype.sendPacket = function(n, t, i, r) { if ("function" == typeof t && (r = t, t = void 0), "function" == typeof i && (r = i, i = null), "closing" !== this.readyState && "closed" !== this.readyState) { i = i || {};
                i.compress = !1 !== i.compress; var u = { type: n, data: t, options: i };
                this.emit("packetCreate", u);
                this.writeBuffer.push(u);
                r && this.once("flush", r);
                this.flush() } };
        r.prototype.close = function() {
            function i() { n.onClose("forced close");
                u("socket closing - telling transport to close");
                n.transport.close() }

            function t() { n.removeListener("upgrade", t);
                n.removeListener("upgradeError", t);
                i() }

            function r() { n.once("upgrade", t);
                n.once("upgradeError", t) } if ("opening" === this.readyState || "open" === this.readyState) { this.readyState = "closing"; var n = this;
                this.writeBuffer.length ? this.once("drain", function() { this.upgrading ? r() : i() }) : this.upgrading ? r() : i() } return this };
        r.prototype.onError = function(n) { u("socket error %j", n);
            r.priorWebsocketSuccess = !1;
            this.emit("error", n);
            this.onClose("transport error", n) };
        r.prototype.onClose = function(n, t) { if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) { u('socket close with reason: "%s"', n); var i = this;
                clearTimeout(this.pingIntervalTimer);
                clearTimeout(this.pingTimeoutTimer);
                this.transport.removeAllListeners("close");
                this.transport.close();
                this.transport.removeAllListeners();
                this.readyState = "closed";
                this.id = null;
                this.emit("close", n, t);
                i.writeBuffer = [];
                i.prevBufferLen = 0 } };
        r.prototype.filterUpgrades = function(n) { for (var i = [], t = 0, r = n.length; t < r; t++) ~c(this.transports, n[t]) && i.push(n[t]); return i } }, function(n, t, i) {
        function r(n) { var r, o = !1,
                s = !1,
                h = !1 !== n.jsonp,
                i, t; if ("undefined" != typeof location && (i = "https:" === location.protocol, t = location.port, t || (t = i ? 443 : 80), o = n.hostname !== location.hostname || t !== n.port, s = n.secure !== i), n.xdomain = o, n.xscheme = s, r = new u(n), "open" in r && !n.forceJSONP) return new f(n); if (!h) throw new Error("JSONP disabled"); return new e(n) } var u = i(16),
            f = i(18),
            e = i(32),
            o = i(33);
        t.polling = r;
        t.websocket = o }, function(n, t, i) { var r = i(17);
        n.exports = function(n) { var t = n.xdomain,
                i = n.xscheme,
                u = n.enablesXDR; try { if ("undefined" != typeof XMLHttpRequest && (!t || r)) return new XMLHttpRequest } catch (f) {} try { if ("undefined" != typeof XDomainRequest && !i && u) return new XDomainRequest } catch (f) {} if (!t) try { return new self[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP") } catch (f) {} } }, function(n) { try { n.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest } catch (t) { n.exports = !1 } }, function(n, t, i) {
        function e() {}

        function u(n) { if (s.call(this, n), this.requestTimeout = n.requestTimeout, this.extraHeaders = n.extraHeaders, "undefined" != typeof location) { var i = "https:" === location.protocol,
                    t = location.port;
                t || (t = i ? 443 : 80);
                this.xd = "undefined" != typeof location && n.hostname !== location.hostname || t !== n.port;
                this.xs = n.secure !== i } }

        function r(n) { this.method = n.method || "GET";
            this.uri = n.uri;
            this.xd = !!n.xd;
            this.xs = !!n.xs;
            this.async = !1 !== n.async;
            this.data = void 0 !== n.data ? n.data : null;
            this.agent = n.agent;
            this.isBinary = n.isBinary;
            this.supportsBinary = n.supportsBinary;
            this.enablesXDR = n.enablesXDR;
            this.requestTimeout = n.requestTimeout;
            this.pfx = n.pfx;
            this.key = n.key;
            this.passphrase = n.passphrase;
            this.cert = n.cert;
            this.ca = n.ca;
            this.ciphers = n.ciphers;
            this.rejectUnauthorized = n.rejectUnauthorized;
            this.extraHeaders = n.extraHeaders;
            this.create() }

        function o() { for (var n in r.requests) r.requests.hasOwnProperty(n) && r.requests[n].abort() } var c = i(16),
            s = i(19),
            l = i(8),
            a = i(30),
            f = i(3)("engine.io-client:polling-xhr"),
            h;
        (n.exports = u, n.exports.Request = r, a(u, s), u.prototype.supportsBinary = !0, u.prototype.request = function(n) { return n = n || {}, n.uri = this.uri(), n.xd = this.xd, n.xs = this.xs, n.agent = this.agent || !1, n.supportsBinary = this.supportsBinary, n.enablesXDR = this.enablesXDR, n.pfx = this.pfx, n.key = this.key, n.passphrase = this.passphrase, n.cert = this.cert, n.ca = this.ca, n.ciphers = this.ciphers, n.rejectUnauthorized = this.rejectUnauthorized, n.requestTimeout = this.requestTimeout, n.extraHeaders = this.extraHeaders, new r(n) }, u.prototype.doWrite = function(n, t) { var r = "string" != typeof n && void 0 !== n,
                i = this.request({ method: "POST", data: n, isBinary: r }),
                u = this;
            i.on("success", t);
            i.on("error", function(n) { u.onError("xhr post error", n) });
            this.sendXhr = i }, u.prototype.doPoll = function() { f("xhr poll"); var n = this.request(),
                t = this;
            n.on("data", function(n) { t.onData(n) });
            n.on("error", function(n) { t.onError("xhr poll error", n) });
            this.pollXhr = n }, l(r.prototype), r.prototype.create = function() { var t = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR },
                n, i, u;
            t.pfx = this.pfx;
            t.key = this.key;
            t.passphrase = this.passphrase;
            t.cert = this.cert;
            t.ca = this.ca;
            t.ciphers = this.ciphers;
            t.rejectUnauthorized = this.rejectUnauthorized;
            n = this.xhr = new c(t);
            i = this; try { f("xhr open %s: %s", this.method, this.uri);
                n.open(this.method, this.uri, this.async); try { if (this.extraHeaders) { n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0); for (u in this.extraHeaders) this.extraHeaders.hasOwnProperty(u) && n.setRequestHeader(u, this.extraHeaders[u]) } } catch (e) {} if ("POST" === this.method) try { this.isBinary ? n.setRequestHeader("Content-type", "application/octet-stream") : n.setRequestHeader("Content-type", "text/plain;charset=UTF-8") } catch (e) {}
                try { n.setRequestHeader("Accept", "*/*") } catch (e) {} "withCredentials" in n && (n.withCredentials = !0);
                this.requestTimeout && (n.timeout = this.requestTimeout);
                this.hasXDR() ? (n.onload = function() { i.onLoad() }, n.onerror = function() { i.onError(n.responseText) }) : n.onreadystatechange = function() { if (2 === n.readyState) try { var t = n.getResponseHeader("Content-Type");
                        i.supportsBinary && "application/octet-stream" === t && (n.responseType = "arraybuffer") } catch (r) {}
                    4 === n.readyState && (200 === n.status || 1223 === n.status ? i.onLoad() : setTimeout(function() { i.onError(n.status) }, 0)) };
                f("xhr data %s", this.data);
                n.send(this.data) } catch (e) { return void setTimeout(function() { i.onError(e) }, 0) } "undefined" != typeof document && (this.index = r.requestsCount++, r.requests[this.index] = this) }, r.prototype.onSuccess = function() { this.emit("success");
            this.cleanup() }, r.prototype.onData = function(n) { this.emit("data", n);
            this.onSuccess() }, r.prototype.onError = function(n) { this.emit("error", n);
            this.cleanup(!0) }, r.prototype.cleanup = function(n) { if ("undefined" != typeof this.xhr && null !== this.xhr) { if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = e : this.xhr.onreadystatechange = e, n) try { this.xhr.abort() } catch (t) {}
                "undefined" != typeof document && delete r.requests[this.index];
                this.xhr = null } }, r.prototype.onLoad = function() { var n, t; try { try { t = this.xhr.getResponseHeader("Content-Type") } catch (i) {}
                n = "application/octet-stream" === t ? this.xhr.response || this.xhr.responseText : this.xhr.responseText } catch (i) { this.onError(i) }
            null != n && this.onData(n) }, r.prototype.hasXDR = function() { return "undefined" != typeof XDomainRequest && !this.xs && this.enablesXDR }, r.prototype.abort = function() { this.cleanup() }, r.requestsCount = 0, r.requests = {}, "undefined" != typeof document) && ("function" == typeof attachEvent ? attachEvent("onunload", o) : "function" == typeof addEventListener && (h = "onpagehide" in self ? "pagehide" : "unload", addEventListener(h, o, !1))) }, function(n, t, i) {
        function u(n) { var t = n && n.forceBase64;
            o && !t || (this.supportsBinary = !1);
            f.call(this, n) } var f = i(20),
            s = i(29),
            e = i(21),
            h = i(30),
            c = i(31),
            r = i(3)("engine.io-client:polling"),
            o;
        n.exports = u;
        o = function() { var n = i(16),
                t = new n({ xdomain: !1 }); return null != t.responseType }();
        h(u, f);
        u.prototype.name = "polling";
        u.prototype.doOpen = function() { this.poll() };
        u.prototype.pause = function(n) {
            function i() { r("paused");
                u.readyState = "paused";
                n() } var u = this,
                t;
            (this.readyState = "pausing", this.polling || !this.writable) ? (t = 0, this.polling && (r("we are currently polling - waiting to pause"), t++, this.once("pollComplete", function() { r("pre-pause polling complete");--t || i() })), this.writable || (r("we are currently writing - waiting to pause"), t++, this.once("drain", function() { r("pre-pause writing complete");--t || i() }))) : i() };
        u.prototype.poll = function() { r("polling");
            this.polling = !0;
            this.doPoll();
            this.emit("poll") };
        u.prototype.onData = function(n) { var t = this,
                i;
            r("polling got data %s", n);
            i = function(n) { return "opening" === t.readyState && t.onOpen(), "close" === n.type ? (t.onClose(), !1) : void t.onPacket(n) };
            e.decodePayload(n, this.socket.binaryType, i); "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : r('ignoring poll - transport state "%s"', this.readyState)) };
        u.prototype.doClose = function() {
            function n() { r("writing close packet");
                t.write([{ type: "close" }]) } var t = this; "open" === this.readyState ? (r("transport open - closing"), n()) : (r("transport not open - deferring close"), this.once("open", n)) };
        u.prototype.write = function(n) { var t = this,
                i;
            this.writable = !1;
            i = function() { t.writable = !0;
                t.emit("drain") };
            e.encodePayload(n, this.supportsBinary, function(n) { t.doWrite(n, i) }) };
        u.prototype.uri = function() { var n = this.query || {},
                t = this.secure ? "https" : "http",
                i = "",
                r; return !1 !== this.timestampRequests && (n[this.timestampParam] = c()), this.supportsBinary || n.sid || (n.b64 = 1), n = s.encode(n), this.port && ("https" === t && 443 !== Number(this.port) || "http" === t && 80 !== Number(this.port)) && (i = ":" + this.port), n.length && (n = "?" + n), r = this.hostname.indexOf(":") !== -1, t + "://" + (r ? "[" + this.hostname + "]" : this.hostname) + i + this.path + n } }, function(n, t, i) {
        function r(n) { this.path = n.path;
            this.hostname = n.hostname;
            this.port = n.port;
            this.secure = n.secure;
            this.query = n.query;
            this.timestampParam = n.timestampParam;
            this.timestampRequests = n.timestampRequests;
            this.readyState = "";
            this.agent = n.agent || !1;
            this.socket = n.socket;
            this.enablesXDR = n.enablesXDR;
            this.pfx = n.pfx;
            this.key = n.key;
            this.passphrase = n.passphrase;
            this.cert = n.cert;
            this.ca = n.ca;
            this.ciphers = n.ciphers;
            this.rejectUnauthorized = n.rejectUnauthorized;
            this.forceNode = n.forceNode;
            this.isReactNative = n.isReactNative;
            this.extraHeaders = n.extraHeaders;
            this.localAddress = n.localAddress } var u = i(21),
            f = i(8);
        n.exports = r;
        f(r.prototype);
        r.prototype.onError = function(n, t) { var i = new Error(n); return i.type = "TransportError", i.description = t, this.emit("error", i), this };
        r.prototype.open = function() { return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this };
        r.prototype.close = function() { return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this };
        r.prototype.send = function(n) { if ("open" !== this.readyState) throw new Error("Transport not open");
            this.write(n) };
        r.prototype.onOpen = function() { this.readyState = "open";
            this.writable = !0;
            this.emit("open") };
        r.prototype.onData = function(n) { var t = u.decodePacket(n, this.socket.binaryType);
            this.onPacket(t) };
        r.prototype.onPacket = function(n) { this.emit("packet", n) };
        r.prototype.onClose = function() { this.readyState = "closed";
            this.emit("close") } }, function(n, t, i) {
        function a(n, i) { var r = "b" + t.packets[n.type] + n.data.data; return i(r) }

        function v(n, i, r) { var u; if (!i) return t.encodeBase64Packet(n, r); var e = n.data,
                s = new Uint8Array(e),
                f = new Uint8Array(1 + e.byteLength); for (f[0] = o[n.type], u = 0; u < s.length; u++) f[u + 1] = s[u]; return r(f.buffer) }

        function y(n, i, r) { if (!i) return t.encodeBase64Packet(n, r); var u = new FileReader; return u.onload = function() { t.encodePacket({ type: n.type, data: u.result }, i, !0, r) }, u.readAsArrayBuffer(n.data) }

        function p(n, i, u) { var f, e; return i ? l ? y(n, i, u) : (f = new Uint8Array(1), f[0] = o[n.type], e = new r([f.buffer, n.data]), u(e)) : t.encodeBase64Packet(n, u) }

        function w(n) { try { n = c.decode(n, { strict: !1 }) } catch (t) { return !1 } return n }

        function s(n, t, i) { for (var u = new Array(n.length), f = d(n.length, i), e = function(n, i, r) { t(i, function(t, i) { u[n] = i;
                        r(t, u) }) }, r = 0; r < n.length; r++) e(r, n[r], f) } var h, b = i(22),
            k = i(23),
            e = i(24),
            d = i(25),
            c = i(26); "undefined" != typeof ArrayBuffer && (h = i(27)); var g = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
            nt = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
            l = g || nt;
        t.protocol = 3; var o = t.packets = { open: 0, close: 1, ping: 2, pong: 3, message: 4, upgrade: 5, noop: 6 },
            f = b(o),
            u = { type: "error", data: "parser error" },
            r = i(28);
        t.encodePacket = function(n, t, i, u) { var f, e; return ("function" == typeof t && (u = t, t = !1), "function" == typeof i && (u = i, i = null), f = void 0 === n.data ? void 0 : n.data.buffer || n.data, "undefined" != typeof ArrayBuffer && f instanceof ArrayBuffer) ? v(n, t, u) : "undefined" != typeof r && f instanceof r ? p(n, t, u) : f && f.base64 ? a(n, u) : (e = o[n.type], void 0 !== n.data && (e += i ? c.encode(String(n.data), { strict: !1 }) : String(n.data)), u("" + e)) };
        t.encodeBase64Packet = function(n, i) { var e = "b" + t.packets[n.type],
                u, o; if ("undefined" != typeof r && n.data instanceof r) return u = new FileReader, u.onload = function() { var n = u.result.split(",")[1];
                i(e + n) }, u.readAsDataURL(n.data); try { o = String.fromCharCode.apply(null, new Uint8Array(n.data)) } catch (c) { for (var s = new Uint8Array(n.data), h = new Array(s.length), f = 0; f < s.length; f++) h[f] = s[f];
                o = String.fromCharCode.apply(null, h) } return e += btoa(o), i(e) };
        t.decodePacket = function(n, i, o) { var s; if (void 0 === n) return u; if ("string" == typeof n) return "b" === n.charAt(0) ? t.decodeBase64Packet(n.substr(1), i) : o && (n = w(n), n === !1) ? u : (s = n.charAt(0), Number(s) == s && f[s] ? n.length > 1 ? { type: f[s], data: n.substring(1) } : { type: f[s] } : u); var c = new Uint8Array(n),
                s = c[0],
                h = e(n, 1); return r && "blob" === i && (h = new r([h])), { type: f[s], data: h } };
        t.decodeBase64Packet = function(n, t) { var u = f[n.charAt(0)],
                i; return h ? (i = h.decode(n.substr(1)), "blob" === t && r && (i = new r([i])), { type: u, data: i }) : { type: u, data: { base64: !0, data: n.substr(1) } } };
        t.encodePayload = function(n, i, u) {
            function e(n) { return n.length + ":" + n }

            function o(n, r) { t.encodePacket(n, !!f && i, !1, function(n) { r(null, e(n)) }) } "function" == typeof i && (u = i, i = null); var f = k(n); return i && f ? r && !l ? t.encodePayloadAsBlob(n, u) : t.encodePayloadAsArrayBuffer(n, u) : n.length ? void s(n, o, function(n, t) { return u(t.join("")) }) : u("0:") };
        t.decodePayload = function(n, i, r) { var o, c, a; if ("string" != typeof n) return t.decodePayloadAsBinary(n, i, r); if ("function" == typeof i && (r = i, i = null), "" === n) return r(u, 0, 1); for (var s, h, f = "", e = 0, l = n.length; e < l; e++)
                if (c = n.charAt(e), ":" === c) { if ("" === f || f != (s = Number(f)) || (h = n.substr(e + 1, s), f != h.length)) return r(u, 0, 1); if (h.length) { if (o = t.decodePacket(h, i, !1), u.type === o.type && u.data === o.data) return r(u, 0, 1); if (a = r(o, e + s, l), !1 === a) return }
                    e += s;
                    f = "" } else f += c;
            if ("" !== f) return r(u, 0, 1) };
        t.encodePayloadAsArrayBuffer = function(n, i) {
            function r(n, i) { t.encodePacket(n, !0, !0, function(n) { return i(null, n) }) } return n.length ? void s(n, r, function(n, t) { var f = t.reduce(function(n, t) { var i; return i = "string" == typeof t ? t.length : t.byteLength, n + i.toString().length + i + 2 }, 0),
                    r = new Uint8Array(f),
                    u = 0; return t.forEach(function(n) { var o = "string" == typeof n,
                        f = n,
                        e, i, t; if (o) { for (i = new Uint8Array(n.length), t = 0; t < n.length; t++) i[t] = n.charCodeAt(t);
                        f = i.buffer } for (r[u++] = o ? 0 : 1, e = f.byteLength.toString(), t = 0; t < e.length; t++) r[u++] = parseInt(e[t]); for (r[u++] = 255, i = new Uint8Array(f), t = 0; t < i.length; t++) r[u++] = i[t] }), i(r.buffer) }) : i(new ArrayBuffer(0)) };
        t.encodePayloadAsBlob = function(n, i) {
            function u(n, i) { t.encodePacket(n, !0, !0, function(n) { var f = new Uint8Array(1),
                        e, t, s; if (f[0] = 1, "string" == typeof n) { for (e = new Uint8Array(n.length), t = 0; t < n.length; t++) e[t] = n.charCodeAt(t);
                        n = e.buffer;
                        f[0] = 0 } for (var h = n instanceof ArrayBuffer ? n.byteLength : n.size, u = h.toString(), o = new Uint8Array(u.length + 1), t = 0; t < u.length; t++) o[t] = parseInt(u[t]);
                    (o[u.length] = 255, r) && (s = new r([f.buffer, o.buffer, n]), i(null, s)) }) }
            s(n, u, function(n, t) { return i(new r(t)) }) };
        t.decodePayloadAsBinary = function(n, i, r) { var f, c, h, a, s, v; for ("function" == typeof i && (r = i, i = null), f = n, c = []; f.byteLength > 0;) { for (var l = new Uint8Array(f), y = 0 === l[0], o = "", s = 1; 255 !== l[s]; s++) { if (o.length > 310) return r(u, 0, 1);
                    o += l[s] } if (f = e(f, 2 + o.length), o = parseInt(o), h = e(f, 0, o), y) try { h = String.fromCharCode.apply(null, new Uint8Array(h)) } catch (p) { for (a = new Uint8Array(h), h = "", s = 0; s < a.length; s++) h += String.fromCharCode(a[s]) }
                c.push(h);
                f = e(f, o) }
            v = c.length;
            c.forEach(function(n, u) { r(t.decodePacket(n, i, !0), u, v) }) } }, function(n) { n.exports = Object.keys || function(n) { var t = [],
                r = Object.prototype.hasOwnProperty; for (var i in n) r.call(n, i) && t.push(i); return t } }, function(n, t, i) {
        function r(n) { var t, u, i; if (!n || "object" != typeof n) return !1; if (f(n)) { for (t = 0, u = n.length; t < u; t++)
                    if (r(n[t])) return !0;
                return !1 } if ("function" == typeof Buffer && Buffer.isBuffer && Buffer.isBuffer(n) || "function" == typeof ArrayBuffer && n instanceof ArrayBuffer || e && n instanceof Blob || o && n instanceof File) return !0; if (n.toJSON && "function" == typeof n.toJSON && 1 === arguments.length) return r(n.toJSON(), !0); for (i in n)
                if (Object.prototype.hasOwnProperty.call(n, i) && r(n[i])) return !0;
            return !1 } var f = i(10),
            u = Object.prototype.toString,
            e = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === u.call(Blob),
            o = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === u.call(File);
        n.exports = r }, function(n) { n.exports = function(n, t, i) { var r = n.byteLength; if (t = t || 0, i = i || r, n.slice) return n.slice(t, i); if (t < 0 && (t += r), i < 0 && (i += r), i > r && (i = r), t >= r || t >= i || 0 === r) return new ArrayBuffer(0); for (var o = new Uint8Array(n), f = new Uint8Array(i - t), u = t, e = 0; u < i; u++, e++) f[e] = o[u]; return f.buffer } }, function(n) {
        function t(n, t, r) {
            function u(n, i) { if (u.count <= 0) throw new Error("after called too many times");--u.count;
                n ? (f = !0, t(n), t = r) : 0 !== u.count || f || t(null, i) } var f = !1; return r = r || i, u.count = n, 0 === n ? t() : u }

        function i() {}
        n.exports = t }, function(n) {
        function o(n) { for (var t, u, r = [], i = 0, f = n.length; i < f;) t = n.charCodeAt(i++), t >= 55296 && t <= 56319 && i < f ? (u = n.charCodeAt(i++), 56320 == (64512 & u) ? r.push(((1023 & t) << 10) + (1023 & u) + 65536) : (r.push(t), i--)) : r.push(t); return r }

        function h(n) { for (var t, f = n.length, u = -1, r = ""; ++u < f;) t = n[u], t > 65535 && (t -= 65536, r += i(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), r += i(t); return r }

        function s(n, t) { if (n >= 55296 && n <= 57343) { if (t) throw Error("Lone surrogate U+" + n.toString(16).toUpperCase() + " is not a scalar value"); return !1 } return !0 }

        function e(n, t) { return i(n >> t & 63 | 128) }

        function c(n, t) { if (0 == (4294967168 & n)) return i(n); var r = ""; return 0 == (4294965248 & n) ? r = i(n >> 6 & 31 | 192) : 0 == (4294901760 & n) ? (s(n, t) || (n = 65533), r = i(n >> 12 & 15 | 224), r += e(n, 6)) : 0 == (4292870144 & n) && (r = i(n >> 18 & 7 | 240), r += e(n, 12), r += e(n, 6)), r + i(63 & n | 128) }

        function l(n, t) { t = t || {}; for (var i, e = !1 !== t.strict, r = o(n), s = r.length, u = -1, f = ""; ++u < s;) i = r[u], f += c(i, e); return f }

        function r() { if (t >= f) throw Error("Invalid byte index"); var n = 255 & u[t]; if (t++, 128 == (192 & n)) return 63 & n; throw Error("Invalid continuation byte"); }

        function a(n) { var e, o, h, c, i; if (t > f) throw Error("Invalid byte index"); if (t == f) return !1; if (e = 255 & u[t], t++, 0 == (128 & e)) return e; if (192 == (224 & e)) { if (o = r(), i = (31 & e) << 6 | o, i >= 128) return i; throw Error("Invalid continuation byte"); } if (224 == (240 & e)) { if (o = r(), h = r(), i = (15 & e) << 12 | o << 6 | h, i >= 2048) return s(i, n) ? i : 65533; throw Error("Invalid continuation byte"); } if (240 == (248 & e) && (o = r(), h = r(), c = r(), i = (7 & e) << 18 | o << 12 | h << 6 | c, i >= 65536 && i <= 1114111)) return i; throw Error("Invalid UTF-8 detected"); }

        function v(n, i) { var e, s, r; for (i = i || {}, e = !1 !== i.strict, u = o(n), f = u.length, t = 0, r = [];
                (s = a(e)) !== !1;) r.push(s); return h(r) }
        /*! https://mths.be/utf8js v2.1.2 by @mathias */
        var u, f, t, i = String.fromCharCode;
        n.exports = { version: "2.1.2", encode: l, decode: v }
    }, function(n, t) {! function() { "use strict"; for (var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = new Uint8Array(256), r = 0; r < n.length; r++) i[n.charCodeAt(r)] = r;
            t.encode = function(t) { for (var u = new Uint8Array(t), f = u.length, i = "", r = 0; r < f; r += 3) i += n[u[r] >> 2], i += n[(3 & u[r]) << 4 | u[r + 1] >> 4], i += n[(15 & u[r + 1]) << 2 | u[r + 2] >> 6], i += n[63 & u[r + 2]]; return f % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : f % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="), i };
            t.decode = function(n) { var t, h, u, f, c, e = .75 * n.length,
                    l = n.length,
                    o = 0,
                    s, r; for ("=" === n[n.length - 1] && (e--, "=" === n[n.length - 2] && e--), s = new ArrayBuffer(e), r = new Uint8Array(s), t = 0; t < l; t += 4) h = i[n.charCodeAt(t)], u = i[n.charCodeAt(t + 1)], f = i[n.charCodeAt(t + 2)], c = i[n.charCodeAt(t + 3)], r[o++] = h << 2 | u >> 4, r[o++] = (15 & u) << 4 | f >> 2, r[o++] = (3 & f) << 6 | 63 & c; return s } }() }, function(n) {
        function i(n) { return n.map(function(n) { var t, i; return n.buffer instanceof ArrayBuffer ? (t = n.buffer, n.byteLength !== t.byteLength && (i = new Uint8Array(n.byteLength), i.set(new Uint8Array(t, n.byteOffset, n.byteLength)), t = i.buffer), t) : n }) }

        function r(n, r) { r = r || {}; var u = new t; return i(n).forEach(function(n) { u.append(n) }), r.type ? u.getBlob(r.type) : u.getBlob() }

        function u(n, t) { return new Blob(i(n), t || {}) } var t = "undefined" != typeof t ? t : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder && MozBlobBuilder,
            f = function() { try { var n = new Blob(["hi"]); return 2 === n.size } catch (t) { return !1 } }(),
            e = f && function() { try { var n = new Blob([new Uint8Array([1, 2])]); return 2 === n.size } catch (t) { return !1 } }(),
            o = t && t.prototype.append && t.prototype.getBlob; "undefined" != typeof Blob && (r.prototype = Blob.prototype, u.prototype = Blob.prototype);
        n.exports = function() { return f ? e ? Blob : u : o ? r : void 0 }() }, function(n, t) { t.encode = function(n) { var t = ""; for (var i in n) n.hasOwnProperty(i) && (t.length && (t += "&"), t += encodeURIComponent(i) + "=" + encodeURIComponent(n[i])); return t };
        t.decode = function(n) { for (var i, r = {}, u = n.split("&"), t = 0, f = u.length; t < f; t++) i = u[t].split("="), r[decodeURIComponent(i[0])] = decodeURIComponent(i[1]); return r } }, function(n) { n.exports = function(n, t) { var i = function() {};
            i.prototype = t.prototype;
            n.prototype = new i;
            n.prototype.constructor = n } }, function(n) { "use strict";

        function r(n) { var t = "";
            do t = e[n % i] + t, n = Math.floor(n / i); while (n > 0); return t }

        function h(n) { var r = 0; for (t = 0; t < n.length; t++) r = r * i + o[n.charAt(t)]; return r }

        function u() { var n = r(+new Date); return n !== f ? (s = 0, f = n) : n + "." + r(s++) } for (var f, e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), i = 64, o = {}, s = 0, t = 0; t < i; t++) o[e[t]] = t;
        u.encode = r;
        u.decode = h;
        n.exports = u }, function(n, t, i) {
        (function(t) {
            function s() {}

            function h() { return "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof t ? t : {} }

            function r(n) { var i, t;
                (f.call(this, n), this.query = this.query || {}, u) || (i = h(), u = i.___eio = i.___eio || []);
                this.index = u.length;
                t = this;
                u.push(function(n) { t.onData(n) });
                this.query.j = this.index; "function" == typeof addEventListener && addEventListener("beforeunload", function() { t.script && (t.script.onerror = s) }, !1) } var f = i(19),
                c = i(30),
                u, e, o;
            n.exports = r;
            e = /\n/g;
            o = /\\n/g;
            c(r, f);
            r.prototype.supportsBinary = !1;
            r.prototype.doClose = function() { this.script && (this.script.parentNode.removeChild(this.script), this.script = null);
                this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null);
                f.prototype.doClose.call(this) };
            r.prototype.doPoll = function() { var r = this,
                    n = document.createElement("script"),
                    t, i;
                this.script && (this.script.parentNode.removeChild(this.script), this.script = null);
                n.async = !0;
                n.src = this.uri();
                n.onerror = function(n) { r.onError("jsonp poll error", n) };
                t = document.getElementsByTagName("script")[0];
                t ? t.parentNode.insertBefore(n, t) : (document.head || document.body).appendChild(n);
                this.script = n;
                i = "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent);
                i && setTimeout(function() { var n = document.createElement("iframe");
                    document.body.appendChild(n);
                    document.body.removeChild(n) }, 100) };
            r.prototype.doWrite = function(n, t) {
                function s() { h();
                    t() }

                function h() { if (i.iframe) try { i.form.removeChild(i.iframe) } catch (n) { i.onError("jsonp polling iframe removal error", n) }
                    try { var t = '<iframe src="javascript:0" name="' + i.iframeId + '">';
                        u = document.createElement(t) } catch (n) { u = document.createElement("iframe");
                        u.name = i.iframeId;
                        u.src = "javascript:0" }
                    u.id = i.iframeId;
                    i.form.appendChild(u);
                    i.iframe = u } var i = this; if (!this.form) { var u, r = document.createElement("form"),
                        f = document.createElement("textarea"),
                        c = this.iframeId = "eio_iframe_" + this.index;
                    r.className = "socketio";
                    r.style.position = "absolute";
                    r.style.top = "-1000px";
                    r.style.left = "-1000px";
                    r.target = c;
                    r.method = "POST";
                    r.setAttribute("accept-charset", "utf-8");
                    f.name = "d";
                    r.appendChild(f);
                    document.body.appendChild(r);
                    this.form = r;
                    this.area = f }
                this.form.action = this.uri();
                h();
                n = n.replace(o, "\\\n");
                this.area.value = n.replace(e, "\\n"); try { this.form.submit() } catch (l) {}
                this.iframe.attachEvent ? this.iframe.onreadystatechange = function() { "complete" === i.iframe.readyState && s() } : this.iframe.onload = s } }).call(t, function() { return this }()) }, function(n, t, i) {
        function r(n) { var t = n && n.forceBase64;
            t && (this.supportsBinary = !1);
            this.perMessageDeflate = n.perMessageDeflate;
            this.usingBrowserWebSocket = f && !n.forceNode;
            this.protocols = n.protocols;
            this.usingBrowserWebSocket || (u = e);
            o.call(this, n) } var f, e, o = i(20),
            s = i(21),
            h = i(29),
            c = i(30),
            l = i(31),
            a = i(3)("engine.io-client:websocket"),
            u; if ("undefined" == typeof self) try { e = i(34) } catch (v) {} else f = self.WebSocket || self.MozWebSocket;
        u = f || e;
        n.exports = r;
        c(r, o);
        r.prototype.name = "websocket";
        r.prototype.supportsBinary = !0;
        r.prototype.doOpen = function() { if (this.check()) { var t = this.uri(),
                    i = this.protocols,
                    n = { agent: this.agent, perMessageDeflate: this.perMessageDeflate };
                n.pfx = this.pfx;
                n.key = this.key;
                n.passphrase = this.passphrase;
                n.cert = this.cert;
                n.ca = this.ca;
                n.ciphers = this.ciphers;
                n.rejectUnauthorized = this.rejectUnauthorized;
                this.extraHeaders && (n.headers = this.extraHeaders);
                this.localAddress && (n.localAddress = this.localAddress); try { this.ws = this.usingBrowserWebSocket && !this.isReactNative ? i ? new u(t, i) : new u(t) : new u(t, i, n) } catch (r) { return this.emit("error", r) }
                void 0 === this.ws.binaryType && (this.supportsBinary = !1);
                this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer";
                this.addEventListeners() } };
        r.prototype.addEventListeners = function() { var n = this;
            this.ws.onopen = function() { n.onOpen() };
            this.ws.onclose = function() { n.onClose() };
            this.ws.onmessage = function(t) { n.onData(t.data) };
            this.ws.onerror = function(t) { n.onError("websocket error", t) } };
        r.prototype.write = function(n) {
            function u() { t.emit("flush");
                setTimeout(function() { t.writable = !0;
                    t.emit("drain") }, 0) } var t = this;
            this.writable = !1; for (var r = n.length, i = 0, f = r; i < f; i++) ! function(n) { s.encodePacket(n, t.supportsBinary, function(i) { var f, e;
                    t.usingBrowserWebSocket || (f = {}, (n.options && (f.compress = n.options.compress), t.perMessageDeflate) && (e = "string" == typeof i ? Buffer.byteLength(i) : i.length, e < t.perMessageDeflate.threshold && (f.compress = !1))); try { t.usingBrowserWebSocket ? t.ws.send(i) : t.ws.send(i, f) } catch (o) { a("websocket closed before onclose event") }--r || u() }) }(n[i]) };
        r.prototype.onClose = function() { o.prototype.onClose.call(this) };
        r.prototype.doClose = function() { "undefined" != typeof this.ws && this.ws.close() };
        r.prototype.uri = function() { var n = this.query || {},
                t = this.secure ? "wss" : "ws",
                i = "",
                r; return this.port && ("wss" === t && 443 !== Number(this.port) || "ws" === t && 80 !== Number(this.port)) && (i = ":" + this.port), this.timestampRequests && (n[this.timestampParam] = l()), this.supportsBinary || (n.b64 = 1), n = h.encode(n), n.length && (n = "?" + n), r = this.hostname.indexOf(":") !== -1, t + "://" + (r ? "[" + this.hostname + "]" : this.hostname) + i + this.path + n };
        r.prototype.check = function() { return !(!u || "__initialize" in u && this.name === r.prototype.name) } }, function() {}, function(n) { var t = [].indexOf;
        n.exports = function(n, i) { if (t) return n.indexOf(i); for (var r = 0; r < n.length; ++r)
                if (n[r] === i) return r;
            return -1 } }, function(n, t, i) { "use strict";

        function r(n, t, i) { this.io = n;
            this.nsp = t;
            this.json = this;
            this.ids = 0;
            this.acks = {};
            this.receiveBuffer = [];
            this.sendBuffer = [];
            this.connected = !1;
            this.disconnected = !0;
            this.flags = {};
            i && i.query && (this.query = i.query);
            this.io.autoConnect && this.open() } var v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) { return typeof n } : function(n) { return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n },
            u = i(7),
            c = i(8),
            o = i(37),
            s = i(38),
            h = i(39),
            f = i(3)("socket.io-client:socket"),
            y = i(29),
            l = i(23),
            a, e;
        n.exports = t = r;
        a = { connect: 1, connect_error: 1, connect_timeout: 1, connecting: 1, disconnect: 1, error: 1, reconnect: 1, reconnect_attempt: 1, reconnect_failed: 1, reconnect_error: 1, reconnecting: 1, ping: 1, pong: 1 };
        e = c.prototype.emit;
        c(r.prototype);
        r.prototype.subEvents = function() { if (!this.subs) { var n = this.io;
                this.subs = [s(n, "open", h(this, "onopen")), s(n, "packet", h(this, "onpacket")), s(n, "close", h(this, "onclose"))] } };
        r.prototype.open = r.prototype.connect = function() { return this.connected ? this : (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting"), this) };
        r.prototype.send = function() { var n = o(arguments); return n.unshift("message"), this.emit.apply(this, n), this };
        r.prototype.emit = function(n) { if (a.hasOwnProperty(n)) return e.apply(this, arguments), this; var t = o(arguments),
                i = { type: (void 0 !== this.flags.binary ? this.flags.binary : l(t)) ? u.BINARY_EVENT : u.EVENT, data: t }; return i.options = {}, i.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof t[t.length - 1] && (f("emitting packet with ack id %d", this.ids), this.acks[this.ids] = t.pop(), i.id = this.ids++), this.connected ? this.packet(i) : this.sendBuffer.push(i), this.flags = {}, this };
        r.prototype.packet = function(n) { n.nsp = this.nsp;
            this.io.packet(n) };
        r.prototype.onopen = function() { if (f("transport is open - connecting"), "/" !== this.nsp)
                if (this.query) { var n = "object" === v(this.query) ? y.encode(this.query) : this.query;
                    f("sending connect packet with query %s", n);
                    this.packet({ type: u.CONNECT, query: n }) } else this.packet({ type: u.CONNECT }) };
        r.prototype.onclose = function(n) { f("close (%s)", n);
            this.connected = !1;
            this.disconnected = !0;
            delete this.id;
            this.emit("disconnect", n) };
        r.prototype.onpacket = function(n) { var t = n.nsp === this.nsp,
                i = n.type === u.ERROR && "/" === n.nsp; if (t || i) switch (n.type) {
                case u.CONNECT:
                    this.onconnect(); break;
                case u.EVENT:
                    this.onevent(n); break;
                case u.BINARY_EVENT:
                    this.onevent(n); break;
                case u.ACK:
                    this.onack(n); break;
                case u.BINARY_ACK:
                    this.onack(n); break;
                case u.DISCONNECT:
                    this.ondisconnect(); break;
                case u.ERROR:
                    this.emit("error", n.data) } };
        r.prototype.onevent = function(n) { var t = n.data || [];
            f("emitting event %j", t);
            null != n.id && (f("attaching ack callback to event"), t.push(this.ack(n.id)));
            this.connected ? e.apply(this, t) : this.receiveBuffer.push(t) };
        r.prototype.ack = function(n) { var i = this,
                t = !1; return function() { if (!t) { t = !0; var r = o(arguments);
                    f("sending ack %j", r);
                    i.packet({ type: l(r) ? u.BINARY_ACK : u.ACK, id: n, data: r }) } } };
        r.prototype.onack = function(n) { var t = this.acks[n.id]; "function" == typeof t ? (f("calling ack %s with %j", n.id, n.data), t.apply(this, n.data), delete this.acks[n.id]) : f("bad ack %s", n.id) };
        r.prototype.onconnect = function() { this.connected = !0;
            this.disconnected = !1;
            this.emit("connect");
            this.emitBuffered() };
        r.prototype.emitBuffered = function() { for (var n = 0; n < this.receiveBuffer.length; n++) e.apply(this, this.receiveBuffer[n]); for (this.receiveBuffer = [], n = 0; n < this.sendBuffer.length; n++) this.packet(this.sendBuffer[n]);
            this.sendBuffer = [] };
        r.prototype.ondisconnect = function() { f("server disconnect (%s)", this.nsp);
            this.destroy();
            this.onclose("io server disconnect") };
        r.prototype.destroy = function() { if (this.subs) { for (var n = 0; n < this.subs.length; n++) this.subs[n].destroy();
                this.subs = null }
            this.io.destroy(this) };
        r.prototype.close = r.prototype.disconnect = function() { return this.connected && (f("performing disconnect (%s)", this.nsp), this.packet({ type: u.DISCONNECT })), this.destroy(), this.connected && this.onclose("io client disconnect"), this };
        r.prototype.compress = function(n) { return this.flags.compress = n, this };
        r.prototype.binary = function(n) { return this.flags.binary = n, this } }, function(n) {
        function t(n, t) { var r = [],
                i; for (t = t || 0, i = t || 0; i < n.length; i++) r[i - t] = n[i]; return r }
        n.exports = t }, function(n) { "use strict";

        function t(n, t, i) { return n.on(t, i), { destroy: function() { n.removeListener(t, i) } } }
        n.exports = t }, function(n) { var t = [].slice;
        n.exports = function(n, i) { if ("string" == typeof i && (i = n[i]), "function" != typeof i) throw new Error("bind() requires a function"); var r = t.call(arguments, 2); return function() { return i.apply(n, r.concat(t.call(arguments))) } } }, function(n) {
        function t(n) { n = n || {};
            this.ms = n.min || 100;
            this.max = n.max || 1e4;
            this.factor = n.factor || 2;
            this.jitter = n.jitter > 0 && n.jitter <= 1 ? n.jitter : 0;
            this.attempts = 0 }
        n.exports = t;
        t.prototype.duration = function() { var n = this.ms * Math.pow(this.factor, this.attempts++),
                t, i; return this.jitter && (t = Math.random(), i = Math.floor(t * this.jitter * n), n = 0 == (1 & Math.floor(10 * t)) ? n - i : n + i), 0 | Math.min(n, this.max) };
        t.prototype.reset = function() { this.attempts = 0 };
        t.prototype.setMin = function(n) { this.ms = n };
        t.prototype.setMax = function(n) { this.max = n };
        t.prototype.setJitter = function(n) { this.jitter = n } }])
}),
function(n, t, i) { "use strict";

    function f(t, i) { this.element = t;
        this.settings = n.extend({}, u, i);
        this._defaults = u;
        this._name = r;
        this.init() } var r = "scrollBox",
        u = { containerClass: "sb-container", containerNoScrollClass: "sb-container-noscroll", contentClass: "sb-content", scrollbarContainerClass: "sb-scrollbar-container", scrollBarClass: "sb-scrollbar" };
    n.extend(f.prototype, { init: function() { this.addScrollbar();
            this.addEvents();
            this.onResize() }, addScrollbar: function() { n(this.element).addClass(this.settings.containerClass);
            this.wrapper = n("<div class='" + this.settings.contentClass + "' />");
            this.wrapper.append(n(this.element).contents());
            n(this.element).append(this.wrapper);
            this.scollbarContainer = n("<div class='" + this.settings.scrollbarContainerClass + "' />");
            this.scrollBar = n("<div class='" + this.settings.scrollBarClass + "' />");
            this.scollbarContainer.append(this.scrollBar);
            n(this.element).prepend(this.scollbarContainer) }, addEvents: function() { this.wrapper.on("scroll." + r, n.proxy(this.onScroll, this));
            n(t).on("resize." + r, n.proxy(this.onResize, this));
            this.scrollBar.on("mousedown." + r, n.proxy(this.onMousedown, this));
            this.scrollBar.on("touchstart." + r, n.proxy(this.onTouchstart, this)) }, onTouchstart: function(t) { var u = this,
                f, e;
            t.preventDefault();
            f = u.scrollBar[0].offsetTop;
            e = function(n) { var i = n.touches[0].pageY - t.touches[0].pageY;
                u.scrollBar[0].style.top = Math.min(u.scollbarContainer[0].clientHeight - u.scrollBar[0].clientHeight, Math.max(0, f + i)) + "px";
                u.wrapper[0].scrollTop = u.wrapper[0].scrollHeight * u.scrollBar[0].offsetTop / u.scollbarContainer[0].clientHeight };
            n(i).on("touchmove." + r, e);
            n(i).on("touchend." + r, function() { n(i).off("touchmove." + r);
                n(i).off("touchend." + r) }) }, onMousedown: function(t) { var u = this,
                f, e;
            t.preventDefault();
            f = u.scrollBar[0].offsetTop;
            e = function(n) { var i = n.pageY - t.pageY;
                u.scrollBar[0].style.top = Math.min(u.scollbarContainer[0].clientHeight - u.scrollBar[0].clientHeight, Math.max(0, f + i)) + "px";
                u.wrapper[0].scrollTop = u.wrapper[0].scrollHeight * u.scrollBar[0].offsetTop / u.scollbarContainer[0].clientHeight };
            n(i).on("mousemove." + r, e);
            n(i).on("mouseup." + r, function() { n(i).off("mousemove." + r);
                n(i).off("mouseup." + r) }) }, onResize: function() { var t = this,
                i = setInterval(function() { t.wrapper.css("max-height", n(t.element).height()); var i = t.wrapper[0].clientHeight;
                    t.scrollBar.css("height", t.scollbarContainer[0].clientHeight * i / t.wrapper[0].scrollHeight + "px");
                    t.scollbarContainer[0].clientHeight <= t.scrollBar[0].clientHeight ? n(t.element).addClass(t.settings.containerNoScrollClass) : n(t.element).removeClass(t.settings.containerNoScrollClass);
                    t.onScroll() }, 100);
            setTimeout(function() { clearInterval(i) }, 3e3) }, onScroll: function() { this.scrollBar.css("top", Math.min(this.scollbarContainer[0].clientHeight - this.scrollBar[0].clientHeight, this.scollbarContainer[0].clientHeight * this.wrapper[0].scrollTop / this.wrapper[0].scrollHeight) + "px") } });
    n.fn[r] = function(t) { return this.each(function() { n.data(this, "plugin_" + r) || n.data(this, "plugin_" + r, new f(this, t)) }) } }(jQuery, window, document);
_typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) { return typeof n } : function(n) { return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n };
var prefixCartUrl = "/gio-hang/",
    isHaveItemCart = !1,
    popupIsShow = !1,
    lstProductId = [],
    maxQuantity = 50,
    loading = !1,
    check = undefined,
    orderId = 0,
    redirectUrl = "";
$(window).on("load", function() { $(document).on("paste", "#couponphone", function() { window.setTimeout(function() { var n = $("#couponphone").val();
            n = n.replace(/\s+/g, "");
            $("#couponphone").val(n) }, 1) }) });
preOrder = { init: function() { $(".pp-preorder .updown .down, .pp-preorder .updown .up").on("click", function(n) { n.preventDefault(); var i = $(this).parent().data("id"),
                r = $(this).parent().data("progid"),
                u = $(this).parent().data("max"),
                t = 1,
                f = parseInt($(this).parent().find(".number").html()) + t; if (f < u) { if ($(this).hasClass("down")) { if ($(this).parent().find(".number").html() === "1") { $(this).addClass("disable"); return }
                    t = -1 } else $(".pp-preorder .updown .down").removeClass("disable");
                preOrder.changeItem(i, t, r) } }) }, popup: function(n, t, i) { showLoading(!0);
        $.ajax({ type: "GET", data: { id: n, quantity: t, progid: i }, url: "/rau-an-toan-4kfarm/Order/ShowPreOrder", success: function(n) { if (showLoading(!1), n.Code === 200) { var t = JSON.parse(n.Msg);
                    $(".pp-preorder .content").html(t.html);
                    $(".pp-preorder").show();
                    preOrder.init();
                    t.quantity === 1 && $(".pp-preorder .updown .down").addClass("disable") } else alertify.alert(n.Msg) }, error: function(n) { showLoading(!1);
                console.log("Lỗi " + n) } }) }, close: function() { $.ajax({ type: "POST", data: {}, url: "/rau-an-toan-4kfarm/Order/CancelPreOrder", success: function(n) { showLoading(!1);
                n.Code === 200 ? $(".pp-preorder").hide() : alertify.alert(n.Msg) }, error: function(n) { showLoading(!1);
                console.log("Lỗi " + n) } }) }, changeItem: function(n, t, i) { console.log("abc");
        url = "/rau-an-toan-4kfarm/Order/ShowPreOrder";
        $.ajax({ url: url, type: "GET", data: { id: n, quantity: t, progid: i }, beforeSend: function() { ajLoading(!0, "Chọn mua.") }, success: function(n) { if (ajLoading(!1), n.Code === 200) { var t = JSON.parse(n.Msg);
                    $(".pp-preorder .content").html(t.html);
                    preOrder.init() } else alertify.alert(n.Msg) }, error: function() { ajLoading(!1);
                alertify.alert("Thêm sản phẩm không thành công! <br>Vui lòng thử lại sau.") } }) } };
afterVoucher = { initEventAfterVoucher: function() { alertify.confirm().destroy();
        alertify.alert().destroy();
        $("#poupCoupon .div-button .btn-close").on("click", function() { var n = $("#poupCoupon").data("id");
            $.ajax({ url: "/gio-hang/Order/CheckIsApplyVoucherAfter", type: "Get", beforeSend: function() { afterVoucher.ajLoading(!0) }, success: function(t) { afterVoucher.ajLoading(!1);
                    t.Code == 200 ? alertify.confirm("Bạn chắc chắn muốn hủy áp dụng phiếu mua hàng không?", function() { $(".popup-overlay").hide();
                        $("#poupCoupon").remove();
                        afterVoucher.removeAllVoucher(n) }).set("labels", { ok: "ĐỒNG Ý", cancel: "KHÔNG" }) : ($(".popup-overlay").hide(), $("#poupCoupon").remove(), afterVoucher.removeAllVoucher(n)) }, error: function() { afterVoucher.ajLoading(!1) } }) });
        $("#poupCoupon .list-coupon .btn-coupon.apply-now").on("click", function() { if (!$(this).hasClass("using")) { var n = $(this).data("code");
                n !== undefined && n.toString().length > 0 && afterVoucher.initCaptchaV3(n.toString().trim(), "") } });
        $("#poupCoupon .div-button .btn-submit").on("click", function() { $(this).hasClass("disabled") || alertify.confirm("Bạn có đồng ý sử dụng các PMH đã thêm trước đó hay không?", function() { afterVoucher.submit() }).set("labels", { ok: "ĐỒNG Ý", cancel: "KHÔNG" }) }) }, initCaptchaV3: function(n, t) { var i = $(".public-keycapcha-v3").data("key");
        grecaptcha.execute(i, { action: "submit" }).then(function(i) { afterVoucher.submitVoucher(n, t, i) }) }, openPopupVoucher: function(n, t, i) { if (t === "" || t === null) alertify.alert("Không lấy được số điện thoại");
        else { if (i) { var r = getUser();
                t.trim() != r.Phone.trim() && (t = "") }
            $.ajax({ url: "/gio-hang/Order/PopupCoupon", type: "POST", data: { phone: t, gender: -1, isaftervoucher: !0 }, cache: !1, beforeSend: function() { afterVoucher.ajLoading(!0) }, success: function(t) { afterVoucher.ajLoading(!1);
                    t.Code === 200 ? ($(".popup-overlay").show(), $("#poupCoupon").length > 0 ? $("#poupCoupon").html(t.Msg) : $("body").append('<div id="poupCoupon" data-id=' + n + ">" + t.Msg + "<\/div>"), afterVoucher.initEventAfterVoucher()) : alertify.alert().set({ message: t.Msg, transition: "fade", onok: function() {}, closableByDimmer: !0 }).show(!0, "popuperror") }, error: function() { afterVoucher.ajLoading(!1) } }) } }, applyVoucher: function(n) { var t = $(n).parent().find('input[name="apply-code"]').val(),
            r = $(n).parent().find(".row .text-box.pincode.show"),
            i = $('#poupCoupon .popup-lstcoupon .popup-body input[name="pincode"]').val();
        t === "" || t === null ? alertify.alert().set({ message: "Không lấy được phiếu mua hàng", transition: "fade", onok: function() {}, closableByDimmer: !0 }).show(!0, "popuperror") : r.length > 0 && (i === "" || i === null) ? alertify.alert().set({ message: "Bạn vui lòng nhập thêm MÃ PINCODE (mã dưới lớp cào bạc) để sử dụng phiếu mua hàng hiện tại.", transition: "fade", onok: function() {}, closableByDimmer: !0 }).show(!0, "popuperror") : afterVoucher.initCaptchaV3(t, i) }, submitVoucher: function(n, t, i) { var u = $("#poupCoupon").data("id"),
            r = $("#poupCoupon .captcha-main"),
            f = $(r).find("input").val();
        $.ajax({ url: "/gio-hang/Order/ApplyCouponAfter", type: "POST", data: { voucherCode: n, saleOrderId: u, pinCode: t, g_recaptcha_response: i, captchaCode: f }, cache: !1, beforeSend: function() { afterVoucher.ajLoading(!0) }, success: function(t) { var u, e, o, i, f; if (afterVoucher.ajLoading(!1), t.Code === 502) u = JSON.parse(t.Msg), typeof otp_login.submitPhone == "function" && ($("#htmlloginotp").attr("data-type", 14), f = { order_cartid: u.cartId, order_phone: u.Phone, order_customergender: u.UserName, order_customername: u.GenderCart, order_voucherCode: n }, otp_login.submitPhone(f));
                else { if (t.Code == 2) { captchaNew.initCaptcha($(r));
                        $("#poupCoupon .popup-body .row.status").show();
                        $(".statusapply").html(t.Msg); return }
                    t.Error ? t.RequirePINCode ? ($("#poupCoupon .popup-lstcoupon .popup-body .row .pincode").addClass("show warn"), $("#poupCoupon .popup-body .row.status").show(), $(".statusapply").html(t.Msg), captchaNew.removeCaptcha($(r))) : (captchaNew.removeCaptcha($(r)), t.Code === -2 ? typeof otp_login.submitPhone == "function" && ($("#htmlloginotp").attr("data-type", 11), i = t.CartId, (typeof i == "undefined" || i == null || i == "") && (i = 11), f = { order_cartid: i, order_phone: t.CustomerPhone, order_customergender: t.CustomerGender, order_customername: t.CustomerName }, otp_login.submitPhone(f)) : alertify.alert().set({ message: t.Msg, transition: "fade", onok: function() {}, closableByDimmer: !0 }).show(!0, "popuperror")) : ($('#poupCoupon .popup-lstcoupon .popup-body input[name="apply-code"]').val(""), e = $("#poupCoupon .list-coupon").find("div.coupon-item[data-code=" + n + "]").find("a.btn-coupon.apply-now"), e.length > 0 && ($(e).removeClass("apply-now").addClass("using"), $(e).html("Đang sử dụng")), $("#poupCoupon .popup-body .lstvoucherafter").length <= 0 ? afterVoucher.getListVoucherAfter() : ($(t.Msg).insertBefore("#poupCoupon .popup-body .lstvoucherafter li.totaldiscount"), $("#poupCoupon .popup-body .lstvoucherafter .totaldiscount span:nth-child(2)").html(t.strTotalDiscount), $("#poupCoupon .popup-body .lstvoucherafter .totalamount span:nth-child(2)").html(t.strTotalNeedPay)), $(" #poupCoupon .div-button button.btn-submit").removeClass("disabled"), o = $("#poupCoupon .popup-body .lstvoucherafter ul li").length, o >= 5 ? $("#poupCoupon .popup-body").css("overflow-y", "scroll") : $("#poupCoupon .popup-body").css("overflow-y", "hidden"), $("#poupCoupon .popup-lstcoupon .popup-body .row .pincode").removeClass("show"), $('#poupCoupon .popup-lstcoupon .popup-body input[name="pincode"]').val(""), $("#poupCoupon .popup-body .row.status").hide(), captchaNew.removeCaptcha($(r))) } }, error: function() { afterVoucher.ajLoading(!1) } }) }, removeVoucher: function(n) {
        (n === "" || n === null) && alertify.alert("Không lấy được phiếu mua hàng"); var t = $("#poupCoupon").data("id");
        alertify.confirm("Bạn chắc chắn muốn xóa phiếu mua hàng này ra khỏi danh sách hay không?", function() { $.ajax({ url: "/gio-hang/Order/RemoreVoucherAfter", type: "POST", data: { voucherCode: n, crmOrderId: t }, cache: !1, beforeSend: function() { afterVoucher.ajLoading(!0) }, success: function(t) { var i, r;
                    afterVoucher.ajLoading(!1);
                    t.Error ? alertify.alert().set({ message: t.Msg, transition: "fade", onok: function() {}, closableByDimmer: !0 }).show(!0, "popuperror") : ($(".lstvoucherafter ul").find("li[data-id=" + n + "]").remove(), t.TotalDiscount != "" && t.TotalDiscount !== undefined && $(".lstvoucherafter ul").find("li.totaldiscount span:nth-child(2)").html(t.TotalDiscount), i = $("#poupCoupon .list-coupon").find("div.coupon-item[data-code=" + n + "]"), i.length > 0 && ($(i).find("a.btn-coupon").removeClass("using").addClass("apply-now"), $(i).find("a.btn-coupon").html("Áp dụng")), t.IsClearAll && $("#poupCoupon .popup-body .lstvoucherafter").remove(), r = $("#poupCoupon .popup-body .lstvoucherafter ul li").length, r >= 5 ? $("#poupCoupon .popup-body").css("overflow-y", "scroll") : $("#poupCoupon .popup-body").css("overflow-y", "hidden"), r <= 0 ? $(" #poupCoupon .div-button button.btn-submit").addClass("disabled") : $(" #poupCoupon .div-button button.btn-submit").removeClass("disabled")) }, error: function() { afterVoucher.ajLoading(!1) } }) }).set("labels", { ok: "ĐỒNG Ý", cancel: "KHÔNG" }) }, getListVoucherAfter: function() { var n = $("#poupCoupon").data("id");
        $.ajax({ url: "/gio-hang/Order/GetCouponAppleAfter", type: "GET", data: { saleOrderId: n }, beforeSend: function() { afterVoucher.ajLoading(!0) }, success: function(n) { afterVoucher.ajLoading(!1);
                n.Code === 200 ? ($(n.Msg).insertBefore("#poupCoupon .popup-body .row.status"), $(" #poupCoupon .div-button button").removeClass("disabled")) : $(" #poupCoupon .div-button button").addClass("disabled") }, error: function() { afterVoucher.ajLoading(!1) } }) }, removeAllVoucher: function(n) { $.ajax({ url: "/gio-hang/Order/RemoveAllVoucher", type: "GET", data: { crmOrderId: n }, beforeSend: function() { afterVoucher.ajLoading(!0) }, success: function() { afterVoucher.ajLoading(!1) }, error: function() { afterVoucher.ajLoading(!1) } }) }, ajLoading: function(n) { n ? ($(".ajloading").show(), $(".ajaxLoading").show()) : ($(".ajloading").hide(), $(".ajaxLoading").hide());
        loading = n }, submit: function() { var n = $("#poupCoupon").data("id");
        $.ajax({ url: "/gio-hang/Order/SubmitVoucherAfter", type: "POST", data: { crmOrderId: n }, beforeSend: function() { afterVoucher.ajLoading(!0) }, success: function(n) { afterVoucher.ajLoading(!1);
                (n.Code == 404 || n.Code == 400) && alertify.alert().set({ message: n.Msg, transition: "fade", onok: function() { afterVoucher.removeAllVoucher();
                        location.reload(!0) }, closableByDimmer: !0 }).show(!0, "popuperror");
                (n.Code == 200 || n.Code == 100) && alertify.alert().set({ message: n.Msg, transition: "fade", onok: function() { location.reload(!0) }, closableByDimmer: !0 }).show(!0, "popuperror") }, error: function() { afterVoucher.ajLoading(!1) } }) } };
timeout = [];
timeoutship = [];
var order = { popupRemindLocation: function(n) { setTimeout(function() { $("header .locationContainer .locationUser .location_left").click();
                n != undefined && n != null && (console.log("add auto"), $(".location").attr("data-auto", n)) }, 500) } },
    captchaNew = { TypeEnum: { UNDEFINED: 0, NORMAL: 1, OTP: 2 }, initCaptcha: function(n, t, i) { t || (t = !1);
            i = typeof i != "undefined" && i != null && !isNaN(i) ? i : captchaNew.TypeEnum.NORMAL;
            captchaNew.getForm(n, t, i) }, getForm: function(n, t, i) { $(n).find("input").val("");
            $(n).children().length <= 0 ? $.ajax({ method: "Get", url: "/aj/Shared/GetForm", success: function(r) { $(n).find("span.refesh").children().addClass("active");
                    $(n).html(r);
                    captchaNew.initEvent(n, t, i);
                    setTimeout(function() { captchaNew.callCaptcha(n, t, i) }, 2e3) } }) : ($(n).find("span.refesh").children().addClass("active"), setTimeout(function() { captchaNew.callCaptcha(n, t, i) }, 1e3)) }, initEvent: function(n, t, i) { $(".captcha-main span.refesh").on("click", function() { $(n).find("input").val("");
                $(this).children().addClass("active");
                setTimeout(function() { captchaNew.callCaptcha(n, t, i) }, 2e3) }) }, callCaptcha: function(n, t, i) { $(n).find("input").val("");
            d = new Date;
            $(n).find(".img-captcha").attr("src", "/aj/Shared/CreateCaptcha?iscaptchaUpdateOrder=" + t + "&typeCaptcha=" + i + "&" + d.getTime());
            $(n).find("span.refesh").children().removeClass("active") }, removeCaptcha: function(n) { $(n).children().remove() } },
    ship4kFarm = { continueOrder: function(n) { $.ajax({ url: prefixCartUrl + "Order/Remove", type: "POST", data: { productId: n }, cache: !1, beforeSend: function() {}, success: function() {}, error: function() { alertify.alert("Vui lòng thử lại sau.") } }) } },
    loadingOrderCancel = !1;
var sorderId = 0,
    canceled = !1,
    callbackClose = null;
var unhappy = { init: function() {}, showThankYou: function(n) { var t, i;
            n == undefined && (n = 2);
            $(".popupCancelOrder .thank-you").removeClass("hidden");
            t = 5;
            canceled = !0;
            i = setInterval(function() { $(".popupCancelOrder .thank-you .timer").html(t--);
                t < 0 && (cancelOrderClose(n), clearInterval(i)) }, 1e3);
            $(".popupCancelOrder .frm-CancelOrder").hide() }, grecaptchaExecute: function(n) { console.log("exe gre in unhappy");
            grecaptcha.ready(function() { var t = $(".public-keycapcha-v3").data("key");
                grecaptcha.execute(t, { action: "submit" }).then(function(t) { typeof n == "function" && n(t) }) }) } },
    homeAppr = { showOrderRating: function() { $(".orderReview").length == 0 && $.ajax({ url: "/aj/Shared/OrderRating", type: "POST", data: {}, success: function(n) { var t = window.location.pathname;
                    n !== "" && t.indexOf("lich-su-mua-hang") < 0 && t.indexOf("kinh-nghiem-hay") < 0 && t.indexOf("gio-hang") < 0 && t.indexOf("dat-hang-thanh-cong") < 0 && t.indexOf("don-hang") < 0 && ($("body").append(n), $(".orderrating").length > 0 && ($(".orderrating").show(), $(".orderReview").hide(), $("#back-top").addClass("hasrating"), $(".orderrating .dontshowrating").click(function() { homeAppr.dontShowRating() }), $(".orderrating .close").click(function() { homeAppr.closeOrderRating(!0) }), typeof $(".cart-mini") == "undefined" || $(".cart-mini").hasClass("visibility") ? $(".orderrating").removeClass("hascart") : $(".orderrating").addClass("hascart"))) }, error: function() {} }) }, setCookie: function(n) { Cookies.set("PromotionID", n) }, dontShowRating: function() { $.post("/aj/Shared/DontShowRating", {}, function(n) { n.Code === 200 && homeAppr.closeOrderRating() }) }, closeOrderRating: function(n) { $(".orderrating").hide();
            $("#back-top").removeClass("hasrating"); var t = $(".orderrating .close").data("order");
            n && homeAppr.setCookie(t);
            $.get("/aj/Shared/CloseVote?order=" + t, [], function(n) { console.log(n.Msg) }) }, voteOrder: function(n, t, i, r, u) { $.post("/aj/History/VoteOrder", { orderId: n, ordererp: t, rate: i, type: r, contactType: u }, function(n) { n.Code === 200 ? (typeof homeAppr.closeOrderRating == "function" && homeAppr.closeOrderRating(), alertify.alert(n.Msg)) : n.Code === 100 ? window.location.href = n.Msg : alertify.alert(n.Msg) }) } },
    hisAppr = { statisfied: function(n) { var u = $(this),
                t = getUser(),
                r = t.Gender === 0 ? "chị" : t.Gender === 1 ? "anh" : "Bạn",
                i = t.NameWithGender ? t.NameWithGender.toProperCase() : "Bạn";
            $(".raterow [data-us='gender']").text(r);
            $.ajax({ url: "/aj/History/VoteOrder", type: "POST", data: { orderId: n, ordererp: "", rate: 1, type: 1, note: "Ðánh giá hài lòng", contactType: 2 }, beforeSend: function() {}, success: function(t) { if (t.Code === 400) alertify.alert("<p style='text-align: center'>" + t.Msg + "<\/p>");
                    else if ($(".cmt-dh[data-id='" + n + "']").removeClass("hidden"), $(".cmt-dh[data-id='" + n + "'] span").html(i), $(".raterow[data-id='" + n + "'] .vote").html('<i class="icon-smile-s"><\/i> Cảm ơn ' + i + " đã tin dùng dịch vụ!"), t.Code === 100) { $(".happy-gift[data-id='" + n + "']").removeClass("hidden");
                        $(".happy-gift[data-id='" + n + "'] input").on("keyup", function() { $(this).removeClass("error");
                            $(this).parent().find(".sperr").remove() });
                        $(".js-float-label-wrapper").FloatLabel() } }, error: function() {} }) }, unstatisfied: function(n) { var t = getUser(),
                r = $("textarea").attr("placeholder"),
                u = t.Gender === 0 ? "chị" : t.Gender === 1 ? "anh" : "Bạn",
                i;
            $(".nohappyLSDH [data-us='gender']").text(u);
            i = t.NameWithGender ? t.NameWithGender.toProperCase() : "Bạn";
            $("textarea").attr("placeholder", r.replace("{gender}", i));
            $(".raterow[data-id='" + n + "'] .nohappyLSDH").removeClass("hidden");
            $(".raterow[data-id='" + n + "'] .vote").html('<i class="icon-cry-s"><\/i> Rất tiếc ' + i + " cảm thấy không hài lòng.");
            $(".cmt-dh[data-id='" + n + "'] span").html(i);
            $(".js-float-label-wrapper").FloatLabel() }, showBtnSendLSDH: function(n) { $(".btn-sendLSDH[data-id='" + n + "']").removeClass("hidden") }, sendnohappyLSDH: function(n) { var i = $(n),
                t = i.data("id"),
                r = i.parent().find("textarea").val(),
                u = $(".raterow[data-id='" + t + "'] .wrapcheckbox .check-Call").is(":checked") === !0 ? 1 : 2;
            $.ajax({ url: "/aj/History/VoteOrder", type: "POST", data: { orderId: t, ordererp: "", rate: 2, type: 1, note: r, contactType: u }, cache: !1, beforeSend: function() {}, success: function(n) { if (n.Code === 100) { var i = getUser(),
                            r = i.NameWithGender ? i.NameWithGender.toProperCase() : "Bạn";
                        $(".cmt-dh[data-id='" + t + "']").removeClass("hidden");
                        $(".cmt-dh[data-id='" + t + "'] span").html(r);
                        $(".raterow[data-id='" + t + "'] .nohappyLSDH").hide();
                        $(".raterow[data-id='" + t + "'] .vote").html('<i class="icon-cry-s"><\/i> Rất tiếc ' + r + " cảm thấy không hài lòng với trải nghiệm mua sắm.");
                        $(".happy-gift[data-id='" + t + "']").removeClass("hidden");
                        $(".happy-gift[data-id='" + t + "'] input").on("keyup", function() { $(this).removeClass("error");
                            $(this).parent().find(".sperr").remove() });
                        $(".js-float-label-wrapper").FloatLabel() } else alertify.alert(n.Msg) }, error: function() { loading = !1;
                    alertify.alert("Có lỗi xảy ra vui lòng thử lại sau") } }) }, sendPMH: function(n) { $(".happy-gift[data-id='" + n + "'] .sperr").remove();
            $(".happy-gift[data-id='" + n + "'] input").removeClass("error"); var t = $(".happy-gift[data-id='" + n + "']").find("input").val().trim(); if (t === "") return $(".happy-gift[data-id='" + n + "'] input").addClass("error"), $(".happy-gift[data-id='" + n + "'] input").parent().append("<span class='sperr'>Vui lòng nhập số điện thoại.<\/span>"), !1; if (t !== "" && !hisAppr.validatePhone(t)) return $(".happy-gift[data-id='" + n + "'] input").addClass("error"), $(".happy-gift[data-id='" + n + "'] input").parent().append("<span class='sperr'>Số điện thoại không đúng.<\/span>"), !1;
            grecaptchaExecute(function(i) { $.ajax({ url: "/aj/Shared/SendPMH", type: "POST", data: { orderId: n, phone: t, g_recaptcha_response: i }, beforeSend: function() { ajLoading(!0) }, success: function(t) { var r, i; if (ajLoading(!1), t.Code === 200) i = JSON.parse(t.Msg), r = "<i class='happy-no'><\/i><span class='userpmh'>Sau khi nhận hàng, phiếu sẽ gửi đến số: <b>" + i.Phone + "<\/b><\/span>" + i.Value, $(".happy-gift[data-id='" + n + "'] .happy-text").html(r);
                        else try { i = JSON.parse(t.Msg);
                            i.ErrorCreatePMH ? $(".happy-gift[data-id='" + n + "'] .frm").addClass("hide") : ($(".happy-gift[data-id='" + n + "'] input").addClass("error"), $(".happy-gift[data-id='" + n + "'] input").parent().find(".sperr").remove(), $(".happy-gift[data-id='" + n + "'] input").parent().append("<span class='sperr'>" + t.Msg + "<\/span>"), t.Msg.indexOf("đã tham gia chương trình") > 0 && $(".happy-gift[data-id='" + n + "'] .sperr").append("<span class='onlyonesdt'>1 SDT chỉ nhận 1 lần duy nhất.<\/span>")) } catch (u) { $(".happy-gift[data-id='" + n + "'] input").addClass("error");
                            $(".happy-gift[data-id='" + n + "'] input").parent().find(".sperr").remove();
                            $(".happy-gift[data-id='" + n + "'] input").parent().append("<span class='sperr'>" + t.Msg + "<\/span>");
                            t.Msg.indexOf("đã tham gia chương trình") > 0 && $(".happy-gift[data-id='" + n + "'] .sperr").append("<span class='onlyonesdt'>1 SDT chỉ nhận 1 lần duy nhất.<\/span>") } }, error: function() { ajLoading(!1) } }) }) }, checkAllow: function() { var n = [];
            $('.happy-gift[data-allowchecked="false"]').each(function() { var t = $(this),
                    i;
                t.html().trim() === "" && (i = t.data("id"), i > 0 && n.push(i));
                $(t).data("allowchecked", !0);
                $(t).attr("data-allowchecked", !0) });
            n.length > 0 && $.get("/aj/Shared/CheckAllow?orderIds=" + n, [], function(n) { n.Msg !== undefined && ($.each(JSON.parse(n.Msg), function(n, t) { var i = $(".happy-gift[data-id='" + n + "']"); if (typeof i != "undefined") { i.html(t);
                        $(".userpmh>b").length && $(".smstext .arrow-icon").offset({ left: $(".userpmh>b").position().left + 30 });
                        $(".happy-gift[data-id='" + orderId + "'] input").on("keyup", function() { $(this).removeClass("error");
                            $(this).parent().find(".sperr").remove() });
                        i.removeClass("hidden") } }), $(".js-float-label-wrapper").FloatLabel()) }) }, validatePhone: function(n) { return /^((01(\d){9})|(0[35789](\d){8}))$/.test(n) }, isNumber: function(n) { if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].indexOf(n.key) < 0) return !1 }, checkButton: function(n) { var t = $(n.target).val().length;
            t <= 0 ? $('.happy-gift[data-id="' + $(n.target).data("id") + '"] .submitphone, .btn-sendLSDH').prop("disabled", !0) : $('.happy-gift[data-id="' + $(n.target).data("id") + '"] .submitphone, .btn-sendLSDH').prop("disabled", !1) }, checkIsCall: function(n) { var i = $(n),
                t = i.data("id");
            $(".raterow[data-id='" + t + "'] .wrapcheckbox .check-Call").is(":checked") === !0 ? $(".raterow[data-id='" + t + "'] .wrapcheckbox .check-Call").removeAttr("checked") : $(".raterow[data-id='" + t + "'] .wrapcheckbox .check-Call").attr("checked", "true") } };
(function(n) { n.fn.FloatLabel = function(t) { var i = n.extend({}, { populatedClass: "populated", focusedClass: "focused", passwordClass: "passwordbefore" }, t); return this.each(function() { var t = n(this),
                u = t.find("label"),
                r = t.find("textarea, input");
            r.val() == "" ? t.removeClass(i.populatedClass) : t.addClass(i.populatedClass);
            r.on("focus", function() { t.addClass(i.focusedClass);
                r.attr("placeholder") === u.text() || t.addClass(i.populatedClass) });
            r.on("blur", function() { t.removeClass(i.focusedClass);
                r.val() || t.removeClass(i.populatedClass) });
            r.on("keyup", function() { t.addClass(i.populatedClass) }) }) } })(jQuery);
/*!
 * Select2 4.0.6-rc.1
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
(function(n) { typeof define == "function" && define.amd ? define(["jquery"], n) : typeof module == "object" && module.exports ? module.exports = function(t, i) { return i === undefined && (i = typeof window != "undefined" ? require("jquery") : require("jquery")(t)), n(i), i } : n(jQuery) })(function(n) {
    var t = function() {
            var t;
            n && n.fn && n.fn.select2 && n.fn.select2.amd && (t = n.fn.select2.amd),
                function() {
                    if (!t || !t.requirejs) {
                        t ? i = t : t = {};
                        /**
                         * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
                         * Released under MIT license, http://github.com/requirejs/almond/LICENSE
                         */
                        var n, i, r;
                        (function(t) {
                            function e(n, t) { return d.call(n, t) }

                            function l(n, t) { var o, s, u, e, h, y, c, b, i, l, p, k, r = t && t.split("/"),
                                    a = f.map,
                                    v = a && a["*"] || {}; if (n) { for (n = n.split("/"), h = n.length - 1, f.nodeIdCompat && w.test(n[h]) && (n[h] = n[h].replace(w, "")), n[0].charAt(0) === "." && r && (k = r.slice(0, r.length - 1), n = k.concat(n)), i = 0; i < n.length; i++)
                                        if (p = n[i], p === ".") n.splice(i, 1), i -= 1;
                                        else if (p === "..")
                                        if (i === 0 || i === 1 && n[2] === ".." || n[i - 1] === "..") continue;
                                        else i > 0 && (n.splice(i - 1, 2), i -= 2);
                                    n = n.join("/") } if ((r || v) && a) { for (o = n.split("/"), i = o.length; i > 0; i -= 1) { if (s = o.slice(0, i).join("/"), r)
                                            for (l = r.length; l > 0; l -= 1)
                                                if (u = a[r.slice(0, l).join("/")], u && (u = u[s], u)) { e = u;
                                                    y = i; break }
                                        if (e) break;!c && v && v[s] && (c = v[s], b = i) }!e && c && (e = c, y = b);
                                    e && (o.splice(0, y, e), n = o.join("/")) } return n }

                            function b(n, i) { return function() { var r = g.call(arguments, 0); return typeof r[0] != "string" && r.length === 1 && r.push(null), o.apply(t, r.concat([n, i])) } }

                            function nt(n) { return function(t) { return l(t, n) } }

                            function tt(n) { return function(t) { u[n] = t } }

                            function a(n) { if (e(h, n)) { var i = h[n];
                                    delete h[n];
                                    y[n] = !0;
                                    c.apply(t, i) } if (!e(u, n) && !e(y, n)) throw new Error("No " + n); return u[n] }

                            function p(n) { var i, t = n ? n.indexOf("!") : -1; return t > -1 && (i = n.substring(0, t), n = n.substring(t + 1, n.length)), [i, n] }

                            function k(n) { return n ? p(n) : [] }

                            function it(n) { return function() { return f && f.config && f.config[n] || {} } } var c, o, v, s, u = {},
                                h = {},
                                f = {},
                                y = {},
                                d = Object.prototype.hasOwnProperty,
                                g = [].slice,
                                w = /\.js$/;
                            v = function(n, t) { var r, u = p(n),
                                    i = u[0],
                                    f = t[1]; return n = u[1], i && (i = l(i, f), r = a(i)), i ? n = r && r.normalize ? r.normalize(n, nt(f)) : l(n, f) : (n = l(n, f), u = p(n), i = u[0], n = u[1], i && (r = a(i))), { f: i ? i + "!" + n : n, n: n, pr: i, p: r } };
                            s = { require: function(n) { return b(n) }, exports: function(n) { var t = u[n]; return typeof t != "undefined" ? t : u[n] = {} }, module: function(n) { return { id: n, uri: "", exports: u[n], config: it(n) } } };
                            c = function(n, i, r, f) { var p, o, d, w, c, g, l = [],
                                    nt = typeof r,
                                    it; if (f = f || n, g = k(f), nt === "undefined" || nt === "function") { for (i = !i.length && r.length ? ["require", "exports", "module"] : i, c = 0; c < i.length; c += 1)
                                        if (w = v(i[c], g), o = w.f, o === "require") l[c] = s.require(n);
                                        else if (o === "exports") l[c] = s.exports(n), it = !0;
                                    else if (o === "module") p = l[c] = s.module(n);
                                    else if (e(u, o) || e(h, o) || e(y, o)) l[c] = a(o);
                                    else if (w.p) w.p.load(w.n, b(f, !0), tt(o), {}), l[c] = u[o];
                                    else throw new Error(n + " missing " + o);
                                    d = r ? r.apply(u[n], l) : undefined;
                                    n && (p && p.exports !== t && p.exports !== u[n] ? u[n] = p.exports : d === t && it || (u[n] = d)) } else n && (u[n] = r) };
                            n = i = o = function(n, i, r, u, e) { if (typeof n == "string") return s[n] ? s[n](i) : a(v(n, k(i)).f); if (!n.splice) { if (f = n, f.deps && o(f.deps, f.callback), !i) return;
                                    i.splice ? (n = i, i = r, r = null) : n = t } return i = i || function() {}, typeof r == "function" && (r = u, u = e), u ? c(t, n, i, r) : setTimeout(function() { c(t, n, i, r) }, 4), o };
                            o.config = function(n) { return o(n) };
                            n._defined = u;
                            r = function(n, t, i) { if (typeof n != "string") throw new Error("See almond README: incorrect module build, no module name");
                                t.splice || (i = t, t = []);
                                e(u, n) || e(h, n) || (h[n] = [n, t, i]) };
                            r.amd = { jQuery: !0 } })();
                        t.requirejs = n;
                        t.require = i;
                        t.define = r
                    }
                }();
            t.define("almond", function() {});
            t.define("jquery", [], function() { var t = n || $; return t == null && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t });
            t.define("select2/utils", ["jquery"], function(n) {
                function u(n) { var i = n.prototype,
                        r = [],
                        t, u; for (t in i)(u = i[t], typeof u == "function") && t !== "constructor" && r.push(t); return r } var t = {},
                    i, r; return t.Extend = function(n, t) {
                    function r() { this.constructor = n } var u = {}.hasOwnProperty; for (var i in t) u.call(t, i) && (n[i] = t[i]); return r.prototype = t.prototype, n.prototype = new r, n.__super__ = t.prototype, n }, t.Decorate = function(n, t) {
                    function i() { var r = Array.prototype.unshift,
                            u = t.prototype.constructor.length,
                            i = n.prototype.constructor;
                        u > 0 && (r.call(arguments, n.prototype.constructor), i = t.prototype.constructor);
                        i.apply(this, arguments) }

                    function l() { this.constructor = i } var s = u(t),
                        h = u(n),
                        r, e, c, f, o; for (t.displayName = n.displayName, i.prototype = new l, r = 0; r < h.length; r++) e = h[r], i.prototype[e] = n.prototype[e]; for (c = function(n) { var r = function() {},
                                u; return n in i.prototype && (r = i.prototype[n]), u = t.prototype[n],
                                function() { var n = Array.prototype.unshift; return n.call(arguments, r), u.apply(this, arguments) } }, f = 0; f < s.length; f++) o = s[f], i.prototype[o] = c(o); return i }, i = function() { this.listeners = {} }, i.prototype.on = function(n, t) { this.listeners = this.listeners || {};
                    n in this.listeners ? this.listeners[n].push(t) : this.listeners[n] = [t] }, i.prototype.trigger = function(n) { var i = Array.prototype.slice,
                        t = i.call(arguments, 1);
                    this.listeners = this.listeners || {};
                    t == null && (t = []);
                    t.length === 0 && t.push({});
                    t[0]._type = n;
                    n in this.listeners && this.invoke(this.listeners[n], i.call(arguments, 1)); "*" in this.listeners && this.invoke(this.listeners["*"], arguments) }, i.prototype.invoke = function(n, t) { for (var i = 0, r = n.length; i < r; i++) n[i].apply(this, t) }, t.Observable = i, t.generateChars = function(n) { for (var r, t = "", i = 0; i < n; i++) r = Math.floor(Math.random() * 36), t += r.toString(36); return t }, t.bind = function(n, t) { return function() { n.apply(t, arguments) } }, t._convertData = function(n) { var f, r, i, u, t; for (f in n)
                        if (r = f.split("-"), i = n, r.length !== 1) { for (u = 0; u < r.length; u++) t = r[u], t = t.substring(0, 1).toLowerCase() + t.substring(1), t in i || (i[t] = {}), u == r.length - 1 && (i[t] = n[f]), i = i[t];
                            delete n[f] }
                    return n }, t.hasScroll = function(t, i) { var u = n(i),
                        f = i.style.overflowX,
                        r = i.style.overflowY; return f === r && (r === "hidden" || r === "visible") ? !1 : f === "scroll" || r === "scroll" ? !0 : u.innerHeight() < i.scrollHeight || u.innerWidth() < i.scrollWidth }, t.escapeMarkup = function(n) { var t = { "\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;" }; return typeof n != "string" ? n : String(n).replace(/[&<>"'\/\\]/g, function(n) { return t[n] }) }, t.appendMany = function(t, i) { if (n.fn.jquery.substr(0, 3) === "1.7") { var r = n();
                        n.map(i, function(n) { r = r.add(n) });
                        i = r }
                    t.append(i) }, t.__cache = {}, r = 0, t.GetUniqueElementId = function(n) { var t = n.getAttribute("data-select2-id"); return t == null && (n.id ? (t = n.id, n.setAttribute("data-select2-id", t)) : (n.setAttribute("data-select2-id", ++r), t = r.toString())), t }, t.StoreData = function(n, i, r) { var u = t.GetUniqueElementId(n);
                    t.__cache[u] || (t.__cache[u] = {});
                    t.__cache[u][i] = r }, t.GetData = function(i, r) { var u = t.GetUniqueElementId(i); return r ? t.__cache[u] ? t.__cache[u][r] != null ? t.__cache[u][r] : n(i).data(r) : n(i).data(r) : t.__cache[u] }, t.RemoveData = function(n) { var i = t.GetUniqueElementId(n);
                    t.__cache[i] != null && delete t.__cache[i] }, t });
            t.define("select2/results", ["jquery", "./utils"], function(n, t) {
                function i(n, t, r) { this.$element = n;
                    this.data = r;
                    this.options = t;
                    i.__super__.constructor.call(this) } return t.Extend(i, t.Observable), i.prototype.render = function() { var t = n('<ul class="select2-results__options" role="tree"><\/ul>'); return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t, t }, i.prototype.clear = function() { this.$results.empty() }, i.prototype.displayMessage = function(t) { var u = this.options.get("escapeMarkup"),
                        i, r;
                    this.clear();
                    this.hideLoading();
                    i = n('<li role="treeitem" aria-live="assertive" class="select2-results__option"><\/li>');
                    r = this.options.get("translations").get(t.message);
                    i.append(u(r(t.args)));
                    i[0].className += " select2-results__message";
                    this.$results.append(i) }, i.prototype.hideMessages = function() { this.$results.find(".select2-results__message").remove() }, i.prototype.append = function(n) { var i, t, r, u; if (this.hideLoading(), i = [], n.results == null || n.results.length === 0) { this.$results.children().length === 0 && this.trigger("results:message", { message: "noResults" }); return } for (n.results = this.sort(n.results), t = 0; t < n.results.length; t++) r = n.results[t], u = this.option(r), i.push(u);
                    this.$results.append(i) }, i.prototype.position = function(n, t) { var i = t.find(".select2-results");
                    i.append(n) }, i.prototype.sort = function(n) { var t = this.options.get("sorter"); return t(n) }, i.prototype.highlightFirstItem = function() { var n = this.$results.find(".select2-results__option[aria-selected]"),
                        t = n.filter("[aria-selected=true]");
                    t.length > 0 ? t.first().trigger("mouseenter") : n.first().trigger("mouseenter");
                    this.ensureHighlightVisible() }, i.prototype.setClasses = function() { var i = this;
                    this.data.current(function(r) { var u = n.map(r, function(n) { return n.id.toString() }),
                            f = i.$results.find(".select2-results__option[aria-selected]");
                        f.each(function() { var r = n(this),
                                i = t.GetData(this, "data"),
                                f = "" + i.id;
                            i.element != null && i.element.selected || i.element == null && n.inArray(f, u) > -1 ? r.attr("aria-selected", "true") : r.attr("aria-selected", "false") }) }) }, i.prototype.showLoading = function(n) { this.hideLoading(); var i = this.options.get("translations").get("searching"),
                        r = { disabled: !0, loading: !0, text: i(n) },
                        t = this.option(r);
                    t.className += " loading-results";
                    this.$results.prepend(t) }, i.prototype.hideLoading = function() { this.$results.find(".loading-results").remove() }, i.prototype.option = function(i) { var u = document.createElement("li"),
                        r, o, l, s, f, y, h, e, a, v, c;
                    u.className = "select2-results__option";
                    r = { role: "treeitem", "aria-selected": "false" };
                    i.disabled && (delete r["aria-selected"], r["aria-disabled"] = "true");
                    i.id == null && delete r["aria-selected"];
                    i._resultId != null && (u.id = i._resultId);
                    i.title && (u.title = i.title);
                    i.children && (r.role = "group", r["aria-label"] = i.text, delete r["aria-selected"]); for (o in r) l = r[o], u.setAttribute(o, l); if (i.children) { for (s = n(u), f = document.createElement("strong"), f.className = "select2-results__group", y = n(f), this.template(i, f), h = [], e = 0; e < i.children.length; e++) a = i.children[e], v = this.option(a), h.push(v);
                        c = n("<ul><\/ul>", { "class": "select2-results__options select2-results__options--nested" });
                        c.append(h);
                        s.append(f);
                        s.append(c) } else this.template(i, u); return t.StoreData(u, "data", i), u }, i.prototype.bind = function(i) { var r = this,
                        u = i.id + "-results";
                    this.$results.attr("id", u);
                    i.on("results:all", function(n) { r.clear();
                        r.append(n.data);
                        i.isOpen() && (r.setClasses(), r.highlightFirstItem()) });
                    i.on("results:append", function(n) { r.append(n.data);
                        i.isOpen() && r.setClasses() });
                    i.on("query", function(n) { r.hideMessages();
                        r.showLoading(n) });
                    i.on("select", function() { i.isOpen() && (r.setClasses(), r.highlightFirstItem()) });
                    i.on("unselect", function() { i.isOpen() && (r.setClasses(), r.highlightFirstItem()) });
                    i.on("open", function() { r.$results.attr("aria-expanded", "true");
                        r.$results.attr("aria-hidden", "false");
                        r.setClasses();
                        r.ensureHighlightVisible() });
                    i.on("close", function() { r.$results.attr("aria-expanded", "false");
                        r.$results.attr("aria-hidden", "true");
                        r.$results.removeAttr("aria-activedescendant") });
                    i.on("results:toggle", function() { var n = r.getHighlightedResults();
                        n.length !== 0 && n.trigger("mouseup") });
                    i.on("results:select", function() { var n = r.getHighlightedResults(),
                            i;
                        n.length !== 0 && (i = t.GetData(n[0], "data"), n.attr("aria-selected") == "true" ? r.trigger("close", {}) : r.trigger("select", { data: i })) });
                    i.on("results:previous", function() { var i = r.getHighlightedResults(),
                            u = r.$results.find("[aria-selected]"),
                            f = u.index(i),
                            n, t; if (!(f <= 0)) { n = f - 1;
                            i.length === 0 && (n = 0);
                            t = u.eq(n);
                            t.trigger("mouseenter"); var e = r.$results.offset().top,
                                o = t.offset().top,
                                s = r.$results.scrollTop() + (o - e);
                            n === 0 ? r.$results.scrollTop(0) : o - e < 0 && r.$results.scrollTop(s) } });
                    i.on("results:next", function() { var e = r.getHighlightedResults(),
                            t = r.$results.find("[aria-selected]"),
                            o = t.index(e),
                            i = o + 1,
                            n; if (!(i >= t.length)) { n = t.eq(i);
                            n.trigger("mouseenter"); var u = r.$results.offset().top + r.$results.outerHeight(!1),
                                f = n.offset().top + n.outerHeight(!1),
                                s = r.$results.scrollTop() + f - u;
                            i === 0 ? r.$results.scrollTop(0) : f > u && r.$results.scrollTop(s) } });
                    i.on("results:focus", function(n) { n.element.addClass("select2-results__option--highlighted") });
                    i.on("results:message", function(n) { r.displayMessage(n) }); if (n.fn.mousewheel) this.$results.on("mousewheel", function(n) { if (r.options.options.disableMousewheel) return !0; var t = r.$results.scrollTop(),
                            i = r.$results.get(0).scrollHeight - t + n.deltaY,
                            u = n.deltaY > 0 && t - n.deltaY <= 0,
                            f = n.deltaY < 0 && i <= r.$results.height();
                        u ? (r.$results.scrollTop(0), n.preventDefault(), n.stopPropagation()) : f && (r.$results.scrollTop(r.$results.get(0).scrollHeight - r.$results.height()), n.preventDefault(), n.stopPropagation()) });
                    this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(i) { var f = n(this),
                            u = t.GetData(this, "data"); if (f.attr("aria-selected") === "true") { r.options.get("multiple") ? r.trigger("unselect", { originalEvent: i, data: u }) : r.trigger("close", {}); return }
                        r.trigger("select", { originalEvent: i, data: u }) });
                    this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function() { var i = t.GetData(this, "data");
                        r.getHighlightedResults().removeClass("select2-results__option--highlighted");
                        r.trigger("results:focus", { data: i, element: n(this) }) }) }, i.prototype.getHighlightedResults = function() { return this.$results.find(".select2-results__option--highlighted") }, i.prototype.destroy = function() { this.$results.remove() }, i.prototype.ensureHighlightVisible = function() { var n = this.getHighlightedResults(); if (n.length !== 0) { var f = this.$results.find("[aria-selected]"),
                            e = f.index(n),
                            t = this.$results.offset().top,
                            i = n.offset().top,
                            r = this.$results.scrollTop() + (i - t),
                            u = i - t;
                        r -= n.outerHeight(!1) * 2;
                        e <= 2 ? this.$results.scrollTop(0) : (u > this.$results.outerHeight() || u < 0) && this.$results.scrollTop(r) } }, i.prototype.template = function(t, i) { var u = this.options.get("templateResult"),
                        f = this.options.get("escapeMarkup"),
                        r = u(t, i);
                    r == null ? i.style.display = "none" : typeof r == "string" ? i.innerHTML = f(r) : n(i).append(r) }, i });
            t.define("select2/keys", [], function() { return { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 } });
            t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(n, t, i) {
                function r(n, t) { this.$element = n;
                    this.options = t;
                    r.__super__.constructor.call(this) } return t.Extend(r, t.Observable), r.prototype.render = function() { var i = n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"><\/span>'); return this._tabindex = 0, t.GetData(this.$element[0], "old-tabindex") != null ? this._tabindex = t.GetData(this.$element[0], "old-tabindex") : this.$element.attr("tabindex") != null && (this._tabindex = this.$element.attr("tabindex")), i.attr("title", this.$element.attr("title")), i.attr("tabindex", this._tabindex), this.$selection = i, i }, r.prototype.bind = function(n) { var t = this,
                        u = n.id + "-container",
                        r = n.id + "-results";
                    this.container = n;
                    this.$selection.on("focus", function(n) { t.trigger("focus", n) });
                    this.$selection.on("blur", function(n) { t._handleBlur(n) });
                    this.$selection.on("keydown", function(n) { t.trigger("keypress", n);
                        n.which === i.SPACE && n.preventDefault() });
                    n.on("results:focus", function(n) { t.$selection.attr("aria-activedescendant", n.data._resultId) });
                    n.on("selection:update", function(n) { t.update(n.data) });
                    n.on("open", function() { t.$selection.attr("aria-expanded", "true");
                        t.$selection.attr("aria-owns", r);
                        t._attachCloseHandler(n) });
                    n.on("close", function() { t.$selection.attr("aria-expanded", "false");
                        t.$selection.removeAttr("aria-activedescendant");
                        t.$selection.removeAttr("aria-owns");
                        t.$selection.focus();
                        window.setTimeout(function() { t.$selection.focus() }, 0);
                        t._detachCloseHandler(n) });
                    n.on("enable", function() { t.$selection.attr("tabindex", t._tabindex) });
                    n.on("disable", function() { t.$selection.attr("tabindex", "-1") }) }, r.prototype._handleBlur = function(t) { var i = this;
                    window.setTimeout(function() { document.activeElement == i.$selection[0] || n.contains(i.$selection[0], document.activeElement) || i.trigger("blur", t) }, 1) }, r.prototype._attachCloseHandler = function(i) { var r = this;
                    n(document.body).on("mousedown.select2." + i.id, function(i) { var r = n(i.target),
                            u = r.closest(".select2"),
                            f = n(".select2.select2-container--open");
                        f.each(function() { var r = n(this),
                                i;
                            this != u[0] && (i = t.GetData(this, "element"), i.select2("close")) }) }) }, r.prototype._detachCloseHandler = function(t) { n(document.body).off("mousedown.select2." + t.id) }, r.prototype.position = function(n, t) { var i = t.find(".selection");
                    i.append(n) }, r.prototype.destroy = function() { this._detachCloseHandler(this.container) }, r.prototype.update = function() { throw new Error("The `update` method must be defined in child classes."); }, r });
            t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(n, t, i) {
                function r() { r.__super__.constructor.apply(this, arguments) } return i.Extend(r, t), r.prototype.render = function() { var n = r.__super__.render.call(this); return n.addClass("select2-selection--single"), n.html('<span class="select2-selection__rendered"><\/span><span class="select2-selection__arrow" role="presentation"><b role="presentation"><\/b><\/span>'), n }, r.prototype.bind = function(n) { var i = this,
                        t;
                    r.__super__.bind.apply(this, arguments);
                    t = n.id + "-container";
                    this.$selection.find(".select2-selection__rendered").attr("id", t).attr("role", "textbox").attr("aria-readonly", "true");
                    this.$selection.attr("aria-labelledby", t);
                    this.$selection.on("mousedown", function(n) { n.which === 1 && i.trigger("toggle", { originalEvent: n }) });
                    this.$selection.on("focus", function() {});
                    this.$selection.on("blur", function() {});
                    n.on("focus", function() { n.isOpen() || i.$selection.focus() }) }, r.prototype.clear = function() { var n = this.$selection.find(".select2-selection__rendered");
                    n.empty();
                    n.removeAttr("title") }, r.prototype.display = function(n, t) { var i = this.options.get("templateSelection"),
                        r = this.options.get("escapeMarkup"); return r(i(n, t)) }, r.prototype.selectionContainer = function() { return n("<span><\/span>") }, r.prototype.update = function(n) { if (n.length === 0) { this.clear(); return } var t = n[0],
                        i = this.$selection.find(".select2-selection__rendered"),
                        r = this.display(t, i);
                    i.empty().append(r);
                    i.attr("title", t.title || t.text) }, r });
            t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(n, t, i) {
                function r() { r.__super__.constructor.apply(this, arguments) } return i.Extend(r, t), r.prototype.render = function() { var n = r.__super__.render.call(this); return n.addClass("select2-selection--multiple"), n.html('<ul class="select2-selection__rendered"><\/ul>'), n }, r.prototype.bind = function() { var t = this;
                    r.__super__.bind.apply(this, arguments);
                    this.$selection.on("click", function(n) { t.trigger("toggle", { originalEvent: n }) });
                    this.$selection.on("click", ".select2-selection__choice__remove", function(r) { if (!t.options.get("disabled")) { var u = n(this),
                                f = u.parent(),
                                e = i.GetData(f[0], "data");
                            t.trigger("unselect", { originalEvent: r, data: e }) } }) }, r.prototype.clear = function() { var n = this.$selection.find(".select2-selection__rendered");
                    n.empty();
                    n.removeAttr("title") }, r.prototype.display = function(n, t) { var i = this.options.get("templateSelection"),
                        r = this.options.get("escapeMarkup"); return r(i(n, t)) }, r.prototype.selectionContainer = function() { return n('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;<\/span><\/li>') }, r.prototype.update = function(n) { var f, r, e; if (this.clear(), n.length !== 0) { for (f = [], r = 0; r < n.length; r++) { var u = n[r],
                                t = this.selectionContainer(),
                                o = this.display(u, t);
                            t.append(o);
                            t.attr("title", u.title || u.text);
                            i.StoreData(t[0], "data", u);
                            f.push(t) }
                        e = this.$selection.find(".select2-selection__rendered");
                        i.appendMany(e, f) } }, r });
            t.define("select2/selection/placeholder", ["../utils"], function() {
                function n(n, t, i) { this.placeholder = this.normalizePlaceholder(i.get("placeholder"));
                    n.call(this, t, i) } return n.prototype.normalizePlaceholder = function(n, t) { return typeof t == "string" && (t = { id: "", text: t }), t }, n.prototype.createPlaceholder = function(n, t) { var i = this.selectionContainer(); return i.html(this.display(t)), i.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), i }, n.prototype.update = function(n, t) { var r = t.length == 1 && t[0].id != this.placeholder.id,
                        u = t.length > 1,
                        i; if (u || r) return n.call(this, t);
                    this.clear();
                    i = this.createPlaceholder(this.placeholder);
                    this.$selection.find(".select2-selection__rendered").append(i) }, n });
            t.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function(n, t, i) {
                function r() {} return r.prototype.bind = function(n, t, i) { var r = this;
                    n.call(this, t, i);
                    this.placeholder == null && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option.");
                    this.$selection.on("mousedown", ".select2-selection__clear", function(n) { r._handleClear(n) });
                    t.on("keypress", function(n) { r._handleKeyboardClear(n, t) }) }, r.prototype._handleClear = function(n, t) { var e, u, o, r, f; if (!this.options.get("disabled") && (e = this.$selection.find(".select2-selection__clear"), e.length !== 0)) { if (t.stopPropagation(), u = i.GetData(e[0], "data"), o = this.$element.val(), this.$element.val(this.placeholder.id), r = { data: u }, this.trigger("clear", r), r.prevented) { this.$element.val(o); return } for (f = 0; f < u.length; f++)
                            if (r = { data: u[f] }, this.trigger("unselect", r), r.prevented) { this.$element.val(o); return }
                        this.$element.trigger("change");
                        this.trigger("toggle", {}) } }, r.prototype._handleKeyboardClear = function(n, i, r) { r.isOpen() || (i.which == t.DELETE || i.which == t.BACKSPACE) && this._handleClear(i) }, r.prototype.update = function(t, r) { if (t.call(this, r), !(this.$selection.find(".select2-selection__placeholder").length > 0) && r.length !== 0) { var u = n('<span class="select2-selection__clear">&times;<\/span>');
                        i.StoreData(u[0], "data", r);
                        this.$selection.find(".select2-selection__rendered").prepend(u) } }, r });
            t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(n, t, i) {
                function r(n, t, i) { n.call(this, t, i) } return r.prototype.render = function(t) { var i = n('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /><\/li>'),
                        r; return this.$searchContainer = i, this.$search = i.find("input"), r = t.call(this), this._transferTabIndex(), r }, r.prototype.bind = function(n, r, u) { var f = this,
                        e, o;
                    n.call(this, r, u);
                    r.on("open", function() { f.$search.trigger("focus") });
                    r.on("close", function() { f.$search.val("");
                        f.$search.removeAttr("aria-activedescendant");
                        f.$search.trigger("focus") });
                    r.on("enable", function() { f.$search.prop("disabled", !1);
                        f._transferTabIndex() });
                    r.on("disable", function() { f.$search.prop("disabled", !0) });
                    r.on("focus", function() { f.$search.trigger("focus") });
                    r.on("results:focus", function(n) { f.$search.attr("aria-activedescendant", n.id) });
                    this.$selection.on("focusin", ".select2-search--inline", function(n) { f.trigger("focus", n) });
                    this.$selection.on("focusout", ".select2-search--inline", function(n) { f._handleBlur(n) });
                    this.$selection.on("keydown", ".select2-search--inline", function(n) { var u, r, e;
                        n.stopPropagation();
                        f.trigger("keypress", n);
                        f._keyUpPrevented = n.isDefaultPrevented();
                        u = n.which;
                        u === i.BACKSPACE && f.$search.val() === "" && (r = f.$searchContainer.prev(".select2-selection__choice"), r.length > 0 && (e = t.GetData(r[0], "data"), f.searchRemoveChoice(e), n.preventDefault())) });
                    e = document.documentMode;
                    o = e && e <= 11;
                    this.$selection.on("input.searchcheck", ".select2-search--inline", function() { if (o) { f.$selection.off("input.search input.searchcheck"); return }
                        f.$selection.off("keyup.search") });
                    this.$selection.on("keyup.search input.search", ".select2-search--inline", function(n) { if (o && n.type === "input") { f.$selection.off("input.search input.searchcheck"); return } var t = n.which;
                        t != i.SHIFT && t != i.CTRL && t != i.ALT && t != i.TAB && f.handleSearch(n) }) }, r.prototype._transferTabIndex = function() { this.$search.attr("tabindex", this.$selection.attr("tabindex"));
                    this.$selection.attr("tabindex", "-1") }, r.prototype.createPlaceholder = function(n, t) { this.$search.attr("placeholder", t.text) }, r.prototype.update = function(n, t) { var r = this.$search[0] == document.activeElement,
                        i;
                    this.$search.attr("placeholder", "");
                    n.call(this, t);
                    this.$selection.find(".select2-selection__rendered").append(this.$searchContainer);
                    this.resizeSearch();
                    r && (i = this.$element.find("[data-select2-tag]").length, i ? this.$element.focus() : this.$search.focus()) }, r.prototype.handleSearch = function() { if (this.resizeSearch(), !this._keyUpPrevented) { var n = this.$search.val();
                        this.trigger("query", { term: n }) }
                    this._keyUpPrevented = !1 }, r.prototype.searchRemoveChoice = function(n, t) { this.trigger("unselect", { data: t });
                    this.$search.val(t.text);
                    this.handleSearch() }, r.prototype.resizeSearch = function() { var n, t;
                    this.$search.css("width", "25px");
                    n = "";
                    this.$search.attr("placeholder") !== "" ? n = this.$selection.find(".select2-selection__rendered").innerWidth() : (t = this.$search.val().length + 1, n = t * .75 + "em");
                    this.$search.css("width", n) }, r });
            t.define("select2/selection/eventRelay", ["jquery"], function(n) {
                function t() {} return t.prototype.bind = function(t, i, r) { var u = this,
                        f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
                        e = ["opening", "closing", "selecting", "unselecting", "clearing"];
                    t.call(this, i, r);
                    i.on("*", function(t, i) { if (n.inArray(t, f) !== -1) { i = i || {}; var r = n.Event("select2:" + t, { params: i });
                            (u.$element.trigger(r), n.inArray(t, e) !== -1) && (i.prevented = r.isDefaultPrevented()) } }) }, t });
            t.define("select2/translation", ["jquery", "require"], function(n, t) {
                function i(n) { this.dict = n || {} } return i.prototype.all = function() { return this.dict }, i.prototype.get = function(n) { return this.dict[n] }, i.prototype.extend = function(t) { this.dict = n.extend({}, t.all(), this.dict) }, i._cache = {}, i.loadPath = function(n) { if (!(n in i._cache)) { var r = t(n);
                        i._cache[n] = r } return new i(i._cache[n]) }, i });
            t.define("select2/diacritics", [], function() { return { "Ⓐ": "A", "Ａ": "A", "À": "A", "Á": "A", "Â": "A", "Ầ": "A", "Ấ": "A", "Ẫ": "A", "Ẩ": "A", "Ã": "A", "Ā": "A", "Ă": "A", "Ằ": "A", "Ắ": "A", "Ẵ": "A", "Ẳ": "A", "Ȧ": "A", "Ǡ": "A", "Ä": "A", "Ǟ": "A", "Ả": "A", "Å": "A", "Ǻ": "A", "Ǎ": "A", "Ȁ": "A", "Ȃ": "A", "Ạ": "A", "Ậ": "A", "Ặ": "A", "Ḁ": "A", "Ą": "A", "Ⱥ": "A", "Ɐ": "A", "Ꜳ": "AA", "Æ": "AE", "Ǽ": "AE", "Ǣ": "AE", "Ꜵ": "AO", "Ꜷ": "AU", "Ꜹ": "AV", "Ꜻ": "AV", "Ꜽ": "AY", "Ⓑ": "B", "Ｂ": "B", "Ḃ": "B", "Ḅ": "B", "Ḇ": "B", "Ƀ": "B", "Ƃ": "B", "Ɓ": "B", "Ⓒ": "C", "Ｃ": "C", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C", "Ç": "C", "Ḉ": "C", "Ƈ": "C", "Ȼ": "C", "Ꜿ": "C", "Ⓓ": "D", "Ｄ": "D", "Ḋ": "D", "Ď": "D", "Ḍ": "D", "Ḑ": "D", "Ḓ": "D", "Ḏ": "D", "Đ": "D", "Ƌ": "D", "Ɗ": "D", "Ɖ": "D", "Ꝺ": "D", "Ǳ": "DZ", "Ǆ": "DZ", "ǲ": "Dz", "ǅ": "Dz", "Ⓔ": "E", "Ｅ": "E", "È": "E", "É": "E", "Ê": "E", "Ề": "E", "Ế": "E", "Ễ": "E", "Ể": "E", "Ẽ": "E", "Ē": "E", "Ḕ": "E", "Ḗ": "E", "Ĕ": "E", "Ė": "E", "Ë": "E", "Ẻ": "E", "Ě": "E", "Ȅ": "E", "Ȇ": "E", "Ẹ": "E", "Ệ": "E", "Ȩ": "E", "Ḝ": "E", "Ę": "E", "Ḙ": "E", "Ḛ": "E", "Ɛ": "E", "Ǝ": "E", "Ⓕ": "F", "Ｆ": "F", "Ḟ": "F", "Ƒ": "F", "Ꝼ": "F", "Ⓖ": "G", "Ｇ": "G", "Ǵ": "G", "Ĝ": "G", "Ḡ": "G", "Ğ": "G", "Ġ": "G", "Ǧ": "G", "Ģ": "G", "Ǥ": "G", "Ɠ": "G", "Ꞡ": "G", "Ᵹ": "G", "Ꝿ": "G", "Ⓗ": "H", "Ｈ": "H", "Ĥ": "H", "Ḣ": "H", "Ḧ": "H", "Ȟ": "H", "Ḥ": "H", "Ḩ": "H", "Ḫ": "H", "Ħ": "H", "Ⱨ": "H", "Ⱶ": "H", "Ɥ": "H", "Ⓘ": "I", "Ｉ": "I", "Ì": "I", "Í": "I", "Î": "I", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "İ": "I", "Ï": "I", "Ḯ": "I", "Ỉ": "I", "Ǐ": "I", "Ȉ": "I", "Ȋ": "I", "Ị": "I", "Į": "I", "Ḭ": "I", "Ɨ": "I", "Ⓙ": "J", "Ｊ": "J", "Ĵ": "J", "Ɉ": "J", "Ⓚ": "K", "Ｋ": "K", "Ḱ": "K", "Ǩ": "K", "Ḳ": "K", "Ķ": "K", "Ḵ": "K", "Ƙ": "K", "Ⱪ": "K", "Ꝁ": "K", "Ꝃ": "K", "Ꝅ": "K", "Ꞣ": "K", "Ⓛ": "L", "Ｌ": "L", "Ŀ": "L", "Ĺ": "L", "Ľ": "L", "Ḷ": "L", "Ḹ": "L", "Ļ": "L", "Ḽ": "L", "Ḻ": "L", "Ł": "L", "Ƚ": "L", "Ɫ": "L", "Ⱡ": "L", "Ꝉ": "L", "Ꝇ": "L", "Ꞁ": "L", "Ǉ": "LJ", "ǈ": "Lj", "Ⓜ": "M", "Ｍ": "M", "Ḿ": "M", "Ṁ": "M", "Ṃ": "M", "Ɱ": "M", "Ɯ": "M", "Ⓝ": "N", "Ｎ": "N", "Ǹ": "N", "Ń": "N", "Ñ": "N", "Ṅ": "N", "Ň": "N", "Ṇ": "N", "Ņ": "N", "Ṋ": "N", "Ṉ": "N", "Ƞ": "N", "Ɲ": "N", "Ꞑ": "N", "Ꞥ": "N", "Ǌ": "NJ", "ǋ": "Nj", "Ⓞ": "O", "Ｏ": "O", "Ò": "O", "Ó": "O", "Ô": "O", "Ồ": "O", "Ố": "O", "Ỗ": "O", "Ổ": "O", "Õ": "O", "Ṍ": "O", "Ȭ": "O", "Ṏ": "O", "Ō": "O", "Ṑ": "O", "Ṓ": "O", "Ŏ": "O", "Ȯ": "O", "Ȱ": "O", "Ö": "O", "Ȫ": "O", "Ỏ": "O", "Ő": "O", "Ǒ": "O", "Ȍ": "O", "Ȏ": "O", "Ơ": "O", "Ờ": "O", "Ớ": "O", "Ỡ": "O", "Ở": "O", "Ợ": "O", "Ọ": "O", "Ộ": "O", "Ǫ": "O", "Ǭ": "O", "Ø": "O", "Ǿ": "O", "Ɔ": "O", "Ɵ": "O", "Ꝋ": "O", "Ꝍ": "O", "Ƣ": "OI", "Ꝏ": "OO", "Ȣ": "OU", "Ⓟ": "P", "Ｐ": "P", "Ṕ": "P", "Ṗ": "P", "Ƥ": "P", "Ᵽ": "P", "Ꝑ": "P", "Ꝓ": "P", "Ꝕ": "P", "Ⓠ": "Q", "Ｑ": "Q", "Ꝗ": "Q", "Ꝙ": "Q", "Ɋ": "Q", "Ⓡ": "R", "Ｒ": "R", "Ŕ": "R", "Ṙ": "R", "Ř": "R", "Ȑ": "R", "Ȓ": "R", "Ṛ": "R", "Ṝ": "R", "Ŗ": "R", "Ṟ": "R", "Ɍ": "R", "Ɽ": "R", "Ꝛ": "R", "Ꞧ": "R", "Ꞃ": "R", "Ⓢ": "S", "Ｓ": "S", "ẞ": "S", "Ś": "S", "Ṥ": "S", "Ŝ": "S", "Ṡ": "S", "Š": "S", "Ṧ": "S", "Ṣ": "S", "Ṩ": "S", "Ș": "S", "Ş": "S", "Ȿ": "S", "Ꞩ": "S", "Ꞅ": "S", "Ⓣ": "T", "Ｔ": "T", "Ṫ": "T", "Ť": "T", "Ṭ": "T", "Ț": "T", "Ţ": "T", "Ṱ": "T", "Ṯ": "T", "Ŧ": "T", "Ƭ": "T", "Ʈ": "T", "Ⱦ": "T", "Ꞇ": "T", "Ꜩ": "TZ", "Ⓤ": "U", "Ｕ": "U", "Ù": "U", "Ú": "U", "Û": "U", "Ũ": "U", "Ṹ": "U", "Ū": "U", "Ṻ": "U", "Ŭ": "U", "Ü": "U", "Ǜ": "U", "Ǘ": "U", "Ǖ": "U", "Ǚ": "U", "Ủ": "U", "Ů": "U", "Ű": "U", "Ǔ": "U", "Ȕ": "U", "Ȗ": "U", "Ư": "U", "Ừ": "U", "Ứ": "U", "Ữ": "U", "Ử": "U", "Ự": "U", "Ụ": "U", "Ṳ": "U", "Ų": "U", "Ṷ": "U", "Ṵ": "U", "Ʉ": "U", "Ⓥ": "V", "Ｖ": "V", "Ṽ": "V", "Ṿ": "V", "Ʋ": "V", "Ꝟ": "V", "Ʌ": "V", "Ꝡ": "VY", "Ⓦ": "W", "Ｗ": "W", "Ẁ": "W", "Ẃ": "W", "Ŵ": "W", "Ẇ": "W", "Ẅ": "W", "Ẉ": "W", "Ⱳ": "W", "Ⓧ": "X", "Ｘ": "X", "Ẋ": "X", "Ẍ": "X", "Ⓨ": "Y", "Ｙ": "Y", "Ỳ": "Y", "Ý": "Y", "Ŷ": "Y", "Ỹ": "Y", "Ȳ": "Y", "Ẏ": "Y", "Ÿ": "Y", "Ỷ": "Y", "Ỵ": "Y", "Ƴ": "Y", "Ɏ": "Y", "Ỿ": "Y", "Ⓩ": "Z", "Ｚ": "Z", "Ź": "Z", "Ẑ": "Z", "Ż": "Z", "Ž": "Z", "Ẓ": "Z", "Ẕ": "Z", "Ƶ": "Z", "Ȥ": "Z", "Ɀ": "Z", "Ⱬ": "Z", "Ꝣ": "Z", "ⓐ": "a", "ａ": "a", "ẚ": "a", "à": "a", "á": "a", "â": "a", "ầ": "a", "ấ": "a", "ẫ": "a", "ẩ": "a", "ã": "a", "ā": "a", "ă": "a", "ằ": "a", "ắ": "a", "ẵ": "a", "ẳ": "a", "ȧ": "a", "ǡ": "a", "ä": "a", "ǟ": "a", "ả": "a", "å": "a", "ǻ": "a", "ǎ": "a", "ȁ": "a", "ȃ": "a", "ạ": "a", "ậ": "a", "ặ": "a", "ḁ": "a", "ą": "a", "ⱥ": "a", "ɐ": "a", "ꜳ": "aa", "æ": "ae", "ǽ": "ae", "ǣ": "ae", "ꜵ": "ao", "ꜷ": "au", "ꜹ": "av", "ꜻ": "av", "ꜽ": "ay", "ⓑ": "b", "ｂ": "b", "ḃ": "b", "ḅ": "b", "ḇ": "b", "ƀ": "b", "ƃ": "b", "ɓ": "b", "ⓒ": "c", "ｃ": "c", "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "ç": "c", "ḉ": "c", "ƈ": "c", "ȼ": "c", "ꜿ": "c", "ↄ": "c", "ⓓ": "d", "ｄ": "d", "ḋ": "d", "ď": "d", "ḍ": "d", "ḑ": "d", "ḓ": "d", "ḏ": "d", "đ": "d", "ƌ": "d", "ɖ": "d", "ɗ": "d", "ꝺ": "d", "ǳ": "dz", "ǆ": "dz", "ⓔ": "e", "ｅ": "e", "è": "e", "é": "e", "ê": "e", "ề": "e", "ế": "e", "ễ": "e", "ể": "e", "ẽ": "e", "ē": "e", "ḕ": "e", "ḗ": "e", "ĕ": "e", "ė": "e", "ë": "e", "ẻ": "e", "ě": "e", "ȅ": "e", "ȇ": "e", "ẹ": "e", "ệ": "e", "ȩ": "e", "ḝ": "e", "ę": "e", "ḙ": "e", "ḛ": "e", "ɇ": "e", "ɛ": "e", "ǝ": "e", "ⓕ": "f", "ｆ": "f", "ḟ": "f", "ƒ": "f", "ꝼ": "f", "ⓖ": "g", "ｇ": "g", "ǵ": "g", "ĝ": "g", "ḡ": "g", "ğ": "g", "ġ": "g", "ǧ": "g", "ģ": "g", "ǥ": "g", "ɠ": "g", "ꞡ": "g", "ᵹ": "g", "ꝿ": "g", "ⓗ": "h", "ｈ": "h", "ĥ": "h", "ḣ": "h", "ḧ": "h", "ȟ": "h", "ḥ": "h", "ḩ": "h", "ḫ": "h", "ẖ": "h", "ħ": "h", "ⱨ": "h", "ⱶ": "h", "ɥ": "h", "ƕ": "hv", "ⓘ": "i", "ｉ": "i", "ì": "i", "í": "i", "î": "i", "ĩ": "i", "ī": "i", "ĭ": "i", "ï": "i", "ḯ": "i", "ỉ": "i", "ǐ": "i", "ȉ": "i", "ȋ": "i", "ị": "i", "į": "i", "ḭ": "i", "ɨ": "i", "ı": "i", "ⓙ": "j", "ｊ": "j", "ĵ": "j", "ǰ": "j", "ɉ": "j", "ⓚ": "k", "ｋ": "k", "ḱ": "k", "ǩ": "k", "ḳ": "k", "ķ": "k", "ḵ": "k", "ƙ": "k", "ⱪ": "k", "ꝁ": "k", "ꝃ": "k", "ꝅ": "k", "ꞣ": "k", "ⓛ": "l", "ｌ": "l", "ŀ": "l", "ĺ": "l", "ľ": "l", "ḷ": "l", "ḹ": "l", "ļ": "l", "ḽ": "l", "ḻ": "l", "ſ": "l", "ł": "l", "ƚ": "l", "ɫ": "l", "ⱡ": "l", "ꝉ": "l", "ꞁ": "l", "ꝇ": "l", "ǉ": "lj", "ⓜ": "m", "ｍ": "m", "ḿ": "m", "ṁ": "m", "ṃ": "m", "ɱ": "m", "ɯ": "m", "ⓝ": "n", "ｎ": "n", "ǹ": "n", "ń": "n", "ñ": "n", "ṅ": "n", "ň": "n", "ṇ": "n", "ņ": "n", "ṋ": "n", "ṉ": "n", "ƞ": "n", "ɲ": "n", "ŉ": "n", "ꞑ": "n", "ꞥ": "n", "ǌ": "nj", "ⓞ": "o", "ｏ": "o", "ò": "o", "ó": "o", "ô": "o", "ồ": "o", "ố": "o", "ỗ": "o", "ổ": "o", "õ": "o", "ṍ": "o", "ȭ": "o", "ṏ": "o", "ō": "o", "ṑ": "o", "ṓ": "o", "ŏ": "o", "ȯ": "o", "ȱ": "o", "ö": "o", "ȫ": "o", "ỏ": "o", "ő": "o", "ǒ": "o", "ȍ": "o", "ȏ": "o", "ơ": "o", "ờ": "o", "ớ": "o", "ỡ": "o", "ở": "o", "ợ": "o", "ọ": "o", "ộ": "o", "ǫ": "o", "ǭ": "o", "ø": "o", "ǿ": "o", "ɔ": "o", "ꝋ": "o", "ꝍ": "o", "ɵ": "o", "ƣ": "oi", "ȣ": "ou", "ꝏ": "oo", "ⓟ": "p", "ｐ": "p", "ṕ": "p", "ṗ": "p", "ƥ": "p", "ᵽ": "p", "ꝑ": "p", "ꝓ": "p", "ꝕ": "p", "ⓠ": "q", "ｑ": "q", "ɋ": "q", "ꝗ": "q", "ꝙ": "q", "ⓡ": "r", "ｒ": "r", "ŕ": "r", "ṙ": "r", "ř": "r", "ȑ": "r", "ȓ": "r", "ṛ": "r", "ṝ": "r", "ŗ": "r", "ṟ": "r", "ɍ": "r", "ɽ": "r", "ꝛ": "r", "ꞧ": "r", "ꞃ": "r", "ⓢ": "s", "ｓ": "s", "ß": "s", "ś": "s", "ṥ": "s", "ŝ": "s", "ṡ": "s", "š": "s", "ṧ": "s", "ṣ": "s", "ṩ": "s", "ș": "s", "ş": "s", "ȿ": "s", "ꞩ": "s", "ꞅ": "s", "ẛ": "s", "ⓣ": "t", "ｔ": "t", "ṫ": "t", "ẗ": "t", "ť": "t", "ṭ": "t", "ț": "t", "ţ": "t", "ṱ": "t", "ṯ": "t", "ŧ": "t", "ƭ": "t", "ʈ": "t", "ⱦ": "t", "ꞇ": "t", "ꜩ": "tz", "ⓤ": "u", "ｕ": "u", "ù": "u", "ú": "u", "û": "u", "ũ": "u", "ṹ": "u", "ū": "u", "ṻ": "u", "ŭ": "u", "ü": "u", "ǜ": "u", "ǘ": "u", "ǖ": "u", "ǚ": "u", "ủ": "u", "ů": "u", "ű": "u", "ǔ": "u", "ȕ": "u", "ȗ": "u", "ư": "u", "ừ": "u", "ứ": "u", "ữ": "u", "ử": "u", "ự": "u", "ụ": "u", "ṳ": "u", "ų": "u", "ṷ": "u", "ṵ": "u", "ʉ": "u", "ⓥ": "v", "ｖ": "v", "ṽ": "v", "ṿ": "v", "ʋ": "v", "ꝟ": "v", "ʌ": "v", "ꝡ": "vy", "ⓦ": "w", "ｗ": "w", "ẁ": "w", "ẃ": "w", "ŵ": "w", "ẇ": "w", "ẅ": "w", "ẘ": "w", "ẉ": "w", "ⱳ": "w", "ⓧ": "x", "ｘ": "x", "ẋ": "x", "ẍ": "x", "ⓨ": "y", "ｙ": "y", "ỳ": "y", "ý": "y", "ŷ": "y", "ỹ": "y", "ȳ": "y", "ẏ": "y", "ÿ": "y", "ỷ": "y", "ẙ": "y", "ỵ": "y", "ƴ": "y", "ɏ": "y", "ỿ": "y", "ⓩ": "z", "ｚ": "z", "ź": "z", "ẑ": "z", "ż": "z", "ž": "z", "ẓ": "z", "ẕ": "z", "ƶ": "z", "ȥ": "z", "ɀ": "z", "ⱬ": "z", "ꝣ": "z", "Ά": "Α", "Έ": "Ε", "Ή": "Η", "Ί": "Ι", "Ϊ": "Ι", "Ό": "Ο", "Ύ": "Υ", "Ϋ": "Υ", "Ώ": "Ω", "ά": "α", "έ": "ε", "ή": "η", "ί": "ι", "ϊ": "ι", "ΐ": "ι", "ό": "ο", "ύ": "υ", "ϋ": "υ", "ΰ": "υ", "ω": "ω", "ς": "σ" } });
            t.define("select2/data/base", ["../utils"], function(n) {
                function t() { t.__super__.constructor.call(this) } return n.Extend(t, n.Observable), t.prototype.current = function() { throw new Error("The `current` method must be defined in child classes."); }, t.prototype.query = function() { throw new Error("The `query` method must be defined in child classes."); }, t.prototype.bind = function() {}, t.prototype.destroy = function() {}, t.prototype.generateResultId = function(t, i) { var r = t.id + "-result-"; return r += n.generateChars(4), r + (i.id != null ? "-" + i.id.toString() : "-" + n.generateChars(4)) }, t });
            t.define("select2/data/select", ["./base", "../utils", "jquery"], function(n, t, i) {
                function r(n, t) { this.$element = n;
                    this.options = t;
                    r.__super__.constructor.call(this) } return t.Extend(r, n), r.prototype.current = function(n) { var t = [],
                        r = this;
                    this.$element.find(":selected").each(function() { var n = i(this),
                            u = r.item(n);
                        t.push(u) });
                    n(t) }, r.prototype.select = function(n) { var t = this,
                        r; if (n.selected = !0, i(n.element).is("option")) { n.element.selected = !0;
                        this.$element.trigger("change"); return }
                    this.$element.prop("multiple") ? this.current(function(r) { var f = [],
                            u, e; for (n = [n], n.push.apply(n, r), u = 0; u < n.length; u++) e = n[u].id, i.inArray(e, f) === -1 && f.push(e);
                        t.$element.val(f);
                        t.$element.trigger("change") }) : (r = n.id, this.$element.val(r), this.$element.trigger("change")) }, r.prototype.unselect = function(n) { var t = this; if (this.$element.prop("multiple")) { if (n.selected = !1, i(n.element).is("option")) { n.element.selected = !1;
                            this.$element.trigger("change"); return }
                        this.current(function(r) { for (var u, f = [], e = 0; e < r.length; e++) u = r[e].id, u !== n.id && i.inArray(u, f) === -1 && f.push(u);
                            t.$element.val(f);
                            t.$element.trigger("change") }) } }, r.prototype.bind = function(n) { var t = this;
                    this.container = n;
                    n.on("select", function(n) { t.select(n.data) });
                    n.on("unselect", function(n) { t.unselect(n.data) }) }, r.prototype.destroy = function() { this.$element.find("*").each(function() { t.RemoveData(this) }) }, r.prototype.query = function(n, t) { var r = [],
                        u = this,
                        f = this.$element.children();
                    f.each(function() { var t = i(this),
                            e, f;
                        (t.is("option") || t.is("optgroup")) && (e = u.item(t), f = u.matches(n, e), f !== null && r.push(f)) });
                    t({ results: r }) }, r.prototype.addOptions = function(n) { t.appendMany(this.$element, n) }, r.prototype.option = function(n) { var r, f, u; return n.children ? (r = document.createElement("optgroup"), r.label = n.text) : (r = document.createElement("option"), r.textContent !== undefined ? r.textContent = n.text : r.innerText = n.text), n.id !== undefined && (r.value = n.id), n.disabled && (r.disabled = !0), n.selected && (r.selected = !0), n.title && (r.title = n.title), f = i(r), u = this._normalizeItem(n), u.element = r, t.StoreData(r, "data", u), f }, r.prototype.item = function(n) { var r = {},
                        f, e, u, o, s; if (r = t.GetData(n[0], "data"), r != null) return r; if (n.is("option")) r = { id: n.val(), text: n.text(), disabled: n.prop("disabled"), selected: n.prop("selected"), title: n.prop("title") };
                    else if (n.is("optgroup")) { for (r = { text: n.prop("label"), children: [], title: n.prop("title") }, f = n.children("option"), e = [], u = 0; u < f.length; u++) o = i(f[u]), s = this.item(o), e.push(s);
                        r.children = e } return r = this._normalizeItem(r), r.element = n[0], t.StoreData(n[0], "data", r), r }, r.prototype._normalizeItem = function(n) { n !== Object(n) && (n = { id: n, text: n });
                    n = i.extend({}, { text: "" }, n); return n.id != null && (n.id = n.id.toString()), n.text != null && (n.text = n.text.toString()), n._resultId == null && n.id && this.container != null && (n._resultId = this.generateResultId(this.container, n)), i.extend({}, { selected: !1, disabled: !1 }, n) }, r.prototype.matches = function(n, t) { var i = this.options.get("matcher"); return i(n, t) }, r });
            t.define("select2/data/array", ["./select", "../utils", "jquery"], function(n, t, i) {
                function r(n, t) { var i = t.get("data") || [];
                    r.__super__.constructor.call(this, n, t);
                    this.addOptions(this.convertToOptions(i)) } return t.Extend(r, n), r.prototype.select = function(n) { var t = this.$element.find("option").filter(function(t, i) { return i.value == n.id.toString() });
                    t.length === 0 && (t = this.option(n), this.addOptions(t));
                    r.__super__.select.call(this, n) }, r.prototype.convertToOptions = function(n) {
                    function a(n) { return function() { return i(this).val() == n.id } } for (var r, f, h, c = this, e = this.$element.find("option"), l = e.map(function() { return c.item(i(this)).id }).get(), o = [], u = 0; u < n.length; u++) { if (r = this._normalizeItem(n[u]), i.inArray(r.id, l) >= 0) { var s = e.filter(a(r)),
                                v = this.item(s),
                                y = i.extend(!0, {}, r, v),
                                p = this.option(y);
                            s.replaceWith(p); continue }
                        f = this.option(r);
                        r.children && (h = this.convertToOptions(r.children), t.appendMany(f, h));
                        o.push(f) } return o }, r });
            t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(n, t, i) {
                function r(n, t) { this.ajaxOptions = this._applyDefaults(t.get("ajax"));
                    this.ajaxOptions.processResults != null && (this.processResults = this.ajaxOptions.processResults);
                    r.__super__.constructor.call(this, n, t) } return t.Extend(r, n), r.prototype._applyDefaults = function(n) { var t = { data: function(n) { return i.extend({}, n, { q: n.term }) }, transport: function(n, t, r) { var u = i.ajax(n); return u.then(t), u.fail(r), u } }; return i.extend({}, t, n, !0) }, r.prototype.processResults = function(n) { return n }, r.prototype.query = function(n, t) {
                    function f() { var f = r.transport(r, function(r) { var f = u.processResults(r, n);
                            u.options.get("debug") && window.console && console.error && (f && f.results && i.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response."));
                            t(f) }, function() { "status" in f && (f.status === 0 || f.status === "0") || u.trigger("results:message", { message: "errorLoading" }) });
                        u._request = f } var u = this,
                        r;
                    this._request != null && (i.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                    r = i.extend({ type: "GET" }, this.ajaxOptions);
                    typeof r.url == "function" && (r.url = r.url.call(this.$element, n));
                    typeof r.data == "function" && (r.data = r.data.call(this.$element, n));
                    this.ajaxOptions.delay && n.term != null ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(f, this.ajaxOptions.delay)) : f() }, r });
            t.define("select2/data/tags", ["jquery"], function(n) {
                function t(t, i, r) { var f = r.get("tags"),
                        o = r.get("createTag"),
                        e, u; if (o !== undefined && (this.createTag = o), e = r.get("insertTag"), e !== undefined && (this.insertTag = e), t.call(this, i, r), n.isArray(f))
                        for (u = 0; u < f.length; u++) { var s = f[u],
                                h = this._normalizeItem(s),
                                c = this.option(h);
                            this.$element.append(c) } } return t.prototype.query = function(n, t, i) {
                    function u(n, f) { for (var o, c, e = n.results, s = 0; s < e.length; s++) { var h = e[s],
                                l = h.children != null && !u({ results: h.children }, !0),
                                a = (h.text || "").toUpperCase(),
                                v = (t.term || "").toUpperCase(),
                                y = a === v; if (y || l) { if (f) return !1;
                                n.data = e;
                                i(n); return } } if (f) return !0;
                        o = r.createTag(t);
                        o != null && (c = r.option(o), c.attr("data-select2-tag", !0), r.addOptions([c]), r.insertTag(e, o));
                        n.results = e;
                        i(n) } var r = this; if (this._removeOldTags(), t.term == null || t.page != null) { n.call(this, t, i); return }
                    n.call(this, t, u) }, t.prototype.createTag = function(t, i) { var r = n.trim(i.term); return r === "" ? null : { id: r, text: r } }, t.prototype.insertTag = function(n, t, i) { t.unshift(i) }, t.prototype._removeOldTags = function() { var i = this._lastTag,
                        t = this.$element.find("option[data-select2-tag]");
                    t.each(function() { this.selected || n(this).remove() }) }, t });
            t.define("select2/data/tokenizer", ["jquery"], function(n) {
                function t(n, t, i) { var r = i.get("tokenizer");
                    r !== undefined && (this.tokenizer = r);
                    n.call(this, t, i) } return t.prototype.bind = function(n, t, i) { n.call(this, t, i);
                    this.$search = t.dropdown.$search || t.selection.$search || i.find(".select2-search__field") }, t.prototype.query = function(t, i, r) {
                    function e(t) { var i = u._normalizeItem(t),
                            f = u.$element.find("option").filter(function() { return n(this).val() === i.id }),
                            r;
                        f.length || (r = u.option(i), r.attr("data-select2-tag", !0), u._removeOldTags(), u.addOptions([r]));
                        o(i) }

                    function o(n) { u.trigger("select", { data: n }) } var u = this,
                        f;
                    i.term = i.term || "";
                    f = this.tokenizer(i, this.options, e);
                    f.term !== i.term && (this.$search.length && (this.$search.val(f.term), this.$search.focus()), i.term = f.term);
                    t.call(this, i, r) }, t.prototype.tokenizer = function(t, i, r, u) { for (var h = r.get("tokenSeparators") || [], e = i.term, f = 0, c = this.createTag || function(n) { return { id: n.term, text: n.term } }, o; f < e.length;) { if (o = e[f], n.inArray(o, h) === -1) { f++; continue } var l = e.substr(0, f),
                            a = n.extend({}, i, { term: l }),
                            s = c(a); if (s == null) { f++; continue }
                        u(s);
                        e = e.substr(f + 1) || "";
                        f = 0 } return { term: e } }, t });
            t.define("select2/data/minimumInputLength", [], function() {
                function n(n, t, i) { this.minimumInputLength = i.get("minimumInputLength");
                    n.call(this, t, i) } return n.prototype.query = function(n, t, i) { if (t.term = t.term || "", t.term.length < this.minimumInputLength) { this.trigger("results:message", { message: "inputTooShort", args: { minimum: this.minimumInputLength, input: t.term, params: t } }); return }
                    n.call(this, t, i) }, n });
            t.define("select2/data/maximumInputLength", [], function() {
                function n(n, t, i) { this.maximumInputLength = i.get("maximumInputLength");
                    n.call(this, t, i) } return n.prototype.query = function(n, t, i) { if (t.term = t.term || "", this.maximumInputLength > 0 && t.term.length > this.maximumInputLength) { this.trigger("results:message", { message: "inputTooLong", args: { maximum: this.maximumInputLength, input: t.term, params: t } }); return }
                    n.call(this, t, i) }, n });
            t.define("select2/data/maximumSelectionLength", [], function() {
                function n(n, t, i) { this.maximumSelectionLength = i.get("maximumSelectionLength");
                    n.call(this, t, i) } return n.prototype.query = function(n, t, i) { var r = this;
                    this.current(function(u) { var f = u != null ? u.length : 0; if (r.maximumSelectionLength > 0 && f >= r.maximumSelectionLength) { r.trigger("results:message", { message: "maximumSelected", args: { maximum: r.maximumSelectionLength } }); return }
                        n.call(r, t, i) }) }, n });
            t.define("select2/dropdown", ["jquery", "./utils"], function(n, t) {
                function i(n, t) { this.$element = n;
                    this.options = t;
                    i.__super__.constructor.call(this) } return t.Extend(i, t.Observable), i.prototype.render = function() { var t = n('<span class="select2-dropdown"><span class="select2-results"><\/span><\/span>'); return t.attr("dir", this.options.get("dir")), this.$dropdown = t, t }, i.prototype.bind = function() {}, i.prototype.position = function() {}, i.prototype.destroy = function() { this.$dropdown.remove() }, i });
            t.define("select2/dropdown/search", ["jquery", "../utils"], function(n) {
                function t() {} return t.prototype.render = function(t) { var r = t.call(this),
                        i = n('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /><\/span>'); return this.$searchContainer = i, this.$search = i.find("input"), r.prepend(i), r }, t.prototype.bind = function(t, i, r) { var u = this;
                    t.call(this, i, r);
                    this.$search.on("keydown", function(n) { u.trigger("keypress", n);
                        u._keyUpPrevented = n.isDefaultPrevented() });
                    this.$search.on("input", function() { n(this).off("keyup") });
                    this.$search.on("keyup input", function(n) { u.handleSearch(n) });
                    i.on("open", function() { u.$search.attr("tabindex", 0);
                        u.$search.focus();
                        window.setTimeout(function() { u.$search.focus() }, 0) });
                    i.on("close", function() { u.$search.attr("tabindex", -1);
                        u.$search.val("");
                        u.$search.blur() });
                    i.on("focus", function() { i.isOpen() || u.$search.focus() });
                    i.on("results:all", function(n) { if (n.query.term == null || n.query.term === "") { var t = u.showSearch(n);
                            t ? u.$searchContainer.removeClass("select2-search--hide") : u.$searchContainer.addClass("select2-search--hide") } }) }, t.prototype.handleSearch = function() { if (!this._keyUpPrevented) { var n = this.$search.val();
                        this.trigger("query", { term: n }) }
                    this._keyUpPrevented = !1 }, t.prototype.showSearch = function() { return !0 }, t });
            t.define("select2/dropdown/hidePlaceholder", [], function() {
                function n(n, t, i, r) { this.placeholder = this.normalizePlaceholder(i.get("placeholder"));
                    n.call(this, t, i, r) } return n.prototype.append = function(n, t) { t.results = this.removePlaceholder(t.results);
                    n.call(this, t) }, n.prototype.normalizePlaceholder = function(n, t) { return typeof t == "string" && (t = { id: "", text: t }), t }, n.prototype.removePlaceholder = function(n, t) { for (var u, r = t.slice(0), i = t.length - 1; i >= 0; i--) u = t[i], this.placeholder.id === u.id && r.splice(i, 1); return r }, n });
            t.define("select2/dropdown/infiniteScroll", ["jquery"], function(n) {
                function t(n, t, i, r) { this.lastParams = {};
                    n.call(this, t, i, r);
                    this.$loadingMore = this.createLoadingMore();
                    this.loading = !1 } return t.prototype.append = function(n, t) { this.$loadingMore.remove();
                    this.loading = !1;
                    n.call(this, t);
                    this.showLoadingMore(t) && this.$results.append(this.$loadingMore) }, t.prototype.bind = function(t, i, r) { var u = this;
                    t.call(this, i, r);
                    i.on("query", function(n) { u.lastParams = n;
                        u.loading = !0 });
                    i.on("query:append", function(n) { u.lastParams = n;
                        u.loading = !0 });
                    this.$results.on("scroll", function() { var r = n.contains(document.documentElement, u.$loadingMore[0]),
                            t, i;!u.loading && r && (t = u.$results.offset().top + u.$results.outerHeight(!1), i = u.$loadingMore.offset().top + u.$loadingMore.outerHeight(!1), t + 50 >= i && u.loadMore()) }) }, t.prototype.loadMore = function() { this.loading = !0; var t = n.extend({}, { page: 1 }, this.lastParams);
                    t.page++;
                    this.trigger("query:append", t) }, t.prototype.showLoadingMore = function(n, t) { return t.pagination && t.pagination.more }, t.prototype.createLoadingMore = function() { var t = n('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"><\/li>'),
                        i = this.options.get("translations").get("loadingMore"); return t.html(i(this.lastParams)), t }, t });
            t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(n, t) {
                function i(t, i, r) { this.$dropdownParent = r.get("dropdownParent") || n(document.body);
                    t.call(this, i, r) } return i.prototype.bind = function(n, t, i) { var r = this,
                        u = !1;
                    n.call(this, t, i);
                    t.on("open", function() { if (r._showDropdown(), r._attachPositioningHandler(t), !u) { u = !0;
                            t.on("results:all", function() { r._positionDropdown();
                                r._resizeDropdown() });
                            t.on("results:append", function() { r._positionDropdown();
                                r._resizeDropdown() }) } });
                    t.on("close", function() { r._hideDropdown();
                        r._detachPositioningHandler(t) });
                    this.$dropdownContainer.on("mousedown", function(n) { n.stopPropagation() }) }, i.prototype.destroy = function(n) { n.call(this);
                    this.$dropdownContainer.remove() }, i.prototype.position = function(n, t, i) { t.attr("class", i.attr("class"));
                    t.removeClass("select2");
                    t.addClass("select2-container--open");
                    t.css({ position: "absolute", top: -999999 });
                    this.$container = i }, i.prototype.render = function(t) { var i = n("<span><\/span>"),
                        r = t.call(this); return i.append(r), this.$dropdownContainer = i, i }, i.prototype._hideDropdown = function() { this.$dropdownContainer.detach() }, i.prototype._attachPositioningHandler = function(i, r) { var u = this,
                        f = "scroll.select2." + r.id,
                        o = "resize.select2." + r.id,
                        s = "orientationchange.select2." + r.id,
                        e = this.$container.parents().filter(t.hasScroll);
                    e.each(function() { t.StoreData(this, "select2-scroll-position", { x: n(this).scrollLeft(), y: n(this).scrollTop() }) });
                    e.on(f, function() { var i = t.GetData(this, "select2-scroll-position");
                        n(this).scrollTop(i.y) });
                    n(window).on(f + " " + o + " " + s, function() { u._positionDropdown();
                        u._resizeDropdown() }) }, i.prototype._detachPositioningHandler = function(i, r) { var u = "scroll.select2." + r.id,
                        f = "resize.select2." + r.id,
                        e = "orientationchange.select2." + r.id,
                        o = this.$container.parents().filter(t.hasScroll);
                    o.off(u);
                    n(window).off(u + " " + f + " " + e) }, i.prototype._positionDropdown = function() { var s = n(window),
                        u = this.$dropdown.hasClass("select2-dropdown--above"),
                        v = this.$dropdown.hasClass("select2-dropdown--below"),
                        t = null,
                        i = this.$container.offset(),
                        r, o;
                    i.bottom = i.top + this.$container.outerHeight(!1);
                    r = { height: this.$container.outerHeight(!1) };
                    r.top = i.top;
                    r.bottom = i.top + r.height; var h = { height: this.$dropdown.outerHeight(!1) },
                        c = { top: s.scrollTop(), bottom: s.scrollTop() + s.height() },
                        l = c.top < i.top - h.height,
                        a = c.bottom > i.bottom + h.height,
                        f = { left: i.left, top: r.bottom },
                        e = this.$dropdownParent;
                    e.css("position") === "static" && (e = e.offsetParent());
                    o = e.offset();
                    f.top -= o.top;
                    f.left -= o.left;
                    u || v || (t = "below");
                    a || !l || u ? !l && a && u && (t = "below") : t = "above";
                    (t == "above" || u && t !== "below") && (f.top = r.top - o.top - h.height);
                    t != null && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + t), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + t));
                    this.$dropdownContainer.css(f) }, i.prototype._resizeDropdown = function() { var n = { width: this.$container.outerWidth(!1) + "px" };
                    this.options.get("dropdownAutoWidth") && (n.minWidth = n.width, n.position = "relative", n.width = "auto");
                    this.$dropdown.css(n) }, i.prototype._showDropdown = function() { this.$dropdownContainer.appendTo(this.$dropdownParent);
                    this._positionDropdown();
                    this._resizeDropdown() }, i });
            t.define("select2/dropdown/minimumResultsForSearch", [], function() {
                function n(t) { for (var u, i = 0, r = 0; r < t.length; r++) u = t[r], u.children ? i += n(u.children) : i++; return i }

                function t(n, t, i, r) { this.minimumResultsForSearch = i.get("minimumResultsForSearch");
                    this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = Infinity);
                    n.call(this, t, i, r) } return t.prototype.showSearch = function(t, i) { return n(i.data.results) < this.minimumResultsForSearch ? !1 : t.call(this, i) }, t });
            t.define("select2/dropdown/selectOnClose", ["../utils"], function(n) {
                function t() {} return t.prototype.bind = function(n, t, i) { var r = this;
                    n.call(this, t, i);
                    t.on("close", function(n) { r._handleSelectOnClose(n) }) }, t.prototype._handleSelectOnClose = function(t, i) { var u, f, r;
                    i && i.originalSelect2Event != null && (u = i.originalSelect2Event, u._type === "select" || u._type === "unselect") || (f = this.getHighlightedResults(), f.length < 1) || (r = n.GetData(f[0], "data"), r.element != null && r.element.selected || r.element == null && r.selected) || this.trigger("select", { data: r }) }, t });
            t.define("select2/dropdown/closeOnSelect", [], function() {
                function n() {} return n.prototype.bind = function(n, t, i) { var r = this;
                    n.call(this, t, i);
                    t.on("select", function(n) { r._selectTriggered(n) });
                    t.on("unselect", function(n) { r._selectTriggered(n) }) }, n.prototype._selectTriggered = function(n, t) { var i = t.originalEvent;
                    i && i.ctrlKey || this.trigger("close", { originalEvent: i, originalSelect2Event: t }) }, n });
            t.define("select2/i18n/en", [], function() { return { errorLoading: function() { return "The results could not be loaded." }, inputTooLong: function(n) { var t = n.input.length - n.maximum,
                            i = "Please delete " + t + " character"; return t != 1 && (i += "s"), i }, inputTooShort: function(n) { var t = n.minimum - n.input.length; return "Please enter " + t + " or more characters" }, loadingMore: function() { return "Loading more results…" }, maximumSelected: function(n) { var t = "You can only select " + n.maximum + " item"; return n.maximum != 1 && (t += "s"), t }, noResults: function() { return "No results found" }, searching: function() { return "Searching…" } } });
            t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft, et, ot) {
                function st() { this.reset() }
                st.prototype.apply = function(l) { var vt, yt, pt, wt, bt, kt, dt, ct, lt, st, ot, ht, gt, at; if (l = n.extend(!0, {}, this.defaults, l), l.dataAdapter == null && (l.dataAdapter = l.ajax != null ? y : l.data != null ? v : a, l.minimumInputLength > 0 && (l.dataAdapter = h.Decorate(l.dataAdapter, b)), l.maximumInputLength > 0 && (l.dataAdapter = h.Decorate(l.dataAdapter, k)), l.maximumSelectionLength > 0 && (l.dataAdapter = h.Decorate(l.dataAdapter, d)), l.tags && (l.dataAdapter = h.Decorate(l.dataAdapter, p)), (l.tokenSeparators != null || l.tokenizer != null) && (l.dataAdapter = h.Decorate(l.dataAdapter, w)), l.query != null && (vt = t(l.amdBase + "compat/query"), l.dataAdapter = h.Decorate(l.dataAdapter, vt)), l.initSelection != null && (yt = t(l.amdBase + "compat/initSelection"), l.dataAdapter = h.Decorate(l.dataAdapter, yt))), l.resultsAdapter == null && (l.resultsAdapter = i, l.ajax != null && (l.resultsAdapter = h.Decorate(l.resultsAdapter, it)), l.placeholder != null && (l.resultsAdapter = h.Decorate(l.resultsAdapter, tt)), l.selectOnClose && (l.resultsAdapter = h.Decorate(l.resultsAdapter, ft))), l.dropdownAdapter == null && (l.multiple ? l.dropdownAdapter = g : (pt = h.Decorate(g, nt), l.dropdownAdapter = pt), l.minimumResultsForSearch !== 0 && (l.dropdownAdapter = h.Decorate(l.dropdownAdapter, ut)), l.closeOnSelect && (l.dropdownAdapter = h.Decorate(l.dropdownAdapter, et)), (l.dropdownCssClass != null || l.dropdownCss != null || l.adaptDropdownCssClass != null) && (wt = t(l.amdBase + "compat/dropdownCss"), l.dropdownAdapter = h.Decorate(l.dropdownAdapter, wt)), l.dropdownAdapter = h.Decorate(l.dropdownAdapter, rt)), l.selectionAdapter == null && (l.selectionAdapter = l.multiple ? u : r, l.placeholder != null && (l.selectionAdapter = h.Decorate(l.selectionAdapter, f)), l.allowClear && (l.selectionAdapter = h.Decorate(l.selectionAdapter, e)), l.multiple && (l.selectionAdapter = h.Decorate(l.selectionAdapter, o)), (l.containerCssClass != null || l.containerCss != null || l.adaptContainerCssClass != null) && (bt = t(l.amdBase + "compat/containerCss"), l.selectionAdapter = h.Decorate(l.selectionAdapter, bt)), l.selectionAdapter = h.Decorate(l.selectionAdapter, s)), typeof l.language == "string" && (l.language.indexOf("-") > 0 ? (kt = l.language.split("-"), dt = kt[0], l.language = [l.language, dt]) : l.language = [l.language]), n.isArray(l.language)) { for (ct = new c, l.language.push("en"), lt = l.language, st = 0; st < lt.length; st++) { ot = lt[st];
                            ht = {}; try { ht = c.loadPath(ot) } catch (ni) { try { ot = this.defaults.amdLanguageBase + ot;
                                    ht = c.loadPath(ot) } catch (ti) { l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + ot + '" could not be automatically loaded. A fallback will be used instead.'); continue } }
                            ct.extend(ht) }
                        l.translations = ct } else gt = c.loadPath(this.defaults.amdLanguageBase + "en"), at = new c(l.language), at.extend(gt), l.translations = at; return l };
                st.prototype.reset = function() {
                    function i(n) {
                        function t(n) { return l[n] || n } return n.replace(/[^\u0000-\u007E]/g, t) }

                    function t(r, u) { var f, e, o, s, h, c; if (n.trim(r.term) === "") return u; if (u.children && u.children.length > 0) { for (f = n.extend(!0, {}, u), e = u.children.length - 1; e >= 0; e--) o = u.children[e], s = t(r, o), s == null && f.children.splice(e, 1); return f.children.length > 0 ? f : t(r, f) } return (h = i(u.text).toUpperCase(), c = i(r.term).toUpperCase(), h.indexOf(c) > -1) ? u : null }
                    this.defaults = { amdBase: "./", amdLanguageBase: "./i18n/", closeOnSelect: !0, debug: !1, dropdownAutoWidth: !1, escapeMarkup: h.escapeMarkup, language: ot, matcher: t, minimumInputLength: 0, maximumInputLength: 0, maximumSelectionLength: 0, minimumResultsForSearch: 0, selectOnClose: !1, sorter: function(n) { return n }, templateResult: function(n) { return n.text }, templateSelection: function(n) { return n.text }, theme: "default", width: "resolve" } };
                st.prototype.set = function(t, i) { var f = n.camelCase(t),
                        r = {},
                        u;
                    r[f] = i;
                    u = h._convertData(r);
                    n.extend(!0, this.defaults, u) }; return new st });
            t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(n, t, i, r) {
                function u(t, u) { if (this.options = t, u != null && this.fromElement(u), this.options = i.apply(this.options), u && u.is("input")) { var f = n(this.get("amdBase") + "compat/inputData");
                        this.options.dataAdapter = r.Decorate(this.options.dataAdapter, f) } } return u.prototype.fromElement = function(n) { var e = ["select2"],
                        f, u, i;
                    this.options.multiple == null && (this.options.multiple = n.prop("multiple"));
                    this.options.disabled == null && (this.options.disabled = n.prop("disabled"));
                    this.options.language == null && (n.prop("lang") ? this.options.language = n.prop("lang").toLowerCase() : n.closest("[lang]").prop("lang") && (this.options.language = n.closest("[lang]").prop("lang")));
                    this.options.dir == null && (this.options.dir = n.prop("dir") ? n.prop("dir") : n.closest("[dir]").prop("dir") ? n.closest("[dir]").prop("dir") : "ltr");
                    n.prop("disabled", this.options.disabled);
                    n.prop("multiple", this.options.multiple);
                    r.GetData(n[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), r.StoreData(n[0], "data", r.GetData(n[0], "select2Tags")), r.StoreData(n[0], "tags", !0));
                    r.GetData(n[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), n.attr("ajax--url", r.GetData(n[0], "ajaxUrl")), r.StoreData(n[0], "ajax-Url", r.GetData(n[0], "ajaxUrl")));
                    f = {};
                    f = t.fn.jquery && t.fn.jquery.substr(0, 2) == "1." && n[0].dataset ? t.extend(!0, {}, n[0].dataset, r.GetData(n[0])) : r.GetData(n[0]);
                    u = t.extend(!0, {}, f);
                    u = r._convertData(u); for (i in u) t.inArray(i, e) > -1 || (t.isPlainObject(this.options[i]) ? t.extend(this.options[i], u[i]) : this.options[i] = u[i]); return this }, u.prototype.get = function(n) { return this.options[n] }, u.prototype.set = function(n, t) { this.options[n] = t }, u });
            t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(n, t, i, r) { var u = function(n, r) { var e, o, f, s, h, c, l;
                    i.GetData(n[0], "select2") != null && i.GetData(n[0], "select2").destroy();
                    this.$element = n;
                    this.id = this._generateId(n);
                    r = r || {};
                    this.options = new t(r, n);
                    u.__super__.constructor.call(this);
                    e = n.attr("tabindex") || 0;
                    i.StoreData(n[0], "old-tabindex", e);
                    n.attr("tabindex", "-1");
                    o = this.options.get("dataAdapter");
                    this.dataAdapter = new o(n, this.options);
                    f = this.render();
                    this._placeContainer(f);
                    s = this.options.get("selectionAdapter");
                    this.selection = new s(n, this.options);
                    this.$selection = this.selection.render();
                    this.selection.position(this.$selection, f);
                    h = this.options.get("dropdownAdapter");
                    this.dropdown = new h(n, this.options);
                    this.$dropdown = this.dropdown.render();
                    this.dropdown.position(this.$dropdown, f);
                    c = this.options.get("resultsAdapter");
                    this.results = new c(n, this.options, this.dataAdapter);
                    this.$results = this.results.render();
                    this.results.position(this.$results, this.$dropdown);
                    l = this;
                    this._bindAdapters();
                    this._registerDomEvents();
                    this._registerDataEvents();
                    this._registerSelectionEvents();
                    this._registerDropdownEvents();
                    this._registerResultsEvents();
                    this._registerEvents();
                    this.dataAdapter.current(function(n) { l.trigger("selection:update", { data: n }) });
                    n.addClass("select2-hidden-accessible");
                    n.attr("aria-hidden", "true");
                    this._syncAttributes();
                    i.StoreData(n[0], "select2", this);
                    n.data("select2", this) }; return i.Extend(u, i.Observable), u.prototype._generateId = function(n) { var t = ""; return t = n.attr("id") != null ? n.attr("id") : n.attr("name") != null ? n.attr("name") + "-" + i.generateChars(2) : i.generateChars(4), t = t.replace(/(:|\.|\[|\]|,)/g, ""), "select2-" + t }, u.prototype._placeContainer = function(n) { n.insertAfter(this.$element); var t = this._resolveWidth(this.$element, this.options.get("width"));
                    t != null && n.css("width", t) }, u.prototype._resolveWidth = function(n, t) { var u, f, e, o, i, s, h, r; if (t == "resolve") return (u = this._resolveWidth(n, "style"), u != null) ? u : this._resolveWidth(n, "element"); if (t == "element") return (f = n.outerWidth(!1), f <= 0) ? "auto" : f + "px"; if (t == "style") { if (e = n.attr("style"), typeof e != "string") return null; for (o = e.split(";"), i = 0, s = o.length; i < s; i = i + 1)
                            if (h = o[i].replace(/\s/g, ""), r = h.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), r !== null && r.length >= 1) return r[1];
                        return null } return t }, u.prototype._bindAdapters = function() { this.dataAdapter.bind(this, this.$container);
                    this.selection.bind(this, this.$container);
                    this.dropdown.bind(this, this.$container);
                    this.results.bind(this, this.$container) }, u.prototype._registerDomEvents = function() { var t = this,
                        r;
                    this.$element.on("change.select2", function() { t.dataAdapter.current(function(n) { t.trigger("selection:update", { data: n }) }) });
                    this.$element.on("focus.select2", function(n) { t.trigger("focus", n) });
                    this._syncA = i.bind(this._syncAttributes, this);
                    this._syncS = i.bind(this._syncSubtree, this);
                    this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                    r = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                    r != null ? (this._observer = new r(function(i) { n.each(i, t._syncA);
                        n.each(i, t._syncS) }), this._observer.observe(this.$element[0], { attributes: !0, childList: !0, subtree: !1 })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1)) }, u.prototype._registerDataEvents = function() { var n = this;
                    this.dataAdapter.on("*", function(t, i) { n.trigger(t, i) }) }, u.prototype._registerSelectionEvents = function() { var t = this,
                        i = ["toggle", "focus"];
                    this.selection.on("toggle", function() { t.toggleDropdown() });
                    this.selection.on("focus", function(n) { t.focus(n) });
                    this.selection.on("*", function(r, u) { n.inArray(r, i) === -1 && t.trigger(r, u) }) }, u.prototype._registerDropdownEvents = function() { var n = this;
                    this.dropdown.on("*", function(t, i) { n.trigger(t, i) }) }, u.prototype._registerResultsEvents = function() { var n = this;
                    this.results.on("*", function(t, i) { n.trigger(t, i) }) }, u.prototype._registerEvents = function() { var n = this;
                    this.on("open", function() { n.$container.addClass("select2-container--open") });
                    this.on("close", function() { n.$container.removeClass("select2-container--open") });
                    this.on("enable", function() { n.$container.removeClass("select2-container--disabled") });
                    this.on("disable", function() { n.$container.addClass("select2-container--disabled") });
                    this.on("blur", function() { n.$container.removeClass("select2-container--focus") });
                    this.on("query", function(t) { n.isOpen() || n.trigger("open", {});
                        this.dataAdapter.query(t, function(i) { n.trigger("results:all", { data: i, query: t }) }) });
                    this.on("query:append", function(t) { this.dataAdapter.query(t, function(i) { n.trigger("results:append", { data: i, query: t }) }) });
                    this.on("keypress", function(t) { var i = t.which;
                        n.isOpen() ? i === r.ESC || i === r.TAB || i === r.UP && t.altKey ? (n.close(), t.preventDefault()) : i === r.ENTER ? (n.trigger("results:select", {}), t.preventDefault()) : i === r.SPACE && t.ctrlKey ? (n.trigger("results:toggle", {}), t.preventDefault()) : i === r.UP ? (n.trigger("results:previous", {}), t.preventDefault()) : i === r.DOWN && (n.trigger("results:next", {}), t.preventDefault()) : (i === r.ENTER || i === r.SPACE || i === r.DOWN && t.altKey) && (n.open(), t.preventDefault()) }) }, u.prototype._syncAttributes = function() { this.options.set("disabled", this.$element.prop("disabled"));
                    this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {}) }, u.prototype._syncSubtree = function(n, t) { var i = !1,
                        f = this,
                        r, u; if (!n || !n.target || n.target.nodeName === "OPTION" || n.target.nodeName === "OPTGROUP") { if (t)
                            if (t.addedNodes && t.addedNodes.length > 0)
                                for (r = 0; r < t.addedNodes.length; r++) u = t.addedNodes[r], u.selected && (i = !0);
                            else t.removedNodes && t.removedNodes.length > 0 && (i = !0);
                        else i = !0;
                        i && this.dataAdapter.current(function(n) { f.trigger("selection:update", { data: n }) }) } }, u.prototype.trigger = function(n, t) { var r = u.__super__.trigger,
                        f = { open: "opening", close: "closing", select: "selecting", unselect: "unselecting", clear: "clearing" },
                        e, i; if (t === undefined && (t = {}), n in f && (e = f[n], i = { prevented: !1, name: n, args: t }, r.call(this, e, i), i.prevented)) { t.prevented = !0; return }
                    r.call(this, n, t) }, u.prototype.toggleDropdown = function() { this.options.get("disabled") || (this.isOpen() ? this.close() : this.open()) }, u.prototype.open = function() { this.isOpen() || this.trigger("query", {}) }, u.prototype.close = function() { this.isOpen() && this.trigger("close", {}) }, u.prototype.isOpen = function() { return this.$container.hasClass("select2-container--open") }, u.prototype.hasFocus = function() { return this.$container.hasClass("select2-container--focus") }, u.prototype.focus = function() { this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {})) }, u.prototype.enable = function(n) { this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.');
                    (n == null || n.length === 0) && (n = [!0]); var t = !n[0];
                    this.$element.prop("disabled", t) }, u.prototype.data = function() { this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'); var n = []; return this.dataAdapter.current(function(t) { n = t }), n }, u.prototype.val = function(t) { if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), t == null || t.length === 0) return this.$element.val(); var i = t[0];
                    n.isArray(i) && (i = n.map(i, function(n) { return n.toString() }));
                    this.$element.val(i).trigger("change") }, u.prototype.destroy = function() { this.$container.remove();
                    this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA);
                    this._observer != null ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1));
                    this._syncA = null;
                    this._syncS = null;
                    this.$element.off(".select2");
                    this.$element.attr("tabindex", i.GetData(this.$element[0], "old-tabindex"));
                    this.$element.removeClass("select2-hidden-accessible");
                    this.$element.attr("aria-hidden", "false");
                    i.RemoveData(this.$element[0]);
                    this.$element.removeData("select2");
                    this.dataAdapter.destroy();
                    this.selection.destroy();
                    this.dropdown.destroy();
                    this.results.destroy();
                    this.dataAdapter = null;
                    this.selection = null;
                    this.dropdown = null;
                    this.results = null }, u.prototype.render = function() { var t = n('<span class="select2 select2-container"><span class="selection"><\/span><span class="dropdown-wrapper" aria-hidden="true"><\/span><\/span>'); return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), i.StoreData(t[0], "element", this.$element), t }, u });
            t.define("select2/compat/utils", ["jquery"], function(n) {
                function t(t, i, r) { var u, f = [],
                        e;
                    u = n.trim(t.attr("class"));
                    u && (u = "" + u, n(u.split(/\s+/)).each(function() { this.indexOf("select2-") === 0 && f.push(this) }));
                    u = n.trim(i.attr("class"));
                    u && (u = "" + u, n(u.split(/\s+/)).each(function() { this.indexOf("select2-") !== 0 && (e = r(this), e != null && f.push(e)) }));
                    t.attr("class", f.join(" ")) } return { syncCssClasses: t } });
            t.define("select2/compat/containerCss", ["jquery", "./utils"], function(n, t) {
                function r() { return null }

                function i() {} return i.prototype.render = function(i) { var o = i.call(this),
                        u = this.options.get("containerCssClass") || "",
                        f, s, e; return n.isFunction(u) && (u = u(this.$element)), f = this.options.get("adaptContainerCssClass"), f = f || r, u.indexOf(":all:") !== -1 && (u = u.replace(":all:", ""), s = f, f = function(n) { var t = s(n); return t != null ? t + " " + n : n }), e = this.options.get("containerCss") || {}, n.isFunction(e) && (e = e(this.$element)), t.syncCssClasses(o, this.$element, f), o.css(e), o.addClass(u), o }, i });
            t.define("select2/compat/dropdownCss", ["jquery", "./utils"], function(n, t) {
                function r() { return null }

                function i() {} return i.prototype.render = function(i) { var o = i.call(this),
                        u = this.options.get("dropdownCssClass") || "",
                        f, s, e; return n.isFunction(u) && (u = u(this.$element)), f = this.options.get("adaptDropdownCssClass"), f = f || r, u.indexOf(":all:") !== -1 && (u = u.replace(":all:", ""), s = f, f = function(n) { var t = s(n); return t != null ? t + " " + n : n }), e = this.options.get("dropdownCss") || {}, n.isFunction(e) && (e = e(this.$element)), t.syncCssClasses(o, this.$element, f), o.css(e), o.addClass(u), o }, i });
            t.define("select2/compat/initSelection", ["jquery"], function(n) {
                function t(n, t, i) { i.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2");
                    this.initSelection = i.get("initSelection");
                    this._isInitialized = !1;
                    n.call(this, t, i) } return t.prototype.current = function(t, i) { var r = this; if (this._isInitialized) { t.call(this, i); return }
                    this.initSelection.call(null, this.$element, function(t) { r._isInitialized = !0;
                        n.isArray(t) || (t = [t]);
                        i(t) }) }, t });
            t.define("select2/compat/inputData", ["jquery", "../utils"], function(n, t) {
                function i(n, t, i) { this._currentData = [];
                    this._valueSeparator = i.get("valueSeparator") || ",";
                    t.prop("type") === "hidden" && i.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead.");
                    n.call(this, t, i) } return i.prototype.current = function(t, i) {
                    function f(t, i) { var r = []; return t.selected || n.inArray(t.id, i) !== -1 ? (t.selected = !0, r.push(t)) : t.selected = !1, t.children && r.push.apply(r, f(t.children, i)), r } for (var e, r = [], u = 0; u < this._currentData.length; u++) e = this._currentData[u], r.push.apply(r, f(e, this.$element.val().split(this._valueSeparator)));
                    i(r) }, i.prototype.select = function(t, i) { if (this.options.get("multiple")) { var r = this.$element.val();
                        r += this._valueSeparator + i.id;
                        this.$element.val(r);
                        this.$element.trigger("change") } else this.current(function(t) { n.map(t, function(n) { n.selected = !1 }) }), this.$element.val(i.id), this.$element.trigger("change") }, i.prototype.unselect = function(n, t) { var i = this;
                    t.selected = !1;
                    this.current(function(n) { for (var u, f = [], r = 0; r < n.length; r++)(u = n[r], t.id != u.id) && f.push(u.id);
                        i.$element.val(f.join(i._valueSeparator));
                        i.$element.trigger("change") }) }, i.prototype.query = function(n, t, i) { for (var e, u, f = [], r = 0; r < this._currentData.length; r++) e = this._currentData[r], u = this.matches(t, e), u !== null && f.push(u);
                    i({ results: f }) }, i.prototype.addOptions = function(i, r) { var u = n.map(r, function(n) { return t.GetData(n[0], "data") });
                    this._currentData.push.apply(this._currentData, u) }, i });
            t.define("select2/compat/matcher", ["jquery"], function(n) {
                function t(t) {
                    function i(i, r) { var u = n.extend(!0, {}, r),
                            f, e, o; if (i.term == null || n.trim(i.term) === "") return u; if (r.children) { for (f = r.children.length - 1; f >= 0; f--) e = r.children[f], o = t(i.term, e.text, e), o || u.children.splice(f, 1); if (u.children.length > 0) return u } return t(i.term, r.text, r) ? u : null } return i } return t });
            t.define("select2/compat/query", [], function() {
                function n(n, t, i) { i.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2.");
                    n.call(this, t, i) } return n.prototype.query = function(n, t, i) { t.callback = i; var r = this.options.get("query");
                    r.call(null, t) }, n });
            t.define("select2/dropdown/attachContainer", [], function() {
                function n(n, t, i) { n.call(this, t, i) } return n.prototype.position = function(n, t, i) { var r = i.find(".dropdown-wrapper");
                    r.append(t);
                    t.addClass("select2-dropdown--below");
                    i.addClass("select2-container--below") }, n });
            t.define("select2/dropdown/stopPropagation", [], function() {
                function n() {} return n.prototype.bind = function(n, t, i) { n.call(this, t, i);
                    this.$dropdown.on("blur change click dblclick focus focusin focusout input keydown keyup keypress mousedown mouseenter mouseleave mousemove mouseover mouseup search touchend touchstart", function(n) { n.stopPropagation() }) }, n });
            t.define("select2/selection/stopPropagation", [], function() {
                function n() {} return n.prototype.bind = function(n, t, i) { n.call(this, t, i);
                    this.$selection.on("blur change click dblclick focus focusin focusout input keydown keyup keypress mousedown mouseenter mouseleave mousemove mouseover mouseup search touchend touchstart", function(n) { n.stopPropagation() }) }, n });
            /*!
             * jQuery Mousewheel 3.1.13
             *
             * Copyright jQuery Foundation and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             */
            return function(i) { typeof t.define == "function" && t.define.amd ? t.define("jquery-mousewheel", ["jquery"], i) : typeof exports == "object" ? module.exports = i : i(n) }(function(n) {
                function e(r) { var f = r || window.event,
                        w = h.call(arguments, 1),
                        l = 0,
                        o = 0,
                        e = 0,
                        a = 0,
                        b = 0,
                        k = 0,
                        v, y, p; if (r = n.event.fix(f), r.type = "mousewheel", "detail" in f && (e = f.detail * -1), "wheelDelta" in f && (e = f.wheelDelta), "wheelDeltaY" in f && (e = f.wheelDeltaY), "wheelDeltaX" in f && (o = f.wheelDeltaX * -1), "axis" in f && f.axis === f.HORIZONTAL_AXIS && (o = e * -1, e = 0), l = e === 0 ? o : e, "deltaY" in f && (e = f.deltaY * -1, l = e), "deltaX" in f && (o = f.deltaX, e === 0 && (l = o * -1)), e !== 0 || o !== 0) return f.deltaMode === 1 ? (v = n.data(this, "mousewheel-line-height"), l *= v, e *= v, o *= v) : f.deltaMode === 2 && (y = n.data(this, "mousewheel-page-height"), l *= y, e *= y, o *= y), a = Math.max(Math.abs(e), Math.abs(o)), (!t || a < t) && (t = a, s(f, a) && (t /= 40)), s(f, a) && (l /= 40, o /= 40, e /= 40), l = Math[l >= 1 ? "floor" : "ceil"](l / t), o = Math[o >= 1 ? "floor" : "ceil"](o / t), e = Math[e >= 1 ? "floor" : "ceil"](e / t), i.settings.normalizeOffset && this.getBoundingClientRect && (p = this.getBoundingClientRect(), b = r.clientX - p.left, k = r.clientY - p.top), r.deltaX = o, r.deltaY = e, r.deltaFactor = t, r.offsetX = b, r.offsetY = k, r.deltaMode = 0, w.unshift(r, l, o, e), u && clearTimeout(u), u = setTimeout(c, 200), (n.event.dispatch || n.event.handle).apply(this, w) }

                function c() { t = null }

                function s(n, t) { return i.settings.adjustOldDeltas && n.type === "mousewheel" && t % 120 == 0 } var o = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                    r = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                    h = Array.prototype.slice,
                    u, t, f, i; if (n.event.fixHooks)
                    for (f = o.length; f;) n.event.fixHooks[o[--f]] = n.event.mouseHooks;
                i = n.event.special.mousewheel = { version: "3.1.12", setup: function() { if (this.addEventListener)
                            for (var t = r.length; t;) this.addEventListener(r[--t], e, !1);
                        else this.onmousewheel = e;
                        n.data(this, "mousewheel-line-height", i.getLineHeight(this));
                        n.data(this, "mousewheel-page-height", i.getPageHeight(this)) }, teardown: function() { if (this.removeEventListener)
                            for (var t = r.length; t;) this.removeEventListener(r[--t], e, !1);
                        else this.onmousewheel = null;
                        n.removeData(this, "mousewheel-line-height");
                        n.removeData(this, "mousewheel-page-height") }, getLineHeight: function(t) { var r = n(t),
                            i = r["offsetParent" in n.fn ? "offsetParent" : "parent"](); return i.length || (i = n("body")), parseInt(i.css("fontSize"), 10) || parseInt(r.css("fontSize"), 10) || 16 }, getPageHeight: function(t) { return n(t).height() }, settings: { adjustOldDeltas: !0, normalizeOffset: !0 } };
                n.fn.extend({ mousewheel: function(n) { return n ? this.bind("mousewheel", n) : this.trigger("mousewheel") }, unmousewheel: function(n) { return this.unbind("mousewheel", n) } }) }), t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function(n, t, i, r, u) { if (n.fn.select2 == null) { var f = ["open", "close", "destroy"];
                    n.fn.select2 = function(t) { if (t = t || {}, typeof t == "object") return this.each(function() { var r = n.extend(!0, {}, t),
                                u = new i(n(this), r) }), this; if (typeof t == "string") { var r, e = Array.prototype.slice.call(arguments, 1); return (this.each(function() { var n = u.GetData(this, "select2");
                                n == null && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2.");
                                r = n[t].apply(n, e) }), n.inArray(t, f) > -1) ? this : r } throw new Error("Invalid arguments for Select2: " + t); } } return n.fn.select2.defaults == null && (n.fn.select2.defaults = r), i }), { define: t.define, require: t.require }
        }(),
        i = t.require("jquery.select2");
    return n.fn.select2.amd = t, i
});
/*! Select2 4.0.6-rc.1 | https://github.com/select2/select2/blob/master/LICENSE.md */
(function() { if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd; return n.define("select2/i18n/vi", [], function() { return { inputTooLong: function(n) { var t = n.input.length - n.maximum,
                    i = "Vui lòng nhập ít hơn " + t + " ký tự"; return t != 1 && (i += "s"), i }, inputTooShort: function(n) { var t = n.minimum - n.input.length; return "Vui lòng nhập nhiều hơn " + t + " ký tự" }, loadingMore: function() { return "Đang lấy thêm kết quả…" }, maximumSelected: function(n) { return "Chỉ có thể chọn được " + n.maximum + " lựa chọn" }, noResults: function() { return "Không tìm thấy kết quả" }, searching: function() { return "Đang tìm…" } } }), { define: n.define, require: n.require } })();
var loading = !1,
    enableHis = !1,
    provOneDis = 0;
String.prototype.toProperCase = function() { return this.toLowerCase().replace(/^(.)|\s(.)/g, function(n) { return n.toUpperCase() }) };
$.ajaxPrefilter(function(n, t) { var o = new URLSearchParams(window.location.search),
        u = [],
        r, f, i, e; for (o.has("clearcache") && u.push({ k: "clearcache", v: o.get("clearcache") }), r = 0; r < u.length; r++)
        if (f = u[r].k, i = u[r].v, i !== null && i !== "") switch (typeof t.data) {
            case "undefined":
                n.data = f + "=" + i; break;
            case "string":
                n.data = t.data + "&" + f + "=" + i; break;
            default:
                e = {};
                e[f] = i;
                n.data = $.param($.extend(t.data, e)) } });
$(window).on("load", function() { var n, t;
    typeof fixPassiveEvent == "function" && fixPassiveEvent();
    initPopupToolLocation();
    n = window.screen.width;
    Cookies.set("screenWidth", n);
    $.fn.FloatLabel && $(".js-float-label-wrapper").FloatLabel();
    $(".new2019 .colmenu").scrollBox();
    window.pageYOffset != 0 && ($(".bg-bantho img").hide(), $("header").css("top", 0).css("position", "fixed"));
    $(window).on("scroll", function() { isHaveItemCart && ($(this).scrollTop() > 50 ? $(".stickycart").fadeIn() : $(".stickycart").fadeOut());
        $(this).scrollTop() > 50 ? ($(".bg-bantho img").hide(), $("header").css("top", 0).css("position", "fixed")) : ($(".bg-bantho img").show(), $(".bg-bantho img").length == 1 && $("header").css("top", "auto").css("position", "absolute"));
        $(".scroll:not(.loaded)").each(function() { var n = $(this);
            n.addClass("loaded");
            lazy(n.find("img.lazy"), n[0]) });
        lazy("img.lazy") });
    getUser();
    mainSearch.init();
    lazy(".webmember .dmca-badge img.lazy");
    mainNav.init();
    setTimeout(function() { initFillButtonBuy();
        $("footer .dmca-badge").attr("href", "https://www.dmca.com/Protection/Status.aspx?ID=ef7c58db-1070-4726-9941-843b4ef9a243&refurl=" + location.href) }, 1500);
    initBuy();
    $("nav ul li .nav-parent").on("click", function() { var n = $(this),
            t;
        n.hasClass("parent-open") ? n.next().slideUp(200, function() { n.removeClass("parent-open") }) : (t = $("nav ul li .nav-parent.parent-open"), t.next().slideUp(200, function() { t.removeClass("parent-open") }), n.next().slideDown(200, function() { n.addClass("parent-open") }));
        $(window).trigger("resize.scrollBox") });
    $(".child").find("a").hasClass("actived") && (t = $(".child").find("a.actived").offset().top + $(".child").find("a.actived").outerHeight(!0) / 2 + $(".child").scrollTop() - $(".child").height() / 2, $("nav ul").animate({ scrollTop: t }, "slow"));
    $("#swtomob").click(function(n) { n.preventDefault(); var t = window.location; if (t.search === "") { t.href = t.origin + t.pathname + "?view=mobile" + t.hash; return }
        t.href = t.origin + t.pathname + t.search + "&view=mobile" + t.hash });
    setTimeout(function() { navigator.cookieEnabled || alertify.alert("Rất tiếc! Trình duyệt của bạn dường như đã tắt cookie. Hãy đảm bảo bật cookie và thử mở một cửa sổ trình duyệt mới.") }, 3e3);
    $("header .addmore").on("click", ".hclose", function() { $.get("/gio-hang/Order/ClearAddMore", {}, function() { location.reload(!0) }) });
    Cookies.get("trackSSID") == undefined && Cookies.set("trackSSID", guid());
    $(".stickyfeedback").on("click", function() { $.ajax({ url: "/aj/Static/PopupContact", type: "GET", beforeSend: function() { ajLoading(!0) }, success: function(n) { ajLoading(!1);
                alertify.alert().set({ startMaximized: !1, basic: !0, closable: !0, message: n, transition: "fade", onclose: function() { alertify.alert().set({ basic: !1 }) } }).show(!0, "popupContact");
                $(".js-float-label-wrapper").removeClass("populated");
                initPopupContact();
                $.fn.FloatLabel && $(".js-float-label-wrapper").FloatLabel() }, error: function() { ajLoading(!1) } }) });
    $("body").on("click", ".closePopbhx", function() { var n = $(this);
        n.parents(".cpopup").hide() });
    $(window).scroll(function() { $(this).scrollTop() > 300 ? ($("#back-top").fadeIn(), $("iframe#_no-clickjacking-0").addClass("top")) : ($("#back-top").fadeOut(), $("iframe#_no-clickjacking-0").removeClass("top")) });
    $("#back-top").on("click", function() { return $("body,html").animate({ scrollTop: 0 }, 800), !1 });
    $(".new2019 .colmenu.menu2").hover(function() { var n = $(this);
        $(n).addClass("hover");
        $(".popup-overlay").show();
        $("body").addClass("hover");
        $(window).trigger("resize.scrollBox") });
    $(".popup-overlay").hover(function() { if ($(".new2019 .colmenu.menu2").hasClass("hover") && $("body").hasClass("hover")) { var n = $(this);
            $(".new2019 .colmenu.menu2").removeClass("hover");
            $(this).hide();
            $("body").removeClass("hover");
            $(window).trigger("resize.scrollBox") } });
    setTimeout(function() { showPopupShortLink();
        location.href.indexOf("action=thankyouFeedback") !== -1 && (alertify.alert("Cảm ơn bạn đã đóng góp để giúp BachhoaXANH cải tiến chất lượng dịch vụ tốt hơn!"), window.history.pushState({}, document.title, "/")) }, 1e3);
    typeof $("header").data("provid") != "undefined" && locationHeader.initCookiesLocation();
    remindLocation();
    typeof homeAppr != "undefined" && homeAppr != undefined && setTimeout("homeAppr.showOrderRating()", 5e3);
    $(document).on("click", function(n) { var t = $(".popup-shortlink .popupshortlink-bhx");
        t.is(n.target) || t.has(n.target).length !== 0 || t.addClass("hidden") });
    autoAddProductForUrl();
    $("#changelayout").on("click", function() { $.ajax({ url: "/aj/Shared/ChangeLayout", type: "POST", beforeSend: function() { ajLoading(!0) }, success: function(n) { ajLoading(!1);
                n.Code === 200 ? alertify.alert(n.Msg, function() { location.reload(!0) }) : alertify.alert(n.Msg) }, error: function() { ajLoading(!1) } }) });
    InitEventClickProduct();
    provincesearch.init();
    sliderCoronaHeader();
    redirectPageCombo() });
mainSearch = { init: function() { $(".mainsearch .reset").on("click", function() { $(".mainsearch input[type=text]").val("");
            $(".mainsearch .reset").hide();
            $(".mainsearch input[type=text]").val().length > 0 ? $(".mainsearch .reset").show() : ($(".mainsearch .reset").hide(), $(".mainsearch .btn-search").hide(), $(".mainsearch .bhx-search").show(), $(".mainsearch .easy-autocomplete-container ul").removeClass("active")) });
        $("#text-search").on("input focusin", function() { mainSearch.focusInputSearch() }).on("focusout", function() { $("#eac-container-text-search ul").hasClass("active") && $("#text-search").val().length <= 0 && ($("#eac-container-text-search ul").removeClass("active"), $(".mainsearch .easy-autocomplete-container").removeClass("searchhistory")) });
        $(document).on("click", ".easy-autocomplete-container .more-cate a", function() { if (urlInfo !== undefined && urlInfo.key !== undefined && urlInfo.key !== "") { var n = $(this).data("bhxcatesearch");
                n !== undefined && urlInfo.key === n && location.reload() } });
        mainSearch.initAutocomplete() }, focusInputSearch: function() { var n = $("#text-search").val().length;
        n === 0 && ($(".mainsearch .reset").hide(), $(".mainsearch .btn-search").hide(), $(".mainsearch .bhx-search").show(), getKeySearch()) }, initAutocomplete: function() { var n = { url: function() { return "/aj/Shared/SearchAutocomplete" }, list: { onChooseEvent: function() { var n = mainSearch.$ele.getSelectedItemData(); if (n !== null) { n = $(n.HtmlKeywords);
                        window.location.href = n.attr("href") != undefined ? n.attr("href") : n.find("a").attr("href"); return } }, onLoadEvent: function() { $(".mainsearch .easy-autocomplete-container").removeClass("searchhistory"); return }, maxNumberOfElements: 12, onSelectItemEvent: function() { enableHis ? ($next = mainSearch.$ele[0].nextSibling.innerHTML, $($next).find("li").each(function() { $(this).removeClass("selected") })) : ($next = mainSearch.$ele[0].nextSibling.innerHTML, $($next).find("li.selected").each(function() { $(this).find(".keywordsearch").length != 0 && $("#text-search").val($(this).find("span").text()) })) } }, getValue: function(n) { return n.HtmlKeywords }, ajaxSettings: { dataType: "json", method: "POST", data: { dataType: "json" } }, preparePostData: function(n) { var t = fixKeywords($("#text-search").val()); return t = encodeURI(t.replace(/ /g, "+").replace(/([\.:*?^$#@%!])/g, "")), t = t.replace("/", "-"), t = t.replace(/select/g, "").replace(/alter/g, "").replace(/insert/g, "").replace(/update/g, "").replace(/delete/g, "").replace(/drop/g, ""), $(".mainsearch .easy-autocomplete-container ul").removeAttr("id"), t.length > 0 ? ($(".mainsearch .reset").show(), $(".mainsearch .btn-search").show(), $(".mainsearch .bhx-search").hide(), $(".mainsearch .easy-autocomplete-container ul").addClass("active")) : ($(".mainsearch .reset").hide(), $(".mainsearch .btn-search").hide(), $(".mainsearch .bhx-search").show(), $(".mainsearch .easy-autocomplete-container ul").removeClass("active")), n.phrase = t, n.url = window.location.href, enableHis = !1, n }, highlightPhrase: !1, loggerEnabled: !1, minCharNumber: 2, requestDelay: 400, disableAutoReplaceInput: !0 };
        this.$ele = $("#text-search");
        this.$ele.easyAutocomplete(n) }, submitSearch: function(n) { var t = fixKeywords($(n).find("input[name='key']").val()),
            u, i, r, f; return t === "" || t.length < 2 ? !1 : (t = encodeURI(t.replace(/ /g, "+").replace(/([\.:*?^$#@%!])/g, "")), t = t.replace("/", "-"), t = t.replace(/select/g, "").replace(/alter/g, "").replace(/insert/g, "").replace(/update/g, "").replace(/delete/g, "").replace(/drop/g, ""), u = window.location.href, u !== undefined && u.indexOf("kinh-nghiem-hay") >= 0) ? ($.ajax({ type: "GET", data: { tagName: fixKeywords($(n).find("input[name='key']").val()).split("+").join(" ") }, url: "/aj/Shared/GetUrlBytagName", success: function(n) { console.log(n);
                n.Code == 200 ? (t = n.Msg, window.location.href = "/kinh-nghiem-hay/" + t + "/tag") : window.location.href = "/kinh-nghiem-hay/" + t.split("+").join("-") + "/tag" }, error: function() { window.location.href = "/kinh-nghiem-hay/" + t.split("+").join("-") + "/tag" } }), !1) : (i = "", window.location.pathname.indexOf("khuyen-mai") > -1 && (i = "&checkpromo=true"), t !== "") ? (window.location.href = "/tim-kiem?key=" + t + i, !1) : (r = this.$ele.getItems(), r !== undefined && r.length > 0 && (f = $(r[0].HtmlKeywords).find(".sug"), f.length > 0)) ? (window.location.href = f.attr("href"), !1) : (window.location.href = "/tim-kiem?key=" + t + i, !1) } };
mainNav = { init: function() { var t, n, r, i;
        $(".menu-hover .nav-search input").animate({ scrollTop: 0 }, "slow");
        $(".menu-hover .nav-search .reset").on("click", function() { $(".menu-hover .nav-search input").val("");
            $(".menu-hover .nav-search .reset").addClass("hidden");
            $(".menu-hover .nav-search .reset").removeClass("show");
            $(".menu-hover .nav-search button").addClass("show");
            $(".menu-hover .nav-search button").removeClass("hidden");
            $(".menu-hover .search-result").removeClass("menu-active") });
        t = window.location;
        t.pathname.indexOf("kinh-nghiem-hay") > 0 ? (n = t.pathname.split("/"), n !== undefined && n[2] !== undefined && n[3] !== undefined && n[3] == "tag" && (r = n[2].split("-").join(" "), $(".mainsearch input[name=key]").val(decodeURIComponent(r)))) : (i = new URLSearchParams(t.search), typeof i.get("key") != "undefined" && $(".mainsearch input[name=key]").val(reverseKeywords(i.get("key")))) }, searchMenu: function(n) { return setTimeout(function() { var i = [],
                t = $(n).val();
            $(".menu-hover .search-result ul").empty();
            t !== undefined && t !== "" ? (t = t.replace(/:|;|!|@@|#|\$|%|\^|&|\*|'|"|>|<|,|\.|\?|\/|`|~|\+|=|_|{|}|\[|\]|\\|\|/gi, ""), t = t.trim().toLowerCase(), $(".menu-hover .nav-search .reset").removeClass("hidden"), $(".menu-hover .nav-search .reset").addClass("show"), $(".menu-hover .nav-search button").removeClass("show"), $(".menu-hover .nav-search button").addClass("hidden"), $(".menu-hover .search-result").addClass("menu-active"), $(".menu-hover ul li .parent a").each(function() { var n = $(this).data("search"),
                    r;
                n !== undefined && n !== "" && (n = n.toLowerCase(), n.indexOf(t) >= 0 && (r = "<li><a href='" + $(this).attr("href") + "'>" + $(this).html() + "<\/a><\/li>", i.includes(r) || i.push(r))) }), $(".menu-hover ul li .parent a").each(function() { var n = $(this).data("keyword"),
                    r;
                n !== undefined && n !== "" && (n = n.toLowerCase(), n.indexOf(t) >= 0 && (r = "<li><a href='" + $(this).attr("href") + "'>" + $(this).html() + "<\/a><\/li>", i.includes(r) || i.push(r))) }), i !== undefined && i.length > 0 ? $(".menu-hover .search-result ul").append(i) : $(".menu-hover .search-result ul").append("<li><a>Không tìm thấy kết quả !<\/a><\/li>")) : ($(".menu-hover .search-result").removeClass("menu-active"), $(".menu-hover .nav-search .reset").addClass("hidden"), $(".menu-hover .nav-search .reset").removeClass("show"), $(".menu-hover .nav-search button").addClass("show"), $(".menu-hover .nav-search button").removeClass("hidden")) }, 100), !1 } };
formatNumber = function(n) { var i, t; for (n !== "" && (i = parseInt(n), n = i.toString()), n += "", x = n.split("."), x1 = x[0], x2 = x.length > 1 ? "." + x[1] : "", t = /(\d+)(\d{3})/; t.test(x1);) x1 = x1.replace(t, "$1.$2"); return x1 + x2 + "₫" };
bhxusername = "Bạn";
flagSubmitContact = !1;
showMsgOffStore = !1;
locationHeader = { isCheckLocation: !1, distWardsJson: {}, oldDistWardsJson: {}, provIdSel: 0, distIdSel: 0, wardIdSel: 0, storeIdSel: 0, provOneDisSel: !1, selectedByUser: !1, initScrollBar: function() { $(window).trigger("resize.scrollBox") }, initCookiesLocation: function() { locationHeader.provIdSel = typeof $("header").data("provid") != "undefined" ? parseInt($("header").data("provid")) : 0;
        locationHeader.distIdSel = typeof $("header").data("district") != "undefined" ? parseInt($("header").data("district")) : 0;
        locationHeader.wardIdSel = typeof $("header").data("ward") != "undefined" ? parseInt($("header").data("ward")) : 0;
        locationHeader.storeIdSel = typeof $("header").data("store") != "undefined" ? parseInt($("header").data("store")) : 0;
        locationHeader.provOneDisSel = typeof $("header").data("isonedistrict") != "undefined" ? $("header").data("isonedistrict") == "True" ? !0 : !1 : !1;
        locationHeader.selectedByUser = typeof $("header").data("selectbyuser") != "undefined" ? $("header").data("selectbyuser") == "True" ? !0 : !1 : !1; var n = $("#distwardsjson").val();
        locationHeader.distWardsJson = n !== null && n !== "" ? JSON.parse(n) : {};
        locationHeader.oldDistWardsJson = locationHeader.distWardsJson;
        localStorage.setItem("provinceID", locationHeader.provIdSel);
        localStorage.setItem("districtID", locationHeader.distIdSel);
        localStorage.setItem("wardID", locationHeader.wardIdSel);
        localStorage.setItem("storeID", locationHeader.storeIdSel);
        localStorage.setItem("provOneDis", locationHeader.provOneDisSel);
        $(".new2019 .prov-container").scrollBox();
        $(".new2019 .dist-container").scrollBox();
        $(".new2019 .ward-container").scrollBox();
        $(".prov_lst > label").each(function(n, t) { $(t).hasClass("chon") && $(t).removeClass("chon");
            $(t).data("proviid") == $(locat).data("proviid") && $(t).addClass("chon") });
        $("header .locationContainer .locationUser .location_left").on("click", function() { $(".mainsearch .reset").click();
            $("header .locationContainer .location").toggleClass("hidden");
            $("body").toggleClass("disable-scroll");
            $(".popup-overlays").toggle();
            $(".location-remind").addClass("hidden");
            locationHeader.initScrollBar() });
        $("header .locationContainer .location ul.listprov li").on("click", function() { locationHeader.selectProvince($(this).data("provid")) });
        $(".title-box .title.dist .back").on("click", function() { $("header .locationContainer .prov-container").removeClass("hidden");
            $("header .locationContainer .location .title.prov").removeClass("hidden");
            $("header .locationContainer .dist-container").addClass("hidden");
            $("header .locationContainer .location .title.dist").addClass("hidden");
            $("header .locationContainer .location .noti-prov").hasClass("hidden") || $("header .locationContainer .location .noti-prov").addClass("hidden");
            locationHeader.distWardsJson = locationHeader.oldDistWardsJson;
            locationHeader.initScrollBar() });
        $("header .locationContainer").on("click", "ul.listdistrict li", function() { locationHeader.selectDistrict($(this).data("distid")) });
        $(".title-box .title.ward .back").on("click", function() { locationHeader.provOneDisSel !== null && locationHeader.provOneDisSel ? ($("header .locationContainer .prov-container").removeClass("hidden"), $("header .locationContainer .location .title.prov").removeClass("hidden"), $("header .locationContainer .ward-container").addClass("hidden"), $("header .locationContainer .location .title.ward").addClass("hidden")) : ($("header .locationContainer .dist-container").removeClass("hidden"), $("header .locationContainer .location .title.dist").removeClass("hidden"), $("header .locationContainer .ward-container").addClass("hidden"), $("header .locationContainer .location .title.ward").addClass("hidden"), $("header .locationContainer .prov-container").addClass("hidden"));
            locationHeader.distWardsJson = locationHeader.oldDistWardsJson;
            locationHeader.initScrollBar() });
        $("header .locationContainer").on("click", "ul.listward li", function() { locationHeader.selectWard($(this).data("wardid"));
            locationHeader.checkStockWhenChangeProvince(locationHeader.provIdSel, locationHeader.distIdSel, locationHeader.wardIdSel, locationHeader.provOneDisSel) });
        $("header .locationContainer .location a.close").on("click", function() { $("header .locationContainer .location").addClass("hidden");
            showMsgOffStore || locationHeader.submitLocation();
            $("body").removeClass("disable-scroll");
            $(".popup-overlays").hide();
            $.ajax({ url: "/aj/Shared/SetSSLocatioRemind", method: "GET", beforeSend: function() {}, success: function() { $(".location-remind").addClass("hidden") }, error: function() {} }) });
        $(document).on("click", function(n) { var t = $("header .locationContainer .location"),
                i = $("header .locationContainer .locationUser");
            t.is(n.target) || t.has(n.target).length !== 0 || t.hasClass("hidden") || i.is(n.target) || i.has(n.target).length !== 0 || showMsgOffStore || (locationHeader.submitLocation(), t.addClass("hidden"), $("body").removeClass("disable-scroll"), $(".popup-overlays").hide()) }) }, selectProvince: function(n) { $("header .locationContainer .location ul.listprov li").removeClass("selected");
        $('header .locationContainer ul.listprov li[data-provid="' + n + '"]').addClass("selected");
        n == 3 && $("header .locationContainer .location .noti-prov").hasClass("hidden") && $("header .locationContainer .location .noti-prov").removeClass("hidden");
        locationHeader.distIdSel = 0;
        locationHeader.wardIdSel = 0;
        locationHeader.provIdSel = n;
        locationHeader.changeProvince(locationHeader.provIdSel) }, selectDistrict: function(n) { $("header .locationContainer ul.listdistrict li").removeClass("selected");
        $('header .locationContainer ul.listdistrict li[data-distid="' + n + '"]').addClass("selected");
        $(this).addClass("selected");
        locationHeader.distIdSel = n;
        locationHeader.wardIdSel = 0;
        locationHeader.changeTextLocationHeader(locationHeader.provIdSel, locationHeader.distIdSel, 0, 0, locationHeader.provOneDisSel);
        locationHeader.showWard(locationHeader.provIdSel, locationHeader.distIdSel, locationHeader.provOneDisSel) }, selectWard: function(n) { $("header .locationContainer ul.listward li").removeClass("selected");
        $('header .locationContainer ul.listward li[data-wardid="' + n + '"]').addClass("selected");
        locationHeader.wardIdSel = n }, changeProvince: function(n) { locationHeader.isCheckLocation || ($.ajax({ url: "/aj/Shared/CheckProvinceOneDistrict", method: "GET", "async": !1, data: { provinceId: n }, beforeSend: function() { ajLoading(!0);
                locationHeader.isCheckLocation = !0 }, success: function(t) { ajLoading(!1);
                locationHeader.isCheckLocation = !1;
                console.log("changeprovince rs: " + t.Code + " msg: " + t.Msg);
                t.Code == 100 ? (locationHeader.provOneDisSel = !0, locationHeader.distIdSel = t.Msg, locationHeader.changeTextLocationHeader(n, 0, 0, 0, locationHeader.provOneDisSel), locationHeader.showWard(n, locationHeader.distIdSel, locationHeader.provOneDisSel)) : t.Code === 301 ? (ajLoading(!1), alertify.confirm("<b>Gói sản phẩm thiết yếu<\/b> giao nhanh trong 4-6 giờ hiện chỉ bán thử nghiệm tại khu vực này. Nếu thay đổi địa chỉ, BachhoaXANH.com xin phép được xoá sản phẩm ra khỏi giỏ hàng.", function() { $.ajax({ url: "/gio-hang/Order/RemoveAll", method: "GET", beforeSend: function() { ajLoading(!0);
                            locationHeader.checkStock = !0 }, success: function() { ajLoading(!1);
                            locationHeader.changeProvince(provID) }, error: function() { ajLoading(!1);
                            console.log("Lỗi kỹ thuật!") } }) }).set("labels", { ok: "ĐỒNG Ý", cancel: "KHÔNG ĐỒNG Ý" })) : (locationHeader.provOneDisSel = !1, locationHeader.distIdSel = 0, locationHeader.changeTextLocationHeader(n, 0, 0, 0, locationHeader.provOneDisSel), locationHeader.showDistrict(locationHeader.provIdSel)) }, error: function() { locationHeader.isCheckLocation = !1;
                location.reload() } }), locationHeader.initScrollBar()) }, loadDistrict: !1, showDistrict: function(n) { var i, t;
        locationHeader.loadDistrict || (i = parseInt($("header").data("provid")), n != i && $.ajax({ url: "/aj/Shared/GetDistrictWardsByProvinceId", method: "GET", "async": !1, data: { provId: n }, beforeSend: function() { ajLoading(!0);
                locationHeader.loadDistrict = !0 }, success: function(n) { ajLoading(!1);
                locationHeader.loadDistrict = !1;
                n.Code == 200 && (locationHeader.oldDistWardsJson = locationHeader.distWardsJson, locationHeader.distWardsJson = n.Msg !== "" ? JSON.parse(n.Msg) : {}) }, error: function() { locationHeader.loadDistrict = !1;
                location.reload() } }), t = "", $.each(locationHeader.distWardsJson, function(n, i) { t += "<li data-distId=" + i.DistrictId + ">" + i.DistrictName + "<\/li>" }), $(".dist-container ul.listdistrict").html(t), locationHeader.initScrollBar(), $("header .locationContainer .location .dist-container").removeClass("hidden"), $("header .locationContainer .location .title.dist").removeClass("hidden"), $("header .locationContainer .location .prov-container").hasClass("hidden") || ($("header .locationContainer .location .prov-container").addClass("hidden"), $("header .locationContainer .location .title.prov").addClass("hidden")), $("header .locationContainer .location .ward-container").hasClass("hidden") || ($("header .locationContainer .location .ward-container").addClass("hidden"), $("header .locationContainer .location .title.ward").addClass("hidden"))) }, loadWard: !1, showWard: function(n, t, i) { var f, u, r;
        locationHeader.loadWard || (f = parseInt($("header").data("provid")), n != f && $.ajax({ url: "/aj/Shared/GetDistrictWardsByProvinceId", method: "GET", "async": !1, data: { provId: n }, beforeSend: function() { ajLoading(!0);
                locationHeader.loadWard = !0 }, success: function(n) { ajLoading(!1);
                locationHeader.loadWard = !1;
                n.Code == 200 && n.Msg !== "" && (i && (locationHeader.oldDistWardsJson = locationHeader.distWardsJson), locationHeader.distWardsJson = JSON.parse(n.Msg)) }, error: function() { locationHeader.loadWard = !1;
                location.reload() } }), u = {}, r = "", $.each(locationHeader.distWardsJson, function(n, i) { i.DistrictId == t && (u = i.ListWards) }), $.each(u, function(n, t) { r += t.IsOffStore ? "<li data-wardId=" + t.WardId + " class='wardoff'>" + t.WardName + "<\/li>" : t.IsOffDelivery ? "<li data-wardId=" + t.WardId + " class='wardoff'>" + t.WardName + "<\/li>" : "<li data-wardId=" + t.WardId + ">" + t.WardName + "<\/li>" }), $(".ward-container ul.listward").html(r), locationHeader.initScrollBar(), $("header .locationContainer .location .prov-container").hasClass("hidden") || ($("header .locationContainer .location .prov-container").addClass("hidden"), $("header .locationContainer .location .title.prov").addClass("hidden")), $("header .locationContainer .location .dist-container").hasClass("hidden") || ($("header .locationContainer .location .dist-container").addClass("hidden"), $("header .locationContainer .location .title.dist").addClass("hidden")), $("header .locationContainer .location .ward-container").removeClass("hidden"), $("header .locationContainer .location .title.ward").removeClass("hidden")) }, checkStock: !1, checkStockWhenChangeProvince: function(n, t, i, r) { if (!locationHeader.checkStock) { var u = window.location.href.indexOf("/gio-hang") > -1 ? !0 : !1;
            showMsgOffStore = !1;
            $.ajax({ url: "/aj/Shared/CheckStockWhenChangeProvince", method: "GET", data: { provID: n, distID: t, wardID: i, isCartPage: u }, beforeSend: function() { ajLoading(!0);
                    locationHeader.checkStock = !0 }, success: function(u) { ajLoading(!1);
                    locationHeader.checkStock = !1;
                    u.Code === 100 ? locationHeader._setCookiesLocation(n, t, i, r) : u.Code === 400 ? location.reload() : u.Code === 301 ? (ajLoading(!1), alertify.confirm("<b>Gói sản phẩm thiết yếu<\/b> giao nhanh trong 4-6 giờ hiện chỉ bán thử nghiệm tại khu vực này. Nếu thay đổi địa chỉ, BachhoaXANH.com xin phép được xoá sản phẩm ra khỏi giỏ hàng.", function() { $.ajax({ url: "/gio-hang/Order/RemoveAll", method: "GET", beforeSend: function() { ajLoading(!0);
                                locationHeader.checkStock = !0 }, success: function() { ajLoading(!1);
                                locationHeader._setCookiesLocation(n, t, i, r) }, error: function() { ajLoading(!1);
                                locationHeader.checkStock = !1;
                                console.log("Lỗi kỹ thuật!") } }) }, function() { location.reload() }).set("labels", { ok: "ĐỒNG Ý", cancel: "KHÔNG ĐỒNG Ý" })) : u.Code === 200 ? alertify.confirm().set({ message: "<div class='p-location-mess'>" + u.Msg + "<\/div>", onok: function() { locationHeader._setCookiesLocation(n, t, i, r) }, oncancel: function() { locationHeader.reverseLocation();
                            ajLoading(!1) }, labels: { ok: "ĐỒNG Ý", cancel: "KHÔNG" }, transition: "fade" }).show(!0, "popup-location-mess") : u.Code == 204 && (showMsgOffStore = !0, alertify.alert().set({ message: "<div class='p-location-mess'>" + u.Msg + "<\/div>", onok: function() { Cookies.set("bhx_CovidOffStore", !0, { expires: 2 }) }, label: "XÁC NHẬN", transition: "fade" }).show(!0, "popup-location-mess")) }, error: function() { locationHeader.checkStock = !1;
                    console.log("Lỗi kỹ thuật!") } }) } }, _setCookiesLocation: function(n, t, i, r) { var u = !0,
            f = window.location.href.indexOf("/gio-hang") > -1 ? !0 : !1;
        $.ajax({ url: "/aj/Shared/SetCookiesLocation", method: "GET", data: { provID: n, distID: t, wardID: i, isCartPage: f }, beforeSend: function() {}, success: function(f) { if (f.IsError) console.log(f.Message);
                else if (locationHeader.changeProvinceHeader(n, t, i, f.StoreId, r), i > 0 && (window.dataLayer = window.dataLayer || [], window.dataLayer.push({ category: "click", event: "location-chon-phuong-xa", action: "ChonPhuongXa", label: n + "-" + t + "-" + i })), !((window.location.href.indexOf("chi-tiet-don-hang") > -1 || window.location.href.indexOf("don-hang") > -1) && $(".colcontent").data("locationid") !== undefined) && u)
                    if (window.location.pathname.indexOf("dat-hang-thanh-cong") !== -1 && (window.location.href = "/"), f.Code === 0) { var e = $(".location").data("auto");
                        e != undefined && e != "" ? location.href += location.href.indexOf("?") != -1 ? "&productIdAutoAdd=" + e : "?productIdAutoAdd=" + e : window.location.reload(!0) } else f.Code === 1 && (window.location.href = f.Message) }, error: function() { console.log("set cookies location Fail!") } }) }, changeProvinceHeader: function(n, t, i, r, u) { console.log("changeprov: " + n + ", " + t + ", " + i + ", " + r + ", " + u);
        (t == undefined || t == "") && (t = 0);
        (i == undefined || i == "") && (i = 0);
        locationHeader.changeTextLocationHeader(n, t, i, r, u);
        $("header .locationContainer .location").addClass("hidden");
        $("body").removeClass("disable-scroll");
        $(".popup-overlays").hide(); var f = $("header").data("provid"),
            e = $("header").data("district"),
            o = $("header").data("ward"),
            s = $("header").data("store");
        f !== n && ($("header").data("provid", n), $("header").attr("data-provid", n));
        e !== t && ($("header").data("isexitsdistrict", !0), $("header").data("district", t), $("header").attr("data-district", t));
        o !== i && ($("header").data("isexitsward", !0), $("header").data("ward", i), $("header").attr("data-ward", i));
        s !== r && ($("header").data("isexitsstore", !0), $("header").data("store", r), $("header").attr("data-store", r));
        $("header").data("isuserhadorder", !0);
        $("header").attr("data-isuserhadorder", "True");
        locationHeader.selectedByUser = !0;
        $(".prov_lst").addClass("hidden");
        localStorage.setItem("provinceID", n);
        localStorage.setItem("districtID", t);
        localStorage.setItem("wardID", i);
        localStorage.setItem("storeID", r);
        localStorage.setItem("provOneDis", u) }, changeTextLocationHeader: function(n, t, i, r, u, f) { var e, o; if (f == null && typeof f == "undefined" && (f = !1), (t == undefined || t == "") && (t = 0), (i == undefined || i == "") && (i = 0), e = "", o = "Tại ", !locationHeader.selectedByUser && f) e = "Chọn tỉnh thành, quận huyện để xem chính xác tồn kho", $("header .locationContainer .shipto").hasClass("hidden") || $("header .locationContainer .shipto").css("margin-right", "0").addClass("hidden"), $("header .locationContainer .change").hasClass("hidden") || $("header .locationContainer .change").removeClass("hidden").addClass("hidden"), $("header .locationContainer .shiptoHere").html(e);
        else { var h = "",
                s = "",
                c = "";
            i != 0 && (h = $("header .locationContainer .location ul.listward li[data-wardid=" + i + "]").html(), typeof h != "undefined" && (e += h));
            t == 0 || u || (s = $("header .locationContainer .location ul.listdistrict li[data-distid=" + t + "]").html(), i !== 0 && typeof h != "undefined" && (e += ", ", $(".location-remind").addClass("hidden")), typeof s != "undefined" && (e += s, o += s, $(".location-remind").addClass("hidden")));
            c = $("header .locationContainer .location ul.listprov li[data-provid=" + n + "]").data("shortname");
            (i == 0 || typeof h == "undefined") && (u || t == 0 || typeof s == "undefined") || (e += ", ", u || t == 0 || typeof s == "undefined" || (o += ", "));
            e += c;
            o += c;
            e.length > 28 && (e = e.substring(0, 28) + "...");
            e.length > 9 ? $("header .locationContainer .current_locate").removeClass("midle") : $("header .locationContainer .current_locate").hasClass("midle") || $("header .locationContainer .current_locate").addClass("midle");
            $("header .locationContainer .shipto").css("margin-right", "0").removeClass("hidden");
            $("header .locationContainer .change").removeClass("hidden").removeClass("hidden");
            $("header .locationContainer .shiptoHere").html(e);
            (t != 0 || i != 0 || r != 0) && (n != 6 || i != 0) && ($("header .locationContainer .popup-location-container").removeClass("hidden").addClass("hidden"), $("header .locationContainer .tooltip").removeClass("hidden").addClass("hidden"));
            t == 0 || u ? n != 0 && (u ? $(".title-box .title.ward .name").html(o) : $(".title-box .title.dist .name").html(o)) : ($(".title-box .title.ward .name").html(o), o.indexOf("Thủ Đức") > -1 ? $(".title-box .title.ward .name").addClass("font-size-10") : $(".title-box .title.ward .name").removeClass("font-size-10")) } }, showListSelectLocation: function(n) { n == null && typeof n == "undefined" && (n = !1);
        n && !locationHeader.selectedByUser ? ($("header .locationContainer .prov-container").removeClass("hidden"), $("header .locationContainer .location .title.prov").removeClass("hidden"), $("header .locationContainer .dist-container").hasClass("hidden") || ($("header .locationContainer .dist-container").addClass("hidden"), $("header .locationContainer .location .title.dist").addClass("hidden")), $("header .locationContainer .ward-container").hasClass("hidden") || ($("header .locationContainer .ward-container").addClass("hidden"), $("header .locationContainer .location .title.ward").addClass("hidden"))) : (!locationHeader.provOneDisSel && locationHeader.distIdSel <= 0 ? ($("header .locationContainer .dist-container").removeClass("hidden"), $("header .locationContainer .location .title.dist").removeClass("hidden")) : $("header .locationContainer .dist-container").hasClass("hidden") || ($("header .locationContainer .dist-container").addClass("hidden"), $("header .locationContainer .location .title.dist").addClass("hidden")), locationHeader.provOneDisSel || !locationHeader.provOneDisSel && locationHeader.distIdSel > 0 || locationHeader.wardIdSel > 0 ? ($("header .locationContainer .ward-container").removeClass("hidden"), $("header .locationContainer .location .title.ward").removeClass("hidden")) : $("header .locationContainer .ward-container").hasClass("hidden") || ($("header .locationContainer .ward-container").addClass("hidden"), $("header .locationContainer .location .title.ward").addClass("hidden"))) }, reverseLocation: function() { var t = typeof localStorage.getItem("provinceID") != "undefined" ? parseInt(localStorage.getItem("provinceID")) : 0,
            r = typeof localStorage.getItem("districtID") != "undefined" ? parseInt(localStorage.getItem("districtID")) : 0,
            u = typeof localStorage.getItem("wardID") != "undefined" ? parseInt(localStorage.getItem("wardID")) : 0,
            f = typeof localStorage.getItem("provOneDis") != "undefined" ? localStorage.getItem("provOneDis") == "true" ? !0 : !1 : !1,
            o, i, e, n;
        t !== null && typeof t != "undefined" && (locationHeader.provIdSel = t, o = $("header .locationContainer ul.listprov li[data-provid=" + t + "]"), $("header .locationContainer ul.listprov li").removeClass("selected"), $(o).addClass("selected"));
        r !== null && typeof r != "undefined" && (locationHeader.distIdSel = r);
        u !== null && typeof u != "undefined" && (locationHeader.wardIdSel = u);
        f !== null && typeof f != "undefined" && (locationHeader.provOneDisSel = f);
        i = "";
        $.each(locationHeader.oldDistWardsJson, function(n, t) { i += t.DistrictId == locationHeader.distIdSel ? "<li data-distId=" + t.DistrictId + " class='selected'>" + t.DistrictName + "<\/li>" : "<li data-distId=" + t.DistrictId + ">" + t.DistrictName + "<\/li>" });
        $(".dist-container ul.listdistrict").html(i);
        e = {};
        n = "";
        $.each(locationHeader.oldDistWardsJson, function(n, t) { t.DistrictId == locationHeader.distIdSel && (e = t.ListWards) });
        $.each(e, function(t, i) { n += i.WardId == locationHeader.wardIdSel ? i.IsOffStore ? "<li data-wardId=" + i.WardId + " class='selected wardoff'>" + i.WardName + "<\/li>" : i.IsOffDelivery ? "<li data-wardId=" + i.WardId + " class='selected wardoff'>" + i.WardName + "<\/li>" : "<li data-wardId=" + i.WardId + " class='selected'>" + i.WardName + "<\/li>" : i.IsOffStore ? "<li data-wardId=" + i.WardId + " class='wardoff'>" + i.WardName + "<\/li>" : i.IsOffDelivery ? "<li data-wardId=" + i.WardId + " class='wardoff'>" + i.WardName + "<\/li>" : "<li data-wardId=" + i.WardId + ">" + i.WardName + "<\/li>" });
        $(".ward-container ul.listward").html(n);
        locationHeader.showListSelectLocation(!0);
        locationHeader.changeTextLocationHeader(locationHeader.provIdSel, locationHeader.distIdSel, locationHeader.wardIdSel, locationHeader.storeIdSel, locationHeader.provOneDisSel, !0);
        locationHeader.distWardsJson = locationHeader.oldDistWardsJson }, submitLocation: function() { var n = 0,
            t = 0,
            i = 0;
        n = typeof $("header").data("provid") != "undefined" ? parseInt($("header").data("provid")) : 0;
        t = typeof $("header").data("district") != "undefined" ? parseInt($("header").data("district")) : 0;
        i = typeof $("header").data("ward") != "undefined" ? parseInt($("header").data("ward")) : 0;
        console.log("submitLocation");
        locationHeader.provIdSel != n || locationHeader.distIdSel != t || locationHeader.wardIdSel != i ? locationHeader.checkStockWhenChangeProvince(locationHeader.provIdSel, locationHeader.distIdSel, locationHeader.wardIdSel, locationHeader.provOneDisSel) : (console.log("clear auto"), $(".location").attr("data-auto", "")) }, determineLocation: function(n) { if (typeof n != "undefined") { var t = n.coords.latitude,
                i = n.coords.longitude;
            $.ajax({ url: "/aj/Shared/DetermineLocation", method: "GET", data: { lat: t, lng: i }, success: function(n) { if (console.log(n.Msg), n.Code == 200) { var t = JSON.parse(n.Msg);
                        window.location.reload() } }, error: function() { console.log("set cookies location Fail!") } }) } } };
alertify.genericDialog || alertify.dialog("confirmLocationDialog", function() { return { main: function(n) { this.setContent(n) }, setup: function() { return { options: { basic: !0, maximizable: !1, resizable: !1, closable: !1, closableByDimmer: !1 } } }, build: function() { $(this.elements.footer).remove();
            $(this.elements.header).remove() }, settings: { selector: undefined }, hooks: { onshow: function() { $(".location_comf").parents(".alertify").addClass("confirmlocation");
                $("#for-notification").hide();
                $(".alertify.confirmlocation .btn_locat button").on("click", function() { var n = $('.prov_lst > li[data-provid="8"]').first();
                    alertify.confirmLocationDialog().destroy() });
                $(".alertify.confirmlocation .close_pop").on("click", function() { alertify.confirmLocationDialog().destroy() });
                $(document).on("click", function(n) { var t = $(".alertify.confirmlocation .ajs-body");
                    t.is(n.target) || t.has(n.target).length !== 0 || alertify.confirmLocationDialog().destroy() }) }, onclose: function() {}, onupdate: function() {} } } });
user18plus = { init: function() { typeof checkCateId != "undefined" && checkCateId != null && user18plus.checkexits(checkCateId) }, updateCheck: function(n, t) { $.ajax({ url: "/aj/Shared/UpdateCheck", method: "GET", data: { isCheck: n, user18plus: t }, beforeSend: function() {}, success: function(n) { n.Code == 400 ? location.href = "/" : alertify.alert().destroy() }, error: function() {} }) }, renderhtml: function() { var n = '<div class="formalert">'; return n += "<h2>Sản phẩm này là thức uống có cồn, vui lòng xác nhận bạn đã đủ 18 tuổi để đi tiếp<\/h2>", n += '<div class="classcheck">', n += '<input type="checkbox" id="checkboxaccept" class="hidden" onclick="user18plus.noalow(this)" checked>', n += '<label for= "checkboxaccept" >Không hiển thị lại nội dung này<\/label>', n += "<\/div>", n += '<div class="classbutton">', n += '<a onclick="user18plus.not18plush()">Tôi dưới 18 tuổi<\/a>', n += '<a onclick="user18plus.ok18plush()">Tôi trên 18 tuổi<\/a>', n += "<\/div>", n + "<\/div>" }, not18plush: function() { location.href = "/" }, ok18plush: function() { var n = $(".formalert #checkboxaccept").is(":checked");
        user18plus.updateCheck(n, !0) }, checkexits: function(n) { $.ajax({ url: "/aj/Shared/CheckIsExits", method: "GET", data: { cateId: n }, beforeSend: function() { ajLoading(!0) }, success: function(n) { ajLoading(!1);
                n.Code == 201 && alertify.alert().set({ startMaximized: !1, basic: !0, closable: !0, message: user18plus.renderhtml(), transition: "fade", closableByDimmer: !1, onclose: function() { alertify.alert().set({ basic: !1 }) } }).show(!0, "popupaccept18plus") }, error: function() { ajLoading(!1) } }) } };
provincesearch = { init: function() { $("#text-search-province").on("input focusin", function() { provincesearch.focusInputSearch() }).on("focusout", function() {
            ($("#text-search-province").val() == undefined || $("#text-search-province").val().length == 0) && ($(".box-search-province .reset").hide(), $(".box-search-province #eac-container-text-search-province ul").removeClass("active"), $("#eac-container-text-search-province").addClass("hidden")) });
        $(".box-search-province .reset").on("click", function() { $("#text-search-province").val("");
            $(".box-search-province .reset").hide();
            $(".box-search-province #eac-container-text-search-province ul").removeClass("active");
            $("#eac-container-text-search-province").addClass("hidden");
            $(".locationContainer .sb-container.boxprovince").addClass("hidden");
            $(".prov-container.sb-container").removeClass("hidden").removeClass("sb-container-noscroll") });
        provincesearch.initAutocompleteProvince() }, focusInputSearch: function() { var i = fixKeywords($("#text-search-province").val()),
            n, t;
        $(window).trigger("resize.scrollBox");
        $(".locationContainer .sb-container.boxprovince").addClass("hidden");
        i.length === 0 ? ($(".box-search-province .reset").hide(), $(".box-search-province #eac-container-text-search-province ul").removeClass("active"), $("#eac-container-text-search-province").addClass("hidden"), $(".prov-container.sb-container").removeClass("hidden").addClass("sb-container-noscroll"), n = $(".title-box .title.ward"), $(n).hasClass("hidden") || $(n).find(".back").click(), t = $(".title-box .title.dist"), $(t).hasClass("hidden") || $(t).find(".back").click()) : $(".box-search-province .reset").show() }, initAutocompleteProvince: function() { var n = { url: function() { return "/aj/Shared/ProvinceSearchAutocomplete" }, list: { onChooseEvent: function() { return }, maxNumberOfElements: 21, onLoadEvent: function() {}, onSelectItemEvent: function() { $next = provincesearch.$ele[0].nextSibling.innerHTML;
                    $($next).find("li").each(function() { $(this).removeClass("selected") }) }, onShowListEvent: function() {}, onHideListEvent: function() {}, onSelectItemEvent: function() {}, onClickEvent: function() {}, onMouseOverEvent: function() {} }, getValue: function(n) { return n.HtmlKeywords }, ajaxSettings: { dataType: "json", method: "POST", data: { dataType: "json" } }, preparePostData: function(n) { $(window).trigger("resize.scrollBox"); var t = fixKeywords($("#text-search-province").val()); return t.length >= 2 ? ($(".box-search-province .reset").show(), $(".box-search-province #eac-container-text-search-province ul").addClass("active"), $("#eac-container-text-search-province").removeClass("hidden"), $(".locationContainer .sb-container.boxprovince").addClass("hidden")) : ($(".box-search-province .reset").hide(), $(".box-search-province #eac-container-text-search-province ul").removeClass("active"), $("#eac-container-text-search-province").addClass("hidden")), setTimeout(function() { $("#eac-container-text-search-province").scrollBox();
                    $("#eac-container-text-search-province").css("top", "9px") }, 200), setTimeout(function() { var n = $("#eac-container-text-search-province ul.sb-container")[0].outerHTML;
                    n.length > 0 && ($("#eac-container-text-search-province ul.sb-container").remove(), $("#eac-container-text-search-province div.sb-content").html(n), provincesearch.initEventChoose()) }, 400), n.phrase = t, n.url = window.location.href, n }, highlightPhrase: !1, loggerEnabled: !1, minCharNumber: 2, requestDelay: 300, disableAutoReplaceInput: !0 };
        this.$ele = $("#text-search-province");
        this.$ele.easyAutocomplete(n);
        $("#eac-container-text-search-province").addClass("hidden");
        $("#eac-container-text-search-province ul").addClass("sb-container") }, initEventChoose: function() { $("#eac-container-text-search-province .sb-container li").on("click", function(n) { var i; if (n.preventDefault(), i = $(this).find(".itemsearch"), i != undefined && i.length > 0) { var t = $(i).find(" span"),
                    r = $(t).data("provinceid"),
                    u = $(t).data("districtid"),
                    f = $(t).data("wardid"),
                    e = $(t).data("storeid"),
                    o = $(t).data("onedis");
                provincesearch.actionClick(r, u, f, e, o) } }) }, actionClick: function(n, t, i, r, u) { var f, e;
        ajLoading(!0);
        console.log(n + " / " + t + " / " + i + " / " + r);
        n != null && n > 0 && (f = $("header .locationContainer .prov-container .listprov").find("li[data-provid=" + n + "]"), f != null && f.length > 0 && ($(".box-search-province .reset").click(), $(f).click()));
        t != null && t > 0 && u != undefined && u !== "True" && (e = $("header .locationContainer .dist-container .listdistrict").find("li[data-distid=" + t + "]"), e != null && e.length > 0 && setTimeout(function() { $(e).click() }, 150));
        i != null && i > 0 && setTimeout(function() { var n = $("header .locationContainer .ward-container .listward").find("li[data-wardid=" + i + "]");
            n != null && n.length > 0 && $(n).click() }, 300) } };
$(window).on("load", function() { $(".buyevoucher").on("click", function() { window.location = "/dat-mua-phieu-mua-hang" });
    cash_voucher.init() });
var cash_voucher = { init: function() { $.fn.FloatLabel && $(".js-float-label-wrapper").FloatLabel();
            $(".evoucher .voucher-main .voucher-pricechoose .pricevoucher").hasClass("selected") || ($("#hdQuantityAddToCart").attr("disabled", "disabled"), $(".evoucher .voucher-main .voucher-number span.up").addClass("disable"), $(".voucher-totalprice .total").text(cash_voucher.calc(0, 0)));
            $(".evoucher .voucher-main .voucher-pricechoose .pricevoucher").on("click", function() { $(".evoucher .voucher-main .voucher-pricechoose .pricevoucher").removeClass("selected");
                $(this).addClass("selected"); var n = parseInt($("#hdQuantityAddToCart").val());
                isNaN(n) && (n = 1);
                n == 0 && (n++, $(".evoucher .voucher-main .error-price").text(""), $("#hdQuantityAddToCart").removeAttr("disabled"), $(".evoucher .voucher-main .voucher-number span.up").removeClass("disable"));
                $("#hdQuantityAddToCart").val(n);
                $(".voucher-totalprice .total").text(cash_voucher.calc($(".pricevoucher.selected > span").data("price"), n)) });
            $(".evoucher .voucher-main .voucher-number input#hdQuantityAddToCart").on("focusout", function() { var n = parseInt($("#hdQuantityAddToCart").val());
                isNaN(n) && (n = 1, $(".evoucher .voucher-main .voucher-number span.down").addClass("disable"), $("#hdQuantityAddToCart").val(n), $(".voucher-totalprice .total").text(cash_voucher.calc($(".pricevoucher.selected > span").data("price"), parseInt($("#hdQuantityAddToCart").val()))));
                n >= 100 && ($(".warning.warning-quantity").text("Số lượng được mua tối đa trong một lần mua: 100 phiếu"), $(this).addClass("disable"));
                $(".evoucher .voucher-main .voucher-number span.up").hasClass("disable") || ($("#hdQuantityAddToCart").val(n), $(".evoucher .voucher-main .voucher-number span.down").removeClass("disable"), $(".voucher-totalprice .total").text(cash_voucher.calc($(".pricevoucher.selected > span").data("price"), parseInt($("#hdQuantityAddToCart").val()))), n >= 100 && ($(".warning.warning-quantity").text("Số lượng được mua tối đa trong một lần mua: 100 phiếu"), $(".evoucher .voucher-main .voucher-number span.up").addClass("disable"))) });
            $(".evoucher .voucher-main .voucher-number span.up").on("click", function() { if (!$(this).hasClass("disable")) { var n = parseInt($("#hdQuantityAddToCart").val());
                    isNaN(n) && (n = 0);
                    n >= 100 && ($(".warning.warning-quantity").text("Số lượng được mua tối đa trong một lần mua: 100 phiếu"), $(this).addClass("disable"));
                    n++;
                    $("#hdQuantityAddToCart").val(n);
                    $(".evoucher .voucher-main .voucher-number span.down").removeClass("disable");
                    $(".voucher-totalprice .total").text(cash_voucher.calc($(".pricevoucher.selected > span").data("price"), parseInt($("#hdQuantityAddToCart").val())));
                    n >= 100 && ($(".warning.warning-quantity").text("Số lượng được mua tối đa trong một lần mua: 100 phiếu"), $(this).addClass("disable")) } });
            $(".evoucher .voucher-main .voucher-number span.down").on("click", function() { if (!$(this).hasClass("disable")) { var n = parseInt($("#hdQuantityAddToCart").val());
                    (isNaN(n) || n == 1) && (n = 2);
                    n--;
                    $("#hdQuantityAddToCart").val(n);
                    $(".evoucher .voucher-main .voucher-number span.up").removeClass("disable");
                    $(".voucher-totalprice .total").text(cash_voucher.calc($(".pricevoucher.selected > span").data("price"), parseInt($("#hdQuantityAddToCart").val())));
                    n == 1 && $(this).addClass("disable") } });
            $(".voucher-phone input.txtPhone").on("keydown, keyup", function() { this.value.length > 10 ? cash_voucher.validatePhone(this.value) ? ($(".evoucher .error.error-phone").text(""), $(".evoucher .error.error-phone").hide(), $(".txtPhone").removeClass("errorinput")) : ($(".evoucher .error.error-phone").text("Số điện thoại không hợp lệ"), $(".evoucher .error.error-phone").show(), $(".txtPhone").addClass("errorinput")) : ($(".evoucher .error.error-phone").text(""), $(".evoucher .error.error-phone").hide(), $(".txtPhone").removeClass("errorinput")) });
            $(document).on("click", ".confirm-payment .popupconfirm_close", function() { $(".popupConfirm .ajs-cancel").trigger("click") });
            $("#hdQuantityAddToCart").on("keyup", function() { parseInt(this.value) > 100 ? (this.value = 100, $(".evoucher .voucher-main .voucher-number span.down").removeClass("disable"), $(".warning.warning-quantity").text("Số lượng được mua tối đa trong một lần mua: 100 phiếu"), $(".evoucher .voucher-main .voucher-number span.up").addClass("disable")) : parseInt(this.value) <= 0 ? (this.value = 1, $(".evoucher .voucher-main .voucher-number span.down").addClass("disable"), $(".warning.warning-quantity").text("Số lượng được mua tối thiểu trong một lần mua: 1 phiếu"), $(".evoucher .voucher-main .voucher-number span.up").removeClass("disable")) : ($(".warning.warning-quantity").text(""), $(".evoucher .voucher-main .voucher-number span.up").removeClass("disable"), $(".evoucher .voucher-main .voucher-number span.down").removeClass("disable"), parseInt(this.value) <= 1 && $(".evoucher .voucher-main .voucher-number span.down").addClass("disable"));
                $(".voucher-totalprice .total").text(cash_voucher.calc($(".pricevoucher.selected > span").data("price"), parseInt($("#hdQuantityAddToCart").val()))) });
            $(".evoucher .voucher-main .voucher-label > b").on("click", function() { $(".evoucher .voucher-main #voucher-tooltip").toggleClass("hidden") });
            $("#voucher-tooltip .icon-shipfree-close").on("click", function() { var t = $(this),
                    n = $(t).parents("#voucher-tooltip");
                typeof n != "undefined" && $(n).length > 0 && $(n).toggleClass("hidden") });
            $(document).ready(function() { window.location.href.indexOf("dat-mua-phieu-mua-hang") > -1 ? $("footer > div").addClass("widthfull") : $("footer > div").removeClass("widthfull") }) }, calc: function(n, t) { if (isNaN(t)) return "0₫"; var i = parseInt(t * n).toString(); return i += "₫", i.replace(/\B(?=(\d{3})+(?!\d))/g, ".") }, confirm: function(n) { var t, i; if ($(".evoucher .voucher-main .voucher-pricechoose .pricevoucher").hasClass("selected") || $(".evoucher .voucher-main .error-price").text("Vui lòng chọn mệnh giá"), t = $(".txtPhone").val(), !cash_voucher.validatePhone(t)) { $(".evoucher .error.error-phone").text("Số điện thoại không hợp lệ");
                $(".evoucher .error.error-phone").show();
                $(".txtPhone").addClass("errorinput"); return } if (i = $("#hdQuantityAddToCart").val(), i == undefined || i == "") { $("#hdQuantityAddToCart").val(1);
                $(".evoucher .voucher-main .voucher-number span.down").addClass("disable");
                $(".warning.warning-quantity").text("Số lượng được mua tối thiểu trong một lần mua: 1 phiếu");
                $(".evoucher .voucher-main .voucher-number span.up").removeClass("disable");
                $(".voucher-totalprice .total").text(cash_voucher.calc($(".pricevoucher.selected > span").data("price"), parseInt($("#hdQuantityAddToCart").val()))); return } var r = $(".pricevoucher.selected").data("productcode").toString(),
                u = parseInt(i),
                f = parseInt($(".pricevoucher.selected > span").data("price")) * parseInt($("#hdQuantityAddToCart").val());
            $.ajax({ url: "/aj/EVoucher/PopupConfirm", data: { productCode: r, quantity: u, phoneNumber: t, transactionType: n, totalPrice: f }, type: "POST", beforeSend: function() { ajLoading(!0) }, success: function(i) { ajLoading(!1);
                    alertify.alert().destroy();
                    alertify.confirm().set({ startMaximized: !1, closable: !0, message: i, transition: "fade", onok: function() { cash_voucher.validate(r, u, t, n, f) } }).set("labels", { ok: "THANH TOÁN NGAY", cancel: "Huỷ bỏ" }).show(!0, "popupConfirm") }, error: function() { ajLoading(!1) } }) }, validate: function(n, t, i, r, u) { $.ajax({ url: "/aj/EVoucher/ValidateModel", data: { productCode: n, quantity: t, phoneNumber: i, transactionType: r, totalPrice: u }, type: "POST", beforeSend: function() { ajLoading(!0) }, success: function(f) { if (ajLoading(!1), f.Code != 0) switch (f.Code) {
                        case 1:
                            $(".error.error-general").text(f.Message); break;
                        case 2:
                            $(".error.error-price").text(f.Message); break;
                        case 7:
                            $(".error.error-general").text(f.Message); break;
                        case 3:
                            $(".warning.warning-quantity").text(f.Message); break;
                        case 4:
                            $(".warning.warning-quantity").text(f.Message);
                            $("#hdQuantityAddToCart").val(f.CurrentTotal); break;
                        case 5:
                        case 6:
                            $(".error.error-phone").text(f.Message);
                            $(".txtPhone").addClass("errorinput") } else cash_voucher.submit(n, t, i, r, u) }, error: function() { ajLoading(!1) } }) }, submit: function(n, t, i, r, u) { $.ajax({ url: "/gio-hang/Order/SubmitCashEvoucher", data: { productCode: n, quantity: t, phoneNumber: i, transactionType: r, totalPrice: u }, type: "POST", beforeSend: function() { ajLoading(!0) }, success: function(n) { ajLoading(!1);
                    n.Code != 0 ? (alertify.alert().destroy(), alertify.alert(n.Msg)) : cash_voucher.redirectToPayment(n.OrderId, r, n.sc) }, error: function() { ajLoading(!1) } }) }, redirectToPayment: function(n, t, i) { $.ajax({ url: "/gio-hang/Order/UpdatePaymentOrderEvoucher", data: { orderId: n, paymentType: t, sc: i }, type: "POST", beforeSend: function() { ajLoading(!0) }, success: function(n) { var t, i;
                    ajLoading(!1);
                    t = JSON.parse(n.Msg);
                    n.Code !== 200 ? t.url != undefined ? (alertify.alert().destroy(), alertify.alert(t.Message).set({ transition: "fade", closableByDimmer: !0, onok: function() { window.location = t.Url } })) : (alertify.alert().destroy(), alertify.alert(t.Message)) : t.RedirectUrl !== "" && t.RedirectUrl !== undefined && (i = 5, alertify.alert().destroy(), alertify.alert().setting({ label: "Chuyển ngay", closableByDimmer: !1, message: "<div class='popupOnePay'>Bạn đang được chuyển sang trang <span class='icon-onepay'><\/span><br/> để thanh toán trong vòng <span class='timer'>5<\/span> giây nữa ...<\/div>", onok: function() { window.location = t.RedirectUrl } }).show(!0, "popupOnePay"), setInterval(function() { $(".timer").html(i);
                        i <= 0 ? $(".popupOnePay .ajs-close").trigger("click") : i-- }, 1e3)) }, error: function() { ajLoading(!1) } }) }, validatePhone: function(n) { return /^((01(\d){9})|(0[35789](\d){8}))$/.test(n) }, isNumberKey: function(n) { var t = n.which ? n.which : n.keyCode; return t !== 46 && t > 31 && (t < 48 || t > 57) ? !1 : !0 } },
    owlNew = {},
    loading = !1,
    loadingMoreLine = !1,
    totalperiod = 0,
    historySupported = !!(window.history && history.pushState),
    dataState = { loadedNumberPage: 0, loadMore: [], stateUrl: "" };
window.addEventListener("popstate", function(n) { n.state.dataState !== null && (dataState = n.state.dataState, window.statechanging = !0) });
$(window).on("load", function() { var t, n, i, r;
    historySupported && !window.statechanging && history.state === null && history.pushState({ dataState: dataState }, document.title, window.location.href);
    homeback.initcomback();
    setTimeout(function() { var n = Cookies.get("deliveryOver");
        n == undefined && $.ajax({ url: "/aj/Shared/DeliveryOver", type: "Get", success: function(n) { if (n.Code === 200) { $("body").append(n.Msg);
                    $(document).on("click", ".tooltip-deliveryover .close", function() { $(".tooltip-deliveryover").remove();
                        Cookies.set("deliveryOver", "true") }) } }, error: function() {} }) }, 4e3);
    captcha.init();
    $(window).on("scroll", function() { var n = $(this);
        ($(".homehews").length > 0 && n.scrollTop() > $(".homehews").offset().top - window.innerHeight && $(".colcontent #pageIndex").val() < 3 && LoadMoreHomeData(), document.firstScroll == undefined) && (document.firstScroll = !0, lazy(".newcate img.lazy, .homehews img.lazy, .cate img.lazy, #slide-home img.lazy, .boxshop img.lazy"), setTimeout(function() { $(".newvideo").html('<iframe width="580" height="326" src="https://www.youtube.com/embed/videoseries?list=PLuhqQ0YoA_Kf1O5AZGrGDxdtbhVGVv0LD" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen><\/iframe>') }, 4e3)) });
    InitowlCarousel();
    $(".groupfeature .viewmore:not(.viewmorefresh):not(.viewmoreseasion)").on("click", function() { var n = $(this).data("group"),
            r = $(this).data("categoryids"),
            u = $(this).data("exclude"),
            t = $(this).data("groupcategoryid"),
            f = $("header").data("store"),
            e = $("#group-" + n),
            o = e.find(".viewmore").data("loadmore"),
            i;
        f == 0 && t == 8686 && o == 1 ? (i = "<div class=locationChooseFresh>Hiện tại các sản phẩm thịt, cá, trứng, rau củ chỉ <b>đang bán thử nghiệm<\/b> tại <b>Thành phố Hồ Chí Minh (trừ Cần giờ) và một số khu vực khác<\/b>, quý khách vui lòng chọn khu vực để Bách Hoá XANH hiển thị sản phẩm chính xác hơn.<\/div>", alertify.alert().set({ closable: !1, message: i, label: "CHỌN KHU VỰC", onok: function() { setTimeout(function() { $("header .locationContainer .locationUser .location_left").click() }, 500) } }).show(!0, "popupChooseLocationFresh"), window.dataLayer.push({ category: "click", event: "LocationRemindFresh", action: "LocationRemindFresh", label: "LocationRemindFresh" })) : GetMoreSockPriceBox(r, u, n, t) });
    $(".groupfeature.groupfeaturefresh .cate-list .cate-item").on("click", function() { var r = $(this).data("groupcateid"),
            u = $(this).data("cateid"),
            t = [],
            n, i;
        $(".groupfeature.groupfeaturefresh .cate-list .cate-item").each(function(n, i) { var r = $(i).data("groupcateid");
            t.push(r) });
        n = t.join(", ");
        $(this).hasClass("active") ? ($(this).removeClass("active"), $(".groupfeature.groupfeaturefresh").find("ul.cateproduct.cateproductfresh").remove(), $(".groupfeature.groupfeaturefresh").find(".viewmore.viewmorefresh").remove(), $(".groupfeature.groupfeaturefresh").find("ul.cateproduct").removeClass("hidden"), $(".groupfeature.groupfeaturefresh").find(".viewmore").removeClass("hidden"), $(".groupfeature.groupfeaturefresh").find(".cate-prom").removeClass("hidden"), i = $(".groupfeature.groupfeaturefresh .viewmore:not(.viewmorefresh)").data("loadmore"), getlistcateparent(n), i < 1 ? $(".groupfeaturefresh .cate-prom").addClass("hidden") : $(".groupfeaturefresh .cate-prom").removeClass("hidden")) : GetProductFresh(r, u, n) });
    $(".groupfeature.lineSeasion .cate-list .cate-item").on("click", function() { var i = $(this).data("groupcateid"),
            r = $(this).data("cateid"),
            n = [],
            t;
        $(".groupfeature.lineSeasion .cate-list .cate-item").each(function(t, i) { var r = $(i).data("groupcateid");
            n.push(r) });
        t = n.join(", ");
        $(this).hasClass("active") ? ($(this).removeClass("active"), $(".groupfeature.lineSeasion").find("ul.cateproduct").removeClass("hidden"), $(".groupfeature.lineSeasion").find(".viewmore").removeClass("hidden"), $(".groupfeature.lineSeasion").find("ul.cateproduct.cateproductseason").remove(), $(".groupfeature.lineSeasion").find(".viewmore.viewmoreseasion").remove()) : GetProductSeasion(i, r, t) });
    $(".groupfeature.lineSeasion").on("click", " .viewmore.viewmoreseasion", function() { var n = [];
        $(".groupfeature.lineSeasion .cate-list .cate-item").each(function(t, i) { var r = $(i).data("groupcateid");
            n.push(r) }); var t = n.join(", "),
            i = $(this).data("groupcategoryid"),
            r = $(this).data("cateid"),
            u = $(this).data("exclude"),
            f = $(this).data("page"),
            e = $("header").data("store");
        GetProductSeasion(i, r, t, f, u) });
    $(document).on("click", ".viewmorerecommend", function() { exclupro = $(this).data("product");
        index = $(this).data("page");
        LoadMoreLinePersonalize(exclupro, index, 12) });
    setTimeout(function() { LoadMoreHomeData() }, 4e3);
    setTimeout(function() { orderReview() }, 4e3);
    $("#slide-home a").on("click", function(n) { n.preventDefault(); var i = $(this).data("id"),
            t = $(this).attr("href");
        $.ajax({ url: "/aj/shared/CountClickBanner", method: "POST", data: { id: i }, complete: function() { t != undefined && t != "" && (window.location = t) } }) });
    location.search.indexOf("AddCouponFromUrl") != -1 && (t = location.search.indexOf("AddCouponFromUrl=1") != -1 ? "anh" : "chị", n = "", location.hash == "#expirydate" || location.hash == "#used" ? (i = decodeURI(location.search.slice(location.search.indexOf("nameWithGender") + 15)), r = location.hash == "#expirydate" ? " đã hết hạn" : " đã được dùng", n = "Phiếu mua hàng của " + i + r) : n = "Phiếu mua hàng này không áp dụng với số điện thoại của " + t + ".", alertify.alert(n), window.history.pushState({}, document.title, "/"));
    samePromotion.init();
    ShowPopupOffStore();
    boxComboCorona.init() });
personalizeLoading = !1;
flashsale = { owlFlashSales: {}, init: function() { $(".tab-flashsale").each(function() { var n = $(this);
            n.attr("data-pageindex", 1);
            n.attr("data-pageowlindex", 0) });
        $(".fl-title .sptab").on("click", function() { var n = $(this);
            $(".fl-title .sptab").removeClass("act");
            n.addClass("act");
            $tab = $("#tab-flashsale-" + n.data("id"));
            $owlFlashSale.find("button").addClass("hint");
            $tab.html() !== undefined && $tab.html().trim() === "" ? $.ajax({ type: "get", url: "/aj/flashsales/FlashSaleBox", data: { id: n.data("id"), pageIndex: 0, pageSize: parseInt(n.data("size")) }, beforeSend: function() {}, success: function(n) { $tab.html(n);
                    $(".tab-flashsale").removeClass("act");
                    $tab.addClass("act");
                    $tab.addClass("owl-carousel").addClass("owl-theme");
                    flashsale.slider($tab) }, error: function() {} }) : ($(".tab-flashsale").removeClass("act"), $tab.addClass("act"));
            flashsale.hover($tab) });
        flashsale.slider($(".owl-flashsale"));
        flashsale.hover($(".owl-flashsale"));
        flashsale.initCountdown() }, initCountdown: function() { $(".flashsale .countdownid").each(function() { var n = $(this);
            n.countdown(n.data("date"), { precision: 1e3 }).on("update.countdown", function(t) { flashsale.updateCountdown(n, t) }) }) }, updateCountdown: function(n, t) { if (t.offset.totalDays == 0) { var i = t.offset.hours,
                u = i < 10 ? "0" + i : i,
                f = t.offset.minutes < 10 ? "0" + t.offset.minutes : t.offset.minutes,
                r = t.offset.seconds < 10 ? "0" + t.offset.seconds : t.offset.seconds;
            n.find(".hours").text(u + ":");
            n.find(".minutes").text(f + ":");
            n.find(".seconds").text(r);
            u === "00" && f === "00" && (r === "00" || r === "01") && flashsale.refresh() } else n.find(".hours").text("hơn " + t.offset.totalDays + " ngày"), n.find(".minutes").text(""), n.find(".seconds").text("") }, slider: function(n) { $owlFlashSale = n; var t = $owlFlashSale.owlCarousel({ navText: ["", ""], items: 4, slideBy: 4, nav: !0, dots: !1, loop: !1, lazyLoad: !0, autoplay: !1, autoplayHoverPause: !0, autoHeight: !1, onInitialized: function() { lazy($owlFlashSale.find("img"));
                $owlFlashSale.find("button").addClass("hint");
                flashsale.owlFlashSales[$owlFlashSale.attr("id")] = t }, onTranslated: function(n) { lazy($owlFlashSale.find("img")); var t = n.item.index / 4;
                flashsale.loadAllFlashSales(n, t) } }) }, hover: function(n) { n.mouseenter(function() { n.find("button").removeClass("hint") }).mouseleave(function() { n.find("button").addClass("hint") }) }, loadAllFlashSales: function(n, t) { if (n.namespace) { n = n.relatedTarget; var i = parseInt(n.$element.attr("data-pageindex")),
                r = parseInt(n.$element.attr("data-pageowlindex")),
                u = parseInt(n.$element.attr("data-totalpage")); if (t > r) { if (i > u) return;
                $.get("/aj/flashsales/FlashSaleBox", { id: n.$element.data("id"), allLazy: !0, pageIndex: i, pageSize: parseInt(n.$element.data("size")) }, function(t) { var f, r, u; for (t = $(t), f = t.find(".product"), r = 0; r < f.prevObject.length; r++) u = $(f.prevObject[r]), u.hasClass("product") && (u.find("img").removeClass("lazy").addClass("owl-lazy"), n.add(u));
                    i++;
                    n.$element.removeAttr("data-pageindex");
                    n.$element.attr("data-pageindex", i);
                    n.refresh();
                    n.$element.trigger("refresh.owl.carousel", [n]) }) } } }, refresh: function() { $.ajax({ type: "get", url: "/aj/flashsales/FlashSaleBox", data: { ajax: !0 }, "async": !0, beforeSend: function() {}, success: function(n) { n.trim() !== "" ? ($(".flashsale").html(""), $(".flashsale").html(n), flashsale.init()) : $(".flashsale").remove() }, error: function() {} }) }, popupRule: function() { $.ajax({ type: "get", url: "/aj/flashsales/RuleFlashSale", data: { ajax: !0 }, "async": !0, beforeSend: function() { ajLoading(!0) }, success: function(n) { ajLoading(!1);
                alertify.alert().set({ transition: "zoom", message: n }).show(!0, "ruleflashsale-over") }, error: function() { ajLoading(!1) } }) } };
samePromotion = { init: function() { $.ajax({ url: "/aj/SamePromotion/GetSamePromotion", type: "Get", success: function(n) { n.Code === 200 ? $(".groupcate").before(n.Msg) : n.Code === 302 || console.log("error same promotion") }, error: function() { console.log("error same promotion") } });
        samePromotion.eventSame() }, eventSame: function() { $(document).on("click", ".same-promotion-list .never-show-promo", function() { $.ajax({ url: "/aj/SamePromotion/NeverShowSamePromo", type: "Get", success: function() { $(".same-promotion-list").hide("slow") }, error: function() { console.log("error never show same promotion") } }) });
        $(document).on("click", ".same-promotion-item .use", function(n) { var t = $(n.target).parent().data("promo"),
                i = $(n.target).parent().data("iscoupon");
            $.ajax({ url: "/aj/SamePromotion/UsePromotion", type: "Get", beforeSend: function() { ajLoading(!0, "Đang tải..") }, data: { code: t, isCoupon: i }, success: function(n) { if (ajLoading(!1), n.Code === 200) samePromotion.addToCart(n.Msg, t);
                    else if (n.Code === 400) alertify.alert(n.Msg);
                    else { var i = JSON.parse(n.Msg);
                        i.type == 1 ? alertify.confirm(i.Msg, function() { samePromotion.deleteAllVoucher(i.phone, t) }).set("labels", { ok: "ĐỒNG Ý", cancel: "QUAY LẠI" }).set("reverseButtons", !0) : alertify.confirm(i.Msg, function() { samePromotion.deleteCoupon(i.phone, t) }).set("labels", { ok: "ĐỒNG Ý", cancel: "QUAY LẠI" }).set("reverseButtons", !0) } }, error: function() { ajLoading(!1);
                    console.log("error use same promotion") } }) }) }, addToCart: function(n, t) { $.ajax({ url: "/gio-hang/Order/ApplyCoupon", type: "POST", data: { phoneNumber: n, couponCode: t, source: "fromUrl" }, cache: !1, beforeSend: function() { ajLoading(!0, "Đang tải..") }, success: function(n) { if (ajLoading(!1), n.Code === 200) { var i = JSON.parse(n.Msg); if (i.model.Cart.VoucherError !== null && i.model.Cart.VoucherError !== "") return alertify.alert(i.model.Cart.VoucherError), !1; if (i.model.Cart.CouponError !== null && i.model.Cart.CouponError !== "") return alertify.alert(i.model.Cart.CouponError), !1;
                    $(".same-promotion-item").each(function() { $(this).data("promo") == t && ($(this).find(".bhx-check").removeClass("hidden"), $(this).find(".use").addClass("hidden")) }) } else console.log("error add same promo to cart") }, error: function() { ajLoading(!1) } }) }, deleteAllVoucher: function(n, t) { $.ajax({ url: "/aj/SamePromotion/ClearAllVoucher", type: "Get", beforeSend: function() { ajLoading(!0, "Đang tải..") }, success: function() { ajLoading(!1);
                $(".same-promotion-item").each(function() { $(this).data("iscoupon") != undefined && $(this).data("iscoupon") == "False" && ($(this).find(".bhx-check").hasClass("hidden") == !1 && $(this).find(".bhx-check").addClass("hidden"), $(this).find(".use").removeClass("hidden")) });
                samePromotion.addToCart(n, t) }, error: function() { ajLoading(!1);
                console.log("error clear voucher") } }) }, deleteCoupon: function(n, t) { $.ajax({ url: "/aj/SamePromotion/ClearCoupon", type: "Get", beforeSend: function() { ajLoading(!0, "Đang tải..") }, success: function() { ajLoading(!1);
                $(".same-promotion-item").each(function() { $(this).data("iscoupon") != undefined && $(this).data("iscoupon") == "True" && ($(this).find(".bhx-check").hasClass("hidden") == !1 && $(this).find(".bhx-check").addClass("hidden"), $(this).find(".use").removeClass("hidden")) });
                samePromotion.addToCart(n, t) }, error: function() { ajLoading(!1);
                console.log("error clear coupon") } }) } };
captcha = { init: function() { if ($(".g-recaptcha").length > 0 && typeof grecaptcha != "undefined") { var n = $(".g-recaptcha");
            grecaptcha.render($(n).attr("id"), { sitekey: "6LeLXuQUAAAAAIcoiIg4dqHsBv20wnTlUypJ9Qha", size: "invisible", callback: function(n) { captcha.onCallBack(n) } }) }
        $(".frm-customer .btn-submit").on("click", captcha.validate) }, validate: function(n) { n.preventDefault();
        grecaptcha.execute() }, onCallBack: function(n) { console.log(n) } };
homeback = { loadProductLocalstore: function(n, t) { var r; if (typeof localStorage !== undefined && localStorage.getItem("datacomback") != null) { var u = JSON.parse(localStorage.getItem("datacomback")),
                f = n + "k" + t,
                i = u.find(n => n.key == f);
            i != null && i !== undefined && (r = $("section").find(".groupfeature[data-cate=" + n + "]"), i.value !== undefined && i.value !== "" && ($(r).find("ul.cate.cateproduct").append(i.value), lazy("img.lazy")), i.htmlmore !== undefined && ($(r).find("div.viewmore.noafter").remove(), $(r).append(i.htmlmore.trim()))) } }, setProductLocalstore: function(n, t, i, r) { var e = n + "k" + t,
            f = localStorage.getItem("datacomback"),
            u, s, o, h;
        f == null ? (localStorage.setItem("datacomback", ""), u = [{ key: e, value: i, htmlmore: r }], f = JSON.stringify(u), localStorage.setItem("datacomback", f)) : (u = JSON.parse(f), s = u.some(n => n.key == e), s ? (o = u.findIndex(n => n.key == e), u[o].value = i, u[o].htmlmore = htmlMore) : (h = { key: e, value: i, htmlmore: r }, u.push(h)), f = JSON.stringify(u), localStorage.setItem("datacomback", f)) }, initcomback: function(n, t) { var r, i;
        performance.navigation.type == 2 ? typeof localStorage !== undefined && localStorage.getItem("datacomback") != null && (r = JSON.parse(localStorage.getItem("datacomback")), typeof lstCateGroup != "undefined" && (i = lstCateGroup.split(","), n == !0 && (i = [t]), $.each(i, function(n, t) { for (var f, u, i = 0; i < 30; i++) { if (f = t + "k" + i, u = r.find(n => n.key == f), u == null || u == undefined) break;
                homeback.loadProductLocalstore(t, i) } }))) : localStorage.removeItem("datacomback") } };
boxComboCorona = { loading: !1, init: function() { boxComboCorona.initEvent();
        boxComboCorona.initCarousel() }, initEvent: function() { $(document).on("click", ".line-combocorona .product", function(n) {
            (n.preventDefault(), productId = $(this).data("product"), boxComboCorona.loading) || (boxComboCorona.loading = !0, $.ajax({ url: "/aj/Home/PopupProductComboCorona", type: "Get", data: { productId: productId }, success: function(n) { if (boxComboCorona.loading = !1, n) { $("body").append(n);
                        $("body").addClass("disable-scroll");
                        initFillButtonBuy();
                        $(".popup-combocorona .product-combocorona").on("click", ".close", function() { boxComboCorona.closePopup() });
                        $(".popup-combocorona").on("click", ".popup-combocorona-overlay", function() { boxComboCorona.closePopup() }) } }, error: function() { console.log("boxComboCorona.loading error");
                    boxComboCorona.loading = !1 } })) });
        $(".line-combocorona").on("click", ".viewmore", function() { var n = $(this).data("excludes");
            boxComboCorona.loadMoreProduct(n) }) }, initCarousel: function() { $slidecombocorona = $(".slide-combo");
        $slidecombocorona.owlCarousel({ items: 4, nav: !0, navText: ["", ""], loop: !1, autoplay: !1, autoplayHoverPause: !0, lazyLoad: !0, autoHeight: !1, dots: !1, onInitialized: function() { $slidecombocorona.find("button").addClass("hint") } }) }, loadMoreProduct: function(n) { boxComboCorona.loading || (boxComboCorona.loading = !0, $.ajax({ url: "/aj/Home/LoadMoreLineComboCorona", type: "Get", data: { excludes: n }, success: function(n) { boxComboCorona.loading = !1;
                $(".line-combocorona .viewmore").remove();
                n && ($(".line-combocorona .cate").append(n), lazy(".line-combocorona img.lazy")) }, error: function() { console.log("boxComboCorona.loading error");
                boxComboCorona.loading = !1 } })) }, closePopup: function() { $(".popup-combocorona").remove();
        $("body").removeClass("disable-scroll") } };
$(window).on("load", function() { $(".buyevoucher").on("click", function() { window.location = "/dat-mua-phieu-mua-hang" });
    cash_voucher.init() });
cash_voucher = { init: function() { $.fn.FloatLabel && $(".js-float-label-wrapper").FloatLabel();
        $(".evoucher .voucher-main .voucher-pricechoose .pricevoucher").hasClass("selected") || ($("#hdQuantityAddToCart").attr("disabled", "disabled"), $(".evoucher .voucher-main .voucher-number span.up").addClass("disable"), $(".voucher-totalprice .total").text(cash_voucher.calc(0, 0)));
        $(".evoucher .voucher-main .voucher-pricechoose .pricevoucher").on("click", function() { $(".evoucher .voucher-main .voucher-pricechoose .pricevoucher").removeClass("selected");
            $(this).addClass("selected"); var n = parseInt($("#hdQuantityAddToCart").val());
            isNaN(n) && (n = 1);
            n == 0 && (n++, $(".evoucher .voucher-main .error-price").text(""), $("#hdQuantityAddToCart").removeAttr("disabled"), $(".evoucher .voucher-main .voucher-number span.up").removeClass("disable"));
            $("#hdQuantityAddToCart").val(n);
            $(".voucher-totalprice .total").text(cash_voucher.calc($(".pricevoucher.selected > span").data("price"), n)) });
        $(".evoucher .voucher-main .voucher-number input#hdQuantityAddToCart").on("focusout", function() { var n = parseInt($("#hdQuantityAddToCart").val());
            isNaN(n) && (n = 1, $(".evoucher .voucher-main .voucher-number span.down").addClass("disable"), $("#hdQuantityAddToCart").val(n), $(".voucher-totalprice .total").text(cash_voucher.calc($(".pricevoucher.selected > span").data("price"), parseInt($("#hdQuantityAddToCart").val()))));
            n >= 100 && ($(".warning.warning-quantity").text("Số lượng được mua tối đa trong một lần mua: 100 phiếu"), $(this).addClass("disable"));
            $(".evoucher .voucher-main .voucher-number span.up").hasClass("disable") || ($("#hdQuantityAddToCart").val(n), $(".evoucher .voucher-main .voucher-number span.down").removeClass("disable"), $(".voucher-totalprice .total").text(cash_voucher.calc($(".pricevoucher.selected > span").data("price"), parseInt($("#hdQuantityAddToCart").val()))), n >= 100 && ($(".warning.warning-quantity").text("Số lượng được mua tối đa trong một lần mua: 100 phiếu"), $(".evoucher .voucher-main .voucher-number span.up").addClass("disable"))) });
        $(".evoucher .voucher-main .voucher-number span.up").on("click", function() { if (!$(this).hasClass("disable")) { var n = parseInt($("#hdQuantityAddToCart").val());
                isNaN(n) && (n = 0);
                n >= 100 && ($(".warning.warning-quantity").text("Số lượng được mua tối đa trong một lần mua: 100 phiếu"), $(this).addClass("disable"));
                n++;
                $("#hdQuantityAddToCart").val(n);
                $(".evoucher .voucher-main .voucher-number span.down").removeClass("disable");
                $(".voucher-totalprice .total").text(cash_voucher.calc($(".pricevoucher.selected > span").data("price"), parseInt($("#hdQuantityAddToCart").val())));
                n >= 100 && ($(".warning.warning-quantity").text("Số lượng được mua tối đa trong một lần mua: 100 phiếu"), $(this).addClass("disable")) } });
        $(".evoucher .voucher-main .voucher-number span.down").on("click", function() { if (!$(this).hasClass("disable")) { var n = parseInt($("#hdQuantityAddToCart").val());
                (isNaN(n) || n == 1) && (n = 2);
                n--;
                $("#hdQuantityAddToCart").val(n);
                $(".evoucher .voucher-main .voucher-number span.up").removeClass("disable");
                $(".voucher-totalprice .total").text(cash_voucher.calc($(".pricevoucher.selected > span").data("price"), parseInt($("#hdQuantityAddToCart").val())));
                n == 1 && $(this).addClass("disable") } });
        $(".voucher-phone input.txtPhone").on("keydown, keyup", function() { this.value.length > 10 ? cash_voucher.validatePhone(this.value) ? ($(".evoucher .error.error-phone").text(""), $(".evoucher .error.error-phone").hide(), $(".txtPhone").removeClass("errorinput")) : ($(".evoucher .error.error-phone").text("Số điện thoại không hợp lệ"), $(".evoucher .error.error-phone").show(), $(".txtPhone").addClass("errorinput")) : ($(".evoucher .error.error-phone").text(""), $(".evoucher .error.error-phone").hide(), $(".txtPhone").removeClass("errorinput")) });
        $(document).on("click", ".confirm-payment .popupconfirm_close", function() { $(".popupConfirm .ajs-cancel").trigger("click") });
        $("#hdQuantityAddToCart").on("keyup", function() { parseInt(this.value) > 100 ? (this.value = 100, $(".evoucher .voucher-main .voucher-number span.down").removeClass("disable"), $(".warning.warning-quantity").text("Số lượng được mua tối đa trong một lần mua: 100 phiếu"), $(".evoucher .voucher-main .voucher-number span.up").addClass("disable")) : parseInt(this.value) <= 0 ? (this.value = 1, $(".evoucher .voucher-main .voucher-number span.down").addClass("disable"), $(".warning.warning-quantity").text("Số lượng được mua tối thiểu trong một lần mua: 1 phiếu"), $(".evoucher .voucher-main .voucher-number span.up").removeClass("disable")) : ($(".warning.warning-quantity").text(""), $(".evoucher .voucher-main .voucher-number span.up").removeClass("disable"), $(".evoucher .voucher-main .voucher-number span.down").removeClass("disable"), parseInt(this.value) <= 1 && $(".evoucher .voucher-main .voucher-number span.down").addClass("disable"));
            $(".voucher-totalprice .total").text(cash_voucher.calc($(".pricevoucher.selected > span").data("price"), parseInt($("#hdQuantityAddToCart").val()))) });
        $(".evoucher .voucher-main .voucher-label > b").on("click", function() { $(".evoucher .voucher-main #voucher-tooltip").toggleClass("hidden") });
        $("#voucher-tooltip .icon-shipfree-close").on("click", function() { var t = $(this),
                n = $(t).parents("#voucher-tooltip");
            typeof n != "undefined" && $(n).length > 0 && $(n).toggleClass("hidden") });
        $(document).ready(function() { window.location.href.indexOf("dat-mua-phieu-mua-hang") > -1 ? $("footer > div").addClass("widthfull") : $("footer > div").removeClass("widthfull") }) }, calc: function(n, t) { if (isNaN(t)) return "0₫"; var i = parseInt(t * n).toString(); return i += "₫", i.replace(/\B(?=(\d{3})+(?!\d))/g, ".") }, confirm: function(n) { var t, i; if ($(".evoucher .voucher-main .voucher-pricechoose .pricevoucher").hasClass("selected") || $(".evoucher .voucher-main .error-price").text("Vui lòng chọn mệnh giá"), t = $(".txtPhone").val(), !cash_voucher.validatePhone(t)) { $(".evoucher .error.error-phone").text("Số điện thoại không hợp lệ");
            $(".evoucher .error.error-phone").show();
            $(".txtPhone").addClass("errorinput"); return } if (i = $("#hdQuantityAddToCart").val(), i == undefined || i == "") { $("#hdQuantityAddToCart").val(1);
            $(".evoucher .voucher-main .voucher-number span.down").addClass("disable");
            $(".warning.warning-quantity").text("Số lượng được mua tối thiểu trong một lần mua: 1 phiếu");
            $(".evoucher .voucher-main .voucher-number span.up").removeClass("disable");
            $(".voucher-totalprice .total").text(cash_voucher.calc($(".pricevoucher.selected > span").data("price"), parseInt($("#hdQuantityAddToCart").val()))); return } var r = $(".pricevoucher.selected").data("productcode").toString(),
            u = parseInt(i),
            f = parseInt($(".pricevoucher.selected > span").data("price")) * parseInt($("#hdQuantityAddToCart").val());
        $.ajax({ url: "/aj/EVoucher/PopupConfirm", data: { productCode: r, quantity: u, phoneNumber: t, transactionType: n, totalPrice: f }, type: "POST", beforeSend: function() { ajLoading(!0) }, success: function(i) { ajLoading(!1);
                alertify.alert().destroy();
                alertify.confirm().set({ startMaximized: !1, closable: !0, message: i, transition: "fade", onok: function() { cash_voucher.validate(r, u, t, n, f) } }).set("labels", { ok: "THANH TOÁN NGAY", cancel: "Huỷ bỏ" }).show(!0, "popupConfirm") }, error: function() { ajLoading(!1) } }) }, validate: function(n, t, i, r, u) { $.ajax({ url: "/aj/EVoucher/ValidateModel", data: { productCode: n, quantity: t, phoneNumber: i, transactionType: r, totalPrice: u }, type: "POST", beforeSend: function() { ajLoading(!0) }, success: function(f) { if (ajLoading(!1), f.Code != 0) switch (f.Code) {
                    case 1:
                        $(".error.error-general").text(f.Message); break;
                    case 2:
                        $(".error.error-price").text(f.Message); break;
                    case 7:
                        $(".error.error-general").text(f.Message); break;
                    case 3:
                        $(".warning.warning-quantity").text(f.Message); break;
                    case 4:
                        $(".warning.warning-quantity").text(f.Message);
                        $("#hdQuantityAddToCart").val(f.CurrentTotal); break;
                    case 5:
                    case 6:
                        $(".error.error-phone").text(f.Message);
                        $(".txtPhone").addClass("errorinput") } else cash_voucher.submit(n, t, i, r, u) }, error: function() { ajLoading(!1) } }) }, submit: function(n, t, i, r, u) { $.ajax({ url: "/gio-hang/Order/SubmitCashEvoucher", data: { productCode: n, quantity: t, phoneNumber: i, transactionType: r, totalPrice: u }, type: "POST", beforeSend: function() { ajLoading(!0) }, success: function(n) { ajLoading(!1);
                n.Code != 0 ? (alertify.alert().destroy(), alertify.alert(n.Msg)) : cash_voucher.redirectToPayment(n.OrderId, r, n.sc) }, error: function() { ajLoading(!1) } }) }, redirectToPayment: function(n, t, i) { $.ajax({ url: "/gio-hang/Order/UpdatePaymentOrderEvoucher", data: { orderId: n, paymentType: t, sc: i }, type: "POST", beforeSend: function() { ajLoading(!0) }, success: function(n) { var t, i;
                ajLoading(!1);
                t = JSON.parse(n.Msg);
                n.Code !== 200 ? t.url != undefined ? (alertify.alert().destroy(), alertify.alert(t.Message).set({ transition: "fade", closableByDimmer: !0, onok: function() { window.location = t.Url } })) : (alertify.alert().destroy(), alertify.alert(t.Message)) : t.RedirectUrl !== "" && t.RedirectUrl !== undefined && (i = 5, alertify.alert().destroy(), alertify.alert().setting({ label: "Chuyển ngay", closableByDimmer: !1, message: "<div class='popupOnePay'>Bạn đang được chuyển sang trang <span class='icon-onepay'><\/span><br/> để thanh toán trong vòng <span class='timer'>5<\/span> giây nữa ...<\/div>", onok: function() { window.location = t.RedirectUrl } }).show(!0, "popupOnePay"), setInterval(function() { $(".timer").html(i);
                    i <= 0 ? $(".popupOnePay .ajs-close").trigger("click") : i-- }, 1e3)) }, error: function() { ajLoading(!1) } }) }, validatePhone: function(n) { return /^((01(\d){9})|(0[35789](\d){8}))$/.test(n) }, isNumberKey: function(n) { var t = n.which ? n.which : n.keyCode; return t !== 46 && t > 31 && (t < 48 || t > 57) ? !1 : !0 } };