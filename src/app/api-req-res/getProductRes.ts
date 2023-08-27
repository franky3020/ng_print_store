import {Product, ProductBuilder} from "../entity/Product";


export class GetProductRes {
  //     {
  //         "name": "Mini bear trap",
  //         "create_user_id": 1,
  //         "price": 1,
  //         "describe": "迷你捕獸夾",
  //         "id": 1,
  //         "photos": []
  //     }
  id = 0;
  name = '';
  create_user_id = 0;
  price = 0;
  describe = '';
  photos: string[] = [];
}

export const getProductRes2Product = (res: GetProductRes): Product => {
  const productBuilder = new ProductBuilder(res.id.toString(), res.price, res.name);
  productBuilder.setCreateUserId(res.create_user_id.toString());
  productBuilder.setDescribe(res.describe);
  productBuilder.setPhotos(res.photos);
  return productBuilder.build();
}
