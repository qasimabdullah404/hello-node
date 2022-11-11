## Hello from HOSTNAME

1. Clone the repository
2. `docker build -t USERNAME/REPO:latest .`
3. `minikube start`
4. `kubectl apply -f depl-service.yml`
5. `kubectl get all (Conatiners running?)`
6. `minikube service hello-node`

### For logs

1. `kubectl logs <POD>` POD name from `kubectl get all`
