/* ==========================================================================
   SAVAŞ HUKUK & DANIŞMANLIK BÜROSU — DYNAMIC APPLICATION ENGINE
   Av. Naile Nur SAVAŞ YILDIRIM | Uşak Barosu
   ========================================================================== */

const OFFICE_INFO = {
  name: "Savaş Hukuk & Danışmanlık Bürosu",
  lawyer: "Av. Naile Nur SAVAŞ YILDIRIM",
  bar: "Uşak Barosu",
  phoneDisplay: "0542 587 77 22",
  phoneIntl: "905425877722",
  email: "av.nailesavas@gmail.com",
  instagram: "https://www.instagram.com/usaksavashukukburosu",
  address: "Fevzi Çakmak Mah. 1. Yay Sok. No:1 Kat:5 Daire:52 Ertuğrul Plus İş Merkezi UŞAK/MERKEZ, 64000 Merkez/Uşak"
};

/* --------------------------------------------------------------------------
   1. PRACTICE AREAS DATA
   -------------------------------------------------------------------------- */
const PRACTICE_AREAS = [
  {
    id: "yurtdisi-vatandaslik",
    num: "01",
    category: "yurtdisi",
    title: "Vatandaşlık, Yabancılar ve Yurt Dışı Hukuku",
    shortDesc: "Yurt dışında yaşayan vatandaşlarımızın Türkiye'deki tüm dava, tanıma-tenfiz, vatandaşlık hakları ve malvarlığı işlemlerinin Türkiye'ye gelmeden güvenle yürütülmesi.",
    tags: ["Tanıma ve Tenfiz", "Vatandaşlık Hakları", "Mavi Kart", "Yurt Dışı Borçlanma"],
    court: "Asliye Hukuk / Aile / İdare Mahkemeleri",
    services: [
      "Yabancı ülke mahkemelerince verilen boşanma, velayet ve nafaka kararlarının Türkiye'de Tanıma ve Tenfizi",
      "Vatandaşlık hakları davaları, Türk vatandaşlığının kazanılması, çıkma izni ve Mavi Kart işlemleri",
      "Yurt dışında yaşayan müvekkillerin Uşak ve Türkiye genelindeki taşınmaz, kira, tahliye ve miras davalarının vekaleten takibi",
      "Yurt dışı hizmet borçlanması, emeklilik ve sosyal güvenlik uyuşmazlıkları davaları",
      "Yabancılar için ikamet izni, çalışma izni ve sınır dışı (deport) kararlarına karşı iptal davaları"
    ],
    documents: [
      "T.C. Başkonsolosluğundan veya Noterden düzenlenmiş fotoğraflı Özel Dava Vekaletnamesi",
      "Yabancı mahkeme kararının kesinleşme şerhli aslı ve Apostil tasdiki (Tanıma-Tenfiz için)",
      "Yeminli tercüman tarafından yapılmış ve konsolosluk/noter onaylı Türkçe tercüme",
      "Kimlik / Mavi Kart / Pasaport fotokopisi"
    ],
    processNote: "Yurt dışında ikamet eden müvekkillerimiz, Türkiye'ye seyahat etmek zorunda kalmadan bulundukları ülkedeki T.C. Başkonsolosluğu aracılığıyla vekaletname çıkararak tüm hukuki süreçlerini büromuz güvencesiyle başlatabilirler."
  },
  {
    id: "gayrimenkul-kira",
    num: "02",
    category: "gayrimenkul",
    title: "Gayrimenkul ve Kira Hukuku (Tahliye & Tapu)",
    shortDesc: "Tahliye davaları, kira bedelinin tespiti, tapu iptal ve tescil, ortaklığın giderilmesi (izale-i şuyu) ve taşınmaz uyuşmazlıklarında etkin temsil.",
    tags: ["Tahliye Davaları", "Kira Tespit", "Tapu İptal", "İzale-i Şuyu"],
    court: "Sulh Hukuk / Asliye Hukuk Mahkemeleri (Zorunlu Arabuluculuk Tabi)",
    services: [
      "Tahliye taahhütnamesine, gereksinim (ihtiyaç) sebebine, iki haklı ihtara ve temerrüde dayalı Tahliye Davaları",
      "5 yılı dolduran kira sözleşmelerinde güncel rayice göre Kira Bedelinin Tespiti ve Uyarlama Davaları",
      "Ortaklığın Giderilmesi (İzale-i Şuyu) davaları ile hisseli gayrimenkullerin nakde çevrilmesi veya taksimi",
      "Hukuki ehliyetsizlik, muris muvazaası veya vekaletin kötüye kullanılması nedeniyle Tapu İptal ve Tescil",
      "Kat karşılığı inşaat sözleşmeleri, müdahalenin men'i ve ecrimisil (haksız işgal tazminatı) davaları"
    ],
    documents: [
      "Yazılı kira sözleşmesi ve varsa yazılı tahliye taahhütnamesi aslı",
      "Kira ödemelerine ilişkin banka dekontları ve keşide edilen noter ihtarnameleri",
      "Tapu senedi örneği, güncel çap ve imar durumu kayıtları",
      "Zorunlu arabuluculuk son tutanağı (Büromuzca yürütülmektedir)"
    ],
    processNote: "Kira, tahliye ve ortaklığın giderilmesi uyuşmazlıklarında dava açmadan önce zorunlu arabulucuya başvuru şartı vardır. Büromuz arabuluculuk aşamasından tahliye infazına kadar tüm süreci yönetir."
  },
  {
    id: "aile-bosanma",
    num: "03",
    category: "bireysel",
    title: "Aile ve Boşanma Hukuku",
    shortDesc: "Anlaşmalı ve çekişmeli boşanma davaları, velayet, nafaka, maddi-manevi tazminat ile mal rejiminin tasfiyesi süreçlerinde gizlilik ve hak odaklı vekillik.",
    tags: ["Anlaşmalı Boşanma", "Çekişmeli Boşanma", "Velayet & Nafaka", "Mal Paylaşımı"],
    court: "Aile Mahkemesi",
    services: [
      "Anlaşmalı boşanma protokolünün müvekkil menfaatlerini tam koruyacak şekilde hazırlanması",
      "Şiddetli geçimsizlik ve özel boşanma sebeplerine dayalı Çekişmeli Boşanma Davaları",
      "Müşterek çocukların üstün yararı doğrultusunda Velayet tesisi, değiştirilmesi ve kişisel ilişki",
      "Tedbir, iştirak ve yoksulluk nafakası talepleri ile Nafaka Artırım / Kaldırma davaları",
      "Edinilmiş mallara katılma rejimi kapsamında Mal Paylaşımı ve Ziynet (Düğün Takıları) davaları"
    ],
    documents: [
      "Özel boşanma vekaletnamesi (2 adet vesikalık fotoğraf ile noterden/konsolosluktan)",
      "Evlilik cüzdanı ve nüfus kayıt örneği",
      "İddiaları kanıtlayıcı deliller (mesaj kayıtları, banka kayıtları, raporlar, tanık listesi)",
      "Mal rejimi davaları için tapu, araç ve banka dökümleri"
    ],
    processNote: "Aile hukuku süreçlerinde özel hayatın gizliliği temel ilkemizdir. Hem müzakere aşamasında hem de çekişmeli yargılamada delil stratejisi ilk günden titizlikle kurgulanır."
  },
  {
    id: "is-sosyal-guvenlik",
    num: "04",
    category: "kurumsal",
    title: "İş, Sosyal Güvenlik ve Engellilik Hakları",
    shortDesc: "Engellilik yardımı ve maluliyet davaları, kıdem-ihbar tazminatları, işe iade, iş kazası tazminatları ve SGK uyuşmazlıklarında uzman hukuki destek.",
    tags: ["Engellilik Yardımı", "Kıdem & İhbar", "İşe İade", "İş Kazası"],
    court: "İş Mahkemesi / İdare Mahkemesi",
    services: [
      "Engellilik yardımı davaları, maluliyet tespiti, engelli hakları, ÖTV muafiyeti ve SGK işlem iptalleri",
      "Kıdem tazminatı, ihbar tazminatı, fazla mesai, yıllık izin ve ödenmeyen ücret alacaklarının tahsili",
      "Haksız feshe karşı İşe İade Davaları ve işe başlatmama tazminatı",
      "İş kazası ve meslek hastalığı kaynaklı maddi-manevi tazminat davaları",
      "Sigortasız çalıştırılan işçiler için Hizmet Tespit Davaları ve işveren önleyici danışmanlık"
    ],
    documents: [
      "SGK hizmet dökümü, işe giriş-çıkış bildirgeleri ve iş sözleşmesi",
      "Maaş bordroları ve banka hesap hareketleri",
      "Engellilik/Maluliyet davaları için Sağlık Kurulu Raporları ve hastane belgeleri",
      "İhtarnameler, fesih bildirimleri ve tanık bilgileri"
    ],
    processNote: "İşçilik alacaklarında arabuluculuk ve hak düşürücü süreler kritiktir. Engellilik yardımı davalarında ise sağlık kurulu raporlarına itiraz süreci teknik uzmanlıkla yürütülür."
  },
  {
    id: "miras-hukuku",
    num: "05",
    category: "gayrimenkul",
    title: "Miras ve Tereke Hukuku",
    shortDesc: "Mirasçılık belgesi, muris muvazaası (mirastan mal kaçırma) nedeniyle tapu iptal, tenkis, vasiyetname düzenlenmesi ve miras paylaşım sözleşmeleri.",
    tags: ["Miras Paylaşımı", "Muris Muvazaası", "Tenkis Davası", "Reddi Miras"],
    court: "Sulh Hukuk / Asliye Hukuk Mahkemeleri",
    services: [
      "Veraset ilamı (mirasçılık belgesi) alınması ve tereke tespiti davaları",
      "Mirastan mal kaçırma kastıyla yapılan devirlere karşı Muris Muvazaası Tapu İptal ve Tescil",
      "Saklı paylı mirasçıların haklarını koruyan Tenkis (İndirim) Davaları",
      "Borca batık miraslarda 3 aylık sürede Mirasın Reddi ve Hükmen Red davaları",
      "Resmi vasiyetname hazırlanması, açılması ve iptali davaları"
    ],
    documents: [
      "Mirasçılık belgesi (Veraset İlamı) ve vukuatlı nüfus kayıt örneği",
      "Mirasbırakana ait tapu kayıtları, resmi senet örnekleri ve banka kayıtları",
      "Varsa vasiyetname veya miras taksim sözleşmesi örneği"
    ],
    processNote: "Özellikle yurt dışında yaşayan mirasçıların Türkiye'deki miras haklarının korunması, tapu devirlerinin incelenmesi ve ortaklığın giderilmesi süreçleri uçtan uca takip edilir."
  },
  {
    id: "ceza-hukuku",
    num: "06",
    category: "bireysel",
    title: "Ceza Hukuku ve Ceza Muhakemesi",
    shortDesc: "Soruşturma aşamasından Ağır Ceza ve Asliye Ceza Mahkemesi kovuşturmalarına, tutukluluğa itiraz, istinaf ve Yargıtay süreçlerine kadar etkin savunma.",
    tags: ["Ağır Ceza & Asliye Ceza", "Soruşturma Müdafiliği", "Tutukluluğa İtiraz", "İstinaf & Temyiz"],
    court: "Cumhuriyet Başsavcılığı / Asliye Ceza / Ağır Ceza",
    services: [
      "Emniyet, Jandarma ve Savcılık ifade/sorgu işlemlerinde 7/24 müdafilik desteği",
      "Tutuklama ve adli kontrol kararlarına karşı Sulh Ceza Hakimliği itirazları",
      "Ağır Ceza ve Asliye Ceza Mahkemelerinde sanık müdafiliği ve müşteki/katılan vekilliği",
      "Bilişim suçları, dolandırıcılık ve malvarlığına karşı suçlarda delil analizi",
      "İstinaf (BAM), Yargıtay (Temyiz) ve Anayasa Mahkemesi bireysel başvuru süreçleri"
    ],
    documents: [
      "Soruşturma veya mahkeme dosya numarası",
      "İfade tutanakları, iddianame veya mevcut mahkeme kararları",
      "Lehine olan kamera kayıtları, dijital materyaller ve tanık bilgileri"
    ],
    processNote: "Ceza yargılamasında soruşturma aşamasında verilen ilk ifade, davanın seyrini belirler. Acil gözaltı ve ifade durumlarında 24 saat ulaşabilirsiniz."
  },
  {
    id: "icra-iflas",
    num: "07",
    category: "kurumsal",
    title: "İcra ve İflas Hukuku (Alacak Tahsili)",
    shortDesc: "Ticari ve bireysel alacakların hızlı tahsili, çek-senet-fatura takipleri, kira tahliyeli icra, itirazın iptali ve menfi tespit davaları.",
    tags: ["Alacak Takibi", "Haciz & Muhafaza", "İtirazın İptali", "Menfi Tespit"],
    court: "İcra Müdürlükleri / İcra Mahkemeleri",
    services: [
      "Fatura, sözleşme ve cari hesap alacaklarına ilişkin İlamsız İcra Takipleri",
      "Çek, bono (senet) ve poliçeye dayalı Kambiyo Takipleri ve İhtiyati Haciz",
      "Ödenmeyen kira alacakları için Tahliye Talepli (Örnek 13) İcra Takibi",
      "Haksız icra takibine karşı borca/imzaya itiraz, Menfi Tespit ve İstirdat davaları",
      "Borçlunun taşınır, taşınmaz ve üçüncü kişilerdeki hak/alacaklarının haczi ve satışı"
    ],
    documents: [
      "Alacağın dayanağı olan senet, çek, fatura, sözleşme veya banka dekontu",
      "Borçlunun bilinen kimlik/vergi numarası ve adres bilgileri"
    ],
    processNote: "Alacak tahsilinde hız ve borçlu malvarlığı araştırması belirleyicidir. Büromuz UYAP entegrasyonu ile takip işlemlerini aynı gün başlatmaktadır."
  },
  {
    id: "tazminat-sigorta",
    num: "08",
    category: "bireysel",
    title: "Tazminat ve Sigorta Hukuku",
    shortDesc: "Trafik kazası araç değer kaybı, bedeni hasar, destekten yoksun kalma, haksız fiil ve sözleşme ihlallerinden doğan maddi-manevi tazminat davaları.",
    tags: ["Araç Değer Kaybı", "Trafik Kazası", "Sigorta Tahkim", "Maddi & Manevi"],
    court: "Asliye Hukuk / Asliye Ticaret / Sigorta Tahkim",
    services: [
      "Trafik kazası sonrası Araç Değer Kaybı, araç mahrumiyet bedeli ve hasar farkı",
      "Yaralanmalı ve ölümlü kazalarda Sürekli İş Göremezlik ve Destekten Yoksun Kalma",
      "Sigorta Tahkim Komisyonu nezdinde hızlı tazminat tahsili",
      "Kişilik haklarına saldırı ve tıbbi uygulama hatalarından doğan tazminat davaları"
    ],
    documents: [
      "Kaza tespit tutanağı, ekspertiz raporu ve kaza fotoğrafları",
      "Araç ruhsatı, sigorta poliçesi ve onarım faturaları",
      "Yaralanmalı kazalarda hastane evrakları ve heyet raporları"
    ],
    processNote: "Sigorta Tahkim Komisyonu başvuruları sayesinde araç değer kaybı ve trafik kazası tazminatları genel mahkemelere kıyasla çok daha kısa sürede sonuçlandırılabilmektedir."
  },
  {
    id: "ticaret-sirketler",
    num: "09",
    category: "kurumsal",
    title: "Ticaret, Şirketler ve Kurumsal Danışmanlık",
    shortDesc: "Şirketler için önleyici hukuk müşavirliği, ticari sözleşmelerin hazırlanması, ortaklık uyuşmazlıkları ve tüketici hukuku süreçleri.",
    tags: ["Hukuk Müşavirliği", "Ticari Sözleşmeler", "Şirketler Hukuku", "Tüketici Hukuku"],
    court: "Asliye Ticaret / Tüketici Mahkemeleri",
    services: [
      "Şirketlere aylık düzenli önleyici hukuk danışmanlığı ve sözleşme denetimi",
      "Bayilik, tedarik, gizlilik (NDA), hizmet ve eser sözleşmelerinin hazırlanması",
      "Ticari alacak ve tazminat davaları ile haksız rekabet uyuşmazlıkları",
      "Ayıplı mal/hizmetlerden doğan Tüketici Hakem Heyeti ve Mahkemesi davaları"
    ],
    documents: [
      "Şirket imza sirküleri, vergi levhası ve ticaret sicil gazetesi",
      "İncelenecek veya uyuşmazlık konusu sözleşme ve ticari yazışmalar"
    ],
    processNote: "Kurumsal müvekkillerimiz için temel hedefimiz, uyuşmazlık doğmadan önce sözleşmesel güvenceleri kurarak ticari riskleri en aza indirmektir."
  }
];

