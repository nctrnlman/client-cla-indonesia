/* eslint-env node */

import fs from "fs";
import path from "path";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

const pages = [
  { url: "/", changefreq: "monthly", priority: 1.0 },
  { url: "/legal-associate", changefreq: "monthly", priority: 0.8 },
  { url: "/legal-training", changefreq: "monthly", priority: 0.8 },
  {
    url: "/other-service/perseroan-terbatas",
    changefreq: "monthly",
    priority: 0.5,
  },
  { url: "/other-service/pt-perorangan", changefreq: "monthly", priority: 0.5 },
  { url: "/other-service/pt-pma", changefreq: "monthly", priority: 0.5 },
  {
    url: "/other-service/cv-commanditaire-venootschap",
    changefreq: "monthly",
    priority: 0.5,
  },
  { url: "/other-service/firma", changefreq: "monthly", priority: 0.5 },
  {
    url: "/other-service/persekutuan-perdata",
    changefreq: "monthly",
    priority: 0.5,
  },
  { url: "/other-service/perkumpulan", changefreq: "monthly", priority: 0.5 },
  { url: "/other-service/yayasan", changefreq: "monthly", priority: 0.5 },
  {
    url: "/other-service/nomor-induk-berusaha-nib",
    changefreq: "monthly",
    priority: 0.5,
  },
  { url: "/other-service/izin-restoran", changefreq: "monthly", priority: 0.5 },
  {
    url: "/other-service/izin-konstruksi",
    changefreq: "monthly",
    priority: 0.5,
  },
  { url: "/other-service/izin-k3l", changefreq: "monthly", priority: 0.5 },
  { url: "/other-service/izin-yayasan", changefreq: "monthly", priority: 0.5 },
  { url: "/other-service/kitas-pekerja", changefreq: "monthly", priority: 0.5 },
  {
    url: "/other-service/kitas-investor",
    changefreq: "monthly",
    priority: 0.5,
  },
  {
    url: "/other-service/surat-tanda-pendaftaran-agen-distributor",
    changefreq: "monthly",
    priority: 0.5,
  },
  {
    url: "/other-service/sertifikat-laik-fungsi",
    changefreq: "monthly",
    priority: 0.5,
  },
  {
    url: "/other-service/analisis-dampak-lalu-lintas",
    changefreq: "monthly",
    priority: 0.5,
  },
  {
    url: "/other-service/persetujuan-bangunan-gedung",
    changefreq: "monthly",
    priority: 0.5,
  },
  {
    url: "/other-service/perjanjian-pisah-harta",
    changefreq: "monthly",
    priority: 0.5,
  },
  {
    url: "/other-service/pendaftaran-merek",
    changefreq: "monthly",
    priority: 0.5,
  },
  {
    url: "/other-service/likuidasi-perusahaan",
    changefreq: "monthly",
    priority: 0.5,
  },
  { url: "/other-service/legal-opinion", changefreq: "monthly", priority: 0.5 },
  {
    url: "/other-service/legal-research",
    changefreq: "monthly",
    priority: 0.5,
  },
  {
    url: "/other-service/perubahan-anggaran-dasar",
    changefreq: "monthly",
    priority: 0.5,
  },
  {
    url: "/other-service/penutupan-perusahaan",
    changefreq: "monthly",
    priority: 0.5,
  },
  {
    url: "/other-service/lainnya-virtual-office",
    changefreq: "monthly",
    priority: 0.5,
  },
  {
    url: "/other-service/riset-pasar-dan-pengembangan-bisnis",
    changefreq: "monthly",
    priority: 0.5,
  },
  {
    url: "/other-service/fat-pelaporan-tahunan-spt-badan",
    changefreq: "monthly",
    priority: 0.5,
  },
  {
    url: "/other-service/fat-pelaporan-tahunan-spt-masa",
    changefreq: "monthly",
    priority: 0.5,
  },
  {
    url: "/other-service/fat-pengukuhan-pkp-dan-aktivasi-akun-pkp",
    changefreq: "monthly",
    priority: 0.5,
  },
  {
    url: "/other-service/fat-pembuatan-npwp-dan-aktivasi-efin",
    changefreq: "monthly",
    priority: 0.5,
  },
  {
    url: "/other-service/fat-pembukuan-jurnal-buku-besar-dan-laporan-keuangan",
    changefreq: "monthly",
    priority: 0.5,
  },
  { url: "/other-services", changefreq: "monthly", priority: 0.5 },
];

const getCurrentDate = () => {
  const date = new Date();
  return date.toISOString();
};

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: "https://claindonesia.com" });

  const readable = Readable.from(
    pages.map((page) => ({
      ...page,
      lastmod: getCurrentDate(),
    }))
  );

  readable.pipe(sitemap);

  const xml = await streamToPromise(sitemap);

  const __filename = new URL(import.meta.url).pathname;
  const __dirname = path.dirname(__filename);

  const sitemapPath = path.resolve(__dirname, "..", "dist", "sitemap.xml");

  const distDir = path.dirname(sitemapPath);
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  fs.writeFileSync(sitemapPath, xml);

  console.log(`Sitemap generated successfully with ${pages.length} pages!`);
};

generateSitemap().catch((err) => {
  console.error("Error generating sitemap:", err);
});
