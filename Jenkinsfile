
pipeline {
    agent any

    stages {
        stage ('Initialize') {
            steps {
                sh 'echo "PATH = ${PATH}"'
            }
        }

        stage('deploy web server') {
            steps {
                sh 'docker build -t franky_print_3d_web .'
                sh 'docker rm -f franky_print_3d_web || true'
                sh 'docker run -d -p 37000:80 --name franky_print_3d_web franky_print_3d_web'
            }
        }

//         參考 可用 branch_name 當參數的方法

    }

}