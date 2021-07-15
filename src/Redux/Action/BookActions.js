import axios from 'axios';
export const loadBooks = (payload) => {
    return (dispatch, getState) => {
        fetch('http://localhost:8080/books')
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: 'LOAD_BOOK',
                payload: data.data
            })
        })
    }
}
export const addToReadingList = (payload) => {
    return async (dispatch) => {
        await axios.post('http://localhost:8000/add-to-reading-list', payload)

        dispatch({
            type: 'ADD_TO_READING_LIST',
            payload: payload
        })
    }
}
// remove action
export const removeFromReadingList = (payload) => {
    return {
        type: 'REMOVE_FROM_READING_LIST',
        payload: payload
    }
}