export const type = 'findUser';

const findUser = id =>{



    
    return {
        type,
        payload: id,
    }
};

export default findUser;