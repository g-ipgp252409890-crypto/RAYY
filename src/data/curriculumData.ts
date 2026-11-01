/**
 * Data Kurikulum & Kandungan Draf Google Sites
 * Pendidikan Islam Tahun 3 (Bidang Akidah: Beriman Kepada Kitab)
 * Standard Kandungan: 3.2 | Standard Pembelajaran: 3.2.1, 3.2.2
 */

export interface PageSection {
  id: string;
  blockNumber: number;
  blockName: string;
  googleSitesTool: string;
  emoji: string;
  content: string;
}

export interface PageContent {
  id: string;
  pageNumber: number;
  title: string;
  shortTitle: string;
  badge: string;
  metaDescription: string;
  teacherGuide: {
    googleSiteLayout: string;
    suggestedWidgets: string[];
    visualIdeas: string;
    estimatedTime: string;
  };
  sections: PageSection[];
  rawCopyText: string;
}

export const CURRICULUM_INFO = {
  subject: "Pendidikan Islam",
  level: "Tahun 3",
  field: "Bidang Akidah",
  unit: "Unit 2: Beriman Kepada Kitab Allah",
  contentStandard: "3.2 Merumus konsep beriman dengan kitab dan mengaplikasikannya dalam kehidupan harian secara beradab dan istiqomah.",
  learningStandards: [
    {
      code: "3.2.1",
      desc: "Menyatakan pengertian kitab.",
    },
    {
      code: "3.2.2",
      desc: "Membaca dalil naqli kewajipan beriman kepada kitab.",
    },
  ],
  learningObjectives: [
    {
      id: 1,
      text: "Menyatakan pengertian kitab dari segi bahasa dan syarak dengan tepat.",
      icon: "BookOpen",
    },
    {
      id: 2,
      text: "Membaca dan memahami dalil naqli kewajipan beriman kepada kitab Allah dengan sebutan yang betul.",
      icon: "Scroll",
    },
    {
      id: 3,
      text: "Menjelaskan kepentingan beriman kepada kitab Allah dalam membentuk akhlak dan kehidupan seharian.",
      icon: "Sparkles",
    },
  ],
};

