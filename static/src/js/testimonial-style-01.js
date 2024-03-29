odoo.define("theme_25fit.testimonial_style_01", function (require) {
    ("use strict");
    const publicWidget = require("web.public.widget");
    publicWidget.registry.TestimonialSection = publicWidget.Widget.extend({
        selector: ".testimonial-style-01",
        xmlDependencies: [],
        events: {},
        start: function () {
            this._initTestimonialSwiper();
            return this._super.apply(this, arguments);
        },
        _initTestimonialSwiper: function (ev) {
            const swiper = new Swiper(".testimonial-swiper", {
                slidesPerView: 1,
                pagination: {
                    el: ".testimonial-swiper .swiper-pagination-dots",
                    clickable: true,
                },
                autoplay: {
                    delay: 5000,
                },
                simulateTouch: false,
                effect: "fade",
                fadeEffect: {
                    crossFade: true,
                },
            });
        },
    });
});
