## Local Development Setup with Yalc

This guide walks you through downloading a specific version of the `@sainsburys-tech/design-tokens` npm package, publishing it locally with `yalc`, and using it in a local project for development.

---

### Step 1: Create and Publish the Package Locally with Yalc

- install globally :

```
 npm install -g yalc
```

---

#### 📦 Step 2: Set Up the Package Locally

Create a local folder and extract the desired package version.

```bash
#1 Create a directory to hold the package

mkdir -p ~/local-packages/@sainsburys-tech/design-tokens
cd ~/local-packages/@sainsburys-tech/design-tokens

#2 Download the specific version tarball from npm

npm pack @sainsburys-tech/design-tokens@3.1.0

#3 Extract the contents

tar -xzf @sainsburys-tech-design-tokens-3.1.0.tgz

#4 Move contents to root

mv package/* .

#5 and clean up

rm -r package @sainsburys-tech-design-tokens-3.1.0.tgz

#6 Then publish the package to your local yalc store:

yalc publish

```

---

### Step 3: Add the Package to a Local Project

- In your consuming project (e.g. a Next.js app), run:

```bash
yalc add @sainsburys-tech/design-tokens
```

This will link your local version of the package to the project using yalc.

---

### 🔁 Step 4: re-install all

to update your main project packages.json re-install all and check if package.json is updated

```bash
npm install
```

---

### 🔁 Step 5: Push Changes When Editing

From ~/local-packages/@sainsburys-tech/design-tokens

```bash
yalc publish --push

```

---

### 🧹 Step 6: Remove Yalc Link When Done (optinal when published)

```bash
yalc remove @sainsburys-tech/design-tokens
npm install
```
