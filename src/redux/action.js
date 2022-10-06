
export const addData = (payload) => {
    return {
      type: "ADD",
      payload: payload,
      id: Math.floor(Math.random() * 100),
    };
  };
  
  export const editData = (data, id) => {
    return {
      type: "EDIT",
      payload: data,
      id: id,
    };
  };
  
  export const deleteData = (id) => {
    return {
      type: "DELETE",
      payload: id,
    };
  };

  