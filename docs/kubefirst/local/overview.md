---
title: Overview
---

`kubefirst k3d create` provisions a local [k3d](https://k3d.io) Kubernetes cluster to host your cloud native environment locally.

Your k3d cluster will include:

| Application                     | Description                                                                 |
|---------------------------------|-----------------------------------------------------------------------------|
| Argo CD                         | GitOps Continuous Delivery                                                  |
| Argo Workflows                  | Application Continuous Integration                                          |
| Atlantis                        | Terraform Workflow Automation                                               |
| cert-manager                    | Certificate Automation Utility                                              |
| ChartMuseum                     | Helm Chart Registry                                                         |
| External Secrets Operators      | Syncs Kubernetes secrets with Vault secrets                                 |
| GitHub Action Runner Controller | GitHub CI Executor                                                          |
| HashiCorp Vault                 | Secrets Management                                                          |
| Metaphor                        | (development, staging, production) instance of sample Next.js app           |
| Traefik Ingress Controller      | Native k3d Ingress Controller                                               |

These apps are all managed by Argo CD and the applications configurations are in the `gitops` repository's `registry/<cluster-name>` folder.

## Atlantis Example / User Creation Walkthrough

Onboard users with [GitHub](github/user-creation.md) or [GitLab](gitlab/user-creation.md) by doing a pull/mnerge request with Terraform changes to your `gitops` repository and applying the change using Atlantis.

## Deliver `metaphor` to your new Development, Staging, and Production Environments

Build and deliver a microservice using our example [metaphor application](../../explore/metaphor.md). Making any changes to the main branch of your new `metaphor` repository will build and deliver your application to your new cluster.
