LAL Finance v6 — د GitHub Pages لپاره چمتو فایلونه

مهم: دا ZIP د Android APK نه دی او په موبایل کې په مستقیم ډول نه نصبېږي. دا د ویب اپ/PWA فایلونه دي. د نصب لپاره یې GitHub Pages ته خپرول ضروري دي.

د خپرولو طریقه:
1) ZIP Extract کړئ.
2) د استخراج دننه index.html، manifest.webmanifest، sw.js او د icons فولډر ټول فایلونه انتخاب کړئ.
3) دا فایلونه د GitHub د Finance Repository په اصلي Root ځای کې Upload کړئ؛ یعنې index.html باید د Repository په لومړۍ کچه وي، نه په اضافي فولډر کې.
4) GitHub → Settings → Pages کې Deploy from a branch، Branch = main او Folder = /(root) وټاکئ او Save کړئ.
5) د GitHub Pages HTTPS لینک په Chrome کې خلاص کړئ.
6) که اپ مخکې نصب وي، بیا Install مه وهئ؛ د اپ موجود آیکن خلاص کړئ او پاڼه Refresh کړئ. که نوی آیکن/نسخه نه ښکاري، راته سکرین‌شاټ راولېږئ؛ د اپ یا Chrome ډاټا مه پاکوئ.
7) که اپ لا نه وي نصب، د Chrome ⋮ → Install app یا Add to Home screen وټاکئ.

لومړنی پاسورډ: 123456

د معلوماتو خوندیتوب:
- د ډاټا ذخیره کولو اصلي کیلي finance_ledger_v3 ساتل شوې.
- د پخوانیو حسابونو، معاملو، پورونو او نورو اصلي معلوماتو د جوړښت د پاکولو یا بدلولو کوډ نه دی ورزیات شوی.
- د نوو Exchange او Calculator تاریخچې لپاره جلا نوي فیلډونه ورزیات شوي؛ پخواني ریکارډونه د load پر مهال ساتل کېږي.
- د براوزر ډاټا مه پاکوئ او پخوانی اپ مه حذفوئ. د بدلونونو مخکې Settings → Download Backup وکاروئ.
- د دې فایلونو Upload کول ستاسې د GitHub پاڼه بدلوي؛ تر Backup مخکې یې مه Upload کوئ.

په دې نسخه کې:
- General Search او فلټرونه
- د لټون پایلو PDF او PNG صادرول
- د شخص/اکاونټ ټول ریکارډونه په یوه ځای کې
- USD/AFN Exchange د کارن د داخل شوي نرخ له مخې
- Calculator او د محاسبې تاریخچه
- Send Loan کې Repayment Due Date؛ Receive Loan کې نه
- Statement او Loans Live Search

یادونه: د Exchange نرخ په لاس داخلېږي؛ ژوندی بازار نرخ نه رااخلي. PDF د براوزر د Print کړکۍ له لارې Save as PDF کېږي.
