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
   1. PRACTICE AREAS DATA (UZMANLIK ALANLARI)
   -------------------------------------------------------------------------- */
const PRACTICE_AREAS = [
  {
    id: "yurtdisi-vatandaslik",
    num: "01",
    category: "yurtdisi",
    title: "Vatandaşlık, Yabancılar ve Gurbetçi Hukuku",
    shortDesc: "Yurt dışında yaşayan vatandaşlarımızın Türkiye'deki tüm dava, tanıma-tenfiz, vatandaşlık hakları ve malvarlığı işlemlerinin Türkiye'ye gelmelerine gerek kalmaksızın güvenle yürütülmesi.",
    tags: ["Tanıma ve Tenfiz", "Vatandaşlık Hakları Davası", "Mavi Kart & İkamet", "Yurt Dışı Borçlanma"],
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
    shortDesc: "Tahliye davaları, kira bedelinin tespiti ve uyarlanması, tapu iptal ve tescil, ortaklığın giderilmesi (izale-i şuyu) ve taşınmaz uyuşmazlıklarında etkin hukuki temsil.",
    tags: ["Tahliye Davaları", "Kira Tespit", "Tapu İptal & Tescil", "Ortaklığın Giderilmesi"],
    court: "Sulh Hukuk / Asliye Hukuk Mahkemeleri (Zorunlu Arabuluculuk Tabi)",
    services: [
      "Tahliye taahhütnamesine, gereksinim (ihtiyaç) sebebine, iki haklı ihtara ve temerrüde dayalı Tahliye Davaları",
      "5 yılı dolduran kira sözleşmelerinde güncel rayice göre Kira Bedelinin Tespiti ve Uyarlama Davaları",
      "Ortaklığın Giderilmesi (İzale-i Şuyu) davaları ile hisseli gayrimenkullerin nakde çevrilmesi veya aynen taksimi",
      "Hukuki ehliyetsizlik, muris muvazaası veya vekalet görevinin kötüye kullanılması nedeniyle Tapu İptal ve Tescil",
      "Kat karşılığı inşaat (arsa payı) sözleşmeleri, müdahalenin men'i ve ecrimisil (haksız işgal tazminatı) davaları"
    ],
    documents: [
      "Yazılı kira sözleşmesi ve varsa yazılı tahliye taahhütnamesi aslı",
      "Kira ödemelerine ilişkin banka dekontları ve keşide edilen noter ihtarnameleri",
      "Tapu senedi örneği, güncel çap ve imar durumu kayıtları",
      "Zorunlu arabuluculuk son tutanağı (Büromuzca yürütülmektedir)"
    ],
    processNote: "1 Eylül 2023 tarihi itibarıyla kira, tahliye ve ortaklığın giderilmesi uyuşmazlıklarında dava açmadan önce arabulucuya başvuru zorunludur. Büromuz arabuluculuk aşamasından tahliye infazına kadar süreci titizlikle yönetir."
  },
  {
    id: "aile-bosanma",
    num: "03",
    category: "bireysel",
    title: "Aile ve Boşanma Hukuku",
    shortDesc: "Anlaşmalı ve çekişmeli boşanma davaları, velayet, nafaka, maddi ve manevi tazminat ile mal rejiminin tasfiyesi süreçlerinde gizlilik ve hak odaklı vekillik.",
    tags: ["Anlaşmalı & Çekişmeli Boşanma", "Velayet & Nafaka", "Mal Paylaşımı", "Ziynet Alacağı"],
    court: "Aile Mahkemesi",
    services: [
      "Anlaşmalı boşanma protokolünün müvekkil menfaatlerini tam koruyacak şekilde hazırlanması ve tek celsede sonuçlandırılması",
      "Şiddetli geçimsizlik ve özel boşanma sebeplerine dayalı Çekişmeli Boşanma Davaları",
      "Müşterek çocukların üstün yararı doğrultusunda Velayet tesisi, değiştirilmesi ve kişisel ilişki düzenlenmesi",
      "Tedbir, iştirak ve yoksulluk nafakası talepleri ile ekonomik koşullara göre Nafaka Artırım / Kaldırma davaları",
      "Edinilmiş mallara katılma rejimi kapsamında Katkı Payı ve Katılma Alacağı (Mal Paylaşımı) ile Düğün Takıları (Ziynet) davaları"
    ],
    documents: [
      "Özel boşanma vekaletnamesi (2 adet vesikalık fotoğraf ile noterden/konsolosluktan)",
      "Evlilik cüzdanı ve nüfus kayıt örneği",
      "İddiaları kanıtlayıcı deliller (mesaj kayıtları, banka kayıtları, darp raporu, tanık listesi vb.)",
      "Mal rejimi davaları için tapu, araç tescil ve banka hesap dökümleri"
    ],
    processNote: "Aile hukuku süreçlerinde özel hayatın gizliliği temel ilkemizdir. Hem müzakere aşamasında hem de çekişmeli yargılamada hak kaybı yaşanmaması için delil stratejisi ilk günden titizlikle kurgulanır."
  },
  {
    id: "is-sosyal-guvenlik",
    num: "04",
    category: "kurumsal",
    title: "İş, Sosyal Güvenlik ve Engellilik Hakları Hukuku",
    shortDesc: "Engellilik yardımı ve maluliyet davaları, kıdem-ihbar tazminatları, işe iade, iş kazası tazminatları ve SGK uyuşmazlıklarında uzman hukuki destek.",
    tags: ["Engellilik Yardımı Davaları", "Kıdem & İhbar Tazminatı", "İşe İade", "İş Kazası"],
    court: "İş Mahkemesi / İdare Mahkemesi",
    services: [
      "Engellilik yardımı davaları, maluliyet tespiti, engelli hakları, ÖTV muafiyeti ve sosyal güvenlik kurumu (SGK) işlem iptalleri",
      "Kıdem tazminatı, ihbar tazminatı, fazla mesai, yıllık izin, UBGT ve ödenmeyen maaş alacaklarının tahsili",
      "Haksız feshe karşı İşe İade Davaları ve boşta geçen süre ücreti ile işe başlatmama tazminatı",
      "İş kazası ve meslek hastalığı kaynaklı maddi-manevi tazminat ile sürekli iş göremezlik davaları",
      "Sigortasız çalıştırılan işçiler için Hizmet Tespit Davaları ve işveren önleyici hukuk danışmanlığı"
    ],
    documents: [
      "SGK hizmet dökümü, işe giriş-çıkış bildirgeleri ve iş sözleşmesi",
      "Maaş bordroları ve ücretin ödendiği banka hesap hareketleri",
      "Engellilik/Maluliyet davaları için Sağlık Kurulu Raporları ve hastane epikriz belgeleri",
      "Tanık beyanları, ihtarnameler ve fesih bildirim belgeleri"
    ],
    processNote: "İşçilik alacakları ve işe iade davalarında hak düşürücü süreler ve arabuluculuk başvurusu büyük önem taşır. Engellilik yardımı ve maluliyet dosyalarında ise sağlık kurulu raporlarına itiraz süreci teknik uzmanlıkla takip edilir."
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
      "Veraset ilamı (mirasçılık belgesi) alınması ve terekenin (aktif/pasif malvarlığının) tespiti davaları",
      "Mirasbırakanın mirastan mal kaçırma kastıyla yaptığı devirlere karşı Muris Muvazaası Nedeniyle Tapu İptal ve Tescil",
      "Saklı paylı mirasçıların haklarını ihlal eden tasarruflara karşı Tenkis (İndirim) Davaları",
      "Borca batık miraslarda 3 aylık hak düşürücü sürede Mirasın Reddi (Gerçek Red) ve Hükmen Red davaları",
      "Resmi vasiyetname hazırlanması, vasiyetnamenin açılması ve iptali davaları"
    ],
    documents: [
      "Mirasçılık belgesi (Veraset İlamı) ve vukuatlı nüfus kayıt örneği",
      "Mirasbırakana ait tapu kayıtları, resmi senet örnekleri ve banka kayıtları",
      "Varsa vasiyetname veya miras taksim sözleşmesi örneği"
    ],
    processNote: "Özellikle yurt dışında yaşayan mirasçıların Türkiye'deki miras haklarının korunması, tapu devirlerinin incelenmesi ve ortaklığın giderilmesi süreçleri büromuzca uçtan uca takip edilmektedir."
  },
  {
    id: "ceza-hukuku",
    num: "06",
    category: "bireysel",
    title: "Ceza Hukuku ve Ceza Muhakemesi",
    shortDesc: "Soruşturma (karakol/savcılık) aşamasından Ağır Ceza ve Asliye Ceza Mahkemesi kovuşturmalarına, istinaf ve Yargıtay süreçlerine kadar etkin savunma.",
    tags: ["Ağır Ceza & Asliye Ceza", "Soruşturma Müdafiliği", "Tutukluluğa İtiraz", "İstinaf & Temyiz"],
    court: "Cumhuriyet Başsavcılığı / Asliye Ceza / Ağır Ceza Mahkemeleri",
    services: [
      "Emniyet, Jandarma ve Cumhuriyet Başsavcılığı ifade ve sorgu işlemlerinde 7/24 müdafilik desteği",
      "Tutuklama ve adli kontrol kararlarına karşı Sulh Ceza Hakimliği nezdinde etkin itiraz başvuruları",
      "Ağır Ceza ve Asliye Ceza Mahkemelerinde sanık müdafiliği ve suçtan zarar gören (müşteki/katılan) vekilliği",
      "Bilişim suçları, dolandırıcılık, malvarlığına ve hayata karşı suçlarda delil analizi ve mütalaa savunması",
      "Bölge Adliye Mahkemesi (İstinaf), Yargıtay (Temyiz) ve Anayasa Mahkemesi bireysel başvuru süreçleri"
    ],
    documents: [
      "Soruşturma veya mahkeme dosya numarası",
      "İfade tutanakları, iddianame veya mevcut mahkeme kararları",
      "Lehine olan kamera kayıtları, dijital materyaller ve tanık bilgileri"
    ],
    processNote: "Ceza yargılamasında soruşturma aşamasında verilen ilk ifade, davanın tüm seyrini belirler. Acil gözaltı ve ifade durumlarında büromuza 24 saat ulaşabilirsiniz."
  },
  {
    id: "icra-iflas",
    num: "07",
    category: "kurumsal",
    title: "İcra ve İflas Hukuku (Alacak Tahsili)",
    shortDesc: "Ticari ve bireysel alacakların hızlı tahsili, çek-senet-fatura takipleri, kira tahliyeli icra, itirazın iptali ve menfi tespit davaları.",
    tags: ["Alacak Takibi", "Haciz & Muhafaza", "İtirazın İptali", "Menfi Tespit"],
    court: "İcra Müdürlükleri / İcra Mahkemeleri / Genel Mahkemeler",
    services: [
      "Fatura, sözleşme ve cari hesap alacaklarına ilişkin İlamsız İcra Takipleri",
      "Çek, bono (senet) ve poliçeye dayalı Kambiyo Senetlerine Özgü Haciz Yoluyla Takipler ve İhtiyati Haciz",
      "Ödenmeyen kira alacakları için Örnek 13 (Tahliye Talepli) İcra Takibi ve İcra Mahkemesi tahliye davaları",
      "Haksız icra takibine maruz kalanlar için borca/imzaya itiraz, Menfi Tespit ve İstirdat davaları",
      "Borçlunun taşınır, taşınmaz, araç ve üçüncü kişilerdeki hak ve alacaklarının (89/1 haciz ihbarnamesi) sorgulanması ve satışı"
    ],
    documents: [
      "Alacağın dayanağı olan senet, çek, fatura, sözleşme veya banka dekontu aslı",
      "Borçlunun bilinen kimlik/vergi numarası ve adres bilgileri"
    ],
    processNote: "Alacak tahsilinde hız ve borçlu malvarlığı araştırması belirleyicidir. Büromuz UYAP entegrasyonu ile takip işlemlerini aynı gün içerisinde başlatmaktadır."
  },
  {
    id: "tazminat-sigorta",
    num: "08",
    category: "bireysel",
    title: "Tazminat ve Sigorta Hukuku",
    shortDesc: "Trafik kazası araç değer kaybı, bedeni hasar, destekten yoksun kalma, haksız fiil ve sözleşme ihlallerinden doğan maddi ve manevi tazminat davaları.",
    tags: ["Araç Değer Kaybı", "Trafik Kazası Tazminatı", "Sigorta Tahkim", "Maddi & Manevi Tazminat"],
    court: "Asliye Hukuk / Asliye Ticaret / Sigorta Tahkim Komisyonu",
    services: [
      "Trafik kazası sonrası Araç Değer Kaybı, ikame araç (araç mahrumiyet) bedeli ve hasar farkı başvuruları",
      "Yaralanmalı ve ölümlü trafik kazalarında Sürekli İş Göremezlik ve Destekten Yoksun Kalma tazminatları",
      "Sigorta Tahkim Komisyonu nezdinde hızlı ve etkin tazminat tahsili süreçleri",
      "Haksız fiil, kişilik haklarına saldırı ve tıbbi uygulama hatalarından (malpraktis) kaynaklanan tazminat davaları"
    ],
    documents: [
      "Kaza tespit tutanağı, ekspertiz raporu ve kaza fotoğrafları",
      "Araç ruhsatı, poliçe bilgileri ve onarım faturaları",
      "Yaralanmalı kazalarda hastane evrakları ve adli tıp/heyet raporları"
    ],
    processNote: "Sigorta Tahkim Komisyonu başvuruları sayesinde araç değer kaybı ve trafik kazası tazminatları genel mahkemelere kıyasla çok daha kısa sürede sonuçlandırılabilmektedir."
  },
  {
    id: "ticaret-sirketler",
    num: "09",
    category: "kurumsal",
    title: "Ticaret, Şirketler ve Kurumsal Danışmanlık",
    shortDesc: "Şirketler için önleyici hukuk müşavirliği, ticari sözleşmelerin hazırlanması, ortaklık uyuşmazlıkları ve KVKK uyum süreçleri.",
    tags: ["Sürekli Hukuk Müşavirliği", "Ticari Sözleşmeler", "Şirketler Hukuku", "Tüketici Hukuku"],
    court: "Asliye Ticaret / Tüketici Mahkemeleri",
    services: [
      "Şirketlere aylık düzenli önleyici hukuk danışmanlığı ve sözleşme denetimi",
      "Bayilik, tedarik, gizlilik (NDA), hizmet ve eser sözleşmelerinin hazırlanması ve revizyonu",
      "Ticari alacak ve tazminat davaları ile haksız rekabet uyuşmazlıkları",
      "Ayıplı mal ve hizmetlerden doğan Tüketici Hakem Heyeti ve Tüketici Mahkemesi davaları"
    ],
    documents: [
      "Şirket imza sirküleri, vergi levhası ve ticaret sicil gazetesi",
      "İncelenecek veya uyuşmazlık konusu ticari sözleşme ve yazışmalar"
    ],
    processNote: "Kurumsal müvekkillerimiz için temel hedefimiz, uyuşmazlık doğmadan önce sözleşmesel güvenceleri kurarak ticari riskleri sıfıra indirmektir."
  }
];

