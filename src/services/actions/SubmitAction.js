
export const SubmitAction = (data) => {
    return{
        type: 'AddProdust',
        payload: data
    }
} 

export const SingleDataAction = (id) => {
    return{
        type: 'SingleProduct',
        payload: id
    }
}

export const UpadateAction = (data) => {
    return{
        type: "UpadateProduct",
        payload: data
    }
}

export const DeleteAction = (id) => {
    return{
        type: "DeleteProduct",
        payload: id
    }
}

export const LoadAction = () => {
    return{
        type: "LoadProduct",
    }
}

export const ViewAction = () => {
    return{
        type: "ViewProduct",
    }
}

export const LoadViewAction = () => {
    return async (dispatch) =>{
        dispatch(LoadAction());

        setTimeout(() => {
            dispatch(ViewAction());
        }, 2000);
    }
}

export const LoadingSubmitAction = (data) => {
    return async (dispatch) => {
        dispatch(LoadAction());

        setTimeout(() => {
            dispatch(SubmitAction(data));
        }, 2000);
    }
}