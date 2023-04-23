export class Product {
    id = '';
    price: number;
    name = '';
    createUserId = '';
    describe = '';
    photos: string[] = [];

    constructor(builder: ProductBuilder) {
        this.id = builder.id;
        this.price = builder.price;
        this.name = builder.name;
        this.createUserId = builder.createUserId;
        this.describe = builder.describe;
        this.photos = builder.photos;
    }

}


export class ProductBuilder {

    private _id: string;
    private _price: number;
    private _name: string;
    private _createUserId = '';
    private _describe = '';
    private _photos: string[] = [];

    constructor(id: string, price: number, name: string) {
        this._id = id;
        this._price = price;
        this._name = name;
    }

    setCreateUserId(createUserId: string): ProductBuilder{
        this._createUserId = createUserId;
        return this;
    }

    setDescribe(describe: string): ProductBuilder{
        this._describe = describe;
        return this;
    }

    setPhotos(photos: string[]): ProductBuilder{
        this._photos = photos;
        return this;
    }

    build() {
        return new Product(this);
    }


    get id(): string {
        return this._id;
    }

    get price(): number {
        return this._price;
    }

    get name(): string {
        return this._name;
    }

    get createUserId(): string {
        return this._createUserId;
    }

    get describe(): string {
        return this._describe;
    }

    get photos(): string[] {
        return this._photos;
    }
}

