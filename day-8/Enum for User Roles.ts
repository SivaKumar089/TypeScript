enum UserRole {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

function checkAccess(role: UserRole) {
  if (role === UserRole.Admin) {
    console.log("Full access granted.");
  } else if (role === UserRole.User) {
    console.log("Limited access granted.");
  } else {
    console.log("Guest access only.");
  }
}

// Test
checkAccess(UserRole.Admin); // Full access granted.
checkAccess(UserRole.User); // Limited access granted.
checkAccess(UserRole.Guest); // Guest access only.