/* --------------------------------------------------------------------------
   2. INTERACTIVE LEGAL TRIAGE WIZARD DATA
   -------------------------------------------------------------------------- */
const TRIAGE_SCENARIOS = {
  "yurtdisi": {
    label: "Yurt Dışı / Gurbetçi & Vatandaşlık İşlemleri",
    subOptions: [
      { id: "tanima", title: "Yurt Dışı Boşanma Kararının Türkiye'de Tanınması", desc: "Yabancı mahkemede boşandım, Türkiye'de nüfusta hala evli görünüyorum." },
      { id: "vatandaslik", title: "Vatandaşlık Hakları & Mavi Kart / İkamet Davası", desc: "Vatandaşlık başvurusu, izin veya idari ret kararına itiraz." },
      { id: "uzaktan_mulk", title: "Türkiye'deki Ev/Arsa, Kira veya Miras İşlemi", desc: "Yurt dışındayım, Uşak/Türkiye'deki mülküm veya mirasım için işlem yapılmalı." }
    ]
  },
  "kira_gayrimenkul": {
    label: "Gayrimenkul, Kira & Tahliye Hukuku",
    subOptions: [
      { id: "tahliye", title: "Kiracının Tahliyesi (Taahhütname / İhtiyaç / Temerrüt)", desc: "Kiracım kira ödemiyor, tahliye taahhüdü var veya konuta ihtiyacım var." },
      { id: "kira_tespit", title: "Kira Bedelinin Güncellenmesi (Kira Tespit Davası)", desc: "Kira bedeli piyasa rayicinin çok altında kaldı, 5 yıl doldu." },
      { id: "izale", title: "Hisseli Tapu / Ortaklığın Giderilmesi & Tapu İptal", desc: "Hissedarlarla anlaşamıyoruz veya tapuda haksız devir var." }
    ]
  },
  "aile": {
    label: "Aile ve Boşanma Hukuku",
    subOptions: [
      { id: "anlasmali", title: "Anlaşmalı Boşanma & Protokol Hazırlığı", desc: "Eşimle tüm şartlarda uzlaşarak hızlıca boşanmak istiyoruz." },
      { id: "cekismeli", title: "Çekişmeli Boşanma, Velayet & Tazminat", desc: "Boşanma, velayet, nafaka veya mal paylaşımında uyuşmazlık var." },
      { id: "nafaka_mal", title: "Nafaka Artırımı veya Mal Paylaşımı / Ziynet Davası", desc: "Mevcut nafakanın güncellenmesi veya evlilik içi malların tasfiyesi." }
    ]
  },
  "is_engellilik": {
    label: "İş Hukuku & Engellilik Yardımı Davaları",
    subOptions: [
      { id: "engellilik", title: "Engellilik Yardımı, Maluliyet & SGK Hakları Davası", desc: "Engellilik oranı, maluliyet aylığı veya sosyal yardım uyuşmazlığı." },
      { id: "kidem_ihbar", title: "Kıdem, İhbar, Fazla Mesai & İşçilik Alacakları", desc: "İşten çıkarıldım veya haklı nedenle feshettim, tazminatlarım ödenmedi." },
      { id: "ise_iade", title: "Haksız Fesih Nedeniyle İşe İade / İş Kazası", desc: "Geçerli sebep olmadan işten çıkarıldım veya iş kazası geçirdim." }
    ]
  },
  "miras_icra_ceza": {
    label: "Miras, Ceza, İcra veya Tazminat Hukuku",
    subOptions: [
      { id: "miras", title: "Miras Paylaşımı, Mal Kaçırma (Tenkis/Muvazaa) & Reddi Miras", desc: "Mirasçılar arası paylaşım, vasiyetname veya borçlu mirasın reddi." },
      { id: "ceza", title: "Ceza Soruşturması / Mahkemesi Savunma & Şikayet", desc: "İfade, gözaltı, ceza davası savunması veya suç duyurusu." },
      { id: "icra_tazminat", title: "Alacak Tahsili (İcra) veya Trafik Kazası / Değer Kaybı", desc: "Senet/fatura/kira tahsili veya kaza sonrası değer kaybı tazminatı." }
    ]
  }
};

