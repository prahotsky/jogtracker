export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("user")
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (user) => {
  try {
    const serializedState = JSON.stringify(user)
    localStorage.setItem("user", serializedState)
  } catch {}
}
