/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  aws: [
    'aws/platform',
    {
      'Getting Started': [
        {
          type: 'autogenerated',
          dirName: 'aws/getting-started',
        },
      ],
      'Explore': [
        {
          type: 'autogenerated',
          dirName: 'aws/explore',
        },
      ],
      'Advanced': [
        {
          type: 'autogenerated',
          dirName: 'aws/advanced',
        }
      ]
    },
    'aws/deprovision',
    'aws/faq',
    'aws/credits'
  ],
  civo: [
    'civo/platform',
    {
      'Getting Started': [
        {
          type: 'autogenerated',
          dirName: 'civo/getting-started',
        },
      ],
      'Explore': [
        {
          type: 'autogenerated',
          dirName: 'civo/explore',
        },
      ],
    },
    'civo/deprovision',
    'civo/faq',
    'civo/credits',
  ],
  k3d: [
    'k3d/common/platform',
    {
      'Getting Started': [
        {
          type: 'autogenerated',
          dirName: 'k3d/main',
        },
      ],
      'Explore': [
        {
          type: 'autogenerated',
          dirName: 'k3d/explore',
        },
      ],
    },
    'k3d/destroy/destroy',
    'k3d/common/faq',
    'k3d/common/credits',
  ],
};

module.exports = sidebars;
