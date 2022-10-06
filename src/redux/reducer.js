
const initialState = {
    data: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD": {
        return {
          ...state,
          data: [...state.data, { id: action.id, data: action.payload }],
        };
      }
      case "EDIT": {
        let newData =  state.data
        let c 
         newData.map((el,index)=>{
          if(el.id === action.id){
            return c = index
          }
        })
        newData.splice(c,1,{id  : action.id  , data : action.payload})
        return {
          ...state,
          data: [...newData],
        };
      }
    
      case "DELETE": {
        let newD = state;
        newD = state.data.filter((el) => {
          return el.id !== action.payload;
        });
        return {
          ...state,
          data: newD,
        };
      }
      default:
        return state;
    }
  };
  
  export default reducer;
  