/* --------------------------------------------------------------------------
   2. TRIAGE WIZARD SCENARIOS
   -------------------------------------------------------------------------- */
const TRIAGE_SCENARIOS = {
  yurtdisi: {
    label: "Yurt Dışı & Vatandaşlık Hukuku",
    summary: "Tanıma-tenfiz, vatandaşlık hakları ve gurbetçi vekilliği",
    subOptions: [
      { id: "tanima", title: "Yurt Dışı Boşanma Kararının Türkiye'de Tanınması", desc: "Yabancı mahkemede boşandım, Türkiye'de nüfusta hala evli görünüyorum." },
      { id: "vatandaslik", title: "Vatandaşlık Hakları & Mavi Kart / İkamet Davası", desc: "Vatandaşlık başvurusu, izin veya idari ret kararına itiraz." },
      { id: "uzaktan_mulk", title: "Türkiye'deki Ev/Arsa, Kira veya Miras İşlemi", desc: "Yurt dışındayım, Uşak/Türkiye'deki mülküm veya mirasım için işlem yapılmalı." }
    ]
  },
  kira_gayrimenkul: {
    label: "Gayrimenkul, Kira & Tahliye",
    summary: "Tahliye davaları, kira bedeli tespiti ve tapu iptal",
    subOptions: [
      { id: "tahliye", title: "Kiracının Tahliyesi (Taahhütname / İhtiyaç / Temerrüt)", desc: "Kiracım kira ödemiyor, tahliye taahhüdü var veya konuta ihtiyacım var." },
      { id: "kira_tespit", title: "Kira Bedelinin Güncellenmesi (Kira Tespit Davası)", desc: "Kira bedeli piyasa rayicinin çok altında kaldı, 5 yıl doldu." },
      { id: "tapu_iptal", title: "Tapu İptal, Tescil ve Haksız Elatmanın Önlenmesi", desc: "Tapuda hatalı veya muvazaalı devir nedeniyle hak kaybı yaşadım." }
    ]
  },
  aile: {
    label: "Aile & Boşanma Hukuku",
    summary: "Anlaşmalı ve çekişmeli boşanma, velayet, nafaka",
    subOptions: [
      { id: "anlasmali", title: "Anlaşmalı Boşanma & Protokol Hazırlığı", desc: "Eşimle tüm şartlarda uzlaşarak hızlıca boşanmak istiyoruz." },
      { id: "cekismeli", title: "Çekişmeli Boşanma, Velayet & Tazminat", desc: "Boşanma, velayet, nafaka veya mal paylaşımında uyuşmazlık var." },
      { id: "nafaka_mal", title: "Nafaka Artırımı veya Mal Paylaşımı / Ziynet", desc: "Mevcut nafakanın güncellenmesi veya evlilik içi malların tasfiyesi." }
    ]
  },
  is_engellilik: {
    label: "İş & Engellilik Yardımı Davaları",
    summary: "Engellilik hakları, maluliyet, kıdem-ihbar ve işe iade",
    subOptions: [
      { id: "engellilik", title: "Engellilik Yardımı, Maluliyet & SGK Hakları Davası", desc: "Engellilik oranı, maluliyet aylığı veya sosyal yardım uyuşmazlığı." },
      { id: "kidem_ihbar", title: "Kıdem, İhbar, Fazla Mesai & İşçilik Alacakları", desc: "İşten çıkarıldım veya haklı nedenle feshettim, tazminatlarım ödenmedi." },
      { id: "ise_iade", title: "Haksız Fesih Nedeniyle İşe İade / İş Kazası", desc: "Geçerli sebep olmadan işten çıkarıldım veya iş kazası geçirdim." }
    ]
  },
  miras: {
    label: "Miras & Ortaklığın Giderilmesi",
    summary: "Veraset, izale-i şuyu, tenkis ve muris muvazaası",
    subOptions: [
      { id: "izale_miras", title: "Ortaklığın Giderilmesi (İzale-i Şuyu) & Paylaşım", desc: "Miras kalan hisseli taşınmazda hissedarlarla paylaşım sağlanamıyor." },
      { id: "muvazaa", title: "Mirastan Mal Kaçırma (Muris Muvazaası) & Tenkis", desc: "Mirasbırakanın sağlığında haksız devir yaptığını düşünüyorum." },
      { id: "reddi_miras", title: "Borca Batık Mirasın Reddi (Reddi Miras)", desc: "Vefat eden yakının borçları nedeniyle 3 aylık sürede miras reddi." }
    ]
  },
  ceza_icra: {
    label: "Ceza, İcra & Tazminat Davaları",
    summary: "Ceza savunması, alacak tahsili ve trafik değer kaybı",
    subOptions: [
      { id: "ceza", title: "Ceza Soruşturması / Mahkemesi Savunma & Şikayet", desc: "İfade, gözaltı, ceza davası savunması veya suç duyurusu." },
      { id: "icra", title: "Senet, Fatura, Kira Alacaklarının İcra ile Tahsili", desc: "Ödenmeyen alacağımın tahsili veya haksız icraya itiraz." },
      { id: "tazminat", title: "Trafik Kazası Araç Değer Kaybı & Bedeni Tazminat", desc: "Trafik kazası sonrası değer kaybı veya yaralanma tazminatı." }
    ]
  }
};

