let isDarkMode = false
let username = ""
let isUserLoggedIn = false
let isDashboardOn = false
console.log(`is dark mode enabled: ${isDarkMode}`) //interpolation

isUserLoggedIn = true
username = "anna"

isDashboardOn = isUserLoggedIn && username

console.log(isDashboardOn)