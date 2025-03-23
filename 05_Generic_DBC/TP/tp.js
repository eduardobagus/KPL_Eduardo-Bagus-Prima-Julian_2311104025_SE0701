class HaloGeneric {
    SapaUser(user) {
        console.log(`Halo user ${user}`);
    }
}

const halo = new HaloGeneric();
halo.SapaUser("Eduardo");

class DataGeneric {
    constructor(data) {
        this.data = data;
    }

    PrintData() {
        console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
}

const dataNIM = new DataGeneric("2311104025");
dataNIM.PrintData();