const initialState = {
	allData: [],
	singleData:[]
}

export const HomeReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ALLDATA':
			return {
				...state,
				allData: action.payload,
			}
		case 'SINGLEDATA':
			return {
				...state,
				singleData: action.payload,
			}
		default:
				return state
	}
}