/* --------------------------------------------------------------------------
   3. CONSULATE GUIDE DATA
   -------------------------------------------------------------------------- */
const CONSULATE_DATA = {
  almanya: {
    country: "Almanya (Berlin, Münih, Frankfurt, Köln, Düsseldorf, Stuttgart...)",
    appointmentUrl: "www.konsolosluk.gov.tr",
    steps: [
      "konsolosluk.gov.tr üzerinden en yakın T.C. Başkonsolosluğu Noterlik biriminden randevu alınır.",
      "T.C. Kimlik Kartı (veya Mavi Kart / Pasaport) ve boşanma-tanıma vekaleti için 2 adet vesikalık fotoğraf ile gidilir.",
      "Büromuzun WhatsApp'tan ileteceği avukat bilgileri konsolosluk memuruna verilerek vekaletname düzenlenir.",
      "Tanıma-Tenfiz için Alman mahkemesi kararının kesinleşme şerhli (Rechtskraftvermerk) aslına Landgericht'ten Apostil alınır."
    ]
  },
  fransa: {
    country: "Fransa (Paris, Lyon, Strazburg, Marsilya, Bordeaux, Nantes)",
    appointmentUrl: "www.konsolosluk.gov.tr",
    steps: [
      "Fransa'daki bağlı bulunduğunuz T.C. Başkonsolosluğu Noterlik servisinden online randevu oluşturulur.",
      "Kimlik/Mavi Kart, pasaport ve özel yetki gerektiren davalar için 2 adet fotoğraf ibraz edilir.",
      "Fransız mahkeme kararlarının tanınması için kesinleşmiş karara Cour d'Appel'den Apostille şerhi alınır ve tercümesi tasdik edilir."
    ]
  },
  hollanda: {
    country: "Hollanda (Amsterdam, Rotterdam, Deventer)",
    appointmentUrl: "www.konsolosluk.gov.tr",
    steps: [
      "Rotterdam, Amsterdam veya Deventer T.C. Başkonsolosluğundan noterlik randevusu alınır.",
      "Büromuzca tarafınıza iletilen avukat sicil bilgileri ve özel yetki metniyle aynı gün vekaletname çıkartılır.",
      "Vekaletname UYAP sistemine kaydedilerek Türkiye'ye gelmenize gerek kalmadan işlemler başlatılır."
    ]
  },
  avusturya: {
    country: "Avusturya & İsviçre (Viyana, Salzburg, Bregenz / Zürih, Bern)",
    appointmentUrl: "www.konsolosluk.gov.tr",
    steps: [
      "İlgili T.C. Başkonsolosluğu noterlik biriminden kimlik/Mavi Kart ve fotoğrafla özel dava vekaletnamesi düzenlenir.",
      "Uşak ve tüm Türkiye'deki tapu, kira tahliye, miras ve aile mahkemesi süreçleriniz vekaleten yürütülür.",
      "Tüm duruşma tutanakları ve dosya gelişmeleri düzenli olarak WhatsApp ve görüntülü görüşme ile raporlanır."
    ]
  },
  belcika: {
    country: "Belçika, İngiltere & Diğer Ülkeler (Brüksel, Anvers / Londra...)",
    appointmentUrl: "www.konsolosluk.gov.tr",
    steps: [
      "En hızlı ve tercüme masrafsız yöntem, doğrudan T.C. Başkonsolosluğu Noterlik servisinde Türkçe vekaletname düzenlenmesidir.",
      "Yabancı noterlerden düzenlenen vekaletnameler ise Apostil şerhi ve yeminli Türkçe tercüme ile geçerli olur.",
      "Vekaletname bilgileri için 0542 587 77 22 WhatsApp hattımızdan 7/24 bilgi alabilirsiniz."
    ]
  }
};

