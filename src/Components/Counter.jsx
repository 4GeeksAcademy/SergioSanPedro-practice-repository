import { useReducer } from "react"
import { reducerAction, reducerStore } from "../Reducer/contadorReducer";

export const Counter = () => {

    const [store, dispatch] = useReducer(reducerAction, reducerStore);


    const sumar = () => {

        dispatch({
            type: 'alert',
            payload: false
        })
        dispatch({
            type: 'sum',
            payload: store.counter + 1
        })
    }

    const restar = () => {

        if (store.counter <= 0) {
            dispatch({
                type: 'alert',
                payload: true
            })
            return
        } else {
            dispatch({
                type: 'decrement',
                payload: store.counter - 1
            })
        }

    }

    const reset = () => {
        dispatch({
            type: 'reset',
            payload: store.counter = 0
        })
    }


    return (
        <>


            <div className="container">
                <div className="text-center my-5">
                    {
                        store.alert &&
                        <div class="alert alert-danger" role="alert">
                            A simple danger alert—check it out!
                        </div>
                    }
                    <p>{store.counter}</p>
                    <button onClick={sumar}>Sumar</button>
                    <button onClick={restar} >Restar</button>
                    <button onClick={reset}>Reset</button>
                </div>

            </div>

        </>
    )
}