export const PAGES_DATA: PageContent[] = [
  {
    id: "halaman-1",
    pageNumber: 1,
    title: "Kembara Wahyu Ilahi: Indahnya Beriman Kepada Kitab Allah",
    shortTitle: "1. Utama (Home)",
    badge: "Halaman Utama",
    metaDescription: "Gerbang pembelajaran digital interaktif beriman kepada kitab Allah untuk murid Tahun 3.",
    teacherGuide: {
      googleSiteLayout: "Pengepala Banner Lebar (Large Banner) + 3 Kolum Kad Objektif + Seksyen Panduan Belajar",
      suggestedWidgets: ["Banner Imej Bercorak Geometri Islam / Masjid", "Butang Pautan Pantas ke Halaman 2", "Ikon Lucide / Flat Icon berwarna"],
      visualIdeas: "Imej kanak-kanak membaca Al-Quran bersama ibu bapa dengan pencahayaan lembut, latar kubah masjid hijau keemasan.",
      estimatedTime: "5 - 10 Minit (Pengenalan & Set Induksi)",
    },
    sections: [
      {
        id: "h1-b1",
        blockNumber: 1,
        blockName: "Banner Utama & Ucapan Sambutan (Kotak Bold & Krim)",
        googleSitesTool: "Sisipkan > Kod Semat (Embed HTML) atau Kotak Teks Berwarna",
        emoji: "🕌",
        content: `3 BUTANG KATEGORI ATAS:
[⚡ PENDIDIKAN ISLAM TAHUN 3]  [BIDANG AKIDAH • UNIT 2]  [✨ STANDARD KANDUNGAN 3.2]

TAJUK UTAMA (SATU KOTAK COKLAT PASTEL SELARAS & SERAGAM):
[KEMBARA WAHYU ILAHI: BERIMAN KEPADA KITAB] (Semua perkataan di dalam kotak coklat dengan huruf krim #FFFDF0)

TEKS KOTAK ALU-ALUAN & BUTANG LAGU:
"✨ SELAMAT DATANG MURID-MURID CILIK TAHUN 3! ✨
Jom kita kuasai ilmu wahyu Allah SWT, fahami rahsia 4 kitab utama, lafazkan dalil Al-Quran dan buktikan keimananmu melalui tindakan harian yang berani dan istiqomah! Mari kita mula murid-murid.

🎵 MARI KITA DENGARKAN LAGU 🎵
(Klik di sini untuk tonton video lagu Akidah Tahun 3: https://youtu.be/rTmChzd98bM?feature=shared)"`,
      },
      {
        id: "h1-b2",
        blockNumber: 2,
        blockName: "Maklumat Kurikulum & DSKP",
        googleSitesTool: "Sisipkan > Kotak Teks (Warna Latar: Kelabu Muda / Style 2)",
        emoji: "📋",
        content: `MAKLUMAT KURIKULUM:
• Mata Pelajaran: Pendidikan Islam Tahun 3 (Bidang Akidah)
• Standard Kandungan: 3.2 Merumus konsep beriman dengan kitab dan mengaplikasikannya dalam kehidupan harian secara beradab dan istiqomah.
• Standard Pembelajaran:
  - 3.2.1 Menyatakan pengertian kitab.
  - 3.2.2 Membaca dalil naqli kewajipan beriman kepada kitab.`,
      },
      {
        id: "h1-b3",
        blockNumber: 3,
        blockName: "3 Objektif Pembelajaran",
        googleSitesTool: "Blok Kandungan: 3 Kolum Kad (3 Content Blocks)",
        emoji: "🎯",
        content: `OBJEKTIF PEMBELAJARAN KITA HARI INI:
KAD 1: 📖 Pengertian Kitab
Menyatakan pengertian kitab dari sudut bahasa dan istilah syarak dengan betul.

KAD 2: 📜 Dalil Naqli Al-Quran
Membaca dalil naqli Surah An-Nisa' ayat 136 berserta terjemahan dengan betul.

KAD 3: 💖 Kepentingan & Akhlak Harian
Menjelaskan kepentingan beriman kepada kitab Allah dalam membentuk akhlak seharian.`,
      },
      {
        id: "h1-b4",
        blockNumber: 4,
        blockName: "Panduan Kembara & Butang Navigasi",
        googleSitesTool: "Sisipkan > Kotak Teks + Butang (Button)",
        emoji: "🧭",
        content: `PANDUAN LANGKAH BELAJAR MURID:
1. Langkah 1: Klik "Pengertian Kitab" untuk memahami maksud dan 4 kitab utama.
2. Langkah 2: Hayati "Dalil Naqli" untuk dengar bacaan ayat dan susun maksudnya.
3. Langkah 3: Selami "Kepentingan Kitab" dan selesaikan cabaran kuiz situasi.
4. Langkah 4: Lengkapkan "Refleksi & Penutup" untuk merekod azam harian!

TEKS BUTANG GOOGLE SITES:
"Mula Kembara Ilmu Sekarang! ➡️" (Pautkan ke Halaman 2: Pengertian Kitab)`,
      },
    ],
    rawCopyText: `===========================================================
HALAMAN 1: UTAMA (HOME)
CADANGAN TATA LETAK GOOGLE SITES: Large Banner + 3 Kotak Kandungan (Content Blocks)
===========================================================

[BLOK 1: BANNER UTAMA (GAYA BOLD KOTAK COKLAT & KRIM)]
3 Butang Atas:
- [⚡ PENDIDIKAN ISLAM TAHUN 3]
- [BIDANG AKIDAH • UNIT 2]
- [✨ STANDARD KANDUNGAN 3.2]

Tajuk Utama (Satu Kotak Coklat Selaras & Seragam):
KEMBARA WAHYU ILAHI: BERIMAN KEPADA KITAB
(Latar Kotak: Coklat Pastel #9C7A5B | Warna Huruf: Krim Cerah #FFFDF0)

Kotak Alu-aluan (Kotak Krim):
"Selamat datang murid-murid cilik tahun 3! Jom kita kuasai ilmu wahyu Allah SWT, fahami rahsia 4 kitab utama, lafazkan dalil Al-Quran dan buktikan keimananmu melalui tindakan harian yang berani dan istiqomah! Mari kita mula murid-murid"

[BLOK 2: MAKLUMAT KURIKULUM & STANDARD PEMBELAJARAN]
- Subjek: Pendidikan Islam Tahun 3 (Bidang Akidah)
- Standard Kandungan: 3.2 Merumus konsep beriman dengan kitab dan mengaplikasikannya dalam kehidupan harian secara beradab dan istiqomah.
- Standard Pembelajaran: 
  * 3.2.1 Menyatakan pengertian kitab.
  * 3.2.2 Membaca dalil naqli kewajipan beriman kepada kitab.

[BLOK 3: OBJEKTIF PEMBELAJARAN KITA HARI INI]
Selepas menyelesaikan kembara ini, anda akan dapat:
1. Menyatakan pengertian kitab dari sudut bahasa dan istilah syarak dengan betul.
2. Membaca dalil naqli kewajipan beriman kepada kitab Allah dan menghayati maknanya.
3. Menjelaskan sekurang-kurangnya 3 kepentingan beriman kepada kitab dalam kehidupan harian.

[BLOK 4: PANDUAN KEMBARA MURID (BAGAIMANA BELAJAR DI LAMAN INI?)]
Langkah 1: Klik menu "Pengertian Kitab" untuk mengenali maksud kitab dan 4 kitab suci.
Langkah 2: Teruskan ke "Dalil Naqli" untuk belajar ayat Al-Quran dan menguji ingatan melalui aktiviti susun ayat.
Langkah 3: Selami "Kepentingan Kitab" untuk melihat bagaimana kitab membimbing tingkah laku kita setiap hari.
Langkah 4: Lengkapkan "Refleksi & Penutup" untuk merekodkan ikrar azam harian dan menerima Bintang Kejayaan!

[BUTANG TINDAKAN (BUTTON)]:
Teks Butang: "Mula Kembara Ilmu Sekarang! ➡️"
Pautan Butang: Halaman 2 (Pengertian Kitab)`,
  },

  {
    id: "halaman-2",
    pageNumber: 2,
    title: "Pengertian Kitab & Mengenali 4 Kitab Utama",
    shortTitle: "2. Pengertian & 4 Kitab",
    badge: "Konsep Asas & 4 Kitab",
    metaDescription: "Fahami pengertian kitab dari segi bahasa dan syarak serta kenali 4 kitab suci berserta nabi penerimanya.",
    teacherGuide: {
      googleSiteLayout: "2 Kolum Kotak Teks (Definisi Bahasa vs Syarak) + 4 Grid Kad Kitab & Nabi + Bahagian Embed Aktiviti",
      suggestedWidgets: ["Collapsible Group untuk fakta menarik setiap kitab", "Kad Grid 4 Kitab (Taurat, Zabur, Injil, Al-Quran)", "Permainan Susun Kata Interaktif"],
      visualIdeas: "Ikon 4 lembaran kitab berseri, simbol pelepah tamar/tulisan kuno, mushaf Al-Quran dengan kaligrafi indah.",
      estimatedTime: "15 - 20 Minit",
    },
    sections: [
      {
        id: "h2-b1",
        blockNumber: 1,
        blockName: "Nota 1: Pengertian Kitab (Bahasa & Syarak)",
        googleSitesTool: "Blok Kandungan: 2 Kolum (Perbandingan Bahasa vs Syarak) + Kotak Analogi",
        emoji: "📖",
        content: `PENGERTIAN KITAB:

1. DARI SEGI BAHASA:
Berasal daripada perkataan Arab "Kataba" (كتب) yang bermaksud "Tulisan" atau "Buku Catatan".

2. DARI SEGI ISTILAH SYARAK:
Kalam Allah SWT (perkataan Allah) yang suci, yang diwahyukan kepada para nabi dan rasul-Nya, mengandungi hukum-hakam, ajaran kebenaran, dan panduan hidup bagi seluruh umat manusia.

💡 ANALOGI MUDAH (BUKU PANDUAN HIDUP):
"Bayangkan jika anda membeli sebuah robot mainan canggih, pasti ada buku manual panduan, bukan? Begitulah kitab suci! Al-Quran dan kitab Allah ialah 'Buku Panduan Hidup Terbaik' agar manusia selamat, berakhlak mulia, dan bahagia di dunia serta akhirat."

⭐ HUKUM BERIMAN KEPADA KITAB:
WAJIB (Fardu Ain). Ia merupakan Rukun Iman yang KETIGA.`,
      },
      {
        id: "h2-b2",
        blockNumber: 2,
        blockName: "Nota 2: 4 Kitab Utama & Nabi Penerima",
        googleSitesTool: "Blok Kandungan: 4 Kolum (Kad 4 Kitab Suci)",
        emoji: "📚",
        content: `4 KITAB UTAMA DAN NABI PENERIMANYA:

1. KITAB TAURAT (التوراة)
• Nabi Penerima: Nabi Musa a.s.
• Bahasa Asal: Bahasa Ibrani
• Kaum Sasaran: Kaum Bani Israil
• Pengajaran: Mengajak mentauhidkan Allah SWT dan syariat hukum membebaskan kaumnya daripada kezaliman Firaun.

2. KITAB ZABUR (الزبور)
• Nabi Penerima: Nabi Daud a.s.
• Bahasa Asal: Bahasa Qibti / Suryani
• Kaum Sasaran: Kaum Bani Israil
• Pengajaran: Mengandungi doa, zikir puji-pujian kepada Allah, serta nasihat dan hikmah budi pekerti.

3. KITAB INJIL (الإنجيل)
• Nabi Penerima: Nabi Isa a.s.
• Bahasa Asal: Bahasa Suryani
• Kaum Sasaran: Kaum Bani Israil
• Pengajaran: Menyeru kasih sayang, memurnikan tauhid, dan memberi khabar gembira tentang kedatangan Nabi Akhir Zaman (Nabi Muhammad SAW).

4. KITAB AL-QURAN (القرآن)
• Nabi Penerima: Nabi Muhammad SAW (Penutup Segala Nabi)
• Bahasa Asal: Bahasa Arab
• Kaum Sasaran: Seluruh umat manusia hingga akhir zaman
• Keistimewaan: Kitab penutup dan penyempurna seluruh kitab terdahulu, terpelihara keasliannya hingga kiamat, serta diganjari 10 pahala bagi setiap huruf yang dibaca!`,
      },
      {
        id: "h2-b3",
        blockNumber: 3,
        blockName: "Aktiviti Santai: Susun Perkataan Definisi",
        googleSitesTool: "Sisipkan > Kotak Teks / Benamkan Kuiz (Embed)",
        emoji: "🧩",
        content: `AKTIVITI SANTAI A: SUSUN SEMULA DEFINISI KITAB
Arahan untuk murid:
Susun kepingan perkataan berikut menjadi pengertian kitab yang betul:

[ Kalam Allah SWT ] + [ yang diwahyukan ] + [ kepada para rasul ] + [ sebagai petunjuk ] + [ hidup manusia ]

Skema Jawapan:
"Kalam Allah SWT yang diwahyukan kepada para rasul sebagai petunjuk hidup manusia."`,
      },
      {
        id: "h2-b4",
        blockNumber: 4,
        blockName: "Aktiviti Santai: Padanan Kilat Kitab & Nabi",
        googleSitesTool: "Sisipkan > Kotak Teks / Pautan Wordwall",
        emoji: "⚡",
        content: `AKTIVITI SANTAI B: PADANAN KILAT KITAB & NABI PENERIMA
Arahan: Padankan nama Kitab di sebelah kiri dengan Nabi Penerima yang betul di sebelah kanan:

1. Kitab Taurat  ---> Nabi Musa a.s.
2. Kitab Zabur   ---> Nabi Daud a.s.
3. Kitab Injil   ---> Nabi Isa a.s.
4. Kitab Al-Quran ---> Nabi Muhammad SAW`,
      },
    ],
    rawCopyText: `===========================================================
HALAMAN 2: PENGERTIAN KITAB & NAMA KITAB UTAMA
CADANGAN TATA LETAK GOOGLE SITES: 2 Kotak Perbandingan + 4 Kotak Imej & Teks (4-Column Layout)
===========================================================

[BLOK 1: NOTA 1 - APAKAH MAKSUD KITAB?]
Tahukah anda apa itu kitab? Mari kita fahami dengan mudah:

1. Bahasa:
Bermaksud "tulisan" atau "buku catatan".

2. Istilah Syarak (Agama Islam):
Kalam Allah SWT (perkataan Allah) yang suci, yang diwahyukan kepada para nabi dan rasul-Nya, mengandungi hukum-hakam, ajaran kebenaran, dan panduan hidup bagi seluruh umat manusia.

Analogi Mudah Untuk Murid:
"Bayangkan jika anda membeli sebuah robot mainan yang canggih, pasti ada buku manual panduan, bukan? Begitulah kitab suci! Kitab suci Allah adalah 'Buku Panduan Hidup Terbaik' yang diturunkan oleh Allah SWT agar manusia hidup bahagia, selamat, dan berakhlak mulia di dunia dan akhirat."

Hukum Beriman Kepada Kitab:
WAJIB. Ia merupakan Rukun Iman yang KETIGA. Sesiapa yang mengingkari kitab Allah boleh membatalkan imannya.

[BLOK 2: NOTA 2 - 4 KITAB UTAMA DAN NABI PENERIMANYA]
Allah SWT telah menurunkan banyak suhuf dan kitab, namun terdapat EMPAT (4) KITAB UTAMA yang WAJIB diketahui oleh setiap muslim:

1. KITAB TAURAT (التوراة)
- Nabi Penerima: Nabi Musa a.s.
- Bahasa Asal: Bahasa Ibrani.
- Umat Sasaran: Kaum Bani Israil.
- Pengajaran Utama: Mengajak mentauhidkan Allah SWT dan syariat hukum yang tegas bagi memimpin kaumnya keluar daripada kezaliman Firaun.

2. KITAB ZABUR (الزبور)
- Nabi Penerima: Nabi Daud a.s.
- Bahasa Asal: Bahasa Qibti / Suryani.
- Umat Sasaran: Kaum Bani Israil.
- Pengajaran Utama: Mengandungi doa, zikir, munajat, puji-pujian kepada Allah, serta nasihat dan hikmah budi pekerti.

3. KITAB INJIL (الإنجيل)
- Nabi Penerima: Nabi Isa a.s.
- Bahasa Asal: Bahasa Suryani.
- Umat Sasaran: Kaum Bani Israil.
- Pengajaran Utama: Membenarkan Kitab Taurat, menyeru kasih sayang, memurnikan tauhid, dan memberi khabar gembira tentang kedatangan Nabi Akhir Zaman (Nabi Muhammad SAW).

4. KITAB AL-QURAN (القرآن)
- Nabi Penerima: Nabi Muhammad SAW (Penutup Segala Nabi).
- Bahasa Asal: Bahasa Arab yang sangat indah dan mendalam.
- Umat Sasaran: Seluruh umat manusia hingga akhir zaman.
- Keistimewaan Istimewa: 
  * Kitab penutup dan penyempurna bagi segala kitab terdahulu.
  * Terpelihara keasliannya oleh Allah SWT sehingga Hari Kiamat.
  * Membacanya merupakan ibadah yang diganjari 10 pahala bagi setiap huruf!

[BLOK 3: AKTIVITI SANTAI & INTERAKTIF (UJI KEFAHAMAN)]
Aktiviti A: "Susun Semula Definisi Kitab"
Susun perkataan berikut menjadi pengertian kitab yang betul:
[ Kalam Allah SWT ] + [ yang diwahyukan ] + [ kepada para rasul ] + [ sebagai petunjuk ] + [ hidup manusia ]

Aktiviti B: "Padanan Kilat Kitab & Nabi Penerima"
1. Kitab Taurat  ---> Nabi Musa a.s.
2. Kitab Zabur   ---> Nabi Daud a.s.
3. Kitab Injil   ---> Nabi Isa a.s.
4. Kitab Al-Quran ---> Nabi Muhammad SAW`,
  },

  {
    id: "halaman-3",
    pageNumber: 3,
    title: "Dalil Naqli Kewajipan Beriman Kepada Kitab",
    shortTitle: "3. Dalil Naqli",
    badge: "Kewajipan Berdasarkan Al-Quran",
    metaDescription: "Pelajari bacaan dalil naqli dari Surah An-Nisa' ayat 136, fahami maksud potongan ayat, dan mainkan kuiz susun ayat.",
    teacherGuide: {
      googleSiteLayout: "Pengepala Fokus + Kotak Teks Teks Arab Berbingkai (Callout Box) + Terjemahan Baris Demi Baris + Kotak Aktiviti Drag-and-Drop",
      suggestedWidgets: ["Klip Audio Bacaan Ayat (Google Drive Audio Embed / Soundcloud)", "Callout Box Warna Hijau Zamrud untuk Teks Arab", "Kuiz Susun Maksud Ayat"],
      visualIdeas: "Mushaf terbuka dengan cahaya keemasan terpancar, bingkai ukiran arabeska Islam.",
      estimatedTime: "15 Minit",
    },
    sections: [
      {
        id: "h3-b1",
        blockNumber: 1,
        blockName: "Pengenalan Dalil Naqli",
        googleSitesTool: "Sisipkan > Kotak Teks (Callout Box Warna Hijau)",
        emoji: "💡",
        content: `APAKAH ITU DALIL NAQLI?
Dalil Naqli ialah bukti dan perintah kukuh yang bersumberkan wahyu suci daripada Al-Quran dan Hadis Rasulullah SAW. Ia membuktikan secara mutlak bahawa beriman kepada kitab Allah adalah WAJIB.`,
      },
      {
        id: "h3-b2",
        blockNumber: 2,
        blockName: "Teks Arab & Sebutan Rumi (Surah An-Nisa': 136)",
        googleSitesTool: "Sisipkan > Kotak Teks (Font Besar / Tengah / Khat Arab)",
        emoji: "📜",
        content: `BACAAN DALIL NAQLI (SURAH AN-NISA': AYAT 136)

بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ

يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ ءَامِنُوا۟ بِٱللَّهِ وَرَسُولِهِۦ وَٱلْكِتَـٰبِ ٱلَّذِى نَزَّلَ عَلَىٰ رَسُولِهِۦ وَٱلْكِتَـٰبِ ٱلَّذِىٓ أَنzَلَ مِن قَبْلُ

(Surah An-Nisa': 136 - sebahagian ayat)

PANDUAN SEBUTAN RUMI (TRANSLITERASI):
"Yaa ayyuhal-laziina aamanuuu, aaminuu billaahi wa Rasoolihee, wal-Kitaabil-lazii nazzala 'alaa Rasoolihee, wal-Kitaabil-laziii anzala min qabl..."`,
      },
      {
        id: "h3-b3",
        blockNumber: 3,
        blockName: "Terjemahan Maksud & Tadabbur Kalimah",
        googleSitesTool: "Blok Kandungan: Kotak Terjemahan + Grid 2 Kolum Maksud Kalimah",
        emoji: "✨",
        content: `TERJEMAHAN MAKSUD AYAT:
"Wahai orang-orang yang beriman! Tetapkanlah iman kamu kepada Allah dan Rasul-Nya, dan kepada Kitab (Al-Quran) yang diturunkan kepada Rasul-Nya, serta Kitab-kitab yang diturunkan sebelumnya."

PECAHAN KALIMAH KUNCI (MARI TADABBUR):
1. "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟" = Panggilan mesra Allah kepada kita, orang-orang yang beriman.
2. "وَٱلْكِتَـٰبِ ٱلَّذِى نَزَّلَ عَلَىٰ رَسُولِهِۦ" = Merujuk kepada Al-Quran yang diturunkan kepada Nabi Muhammad SAW.
3. "وَٱلْكِتَـٰبِ ٱلَّذِىٓ أَنzَلَ مِن قَبْلُ" = Merujuk kepada kitab-kitab suci terdahulu (Taurat, Zabur, dan Injil).`,
      },
      {
        id: "h3-b4",
        blockNumber: 4,
        blockName: "Aktiviti Santai: Susun Potongan Maksud Ayat",
        googleSitesTool: "Sisipkan > Kotak Teks / Teka-teki Susun Ayat",
        emoji: "🧩",
        content: `AKTIVITI SANTAI: TEKA-TEKI SUSUN POTONGAN MAKSUD AYAT
Arahan: Susun 4 bahagian maksud Surah An-Nisa' ayat 136 mengikut urutan yang betul daripada nombor 1 hingga 4:

[ ] dan kepada Kitab yang diturunkan kepada Rasul-Nya,
[ ] Wahai orang-orang yang beriman!
[ ] serta Kitab-kitab yang diturunkan sebelumnya.
[ ] Tetapkanlah iman kamu kepada Allah dan Rasul-Nya,

Susunan Jawapan Yang Betul:
1. Wahai orang-orang yang beriman!
2. Tetapkanlah iman kamu kepada Allah dan Rasul-Nya,
3. dan kepada Kitab yang diturunkan kepada Rasul-Nya,
4. serta Kitab-kitab yang diturunkan sebelumnya.`,
      },
    ],
    rawCopyText: `===========================================================
HALAMAN 3: DALIL NAQLI KEWAJIPAN BERIMAN KEPADA KITAB
CADANGAN TATA LETAK GOOGLE SITES: Kotak Panggilan Khusus (Callout) + Pecahan Kalimah & Maksud
===========================================================

[BLOK 1: APA ITU DALIL NAQLI?]
Pendidik Cilik Bertanya: "Apakah maksud Dalil Naqli?"
Jawapan: Dalil Naqli ialah bukti dan perintah yang bersumberkan wahyu suci daripada Al-Quran dan Hadis Rasulullah SAW.

[BLOK 2: TEKS BACAAN DALIL NAQLI (SURAH AN-NISA': AYAT 136)]
Firman Allah SWT:

بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ

يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ ءَامِنُوا۟ بِٱللَّهِ وَرَسُولِهِۦ وَٱلْكِتَـٰبِ ٱلَّذِى نَزَّلَ عَلَىٰ رَسُولِهِۦ وَٱلْكِتَـٰبِ ٱلَّذِىٓ أَنزَلَ مِن قَبْلُ

(Surah An-Nisa': Ayat 136 - sebahagian ayat)

Transliterasi Sebutan Rumi (Membantu Murid Membaca Lancar):
"Yaa ayyuhal-laziina aamanuuu, aaminuu billaahi wa Rasoolihee, wal-Kitaabil-lazii nazzala 'alaa Rasoolihee, wal-Kitaabil-laziii anzala min qabl..."

[BLOK 3: TERJEMAHAN & PENGHAYATAN MAKSUD AYAT]
Maksudnya:
"Wahai orang-orang yang beriman! Tetapkanlah iman kamu kepada Allah dan Rasul-Nya, dan kepada Kitab (Al-Quran) yang diturunkan kepada Rasul-Nya, serta Kitab-kitab yang diturunkan sebelumnya."

Pecahan Kata Kunci Untuk Murid Tahun 3:
1. "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟" = Panggilan mesra daripada Allah kepada kita, orang-orang yang beriman.
2. "وَٱلْكِتَـٰبِ ٱلَّذِى نَزَّلَ عَلَىٰ رَسُولِهِۦ" = Merujuk kepada Al-Quran yang diturunkan kepada Nabi Muhammad SAW.
3. "وَٱلْكِتَـٰبِ ٱلَّذِىٓ أَنزَلَ مِن قَبْلُ" = Merujuk kepada kitab-kitab suci terdahulu (Taurat, Zabur, dan Injil).

Kesimpulan Hukum:
Ayat ini membuktikan secara terang dan jelas bahawa beriman kepada kitab-kitab Allah merupakan suatu PERINTAH DAN KEWAJIPAN ke atas setiap mukmin.

[BLOK 4: AKTIVITI SANTAI & UJI MINDA]
Aktiviti: "Teka-teki Susun Potongan Maksud Ayat"
Susun 4 bahagian maksud Surah An-Nisa' ayat 136 mengikut urutan yang betul:
Bahagian 1: "Wahai orang-orang yang beriman!"
Bahagian 2: "Tetapkanlah iman kamu kepada Allah dan Rasul-Nya,"
Bahagian 3: "dan kepada Kitab yang diturunkan kepada Rasul-Nya,"
Bahagian 4: "serta Kitab-kitab yang diturunkan sebelumnya."`,
  },

  {
    id: "halaman-4",
    pageNumber: 4,
    title: "Kepentingan Beriman Kepada Kitab Dalam Kehidupan",
    shortTitle: "4. Kepentingan Beriman",
    badge: "Aplikasi Kehidupan Seharian",
    metaDescription: "4 kepentingan beriman kepada kitab dalam memandu kehidupan seharian murid Tahun 3 berakhlak mulia.",
    teacherGuide: {
      googleSiteLayout: "Grid 4 Kad Berwarna (Kepentingan) + Senario Kes Harian Murid + Kuiz Pilihan Jawapan",
      suggestedWidgets: ["Kad Grid dengan Ikon Menarik", "Google Form Interaktif atau Kuiz Situasi", "Checklist Harian"],
      visualIdeas: "Kanak-kanak berakhlak mulia: bersedekah, membantu rakan, membaca Quran di atas sejadah, bercakap sopan dengan guru.",
      estimatedTime: "20 Minit",
    },
    sections: [
      {
        id: "h4-b1",
        blockNumber: 1,
        blockName: "Nota: 4 Kepentingan Beriman Kepada Kitab",
        googleSitesTool: "Blok Kandungan: 4 Kolum Kad (4 Content Blocks)",
        emoji: "⭐",
        content: `4 KEPENTINGAN BERIMAN KEPADA KITAB ALLAH DALAM KEHIDUPAN:

1. 🧭 MENJADI PEDOMAN & PANDUAN HIDUP YANG BENAR
Membimbing kita membezakan antara kebaikan (halal) dan keburukan (haram) agar tidak tersesat.
• Contoh: Tahu bahawa menipu dan mencuri itu berdosa, manakala bersikap jujur itu berpahala.

2. 💖 MEMBENTUK AKHLAK MULIA & ADAB TERPUJI
Mendidik tutur kata sentiasa bersopan dan beradab sopan kepada ibu bapa, guru, serta rakan.
• Contoh: Mengucapkan salam apabila bersua dan suka menolong orang lain.

3. 🌿 MEMPEROLEH KETENANGAN JIWA & HATI TENTERAM
Membaca kalam Allah menghilangkan perasaan cemas, takut, sedih, dan resah gelisah.
• Contoh: Mengaji Al-Quran atau berdoa apabila berasa gementar menghadapi peperiksaan.

4. 🎁 MENDAPAT PAHALA & KEREDHAAN ALLAH DI AKHIRAT
Setiap huruf kitab suci yang dibaca dan diamalkan mengalirkan pahala yang berlipat ganda.
• Contoh: Membaca satu huruf Al-Quran diberi 10 kebaikan dan menjadi syafaat di Padang Mahsyar.`,
      },
      {
        id: "h4-b2",
        blockNumber: 2,
        blockName: "Aktiviti Santai: Cabaran Kuiz Situasi Harian",
        googleSitesTool: "Sisipkan > Kotak Teks / Google Form Kuiz Situasi",
        emoji: "🎯",
        content: `AKTIVITI SANTAI: CABARAN KUIZ SITUASI HARIAN
Uji tindakanmu berpandukan ajaran Kitab Allah:

SITUASI 1: Duit Tercicir di Kantin
Ahmad menjumpai wang kertas RM10 di atas lantai kantin sekolah waktu rehat. Tindakan beriman yang patut Ahmad lakukan ialah:
[A] Masukkan dalam saku sendiri untuk beli aiskrim.
[B] Serahkan kepada guru bertugas agar dapat dipulangkan kepada pemiliknya. (JAWAPAN TEPAT ✅)

SITUASI 2: Rasa Cemas Sebelum Ujian
Hani berasa sangat gementar sebelum kertas ujian diedarkan. Panduan Al-Quran ialah:
[A] Berzikir, membaca surah pendek, dan bertawakal kepada Allah. (JAWAPAN TEPAT ✅)
[B] Menangis dan berputus asa tidak mahu menjawab soalan.

SITUASI 3: Rakan Tertinggal Pensel
Semasa sesi lukisan, rakan di sebelah tertinggal pensel warnanya. Akhlak Al-Quran mengajar kita untuk:
[A] Meminjamkan pensel kepadanya dengan ikhlas dan senyuman. (JAWAPAN TEPAT ✅)
[B] Mentertawakannya kerana tidak bersedia.`,
      },
    ],
    rawCopyText: `===========================================================
HALAMAN 4: KEPENTINGAN BERIMAN KEPADA KITAB
CADANGAN TATA LETAK GOOGLE SITES: 4 Kotak Sorotan (Highlight Cards) + Kuiz Situasi Interaktif
===========================================================

[BLOK 1: NOTA - 4 KEPENTINGAN UTAMA DALAM KEHIDUPAN SEHARIAN]
Mengapakah kita mesti beriman dan mengamalkan ajaran kitab Allah dalam kehidupan?

1. MENJADI PEDOMAN & PANDUAN HIDUP YANG BENAR
- Kitab Allah seperti lampu suluh dalam kegelapan.
- Membimbing kita membezakan perkara yang hak (benar) dan yang batil (salah).
- Contoh Harian: Tahu bahawa menipu dan mencuri itu berdosa, manakala bercakap benar itu amalan terpuji.

2. MEMBENTUK AKHLAK MULIA & ADAB TERPUJI
- Ajaran kitab mendidik tutur kata kita sentiasa sopan dan santun.
- Melatih kita menghormati ibu bapa, guru, dan rakan sebaya.
- Contoh Harian: Memberi salam ketika bersua, tidak mengejek kawan, dan suka menolong orang lain.

3. MEMPEROLEH KETENANGAN JIWA & HATI TENTERAM
- Membaca dan menghayati Al-Quran mengubati hati yang sedih, gelisah, atau takut.
- Jiwa berasa dekat dengan perlindungan dan kasih sayang Allah SWT.
- Contoh Harian: Mengaji Al-Quran apabila rasa cemas menghadapi peperiksaan atau selepas selesai solat.

4. MENDAPAT PAHALA & KEREDHAAN ALLAH DI AKHIRAT
- Setiap ayat yang kita baca dan amalkan menjadi bekalan pahala yang sangat besar.
- Menjadi penyelamat (syafaat) bagi kita di Padang Mahsyar kelak.
- Contoh Harian: Setiap satu huruf Al-Quran yang dibaca diberi 10 kebaikan oleh Allah SWT!

[BLOK 2: AKTIVITI SANTAI - CABARAN SITUASI HARIAN]
Jawab soalan situasi berikut dengan memilih tindakan berpandukan ajaran Kitab Allah:

Situasi 1:
Ahmad menjumpai sekeping wang kertas RM10 di atas lantai kantin sekolah. Apakah tindakan beriman yang patut Ahmad lakukan?
[A] Masukkan ke dalam poket sendiri dan beli aiskrim.
[B] Serahkan kepada guru bertugas agar dapat dipulangkan kepada pemiliknya. (JAWAPAN TEPAT ✅)

Situasi 2:
Aina berasa sangat takut dan gementar sebelum ujian Pendidikan Islam bermula. Apakah panduan Al-Quran untuk menenangkan hati?
[A] Berzikir, membaca surah pendek seperti Al-Fatihah, dan bertawakal kepada Allah. (JAWAPAN TEPAT ✅)
[B] Menangis dan berputus asa tidak mahu menjawab soalan.

Situasi 3:
Rakan anda, Ali, terlupa membawa pensel warna semasa sesi seni. Kitab Allah mengajar kita untuk:
[A] Meminjamkan pensel warna kepadanya dengan ikhlas dan senyuman. (JAWAPAN TEPAT ✅)
[B] Mentertawakannya kerana tidak bersedia.`,
  },

  {
    id: "halaman-5",
    pageNumber: 5,
    title: "Refleksi Diri, Bintang Amalan & Penutup",
    shortTitle: "5. Refleksi & Penutup",
    badge: "Pengukuhan & Ikrar Diri",
    metaDescription: "Sematkan ikrar amalan beriman kepada kitab, lengkapkan refleksi peribadi, dan jana Sijil Kembara Ilmu.",
    teacherGuide: {
      googleSiteLayout: "Kad Ikrar 'Bintang Amalanku' + Borang Refleksi Interaktif (Google Form) + Kotak Penutup Doa",
      suggestedWidgets: ["Google Forms Embed untuk Refleksi Murid", "Butang Jana Sijil Digital / Print", "Doa Belajar Audio/Teks"],
      visualIdeas: "Bintang-bintang keemasan, sijil pencapaian digital, lencana kejayaan anak soleh.",
      estimatedTime: "10 Minit",
    },
    sections: [
      {
        id: "h5-b1",
        blockNumber: 1,
        blockName: "Bintang Amalanku: 3 Ikrar Beriman",
        googleSitesTool: "Blok Kandungan: 3 Kolum Kad Emas (Gold Cards)",
        emoji: "⭐",
        content: `BINTANG AMALANKU (IKRAR HARIAN SAYA):
"Saya murid Tahun 3 yang beriman kepada Kitab Allah berazam untuk:"

⭐ IKRAR 1: CINTA AL-QURAN
Membaca Al-Quran sekurang-kurangnya satu muka surat atau beberapa ayat setiap hari.

⭐ IKRAR 2: ADAB DENGAN MUSHAF
Menghormati kesucian kalam Allah dengan berwuduk dan meletakkan mashaf di tempat yang tinggi dan suci.

⭐ IKRAR 3: AKHLAK BERPANDUKAN KITAB
Mengamalkan akhlak terpuji dalam bercakap benar, bersikap amanah, dan taat kepada ibu bapa serta guru.`,
      },
      {
        id: "h5-b2",
        blockNumber: 2,
        blockName: "Lembaran Refleksi Peribadi Murid",
        googleSitesTool: "Sisipkan > Borang Google (Google Forms Embed) / Kotak Teks",
        emoji: "📝",
        content: `LEMBARAN REFLEKSI PERIBADI MURID:

1. Apakah perkara paling bernilai atau ilmu baharu yang kamu pelajari mengenai kitab Allah hari ini?
   (Ruang jawapan murid: 1 hingga 2 ayat ringkas)

2. Bagaimanakah kamu menunjukkan rasa sayang dan hormat kamu kepada Kitab Suci Al-Quran di rumah?
   (Pilihan/Tulis sendiri: Sentiasa berwuduk sebelum memegang, membaca setiap hari selepas solat, meletakkan di rak tinggi)

3. Pilih tahap kefahaman kamu tentang tajuk ini:
   ⭐⭐⭐ Hebat! Saya sangat faham dan boleh terangkan kepada rakan
   ⭐⭐ Baik! Saya faham isi kandungan utama
   ⭐ Perlu ulangkaji semula bahagian yang kurang jelas`,
      },
      {
        id: "h5-b3",
        blockNumber: 3,
        blockName: "Doa Penutup Majlis Ilmu & Ucapan Tahniah",
        googleSitesTool: "Sisipkan > Kotak Teks (Callout Box Hijau Tua)",
        emoji: "🤲",
        content: `DOA PENUTUP KEMBARA ILMU (DOA KHATAM AL-QURAN):

بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
اللَّهُمَّ ارْحَمْنَا بِالقُرْآنِ ، وَاجْعَلْهُ لَنَا إِمَامًا وَنُورًا وَهُدًى وَرَحْمَةً

Maksudnya:
"Ya Allah, rahmatilah kami dengan Al-Quran. Jadikanlah ia bagi kami sebagai pemimpin, cahaya, petunjuk, dan rahmat. Aamiin ya Rabbal 'Aalamin."

UCAPAN TAHNIAH:
Tahniah anak-anak hebat! Anda telah berjaya menyempurnakan Modul Kembara Wahyu Ilahi (Beriman Kepada Kitab). Semoga ilmu ini menjadi cahaya yang memandu kehidupanmu!`,
      },
    ],
    rawCopyText: `===========================================================
HALAMAN 5: REFLEKSI & PENUTUP
CADANGAN TATA LETAK GOOGLE SITES: Kad Ikrar Bintang + Borang Maklum Balas Refleksi + Doa Penutup
===========================================================

[BLOK 1: RUMUSAN BINTANG AMALANKU (IKRAR HARIAN SAYA)]
"Saya murid Tahun 3 yang beriman kepada Kitab Allah berazam untuk:"
⭐ 1. Membaca Al-Quran sekurang-kurangnya satu muka surat atau beberapa ayat setiap hari.
⭐ 2. Menghormati dan menjaga kesucian mashaf Al-Quran dengan meletakkannya di tempat yang tinggi dan bersih.
⭐ 3. Mengamalkan akhlak Al-Quran dalam bercakap benar, amanah, dan taat kepada ibu bapa serta guru.

[BLOK 2: LEMBARAN REFLEKSI PERIBADI MURID]
Soalan 1:
Apakah perkara paling bernilai atau fakta baharu yang kamu pelajari mengenai kitab Allah hari ini?
(Ruang jawapan murid: Tuliskan 1 hingga 2 ayat ringkas)

Soalan 2:
Bagaimanakah kamu menunjukkan rasa sayang dan hormat kamu kepada Kitab Suci Al-Quran di rumah?
(Pilihan: Sentiasa berwuduk sebelum memegang, membaca setiap hari selepas Maghrib, meletakkan di rak tinggi)

Soalan 3:
Pilih tahap kefahaman kamu tentang tajuk ini:
⭐⭐⭐ (Hebat! Saya sangat faham dan boleh terangkan kepada rakan)
⭐⭐ (Baik! Saya faham isi kandungan utama)
⭐ (Perlu ulangkaji semula bahagian yang kurang jelas)

[BLOK 3: DOA PENUTUP KEMBARA ILMU]
بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
اللَّهُمَّ ارْحَمْنَا بِالقُرْآنِ ، وَاجْعَلْهُ لَنَا إِمَامًا وَنُورًا وَهُدًى وَرَحْمَةً
"Ya Allah, rahmatilah kami dengan Al-Quran. Jadikanlah ia bagi kami sebagai pemimpin, cahaya, petunjuk, dan rahmat. Aamiin ya Rabbal 'Aalamin."

[BLOK 4: UCAPAN TAHNIAH & SIJIL DIGITAL]
Tahniah anak-anak hebat! Anda telah berjaya menamatkan Modul Kembara Wahyu Ilahi (Beriman Kepada Kitab). Semoga ilmu ini menjadi cahaya yang menerangi langkah hidup anda!`,
  },
];