/* --------------------------------------------------------------------------
   4. ARTICLES, REVIEWS & FAQ DATA
   -------------------------------------------------------------------------- */
const ARTICLES = [
  {
    id: "gurbetci-kira-tahliye-tanima",
    category: "Yurt Dışı & Gurbetçi Hukuku",
    readTime: "4 dk okuma",
    title: "Yurt Dışında Yaşayan Vatandaşların Türkiye'deki Kira, Tahliye ve Tanıma-Tenfiz Davaları",
    excerpt: "Türkiye'ye gelmeden konsolosluk vekaletnamesi ile taşınmaz tahliyesi, miras paylaşımı ve yabancı boşanma kararlarının tanınması rehberi.",
    content: `
      <h4 style="margin-bottom:0.5rem;">1. Türkiye'ye Gelmeden Dava Açmak Mümkün müdür?</h4>
      <p style="margin-bottom:1rem;">Yurt dışında yaşayan vatandaşlarımız, bulundukları ülkedeki <strong>T.C. Başkonsolosluğu Noterlik Servisi</strong> aracılığıyla düzenleyecekleri vekaletname ile Türkiye'ye seyahat etmeden Uşak ve tüm Türkiye'deki kira, tahliye, miras ve boşanma davalarını büromuz aracılığıyla sonuçlandırabilir.</p>
      <h4 style="margin-bottom:0.5rem;">2. Yabancı Boşanma Kararlarının Tanıma ve Tenfizi</h4>
      <p style="margin-bottom:1rem;">Yurt dışında boşanmış olmanız Türkiye'deki nüfus kayıtlarında kendiliğinden boşanmış sayılmanız için yeterli değildir. Kesinleşmiş ve Apostil şerhli kararla açılacak Tanıma-Tenfiz davası sayesinde Türkiye'deki medeni haliniz resmi olarak güncellenir.</p>
      <h4 style="margin-bottom:0.5rem;">3. Yurt Dışındaki Ev Sahiplerinin Tahliye Hakları</h4>
      <p>Türk Borçlar Kanunu m. 350 kapsamında kesin dönüş veya konut ihtiyacı, yazılı tahliye taahhütnamesi ya da kira ödenmemesi nedenleriyle kiracının tahliyesi süreçleri uzaktan şeffaf raporlama ile yürütülmektedir.</p>
    `
  },
  {
    id: "kira-tahliye-ve-tespit-sartlari",
    category: "Gayrimenkul & Kira Hukuku",
    readTime: "5 dk okuma",
    title: "Tahliye Taahhütnamesi Şartları ve 5 Yıl Sonrası Kira Tespit Davaları",
    excerpt: "Kiracının tahliyesinde tahliye taahhütnamesinin geçerliliği, zorunlu arabuluculuk süreci ve emsal kira bedeli tespiti.",
    content: `
      <h4 style="margin-bottom:0.5rem;">1. Yazılı Tahliye Taahhütnamesinin Geçerliliği</h4>
      <p style="margin-bottom:1rem;">TBK m. 352/1 uyarınca taahhütnamenin kira sözleşmesinden ve teslimden sonraki bir tarihte düzenlenmiş olması ve tahliye tarihinden itibaren <strong>1 ay içinde</strong> icra veya dava yoluna başvurulması gerekir.</p>
      <h4 style="margin-bottom:0.5rem;">2. 5 Yılı Dolduran Sözleşmelerde Kira Tespit Davası</h4>
      <p>5 yılı aşan kira ilişkilerinde hakim, TÜFE sınırı ile bağlı kalmaksızın taşınmazın durumu ve bölgedeki emsal kira bedellerini dikkate alarak güncel rayiç kira bedelini belirler.</p>
    `
  },
  {
    id: "engellilik-yardimi-ve-maluliyet-haklari",
    category: "İş & Sosyal Güvenlik Hukuku",
    readTime: "4 dk okuma",
    title: "Engellilik Yardımı Davaları, Maluliyet Tespiti ve Sosyal Güvenlik Hakları",
    excerpt: "Engelli sağlık kurulu raporlarına itiraz, maluliyet aylığı bağlanması ve engellilik yardımı kesintilerine karşı iptal davaları.",
    content: `
      <h4 style="margin-bottom:0.5rem;">1. Engellilik Yardımı ve Maluliyet Uyuşmazlıkları</h4>
      <p style="margin-bottom:1rem;">Engel oranının eksik tespit edilmesi, maluliyet aylığı taleplerinin reddedilmesi veya sosyal yardımların kesilmesi durumlarında İdare ve İş Mahkemeleri nezdinde iptal ve tespit davaları açılabilir.</p>
      <h4 style="margin-bottom:0.5rem;">2. Sağlık Kurulu Raporlarına İtiraz</h4>
      <p>Raporlar arası çelişkilerde Üniversite Hastaneleri ve Adli Tıp Kurumu'ndan alınan yeni raporlarla hak sahipliği ispatlanmaktadır.</p>
    `
  },
  {
    id: "ortakligin-giderilmesi-ve-miras",
    category: "Miras & Gayrimenkul Hukuku",
    readTime: "5 dk okuma",
    title: "Miras Kalan Taşınmazlarda Ortaklığın Giderilmesi (İzale-i Şuyu) ve Mal Kaçırma",
    excerpt: "Mirasçılar arasında paylaşılamayan arsa, tarla ve konutların satışı veya taksimi ile muris muvazaası davaları.",
    content: `
      <h4 style="margin-bottom:0.5rem;">1. Hissedarlar Anlaşamadığında İzale-i Şuyu</h4>
      <p style="margin-bottom:1rem;">Miras kalan taşınmazlarda tek bir hissedar dahi ortaklığı sonlandırmak isterse Sulh Hukuk Mahkemesinde Ortaklığın Giderilmesi davası açarak satış veya taksim talep edebilir.</p>
      <h4 style="margin-bottom:0.5rem;">2. Muris Muvazaası (Mirastan Mal Kaçırma)</h4>
      <p>Mirasbırakanın sağlığında bazı mirasçıları haklarından mahrum bırakmak için bağışladığı taşınmazı satış gibi göstermesi halinde zamanaşımına tabi olmaksızın Tapu İptal ve Tescil davası açılabilir.</p>
    `
  }
];

const REVIEWS = [
  {
    name: "Eda Kirici",
    badge: "Google Yorumu · Yurt Dışı Müvekkil",
    time: "2 ay önce",
    featured: true,
    text: "Yurt dışından güvenilir bir şekilde ulaşabilirsiniz. Tüm işlemlerimizi yurt dışında olmamıza rağmen güvenle sürdürdük. Teşekkürler."
  },
  {
    name: "Mehmet K.",
    badge: "Google Yorumu · Gayrimenkul & Kira Hukuku",
    time: "3 ay önce",
    featured: false,
    text: "Uşak'taki taşınmazımızın kira ve tahliye sürecinde Naile Hanım ilk günden itibaren çok şeffaf ve profesyonel bir yol haritası çizdi. Süreci kısa sürede sonuçlandırdık."
  },
  {
    name: "Ayşe T.",
    badge: "Google Yorumu · Aile Hukuku",
    time: "4 ay önce",
    featured: false,
    text: "Boşanma ve velayet davamızda gösterdiği titizlik, ulaşılabilirlik ve hukuki hakimiyet için Naile Nur Hanım'a minnettarız. Her aşamada detaylı bilgilendirildik."
  },
  {
    name: "Hasan Y.",
    badge: "Google Yorumu · Miras & Tapu Davası",
    time: "5 ay önce",
    featured: false,
    text: "Yıllardır çözülemeyen hisseli miras taşınmazımızla ilgili ortaklığın giderilmesi ve tapu sürecimizi büyük bir özveriyle takip etti. Uşak'ta güvenle başvurabileceğiniz bir hukuk bürosu."
  }
];

