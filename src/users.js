export async function fetchUsers() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');

        if(!res.ok) {
            throw new Error(`HTTP error, status: ${res.status}`);
        }

        const users = await res.json();

        users.forEach(user => {
            console.log(user.name)
        });

        return users;
    } catch(error) {
        console.log(error)
        throw error;
    }
}