# Contributing & Issue Workflow

## Issue Lifecycle

```
Open → Triaged → In Progress → In Review → Closed
```

### 1. Opening an Issue

- Use one of the templates under `.github/ISSUE_TEMPLATE/` (blank issues are disabled).
- **One issue = one problem.** Don't bundle unrelated work.
- Search existing issues first to avoid duplicates.
- Title format: `[Bug]:` or `[Feature]:` + short summary (auto-applied by templates).

### 2. Triage

A maintainer triages new issues by applying:

| Label        | Meaning                                        |
| ------------ | ---------------------------------------------- |
| `triage`     | Needs maintainer review (default on creation)  |
| `bug`        | Something is broken                            |
| `enhancement`| New feature or improvement                     |
| `good first issue` | Good for newcomers                       |
| `help wanted` | Extra attention needed                        |
| `blocked`    | Waiting on another issue or decision           |
| `security`   | Security-sensitive — handle with care          |

During triage:
1. Confirm the bug reproduces (or the feature fits the service scope).
2. Remove `triage`, set priority (`P0`–`P3`), and add the relevant area label (`auth`, `db`, `middleware`, `validation`).
3. For security issues, do **not** include secrets/tokens in reports. Report privately to a maintainer instead of filing a public issue.

### 3. Working on an Issue

1. Comment "I'd like to work on this" and wait for assignment before starting.
2. Branch from `main` using the convention:

   ```bash
   git checkout -b fix/<issue-number>-short-description   # bugs
   git checkout -b feat/<issue-number>-short-description  # features
   ```

3. Reference the issue in every commit message:

   ```
   fix: validate refresh token payload (#42)
   ```

### 4. Review & Close

- Open a PR that links the issue (`Closes #42`) so GitHub auto-closes it on merge.
- PRs require at least one approving review; CI checks must pass.
- Once merged into `main`, the issue closes automatically.
- If an issue is stale (no activity for 30 days) it gets the `stale` label and may be closed after a further 7 days.

## Definition of Done

An issue is only considered resolved when:

- [ ] Code merged into `main`
- [ ] Tests added/updated and passing
- [ ] Typecheck passes (`tsc --noEmit`)
- [ ] No secrets or credentials introduced (`.env` stays out of git)
- [ ] README/docs updated if behavior changed

## Security Issues

Found a vulnerability (token leak, auth bypass, injection)? Do **not** open a public issue. Contact the maintainers directly through [GitHub Discussions](https://github.com/T4Tier3/Authentication-mircoservices/discussions) or a private channel.
