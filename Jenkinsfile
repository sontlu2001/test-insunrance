pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.58.2-jammy'
            args '--ipc=host --init'
        }
    }

    parameters {
        choice(name: 'ENV', choices: ['dev', 'staging', 'prod'], description: 'Choose env')
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/sontlu2001/test-insunrance.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Set Environment') {
            steps {
                script {
                    def baseUrls = [
                        dev: "http://103.146.22.246:3001",
                        staging: "https://staging.xxx.com",
                        prod: "https://xxx.com"
                    ]
                    env.BASE_URL = baseUrls[params.ENV]
                }
                sh 'echo BASE_URL=$BASE_URL'
            }
        }

        stage('Run Tests') {
            steps {
                sh '''
                echo "Running with BASE_URL=$BASE_URL"
                npx playwright test --reporter=line
                '''
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished'
        }
        success {
            echo 'Tests passed 🎉'
        }
        failure {
            echo 'Tests failed ❌'
        }
    }
}