export const DEFINITION_SCRAMBLE_WORDS = [
  { id: "w1", text: "Kalam Allah SWT" },
  { id: "w2", text: "yang diwahyukan" },
  { id: "w3", text: "kepada para rasul" },
  { id: "w4", text: "sebagai petunjuk" },
  { id: "w5", text: "hidup manusia" },
];

export const MATCHING_BOOKS_DATA = [
  {
    id: "taurat",
    bookName: "Kitab Taurat",
    prophet: "Nabi Musa a.s.",
    language: "Bahasa Ibrani",
    color: "emerald",
    highlight: "Diturunkan di Bukit Tursina untuk membimbing kaum Bani Israil mentauhidkan Allah.",
  },
  {
    id: "zabur",
    bookName: "Kitab Zabur",
    prophet: "Nabi Daud a.s.",
    language: "Bahasa Qibti / Suryani",
    color: "teal",
    highlight: "Mengandungi puji-pujian zikir, doa munajat, nasihat, dan hikmah budi pekerti.",
  },
  {
    id: "injil",
    bookName: "Kitab Injil",
    prophet: "Nabi Isa a.s.",
    language: "Bahasa Suryani",
    color: "cyan",
    highlight: "Menyeru kasih sayang, memurnikan tauhid, dan mengkhabarkan kedatangan Nabi Muhammad SAW.",
  },
  {
    id: "quran",
    bookName: "Kitab Al-Quran",
    prophet: "Nabi Muhammad SAW",
    language: "Bahasa Arab",
    color: "amber",
    highlight: "Kitab penutup dan mukjizat agung, terpelihara hingga kiamat untuk seluruh umat manusia.",
  },
];

