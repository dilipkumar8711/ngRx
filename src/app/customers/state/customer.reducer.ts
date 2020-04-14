const initialState = {
    customers:[
        {
            name:"Dileep",
            phone:"7411380718",
            address:"Bangalore",
            membership:"Platinum",
            id:1
        }
    ],
    loading:false,
    loaded:true
}

export function customerReducer(state=initialState, action){
    switch(action.type){
        case "LOAD_CUSTOMERS":{
            return{
                ...state,
                loading:true,
                loaded:false
            }
        }
        default:{
            return state
        }
    }
}