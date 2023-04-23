import {ProductBuilder} from "./Product";

describe('Product', () => {

    it('build is work', () => {
        let productBuilder = new ProductBuilder('1', 100, '2');
        let product = productBuilder.build();
        expect(product.id).toBe('1');
        expect(product.price).toBe(100);
        expect(product.name).toBe('2');
    });

    it('build setting is work', () => {
        let productBuilder = new ProductBuilder('1', 100, 'productName');
        let product = productBuilder
            .setDescribe('test_describe')
            .setCreateUserId('2')
            .setPhotos(['img1, img2']);

        expect(product.id).toBe('1');
        expect(product.price).toBe(100);
        expect(product.name).toBe('productName');
        expect(product.describe).toBe('test_describe');
        expect(product.createUserId).toBe('2');
        expect(product.photos).toEqual(['img1, img2']);
    });

});