export const DALIL_SCRAMBLE_PHRASES = [
  { id: "p1", order: 1, text: "Wahai orang-orang yang beriman!" },
  { id: "p2", order: 2, text: "Tetapkanlah iman kamu kepada Allah dan Rasul-Nya," },
  { id: "p3", order: 3, text: "dan kepada Kitab yang diturunkan kepada Rasul-Nya (Al-Quran)," },
  { id: "p4", order: 4, text: "serta Kitab-kitab yang diturunkan sebelumnya." },
];

export const SITUATION_QUIZ_DATA = [
  {
    id: 1,
    title: "Situasi 1: Duit Tercicir di Kantin",
    scenario: "Ahmad menjumpai wang tunai RM10 tercicir berhampiran meja kantin waktu rehat. Bagaimanakah orang yang beriman kepada kitab bertindak?",
    options: [
      { text: "Simpan dalam saku untuk beli mainan idaman petang nanti.", isCorrect: false, feedback: "Kurang tepat. Kitab Allah melarang mengambil hak orang lain." },
      { text: "Serahkan kepada guru bertugas agar diumumkan pemiliknya.", isCorrect: true, feedback: "Tahniah! Kitab Allah mengajarkan sifat amanah dan jujur." },
      { text: "Biarkan sahaja di atas lantai tanpa mempedulikannya.", isCorrect: false, feedback: "Bantu serahkan kepada guru adalah amalan kebajikan yang mulia." },
    ],
  },
  {
    id: 2,
    title: "Situasi 2: Rasa Cemas Sebelum Ujian",
    scenario: "Hani berasa sangat gementar dan takut sebelum kertas peperiksaan diedarkan. Apakah panduan amalan daripada Kitab Allah?",
    options: [
      { text: "Menangis dan enggan menduduki peperiksaan.", isCorrect: false, feedback: "Putus asa bertentangan dengan ajaran kitab suci." },
      { text: "Membaca doa, berselawat, dan yakin kepada pertolongan Allah.", isCorrect: true, feedback: "Tepat sekali! Mengingati kalam Allah menenangkan hati yang resah." },
      { text: "Menyalin nota kecil secara rahsia untuk meniru.", isCorrect: false, feedback: "Salah! Meniru dilarang keras dalam syariat Islam." },
    ],
  },
  {
    id: 3,
    title: "Situasi 3: Rakan Terlupa Membawa Pensel",
    scenario: "Semasa kelas amali Jawi, rakan di sebelah kamu tertinggal pensel dan pemadam. Tindakan manakah yang menzahirkan akhlak Al-Quran?",
    options: [
      { text: "Meminjamkan pensel lebih dengan wajah yang ceria dan mesra.", isCorrect: true, feedback: "Masya-Allah! Al-Quran menyeru tolong-menolong dalam kebaikan." },
      { text: "Memarahinya kerana cuai dan tidak memeriksa beg.", isCorrect: false, feedback: "Kata-kata kasar tidak menepati adab orang beriman." },
      { text: "Meminta bayaran sewa 50 sen jika mahu pinjam.", isCorrect: false, feedback: "Membantu sahabat patut dilakukan dengan ikhlas tanpa upah." },
    ],
  },
  {
    id: 4,
    title: "Situasi 4: Penghormatan Terhadap Mushaf",
    scenario: "Adik kecil kamu yang berumur 3 tahun meletakkan Al-Quran di atas lantai ruang tamu. Apakah tindakan kamu?",
    options: [
      { text: "Membiarkan sahaja kerana adik masih belum faham.", isCorrect: false, feedback: "Kita wajib memelihara kehormatan mushaf Al-Quran daripada terpijak." },
      { text: "Mengambil Al-Quran itu dengan cermat dan meletakkannya di rak yang tinggi serta menasihati adik dengan lembut.", isCorrect: true, feedback: "Hebat! Beradab dengan mushaf adalah bukti keimanan kepada kalam Allah." },
      { text: "Memukul adik dengan kuat.", isCorrect: false, feedback: "Nasihati dengan lemah-lembut seperti ajaran Rasulullah SAW." },
    ],
  },
];
