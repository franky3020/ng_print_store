
pipeline {
    agent any

    stages {
        stage ('Initialize') {
            steps {
                sh 'echo "PATH = ${PATH}"'
            }
        }
        stage('add jdbc to workspace') {
            steps {
                sh 'echo "pwd = ${pwd}"'
            }
        }

//         stage('Build') {
//             steps {
//                 sh "mvn -B -DskipTests=true clean package"
//             }
//         }
//         stage('build image and remove old container') {
//             steps {
//                 sh 'docker build --no-cache -t="franky-ms-test-docker-$BRANCH_NAME" .'
//                 sh 'docker rm -f franky-ms-test-docker-$BRANCH_NAME | true' // | true 是為了如果沒有舊的容器時，會繼續執行
//             }
//         }
//         stage('use image run container') {
//             steps {
//                 sh 'docker run --name franky-ms-test-docker-$BRANCH_NAME --env application-name=ms-provider-$BRANCH_NAME -d --memory 1024MB --restart=always --net=host franky-ms-test-docker-$BRANCH_NAME'
//             }
//         }
    }

}