/* --------------------------------------------------------------------------
   3. INTERNATIONAL / EXPAT CONSULATE GUIDE DATA
   -------------------------------------------------------------------------- */
const CONSULATE_DATA = {
  almanya: {
    country: "Almanya (Berlin, Münih, Frankfurt, Köln, Düsseldorf, Stuttgart, Hannover...)",
    appointmentUrl: "www.konsolosluk.gov.tr",
    steps: [
      "konsolosluk.gov.tr üzerinden size en yakın T.C. Başkonsolosluğu Noterlik bölümünden randevu alınır.",
      "T.C. Kimlik Kartı (veya Mavi Kart / Pasaport) ve 2 adet son 6 ayda çekilmiş vesikalık fotoğraf (boşanma/tanıma vekaleti için zorunlu) ile gidilir.",
      "Büromuzun ileteceği avukat kimlik ve baro sicil bilgileri konsolosluk görevlisine bildirilerek vekaletname düzenlenir.",
      "Tanıma ve Tenfiz davaları için Alman mahkemesi kararının (Scheidungsurteil) kesinleşme şerhli (Rechtskraftvermerk) aslına Landgericht'ten Apostil (Apostille) vurulur."
    ]
  },
  fransa: {
    country: "Fransa (Paris, Lyon, Strazburg, Marsilya, Bordeaux, Nantes)",
    appointmentUrl: "www.konsolosluk.gov.tr",
    steps: [
      "Fransa'daki bağlı bulunduğunuz T.C. Başkonsolosluğu Noterlik servisinden online randevu oluşturulur.",
      "Kimlik belgesi, pasaport ve özel yetki gerektiren davalar (boşanma, tanıma-tenfiz, tapu) için 2 adet fotoğraf ibraz edilir.",
      "Fransız mahkeme kararlarının tanınması için kesinleşmiş karar aslına Cour d'Appel nezdinde Apostille şerhi alınır ve yeminli tercümesi konsoloslukça tasdik edilir."
    ]
  },
  hollanda: {
    country: "Hollanda (Amsterdam, Rotterdam, Deventer)",
    appointmentUrl: "www.konsolosluk.gov.tr",
    steps: [
      "Rotterdam, Amsterdam veya Deventer T.C. Başkonsolosluğundan noterlik randevusu alınır.",
      "Büromuzca tarafınıza WhatsApp üzerinden iletilen özel vekaletname metni ve avukat bilgileriyle aynı gün vekaletname çıkartılır.",
      "Vekaletname aslı kargo ile veya taratılmış nüshası UYAP sistemine kaydedilmek üzere büromuza iletilerek işlemler derhal başlatılır."
    ]
  },
  avusturya: {
    country: "Avusturya & İsviçre (Viyana, Salzburg, Bregenz / Zürih, Cenevre, Bern)",
    appointmentUrl: "www.konsolosluk.gov.tr",
    steps: [
      "İlgili T.C. Başkonsolosluğu noterlik biriminden kimlik/Mavi Kart ve fotoğrafla fotoğraflı özel dava vekaletnamesi düzenlenir.",
      "Türkiye'ye gelmenize gerek kalmadan Uşak ve tüm Türkiye'deki tapu, kira tahliye, miras ve aile mahkemesi süreçleriniz yürütülür.",
      "Tüm duruşma tutanakları ve dosya gelişmeleri düzenli olarak WhatsApp ve görüntülü görüşme ile tarafınıza raporlanır."
    ]
  },
  belcika: {
    country: "Belçika, İngiltere & Diğer Ülkeler (Brüksel, Anvers / Londra...)",
    appointmentUrl: "www.konsolosluk.gov.tr",
    steps: [
      "T.C. Başkonsolosluğuna giderek veya yabancı ülke noterinde düzenlenip Apostil şerhi eklenerek vekaletname çıkartılabilir.",
      "En hızlı ve tercüme masrafsız yöntem, doğrudan T.C. Başkonsolosluğu Noterlik servisinde Türkçe vekaletname düzenlenmesidir.",
      "Vekaletname bilgileri için 0542 587 77 22 numaralı WhatsApp hattımızdan 7/24 anında bilgi alabilirsiniz."
    ]
  }
};

/* --------------------------------------------------------------------------
   4. LEGAL ARTICLES / PUBLICATIONS DATA
   -------------------------------------------------------------------------- */
