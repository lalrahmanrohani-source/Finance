LAL Finance — د موبایل اپ نصب او کارول

مهم: ZIP فایل مستقیم په موبایل کې د اپ په توګه نه نصبېږي. دا فایلونه باید لومړی GitHub Pages ته پورته شي.

۱) ZIP استخراج کړئ.
۲) د ZIP دننه ټول فایلونه او د icons فولډر محتویات د GitHub Repository په اصلي ځای (root) کې Upload کړئ. index.html باید په لومړۍ کچه ښکاره وي، نه په بل فولډر کې.
۳) Repository باید Public وي که وړیا GitHub Pages کاروئ.
۴) GitHub کې Settings → Pages ته لاړ شئ.
۵) Deploy from a branch وټاکئ، Branch = main او Folder = /(root) وټاکئ، Save وکړئ.
۶) د Pages جوړ شوی HTTPS لینک په Android Chrome کې خلاص کړئ.
۷) د Chrome درې نقطې (⋮) کې Install app یا Add to Home screen وټاکئ. که د ننوتلو په صفحه کې Install App on Phone تڼۍ ښکاره شي، هغه هم کارولای شئ.
۸) اپ یو ځل د انټرنېټ په حالت کې خلاص کړئ؛ وروسته یې د انټرنېټ پرته هم ازموینه وکړئ.

د ننوتلو لومړنی پاسورډ: 123456
پاسورډ بدلول: Sign In وکړئ → Settings → Change Password. اوسنی ۶ عددي پاسورډ او نوی ۶ عددي پاسورډ دوه ځله ولیکئ.

یادونه:
- د موبایل د Chrome له محلي file:// لارې څخه د اپ نصب نه کېږي؛ باید د GitHub Pages HTTPS لینک وي.
- که په GitHub Pages کې د پخواني اپ نسخه پاتې وي، Chrome کې د پاڼې Refresh وکړئ یا د Site settings له لارې Cache پاک کړئ، بیا لینک پرانیزئ.
- مالي معلومات په همدې موبایل/براوزر کې Local Storage کې ساتل کېږي. د موبایل بدلولو یا د براوزر ډیټا پاکولو مخکې Settings → Download Backup وکاروئ.
- د GitHub Pages اپ خپروي؛ خو د کاروونکو ترمنځ معلومات نه Sync کوي.


نوي بدلونونه (Statement + Live Search):
1) د Money Held او Loans په جدولونو کې د History تڼۍ اوس Statement نوم لري.
2) د Statement تڼۍ د شخص/پور اخیستونکي بشپړ حسابي راپور جوړوي: د ثبت معلومات، اسعار، ټولې ورکړې/ترلاسه کړې، اوسنی بیلانس، د معاملو شمېر او د هرې معاملې وروسته بیلانس.
3) د انټرنېټ په شتون کې PDF په مستقیم ډول ډاونلوډ کېږي. که انټرنېټ نه وي یا PDF کتابتون بار نه شي، د چاپ کړکۍ پرانیستل کېږي؛ هلته Print > Save as PDF وټاکئ.
4) د Loans > Total Loans په سر کې Live Search اضافه شوی؛ د نوم، اکاونټ نمبر، نریشن، اسعارو او نېټې په لیکلو سره پایلې سمدستي فلټر کېږي.
5) د پخوانۍ ډیټابېس کیلي finance_ledger_v3 او د ډیټا جوړښت نه دي بدل شوي؛ دا فایل په جلا توګه وکاروئ، او د پخواني سیستم بیک اپ وساتئ.

یادونه: دا جلا نسخه ده؛ ستاسو GitHub ویب‌سایټ ته هېڅ اپډېټ نه دی پورته شوی. د مستقیم PDF ډاونلوډ لپاره لومړی ځل انټرنېټ ته اړتیا ده؛ د افلاین حالت لپاره د چاپ له لارې Save as PDF شته.

Loan Repayment Due Date update (v5):
- The Send Loan form now includes a Repayment Due Date field.
- The Receive Loan (repayment) form does not show a repayment due date field.
- A due date entered while sending a loan is saved with the borrower record and loan transaction, so it can appear on the loan disbursement voucher.
- Receive Loan transactions save no repayment due date, and their vouchers do not display that due-date field.
- Existing borrower records and transaction history are retained; this update does not clear localStorage data.


نسخه v6 کې نوي امکانات:
- General Search: په Accounts، Money Held، Loans، Personal Expenses او Shortage کې عمومي لټون؛ د برخې، شخص/اکونټ، د ریکارډ ډول، نېټې او کرنسۍ فلټرونه.
- د فلټر شویو پایلو PDF (Print → Save as PDF) او PNG عکس ډاونلوډ.
- د یوه ټاکلي شخص/اکونټ ټول ریکارډونه او معاملې په یو ځای کې لیدل او صادرول.
- Exchange: د USD او AFN د کارن له خوا ټاکل شوي نرخ پر بنسټ تبادله؛ تاریخچه ساتل کېږي.
- Calculator: جمع، تفریق، ضرب، تقسیم او فیصدي؛ د محاسبې تاریخچه ساتل کېږي.
- د تبادلې او محاسبې تاریخچه په عادي Backup کې هم شامله ده.

یادونه: د تبادلې نرخ په خپله د کارن له خوا داخلېږي؛ سیستم ژوندی بازار نرخ نه رااخلي. PDF د براوزر د Print کړکۍ له لارې Save as PDF کېږي.
