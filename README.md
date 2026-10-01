# My Future Letter — আমার ভবিষ্যতের চিঠি

A mobile-first future-letter platform using Firebase Authentication/Firestore and a server-side GitHub API integration.

## What users see
1. Sign in with Google.
2. Choose a unique username.
3. Create up to 5 letters.
4. Start from a template or write from scratch.
5. Add photos (up to 25 photos per account).
6. Set a separate letter password.
7. Save a secure encrypted draft or seal/publish the letter.
8. Open the public link and unlock it with the letter password.
9. Download/keep the A4 PDF with QR code.

## Important security model
- Letter content is encrypted in the browser with AES-GCM using a PBKDF2-derived key.
- Plaintext letter content is not sent to GitHub.
- The GitHub token is only used by Firebase Cloud Functions and must never be put in frontend JavaScript.
- Google login is ownership access. The letter password is read/unlock access.
- Photos are stored as public GitHub Pages assets. The letter itself is encrypted, but a person who discovers a raw photo URL could request that image directly. If private-photo cryptography is required later, encrypt the images too.

## Your setup — সহজ বাংলা + English

### A. GitHub
**বাংলা:** আপনার GitHub account-এ `futureletter` নামে একটি **public repository** তৈরি করুন। এই ZIP-এর `public` folder-এর contents repository root-এ upload করুন.

**English:** Create a **public** GitHub repository named `futureletter`. Upload the contents of this project's `public` folder to the repository root.

Your Pages URL will be:
`https://my-future-letter.github.io/futureletter/`

Also upload your logo to:
`my-picture/my-future-letter-logo.png`

Then enable GitHub Pages from **Settings → Pages → Deploy from branch → main → /(root)**.

### B. Firebase
**বাংলা:** Firebase Console-এ `my-future-letter` project খুলুন → Authentication → Sign-in providers → Google → Enable.

**English:** Open the `my-future-letter` Firebase project → Authentication → Sign-in providers → Google → Enable.

Create Firestore Database and deploy `firestore.rules` from the Firebase CLI.

### C. Backend / GitHub secret
The GitHub token is NOT placed in this website.

Use a GitHub fine-grained token with **Contents: Read and write** for only the `futureletter` repository. GitHub documents that the Contents write permission can create/update repository files. Do not expose the token to the browser.

Set the Firebase secret:

`firebase functions:secrets:set GITHUB_TOKEN`

Then deploy:

`firebase deploy --only functions,firestore`

Cloud Functions currently supports Node.js 20 and 22; this project uses Node.js 20.

### D. Firebase Authorized Domains
Add your GitHub Pages domain to Firebase Authentication's authorized domains:
`my-future-letter.github.io`

### E. If you change GitHub owner/repository
Edit these values in `functions/index.js` and `public/js/config.js`:
- `githubOwner`
- `githubRepo`
- `githubPagesBase`
- `CONFIG.owner`
- `CONFIG.repo`
- `CONFIG.pagesBase`

### F. Social media preview
The home page has Open Graph/Twitter metadata. Every generated public letter page also receives:
- English title
- Short English description
- Logo preview image
- Public page URL

Social platforms that read Open Graph metadata can therefore show a small English preview card when a link is shared. The private letter text is not placed in the preview description.

## Phone-only deployment note
If you do not have a computer, you can use GitHub's web interface for the static `public` files. For Firebase Functions deployment, use a browser-based environment such as Google Cloud Shell or another Node.js environment. The Firebase CLI is required for Cloud Functions deployment.

## Future email delivery
Email delivery is intentionally not implemented in v1. The Firestore letter model can later be extended with delivery date/time/status fields and a scheduled backend email service.
