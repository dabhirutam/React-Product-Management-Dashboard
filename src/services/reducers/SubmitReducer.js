import { getDataLS } from "../helper/GetDataLS";

const intialState = {
    products: getDataLS(),
    product: null,
    isloading: false
}

const SubmitReducer = (state = intialState, action) => {

    // eslint-disable-next-line no-unused-vars
    let updatedData = '';

    switch (action.type) {

        case "ViewProduct":
            return { ...state, products: getDataLS(), isloading: false };

        case "AddProdust":
            updatedData = '';
            // eslint-disable-next-line no-case-declarations
            const newP = { ...action.payload, id: parseInt(Math.random() * 10000), };
            updatedData = [...state.products, newP];

            localStorage.setItem("products", JSON.stringify(updatedData));

            return { ...state, products: updatedData, isloading: false };

        case "SingleProduct":
            // eslint-disable-next-line no-case-declarations
            const singleData = getDataLS().find(product => product.id == action.payload);

            return { ...state, product: singleData || null };

        case "UpadateProduct":
            updatedData = '';

            updatedData = getDataLS().map(product => {
                if (product.id == action.payload.id) {
                    return action.payload
                } else {
                    return product
                }
            })

            localStorage.setItem("products", JSON.stringify(updatedData));

            return { ...state, products: updatedData };

        case "DeleteProduct":
            updatedData = '';
            updatedData = getDataLS().filter(product => product.id != action.payload);

            localStorage.setItem("products", JSON.stringify(updatedData));

            return { ...state, products: updatedData };

        case "LoadProduct":
            return { ...state, isloading: true };

        default:
            return state;
    }
}

export default SubmitReducer;