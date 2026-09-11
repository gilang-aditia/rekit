export default function Introduction() {
  const code = 'rounded bg-code px-1 py-0.5 font-mono text-[0.85em]';
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Introduction</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Komponen React siap pakai yang kamu miliki sendiri, dibangun dengan Tailwind CSS v4.
        </p>
      </div>
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Rakit UI bukan component library biasa. Alih-alih memanggil komponen dari{' '}
          <code className={code}>node_modules</code>, CLI-nya menyalin source code komponen
          langsung ke dalam project kamu.
        </p>
        <p className="text-muted-foreground">
          <strong className="text-foreground">Apa untungnya?</strong>
          <br />
          File seperti <code className={code}>src/components/ui/button.tsx</code> ada di repo
          kamu sendiri. Mau mengubah markup, animasi, atau menambah variant baru, tinggal edit
          filenya — tidak perlu menunggu rilis baru dan tidak terbatas pada props yang
          kebetulan di-expose.
        </p>
        <p className="text-muted-foreground">
          <strong className="text-foreground">Jadi tidak ada yang di-install?</strong>
          <br />
          Ada satu: <code className={code}>@moonblanck/rakit-ui</code>. Paket itu berisi
          primitive headless — pengelolaan fokus, navigasi keyboard, dan atribut ARIA — yang
          dipakai bersama oleh banyak komponen dan tidak masuk akal kalau disalin ulang di
          setiap project. CLI memasangnya otomatis saat kamu menambahkan komponen pertama.
        </p>
        <p className="text-muted-foreground">
          Primitive tersebut dibangun di atas{' '}
          <a
            href="https://www.radix-ui.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-foreground underline underline-offset-4"
          >
            Radix UI
          </a>{' '}
          (MIT), dengan struktur komponen yang mengikuti pola shadcn/ui.
        </p>
      </div>
    </>
  );
}
