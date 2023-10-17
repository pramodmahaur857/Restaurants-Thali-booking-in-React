let foodinfo = {
    'data' : null,
    'order' : null
  }
  
  const FoodData = (state=foodinfo,action)=>{
    switch(action.type){
      case "AddData":
        return {
          ...state,
          data:action.payload.data
        }
      case "CheckData":{
        return {
          ...state,
          order:action.payload.Data
        };
      }
      case "Addthali":{
        return{
          ...state,
          order:action.payload.data
        }
      }
      case "Delitem":{
        return{
          ...state,
          order:action.payload.data
        }
      }
      default:{
        return state;

      }
    }
  }
  export default FoodData;