---
title: Overview
---

# Getting Started

To get started with kubefirst, you'll need to know about four things pretty quickly:

1. [Connecting to your Kubernetes cluster with third-party tools](#connecting-to-your-new-cluster-with-third-party-tools).
2. [How to use your new `gitops` repository](#how-to-use-your-new-gitops-repository).
3. [User management with automated Terraform IaC](#user-management-with-automated-terraform-iac).
4. [GitOps application delivery with the `metaphor` sample application](#gitops-application-delivery-with-the-metaphor-sample-application).

## Connecting to your new cluster with third-party tools

To connect to your new cluster with third-party tools like [kubectl](https://github.com/kubernetes/kubectl), run this command in your terminal:

```shell
export KUBECONFIG=~/.k1/kubeconfig
```

You can then run `kubectl` commands against your new cluster, like getting the `namespaces`:

```shell
kubectl get namespaces
```

## How to use your new `gitops` repository

[GitHub](github/repositories.md), and [GitLab](gitlab/repositories.md) repositories managed with Terraform IaC (Infrastructure as Code).

## User management with automated Terraform IaC

Onboard yourself and your team with [GitHub](github/user-creation.md) or with [GitLab](gitlab/user-creation.md).

## GitOps application delivery with the metaphor sample application

Explore GitOps application delivery and platform integrations with our [metaphor](../../explore/metaphor.md) simple application.
