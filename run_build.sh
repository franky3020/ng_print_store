docker rm -f test_print_web | true
docker build -t test_print_web .
docker run -d -p 8080:80 --name test_print_web test_print_web