const FAQS = [
  {
    q: "Yurt dışında yaşıyorum, Türkiye'ye gelmeden Uşak'taki davamı açabilir miyim?",
    a: "Evet. Bulunduğunuz ülkedeki T.C. Başkonsolosluğu Noterlik birimine giderek büromuz adına düzenleteceğiniz vekaletname ile Türkiye'ye seyahat etmenize gerek kalmaksızın boşanma tanıma-tenfiz, kira tahliye, tapu, miras ve diğer tüm davalarınız başlatılıp sonuçlandırılmaktadır."
  },
  {
    q: "Yabancı mahkemede boşandım, Türkiye'de tekrar işlem yapmam gerekiyor mu?",
    a: "Yabancı ülke mahkemelerinin verdiği boşanma kararları Türkiye'de kendiliğinden nüfusa işlenmez. Kesinleşme şerhi ve Apostil tasdiki ile birlikte Türkiye'de Tanıma ve Tenfiz işleminin yapılması gerekir. Büromuz süreci uzaktan hızla tamamlamaktadır."
  },
  {
    q: "Kiracımı tahliye etmek için hangi hukuki yollar mevcuttur?",
    a: "Geçerli yazılı tahliye taahhütnamesi varsa taahhüt tarihinden itibaren 1 ay içinde; kira ödenmiyorsa tahliye talepli icra takibi (Örnek 13) veya iki haklı ihtar yoluyla; kendinizin veya yakınlarınızın konut/işyeri ihtiyacı varsa ihtiyaç nedeniyle tahliye davası açılabilir."
  },
  {
    q: "Hukuki danışmanlık ve randevu süreci nasıl işliyor?",
    a: "Web sitemizdeki Online Randevu formundan veya 0542 587 77 22 numaralı hattımızdan Uşak Ertuğrul Plus İş Merkezi'ndeki ofisimizde yüz yüze görüşme ya da yurt dışı/şehir dışı müvekkillerimiz için Online Görüntülü Danışmanlık randevusu oluşturabilirsiniz."
  },
  {
    q: "Engellilik yardımı ve maluliyet davalarında nasıl bir yol izleniyor?",
    a: "Sağlık kurulu raporlarındaki oran uyuşmazlıkları, SGK maluliyet red kararları ve sosyal yardım kesintilerine karşı idari başvuru ve dava süreçleri tıbbi-hukuki rapor incelemesiyle titizlikle takip edilmektedir."
  }
];

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initHeaderAndNav();
  renderPracticeAreas("all", "");
  initPracticeFilters();
  renderWizardStep();
  renderConsulateCountry("almanya");
  calculateRent();
  calculateSeverance();
  calculateInheritance();
  renderArticles();
  renderReviews();
  renderFaqs();
  initAppointmentForm();
  initModals();
});

function initHeaderAndNav() {
  const header = document.getElementById("site-header");
  const themeBtn = document.getElementById("theme-toggle-btn");
  const menuTrigger = document.getElementById("mobile-menu-trigger");
  const drawer = document.getElementById("mobile-drawer");

  window.addEventListener("scroll", () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 20);
  });

  if (themeBtn) {
    const moonSvg = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    const sunSvg = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;
    themeBtn.innerHTML = moonSvg;
    themeBtn.addEventListener("click", () => {
      const curr = document.documentElement.getAttribute("data-theme") || "light";
      const next = curr === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      themeBtn.innerHTML = next === "dark" ? sunSvg : moonSvg;
    });
  }

  document.addEventListener("keydown", e => {
    if ((e.key === "Enter" || e.key === " ") && (e.target.classList.contains("practice-card") || e.target.classList.contains("article-card"))) {
      e.preventDefault();
      e.target.click();
    }
  });

  if (menuTrigger && drawer) {
    menuTrigger.addEventListener("click", () => {
      const isOpen = drawer.classList.toggle("open");
      drawer.setAttribute("aria-hidden", String(!isOpen));
    });
    drawer.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        drawer.classList.remove("open");
        drawer.setAttribute("aria-hidden", "true");
      });
    });
  }
}

/* --------------------------------------------------------------------------
   PRACTICE AREAS RENDER & FILTER
   -------------------------------------------------------------------------- */
function renderPracticeAreas(category = "all", query = "") {
  const grid = document.getElementById("practice-grid");
  if (!grid) return;

  const q = query.trim().toLowerCase();
  const list = PRACTICE_AREAS.filter(item => {
    const matchCat = category === "all" || item.category === category;
    const matchQ = !q || item.title.toLowerCase().includes(q) || item.shortDesc.toLowerCase().includes(q) || item.tags.some(t => t.toLowerCase().includes(q));
    return matchCat && matchQ;
  });

  if (list.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:2.5rem; background:var(--bg-surface); border:1px solid var(--line-subtle); border-radius:var(--radius-sm);">
        <p style="color:var(--ink-secondary); margin-bottom:1rem;">Aramanıza uygun uzmanlık alanı bulunamadı.</p>
        <button type="button" class="btn btn-outline" onclick="resetPracticeFilter()">Tüm Alanları Göster</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = list.map(area => `
    <article class="practice-card" onclick="openPracticeModal('${area.id}')" tabindex="0" role="button">
      <div>
        <div class="practice-card-head">
          <div class="practice-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v18M5 7l7-4 7 4M5 7l-3 7h6l-3-7zM19 7l-3 7h6l-3-7zM4 21h16"/></svg>
          </div>
          <span class="practice-index">ALAN ${area.num}</span>
        </div>
        <h3 class="practice-title">${area.title}</h3>
        <p class="practice-desc">${area.shortDesc}</p>
        <div class="practice-chips">
          ${area.tags.map(t => `<span class="practice-chip">${t}</span>`).join("")}
        </div>
      </div>
      <div class="practice-foot">
        <span>Kapsam & Gerekli Belgeler</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </div>
    </article>
  `).join("");
}

function initPracticeFilters() {
  const pills = document.querySelectorAll(".filter-pill");
  const search = document.getElementById("practice-search-input");
  let activeCat = "all";

  pills.forEach(p => {
    p.addEventListener("click", () => {
      pills.forEach(x => x.classList.remove("active"));
      p.classList.add("active");
      activeCat = p.getAttribute("data-category");
      renderPracticeAreas(activeCat, search ? search.value : "");
    });
  });

  if (search) {
    search.addEventListener("input", e => renderPracticeAreas(activeCat, e.target.value));
  }
}

window.resetPracticeFilter = function() {
  const pills = document.querySelectorAll(".filter-pill");
  const search = document.getElementById("practice-search-input");
  pills.forEach(p => p.classList.remove("active"));
  if (pills[0]) pills[0].classList.add("active");
  if (search) search.value = "";
  renderPracticeAreas("all", "");
};

/* --------------------------------------------------------------------------
   UNIFIED HUB TAB SWITCHING
   -------------------------------------------------------------------------- */
window.switchHubTab = function(tabId) {
  document.querySelectorAll(".hub-tab").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-hub") === tabId);
  });
  document.querySelectorAll(".hub-pane").forEach(pane => {
    pane.style.display = pane.id === `hub-pane-${tabId}` ? "block" : "none";
  });
};

/* --------------------------------------------------------------------------
   LEGAL TRIAGE WIZARD
   -------------------------------------------------------------------------- */
let wizardState = {
  step: 1,
  areaKey: null,
  subId: null,
  subTitle: "",
  location: "Uşak Merkez / İlçeleri",
  urgency: "Normal (Ön Danışmanlık & Dava Hazırlığı)"
};

