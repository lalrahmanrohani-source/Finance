LAL Finance Management System — Updated Project

GitHub Pages deployment:
1. Extract this ZIP file.
2. Open the inner folder named "Finance 4".
3. Upload ALL files inside that folder directly to the ROOT of your GitHub repository (do not upload the folder itself).
4. Keep index.html, manifest.json, sw.js, and all PNG icons together in the repository root.
5. Wait for GitHub Pages to finish publishing, then refresh the site.

Data safety:
- The application keeps its existing local database key: finance_ledger_v3.
- Do not clear Chrome site data or uninstall the installed app before making a backup.
- Download a backup from Settings before replacing the deployed files.
- Uploading website files does not move data from one device/browser to another. Restore a backup only when you intend to replace the local records.

Requested changes in this build:
- Money Held: removed Live Search, the History option, and the separate transaction-history table. The balances page has one complete PDF export button showing current balances.
- Loans: Register Loan, Send Loan, Receive Loan, Statement Loan, Delete Loan.
- Shortage: only the two calculation summaries remain.
- General Search and Calculator are removed from the navigation and pages.
- Currency Exchange supports custom From/To currency codes, amount and rate, and each saved entry can be deleted.
- Each saved Account deposit/withdrawal, Account opening balance, Money Held deposit/withdrawal, Loan sent/received, and Personal Expense now shows a Download Receipt button immediately after saving.
- Account, Money Held, Loan, and Personal Expenses statements retain a Receipt action on every transaction row. Receipt vouchers download as PNG images.

PWA files and icons are retained from the supplied source project.
