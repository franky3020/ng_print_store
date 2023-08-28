# Demo 3D列印商店_網頁專案 (Angular)


## 環境
1. Node:18.17.0

## 部暑方法

1. docker build -t franky_print_3d_web .
2. docker rm -f franky_print_3d_web || true
3. docker run -d -p 37000:80 --name franky_print_3d_web franky_print_3d_web


