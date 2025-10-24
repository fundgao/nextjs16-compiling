Next.js 16 entering an incorrect URL will cause a memory overflow and restart

---

1. Start the application in development (next dev)
2. Enter the URL of the app router that does not exist on the browser
3. Next.js Dev Tools displays Compiling until the memory overflows and the system restarts.

---

1. Enter the correct URL in the browser and the program will run normally
2. If you enter the wrong URL in the browser, Next.js Dev Tools displays Compiling until the memory overflows and the system restarts.

The terminal and browser are stuck during compilation.

---

- Operating System:
  - Platform: MacOS
  - Arch: Apple M4
  - Version: 26.0.1
  - Available memory (MB): 24576
  - Available CPU cores: 10
- Binaries:
  - Node: 22.15.0
  - npm: 10.9.2
  - pnpm: 10.14.0
- Relevant Packages:
  - next: 16.0.0 // Latest available version is detected (16.0.0).
  - eslint-config-next: N/A
  - react: 19.2.0
  - react-dom: 19.2.0
  - typescript: 5.9.3
- Next.js Config:
  - output: N/A




I rewrote the 404 page not-found.tsx.
But it worked fine before upgrading to Next.js 16.