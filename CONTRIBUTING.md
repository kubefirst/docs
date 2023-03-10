# Contributing to the Kubefirst documentation

Firstly, we want to thank you for investing your valuable time to contribute to Kubefirst!

_⚠️ Please note that this file is a work-in-progress, so more details will be added in the future._

Note we have a [code of conduct](CODE_OF_CONDUCT.md) which needs to be followed in all your interactions with the project to keep our community healthy.

## Ways to Contribute

At Kubefirst, we believe that every contribution is valuable, not just the code one, which means we welcome

- [bug reports](https://github.com/kubefirst/kubefirst/issues/new);
- [feature requests](https://github.com/kubefirst/kubefirst/issues/new?assignees=&labels=feature-request&template=feature_request.md&title=);
- [documentation issues reports](https://github.com/kubefirst/kubefirst/issues/new?assignees=&labels=feature-request&template=feature_request.md&title=) like unclear section, missing information or even typos;
- and, of course, any code contributions to Kubefirst, or the documentation itself.

Before making a code change, first discuss your idea via an [issue](https://github.com/kubefirst/docs/issues/new/choose). Please check if a feature request or bug report does [already exist](https://github.com/docs/kubefirst/issues/) before creating a new one.

## Getting Started With the Documentation

We are using [Docusaurus](https://github.com/facebook/docusaurus) as our documentation platform. More information on the platform in their [documentation](https://docusaurus.io/docs).

### Commit messages

We subscribe to the [Conventional Commits specification](https://www.conventionalcommits.org). It can be a bit difficult to choose the right commit message prefix since this repository is for documentation, and not an application per se. Here are the guidelines for the documentation specific ones:

- `docs`: when adding new information to the docs (ex.: creating a new page, adding a section to an existing one).
- `fix`: when fixing the documentation (ex.: correcting a typo, rectifying untrue content).
- `refactor`: rewording part of the content or restructuring the documentation.

Here's the non content related ones:

- `chore`: anything that isn't Docusaurus code related (see `feat` prefix) or documentation content (ex.: updating the `CONTRIBUTING.md` file or releasing a new version of the docs).
- `ci`: any automation, probably GitHub Actions related.
- `feat`: anything related to Docusaurus as our documentation platform (ex.: updating Docusaurus, changing the configurations), aside from styling.
- `style`: anything about styling, mostly CSS.

As of now, we don't see usage for the `perf` & `test` prefixes.

### Update the content

WIP

#### Markdown

Before being able to merge your PR, the [GitHub Action responsible for checking the Markdown validity](https://github.com/kubefirst/docs/blob/main/.github/workflows/check-markdown.yml) needs to pass. If you want to test your changes locally before sending a PR, you can do it by using [act](https://github.com/nektos/act), and run `act -j markdown-check`. We follow the [rules](https://github.com/DavidAnson/markdownlint#rules--aliases) from the [markdownlint application](https://github.com/DavidAnson/markdownlint) with the exceptions of:

- [MD013](https://github.com/DavidAnson/markdownlint/blob/main/doc/md013.md): limiting the line length to 80 as it's easier to manage without line breaks within the text for documentation content.
- [MD024](https://github.com/DavidAnson/markdownlint/blob/main/doc/md024.md): preventing same text headers as it's needed for our project documentation.
- [MD033](https://github.com/DavidAnson/markdownlint/blob/main/doc/md033.md): restrict inline HTML as we sometimes need more customization for the content than what Markdown allows.

We also enforce some styling to prevent ambiguity, and ensure consistency for:

- MD049: underscores for italic text.
- MD050: asterisks for bold text.

#### Syntax Highlight

Docusaurus is using Prism for code block syntax highlighting. Here's a list of [supported languages](https://prismjs.com/#supported-languages).

### Update the platform

WIP

### Testing your modifications

To run our documentation locally, simply run `npm start`.

## Getting Started with Kubefirst Code

Please check the [CONTRIBUTING.md](https://github.com/kubefirst/kubefirst/blob/main/CONTRIBUTING.md) file from the [kubefirst](https://github.com/kubefirst/kubefirst/) repository.

## Help

If you need help in your Kubefirst journey as a contributor, please join our [Slack Community](http://kubefirst.io/slack). We have the `#contributors` channel where you can ask any questions or get help with anything contribution-related. For support as a user, please ask in the `#helping-hands` channel, or directly to @fharper (Fred in Slack), our Developer Advocate.
