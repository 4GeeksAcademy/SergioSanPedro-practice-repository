export const reducerStore = {
    counter : 0,
    alert: false
    
}

export const reducerAction = (store, action) => {
    switch (action.type){
        case 'sum':
            return {...store, counter: action.payload}

            case 'decrement':
                return {...store, counter: action.payload}

                case 'reset':
                    return {...store, counter: action.payload}

                    case 'alert':
                        return {...store, alert: action.payload}
    } 



}