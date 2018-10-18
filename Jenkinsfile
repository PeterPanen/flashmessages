pipeline {
  agent any
  stages {
    stage('Preparing') {
      steps {
        git url: 'https://github.com/PeterPanen/flashmessages'
      }
    }
    stage('Building') {
      steps {
        sh "docker build -t panen/flash:$BUILD_NUMBER ."
      }
    }
    stage('Stopping old container') {
      steps {
        sh "docker stop flash || true"
        sh "docker rm flash || true"
      }
    }
    stage('Starting new container') {
      steps {
        sh "docker run -e BUILD_NUMBER=$BUILD_NUMBER --name flash -d panen/flash:$BUILD_NUMBER"
      }
    }
  }
}
