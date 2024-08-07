const servicesData = [
  {
    category: "LEGALITY",
    items: [
      {
        name: "PT / Perseroan Terbatas",
        slug: "pt-perseroan-terbatas",
        package: {
          title: "Pendirian PT Standard (PMDN)",
          description:
            "Elevate your business's legal journey with our Legal Associate as your trusted partner. We provide legal assistance tailored to your company's needs and type. Our innovative solutions",
          price: "3.500.000",
          fakePrice: "7.500.000",
          features: [
            "Konsultasi",
            "Penelusuran nama PT",
            "Surat Keputusan Pendirian PT",
            "Nomor Pokok Wajib Pajak Badan Usaha",
            "Surat Keputusan Pendirian PT",
            "Nomor Pokok Wajib Pajak Badan Usaha",
            "Surat Keputusan Pendirian PT",
            "Nomor Pokok Wajib Pajak Badan Usaha",
            "Surat Keputusan Pendirian PT",
            "Nomor Pokok Wajib Pajak Badan Usaha",
          ],
          buttonText: "Order Now",
        },
        content: [
          "Sesuai Pasal 7 ayat (1) UU 40/2007 tentang Perseroan Terbatas, PT harus didirikan oleh minimal 2 orang. Orang di sini dapat berupa individu, baik warga negara Indonesia maupun asing, atau badan hukum Indonesia maupun asing.",
        ],
      },
      {
        name: "CV / Commanditaire Venootschap",
        slug: "cv-commanditaire-venootschap",
        package: {
          title: "Pendirian CV Standard",
          description:
            "Elevate your business's legal journey with our Legal Associate as your trusted partner. We provide legal assistance tailored to your company's needs and type. Our innovative solutions.",
          price: "2.500.000",
          fakePrice: "5.000.000",
          features: [
            "Konsultasi",
            "Penelusuran nama CV",
            "Surat Keputusan Pendirian CV",
            "Nomor Pokok Wajib Pajak Badan Usaha",
          ],
          buttonText: "Order Now",
        },
        content: [
          "Commanditaire Vennootschap (CV), atau yang sering disebut CV, adalah bentuk kemitraan bisnis tanpa batas modal minimum. CV didirikan oleh dua orang atau lebih, di mana sebagian anggotanya memiliki tanggung jawab penuh, sementara yang lainnya memiliki tanggung jawab terbatas.",
         ],
      },
      {
        name: "PT Perorangan",
        slug: "pt-perorangan",
        package: {
          title: "Pendirian PT Perorangan",
          description: "Detailed information about PT Perorangan.",
          price: "3.000.000",
          fakePrice: "6.000.000",
          features: [
            "Konsultasi",
            "Penelusuran nama PT Perorangan",
            "Surat Keputusan Pendirian PT Perorangan",
            "Nomor Pokok Wajib Pajak Badan Usaha",
          ],
          buttonText: "Order Now",
        },
        content: [
          "KTP & NPWP pemegang saham, Direksi dan Dewan Komisaris",
          "Khusus WNA melampirkan paspor",
          "Nomor telepon dan email perusahaan",
          "Mengisi formulir pendirian PT PMA",
          "Tanda tangan dokumen Notaris",
          "KBLI adalah kode bidang usaha di Indonesia. Di Legalitas.org kamu bisa pilih hingga 20 kode KBLI / bidang usaha",
         ],
      },
      {
        name: "New",
        slug: "new",
        package: {
          title: "New Service Package",
          description: "Detailed information about the new service.",
          price: "4.000.000",
          fakePrice: "8.000.000",
          features: [
            "Konsultasi",
            "Penelusuran nama",
            "Surat Keputusan",
            "Nomor Pokok Wajib Pajak",
          ],
          buttonText: "Order Now",
        },
      },
      {
        name: "PT PMA",
        slug: "pt-pma",
        package: {
          title: "Pendirian PT PMA",
          description: "Detailed information about PT PMA.",
          price: "5.000.000",
          fakePrice: "10.000.000",
          features: [
            "Konsultasi",
            "Penelusuran nama PT PMA",
            "Surat Keputusan Pendirian PT PMA",
            "Nomor Pokok Wajib Pajak Badan Usaha",
          ],
          buttonText: "Order Now",
        },
        content: [
          "Sesuai Peraturan Presiden 10/2021, penanaman modal dapat dilakukan oleh penanam modal dalam negeri dan asing. Penanam modal dalam negeri mencakup warga negara Indonesia, badan usaha Indonesia, dan pemerintah Indonesia. Penanam modal asing mencakup warga negara asing, badan usaha asing, dan pemerintah asing. Untuk mendirikan PT PMA bagi WNA, diperlukan dokumen paspor, dan untuk badan usaha asing, diperlukan dokumen legalitas dari negara asal.",
         ],
      },
      {
        name: "Firma",
        slug: "firma",
        package: {
          title: "Pendirian Firma",
          description: "Detailed information about Firma.",
          price: "3.500.000",
          fakePrice: "7.000.000",
          features: [
            "Konsultasi",
            "Penelusuran nama Firma",
            "Surat Keputusan Pendirian Firma",
            "Nomor Pokok Wajib Pajak Badan Usaha",
          ],
          buttonText: "Order Now",
        },
        content: [
          "Sesuai Peraturan Menteri Hukum dan Ham Nomor 17 tahun 2018, pendiri firma memberikan kuasa kepada notaris untuk mendaftarkan firma melalui SABU. Pendiri menyepakati nama, tempat kedudukan, bidang usaha, permodalan, dan pengurus dalam akta notaris.",
         ],
      },
      {
        name: "Persekutuan Perdata",
        slug: "persekutuan-perdata",
        package: {
          title: "Pendirian Persekutuan Perdata",
          description: "Detailed information about Persekutuan Perdata.",
          price: "4.500.000",
          fakePrice: "9.000.000",
          features: [
            "Konsultasi",
            "Penelusuran nama Persekutuan Perdata",
            "Surat Keputusan Pendirian Persekutuan Perdata",
            "Nomor Pokok Wajib Pajak Badan Usaha",
          ],
          buttonText: "Order Now",
        },
        content: [
          "Sesuai Pasal 1 butir (3) Permenkumham 17/2018, Persekutuan Perdata adalah persekutuan yang menjalankan profesi secara terus-menerus di mana setiap sekutu bertindak dan bertanggung jawab atas nama sendiri. Pasal 3 menyatakan bahwa pendiri atau sekutu memberikan kuasa kepada notaris untuk mendaftarkan Persekutuan Perdata melalui SABU.",
         ],
      },
      {
        name: "Perkumpulan",
        slug: "perkumpulan",
        package: {
          title: "Pendirian Perkumpulan",
          description: "Detailed information about Perkumpulan.",
          price: "3.000.000",
          fakePrice: "6.000.000",
          features: [
            "Konsultasi",
            "Penelusuran nama Perkumpulan",
            "Surat Keputusan Pendirian Perkumpulan",
            "Nomor Pokok Wajib Pajak Badan Usaha",
          ],
          buttonText: "Order Now",
        },
        content: [
          "KTP & NPWP pengurus Yayasan (Pembina, Pengawas, Ketua, Sekretaris & Bendahara)",
          "Nomor telepon dan email Yayasan",
          "Mengisi formulir pendirian Yayasan",
          "Tanda tangan dokumen Notaris",
          "KBLI adalah kode bidang usaha di Indonesia",
          "Di Legalitas.org kamu bisa pilih hingga 20 kode KBLI / bidang usaha",
         ],
      },
      {
        name: "Yayasan",
        slug: "yayasan",
        package: {
          title: "Pendirian Yayasan",
          description: "Detailed information about Yayasan.",
          price: "4.000.000",
          fakePrice: "8.000.000",
          features: [
            "Konsultasi",
            "Penelusuran nama Yayasan",
            "Surat Keputusan Pendirian Yayasan",
            "Nomor Pokok Wajib Pajak Badan Usaha",
          ],
          buttonText: "Order Now",
        },
        content: [
          "KTP & NPWP pengurus Yayasan (Pembina, Pengawas, Ketua, Sekretaris & Bendahara)",
          "Nomor telepon dan email Yayasan",
          "Mengisi formulir pendirian Yayasan",
          "Tanda tangan dokumen Notaris",
          "KBLI adalah kode bidang usaha di Indonesia",
          "Di Legalitas.org kamu bisa pilih hingga 20 kode KBLI / bidang usaha",
         ],
      },
    ],
  },
  {
    category: "PERIZINAN",
    items: [
      {
        name: "NIB & OSS",
        slug: "nib-oss",
        package: {
          title: "Registrasi NIB & OSS",
          description: "Detailed information about NIB & OSS.",
          price: "1.500.000",
          fakePrice: "3.000.000",
          features: ["Konsultasi", "Penelusuran NIB", "Pendaftaran OSS"],
          buttonText: "Order Now",
        },
        content: [
          "Nama & NIK",
          "Alamat Tinggal",
          "Bidang Usaha",
          "Lokasi Penanaman Modal",
          "Besaran Rencana Penanaman Modal",
          "Rencana Penggunaan Tenaga Kerja",
          
          "Di Legalitas.org kamu bisa pilih hingga 20 kode KBLI / bidang usaha",
         ],
      },
      {
        name: "Izin PKP",
        slug: "izin-pkp",
        package: {
          title: "Izin PKP",
          description: "Detailed information about Izin PKP.",
          price: "2.000.000",
          fakePrice: "4.000.000",
          features: [
            "Konsultasi",
            "Penelusuran Izin PKP",
            "Proses Pendaftaran PKP",
          ],
          buttonText: "Order Now",
        },
        content: [
          "Sesuai Pasal 1 butir (3) Permenkumham 17/2018, Persekutuan Perdata adalah persekutuan yang menjalankan profesi secara terus-menerus di mana setiap sekutu bertindak dan bertanggung jawab atas nama sendiri. Pasal 3 menyatakan bahwa pendiri atau sekutu memberikan kuasa kepada notaris untuk mendaftarkan Persekutuan Perdata melalui SABU.",
         ],
      },
      {
        name: "Izin Restoran",
        slug: "izin-restoran",
        package: {
          title: "Izin Restoran",
          description: "Detailed information about Izin Restoran.",
          price: "3.000.000",
          fakePrice: "6.000.000",
          features: [
            "Konsultasi",
            "Penelusuran Izin Restoran",
            "Proses Pendaftaran Izin Restoran",
          ],
          buttonText: "Order Now",
        },
        content: [
          "Sesuai Pasal 1 butir (3) Permenkumham 17/2018, Persekutuan Perdata adalah persekutuan yang menjalankan profesi secara terus-menerus di mana setiap sekutu bertindak dan bertanggung jawab atas nama sendiri. Pasal 3 menyatakan bahwa pendiri atau sekutu memberikan kuasa kepada notaris untuk mendaftarkan Persekutuan Perdata melalui SABU.",
         ],
      },
      {
        name: "Izin Konstruksi",
        slug: "izin-konstruksi",
        package: {
          title: "Izin Konstruksi",
          description: "Detailed information about Izin Konstruksi.",
          price: "4.000.000",
          fakePrice: "8.000.000",
          features: [
            "Konsultasi",
            "Penelusuran Izin Konstruksi",
            "Proses Pendaftaran Izin Konstruksi",
          ],
          buttonText: "Order Now",
        },
        content: [
          "Sesuai Pasal 1 butir (3) Permenkumham 17/2018, Persekutuan Perdata adalah persekutuan yang menjalankan profesi secara terus-menerus di mana setiap sekutu bertindak dan bertanggung jawab atas nama sendiri. Pasal 3 menyatakan bahwa pendiri atau sekutu memberikan kuasa kepada notaris untuk mendaftarkan Persekutuan Perdata melalui SABU.",
         ],
      },
      {
        name: "Izin PSE",
        slug: "izin-pse",
        package: {
          title: "Izin PSE",
          description: "Detailed information about Izin PSE.",
          price: "2.500.000",
          fakePrice: "5.000.000",
          features: [
            "Konsultasi",
            "Penelusuran Izin PSE",
            "Proses Pendaftaran Izin PSE",
          ],
          buttonText: "Order Now",
        },
        content: [
          "Sesuai Pasal 1 butir (3) Permenkumham 17/2018, Persekutuan Perdata adalah persekutuan yang menjalankan profesi secara terus-menerus di mana setiap sekutu bertindak dan bertanggung jawab atas nama sendiri. Pasal 3 menyatakan bahwa pendiri atau sekutu memberikan kuasa kepada notaris untuk mendaftarkan Persekutuan Perdata melalui SABU.",
         ],
      },
      {
        name: "Izin K3L",
        slug: "izin-k3l",
        package: {
          title: "Izin K3L",
          description: "Detailed information about Izin K3L.",
          price: "3.500.000",
          fakePrice: "7.000.000",
          features: [
            "Konsultasi",
            "Penelusuran Izin K3L",
            "Proses Pendaftaran Izin K3L",
          ],
          buttonText: "Order Now",
        },
        content: [
          "Sesuai Pasal 1 butir (3) Permenkumham 17/2018, Persekutuan Perdata adalah persekutuan yang menjalankan profesi secara terus-menerus di mana setiap sekutu bertindak dan bertanggung jawab atas nama sendiri. Pasal 3 menyatakan bahwa pendiri atau sekutu memberikan kuasa kepada notaris untuk mendaftarkan Persekutuan Perdata melalui SABU.",
         ],
      },
      {
        name: "Izin Yayasan",
        slug: "izin-yayasan",
        package: {
          title: "Izin Yayasan",
          description: "Detailed information about Izin Yayasan.",
          price: "4.000.000",
          fakePrice: "8.000.000",
          features: [
            "Konsultasi",
            "Penelusuran Izin Yayasan",
            "Proses Pendaftaran Izin Yayasan",
          ],
          buttonText: "Order Now",
        },
        content: [
          "Sesuai Pasal 1 butir (3) Permenkumham 17/2018, Persekutuan Perdata adalah persekutuan yang menjalankan profesi secara terus-menerus di mana setiap sekutu bertindak dan bertanggung jawab atas nama sendiri. Pasal 3 menyatakan bahwa pendiri atau sekutu memberikan kuasa kepada notaris untuk mendaftarkan Persekutuan Perdata melalui SABU.",
         ],
      },
      {
        name: "33++ Izin Lainnya",
        slug: "33-lainnya",
        package: {
          title: "33++ Izin Lainnya",
          description: "Detailed information about various other permits.",
          price: "4.500.000",
          fakePrice: "9.000.000",
          features: [
            "Konsultasi",
            "Penelusuran Izin",
            "Proses Pendaftaran Izin",
          ],
          buttonText: "Order Now",
        },
        content: [
          "Sesuai Pasal 1 butir (3) Permenkumham 17/2018, Persekutuan Perdata adalah persekutuan yang menjalankan profesi secara terus-menerus di mana setiap sekutu bertindak dan bertanggung jawab atas nama sendiri. Pasal 3 menyatakan bahwa pendiri atau sekutu memberikan kuasa kepada notaris untuk mendaftarkan Persekutuan Perdata melalui SABU.",
         ],
      },
    ],
  },
  {
    category: "LEGAL CONSULTATION",
    items: [
      {
        name: "Legal Opinion",
        slug: "legal-opinion",
        package: {
          title: "Legal Opinion",
          description: "Detailed information about Legal Opinion services.",
          price: "1.000.000",
          fakePrice: "2.000.000",
          features: ["Konsultasi", "Penyusunan Legal Opinion"],
          buttonText: "Order Now",
        },
      },
      {
        name: "Legal Advice",
        slug: "legal-advice",
        package: {
          title: "Legal Advice",
          description: "Detailed information about Legal Advice services.",
          price: "1.500.000",
          fakePrice: "3.000.000",
          features: ["Konsultasi", "Penyusunan Legal Advice"],
          buttonText: "Order Now",
        },
      },
      {
        name: "Legal Drafting",
        slug: "legal-drafting",
        package: {
          title: "Legal Drafting",
          description: "Detailed information about Legal Drafting services.",
          price: "2.000.000",
          fakePrice: "4.000.000",
          features: ["Konsultasi", "Penyusunan Legal Drafting"],
          buttonText: "Order Now",
        },
      },
      {
        name: "Contract Review",
        slug: "contract-review",
        package: {
          title: "Contract Review",
          description: "Detailed information about Contract Review services.",
          price: "2.500.000",
          fakePrice: "5.000.000",
          features: ["Konsultasi", "Penyusunan Contract Review"],
          buttonText: "Order Now",
        },
      },
    ],
  },
  {
    category: "LEGAL TRAINING",
    items: [
      {
        name: "Corporate Law",
        slug: "corporate-law",
        package: {
          title: "Corporate Law Training",
          description: "Detailed information about Corporate Law Training.",
          price: "3.000.000",
          fakePrice: "6.000.000",
          features: ["Konsultasi", "Pelatihan Hukum Korporat"],
          buttonText: "Order Now",
        },
      },
      {
        name: "Contract Law",
        slug: "contract-law",
        package: {
          title: "Contract Law Training",
          description: "Detailed information about Contract Law Training.",
          price: "3.500.000",
          fakePrice: "7.000.000",
          features: ["Konsultasi", "Pelatihan Hukum Kontrak"],
          buttonText: "Order Now",
        },
      },
      {
        name: "Intellectual Property",
        slug: "intellectual-property",
        package: {
          title: "Intellectual Property Training",
          description:
            "Detailed information about Intellectual Property Training.",
          price: "4.000.000",
          fakePrice: "8.000.000",
          features: ["Konsultasi", "Pelatihan Hak Kekayaan Intelektual"],
          buttonText: "Order Now",
        },
      },
      {
        name: "Employment Law",
        slug: "employment-law",
        package: {
          title: "Employment Law Training",
          description: "Detailed information about Employment Law Training.",
          price: "3.500.000",
          fakePrice: "7.000.000",
          features: ["Konsultasi", "Pelatihan Hukum Ketenagakerjaan"],
          buttonText: "Order Now",
        },
      },
    ],
  },
];

export default servicesData;
