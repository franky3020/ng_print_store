
pipeline {
    agent any

    stages {
        stage('deploy web server') {
            steps {
                sh 'docker build -t franky_print_3d_web .'
                sh 'docker rm -f franky_print_3d_web || true'
                sh 'docker run -d -p 37000:80 --name franky_print_3d_web franky_print_3d_web'
            }
        }

    }

}