# Contributing to Coding Interview Problems

Welcome to Coding Interview Problems! We appreciate your interest in contributing to this project. By contributing, you help make this project better for everyone. Here are some guidelines to get you started:

## Getting Started

1. **Fork the repository:** Click the "Fork" button in the upper right-hand corner of this repository's page. This will create a copy of the repository in your GitHub account.

2. **Clone your fork:** Use `git clone` to clone your fork to your local machine. Replace `[your-username]` with your GitHub username and `[your-repo-name]` with the name of the repository:

```shell
git clone https://github.com/[your-username]/[your-repo-name].git
```

3. **Create a new branch:** Before making any changes, create a new branch for your work. Naming your branch according to the feature or fix you're working on is a good practice:

```shell
git checkout -b feature/my-new-feature
```

4. **Make changes:** Write your code or make the necessary changes to the project.

5. **Commit your changes:** Use descriptive commit messages and make sure your code follows the project's coding style and guidelines:

```shell
git commit -m "Add my new feature"
```

6. **Push to your fork:** Push your changes to your GitHub repository:

```shell
git push origin feature/my-new-feature
```

7. **Create a Pull Request:** Go to the original repository and click the "New Pull Request" button. Describe your changes and submit the pull request.

8. **Code Review:** Your pull request will undergo a code review process. Be prepared to make changes and respond to feedback.

## Adding a New Problem

1. **Create a Subdirectory:** Use this bash script to create a subdirectory with the necessary files included. Replace `my_new_problem` with the name of your new problem.

```shell
mkdir my_new_problem && cd $_ && touch index.ts index.test.ts solution.ts
```

2. **Add a Description:** Add a description of the problem inside `index.ts`. Make sure to include function inputs, expected outputs, and examples.

3. **Test Your Problem:** Include a test suit inside `index.test.ts` Here are some things you can test for:

- _Input Validation:_ Check if the function handles invalid or unexpected inputs gracefully.
- _Output Validation:_ Verify that the function returns the expected output for a given set of inputs.
- _Boundary Conditions:_ Examine how the function behaves at the boundaries of its expected input. For example, if a function accepts an array, test it with an empty array, an array with one element, or an array with the maximum allowed number of elements.
- _Edge Cases:_ Test for edge cases that may trigger unusual behavior. For example, if your function processes dates, test it with leap years or daylight saving time transitions.
- _Performance:_ Evaluate the function's performance, especially if it involves computationally intensive tasks. For example, if your function has an array as an input, test for large arrays.

4. **Provide the Solution:** Add your solution inside `solution.ts`. Make sure your solution passes all tests.

## Contribution Guidelines

- Respect the coding style and guidelines used in the project.

- Keep your pull requests focused. If you're addressing multiple issues or making multiple changes, please submit separate pull requests for each.

- Write clear and concise commit messages and documentation when necessary.

- Be respectful and constructive when giving and receiving feedback.

- Only contribute code that you have the legal right to contribute. If you're introducing dependencies, ensure they have compatible licenses.

- Test your changes thoroughly before submitting a pull request.

## License

By contributing to this project, you agree that your contributions will be licensed under the [LICENSE](LICENSE) file in this repository.

Thank you for contributing to Coding Interview Problems! Your help is greatly appreciated.
