const redux = require('redux')
const createStore = redux.createStore


let dataInputan = "aku gak di temenin ayang"


// kontruksi dasar data 
const initialState = {
    tokenKey : 0,
    valueData : "",
    age : 3
}


// Reducer ,  Untuk Menentukan Jalan Yang Di Lewati Atau Mentriger Action Yang sudah di set Up 
const reducerDefault =( state = initialState , action)=>{
    switch (action.type) {
        case 'ADD_TOKEN':
            return{
              ...state,
                tokenKey : state.tokenKey +1
            }
            case 'ADD_INPUT':
                return{
                ...state,
                  valueData : action.iniInputan
                }
        default:
           return state
    }
    
    }

// Store , Untuk Menyimpan Data Global 
const store = createStore(reducerDefault)


// Subscription  , Melihat Segala Perubahan atau Update pada redux (Conditional )
store.subscribe(()=>{
    console.log(store.getState())
})

console.log(store.getState())

// Dispatch Action ; Unuk Mentriger Reducer 
store.dispatch({type : 'ADD_TOKEN'})
store.dispatch({type : 'ADD_INPUT' , iniInputan : dataInputan})


