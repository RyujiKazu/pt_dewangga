export type Project = {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  status: 'Tersedia' | 'Segera Hadir' | 'Tahap Pembangunan';
};

// Data proyek berikut adalah placeholder dan harus diganti dengan data resmi perusahaan.
export const projects: Project[] = [
  {
    id: 1,
    name: 'Dewangga Residence',
    location: 'Bandung, Jawa Barat',
    description: 'Hunian modern dalam lingkungan tenang dengan akses menuju pusat kota yang mudah.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=84',
    status: 'Tersedia',
  },
  {
    id: 2,
    name: 'Aruna Garden',
    location: 'Bogor, Jawa Barat',
    description: 'Kawasan residensial hijau yang dirancang untuk kenyamanan keluarga masa kini.',
    image:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=84',
    status: 'Tahap Pembangunan',
  },
  {
    id: 3,
    name: 'Niskala Heights',
    location: 'Tangerang Selatan, Banten',
    description: 'Arsitektur kontemporer dengan ruang hidup lapang dan fasilitas terintegrasi.',
    image:
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=84',
    status: 'Segera Hadir',
  },
  {
    id: 4,
    name: 'Samara Living',
    location: 'Bekasi, Jawa Barat',
    description: 'Hunian fungsional dengan konektivitas strategis untuk kehidupan yang dinamis.',
    image:
      'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=84',
    status: 'Tersedia',
  },
  {
    id: 5,
    name: 'The Navya',
    location: 'Depok, Jawa Barat',
    description: 'Keseimbangan desain elegan, efisiensi ruang, dan lingkungan yang asri.',
    image:
      'https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1200&q=84',
    status: 'Tahap Pembangunan',
  },
  {
    id: 6,
    name: 'Cendana Park',
    location: 'Karawang, Jawa Barat',
    description: 'Cluster eksklusif yang menawarkan privasi, keamanan, dan potensi investasi.',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=84',
    status: 'Segera Hadir',
  },
];
