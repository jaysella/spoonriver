# Contribution Guidelines

Hello, and thank you for your interest in contributing to our Spoon River Anthology project! Please take a minute to review our Contribution Guidelines, as this will result in getting your issue resolved or pull request merged faster.

## Specific Information

All data for this site is located in the [src/assets/data/currentData.json](src/assets/data/currentData.json) file.

The format for data entries is:

```json
{
  "id": 1,
  "name": "Hod Putt",
  "relations": "Bill Piersol",
  "alt_name": "William Phelps",
  "description": "Bill Piersol; Killed someone near Procters Grove.",
  "image_url": "https://images.findagrave.com/photos/2012/197/41293641_134246596028.jpg"
}
```

| Key         | Purpose                                                                      |          |
| ----------- | ---------------------------------------------------------------------------- | -------- |
| id          | Sequential, unique integer index                                             | Required |
| name        | Declares the character's name                                                | Required |
| alt_name    | The real-life person on who the character is based                           | Optional |
| description | Description on who the character is, who he's connected to, and what he does | Required |
| image_url   | URL to an image of the grave of who the character is based on                | Optional |

## Getting set up

Multiple tools are used for development, the basics being Git and Yarn (see the quick start guide in our [README](README.md) file for help).

You can, however, edit files on GitHub's website which may be easier.

## Creating a pull request

Every pull request here should have a corresponding issue that describes the work to be done, and a category that it falls into. If no issue exists for the planned changes, create a new one. Remember to keep each issue and pull request focused and specific, and _keep the PR changes focused on the changes planned by the issue._ Generally, the smaller they are, the sooner they're merged.

## Review Process

Once you're finished and your PR is ready, request a review.

When you're changes are approved, they will be merged into the `master` branch and deployed to the live site.

## Commit Messages

For all commit messages, please:

- prefix with the category of changes (`fix`, `feat`, and `chore` are the most common)
- use the present tense
- keep it brief, but descriptive

Example: `feat: Add more info to Hod Putt's description`

All contributions to this project are appreciated!

\- _The Spoon River Anthology character exploration website creators_
