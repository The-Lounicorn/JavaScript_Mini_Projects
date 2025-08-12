let userRole = "enrolled";
let accessLevel;

if (userRole === "enrolled") {
    accessLevel = "Full access granted";
} else if (userRole === "subscribed") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "enrolled") {
        userMessage = "Welcome to your wellness plan with dietician support!";
    } else {
        userMessage = "Welcome to your wellness plan!";
    }
} else {
    userMessage = "Please enroll or subscribe.";
}

console.log("User Message:", userMessage);

let userType = "enrolled";
let userCategory;

switch (userType) {
    case "enrolled":
        userCategory = "Enrolled";
        break;
    case "subscribed":
        userCategory = "Subscriber";
        break;
    case "employee":
        userCategory = "No access";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);
