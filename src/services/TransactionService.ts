import { Account } from "../types/Account";
import { Transaction } from "../types/Transaction";

async function getTransactionsByAccount(account: Account): Promise<Transaction[]> {
    const url = "http://localhost:8080/accounts/" + account.id + "/transactions";

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

const exported = {
    getTransactionsByAccount
}

export default exported;