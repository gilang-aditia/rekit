/**
 * Scene 3D berjalan di dalam iframe ber-sandbox, jadi ia tidak bisa membaca kelas
 * tema milik halaman induk. Potongan di bawah disuntikkan ke dalam srcDoc: CSS-nya
 * menyiapkan palet terang, dan script-nya menunggu postMessage dari induk.
 *
 * Sengaja tidak ada nilai tema yang dibakukan ke dalam string ini — kalau srcDoc
 * ikut berubah saat tema berganti, iframe akan dimuat ulang dan scene-nya restart.
 */
export const THEME_BRIDGE = `
<style>
:root[data-theme="light"]{
  --bg:#f6f6f4;
  --ink:#17171b;
  --dim:rgba(23,23,27,.45);
}
/* Kata raksasa di latar: putih samar di tema gelap, jadi harus dibalik. */
:root[data-theme="light"] #bg h1{ color:rgba(23,23,27,.10) }
:root[data-theme="light"] #dof{ background:rgba(255,255,255,.05) }
/* Vignette gelap akan tampak seperti noda di latar terang; dilembutkan. */
:root[data-theme="light"] #vig{
  background:radial-gradient(120% 90% at 50% 45%,rgba(0,0,0,0) 45%,rgba(20,20,28,.16) 100%);
}
:root[data-theme="light"] #hint{ color:rgba(23,23,27,.45) }
:root[data-theme="light"] #hint b{ color:rgba(23,23,27,.72) }
/* overlay mencerahkan di atas dasar gelap; di dasar terang multiply yang benar. */
:root[data-theme="light"] #grain{ mix-blend-mode:multiply; opacity:.04 }
</style>
<script>
(function () {
  function apply(theme) {
    if (theme !== 'light' && theme !== 'dark') return;
    document.documentElement.dataset.theme = theme;
  }
  window.addEventListener('message', function (event) {
    var data = event.data;
    if (data && data.type === 'rakit-theme') apply(data.theme);
  });
  // Beri tahu induk kalau scene sudah siap menerima tema.
  try { parent.postMessage({ type: 'rakit-theme-ready' }, '*'); } catch (e) {}
})();
</script>
`

/** Warna dasar host dan iframe selagi scene dimuat, agar tidak ada kedip hitam. */
export const FRAME_BACKGROUND = { light: '#f6f6f4', dark: '#08080a' } as const
