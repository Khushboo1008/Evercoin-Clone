export const SETTINGS = (infinite = true, autoplay = false, toShow=3, toScroll = 1) => {
    return ({
        infinite: true,
        slidesToShow: 10,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed:2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 320,
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            },
            {
                breakpoint: 800,
                settings: { slidesToShow: 4, slidesToScroll: 1 }
            },
        ]
    })
}