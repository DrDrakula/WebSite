export function toggleSerbian(){
  return {
    type: 'TOGGLE_SERBIAN'
  }
}

export function changePage(page){
  return {
    type: 'CHANGE_PAGE',
    payload: page
  }
}

export function changeStyle(style){
  return {
    type: 'CHANGE_STYLE',
    payload: style
  }
}
