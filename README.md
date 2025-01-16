# GM Basket Wishlist UI

The GM Basket team will be rebuilding Argos wishlist in this repository.

## Who to contact for help

You can drop us a message on the `#dig-argos-basket` Slack channel where someone will respond. If no one has responded then you can get in touch with the Engineering Manager for the team who is Rosie Wardman.

## Getting Started

See our docs on [getting started](./docs/getting-started.md).

### Pages

```
src/app/{...route}/Page.tsx
```

- https://nextjs.org/docs/app/building-your-application/routing

### App Components

```
src/app/ui/{area}
```

- Any components that use server actions live in this folder

### Components

```
src/components
```

- This is exclusively for dumb components
- We should aim to use a Fable component instead of creating a new one here

### Tests

```
src/tests/{area}
```

- This is where all our Playwright tests live which run against our stubs
- `/tests/fixture.ts` provides extensions to playwrights functionality such as setting flags and testing analytics
- Any `*.spec.ts` file in this directory will be picked up by Playwright
