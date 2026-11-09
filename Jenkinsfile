
pipeline {
    agent any

    options {
        timestamps()
        disableConcurrentBuilds()
        timeout(time: 20, unit: 'MINUTES')
    }

    environment {
        APP_NAME = 'sruthij-portfolio'
        DEPLOY_DIR = '/var/www/sruthij-portfolio'
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out GitHub repository'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies'
                sh 'npm ci'
            }
        }

        stage('Code Quality Check') {
            steps {
                echo 'Running ESLint'
                sh 'npm run lint'
            }
        }

        stage('Build') {
            steps {
                echo 'Building React application'
                sh 'npm run build'
            }
        }

        stage('Verify Build') {
            steps {
                sh '''
                    test -f dist/index.html
                    echo "Build verified successfully"
                    du -sh dist
                '''
            }
        }

        stage('Archive Build') {
            steps {
                archiveArtifacts artifacts: 'dist/**',
                                 fingerprint: true
            }
        }

        stage('Deploy to EC2') {
            steps {
                echo 'Deploying to Nginx'

                sh '''
                    rsync -av --delete dist/ ${DEPLOY_DIR}/
                '''
            }
        }
    }

    post {
        success {
            echo 'CI/CD Pipeline completed successfully!'
        }

        failure {
            echo 'Pipeline failed. Check console output.'
        }

        always {
            echo 'Pipeline execution completed.'
        }
    }
}
