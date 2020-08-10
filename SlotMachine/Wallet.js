class Wallet {
    constructor(money = 0) {
        let _money = money;

        this.getWalletValue = () => _money;
        
        this.checkcanPlay = (value) => {
        return (_money >= value)
        }

        this.changeWallet = (value, type="+") => {
            if (typeof value === "number" && !isNaN(value)) {
                if (type === "+") {
                    return _money += value;
                } else if (type === "-") {
                    return _money -= value;
                } else {
                    throw new Error("Nieprawidlowy typ działania!")}
            } else {
                console.log(typeof value);
                throw new Error("Nieprawidlowa liczba!")
            }
        }
    }
}


