import React from 'react';

const randomimages=[
    {
        id:0,
        title:"Iphone 15 ",
        oldprice:13600,
        newprice:11000.45,
        sold:77,
        image:"https://cdn.mos.cms.futurecdn.net/yDn3ZSXu9eSBxmXQDZ4PCF-1200-80.jpg",
        carouselImages:[
            "https://cdn.mos.cms.futurecdn.net/yDn3ZSXu9eSBxmXQDZ4PCF-1200-80.jpg",
            "https://www.zdnet.com/a/img/resize/a423a6f916db19efae20b0d749e728a8319a309b/2023/09/12/29be3e47-9f70-4dbe-aa37-58719088b48f/old-iphones-apple-store.jpg?auto=webp&fit=crop&height=1200&width=1200",
            "https://fdn.gsmarena.com/imgroot/news/23/09/iphone-15-dummies-colors-video/inline/-1200/gsmarena_001.jpg",
            "https://static.standard.co.uk/2023/09/19/18/Apple%20iPhone%20home%20screen.jpeg?crop=8:5,smart&quality=75&auto=webp&width=1024",

        ],
        description:"Experience the pinnacle of innovation with the iPhone 15.",
        addons:true,
        more:[
            "https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/02/FpTc36oWIAAagw8-photoutils.com_.jpeg?ssl=1",
            "https://www.dpreview.com/files/p/articles/2668153890/Apple-iPhone-15-Pro-lineup-color-lineup-230912.jpeg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Jlanfv1mE32AOQ3OvKGZ12OnAUXUFu6Ceg&s"
        ]

    },
    {
        id:1,
        title:"Toys For Kids",
        oldprice:770,
        sold:450,
        newprice:700,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNaI4Hv3SfBuWQ73RqG4pKP28NTrzuDFjrHg&s",
        carouselImages:[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNaI4Hv3SfBuWQ73RqG4pKP28NTrzuDFjrHg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3HqR9YOvQIAauIXKUM4KffjzhArd6dWP9BKynb2gN-cqGlzfKTArLOao5923QOE7y04c&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSXeZTzowRJbl_BBQVVjewv1jDy1adg3p9uw&s",
            "https://static.independent.co.uk/2024/03/19/09/Gifts%20for%205yo%203.jpg?quality=75&width=640&crop=3%3A2%2Csmart&auto=webp",
            "https://m.media-amazon.com/images/I/81ap+We87nL.jpg"

        ],
        description:"",
        addons:false,
        more:[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OfikUDigqpmmL2xsN0hQitk9Z2Kn7slZHQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbmAWJk98ms7ZuXPlM-20NQQZ1CoiqOTKWvQ&s",
            "https://img.etimg.com/thumb/width-1200,height-900,imgsize-22024,resizemode-75,msid-101600383/news/international/us/ai-chatgpt-powered-smart-toys-may-soon-be-unveiled-heres-everything-parents-need-to-know-ahead-of-holiday-season.jpg"
        ]

    },
    {
        id:2,
        title:"Kid's Bicycle",
        oldprice:1300,
        sold:112,
        newprice:990,
        image:"https://pk-live-21.slatic.net/kf/Sd51a37e9e11343de98b517d20db6ffecP.jpg_750x750.jpg_.webp",
        carouselImages:[
            "https://pk-live-21.slatic.net/kf/Sd51a37e9e11343de98b517d20db6ffecP.jpg_750x750.jpg_.webp",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJvR8f6YJtphM6575xQE2VN0gcW59UUCWRoQ&s",
            "https://5.imimg.com/data5/SELLER/Default/2023/3/OR/UQ/AT/84375669/fm-bycycle-500x500.jpeg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyTtbfAdPs-7cDIBiN2Mesm_gwzsmeX7glFQ&s",

        ],
        description:"Gear Up for Outdoor Fun",
        addons:false,
        more:[
            "https://ionicbikes.com/wp-content/uploads/2020/10/Johnny-Rotten-Medium-Specs-Geometry.png",
            "https://billbonebikelaw.com/wp-content/uploads/2015/06/Parts-of-bicycle-anatomy.png"
        ]

    },
    {
        id:3,
        title:"Equip your kitchen",
        oldprice:79,
        newprice:70,
        sold:497,
        image:"https://pictures-ghana.jijistatic.net/34838853_NjIwLTYxOC04NjdiYWY2MjU0.webp",
        carouselImages:[
            "https://pictures-ghana.jijistatic.net/34838853_NjIwLTYxOC04NjdiYWY2MjU0.webp",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvHryoHJk-CyAR9YdHlX3U3LlJo3YB7f1OVA&s",
            "https://pictures-ghana.jijistatic.net/24438707_NjIwLTYyMC1hYjc0MGJkMDA0LTE.webp",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYU4JnVa8I3vziPnuDF6XN8zB5c_8L6Hzyrg&s",

        ],
        description:"Your Perfect Kitchen Companion",
        addons:true,
        more:[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4EeTD25CJdLkSrqz-rQQ_IRRiAXun1-BcFg&s",
            "https://pictures-ghana.jijistatic.net/6171183_bamboo-expandable-wooden-cutlery-tray-spoon-holder-tidy_620x620.webp",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXqaJEgItKC2iJOQkt4Niidu3is48YfSgkPw&s"
        ]

    },
    {
        id:4,
        title:"Perfect Men's Suit",
        oldprice:2300,
        newprice:2150,
        sold:879,
        image:"https://m.media-amazon.com/images/I/51EqJ+xDVuL._AC_SL1300_.jpg",
        carouselImages:[
            "https://i.ebayimg.com/images/g/3VoAAOSwDbxiiu~c/s-l1200.webp",
            "https://images-cdn.ubuy.co.in/6624450cac816b1745289d9e-mys-men-39-s-3-piece-slim-fit-suit-set.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHlsCzGUPDAMD0v7pHqlLNLAN83hEwJIScRA&s",

        ],
        description:"Classic Suits for Modern Men",
        addons:true,
        more:[
            "https://m.media-amazon.com/images/S/aplus-media-library-service-media/358a8ad9-2118-4cf2-b96a-cd566c7f9445.__CR0,0,970,600_PT0_SX970_V1___.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYTn19tUI6OOXE6HgN4V9AS83c5q1NHEAWRQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrs4CO5ndmiatlPgegfoHqplOKSyztCGS6zw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIzGl0Z9YUDKQwQfYo9HwZ7MIIDHzAGWlCig&s"
        ]

    },
    {
        id:5,
        title:"Latest Nvidia RTX 3090",
        oldprice:1300.22,
        newprice:12100,
        sold:88,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx4h6i3hD2pHO1L08MBOeXKuiiNbGArvUv-9wLzk6-E7vMqo84-hAlqwVVma4-md-cII0&usqp=CAU",
        carouselImages:[
            "https://i5.walmartimages.com/seo/MSI-NVIDIA-GeForce-RTX-3090-Graphic-Card-24-GB-GDDR6X_b2ffed77-88b6-474c-ac3b-2aff4980a3fe.1c3f6986f87def446186fcad38a5fc95.jpeg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSHeaTGfAemJT_ngJRH-R7XjDBLlZj03S9HA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4w-kDZcWcSBGI6dZrIp8Q6G7UIxaQMNRlYA&s",

        ],
        description:"Level Up PC Performance With The New RTX 3090 24GB GDDR6X",
        addons:true,
        more:[
            "https://cdn.neowin.com/news/images/uploaded/2020/08/1598860334_gainward-geforce-rtx-3090-gs-specs-1.jpg",
           "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/03/nvidia-geforce-rtx-3090-ti-prices-specs-benchmarks-where-to-buy-featured.jpg",
           "https://imageio.forbes.com/specials-images/imageserve/5f4e828c7101cbd9e1de396e/GeForce-RTX-3090-Specs/960x0.jpg?height=425&width=711&fit=bounds"
        ]

    },
    {
        id:6,
        title:"Brazillian Hair",
        oldprice:3700,
        newprice:3650,
        sold:201,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh7Ywe0tBUcwmSNHr880egKsfexmhxwywljA&s",
        carouselImages:[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsEZJzhG_LKtrCS093HLU9VRFlms9hN7ePEA&s",
            "https://m.media-amazon.com/images/I/71ZTyOScL1L.jpg",
            "https://www.volure.co.za/cdn/shop/products/Brazilian_Hair_Kinky_Curl_1.jpeg?v=1485769304",

        ],
        description:"Radiate Beauty with Brazilian Hair",
        addons:false,
        more:[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdQv5Rmm0WUtn2cCEM07IRcWVY1SlghUyePQ&s",
            "https://m.media-amazon.com/images/I/71MAboYnFmS._SL1000_.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUUO8DruCGhGtCWXdZmSMxPlG0CCWutkQv1g&s"
        ]

    },
    {
        id:7,
        title:"Uno Games Available",
        oldprice:250.32,
        newprice:177.49,
        sold:49,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScP1lw8O_yEafInP3pfHpiFQyTJm6A9lBhEA&s",
        carouselImages:[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNLQUPp2IiTJ3W-wsB_YOLs1jfIxqQ2nf1uA&s",
            "https://shop.moomin.com/cdn/shop/products/1_252F7_252F4_252F0_252F1740b6e12e026edda7c88a62006148b1cee25b86_194735217267_uno_card_game_lifestyle_5_1000x.jpg?v=1716463005",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0J5XRZQ5DrTU0loJfsUz2hm_2WqJqJXiPpQ&s",

        ],
        description:"Shuffle, Play, Win: UNO Fun Begins!",
        addons:true,
        more:[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9QAiVrQ-B94OuY8Fd8pnItvkeDuZK730dMQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE7AC24C0zU4NrTyYBR0TUeFu_zBEhDoD-tg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmxyWCpg1VShlIe152BMNz-BBEulaNe9xjMg&s"
        ]

    },
    {
        id:8,
        title:"Sexy Korean Summer Tops",
        oldprice:210,
        newprice:199.99,
        sold:401,
        image:"https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/14/5703121/1.jpg?6981",
        carouselImages:[
            "https://img.lazcdn.com/g/p/36169e39de7464b500ef2841f8509da9.jpg_720x720q80.jpg",
            "https://i.ebayimg.com/images/g/3K8AAOSw6gxiO336/s-l1200.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkGJP59ugqmA8rCsjpMv4D_f2gncFFh8PX1w&s",

        ],
        description:"Cool and Chic: Korean Summer Tops",
        more:[
            "https://i.ebayimg.com/images/g/lqQAAOSwgeVgxgbn/s-l500.webp",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROQV5YEIVFIp4Lty3JtbRmQxQ5lEWWDLNTVA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-sre1YwAzriV0_GVD_aFSnRlusTlwDskwjw&s"
        ]

    },
    {
        id:9,
        title:"Triump Daytona 675",
        oldprice:5700,
        newprice:5500,
        sold:22,
        image:"https://smgmedia.blob.core.windows.net/images/113420/1920/triumph-daytona-675-petrol-d7b29b6f8b7d.jpg",
        carouselImages:[
            "https://www.racefit.co.uk/cdn/shop/products/117407704_301251374314221_5150924689160979950_n.jpg?v=1615025832",
            "https://m.media-amazon.com/images/I/6197Relo9lL._AC_UF1000,1000_QL80_.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGo-vISfEMuBhnq0Dn3gxEnAncujs_llyMw&s",

        ],
        description:"Unleash the Speed: Triumph Daytona 675 Awaits!",
        addons:true,
        more:[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRklepGMaRrRqMC92DZQvmVEKbZ02efp_JwPA&s",
            "https://images.91wheels.com/assets/b_images/main/triumph/daytona-675/triumph-daytona-675-1590502485.png?width=420&q=60?w=420&q=60",
            "https://ic.maxabout.us//misc/infographics//Triumph-Daytona-675R.jpg/thumb/650",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZ1J0ye6YoKK8cId_w1gIuhfok12U7-_unA&s"
        ]

    },
    {
        id:10,
        title:"Men's Shirt",
        oldprice:1000.78,
        newprice:807.99,
        image:"https://images-cdn.ubuy.co.in/659505b431359337db40eb15-sslr-mens-dress-shirts-casual-cotton.jpg",
        carouselImages:[
            "https://m.media-amazon.com/images/I/81qvTJLfEVL._AC_UL1500_.jpg",
            "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/75/504794/1.jpg?3839",
            "https://pictures-ghana.jijistatic.net/11927099_img-20200903-081549-579_620x465.webp",

        ],
        description:"Unleash Your Best Look",
        addons:true,
        more:[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSP0EQ8sWJzJaKRAuSD22SsJdQXYxYZuITeQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6yDwzdA4hrr6QAa7Zd-QeSLpZcZFz7-Lwig&s",
            "https://m.media-amazon.com/images/S/aplus-media-library-service-media/e5682ea3-43e9-49b8-b899-14794040486a.__CR0,0,970,600_PT0_SX970_V1___.jpg"
        ]

    },
    {
        id:11,
        title:"Women's Gym Short",
        oldprice:52.55,
        newprice:40.77,
        sold:72,
        image:"https://pictures-nigeria.jijistatic.net/126585709_NjIwLTYyMC01NjRkZjQ1ODRhLTE.webp",
        carouselImages:[
            "https://ae01.alicdn.com/kf/Sbb0ff355b7014b00972e066d7d1e3a82l/Cargo-Shorts-Women-Gym-Shorts-Scrunch-Butt-Booty-Tight-Shorts-Yoga-Workout-Clothes-For-Women-Fitness.jpg",
            "https://image.made-in-china.com/202f0j00linfCSRzfqcO/Wholesale-Sexy-Sports-Shorts-Gym-Yoga-Shorts-for-Women.jpg",
            "https://m.media-amazon.com/images/I/91QXoQWqI9L._AC_UY350_.jpg",

        ],
        description:"Empower Your Workout",
        more:[
            "https://i5.walmartimages.com/asr/ffed7596-fedf-42a6-b2ee-6b6b2a8fec3e_1.5c82108cf6f2941895ed54ff03fad065.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShWfFrdt07XPHnV7t3C9qQmxR15CfY8svc3w&s",
            "https://i5.walmartimages.com/asr/35d18440-6b9c-4831-8def-ae9b7997f83f.5af9c48c27bb1b72074e49c08e75c1b8.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
        ]

    },
    /* {
        id:"0",
        title:"",
        oldprice:"",
        newprice:"",
        image:"",
        carouselImages:[
            "",
            "",
            "",

        ],
        description:""

    },
    {
        id:"0",
        title:"",
        oldprice:"",
        newprice:"",
        image:"",
        carouselImages:[
            "",
            "",
            "",

        ],
        description:""

    },
    {
        id:"0",
        title:"",
        oldprice:"",
        newprice:"",
        image:"",
        carouselImages:[
            "",
            "",
            "",

        ],
        description:""

    },
    {
        id:"0",
        title:"",
        oldprice:"",
        newprice:"",
        image:"",
        carouselImages:[
            "",
            "",
            "",

        ],
        description:""

    },
    {
        id:"0",
        title:"",
        oldprice:"",
        newprice:"",
        image:"",
        carouselImages:[
            "",
            "",
            "",

        ],
        description:""

    },
    {
        id:"0",
        title:"",
        oldprice:"",
        newprice:"",
        image:"",
        carouselImages:[
            "",
            "",
            "",

        ],
        description:""

    },
    {
        id:"0",
        title:"",
        oldprice:"",
        newprice:"",
        image:"",
        carouselImages:[
            "",
            "",
            "",

        ],
        description:""

    },
    {
        id:"0",
        title:"",
        oldprice:"",
        newprice:"",
        image:"",
        carouselImages:[
            "",
            "",
            "",

        ],
        description:""

    },
    {
        id:"0",
        title:"",
        oldprice:"",
        newprice:"",
        image:"",
        carouselImages:[
            "",
            "",
            "",

        ],
        description:""

    },
    {
        id:"0",
        title:"",
        oldprice:"",
        newprice:"",
        image:"",
        carouselImages:[
            "",
            "",
            "",

        ],
        description:""

    },
    {
        id:"0",
        title:"",
        oldprice:"",
        newprice:"",
        image:"",
        carouselImages:[
            "",
            "",
            "",

        ],
        description:""

    },
    {
        id:"0",
        title:"",
        oldprice:"",
        newprice:"",
        image:"",
        carouselImages:[
            "",
            "",
            "",

        ],
        description:""

    },
    {
        id:"0",
        title:"",
        oldprice:"",
        newprice:"",
        image:"",
        carouselImages:[
            "",
            "",
            "",

        ],
        description:""

    },
    {
        id:"0",
        title:"",
        oldprice:"",
        newprice:"",
        image:"",
        carouselImages:[
            "",
            "",
            "",

        ],
        description:""

    },
    {
        id:"0",
        title:"",
        oldprice:"",
        newprice:"",
        image:"",
        carouselImages:[
            "",
            "",
            "",

        ],
        description:""

    },
    {
        id:"0",
        title:"",
        oldprice:"",
        newprice:"",
        image:"",
        carouselImages:[
            "",
            "",
            "",

        ],
        description:""

    },
    {
        id:"0",
        title:"",
        oldprice:"",
        newprice:"",
        image:"",
        carouselImages:[
            "",
            "",
            "",

        ],
        description:""

    },
    {
        id:"0",
        title:"",
        oldprice:"",
        newprice:"",
        image:"",
        carouselImages:[
            "",
            "",
            "",

        ],
        description:""

    },
    {
        id:"0",
        title:"",
        oldprice:"",
        newprice:"",
        image:"",
        carouselImages:[
            "",
            "",
            "",

        ],
        description:""

    },
 */
    
]

export default randomimages;