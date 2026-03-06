
!function (n) { "use strict"; var e, t = localStorage.getItem("language"), s = "en"; function a(e) { document.getElementById("header-lang-img") && ("en" == e ? document.getElementById("header-lang-img").src = "assets/images/flags/us.jpg" : "sp" == e ? document.getElementById("header-lang-img").src = "assets/images/flags/spain.jpg" : "gr" == e ? document.getElementById("header-lang-img").src = "assets/images/flags/germany.jpg" : "it" == e ? document.getElementById("header-lang-img").src = "assets/images/flags/italy.jpg" : "ru" == e && (document.getElementById("header-lang-img").src = "assets/images/flags/russia.jpg"), localStorage.setItem("language", e), null == (t = localStorage.getItem("language")) && a(s), n.getJSON("assets/lang/" + t + ".json", function (e) { n("html").attr("lang", t), n.each(e, function (e, t) { "head" === e && n(document).attr("title", t.title), n("[key='" + e + "']").text(t) }) })) } function c() { for (var e = document.getElementById("topnav-menu-content").getElementsByTagName("a"), t = 0, n = e.length; t < n; t++)"nav-item dropdown active" === e[t].parentElement.getAttribute("class") && (e[t].parentElement.classList.remove("active"), e[t].nextElementSibling.classList.remove("show")) } function l(e) { 1 == n("#light-mode-switch").prop("checked") && "light-mode-switch" === e ? (n("html").removeAttr("dir"), n("#dark-mode-switch").prop("checked", !1), n("#rtl-mode-switch").prop("checked", !1), n("#bootstrap-style").attr("href", "assets/css/bootstrap.min.css"), n("#app-style").attr("href", "assets/css/app.min.css"), sessionStorage.setItem("is_visited", "light-mode-switch")) : 1 == n("#dark-mode-switch").prop("checked") && "dark-mode-switch" === e ? (n("html").removeAttr("dir"), n("#light-mode-switch").prop("checked", !1), n("#rtl-mode-switch").prop("checked", !1), n("#bootstrap-style").attr("href", "assets/css/bootstrap-dark.min.css"), n("#app-style").attr("href", "assets/css/app-dark.min.css"), sessionStorage.setItem("is_visited", "dark-mode-switch")) : 1 == n("#rtl-mode-switch").prop("checked") && "rtl-mode-switch" === e && (n("#light-mode-switch").prop("checked", !1), n("#dark-mode-switch").prop("checked", !1), n("#bootstrap-style").attr("href", "assets/css/bootstrap-rtl.min.css"), n("#app-style").attr("href", "assets/css/app-rtl.min.css"), n("html").attr("dir", "rtl"), sessionStorage.setItem("is_visited", "rtl-mode-switch")) } function r() { document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || (console.log("pressed"), n("body").removeClass("fullscreen-enable")) } n("#side-menu").metisMenu(), n("#vertical-menu-btn").on("click", function (e) { e.preventDefault(), n("body").toggleClass("sidebar-enable"), 992 <= n(window).width() ? n("body").toggleClass("vertical-collpsed") : n("body").removeClass("vertical-collpsed") }), n("#sidebar-menu a").each(function () { var e = window.location.href.split(/[?#]/)[0]; this.href == e && (n(this).addClass("active"), n(this).parent().addClass("mm-active"), n(this).parent().parent().addClass("mm-show"), n(this).parent().parent().prev().addClass("mm-active"), n(this).parent().parent().parent().addClass("mm-active"), n(this).parent().parent().parent().parent().addClass("mm-show"), n(this).parent().parent().parent().parent().parent().addClass("mm-active")) }), n(document).ready(function () { var e; 0 < n("#sidebar-menu").length && 0 < n("#sidebar-menu .mm-active .active").length && (300 < (e = n("#sidebar-menu .mm-active .active").offset().top) && (e -= 300, n(".vertical-menu .simplebar-content-wrapper").animate({ scrollTop: e }, "slow"))) }), n(".navbar-nav a").each(function () { var e = window.location.href.split(/[?#]/)[0]; this.href == e && (n(this).addClass("active"), n(this).parent().addClass("active"), n(this).parent().parent().addClass("active"), n(this).parent().parent().parent().addClass("active"), n(this).parent().parent().parent().parent().addClass("active"), n(this).parent().parent().parent().parent().parent().addClass("active"), n(this).parent().parent().parent().parent().parent().parent().addClass("active")) }), n('[data-toggle="fullscreen"]').on("click", function (e) { e.preventDefault(), n("body").toggleClass("fullscreen-enable"), document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement ? document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen() : document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) }), document.addEventListener("fullscreenchange", r), document.addEventListener("webkitfullscreenchange", r), document.addEventListener("mozfullscreenchange", r), n(".right-bar-toggle").on("click", function (e) { n("body").toggleClass("right-bar-enabled") }), n(document).on("click", "body", function (e) { 0 < n(e.target).closest(".right-bar-toggle, .right-bar").length || n("body").removeClass("right-bar-enabled") }), function () { if (document.getElementById("topnav-menu-content")) { for (var e = document.getElementById("topnav-menu-content").getElementsByTagName("a"), t = 0, n = e.length; t < n; t++)e[t].onclick = function (e) { "#" === e.target.getAttribute("href") && (e.target.parentElement.classList.toggle("active"), e.target.nextElementSibling.classList.toggle("show")) }; window.addEventListener("resize", c) } }(), [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function (e) { return new bootstrap.Tooltip(e) }), [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function (e) { return new bootstrap.Popover(e) }), window.sessionStorage && ((e = sessionStorage.getItem("is_visited")) ? (n(".right-bar input:checkbox").prop("checked", !1), n("#" + e).prop("checked", !0), l(e)) : sessionStorage.setItem("is_visited", "light-mode-switch")), n("#light-mode-switch, #dark-mode-switch, #rtl-mode-switch").on("change", function (e) { l(e.target.id) }), n("#password-addon").on("click", function () { 0 < n(this).siblings("input").length && ("password" == n(this).siblings("input").attr("type") ? n(this).siblings("input").attr("type", "input") : n(this).siblings("input").attr("type", "password")) }), "null" != t && t !== s && a(t), n(".language").on("click", function (e) { a(n(this).attr("data-lang")) }), n(window).on("load", function () { n("#status").fadeOut(), n("#preloader").delay(350).fadeOut("slow") }), Waves.init(), n("#checkAll").on("change", function () { n(".table-check .form-check-input").prop("checked", n(this).prop("checked")) }), n(".table-check .form-check-input").change(function () { n(".table-check .form-check-input:checked").length == n(".table-check .form-check-input").length ? n("#checkAll").prop("checked", !0) : n("#checkAll").prop("checked", !1) }) }(jQuery);


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.special-select').forEach(specialSelect => {
        if (specialSelect) {
            specialSelect.style = "display: none;";
            const multiselectDiv = document.createElement('div');
            multiselectDiv.classList.add('multiselect');
            const multiselectInput = document.createElement('input');
            multiselectInput.type = 'text';
            multiselectInput.classList.add('multiselect-input');
            multiselectInput.readOnly = true;
            multiselectInput.placeholder = 'Seçenekleri belirtin';
            const multiselectOptions = document.createElement('div');
            multiselectOptions.classList.add('multiselect-options');
            specialSelect.parentElement.insertBefore(multiselectDiv, specialSelect);
            multiselectDiv.appendChild(multiselectInput);
            multiselectDiv.appendChild(multiselectOptions);
            multiselectOptions.appendChild(specialSelect);
            const customOptions = document.createElement('div');
            customOptions.classList.add('custom-options');
            multiselectOptions.appendChild(customOptions);
        }
    });
});
const specialMultiInputOptions = {
    maxDisplayLabels: 5,
    placeholder_choice: 'Lütfen bir seçim yapınız',
    placeholder_all_selected: 'Tümü seçildi', 
    placeholder_selected_item: (count) => count + " adet eleman seçildi!",
}
function updateInputPlaceholderAndValue(selectElement, multiselectInput, multiselectOptions) {
    const selectedOptions = Array.from(selectElement.querySelectorAll('option:checked'));
    const selectedLabels = selectedOptions.map(option => option.textContent);
    if (selectedLabels.length == 0) {
        multiselectInput.placeholder = specialMultiInputOptions.placeholder_choice;
    }
    else if (selectedLabels.length == selectElement.querySelectorAll('option').length) {
        multiselectInput.placeholder = specialMultiInputOptions.placeholder_all_selected;
    } else if (selectedLabels.length > specialMultiInputOptions.maxDisplayLabels) {
        multiselectInput.placeholder = specialMultiInputOptions.placeholder_selected_item(selectedLabels.length);
    } else {
        multiselectInput.placeholder = selectedLabels.join(', ');
    }
    const selectAll = multiselectOptions.querySelector('.select-all');
    if (selectAll) {
        selectAll.checked = selectedLabels.length === selectElement.querySelectorAll('option').length;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.multiselect').forEach(multiselect => {
        const selectElement = multiselect.querySelector('select');
        const multiselectInput = multiselect.querySelector('.multiselect-input');
        const multiselectOptions = multiselect.querySelector('.multiselect-options');
        multiselectOptions.addEventListener('change', () => updateInputPlaceholderAndValue(selectElement, multiselectInput, multiselectOptions));
        const selectAllWrapper = document.createElement('div');
        const selectAllLabel = document.createElement('label');
        const selectAll = document.createElement('input');
        selectAll.type = 'checkbox';
        selectAll.className = 'select-all';
        selectAllLabel.appendChild(selectAll);
        selectAllLabel.appendChild(document.createTextNode('Select all'));
        selectAllWrapper.appendChild(selectAllLabel);
        multiselectOptions.appendChild(selectAllWrapper);
        selectAll.addEventListener('change', () => {
            const isSelected = selectAll.checked;
            selectElement.querySelectorAll('option').forEach(option => {
                option.selected = isSelected;
            });
            multiselectOptions.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                if (checkbox !== selectAll) {
                    checkbox.checked = isSelected;
                }
            });
            updateInputPlaceholderAndValue(selectElement, multiselectInput, multiselectOptions);
        });
        selectElement.querySelectorAll('option').forEach(option => {
            const optionWrapper = document.createElement('div');
            const optionLabel = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = option.selected;

            optionLabel.appendChild(checkbox);
            optionLabel.appendChild(document.createTextNode(option.textContent));
            optionWrapper.appendChild(optionLabel);
            multiselectOptions.appendChild(optionWrapper);
            checkbox.addEventListener('change', () => {
                option.selected = checkbox.checked;
                updateInputPlaceholderAndValue(selectElement, multiselectInput, multiselectOptions);
            });
        });
        multiselectInput.addEventListener('click', () => {
            multiselectOptions.style.display = multiselectOptions.style.display === 'block' ? 'none' : 'block';
        });
        document.addEventListener('click', (event) => {
            if (!multiselect.contains(event.target)) {
                multiselectOptions.style.display = 'none';
            }
        });
        updateInputPlaceholderAndValue(selectElement, multiselectInput, multiselectOptions);
    });

});