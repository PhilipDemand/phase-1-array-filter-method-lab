function findMatching(array, name) {
    const result = array.filter(word => word.toUpperCase() === name.toUpperCase())
    return result
  }

  function fuzzyMatch(array, name) {
    const result = array.filter(word => word.charAt(0) === name.charAt(0))
    return result
  }

  function matchName(array, name) {
    const result = array.filter(word => word.name === name)
    return result
  }