const ARTICLES = [
  {
    id: "gurbetci-kira-tahliye-tanima",
    category: "Yurt Dışı & Gurbetçi Hukuku",
    readTime: "4 dk okuma",
    date: "Kasım 2026",
    title: "Yurt Dışında Yaşayan Vatandaşların Türkiye'deki Kira, Tahliye ve Tanıma-Tenfiz Davaları",
    excerpt: "Yurt dışında ikamet eden vatandaşlarımızın Türkiye'ye gelmelerine gerek kalmadan konsolosluk vekaletnamesi ile taşınmaz tahliyesi, miras paylaşımı ve boşanma tanıma işlemlerini yürütme rehberi.",
    content: `
      <h4>1. Türkiye'ye Gelmeden Dava Açmak ve Takip Etmek Mümkün müdür?</h4>
      <p>Yurt dışında (Almanya, Fransa, Hollanda, Avusturya, Belçika ve diğer ülkelerde) yaşayan vatandaşlarımızın en sık karşılaştığı sorun, Uşak veya Türkiye'nin diğer illerinde bulunan gayrimenkulleri, kira uyuşmazlıkları, miras paylaşımları veya aile hukuku davaları için izin alıp Türkiye'ye gelme zorunluluğu düşüncesidir. Oysa Türk hukuk sisteminde, bulunduğunuz ülkedeki <strong>T.C. Başkonsolosluğu Noterlik Servisi</strong> aracılığıyla düzenleyeceğiniz vekaletname ile Türkiye'ye hiç gelmeden tüm dava ve icra süreçleriniz avukatınız aracılığıyla baştan sona sonuçlandırılabilir.</p>
      <h4 style="margin-top:1.25rem;">2. Yabancı Mahkeme Boşanma Kararlarının Tanıma ve Tenfizi</h4>
      <p>Yurt dışında bir mahkemede boşanmış olmanız, Türkiye'deki nüfus kayıtlarında kendiliğinden boşanmış sayılmanız için yeterli değildir. Tanıma veya tenfiz işlemi yapılmadığı takdirde Türkiye'de hala evli görünmeye devam edersiniz; bu durum yeniden evlenme, mirasçılık ve malvarlığı işlemlerinde ciddi hak kayıplarına yol açar. Kesinleşmiş ve Apostil şerhi alınmış yabancı mahkeme kararı ile Türkiye'de açılacak Tanıma-Tenfiz davası sayesinde nüfus kayıtlarınız kısa sürede güncellenmektedir.</p>
      <h4 style="margin-top:1.25rem;">3. Yurt Dışında Yaşayan Mülk Sahiplerinin Kiracı Tahliye Hakları</h4>
      <p>Türk Borçlar Kanunu m. 350 uyarınca, yurt dışında yaşayan ev sahipleri de Türkiye'ye kesin dönüş yapma, yaz tatillerinde konutu bizzat kullanma ihtiyacı veya geçerli bir yazılı tahliye taahhütnamesine dayanarak kiracının tahliyesini talep edebilirler. Ayrıca kira bedelinin ödenmemesi (temerrüt) veya 5 yılı dolduran kiralamalarda güncel rayice göre <strong>Kira Tespit Davası</strong> açılması süreçleri büromuzca uzaktan şeffaf raporlama ile yürütülmektedir.</p>
    `
  },
  {
    id: "kira-tahliye-ve-tespit-sartlari",
    category: "Gayrimenkul & Kira Hukuku",
    readTime: "5 dk okuma",
    date: "Ekim 2026",
    title: "Tahliye Taahhütnamesi Geçerlilik Şartları ve 5 Yıl Sonrası Kira Tespit Davaları",
    excerpt: "Kiracının tahliyesi süreçlerinde tahliye taahhütnamesinin hukuki geçerliliği, zorunlu arabuluculuk süreci ve TBK m. 344 kapsamında emsal kira bedeli tespiti.",
    content: `
      <h4>1. Yazılı Tahliye Taahhütnamesinin Geçerlilik Koşulları</h4>
      <p>Türk Borçlar Kanunu m. 352/1 uyarınca tahliye taahhütnamesinin geçerli olabilmesi için; taahhüdün bizzat kiracı (veya özel yetkili vekili) tarafından yazılı olarak verilmiş olması, <strong>kira sözleşmesinin imzalanmasından ve kiralananın tesliminden sonraki bir tarihte</strong> düzenlenmiş olması ve tahliye tarihinin açıkça belirtilmesi şarttır. Taahhüt edilen tarihten itibaren <strong>1 ay içinde</strong> icra dairesine başvurulması veya dava açılması hak düşürücü süredir.</p>
      <h4 style="margin-top:1.25rem;">2. Beş Yılı Dolduran Kira Sözleşmelerinde Kira Tespit Davası</h4>
      <p>Beş yıldan uzun süreli veya beş yıldan sonra yenilenen kira sözleşmelerinde, yeni kira yılında uygulanacak kira bedeli; TÜFE artış oranı ile sınırlı kalmaksızın, hakim tarafından kiralananın durumu ve bölgedeki <strong>emsal kira bedelleri</strong> (bilirkişi incelemesi) göz önünde tutularak hakkaniyete uygun biçimde yeniden belirlenir.</p>
      <h4 style="margin-top:1.25rem;">3. Zorunlu Arabuluculuk Süreci</h4>
      <p>Kira tespiti ve tahliye davalarında dava açılmadan önce arabulucuya başvurulması dava şartıdır. İhtarname tebliğ sürelerinin kaçırılmaması, davanın bir yıl uzamasını önleyen en kritik hukuki adımdır.</p>
    `
  },
  {
    id: "engellilik-yardimi-ve-maluliyet-haklari",
    category: "İş & Sosyal Güvenlik Hukuku",
    readTime: "4 dk okuma",
    date: "Eylül 2026",
    title: "Engellilik Yardımı Davaları, Maluliyet Tespiti ve Sosyal Güvenlik Hakları",
    excerpt: "Engelli sağlık kurulu raporlarına itiraz, maluliyet aylığı bağlanması, engellilik yardımı kesintilerine karşı iptal davaları ve iş/sosyal güvenlik hakları.",
    content: `
      <h4>1. Engellilik Yardımı ve Maluliyet Aylığı Uyuşmazlıkları</h4>
      <p>Çalışma gücünü veya meslekte kazanma gücünü belirli oranda kaybeden vatandaşlarımızın SGK maluliyet aylığı, engelli aylığı, evde bakım yardımı ve vergi indirim/ÖTV muafiyeti hakları bulunmaktadır. Kurum sağlık kurulları tarafından engel oranının eksik hesaplanması veya mevcut yardımların haksız yere kesilmesi durumlarında İdare Mahkemeleri ve İş Mahkemeleri nezdinde iptal ve tespit davaları açılabilmektedir.</p>
      <h4 style="margin-top:1.25rem;">2. Sağlık Kurulu Raporlarına İtiraz ve Adli Tıp Süreci</h4>
      <p>Hastanelerce verilen engelli sağlık kurulu raporları arasında çelişki bulunması veya SGK Yüksek Sağlık Kurulu kararının gerçeği yansıtmaması halinde, yargılama aşamasında Üniversite Hastaneleri ve Adli Tıp Kurumu İhtisas Dairelerinden alınan yeni raporlarla hak sahipliği kanıtlanmaktadır.</p>
    `
  },
  {
    id: "ortakligin-giderilmesi-ve-miras",
    category: "Miras & Gayrimenkul Hukuku",
    readTime: "5 dk okuma",
    date: "Ağustos 2026",
    title: "Miras Kalan Taşınmazlarda Ortaklığın Giderilmesi (İzale-i Şuyu) ve Muris Muvazaası",
    excerpt: "Mirasçılar arasında paylaşılamayan arsa, tarla ve konutların satışı veya taksimi ile mirastan mal kaçırma işlemlerine karşı tapu iptal davaları.",
    content: `
      <h4>1. Hissedarlar Anlaşamadığında Çözüm: İzale-i Şuyu</h4>
      <p>Miras yoluyla veya satın alma ile birden fazla kişinin paydaş olduğu taşınmazlarda, hissedarlardan tek bir tanesi dahi ortaklığı sürdürmek istemezse Sulh Hukuk Mahkemesinde <strong>Ortaklığın Giderilmesi (İzale-i Şuyu)</strong> davası açarak taşınmazın aynen bölünmesini, bölünemiyorsa elektronik açık artırma yoluyla satılarak herkesin payının nakden ödenmesini sağlayabilir.</p>
      <h4 style="margin-top:1.25rem;">2. Mirastan Mal Kaçırma (Muris Muvazaası)</h4>
      <p>Mirasbırakanın sağlığında bazı mirasçılarını mirastan محروم bırakmak amacıyla gerçekte bağışladığı taşınmazı tapuda satış gibi göstermesi halinde, hak kaybına uğrayan mirasçılar zamanaşımı süresine tabi olmaksızın <strong>Tapu İptal ve Tescil</strong> davası açma hakkına sahiptir.</p>
    `
  }
];

/* --------------------------------------------------------------------------
   5. VERIFIED GOOGLE REVIEWS DATA (5.0 ★ - 36 YORUM)
   -------------------------------------------------------------------------- */
const REVIEWS = [
  {
    name: "Eda Kirici",
    badge: "Google Yorumu · Yurt Dışı Müvekkil",
    time: "2 ay önce",
    rating: 5,
    featured: true,
    text: "Yurt dışından güvenilir bir şekilde ulaşabilirsiniz. Tüm işlemlerimizi yurt dışında olmamıza rağmen güvenle sürdürdük. Teşekkürler."
  },
  {
    name: "Mehmet K.",
    badge: "Google Yorumu · Gayrimenkul & Kira Hukuku",
    time: "3 ay önce",
    rating: 5,
    featured: false,
    text: "Uşak'taki taşınmazımızın kira ve tahliye sürecinde Naile Hanım ilk günden itibaren çok şeffaf ve profesyonel bir yol haritası çizdi. Süreci kısa sürede sonuçlandırdık."
  },
  {
    name: "Ayşe T.",
    badge: "Google Yorumu · Aile Hukuku",
    time: "4 ay önce",
    rating: 5,
    featured: false,
    text: "Boşanma ve velayet davamızda gösterdiği titizlik, ulaşılabilirlik ve hukuki hakimiyet için Naile Nur Hanım'a minnettarız. Her aşamada detaylı bilgilendirildik."
  },
  {
    name: "Hasan Y.",
    badge: "Google Yorumu · Miras & Tapu Davası",
    time: "5 ay önce",
    rating: 5,
    featured: false,
    text: "Yıllardır çözülemeyen hisseli miras taşınmazımızla ilgili ortaklığın giderilmesi ve tapu sürecimizi büyük bir özveriyle takip etti. Uşak'ta güvenle başvurabileceğiniz bir hukuk bürosu."
  }
];

/* --------------------------------------------------------------------------
   6. FAQ DATA
   -------------------------------------------------------------------------- */
const FAQS = [
  {
    q: "Yurt dışında yaşıyorum, Türkiye'ye gelmeden Uşak'taki davamı açabilir miyim?",
    a: "Evet. Bulunduğunuz ülkedeki T.C. Başkonsolosluğu Noterlik birimine giderek büromuz adına düzenleteceğiniz vekaletname ile Türkiye'ye seyahat etmenize gerek kalmaksızın boşanma tanıma-tenfiz, kira tahliye, tapu, miras ve diğer tüm davalarınız başlatılıp sonuçlandırılmaktadır. Süreç boyunca WhatsApp ve görüntülü görüşme ile düzenli bilgilendirme yapılır."
  },
  {
    q: "Yabancı mahkemede boşandım, Türkiye'de tekrar dava açmam gerekiyor mu?",
    a: "Yabancı ülke mahkemelerinin verdiği boşanma kararları Türkiye'de kendiliğinden geçerli olmaz. Kararın kesinleşme şerhi ve Apostil tasdiki ile birlikte Türkiye'de Tanıma ve Tenfiz işleminin yapılması gerekir. Eşlerden biri Türk vatandaşı değilse veya gelemiyorsa dahi avukat vekaletnamesi ile bu süreç hızla tamamlanabilir."
  },
  {
    q: "Kiracımı tahliye etmek için hangi hukuki yollar mevcuttur?",
    a: "Geçerli bir yazılı tahliye taahhütnamesi varsa taahhüt tarihinden itibaren 1 ay içinde; kira bedeli ödenmiyorsa tahliye talepli icra takibi (Örnek 13) veya iki haklı ihtar yoluyla; kendinizin, eşinizin veya alt/üst soyunuzun konut/işyeri ihtiyacı varsa ihtiyaç nedeniyle tahliye davası açılabilir. Dava öncesi zorunlu arabuluculuk başvurusu büromuzca yürütülür."
  },
  {
    q: "Hukuki danışmanlık ve randevu süreci nasıl işliyor?",
    a: "Web sitemizdeki Online Randevu formundan veya 0542 587 77 22 numaralı hattımızdan Uşak Ertuğrul Plus İş Merkezi'ndeki ofisimizde yüz yüze görüşme ya da şehir dışı/yurt dışı müvekkillerimiz için Online Görüntülü Danışmanlık randevusu oluşturabilirsiniz."
  },
  {
    q: "Engellilik yardımı ve maluliyet davalarında nasıl bir yol izleniyor?",
    a: "Sağlık kurulu raporlarındaki oran uyuşmazlıkları, SGK maluliyet red kararları ve sosyal yardım kesintilerine karşı idari başvuru ve dava süreçleri tıbbi-hukuki rapor incelemesiyle titizlikle takip edilmektedir."
  }
];

