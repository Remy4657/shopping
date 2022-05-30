import * as actionTypes from "./type";



const INITIAL_STATE = {
    products: [{
            "id": 1,
            "price": 100,
            "img": "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
            "title": "SUMMER SALE",
            "desc": "Loại áo này “khó tính” hơn áo thun nam nữ ngắn tay, nếu biết cách mix đồ, bạn sẽ trở nên thật cá tính với phong cách thời trang đậm chất Hàn Quốc, nhưng nếu phối đồ không tốt trông bạn như đang “lọt thỏm” trong chiếc áo thun tay lỡ."
        },
        {
            "id": 2,
            "price": 50,
            "img": "https://salt.tikicdn.com/cache/400x400/ts/product/70/11/8c/e4ef5e543dd0ef5ad42f203a03eeefdf.jpg.webp",
            "title": "AUTUMN COLLECTION",
            "desc": "Loại áo này “khó tính” hơn áo thun nam nữ ngắn tay, nếu biết cách mix đồ, bạn sẽ trở nên thật cá tính với phong cách thời trang đậm chất Hàn Quốc, nhưng nếu phối đồ không tốt trông bạn như đang “lọt thỏm” trong chiếc áo thun tay lỡ."
        },
        {
            "id": 3,
            "price": 200,
            "img": "https://salt.tikicdn.com/cache/400x400/ts/product/e5/3e/08/58819ea7d03d498089bb8f0d79ad41fb.jpg.webp",
            "title": "LOUNGEWEAR LOVE",
            "desc": "Loại áo này “khó tính” hơn áo thun nam nữ ngắn tay, nếu biết cách mix đồ, bạn sẽ trở nên thật cá tính với phong cách thời trang đậm chất Hàn Quốc, nhưng nếu phối đồ không tốt trông bạn như đang “lọt thỏm” trong chiếc áo thun tay lỡ."
        },
        {
            "id": 4,
            "desc": "Loại áo này “khó tính” hơn áo thun nam nữ ngắn tay, nếu biết cách mix đồ, bạn sẽ trở nên thật cá tính với phong cách thời trang đậm chất Hàn Quốc, nhưng nếu phối đồ không tốt trông bạn như đang “lọt thỏm” trong chiếc áo thun tay lỡ.",
            "price": 100,
            "img": "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "title": "SHIRT STYLE!"
        },
        {
            "id": 5,
            "desc": "Loại áo này “khó tính” hơn áo thun nam nữ ngắn tay, nếu biết cách mix đồ, bạn sẽ trở nên thật cá tính với phong cách thời trang đậm chất Hàn Quốc, nhưng nếu phối đồ không tốt trông bạn như đang “lọt thỏm” trong chiếc áo thun tay lỡ.",
            "price": 300,
            "img": "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "title": "LOUNGEWEAR LOVE"
        },
        {
            "id": 6,
            "desc": "Loại áo này “khó tính” hơn áo thun nam nữ ngắn tay, nếu biết cách mix đồ, bạn sẽ trở nên thật cá tính với phong cách thời trang đậm chất Hàn Quốc, nhưng nếu phối đồ không tốt trông bạn như đang “lọt thỏm” trong chiếc áo thun tay lỡ.",
            "price": 500,
            "img": "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            "title": "LIGHT JACKETS"
        },
        {
            "id": 7,
            "desc": "Loại áo này “khó tính” hơn áo thun nam nữ ngắn tay, nếu biết cách mix đồ, bạn sẽ trở nên thật cá tính với phong cách thời trang đậm chất Hàn Quốc, nhưng nếu phối đồ không tốt trông bạn như đang “lọt thỏm” trong chiếc áo thun tay lỡ.",
            "price": 200,
            "img": "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
            "title": "LOUNGEWEAR LOVE"
        },
        {
            "id": 8,
            "desc": "Loại áo này “khó tính” hơn áo thun nam nữ ngắn tay, nếu biết cách mix đồ, bạn sẽ trở nên thật cá tính với phong cách thời trang đậm chất Hàn Quốc, nhưng nếu phối đồ không tốt trông bạn như đang “lọt thỏm” trong chiếc áo thun tay lỡ.",
            "price": 150,
            "img": "https://mcdn2-coolmate.cdn.vccloud.vn/uploads/December2021/pros123.jpeg",
            "title": "LOUNGEWEAR LOVE"
        },
        {
            "id": 9,
            "desc": "Loại áo này “khó tính” hơn áo thun nam nữ ngắn tay, nếu biết cách mix đồ, bạn sẽ trở nên thật cá tính với phong cách thời trang đậm chất Hàn Quốc, nhưng nếu phối đồ không tốt trông bạn như đang “lọt thỏm” trong chiếc áo thun tay lỡ.",
            "title": "LOUNGEWEAR LOVE",
            "price": 90,
            "img": "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png"
        },
        {
            "id": 10,
            "desc": "Loại áo này “khó tính” hơn áo thun nam nữ ngắn tay, nếu biết cách mix đồ, bạn sẽ trở nên thật cá tính với phong cách thời trang đậm chất Hàn Quốc, nhưng nếu phối đồ không tốt trông bạn như đang “lọt thỏm” trong chiếc áo thun tay lỡ.",
            "title": "LOUNGEWEAR LOVE",
            "price": 120,
            "img": "https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png"
        },
        {
            "id": 11,
            "title": "LOUNGEWEAR LOVE",
            "desc": "Loại áo này “khó tính” hơn áo thun nam nữ ngắn tay, nếu biết cách mix đồ, bạn sẽ trở nên thật cá tính với phong cách thời trang đậm chất Hàn Quốc, nhưng nếu phối đồ không tốt trông bạn như đang “lọt thỏm” trong chiếc áo thun tay lỡ.",
            "price": 80,
            "img": "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png"
        },
        {
            "id": 12,
            "price": 108,
            "img": "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
            "title": "LOUNGEWEAR LOVE",
            "desc": "Loại áo này “khó tính” hơn áo thun nam nữ ngắn tay, nếu biết cách mix đồ, bạn sẽ trở nên thật cá tính với phong cách thời trang đậm chất Hàn Quốc, nhưng nếu phối đồ không tốt trông bạn như đang “lọt thỏm” trong chiếc áo thun tay lỡ."
        }
    ],
    cart: [],
    currentItem: null,
};



const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const exist = state.cart.find((x) => x.id === action.payload.id)
            console.log(action.payload)

            return {
                // ...state,
                // if (exist) {
                //     state.cart.map((val) =>

                //         val.id === action.payload.id ? {...val, qty: val.qty + 1 } : val

                //     )
                // } else {
                //     {...exist, qty: 1 }
                // }
                ...state,
                cart: exist ?
                    state.cart.map((item) =>
                        item.id === exist.id ? {...item, qty: item.qty + 1 } : item

                    ) : [...state.cart, {...action.payload, qty: 1 }],


            }
        case actionTypes.INCREASE:
            //const productRemove = state.cart.find((x) => x.id === action.payload.id)
            return {
                ...state,
                cart: state.cart.map((x) => x.id === action.payload.id ? {...x, qty: x.qty+1} : x)

            }
        case actionTypes.DECREASE:
            const productRemove = state.cart.find((x) => x.id === action.payload.id)
            return {
                ...state,
                cart: productRemove.qty > 1 ? state.cart.map((x) => x.id === action.payload.id ? { ...x, qty: x.qty - 1 } : x) :
                    state.cart.filter((x) => x.id !== productRemove.id)

            }
        case actionTypes.DELETE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((x) => x.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export default shopReducer