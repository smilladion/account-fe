import { Account } from "../types/Account";

const url = "http://localhost:8080/accounts";

async function getAllAccounts(): Promise<Account[]> {
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) {
        throw new Error("HTTP Error: " + response.status);
    }

    let result = await response.json();

    return result;
}

async function createAccount(account: any): Promise<Account> {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(account)
    });

    if (!response.ok) {
        throw new Error("HTTP Error: " + response.status);
    }

    let result = await response.json();

    return result;
}

const exported = {
    getAllAccounts,
    createAccount
}

export default exported;