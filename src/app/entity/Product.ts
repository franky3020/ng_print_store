export class Product {
    id = 0;
    price: number;
    name = '';
    createUserName = '';
    describe = '';
    photos: string[] = [];

    constructor(builder: ProductBuilder) {
        this.id = builder.id;
        this.price = builder.price;
        this.name = builder.name;
        this.createUserName = builder.createUserName;
        this.describe = builder.describe;
        this.photos = builder.photos;
    }

}


export class ProductBuilder {

    private _id: number;
    private _price: number;
    private _name: string;
    private _createUserName = '';
    private _describe = '';
    private _photos: string[] = [];

    constructor(id: number, price: number, name: string) {
        this._id = id;
        this._price = price;
        this._name = name;
    }


    setDescribe(describe: string): ProductBuilder{
        this._describe = describe;
        return this;
    }

    setCreateUserName(createUserName: string): ProductBuilder{
        this._createUserName = createUserName;
        return this;
    }

    setPhotos(photos: string[]): ProductBuilder{
        this._photos = photos;
        return this;
    }

    build() {
        return new Product(this);
    }


    get id(): number {
        return this._id;
    }

    get price(): number {
        return this._price;
    }

    get name(): string {
        return this._name;
    }

    get createUserName(): string {
        return this._createUserName;
    }

    get describe(): string {
        return this._describe;
    }

    get photos(): string[] {
        return this._photos;
    }
}

