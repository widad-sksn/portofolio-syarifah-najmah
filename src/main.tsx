import React,{createContext,useContext,useEffect,useRef,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {motion,MotionConfig} from 'framer-motion';
import './style.css';

type Pair=[string,string];
const Language=createContext({en:false,t:(id:string,en:string)=>id});
function useLanguage(){return useContext(Language)}
const categories:Pair[]=[['Semua','All'],['Mobile & IoT','Mobile & IoT'],['Data & AI','Data & AI'],['Sistem & aplikasi','Systems & apps']];
type Project={name:string;group:number;photo?:string;copy:Pair;tech:string;link?:string};
type Publication = {
  title: string;
  authors: string;
  journal: string;
  year: string;
  volume: string;
  description: Pair;
  doi: string;
  link: string;
  methods: string;
};
const projects:Project[]=[
{name:'GENIO CCTV',group:1,photo:'genio',copy:['Pengembangan aplikasi pemantauan CCTV berbasis Flutter saat magang di DataIns.','Contributed to a Flutter CCTV monitoring app during an internship at DataIns.'],tech:'Flutter · Dart · Android Studio',link:'https://github.com/nisaafry25/Genio'},
{name:'Data Visualization & Analytics',group:2,photo:'data',copy:['Eksplorasi pola data melalui dashboard Tableau dan pemodelan regresi dengan Python.','Explored data patterns through Tableau dashboards and regression modeling in Python.'],tech:'Tableau · Python · Looker Studio',link:'https://public.tableau.com/views/projeksari/Dashboard3'},
{name:'E-Partograph',group:3,photo:'partograph',copy:['Rancangan alur pemantauan persalinan dan integrasi partograf dengan rekam medis elektronik.','A design for labor monitoring and partograph integration with electronic medical records.'],tech:'UI/UX · Figma'},
{name:'Health Nav',group:3,photo:'health',copy:['Desain platform wisata kesehatan untuk pendaftaran pemeriksaan dan informasi fasilitas.','A health tourism platform design for check-up registration and facility discovery.'],tech:'Figma · UI/UX'},
{name:'Labyrinth Treasure',group:3,photo:'maze',copy:['Game labirin berbasis C yang mengeksplorasi navigasi dan pencarian jalur.','A C maze game exploring navigation and pathfinding.'],tech:'C · Algorithms'},
{name:'Medical Record Management',group:3,photo:'records',copy:['Proyek aplikasi desktop untuk pengelolaan data pasien dan rekam medis.','A desktop project for managing patient data and medical records.'],tech:'Java · GUI · MySQL'},
{name:'Environmental Monitoring',group:1, photo:'iot',copy:['Pemantauan kondisi lingkungan menggunakan sensor dan mikrokontroler ESP32.','Environmental monitoring with sensors and an ESP32 microcontroller.'],tech:'ESP32 · IoT'}];
const skills=[['Programming','Python · Dart · Java · C/C++ · SQL · HTML/CSS · JavaScript'],['Data & AI','Tableau · Looker Studio · Machine Learning · Python'],['Mobile & Tools','Flutter · Android Studio · ESP32 · Git · Figma · VirtualBox · Cisco Packet Tracer · Canva']];
const links={Email:'mailto:syarifahnajmah02@gmail.com',WhatsApp:'https://wa.me/6282235295245',LinkedIn:'https://www.linkedin.com/in/syarifah-najmah',GitHub:'https://github.com/syarfhh'};
const nav=[['about','Profil','About'],['skills','Keahlian','Skills'],['projects','Proyek','Projects'],['experience','Pengalaman','Experience'], ['publications', 'Publikasi', 'Publications'], ['awards','Prestasi','Awards'],['contact','Kontak','Contact']];
const pic=(name:string)=>'./assets/'+name;
function FrameButterfly({className}:{className:string}){
 return <svg className={`frame-butterfly ${className}`} viewBox="0 0 64 64" aria-hidden="true">
  <g className="butterfly-wings">
   <path d="M30 31C23 23 14 7 7 10C-1 13 5 30 28 35Z"/>
   <path d="M29 36C20 32 11 35 13 44C15 53 24 52 31 39Z"/>
  </g>
  <g className="butterfly-wings" transform="translate(64 0) scale(-1 1)">
   <path d="M30 31C23 23 14 7 7 10C-1 13 5 30 28 35Z"/>
   <path d="M29 36C20 32 11 35 13 44C15 53 24 52 31 39Z"/>
  </g>
  <path className="butterfly-body" d="M32 24C28 31 29 42 32 49C35 42 36 31 32 24Z"/>
  <path className="butterfly-antennae" d="M31 27C27 20 23 18 20 19M33 27C37 20 41 18 44 19"/>
  <circle className="butterfly-spot" cx="15" cy="21" r="2"/>
  <circle className="butterfly-spot" cx="49" cy="21" r="2"/>
 </svg>;
}
function Site(){
 const {en,t}=useLanguage();const [filter,F]=useState(0),[skill,S]=useState(-1),[org,O]=useState(false),[menu,M]=useState(false),[award,A]=useState(0),[name,N]=useState(''),[message,Q]=useState('');const modal=useRef<HTMLDialogElement>(null);
 useEffect(()=>{
  const elements=document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if(!('IntersectionObserver' in window)){
   elements.forEach(element=>element.classList.add('show'));
   return;
  }
  const observer=new IntersectionObserver(entries=>{
   entries.forEach(entry=>{
    if(entry.isIntersecting){
     entry.target.classList.add('show');
     observer.unobserve(entry.target);
    }
   });
  },{threshold:0.15,rootMargin:'0px 0px -40px 0px'});
  elements.forEach(element=>observer.observe(element));
  return ()=>observer.disconnect();
 },[filter,skill,org]);
 const title=t('Portofolio Teknologi Informasi','Information Technology Portfolio');
 const publications: Publication[] = [
    {
    title:
      'Implementation of Production Flow Based on Good Manufacturing Practices (GMP) to Improve Product Quality at UMKM Estu SAE',
    authors:
      'Nosa Septiana Anindita, Arif Bimantara, Zahra Arwananing Tyas, Dimas Rizki Setyaji, Syarifah Najmah, Sindy Putri Yoseva, Nurrohmah Dwi Mahesti',
    journal: 'Jurnal Dimas Budi',
    year: '2024',
    volume: 'Vol. 8, No. 2',
    description: [
      'Penelitian ini membahas penerapan alur produksi berbasis Good Manufacturing Practices (GMP) untuk meningkatkan kualitas produk UMKM Estu SAE melalui perancangan alur produksi, pelatihan, sanitasi, dan penerapan standar kebersihan.',
      'This study discusses the implementation of a Good Manufacturing Practices (GMP)-based production flow to improve product quality at UMKM Estu SAE through production flow design, training, sanitation, and hygiene standard implementation.'
    ],
    doi: '10.31001/dimasbudi.v8i2.2536',
    link: 'https://doi.org/10.36085/bumir.v8i3.8657',
    methods: 'Good Manufacturing Practices · Production Flow · Quality Control'
  },
  {
    title:
      'Analysis of Social Factors Influencing Drug Use Attempts Using Exploratory Data Analysis (EDA) and Linear Regression',
    authors: 'Esi Putri Silmina, Syarifah Najmah',
    journal: 'Journal of Information Technology (JIfoTech)',
    year: '2025',
    volume: 'Vol. 5, No. 1',
    description: [
      'Penelitian mengenai faktor sosial yang memengaruhi percobaan penggunaan narkoba melalui eksplorasi data dan pemodelan regresi linear. Hasil analisis divisualisasikan menggunakan Tableau.',
      'Research on social factors influencing drug experimentation through exploratory data analysis and linear regression modeling. The findings are visualized using Tableau.'
    ],
    doi: '10.46229/jifotech.v5i1.967',
    link: 'https://doi.org/10.46229/jifotech.v5i1.967',
    methods: 'EDA · Linear Regression · Python · Tableau'
  },
  {
    title:
      'Analisis Forensik Jejak Aktivitas Pengguna pada Google Chrome Menggunakan Metode NIST',
    authors: 'Syarifah Najmah, Arizona Firdonsyah',
    journal: 'INFORMAL Informatics Journal',
    year: '2026',
    volume: 'Vol. 10, No. 1, pp. 30–38',
    description: [
      'Penelitian mengenai analisis forensik jejak aktivitas pengguna pada browser Google Chrome menggunakan metode NIST.',
      'Research on forensic analysis of user activity traces in Google Chrome using the NIST methodology.'
    ],
    doi: '10.19184/informal.v10i1.219',
    link: 'https://doi.org/10.19184/informal.v10i1.219',
    methods: 'Digital Forensics · Browser Forensics · NIST'
  }
];
 const medal=[t('Medali perak · Pemrograman','Silver medal · Programming'),t('Medali perunggu · Pemrograman game','Bronze medal · Game programming')];
 const btn=(value:number,label:string,current:number,action:(v:number)=>void)=><button key={value} aria-pressed={current===value} onClick={()=>action(value)}>{label}</button>;
 return <><header><a className="mark" href="#top">SN<span>.</span></a><button className="menub" aria-expanded={menu} onClick={()=>M(!menu)}>Menu</button><nav className={menu?'open':''}>{nav.map(([id,i,e])=><a key={id} onClick={()=>M(false)} href={'#'+id}>{t(i,e)}</a>)}</nav><Switch/><a className="cv" download href={pic('cv.pdf')}>CV ↓</a></header>
 <main id="top"><div className="page-butterflies" aria-hidden="true">{Array.from({length:9},(_,i)=><span className="butterfly" key={i}><i/></span>)}</div><section className="hero reveal"><motion.div initial={{y:10}} animate={{y:0}}><p className="eyebrow">{title}</p><h1>Syarifah<br/><em>Najmah.</em></h1><h3>{t('Fokus karier','Career interests')} · Data Analyst / System Analyst / Quality Assurance</h3><p>{t('Saya mengolah data menjadi insight yang bermakna dan menerjemahkan kebutuhan pengguna menjadi solusi sistem yang terstruktur. Saya memiliki pengalaman dalam visualisasi data, pengembangan aplikasi, serta dokumentasi dan pengujian sistem.','I transform data into meaningful insights and translate user needs into structured system solutions. I have experience in data visualization, application development, and system documentation and testing.')}</p><div className="actions"><a className="primary" href="#projects">{t('Lihat proyek','View projects')} ↗</a><a href="#contact">{t('Hubungi saya','Contact me')} →</a></div><p className="social">{['LinkedIn','GitHub'].map(k=><a key={k} href={links[k]}>{k} ↗ </a>)}</p></motion.div><figure><div className="sparkles" aria-hidden="true">{Array.from({length:14},(_,i)=><span key={i}/>)}</div><div className="frame-butterflies" aria-hidden="true"><FrameButterfly className="frame-butterfly--top"/><FrameButterfly className="frame-butterfly--left"/><FrameButterfly className="frame-butterfly--right"/></div><img src={pic('sari.webp')} alt="Syarifah Najmah"/><figcaption>Dompu / Yogyakarta, Indonesia</figcaption></figure></section>

<section id="about" className="reveal">
  <h2>{t('Tentang saya', 'About me')}</h2>

 <p className="intro">
  {t(
    'Saya Syarifah Najmah, mahasiswa S1 Teknologi Informasi di Universitas Aisyiyah Yogyakarta yang memiliki ketertarikan pada Data Analytics, System Analysis, dan Software Quality Assurance.',
    'I am Syarifah Najmah, an undergraduate Information Technology student at Aisyiyah University Yogyakarta, with interests in Data Analytics, System Analysis, and Software Quality Assurance.'
  )}
</p>

<p>
  {t(
    'Saya memiliki pengalaman sebagai Data Analyst Intern di PT Global Data Inspirasi (DataIns), dengan keterlibatan dalam pengolahan dan analisis data, pembuatan dashboard interaktif menggunakan Tableau, serta pengembangan aplikasi GENIO CCTV menggunakan Flutter dan Dart. Saya juga berkontribusi dalam proyek Health Nav yang berfokus pada perancangan alur aplikasi kesehatan digital dan identifikasi kebutuhan pengguna.',
    'I have experience as a Data Analyst Intern at PT Global Data Inspirasi (DataIns), working on data processing and analysis, interactive Tableau dashboards, and the development of the GENIO CCTV application using Flutter and Dart. I also contributed to Health Nav, focusing on digital healthcare application workflows and user requirements.'
  )}
</p>

<p>
  {t(
    'Selain pengalaman tersebut, saya memiliki pengalaman di bidang Health, Safety, and Environment (HSE), khususnya dalam pengelolaan dokumentasi, pembaruan basis data, penyusunan laporan, dan koordinasi administrasi. Saya juga memiliki pengalaman organisasi yang membantu mengembangkan kemampuan komunikasi, kepemimpinan, dan kerja sama tim.',
    'In addition, my experience in Health, Safety, and Environment (HSE) has strengthened my skills in documentation management, database updates, reporting, and administrative coordination. My organizational experience has also helped develop my communication, leadership, and teamwork skills.'
  )}
</p>

<p>
  {t(
    'Saya ingin terus mengembangkan kemampuan dalam analisis data, perancangan sistem informasi, dan pengujian perangkat lunak serta berkontribusi dalam menciptakan solusi teknologi yang efektif, terstruktur, dan berorientasi pada kebutuhan pengguna.',
    'I aim to continue developing my skills in data analytics, information system design, and software testing while contributing to effective, structured, and user-centered technology solutions.'
  )}
</p>
</section>
 <section id="skills" className="reveal"><h2>{t('Keahlian','Skills')}</h2><div className="tabs">{btn(-1,t('Semua','All'),skill,S)}{skills.map(([k],i)=>btn(i,k,skill,S))}</div><div className="grid">{skills.map(([k,v],i)=>(skill<0||skill===i)&&<article className="reveal" key={k}><h3>{k}</h3><p>{v}</p></article>)}</div></section>
 <section id="projects" className="reveal"><h2>{t('Proyek pilihan','Selected projects')}</h2><div className="tabs">{categories.map((c,i)=>btn(i,t(...c),filter,F))}</div><div className="grid">{projects.filter(p=>!filter||p.group===filter).map(p=><article className="reveal" key={p.name}>{p.photo&&<img className="project-img" loading="lazy" src={pic(p.photo+'.webp')} alt={p.name}/>}<small>{p.tech}</small><h3>{p.name}</h3><p>{t(...p.copy)}</p>{p.link&&<a href={p.link}>{p.group===2?'Tableau Public':'GitHub'} ↗</a>}</article>)}</div></section>
 <section id="experience" className="reveal"><h2>{t('Pengalaman kerja dan organisasi','Work experience and leadership')}</h2><div className="tabs">{btn(0,t('Pengalaman kerja','Work experience'),Number(org),x=>O(!!x))}{btn(1,t('Organisasi','Leadership'),Number(org),x=>O(!!x))}</div>{org?<ul><li>BEM KM UNISA · {t('Staf Muda Kemenporsa dan Dirjen Pendidikan','Kemenporsa staff and education director')}</li><li>ITECH UNISA · {t('Ketua Divisi ASBO','Head of ASBO division')}</li><li>UNISA Mengajar · {t('Ketua pelaksana','Program lead')} · 2024</li><li>Dapor Cup · {t('Bendahara','Treasurer')} · 2023</li><li>{t('Tim akreditasi Teknologi Informasi dan kepanitiaan EITS serta MATAF.','IT accreditation team and EITS and MATAF event committees.')}</li></ul>:<div className="grid gap-4" style={{gridTemplateColumns:"1fr"}}>
   <article className="work reveal">
     <small>{t("Juni 2026 – Desember 2026","June 2026 – December 2026")}</small>
     <h3>Administrator – Health, Safety &amp; Environment (HSE) · PT Sukses Mantap Sejahtera</h3>
     <ul>
       <li>{t("Mengarsipkan, mendata, dan memperbarui dokumen Departemen HSE.", "File, catalogue, and update departmental HSE documents.")}</li>
       <li>{t("Merekap laporan keselamatan kerja, hasil inspeksi, dan data pemantauan lingkungan.", "Compile workplace safety reports, inspection findings, and environmental monitoring data.")}</li>
       <li>{t("Membantu menyusun laporan rutin untuk dokumentasi dan evaluasi kinerja departemen.", "Help prepare recurring reports to document activities and review departmental performance.")}</li>
       <li>{t("Memasukkan dan memperbarui data dalam basis data HSE agar catatan akurat dan tersedia saat dibutuhkan.", "Maintain the HSE database so records are accurate and available when needed.")}</li>
       <li>{t("Menyiapkan dokumen pendukung untuk inspeksi, audit, dan evaluasi sistem manajemen K3 dan lingkungan.", "Prepare supporting documents for inspections, audits, and reviews of occupational health, safety, and environmental management systems.")}</li>
       <li>{t("Berkoordinasi dengan departemen terkait untuk mengumpulkan data dan melengkapi dokumen HSE.", "Coordinate with other departments to collect data and complete HSE documentation.")}</li>
       <li>{t("Mengelola surat-menyurat, mendokumentasikan kegiatan, dan mendukung administrasi operasional HSE.", "Handle correspondence, document activities, and provide administrative support for HSE operations.")}</li>
     </ul>
   </article>
   <article className="work reveal">
   <small>{t('Oktober 2024 – Januari 2025','October 2024 – January 2025')}</small>
   <h3>Data Analyst Intern · PT Global Data Inspirasi (DataIns)</h3>
   <ul>
     <li>{t('Mengolah dan menganalisis data untuk mengidentifikasi temuan bisnis, lalu bekerja sama dengan tim untuk menyusun strategi berdasarkan hasil analisis.', 'Processed and analyzed data to identify business insights and collaborated with the team to develop strategies based on the findings.')}</li>
     <li>{t('Berkontribusi pada dashboard Tableau dan menyusun visualisasi interaktif dengan Tableau, Figma, serta Looker Studio.', 'Contributed to Tableau dashboards and prepared interactive visualizations using Tableau, Figma, and Looker Studio.')}</li>
     <li>{t('Ikut mengembangkan GENIO CCTV, aplikasi pemantauan kamera berbasis Flutter dan Dart, menggunakan Android Studio.', 'Helped develop GENIO CCTV, a camera monitoring app built with Flutter and Dart in Android Studio.')}</li>
   </ul>
   <a href={pic('magangdatains.JPG')} target="_blank" rel="noopener noreferrer">{t('Lihat sertifikat magang','View internship certificate')} ↗</a>
 </article></div>}</section>
 <section id="publications" className="reveal">
  <h2>{t('Publikasi ilmiah', 'Scientific publications')}</h2>

  <p className="intro">
    {t(
      'Kontribusi penelitian ilmiah dalam bidang analisis data dan teknologi informasi.',
      'Research contributions in data analytics and information technology.'
    )}
  </p>

  <div className="grid">
    {publications.map((publication, index) => (
      <article className="publication reveal" key={publication.doi}>
        <small>
          {t('Publikasi ilmiah', 'Research publication')} · 0{index + 1}
        </small>

        <h3>{publication.title}</h3>

        <p>{publication.authors}</p>

        <p>
          <strong>{publication.journal}</strong>
          <br />
          {publication.volume} · {publication.year}
        </p>

        <p>{t(...publication.description)}</p>

        <small>{publication.methods}</small>

        <p>
          <strong>DOI:</strong> {publication.doi}
        </p>

        <a
          href={publication.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('Baca publikasi', 'Read publication')} ↗
        </a>
      </article>
    ))}
  </div>
</section>
 <section id="awards" className="reveal"><h2>{t('Penghargaan','Honors & awards')}</h2><div className="awards">{medal.map((m,i)=><article className={`reveal reveal-delay-${i+1}`} key={i}><small>{i?'APSI PTMA · Mataram · 2022':'KMM AST-PTMA · Bukittinggi · 2023'}</small><h3>{m}</h3><button onClick={()=>{A(i);modal.current?.showModal()}}>{t('Lihat sertifikat','View certificate')} ↗</button></article>)}<article className="reveal reveal-delay-3"><small>Universitas Aisyiyah Yogyakarta</small><h3>{t('Mahasiswa Berprestasi','Outstanding Student')}</h3><p>{t('IPK 3,87 · Lulus dalam 3,5 tahun','GPA 3.87 · Graduated in 3.5 years')}</p><small>{t('Sertifikat akan ditambahkan','Certificate to be added')}</small></article></div><dialog ref={modal}><button onClick={()=>modal.current?.close()}>{t('Tutup','Close')} ×</button><img src={pic(award?'perunggu.jpg':'silver.jpg')} alt={medal[award]}/></dialog></section>
 <section id="contact" className="reveal"><h2>{t('Mari terhubung','Get in touch')}</h2><div className="contact"><div>{Object.entries(links).map(([k,v])=><p key={k}><a href={v}>{k} ↗</a></p>)}</div><form onSubmit={e=>{e.preventDefault();window.open(links.WhatsApp+'?text='+encodeURIComponent(t('Halo Sari, saya ','Hi Sari, I’m ')+name.trim()+'. '+message.trim()),'_blank','noopener,noreferrer')}}><label>{t('Nama','Name')}<input required value={name} onChange={e=>N(e.target.value)}/></label><label>{t('Pesan','Message')}<textarea required value={message} onChange={e=>Q(e.target.value)}/></label><button className="primary">{t('Buka pesan di WhatsApp','Open message in WhatsApp')} ↗</button></form></div></section></main><footer>© Syarifah Najmah · {t('Dibuat dengan sepenuh hati','Crafted with passion & elegance')}</footer></>
}
const Toggle=createContext(()=>{});function Switch(){const {en}=useLanguage();return <button className="lang" onClick={useContext(Toggle)} aria-label={en?'Switch to Indonesian':'Switch to English'}><b>{en?'EN':'ID'}</b> / {en?'ID':'EN'}</button>}
function App(){const [en,set]=useState(localStorage.getItem('lang')==='en');useEffect(()=>{document.documentElement.lang=en?'en':'id';localStorage.setItem('lang',en?'en':'id')},[en]);return <Language.Provider value={{en,t:(i,e)=>en?e:i}}><Toggle.Provider value={()=>set(!en)}><MotionConfig reducedMotion="user"><Site/></MotionConfig></Toggle.Provider></Language.Provider>}
createRoot(document.getElementById('root')!).render(<App/>)
