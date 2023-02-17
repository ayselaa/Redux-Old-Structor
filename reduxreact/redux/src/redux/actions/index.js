import { WRITE_MY_NAME, ADD_NAME_TO_STORE} from '../types/index'

export const WriteMyName = (name) => {
    return{
        type: WRITE_MY_NAME,
        payload: name
    }
}

export const AddMyNameToStore = (name) => {
    return{
        type: ADD_NAME_TO_STORE,
        payload: name
    }
}