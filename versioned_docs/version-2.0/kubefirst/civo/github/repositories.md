---
title: Repositories
---

# GitHub Repositories

When you deploy a cluster on Civo using kubefirst, new repositories will be added to your organization's GitHub account.

![GitHub repositories](../../../img/common/github/repositories.png)

## Repositories

### `gitops`

The `gitops` repository houses all of our IAC and all your GitOps configurations. The infrastructure created by kubefirst was produced by some combination of Terraform and Argo CD. You modify the infrastructure or add new applications to your cluster by creating a pull request to your new `gitops` repository.

### metaphor

`metaphor` is a suite of demo microservice applications to demonstrate how an application can be integrated into the kubefirst platform following best practices. It is described in more details [here](../../../explore/metaphor.md).

## Repositories Management

These GitHub repositories are being managed in Terraform. As you need additional GitHub repositories, just add a new section of Terraform code to `civo-github/terraform/github/repos.tf`:

```terraform
module "your_repo_name" {
  source = "./modules/repository"

  repo_name          = "your_repo_name"
  archive_on_destroy = false
  auto_init          = false # set to false if importing an existing repository
  team_developers_id = github_team.developers.id
  team_admins_id     = github_team.admins.id
}
```

## Making Terraform Changes

To make infrastructure and configuration changes with Terraform, simply open a pull request against any of the Terraform directory folders in the `gitops` repository. Your pull request will automatically provide plans, state locks, and applies, and even comment in the merge request itself. You'll have a simple, peer reviewable, auditable changelog of all infrastructure and configuration changes.

![Atlantis GitHub](../../../img/common/github/atlantis.png)
