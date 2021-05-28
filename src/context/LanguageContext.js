import CreateDataContext from './CreateDataContext';

const LanguageReducer = (state, action) => {
    switch(action.type) {
        case 'select_language':
            return { ...state, currentLanguage: action.payload};
        default:
            return state;
    }
};

const selectLanguage = dispatch => (language) => {
    dispatch({ type: 'select_language', payload: language })
};

export const { Provider, Context } = CreateDataContext(
    LanguageReducer,
    { selectLanguage },
    { currentLanguage: 'nederlands' }
)