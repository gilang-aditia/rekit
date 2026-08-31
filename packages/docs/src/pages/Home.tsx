import { Link } from 'react-router-dom';
import { Button } from 'rakit-ui';
import { Palette, Terminal } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-16 px-4 py-16">
      <div className="space-y-6 max-w-3xl">
        <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl text-balance">
          Rakit UI
        </h1>
        <p className="text-xl text-muted-foreground text-balance">
          Library komponen UI buatan lokal yang cantik, responsif, dan mudah di kustomisasi.
          Didesain khusus untuk menyatukan visi desainer dan frontend developer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl text-left">
        {/* Designer Selection */}
        <div className="group relative flex flex-col justify-between gap-6 overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg dark:hover:shadow-primary/5">
          <div className="space-y-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Palette className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Untuk Desainer</h2>
            <p className="text-muted-foreground leading-relaxed">
              Pahami sistem warna yang dipakai aplikasi mobile dan web kami, lalu serahkan desain yang langsung bisa dikerjakan developer tanpa bolak-balik revisi.
            </p>
          </div>
          <div className="pt-4">
            <Button size="lg" variant="outline" className="w-full sm:w-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
              <Link to="/design">
                Panduan Desainer
              </Link>
            </Button>
          </div>
        </div>

        {/* Developer Selection */}
        <div className="group relative flex flex-col justify-between gap-6 overflow-hidden rounded-2xl border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg dark:hover:shadow-primary/5">
          <div className="space-y-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Terminal className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Untuk Developer</h2>
            <p className="text-muted-foreground leading-relaxed">
              Salin dan tempel komponen ke dalam aplikasi Anda. Komponen yang dapat diakses, dapat disesuaikan sepenuhnya, dan open source.
            </p>
          </div>
          <div className="pt-4">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/docs">
                Baca Dokumentasi
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
