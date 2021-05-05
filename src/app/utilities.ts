export function makeWordUserFriendly(word) {
  switch(word){
    case 'jeansPants':
      return 'Jeans Pants'
    case 'jeansShirts':
      return 'Jeans Shirts'
    default :
      return 'no word found'
  }
}

export function makeWordURLFriendly(word) {
  switch(word){
    case 'jeansPant':
      return 'jeans-pants'
    case 'jeansShirts':
      return 'jeans-shirts'
    case 'Men':
      return 'men'
    default :
      return 'no word found'
  }
}
