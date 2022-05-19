function areYouPlayingBanjo(name) {
    let allName = name.toLowerCase()
    if (allName.startsWith("r")){
      return `${name} plays banjo`
    } else {
      return `${name} does not play banjo`
    }
}