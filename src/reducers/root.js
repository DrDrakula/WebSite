const defaultState = {currentPage: 'home', cheat: 'hocusrpski', isSerbian: false}

export default function root(state = defaultState, action){
  switch(action.type){
    case 'CHANGE_PAGE':
      console.log(state)
      return {...state, currentPage: action.payload}
    case 'TOGGLE_SERBIAN':
      console.log(state)
      let newCheat;
      if(state.isSerbian){
        newCheat = 'hocusrpski'
      }else{
        newCheat = 'iwantenglish'
      }
      return {...state, isSerbian: !state.isSerbian, cheat: newCheat}
    default:
    return state
  }
}
