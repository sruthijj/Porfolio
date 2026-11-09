pipeline {
  agent any

  tools { nodejs 'node22' }

  options {
    timestamps()
    disableConcurrentBuilds()
    buildDiscarder(logRotator(numToKeepStr: '10'))
  }

  environment {
    DEPLOY_DIR = '/var/www/sruthij-portfolio'
    CI = 'true'
  }

  stages {
    stage('Install') {
      steps {
        sh 'node -v && npm -v'
        sh 'npm ci'
      }
    }

    stage('Lint') {
      steps { sh 'npm run lint' }
    }

    stage('Build') {
      steps { sh 'npm run build' }
    }

    stage('Archive') {
      steps { archiveArtifacts artifacts: 'dist/**', fingerprint: true }
    }

    stage('Deploy') {
      steps {
        sh 'rsync -a --delete dist/ ${DEPLOY_DIR}/'
      }
    }

    stage('Smoke test') {
      steps {
        sh 'curl -fsS -o /dev/null http://localhost/'
      }
    }
  }

  post {
    success { echo 'Portfolio deployed successfully' }
    failure { echo 'Pipeline failed, check the stage logs' }
    cleanup { cleanWs() }
  }
}