/* ==========================================================================
   INITIALIZATION & RENDER FUNCTIONS
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initHeaderAndTheme();
  renderPracticeAreas("all", "");
  initPracticeFilters();
  initTriageWizard();
  initConsulateGuide();
  initCalculators();
  renderArticles();
  renderReviews();
  renderFaqs();
  initAppointmentForm();
  initModals();
});

/* --------------------------------------------------------------------------
   HEADER, MOBILE MENU & THEME TOGGLE
   -------------------------------------------------------------------------- */
function initHeaderAndTheme() {
  const header = document.getElementById("site-header");
  const themeBtn = document.getElementById("theme-toggle-btn");
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const navLinks = document.getElementById("nav-links");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      themeBtn.setAttribute("aria-label", next === "dark" ? "Açık Temaya Geç" : "Koyu Temaya Geç");
    });
  }

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
    });
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => navLinks.classList.remove("mobile-open"));
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
  const filtered = PRACTICE_AREAS.filter(item => {
    const matchCat = category === "all" || item.category === category;
    const matchQuery = !q ||
      item.title.toLowerCase().includes(q) ||
      item.shortDesc.toLowerCase().includes(q) ||
      item.tags.some(t => t.toLowerCase().includes(q));
    return matchCat && matchQuery;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align:center; padding: 3rem; background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);">
        <p style="color: var(--text-secondary); margin-bottom: 1rem;">Aradığınız kriterlere uygun uzmanlık alanı bulunamadı.</p>
        <button class="btn btn-secondary" onclick="resetPracticeFilter()">Tüm Uzmanlık Alanlarını Göster</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(area => `
    <article class="practice-card" onclick="openPracticeModal('${area.id}')" tabindex="0" role="button" aria-label="${area.title} detaylarını incele">
      <div>
        <div class="practice-card-top">
          <div class="practice-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
              <path d="M12 3v18M5 7l7-4 7 4M5 7l-3 7h6l-3-7zM19 7l-3 7h6l-3-7zM4 21h16"/>
            </svg>
          </div>
          <span class="practice-num">ALAN / ${area.num}</span>
        </div>
        <h3 class="practice-title">${area.title}</h3>
        <p class="practice-desc">${area.shortDesc}</p>
        <div class="practice-tags">
          ${area.tags.map(t => `<span class="practice-tag">${t}</span>`).join("")}
        </div>
      </div>
      <div class="practice-card-footer">
        <span>Kapsam, Süreç & Gerekli Belgeler</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M13 5l7 7-7 7"/>
        </svg>
      </div>
    </article>
  `).join("");
}

function initPracticeFilters() {
  const tabs = document.querySelectorAll(".filter-tab");
  const searchInput = document.getElementById("practice-search-input");
  let activeCategory = "all";

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeCategory = tab.getAttribute("data-category");
      renderPracticeAreas(activeCategory, searchInput ? searchInput.value : "");
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderPracticeAreas(activeCategory, e.target.value);
    });
  }
}

window.resetPracticeFilter = function() {
  const tabs = document.querySelectorAll(".filter-tab");
  const searchInput = document.getElementById("practice-search-input");
  tabs.forEach(t => t.classList.remove("active"));
  if (tabs[0]) tabs[0].classList.add("active");
  if (searchInput) searchInput.value = "";
  renderPracticeAreas("all", "");
};

/* --------------------------------------------------------------------------
   INTERACTIVE LEGAL TRIAGE WIZARD (3-STEP ENGINE)
   -------------------------------------------------------------------------- */
let wizardState = {
  step: 1,
  areaKey: null,
  subId: null,
  subTitle: "",
  location: "Uşak Merkez / İlçeleri",
  urgency: "Normal (Ön Danışmanlık & Dava Hazırlığı)"
};

function initTriageWizard() {
  renderWizardStep();
}

