const usersDB = {
  "1001": {
    name: "Alice Johnson",
    email: "alice@company.com",
    department: "IT"
  },
  "1002": {
    name: "Bob Smith",
    email: "bob@company.com",
    department: "HR"
  },
  "1003": {
    name: "Carol White",
    email: "carol@company.com",
    department: "Finance"
  }
};

export function getUserById(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = usersDB[userId];
            if(user) {
                resolve(user);
            } else {
                reject("User not found");
            }
        }, 800);
    });
}