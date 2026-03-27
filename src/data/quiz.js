const quizQuestions = [
  {
    id: 1,
    question: "What does `git init` do kusuma ?",
    options: [
      "Downloads a repository from GitHub",
      "Initializes a new Git repository in the current directory",
      "Installs Git on your computer",
      "Creates a new branch",
    ],
    correctAnswer: 1,
    explanation:
      "`git init` creates a new .git subdirectory in your current folder, turning it into a Git repository. It doesn't download anything or install Git.",
  },
  {
    id: 2,
    question:
      "What is the correct order of the Git workflow stages?",
    options: [
      "Staging Area → Working Directory → Repository",
      "Repository → Staging Area → Working Directory",
      "Working Directory → Staging Area → Repository",
      "Working Directory → Repository → Staging Area",
    ],
    correctAnswer: 2,
    explanation:
      "You make changes in the Working Directory, stage them with `git add` to the Staging Area, then commit them to the Repository with `git commit`.",
  },
  {
    id: 3,
    question: "Which command stages ALL changed files for the next commit?",
    options: [
      "git commit -a",
      "git stage --all",
      "git add .",
      "git push --all",
    ],
    correctAnswer: 2,
    explanation:
      "`git add .` stages all modified and new files in the current directory and subdirectories. `git commit -a` skips the staging step for tracked files only.",
  },
  {
    id: 4,
    question: "What does `git clone` do differently from `git init`?",
    options: [
      "They do the same thing",
      "`git clone` creates an empty repo, `git init` downloads one",
      "`git clone` copies an existing remote repo locally, `git init` creates a new empty repo",
      "`git clone` only works with GitHub",
    ],
    correctAnswer: 2,
    explanation:
      "`git clone` downloads an existing repository including all its history, while `git init` creates a brand new empty repository. Clone works with any Git remote, not just GitHub.",
  },
  {
    id: 5,
    question: "What happens during a merge conflict?",
    options: [
      "Git automatically picks the newer change",
      "Git deletes both versions of the conflicting file",
      "Git marks the conflicting sections in the file for you to resolve manually",
      "Git creates a new branch with both changes",
    ],
    correctAnswer: 2,
    explanation:
      "Git inserts conflict markers (<<<<<<< HEAD, =======, >>>>>>>) into the file showing both versions. You must manually edit the file to resolve the conflict, then stage and commit.",
  },
  {
    id: 6,
    question: "What is the difference between `git fetch` and `git pull`?",
    options: [
      "They are identical commands",
      "`git fetch` downloads changes without merging; `git pull` downloads AND merges",
      "`git pull` is faster than `git fetch`",
      "`git fetch` only works with SSH",
    ],
    correctAnswer: 1,
    explanation:
      "`git fetch` downloads new data from the remote but doesn't integrate it into your working files. `git pull` is essentially `git fetch` + `git merge` combined — it downloads and immediately merges.",
  },
  {
    id: 7,
    question: "How do you undo the last commit while keeping your changes staged?",
    options: [
      "git revert HEAD",
      "git reset --hard HEAD~1",
      "git reset --soft HEAD~1",
      "git checkout HEAD~1",
    ],
    correctAnswer: 2,
    explanation:
      "`git reset --soft HEAD~1` moves HEAD back one commit but keeps all changes in the staging area. `--hard` would discard changes entirely, and `git revert` creates a new commit that undoes the changes.",
  },
  {
    id: 8,
    question: "What is `git stash` used for?",
    options: [
      "Permanently deleting uncommitted changes",
      "Temporarily saving uncommitted changes so you can switch branches cleanly",
      "Creating a backup of the entire repository",
      "Pushing changes to a remote repository",
    ],
    correctAnswer: 1,
    explanation:
      "`git stash` temporarily saves your uncommitted changes (like putting them in a drawer) and reverts your working directory to the last commit. Use `git stash pop` to bring them back.",
  },
  {
    id: 9,
    question: "What is a Pull Request (PR) on GitHub?",
    options: [
      "A command that pulls code from a remote repository",
      "A request to merge changes from one branch into another, with code review",
      "A way to download someone else's repository",
      "An automatic merge performed by GitHub",
    ],
    correctAnswer: 1,
    explanation:
      "A Pull Request is a GitHub feature (not a Git command) that lets you propose changes from one branch to another. Team members can review the code, discuss changes, and approve before merging.",
  },
  {
    id: 10,
    question:
      "Which command helps you find the exact commit that introduced a bug using binary search?",
    options: [
      "git log --search",
      "git blame",
      "git bisect",
      "git find-bug",
    ],
    correctAnswer: 2,
    explanation:
      "`git bisect` performs a binary search through your commit history. You mark commits as 'good' or 'bad', and Git narrows down to the exact commit that introduced the bug — incredibly efficient for large histories.",
  },
];

export default quizQuestions;