function renderWizardStep() {
  const body = document.getElementById("wizard-body");
  if (!body) return;

  // Update step indicators
  for (let i = 1; i <= 3; i++) {
    const pill = document.getElementById(`wizard-step-pill-${i}`);
    if (!pill) continue;
    pill.classList.remove("active", "completed");
    if (i === wizardState.step) pill.classList.add("active");
    else if (i < wizardState.step) pill.classList.add("completed");
  }

  if (wizardState.step === 1) {
    body.innerHTML = `
      <div>
        <h3 style="font-family: var(--font-serif); font-size: 1.65rem; margin-bottom: 0.35rem;">1. Adım: Hukuki Uyuşmazlık Alanınızı Seçin</h3>
        <p style="font-size: 0.92rem; color: var(--text-secondary);">Dosyanızın niteliğine göre görevli mahkemeyi, süreç haritasını ve gerekli belgeleri anında görüntüleyin.</p>
        <div class="wizard-options-grid">
          ${Object.entries(TRIAGE_SCENARIOS).map(([key, item]) => `
            <button type="button" class="wizard-option-btn" onclick="selectWizardArea('${key}')">
              <div class="wizard-option-title">
                <span>${item.label}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold-400)" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
              </div>
              <span class="wizard-option-desc">${item.subOptions.map(s => s.title.split(" ")[0]).join(" · ")} süreçleri</span>
            </button>
          `).join("")}
        </div>
      </div>
    `;
  } else if (wizardState.step === 2) {
    const scenario = TRIAGE_SCENARIOS[wizardState.areaKey];
    body.innerHTML = `
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; margin-bottom:0.5rem;">
          <h3 style="font-family: var(--font-serif); font-size: 1.65rem;">2. Adım: Durumunuzu En İyi Tanımlayan Başlığı Seçin</h3>
          <button type="button" class="btn-ghost" onclick="setWizardStep(1)">← Geri Dön</button>
        </div>
        <p style="font-size: 0.92rem; color: var(--text-secondary);">Seçilen Alan: <strong style="color:var(--gold-400)">${scenario.label}</strong></p>
        <div class="wizard-options-grid">
          ${scenario.subOptions.map(sub => `
            <button type="button" class="wizard-option-btn" onclick="selectWizardSub('${sub.id}', '${sub.title.replace(/'/g, "\\'")}')">
              <div class="wizard-option-title">
                <span>${sub.title}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold-400)" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
              </div>
              <span class="wizard-option-desc">${sub.desc}</span>
            </button>
          `).join("")}
        </div>
      </div>
    `;
  } else if (wizardState.step === 3) {
    // Find matching practice area for checklist
    let matchedArea = PRACTICE_AREAS[0];
    if (wizardState.areaKey === "kira_gayrimenkul") matchedArea = PRACTICE_AREAS[1];
    else if (wizardState.areaKey === "aile") matchedArea = PRACTICE_AREAS[2];
    else if (wizardState.areaKey === "is_engellilik") matchedArea = PRACTICE_AREAS[3];
    else if (wizardState.areaKey === "miras_icra_ceza") {
      if (wizardState.subId === "miras") matchedArea = PRACTICE_AREAS[4];
      else if (wizardState.subId === "ceza") matchedArea = PRACTICE_AREAS[5];
      else matchedArea = PRACTICE_AREAS[6];
    }

    const waText = encodeURIComponent(
      `Merhaba Av. Naile Nur Hanım, web sitenizdeki Hukuki Analiz Sihirbazı üzerinden ulaşıyorum.\n\n` +
      `• Konu: ${wizardState.subTitle}\n` +
      `• Bulunduğum Yer: ${wizardState.location}\n` +
      `• Durum: ${wizardState.urgency}\n\n` +
      `Danışmanlık ve randevu için bilgi rica ederim.`
    );

    body.innerHTML = `
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; margin-bottom:1.25rem;">
          <div>
            <span style="font-size:0.76rem; text-transform:uppercase; letter-spacing:0.12em; color:var(--gold-400); font-weight:600;">ÖN HUKUKİ DEĞERLENDİRME RAPORU</span>
            <h3 style="font-family: var(--font-serif); font-size: 1.75rem; margin-top:0.2rem;">${wizardState.subTitle}</h3>
          </div>
          <button type="button" class="btn-ghost" onclick="setWizardStep(1)">Yeni Analiz Başlat</button>
        </div>

        <div class="wizard-result-box">
          <div>
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; color:var(--gold-400); margin-bottom:0.75rem;">Önerilen Hukuki Yol Haritası & Görevli Merci</h4>
            <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:1rem;">
              <strong>Görevli Mahkeme / Merci:</strong> ${matchedArea.court}
            </p>
            <p style="font-size:0.92rem; color:var(--text-primary); margin-bottom:1.25rem; line-height:1.65;">
              ${matchedArea.processNote}
            </p>
            <h5 style="font-size:0.85rem; text-transform:uppercase; letter-spacing:0.08em; color:var(--gold-400); margin-bottom:0.65rem;">İlk Görüşme İçin Hazırlanması Önerilen Belgeler:</h5>
            <div>
              ${matchedArea.documents.map(doc => `
                <div class="checklist-item">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>${doc}</span>
                </div>
              `).join("")}
            </div>
          </div>

          <div style="background:var(--bg-card); border:1px solid var(--border-medium); border-radius:var(--radius-sm); padding:1.5rem; display:flex; flex-direction:column; justify-content:space-between; gap:1.25rem;">
            <div>
              <h4 style="font-family:var(--font-serif); font-size:1.25rem; margin-bottom:0.85rem;">Dosya Bilgilerinizi Özelleştirin</h4>
              <div class="form-group">
                <label class="form-label">İkamet Ettiğiniz Konum</label>
                <select class="form-control" onchange="updateWizardLocation(this.value)">
                  <option value="Uşak Merkez / İlçeleri" ${wizardState.location === "Uşak Merkez / İlçeleri" ? "selected" : ""}>Uşak Merkez / İlçeleri</option>
                  <option value="Yurt Dışı (Avrupa / Gurbetçi Müvekkil)" ${wizardState.location === "Yurt Dışı (Avrupa / Gurbetçi Müvekkil)" ? "selected" : ""}>Yurt Dışı (Avrupa / Gurbetçi Müvekkil)</option>
                  <option value="Türkiye Geneli (Şehir Dışı)" ${wizardState.location === "Türkiye Geneli (Şehir Dışı)" ? "selected" : ""}>Türkiye Geneli (Şehir Dışı)</option>
                </select>
              </div>
              <div class="form-group" style="margin-bottom:0;">
                <label class="form-label">Süreç Aciliyeti</label>
                <select class="form-control" onchange="updateWizardUrgency(this.value)">
                  <option value="Normal (Ön Danışmanlık & Dava Hazırlığı)" ${wizardState.urgency.startsWith("Normal") ? "selected" : ""}>Normal (Ön Danışmanlık & Dava Hazırlığı)</option>
                  <option value="Acil (Tebligat Geldi / Süreli İtiraz Var)" ${wizardState.urgency.startsWith("Acil") ? "selected" : ""}>Acil (Tebligat Geldi / Süreli İtiraz Var)</option>
                  <option value="Çok Acil (İfade / İcra / Tedbir Talebi)" ${wizardState.urgency.startsWith("Çok") ? "selected" : ""}>Çok Acil (İfade / İcra / Tedbir Talebi)</option>
                </select>
              </div>
            </div>

            <div style="display:flex; flex-direction:column; gap:0.75rem;">
              <a href="https://wa.me/${OFFICE_INFO.phoneIntl}?text=${waText}" target="_blank" rel="noopener" class="btn btn-whatsapp" style="width:100%;">
                Analizi WhatsApp ile Av. Naile Hanım'a İlet
              </a>
              <button type="button" class="btn btn-primary" style="width:100%;" onclick="transferWizardToAppointment()">
                Bu Konu İçin Online Randevu Oluştur
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

window.selectWizardArea = function(areaKey) {
  wizardState.areaKey = areaKey;
  wizardState.step = 2;
  renderWizardStep();
};

window.selectWizardSub = function(subId, subTitle) {
  wizardState.subId = subId;
  wizardState.subTitle = subTitle;
  if (wizardState.areaKey === "yurtdisi") {
    wizardState.location = "Yurt Dışı (Avrupa / Gurbetçi Müvekkil)";
  }
  wizardState.step = 3;
  renderWizardStep();
};

window.setWizardStep = function(step) {
  wizardState.step = step;
  renderWizardStep();
};

window.updateWizardLocation = function(val) {
  wizardState.location = val;
  renderWizardStep();
};

window.updateWizardUrgency = function(val) {
  wizardState.urgency = val;
  renderWizardStep();
};

window.transferWizardToAppointment = function() {
  const topicSelect = document.getElementById("appt-topic");
  const notesInput = document.getElementById("appt-notes");
  if (topicSelect) {
    topicSelect.value = wizardState.subTitle;
  }
  if (notesInput) {
    notesInput.value = `Konu: ${wizardState.subTitle} | Konum: ${wizardState.location} | Durum: ${wizardState.urgency}`;
  }
  document.getElementById("iletisim-randevu")?.scrollIntoView({ behavior: "smooth" });
};

/* --------------------------------------------------------------------------
   INTERNATIONAL / EXPAT CONSULATE GUIDE
   -------------------------------------------------------------------------- */
function initConsulateGuide() {
  renderConsulateCountry("almanya");
}

window.renderConsulateCountry = function(countryKey) {
  const btns = document.querySelectorAll(".country-btn");
  btns.forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-country") === countryKey);
  });

  const data = CONSULATE_DATA[countryKey] || CONSULATE_DATA.almanya;
  const container = document.getElementById("consulate-guide-content");
  if (!container) return;

  container.innerHTML = `
    <h4>${data.country}</h4>
    <p style="font-size:0.86rem; color:var(--text-secondary); margin-bottom:1rem;">
      Resmi Randevu Sistemi: <strong style="color:var(--text-primary);">${data.appointmentUrl}</strong>
    </p>
    <div style="display:flex; flex-direction:column; gap:0.65rem; margin-bottom:1.35rem;">
      ${data.steps.map((step, idx) => `
        <div style="display:flex; align-items:flex-start; gap:0.75rem; font-size:0.88rem; color:var(--text-secondary);">
          <span style="min-width:22px; height:22px; border-radius:50%; background:var(--gold-subtle); border:1px solid var(--gold-border); color:var(--gold-400); display:inline-flex; align-items:center; justify-content:center; font-size:0.75rem; font-weight:700; margin-top:2px;">${idx + 1}</span>
          <span>${step}</span>
        </div>
      `).join("")}
    </div>
    <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
      <a href="https://wa.me/${OFFICE_INFO.phoneIntl}?text=${encodeURIComponent(`Merhaba Av. Naile Nur Hanım, ${data.country.split(' ')[0]} üzerinden konsolosluk vekaletnamesi ve hukuki süreç için vekalet bilgilerinizi rica ediyorum.`)}" target="_blank" rel="noopener" class="btn btn-primary" style="padding:0.7rem 1.25rem; font-size:0.84rem;">
        Vekaletname Bilgilerini WhatsApp'tan İste
      </a>
    </div>
  `;
};

/* --------------------------------------------------------------------------
   INTERACTIVE LEGAL CALCULATORS (3-TAB ENGINE)
   -------------------------------------------------------------------------- */
function initCalculators() {
  calculateRent();
  calculateSeverance();
  calculateInheritance();
}

window.switchCalculatorTab = function(tabId) {
  document.querySelectorAll(".calc-tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-calc") === tabId);
  });
  document.querySelectorAll(".calc-pane").forEach(pane => {
    pane.style.display = pane.id === `calc-pane-${tabId}` ? "grid" : "none";
  });
};

function formatTRY(num) {
  return new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 2 }).format(num);
}

// 1. Kira Artış & Tahliye Süresi Hesaplayıcı
window.calculateRent = function() {
  const currentRent = parseFloat(document.getElementById("rent-current")?.value) || 0;
  const tufeRate = parseFloat(document.getElementById("rent-tufe")?.value) || 0;
  const contractYears = parseInt(document.getElementById("rent-years")?.value) || 1;

  const increaseAmount = currentRent * (tufeRate / 100);
  const newRent = currentRent + increaseAmount;

  const outNew = document.getElementById("rent-out-new");
  const outInc = document.getElementById("rent-out-inc");
  const outNote = document.getElementById("rent-out-note");

  if (outNew) outNew.textContent = formatTRY(newRent);
  if (outInc) outInc.textContent = `+ ${formatTRY(increaseAmount)} (%${tufeRate.toFixed(2)})`;

  if (outNote) {
    if (contractYears >= 10) {
      outNote.innerHTML = `<strong style="color:var(--gold-400);">10 Yıllık Uzama Süresi:</strong> TBK m. 347 uyarınca 10 yıllık uzama süresi dolan kira sözleşmelerinde kiraya veren, yeni uzama yılının bitiminden en az 3 ay önce bildirimde bulunarak herhangi bir sebep göstermeksizin sözleşmeyi sona erdirebilir.`;
    } else if (contractYears >= 5) {
      outNote.innerHTML = `<strong style="color:var(--gold-400);">Kira Tespit Davası Hakkı (5+ Yıl):</strong> Kira sözleşmeniz 5 yılı doldurduğu için TBK m. 344/3 uyarınca yalnızca TÜFE oranıyla bağlı kalmaksızın, bölgedeki güncel emsal kira bedellerine göre <strong>Kira Tespit Davası</strong> açma hakkınız bulunmaktadır.`;
    } else {
      outNote.innerHTML = `<strong style="color:var(--gold-400);">Yasal TÜFE Tavanı (TBK m. 344):</strong> 5 yılın altındaki konut ve çatılı işyeri kiralarında yasal artış üst sınırı on iki aylık ortalama TÜFE değişim oranıdır. Yazılı tahliye taahhütnamesi veya ihtiyaç/temerrüt varsa tahliye süreci başlatılabilir.`;
    }
  }
};

// 2. Kıdem & İhbar Tazminatı Hesaplayıcı
window.calculateSeverance = function() {
  const years = parseFloat(document.getElementById("sev-years")?.value) || 0;
  const months = parseFloat(document.getElementById("sev-months")?.value) || 0;
  const grossWage = parseFloat(document.getElementById("sev-wage")?.value) || 0;

  const totalYears = years + (months / 12);
  const grossSeverance = totalYears >= 1 ? totalYears * grossWage : 0;
  const stampTax = grossSeverance * 0.00759; // Binde 7,59 damga vergisi
  const netSeverance = grossSeverance - stampTax;

  // İhbar süresi (hafta)
  const totalMonths = (years * 12) + months;
  let noticeWeeks = 2;
  if (totalMonths >= 6 && totalMonths < 18) noticeWeeks = 4;
  else if (totalMonths >= 18 && totalMonths < 36) noticeWeeks = 6;
  else if (totalMonths >= 36) noticeWeeks = 8;

  const dailyGross = grossWage / 30;
  const grossNotice = dailyGross * (noticeWeeks * 7);
  const netNotice = grossNotice * 0.84241; // Yaklaşık gelir + damga vergisi sonrası

  const outKidem = document.getElementById("sev-out-kidem");
  const outIhbar = document.getElementById("sev-out-ihbar");
  const outWeeks = document.getElementById("sev-out-weeks");
  const outTotal = document.getElementById("sev-out-total");

  if (outKidem) outKidem.textContent = formatTRY(netSeverance);
  if (outIhbar) outIhbar.textContent = formatTRY(netNotice);
  if (outWeeks) outWeeks.textContent = `${noticeWeeks} Hafta (${noticeWeeks * 7} Gün)`;
  if (outTotal) outTotal.textContent = formatTRY(netSeverance + netNotice);
};

// 3. Yasal Miras Payı Hesaplayıcı (TMK m. 495-499)
window.calculateInheritance = function() {
  const spouseAlive = document.getElementById("inh-spouse")?.value === "yes";
  const zumre = document.getElementById("inh-zumre")?.value || "1";
  const count = Math.max(1, parseInt(document.getElementById("inh-count")?.value) || 1);
  const estateValue = parseFloat(document.getElementById("inh-value")?.value) || 0;

  let spouseShare = 0;
  let relativesShare = 1;
  let explanation = "";

  if (spouseAlive) {
    if (zumre === "1") {
      spouseShare = 0.25; // 1/4 eş, 3/4 altsoy
      relativesShare = 0.75;
      explanation = "TMK m. 499/1 uyarınca sağ kalan eş, mirasbırakanın altsoyu (çocukları/torunları) ile birlikte mirasçı olursa mirasın 1/4'ü (%25) eşe, kalan 3/4'ü (%75) ise altsoy arasında eşit olarak paylaştırılır.";
    } else if (zumre === "2") {
      spouseShare = 0.50; // 1/2 eş, 1/2 anne-baba zümresi
      relativesShare = 0.50;
      explanation = "TMK m. 499/2 uyarınca altsoy bulunmadığında sağ kalan eş, anne ve baba zümresi ile birlikte mirasçı olursa mirasın 1/2'si (%50) eşe, kalan 1/2'si (%50) anne-baba veya kardeşlere kalır.";
    } else if (zumre === "3") {
      spouseShare = 0.75; // 3/4 eş, 1/4 büyükbaba-büyükanne
      relativesShare = 0.25;
      explanation = "TMK m. 499/3 uyarınca sağ kalan eş, büyükbaba ve büyükanne zümresi ile birlikte mirasçı olursa mirasın 3/4'ü (%75) eşe kalır.";
    } else {
      spouseShare = 1.0;
      relativesShare = 0;
      explanation = "İlk üç zümrede mirasçı bulunmadığından mirasın tamamı (%100) sağ kalan eşe kalır.";
    }
  } else {
    spouseShare = 0;
    relativesShare = 1.0;
    explanation = "Sağ kalan eş bulunmadığından terekenin tamamı (%100) ilgili zümredeki yasal mirasçılar arasında eşit paylaştırılır.";
  }

  const perHeirShare = relativesShare / count;
  const spouseAmount = estateValue * spouseShare;
  const perHeirAmount = estateValue * perHeirShare;

  const outSpouse = document.getElementById("inh-out-spouse");
  const outHeir = document.getElementById("inh-out-heir");
  const outExp = document.getElementById("inh-out-exp");

  if (outSpouse) {
    outSpouse.textContent = spouseAlive ? `%${(spouseShare * 100).toFixed(1)} (${formatTRY(spouseAmount)})` : "Yok (%0)";
  }
  if (outHeir) {
    outHeir.textContent = relativesShare > 0 ? `Kişi Başı %${(perHeirShare * 100).toFixed(2)} (${formatTRY(perHeirAmount)})` : "Pay Yok";
  }
  if (outExp) {
    outExp.textContent = explanation;
  }
};

/* --------------------------------------------------------------------------
   RENDER ARTICLES, REVIEWS & FAQS
   -------------------------------------------------------------------------- */
function renderArticles() {
  const grid = document.getElementById("articles-grid");
  if (!grid) return;

  grid.innerHTML = ARTICLES.map(art => `
    <article class="article-card" onclick="openArticleModal('${art.id}')" tabindex="0" role="button">
      <div>
        <div class="article-meta">
          <span>${art.category}</span>
          <span>•</span>
          <span>${art.readTime}</span>
        </div>
        <h3 class="article-title">${art.title}</h3>
        <p class="article-excerpt">${art.excerpt}</p>
      </div>
      <div class="practice-card-footer">
        <span>Makalenin Tamamını Oku</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M13 5l7 7-7 7"/>
        </svg>
      </div>
    </article>
  `).join("");
}

function renderReviews() {
  const grid = document.getElementById("reviews-grid");
  if (!grid) return;

  grid.innerHTML = REVIEWS.map(rev => `
    <div class="review-card ${rev.featured ? 'featured' : ''}">
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.85rem;">
          <div style="color:#fbbc04; font-size:0.95rem; letter-spacing:2px;">★★★★★ <span style="color:var(--text-primary); font-weight:700; font-size:0.82rem; margin-left:4px;">5/5</span></div>
          <span style="font-size:0.75rem; color:var(--text-muted);">${rev.time}</span>
        </div>
        <p class="review-text">"${rev.text}"</p>
      </div>
      <div class="review-author">
        <div style="display:flex; align-items:center; gap:0.75rem;">
          <div class="author-avatar">${rev.name.charAt(0).toUpperCase()}</div>
          <div>
            <div style="font-weight:600; font-size:0.92rem; color:var(--text-primary);">${rev.name}</div>
            <div style="font-size:0.75rem; color:var(--gold-400);">${rev.badge}</div>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

function renderFaqs() {
  const list = document.getElementById("faq-list");
  if (!list) return;

  list.innerHTML = FAQS.map((item, idx) => `
    <div class="faq-item ${idx === 0 ? 'open' : ''}">
      <button type="button" class="faq-trigger" onclick="toggleFaq(this)">
        <span>${item.q}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-answer" style="${idx === 0 ? 'max-height: 300px;' : ''}">
        <div class="faq-answer-inner">${item.a}</div>
      </div>
    </div>
  `).join("");
}

window.toggleFaq = function(btn) {
  const item = btn.closest(".faq-item");
  const answer = item.querySelector(".faq-answer");
  const isOpen = item.classList.contains("open");

  document.querySelectorAll(".faq-item").forEach(el => {
    el.classList.remove("open");
    const ans = el.querySelector(".faq-answer");
    if (ans) ans.style.maxHeight = null;
  });

  if (!isOpen) {
    item.classList.add("open");
    answer.style.maxHeight = answer.scrollHeight + "px";
  }
};

/* --------------------------------------------------------------------------
   APPOINTMENT SCHEDULER FORM
   -------------------------------------------------------------------------- */
let selectedApptMode = "Uşak Ofis (Yüz Yüze Görüşme)";

window.selectApptMode = function(el, modeName) {
  document.querySelectorAll(".mode-option").forEach(m => m.classList.remove("active"));
  el.classList.add("active");
  selectedApptMode = modeName;
};

function initAppointmentForm() {
  const form = document.getElementById("appointment-form");
  const dateInput = document.getElementById("appt-date");
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.value = tomorrow.toISOString().split("T")[0];
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("appt-name")?.value || "";
      const phone = document.getElementById("appt-phone")?.value || "";
      const topic = document.getElementById("appt-topic")?.value || "";
      const date = document.getElementById("appt-date")?.value || "";
      const time = document.getElementById("appt-time")?.value || "";
      const notes = document.getElementById("appt-notes")?.value || "";

      const refCode = "SVS-" + Math.floor(1000 + Math.random() * 9000);
      const waMsg = encodeURIComponent(
        `Merhaba Av. Naile Nur Hanım, web siteniz üzerinden randevu talebi oluşturdum.\n\n` +
        `• Referans Kodu: ${refCode}\n` +
        `• Ad Soyad: ${name}\n` +
        `• Telefon: ${phone}\n` +
        `• Görüşme Türü: ${selectedApptMode}\n` +
        `• Hukuki Konu: ${topic}\n` +
        `• Tercih Edilen Tarih/Saat: ${date} - ${time}\n` +
        `• Dosya Özeti: ${notes || "Belirtilmedi"}`
      );

      const feedback = document.getElementById("appt-feedback");
      if (feedback) {
        feedback.style.display = "block";
        feedback.innerHTML = `
          <div style="background:var(--success-bg); border:1px solid var(--success); border-radius:var(--radius-sm); padding:1.25rem; margin-top:1rem;">
            <div style="font-weight:700; color:var(--text-primary); margin-bottom:0.35rem;">
              ✓ Randevu Talebiniz Hazırlandı (Ref: ${refCode})
            </div>
            <p style="font-size:0.86rem; color:var(--text-secondary); margin-bottom:1rem;">
              Randevunuzun anında onaylanması için aşağıdaki butonla talebinizi doğrudan WhatsApp hattımıza veya e-posta adresimize iletebilirsiniz.
            </p>
            <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
              <a href="https://wa.me/${OFFICE_INFO.phoneIntl}?text=${waMsg}" target="_blank" rel="noopener" class="btn btn-whatsapp" style="padding:0.65rem 1.2rem; font-size:0.84rem;">
                WhatsApp ile Hemen Gönder (0542 587 77 22)
              </a>
              <a href="mailto:${OFFICE_INFO.email}?subject=${encodeURIComponent('Randevu Talebi - ' + refCode)}&body=${waMsg}" class="btn btn-secondary" style="padding:0.65rem 1.2rem; font-size:0.84rem;">
                E-Posta Olarak Gönder
              </a>
            </div>
          </div>
        `;
      }
    });
  }
}

