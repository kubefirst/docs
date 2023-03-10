---
title: FAQ
---

## General

### I ran into an issue, what should I do?

If an error occurs, try to run the command again: there is a `~/.kubefirst` file on your localhost that keeps track of your execution state. If it still doesn't work, check the log file which was created in the `~/.k1/logs` folder.

If you are not sure about the steps to take to fix the problem you encouter, join our [Slack community](https://kubefirst.io/slack), and ask for help in the `#helping-hands` channel. We'll gladly work through it with you.

If you think there is a bug, you can also open an [issue](https://github.com/kubefirst/kubefirst/issues) describing the problems you are having.

### How do I tear my cluster down?

Please find that information in the destroying your Kubefirst platform documentation related to your installation type:

- [Local with GitHub or GitLab](kubefirst/local/destroy.md)
- [AWS with GitHub or GitLab](kubefirst/aws/destroy.md)
- [Civo with GitHub or GitLab](kubefirst/civo/destroy.md)

### I'm experiencing timeouts when kubefirst deploys Argo CD or HashiCorp Vault through the Helm installations

You may need a more stable connection / higher download speed. Check with your internet provider or use an online speed test to confirm you have at least 100mbps download speed, or else you may experience timeouts.

### Where can I find the services passwords?

Some passwords are stored in the `~/.kubefirst` file, and the others in your HashiCorp Vault. You can find the password for each service in the `services` section. The handoff screen (the purple screen at the end of the installation) also displays the passwords.

## Local with GitHub

### I'm stuck with artifacts after a failed local installation and can't continue

If you still cannot complete the installation due to remaining artifacts after completing a `kubefirst k3d destroy`, you may have to do a manual teardown. Firsly, you need to delete the k3d cluster with the following command:

```shell
$HOME/.k1/tools/k3d cluster delete kubefirst
kubefirst clean
```

Once it's done, you can delete the GitHub assets we created by logging into your account and removing the `gitops`, and `metaphor` repositories. You can also use the GitHub CLI to do that1:

```shell
gh repo delete <GITHUB_USERNAME>/metaphor --confirm
gh repo delete <GITHUB_USERNAME>/gitops --confirm
```
