const defaultState =
{
    rfc: '001',
    nombre: 'Antonio',
    apellido: 'Bielma',
    token: '12312qsdd'
};



function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case 'findUser': {

        }
        default:
            return state;
    }
}


export default reducer;