/* --------------------------------------------------------------------------
   MODALS (PRACTICE DETAIL, ARTICLE READER, CAREER APPLICATION)
   -------------------------------------------------------------------------- */
function initModals() {
  const backdrop = document.getElementById("universal-modal");
  if (!backdrop) return;

  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

window.closeModal = function() {
  const backdrop = document.getElementById("universal-modal");
  if (backdrop) backdrop.classList.remove("active");
};

window.openPracticeModal = function(areaId) {
  const area = PRACTICE_AREAS.find(a => a.id === areaId);
  if (!area) return;

  const titleEl = document.getElementById("modal-title");
  const bodyEl = document.getElementById("modal-body");
  const backdrop = document.getElementById("universal-modal");

  if (titleEl) titleEl.textContent = area.title;
  if (bodyEl) {
    const waText = encodeURIComponent(`Merhaba Av. Naile Nur Hanım, "${area.title}" alanında hukuki danışmanlık almak istiyorum.`);
    bodyEl.innerHTML = `
      <div style="margin-bottom:1.5rem;">
        <span style="font-size:0.76rem; color:var(--gold-400); text-transform:uppercase; letter-spacing:0.1em; font-weight:600;">Görevli Mahkeme & Yargı Yolu: ${area.court}</span>
        <p style="font-size:0.98rem; color:var(--text-secondary); margin-top:0.5rem; line-height:1.7;">${area.shortDesc}</p>
      </div>

      <h4 style="font-family:var(--font-serif); font-size:1.35rem; color:var(--gold-400); margin-bottom:0.85rem;">Sunulan Hukuki Hizmetler</h4>
      <div style="margin-bottom:1.75rem;">
        ${area.services.map(s => `
          <div class="checklist-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            <span>${s}</span>
          </div>
        `).join("")}
      </div>

      <h4 style="font-family:var(--font-serif); font-size:1.35rem; color:var(--gold-400); margin-bottom:0.85rem;">Gerekli Bilgi ve Belgeler</h4>
      <div style="margin-bottom:1.75rem;">
        ${area.documents.map(d => `
          <div class="checklist-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            <span>${d}</span>
          </div>
        `).join("")}
      </div>

      <div style="background:var(--bg-elevated); border-left:3px solid var(--gold-400); padding:1.15rem 1.35rem; margin-bottom:1.75rem; font-size:0.9rem; color:var(--text-secondary);">
        <strong style="color:var(--text-primary);">Hukuki Süreç Notu:</strong> ${area.processNote}
      </div>

      <div style="display:flex; gap:1rem; flex-wrap:wrap;">
        <a href="https://wa.me/${OFFICE_INFO.phoneIntl}?text=${waText}" target="_blank" rel="noopener" class="btn btn-whatsapp">
          WhatsApp ile Danışmanlık Al
        </a>
        <a href="#iletisim-randevu" onclick="closeModal()" class="btn btn-primary">
          Online Randevu Oluştur
        </a>
      </div>
    `;
  }

  if (backdrop) backdrop.classList.add("active");
};

window.openArticleModal = function(artId) {
  const art = ARTICLES.find(a => a.id === artId);
  if (!art) return;

  const titleEl = document.getElementById("modal-title");
  const bodyEl = document.getElementById("modal-body");
  const backdrop = document.getElementById("universal-modal");

  if (titleEl) titleEl.textContent = art.title;
  if (bodyEl) {
    bodyEl.innerHTML = `
      <div class="article-meta" style="margin-bottom:1.25rem;">
        <span>${art.category}</span>
        <span>•</span>
        <span>Yazar: Av. Naile Nur SAVAŞ YILDIRIM</span>
        <span>•</span>
        <span>${art.readTime}</span>
      </div>
      <div style="font-size:0.96rem; color:var(--text-secondary); line-height:1.8;">
        ${art.content}
      </div>
      <div style="margin-top:2rem; padding-top:1.5rem; border-top:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
        <span style="font-size:0.82rem; color:var(--text-muted);">Bu makale bilgilendirme amaçlı olup somut olayınıza ilişkin hukuki danışmanlık yerine geçmez.</span>
        <a href="#iletisim-randevu" onclick="closeModal()" class="btn btn-primary">Bu Konuda Danışmanlık Al</a>
      </div>
    `;
  }

  if (backdrop) backdrop.classList.add("active");
};

window.openCareerModal = function() {
  const titleEl = document.getElementById("modal-title");
  const bodyEl = document.getElementById("modal-body");
  const backdrop = document.getElementById("universal-modal");

  if (titleEl) titleEl.textContent = "Kariyer & Staj Başvurusu — Savaş Hukuk Bürosu";
  if (bodyEl) {
    bodyEl.innerHTML = `
      <p style="font-size:0.95rem; color:var(--text-secondary); margin-bottom:1.5rem; line-height:1.7;">
        <strong>Savaş Hukuk & Danışmanlık Bürosu</strong> bünyesinde Uşak Merkez ofisimizde görevlendirilmek üzere <strong>Stajyer Avukat</strong> ve <strong>Hukuk Bürosu Yönetici Asistanı</strong> pozisyonları için başvurular kabul edilmektedir.
      </p>
      <div style="background:var(--bg-elevated); border:1px solid var(--gold-border); border-radius:var(--radius-sm); padding:1.5rem; margin-bottom:1.5rem;">
        <h4 style="font-family:var(--font-serif); font-size:1.25rem; color:var(--gold-400); margin-bottom:0.65rem;">Başvuru Koşulları ve Süreç</h4>
        <div class="checklist-item">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          <span>Başvuruların değerlendirme sürecine alınabilmesi için adayların güncel fotoğraflı özgeçmişlerini (CV) <strong>av.nailesavas@gmail.com</strong> adresine iletmeleri rica olunur.</span>
        </div>
        <div class="checklist-item">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          <span>UYAP, MS Office programları ve kurumsal müvekkil iletişimi süreçlerine hakimiyet tercih sebebidir.</span>
        </div>
      </div>
      <div style="display:flex; gap:1rem; flex-wrap:wrap;">
        <a href="mailto:${OFFICE_INFO.email}?subject=${encodeURIComponent('İş / Staj Başvurusu - Savaş Hukuk & Danışmanlık Bürosu')}" class="btn btn-primary">
          av.nailesavas@gmail.com Adresine CV Gönder
        </a>
      </div>
    `;
  }

  if (backdrop) backdrop.classList.add("active");
};