function renderWizardStep() {
  const body = document.getElementById("wizard-body");
  if (!body) return;

  if (wizardState.step === 1) {
    body.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.5rem;">
        <h3 style="font-family:var(--font-display); font-size:1.65rem;">1. Adım: Hukuki Uyuşmazlık Alanınızı Seçin</h3>
        <span style="font-size:0.78rem; font-weight:700; color:var(--gold);">ADIM 1 / 3</span>
      </div>
      <p style="font-size:0.9rem; color:var(--ink-secondary);">Dosyanızın niteliğine göre görevli mahkemeyi, süreç haritasını ve gereken belgeleri anında görün.</p>
      <div class="wizard-options">
        ${Object.entries(TRIAGE_SCENARIOS).map(([key, item]) => `
          <button type="button" class="wizard-opt" onclick="selectWizardArea('${key}')">
            <div class="wizard-opt-title">
              <span>${item.label}</span>
              <span style="color:var(--gold);">→</span>
            </div>
            <span class="wizard-opt-desc">${item.summary}</span>
          </button>
        `).join("")}
      </div>
    `;
  } else if (wizardState.step === 2) {
    const scenario = TRIAGE_SCENARIOS[wizardState.areaKey];
    body.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem; margin-bottom:0.5rem;">
        <h3 style="font-family:var(--font-display); font-size:1.65rem;">2. Adım: Durumunuzu Seçin</h3>
        <button type="button" class="btn btn-outline" style="padding:0.45rem 0.9rem; font-size:0.8rem;" onclick="setWizardStep(1)">← Geri Dön</button>
      </div>
      <p style="font-size:0.88rem; color:var(--ink-secondary);">Seçilen Alan: <strong style="color:var(--gold);">${scenario.label}</strong></p>
      <div class="wizard-options">
        ${scenario.subOptions.map(sub => `
          <button type="button" class="wizard-opt" onclick="selectWizardSub('${sub.id}', '${sub.title.replace(/'/g, "\\'")}')">
            <div class="wizard-opt-title">
              <span>${sub.title}</span>
              <span style="color:var(--gold);">→</span>
            </div>
            <span class="wizard-opt-desc">${sub.desc}</span>
          </button>
        `).join("")}
      </div>
    `;
  } else if (wizardState.step === 3) {
    let matched = PRACTICE_AREAS[0];
    if (wizardState.areaKey === "kira_gayrimenkul") matched = PRACTICE_AREAS[1];
    else if (wizardState.areaKey === "aile") matched = PRACTICE_AREAS[2];
    else if (wizardState.areaKey === "is_engellilik") matched = PRACTICE_AREAS[3];
    else if (wizardState.areaKey === "miras") matched = PRACTICE_AREAS[4];
    else if (wizardState.areaKey === "ceza_icra") {
      if (wizardState.subId === "ceza") matched = PRACTICE_AREAS[5];
      else if (wizardState.subId === "icra") matched = PRACTICE_AREAS[6];
      else matched = PRACTICE_AREAS[7];
    }

    const waText = encodeURIComponent(
      `Merhaba Av. Naile Nur Hanım, web sitenizdeki Dava Sihirbazı üzerinden ulaşıyorum.\n\n` +
      `• Konu: ${wizardState.subTitle}\n` +
      `• Konum: ${wizardState.location}\n` +
      `• Durum: ${wizardState.urgency}`
    );

    body.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem; margin-bottom:1.25rem;">
        <div>
          <span style="font-size:0.74rem; font-weight:700; color:var(--gold); letter-spacing:0.1em;">ÖN DEĞERLENDİRME RAPORU</span>
          <h3 style="font-family:var(--font-display); font-size:1.65rem;">${wizardState.subTitle}</h3>
        </div>
        <button type="button" class="btn btn-outline" style="padding:0.45rem 0.9rem; font-size:0.8rem;" onclick="setWizardStep(1)">Yeni Analiz Başlat</button>
      </div>

      <div class="calc-grid">
        <div>
          <p style="font-size:0.9rem; margin-bottom:0.75rem;"><strong>Görevli Mahkeme:</strong> ${matched.court}</p>
          <p style="font-size:0.9rem; color:var(--ink-secondary); margin-bottom:1.25rem; line-height:1.65;">${matched.processNote}</p>
          <div style="font-size:0.78rem; font-weight:700; color:var(--gold); text-transform:uppercase; margin-bottom:0.5rem;">Hazırlanması Önerilen Belgeler:</div>
          ${matched.documents.map(doc => `
            <div class="checklist-row">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>${doc}</span>
            </div>
          `).join("")}
        </div>

        <div class="calc-result-box">
          <div class="form-group">
            <label class="form-label">İkamet Ettiğiniz Konum</label>
            <select class="form-input" onchange="updateWizardLocation(this.value)">
              <option value="Uşak Merkez / İlçeleri" ${wizardState.location === "Uşak Merkez / İlçeleri" ? "selected" : ""}>Uşak Merkez / İlçeleri</option>
              <option value="Yurt Dışı (Gurbetçi Müvekkil)" ${wizardState.location.startsWith("Yurt") ? "selected" : ""}>Yurt Dışı (Gurbetçi Müvekkil)</option>
              <option value="Türkiye Geneli (Şehir Dışı)" ${wizardState.location.startsWith("Türkiye") ? "selected" : ""}>Türkiye Geneli (Şehir Dışı)</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Süreç Aciliyeti</label>
            <select class="form-input" onchange="updateWizardUrgency(this.value)">
              <option value="Normal (Ön Danışmanlık & Dava Hazırlığı)" ${wizardState.urgency.startsWith("Normal") ? "selected" : ""}>Normal (Ön Danışmanlık)</option>
              <option value="Acil (Tebligat / Süreli İtiraz)" ${wizardState.urgency.startsWith("Acil") ? "selected" : ""}>Acil (Tebligat / Süreli İtiraz)</option>
              <option value="Çok Acil (İfade / İcra / Tedbir)" ${wizardState.urgency.startsWith("Çok") ? "selected" : ""}>Çok Acil (İfade / İcra / Tedbir)</option>
            </select>
          </div>
          <div style="display:flex; flex-direction:column; gap:0.65rem; margin-top:1rem;">
            <a href="https://wa.me/${OFFICE_INFO.phoneIntl}?text=${waText}" target="_blank" rel="noopener" class="btn btn-whatsapp" style="width:100%;">WhatsApp ile İlet</a>
            <button type="button" class="btn btn-primary" style="width:100%;" onclick="transferWizardToAppointment()">Online Randevuya Aktar</button>
          </div>
        </div>
      </div>
    `;
  }
}

window.selectWizardArea = function(key) {
  wizardState.areaKey = key;
  wizardState.step = 2;
  renderWizardStep();
};

window.selectWizardSub = function(subId, subTitle) {
  wizardState.subId = subId;
  wizardState.subTitle = subTitle;
  if (wizardState.areaKey === "yurtdisi") wizardState.location = "Yurt Dışı (Gurbetçi Müvekkil)";
  wizardState.step = 3;
  renderWizardStep();
};

window.setWizardStep = function(step) {
  wizardState.step = step;
  renderWizardStep();
};

window.updateWizardLocation = function(v) {
  wizardState.location = v;
  renderWizardStep();
};

window.updateWizardUrgency = function(v) {
  wizardState.urgency = v;
  renderWizardStep();
};

window.transferWizardToAppointment = function() {
  const notes = document.getElementById("appt-notes");
  if (notes) notes.value = `Konu: ${wizardState.subTitle} | Konum: ${wizardState.location} | Durum: ${wizardState.urgency}`;
  document.getElementById("iletisim-randevu")?.scrollIntoView({ behavior: "smooth" });
};

/* --------------------------------------------------------------------------
   CONSULATE GUIDE
   -------------------------------------------------------------------------- */
window.renderConsulateCountry = function(countryKey) {
  document.querySelectorAll(".country-pill").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-country") === countryKey);
  });

  const data = CONSULATE_DATA[countryKey] || CONSULATE_DATA.almanya;
  const box = document.getElementById("consulate-guide-content");
  if (!box) return;

  box.innerHTML = `
    <h4>${data.country}</h4>
    <p style="font-size:0.84rem; color:var(--ink-on-dark-muted); margin-bottom:1.1rem;">
      Resmi Randevu: <strong style="color:var(--ink-on-dark);">${data.appointmentUrl}</strong>
    </p>
    <div style="display:flex; flex-direction:column; gap:0.65rem; margin-bottom:1.35rem;">
      ${data.steps.map((s, i) => `
        <div style="display:flex; align-items:flex-start; gap:0.65rem; font-size:0.87rem; color:var(--ink-on-dark-muted);">
          <span style="min-width:22px; height:22px; border-radius:50%; background:rgba(204,167,94,0.2); border:1px solid var(--gold-bright); color:var(--gold-light); display:inline-flex; align-items:center; justify-content:center; font-size:0.74rem; font-weight:700; margin-top:2px;">${i + 1}</span>
          <span>${s}</span>
        </div>
      `).join("")}
    </div>
    <a href="https://wa.me/${OFFICE_INFO.phoneIntl}?text=${encodeURIComponent(`Merhaba Av. Naile Nur Hanım, ${data.country.split(' ')[0]} konsolosluk vekaletnamesi bilgilerini rica ediyorum.`)}" target="_blank" rel="noopener" class="btn btn-gold" style="width:100%;">
      Vekaletname Bilgilerini WhatsApp'tan İste
    </a>
  `;
};

/* --------------------------------------------------------------------------
   CALCULATORS
   -------------------------------------------------------------------------- */
function formatTRY(num) {
  return new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 2 }).format(num);
}

window.calculateRent = function() {
  const curr = parseFloat(document.getElementById("rent-current")?.value) || 0;
  const tufe = parseFloat(document.getElementById("rent-tufe")?.value) || 0;
  const yrs = parseInt(document.getElementById("rent-years")?.value) || 1;

  const inc = curr * (tufe / 100);
  const next = curr + inc;

  const outNew = document.getElementById("rent-out-new");
  const outInc = document.getElementById("rent-out-inc");
  const outNote = document.getElementById("rent-out-note");

  if (outNew) outNew.textContent = formatTRY(next);
  if (outInc) outInc.textContent = `+ ${formatTRY(inc)} (%${tufe.toFixed(2)})`;
  if (outNote) {
    if (yrs >= 10) {
      outNote.innerHTML = `<strong>10 Yıllık Uzama Süresi:</strong> TBK m. 347 uyarınca 10 uzama yılı dolduğunda, yeni uzama yılı bitiminden en az 3 ay önce bildirimde bulunarak sebep göstermeksizin tahliye hakkı doğar.`;
    } else if (yrs >= 5) {
      outNote.innerHTML = `<strong>Kira Tespit Davası (5+ Yıl):</strong> 5 yılı dolduran sözleşmelerde TBK m. 344/3 uyarınca TÜFE sınırı olmaksızın bölgedeki emsal rayiçlere göre <strong>Kira Tespit Davası</strong> açılabilir.`;
    } else {
      outNote.innerHTML = `<strong>Yasal TÜFE Tavanı:</strong> 5 yıl altındaki kira sözleşmelerinde yasal artış tavanı 12 aylık ortalama TÜFE oranıdır. Tahliye taahhütnamesi veya ihtiyaç varsa tahliye açılabilir.`;
    }
  }
};

window.calculateSeverance = function() {
  const yrs = parseFloat(document.getElementById("sev-years")?.value) || 0;
  const mos = parseFloat(document.getElementById("sev-months")?.value) || 0;
  const wage = parseFloat(document.getElementById("sev-wage")?.value) || 0;

  const totalYrs = yrs + (mos / 12);
  const grossKidem = totalYrs >= 1 ? totalYrs * wage : 0;
  const netKidem = grossKidem * (1 - 0.00759);

  const totalMos = (yrs * 12) + mos;
  let weeks = 2;
  if (totalMos >= 6 && totalMos < 18) weeks = 4;
  else if (totalMos >= 18 && totalMos < 36) weeks = 6;
  else if (totalMos >= 36) weeks = 8;

  const netIhbar = (wage / 30) * (weeks * 7) * 0.84241;

  const oK = document.getElementById("sev-out-kidem");
  const oW = document.getElementById("sev-out-weeks");
  const oI = document.getElementById("sev-out-ihbar");
  const oT = document.getElementById("sev-out-total");

  if (oK) oK.textContent = formatTRY(netKidem);
  if (oW) oW.textContent = `${weeks} Hafta (${weeks * 7} Gün)`;
  if (oI) oI.textContent = formatTRY(netIhbar);
  if (oT) oT.textContent = formatTRY(netKidem + netIhbar);
};

window.calculateInheritance = function() {
  const spouse = document.getElementById("inh-spouse")?.value === "yes";
  const zumre = document.getElementById("inh-zumre")?.value || "1";
  const count = Math.max(1, parseInt(document.getElementById("inh-count")?.value) || 1);
  const val = parseFloat(document.getElementById("inh-value")?.value) || 0;

  let sShare = 0;
  let rShare = 1;
  let exp = "";

  if (spouse) {
    if (zumre === "1") {
      sShare = 0.25; rShare = 0.75;
      exp = "TMK m. 499/1 uyarınca sağ kalan eş, altsoy (çocuklar/torunlar) ile mirasçı olduğunda 1/4 (%25) pay alır; kalan 3/4 (%75) altsoy arasında eşit bölüşülür.";
    } else if (zumre === "2") {
      sShare = 0.50; rShare = 0.50;
      exp = "TMK m. 499/2 uyarınca altsoy yoksa, sağ kalan eş anne-baba zümresi ile birlikte 1/2 (%50) miras payı alır.";
    } else {
      sShare = 0.75; rShare = 0.25;
      exp = "TMK m. 499/3 uyarınca sağ kalan eş, büyükbaba-büyükanne zümresi ile birlikte 3/4 (%75) miras payı alır.";
    }
  } else {
    sShare = 0; rShare = 1;
    exp = "Sağ kalan eş bulunmadığından terekenin tamamı (%100) ilgili zümredeki yasal mirasçılar arasında eşit paylaştırılır.";
  }

  const perHeir = rShare / count;
  const oS = document.getElementById("inh-out-spouse");
  const oH = document.getElementById("inh-out-heir");
  const oE = document.getElementById("inh-out-exp");

  if (oS) oS.textContent = spouse ? `%${(sShare * 100).toFixed(1)} (${formatTRY(val * sShare)})` : "Yok (%0)";
  if (oH) oH.textContent = `Kişi Başı %${(perHeir * 100).toFixed(2)} (${formatTRY(val * perHeir)})`;
  if (oE) oE.textContent = exp;
};

/* --------------------------------------------------------------------------
   RENDER REVIEWS, ARTICLES & FAQS
   -------------------------------------------------------------------------- */
function renderReviews() {
  const grid = document.getElementById("reviews-grid");
  if (!grid) return;

  grid.innerHTML = REVIEWS.map(rev => `
    <div class="review-card ${rev.featured ? 'highlight' : ''}">
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.65rem;">
          <span style="color:#E3A008; font-size:0.9rem; letter-spacing:1.5px;">★★★★★ <strong style="color:var(--ink-primary); font-size:0.8rem;">5/5</strong></span>
          <span style="font-size:0.75rem; color:var(--ink-muted);">${rev.time}</span>
        </div>
        <p style="font-size:0.92rem; color:var(--ink-secondary); line-height:1.65; font-style:italic;">"${rev.text}"</p>
      </div>
      <div style="display:flex; align-items:center; gap:0.75rem; padding-top:0.85rem; border-top:1px solid var(--line-subtle);">
        <div style="width:36px; height:36px; border-radius:50%; background:var(--gold-soft); color:var(--gold); display:flex; align-items:center; justify-content:center; font-weight:700;">${rev.name.charAt(0)}</div>
        <div>
          <div style="font-weight:700; font-size:0.9rem;">${rev.name}</div>
          <div style="font-size:0.74rem; color:var(--gold); font-weight:600;">${rev.badge}</div>
        </div>
      </div>
    </div>
  `).join("");
}

function renderArticles() {
  const grid = document.getElementById("articles-grid");
  if (!grid) return;

  grid.innerHTML = ARTICLES.map(art => `
    <article class="article-card" onclick="openArticleModal('${art.id}')" tabindex="0" role="button">
      <div>
        <div style="font-size:0.74rem; font-weight:700; color:var(--gold); letter-spacing:0.08em; text-transform:uppercase; margin-bottom:0.6rem;">
          ${art.category} · ${art.readTime}
        </div>
        <h3 style="font-family:var(--font-display); font-size:1.45rem; font-weight:700; line-height:1.25; margin-bottom:0.65rem;">${art.title}</h3>
        <p style="font-size:0.89rem; color:var(--ink-secondary); line-height:1.6; margin-bottom:1.2rem;">${art.excerpt}</p>
      </div>
      <div class="practice-foot">
        <span>Makaleyi Oku</span>
        <span>→</span>
      </div>
    </article>
  `).join("");
}

function renderFaqs() {
  const list = document.getElementById("faq-list");
  if (!list) return;

  list.innerHTML = FAQS.map((item, idx) => `
    <div class="faq-item ${idx === 0 ? 'open' : ''}">
      <button type="button" class="faq-btn" onclick="toggleFaq(this)">
        <span>${item.q}</span>
        <span class="faq-plus">+</span>
      </button>
      <div class="faq-panel" style="${idx === 0 ? 'max-height:260px;' : ''}">
        <div class="faq-panel-inner">${item.a}</div>
      </div>
    </div>
  `).join("");
}

window.toggleFaq = function(btn) {
  const item = btn.closest(".faq-item");
  const panel = item.querySelector(".faq-panel");
  const isOpen = item.classList.contains("open");

  document.querySelectorAll(".faq-item").forEach(el => {
    el.classList.remove("open");
    const p = el.querySelector(".faq-panel");
    if (p) p.style.maxHeight = null;
  });

  if (!isOpen) {
    item.classList.add("open");
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
};

/* --------------------------------------------------------------------------
   APPOINTMENT FORM
   -------------------------------------------------------------------------- */
let selectedApptMode = "Uşak Ofis (Yüz Yüze Görüşme)";

window.selectApptMode = function(el, mode) {
  document.querySelectorAll(".mode-tab").forEach(m => m.classList.remove("active"));
  el.classList.add("active");
  selectedApptMode = mode;
};

function initAppointmentForm() {
  const form = document.getElementById("appointment-form");
  const dateInput = document.getElementById("appt-date");
  if (dateInput) {
    const t = new Date();
    t.setDate(t.getDate() + 1);
    dateInput.value = t.toISOString().split("T")[0];
  }

  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("appt-name")?.value || "";
      const phone = document.getElementById("appt-phone")?.value || "";
      const topic = document.getElementById("appt-topic")?.value || "";
      const date = document.getElementById("appt-date")?.value || "";
      const time = document.getElementById("appt-time")?.value || "";
      const notes = document.getElementById("appt-notes")?.value || "";

      const ref = "SVS-" + Math.floor(1000 + Math.random() * 9000);
      const msg = encodeURIComponent(
        `Merhaba Av. Naile Nur Hanım, randevu talebi oluşturdum.\n\n` +
        `• Referans: ${ref}\n• Ad Soyad: ${name}\n• Telefon: ${phone}\n` +
        `• Görüşme: ${selectedApptMode}\n• Konu: ${topic}\n• Tarih/Saat: ${date} (${time})\n• Özet: ${notes || "-"}`
      );

      const fb = document.getElementById("appt-feedback");
      if (fb) {
        fb.style.display = "block";
        fb.innerHTML = `
          <div style="background:var(--success-bg); border:1px solid var(--success); border-radius:var(--radius-sm); padding:1.15rem; margin-top:1rem;">
            <div style="font-weight:700; margin-bottom:0.3rem;">✓ Randevu Talebiniz Hazırlandı (${ref})</div>
            <p style="font-size:0.84rem; color:var(--ink-secondary); margin-bottom:0.85rem;">Anında onay için WhatsApp veya E-Posta ile iletebilirsiniz:</p>
            <div style="display:flex; gap:0.65rem; flex-wrap:wrap;">
              <a href="https://wa.me/${OFFICE_INFO.phoneIntl}?text=${msg}" target="_blank" rel="noopener" class="btn btn-whatsapp" style="padding:0.6rem 1.1rem; font-size:0.82rem;">WhatsApp ile Gönder</a>
              <a href="mailto:${OFFICE_INFO.email}?subject=${encodeURIComponent('Randevu Talebi ' + ref)}&body=${msg}" class="btn btn-outline" style="padding:0.6rem 1.1rem; font-size:0.82rem;">E-Posta Gönder</a>
            </div>
          </div>
        `;
      }
    });
  }
}

/* --------------------------------------------------------------------------
   MODALS
   -------------------------------------------------------------------------- */
function initModals() {
  const backdrop = document.getElementById("universal-modal");
  if (!backdrop) return;
  backdrop.addEventListener("click", e => {
    if (e.target === backdrop) closeModal();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });
}

window.closeModal = function() {
  document.getElementById("universal-modal")?.classList.remove("open");
};

window.openPracticeModal = function(id) {
  const area = PRACTICE_AREAS.find(a => a.id === id);
  if (!area) return;
  const titleEl = document.getElementById("modal-title");
  const bodyEl = document.getElementById("modal-body");
  if (titleEl) titleEl.textContent = area.title;
  if (bodyEl) {
    const wa = encodeURIComponent(`Merhaba Av. Naile Nur Hanım, "${area.title}" konusunda danışmanlık almak istiyorum.`);
    bodyEl.innerHTML = `
      <div style="font-size:0.76rem; font-weight:700; color:var(--gold); text-transform:uppercase; margin-bottom:0.4rem;">Görevli Merci: ${area.court}</div>
      <p style="font-size:0.94rem; color:var(--ink-secondary); margin-bottom:1.25rem;">${area.shortDesc}</p>
      <h4 style="font-family:var(--font-display); font-size:1.3rem; margin-bottom:0.6rem;">Sunulan Hizmetler</h4>
      <div style="margin-bottom:1.25rem;">
        ${area.services.map(s => `<div class="checklist-row"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="20 6 9 17 4 12"/></svg><span>${s}</span></div>`).join("")}
      </div>
      <h4 style="font-family:var(--font-display); font-size:1.3rem; margin-bottom:0.6rem;">Gerekli Belgeler</h4>
      <div style="margin-bottom:1.25rem;">
        ${area.documents.map(d => `<div class="checklist-row"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg><span>${d}</span></div>`).join("")}
      </div>
      <p style="background:var(--bg-muted); border-left:3px solid var(--gold); padding:0.9rem 1.1rem; font-size:0.88rem; color:var(--ink-secondary); margin-bottom:1.25rem;">${area.processNote}</p>
      <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
        <a href="https://wa.me/${OFFICE_INFO.phoneIntl}?text=${wa}" target="_blank" rel="noopener" class="btn btn-whatsapp">WhatsApp ile Sor</a>
        <a href="#iletisim-randevu" onclick="closeModal()" class="btn btn-primary">Randevu Oluştur</a>
      </div>
    `;
  }
  document.getElementById("universal-modal")?.classList.add("open");
};

window.openArticleModal = function(id) {
  const art = ARTICLES.find(a => a.id === id);
  if (!art) return;
  const titleEl = document.getElementById("modal-title");
  const bodyEl = document.getElementById("modal-body");
  if (titleEl) titleEl.textContent = art.title;
  if (bodyEl) {
    bodyEl.innerHTML = `
      <div style="font-size:0.76rem; font-weight:700; color:var(--gold); text-transform:uppercase; margin-bottom:1rem;">${art.category} · Av. Naile Nur SAVAŞ YILDIRIM · ${art.readTime}</div>
      <div style="font-size:0.94rem; color:var(--ink-secondary); line-height:1.75;">${art.content}</div>
      <div style="margin-top:1.5rem; padding-top:1rem; border-top:1px solid var(--line-subtle); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
        <span style="font-size:0.8rem; color:var(--ink-muted);">Bilgilendirme amaçlıdır.</span>
        <a href="#iletisim-randevu" onclick="closeModal()" class="btn btn-primary">Danışmanlık Al</a>
      </div>
    `;
  }
  document.getElementById("universal-modal")?.classList.add("open");
};

window.openCareerModal = function() {
  const titleEl = document.getElementById("modal-title");
  const bodyEl = document.getElementById("modal-body");
  if (titleEl) titleEl.textContent = "Kariyer & Staj Başvurusu";
  if (bodyEl) {
    bodyEl.innerHTML = `
      <p style="font-size:0.94rem; color:var(--ink-secondary); margin-bottom:1.25rem; line-height:1.7;">
        <strong>Savaş Hukuk & Danışmanlık Bürosu</strong> bünyesinde görevlendirilmek üzere <strong>Asistan</strong> ve <strong>Stajyer Avukat</strong> pozisyonları için başvurular kabul edilmektedir.
      </p>
      <p style="background:var(--bg-muted); border-left:3px solid var(--gold); padding:1rem; font-size:0.9rem; margin-bottom:1.25rem;">
        Başvuruların değerlendirme sürecine alınabilmesi için adayların güncel fotoğraflı özgeçmişlerini <strong>av.nailesavas@gmail.com</strong> adresine iletmeleri rica olunur.
      </p>
      <a href="mailto:${OFFICE_INFO.email}?subject=${encodeURIComponent('İş / Staj Başvurusu - Savaş Hukuk Bürosu')}" class="btn btn-primary">av.nailesavas@gmail.com Adresine CV Gönder</a>
    `;
  }
  document.getElementById("universal-modal")?.classList.add("open");
};
